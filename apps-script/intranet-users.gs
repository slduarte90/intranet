const SPREADSHEET_ID = "1GFOBNEJa7gHAPkgpdWQ7Xs3p6U2-w8A0ClNSMqlNSKs";
const ADMIN_EMAILS = ["sidney.duarte@zipcontabilidade.com.br"];
const DEFAULT_PERMISSIONS = "ferramentas.analisador-extratos,aprendizado.cursos,aprendizado.trilhas";
const USER_TYPES = ["administrador", "colaborador"];
const USER_STATUSES = ["ativo", "inativo"];
const ZIP_EMAIL_DOMAIN = "zipcontabilidade.com.br";

function doPost(event) {
  try {
    const payload = JSON.parse((event.postData && event.postData.contents) || "{}");
    const action = payload.action || "";

    if (action === "registerLogin") {
      return jsonResponse(registerLogin(payload));
    }

    if (action === "listUsers") {
      return jsonResponse({ usuarios: listUsers() });
    }

    if (action === "saveUser") {
      return jsonResponse(saveUser(payload.usuario || {}));
    }

    return jsonResponse({ erro: "Acao invalida" }, 400);
  } catch (error) {
    return jsonResponse({ erro: error.message || "Erro interno" }, 500);
  }
}

function doGet(event) {
  const action = event.parameter.action || "listUsers";

  if (action === "listUsers") {
    return jsonResponse({ usuarios: listUsers() });
  }

  return jsonResponse({ status: "online" });
}

function registerLogin(payload) {
  const usuario = payload.usuario || {};
  const now = new Date().toISOString();
  const email = normalizeEmail(usuario.email);

  if (!email) {
    throw new Error("E-mail obrigatorio");
  }

  const currentUser = findUserByEmail(email);
  const baseUser = currentUser || {};
  const isAdmin = ADMIN_EMAILS.indexOf(email) >= 0 || baseUser.tipo === "administrador";
  const savedUser = saveUser({
    email,
    nome: baseUser.nome || usuario.nome || email,
    login: baseUser.login || usuario.login || email.split("@")[0],
    tipo: isAdmin ? "administrador" : (baseUser.tipo || "colaborador"),
    status: baseUser.status || "ativo",
    permissoes: isAdmin ? "*" : (baseUser.permissoes || usuario.permissoes || DEFAULT_PERMISSIONS),
    ultimoLogin: now,
    primeiroLogin: baseUser.primeiroLogin || now,
    origem: payload.origem || "login",
    googleSub: usuario.googleSub || baseUser.googleSub || "",
    atualizadoEm: now,
    observacoes: baseUser.observacoes || "",
  }).usuario;

  appendLog({
    dataHora: now,
    email,
    nome: savedUser.nome,
    login: savedUser.login,
    tipo: savedUser.tipo,
    origem: payload.origem || "login",
    userAgent: payload.userAgent || "",
    acao: "login",
  });

  return { usuario: savedUser };
}

function saveUser(usuario) {
  const now = new Date().toISOString();
  const email = normalizeEmail(usuario.email);

  if (!email) {
    throw new Error("E-mail obrigatorio");
  }

  const sheet = getSheet("Usuarios");
  const values = sheet.getDataRange().getValues();
  const rowIndex = values.findIndex((row, index) => index > 0 && normalizeEmail(row[0]) === email);
  const baseUser = rowIndex >= 0 ? rowToUser(values[rowIndex]) : {};
  const isAdmin = ADMIN_EMAILS.indexOf(email) >= 0 || usuario.tipo === "administrador" || usuario.permissoes === "*";
  const nome = String(usuario.nome || baseUser.nome || email).trim();
  const login = normalizeLogin(usuario.login || baseUser.login || email.split("@")[0]);
  const tipo = isAdmin ? "administrador" : String(usuario.tipo || baseUser.tipo || "colaborador").trim();
  const status = String(usuario.status || baseUser.status || "ativo").trim();
  const permissoes = isAdmin ? "*" : String(usuario.permissoes || baseUser.permissoes || DEFAULT_PERMISSIONS).trim();
  validateUserFields({
    email,
    nome,
    login,
    tipo,
    status,
    permissoes,
    allowExternalEmail: login === "teste",
  });
  const row = [
    email,
    nome,
    login,
    tipo,
    status,
    permissoes,
    usuario.ultimoLogin || baseUser.ultimoLogin || "",
    usuario.primeiroLogin || baseUser.primeiroLogin || "",
    usuario.origem || "configuracao",
    usuario.googleSub || baseUser.googleSub || "",
    usuario.atualizadoEm || now,
    usuario.observacoes || baseUser.observacoes || "",
  ];

  if (rowIndex >= 0) {
    sheet.getRange(rowIndex + 1, 1, 1, row.length).setValues([row]);
  } else {
    sheet.appendRow(row);
  }

  return { usuario: rowToUser(row) };
}

function listUsers() {
  const values = getSheet("Usuarios").getDataRange().getValues();
  return values.slice(1).filter((row) => row[0]).map(rowToUser);
}

function findUserByEmail(email) {
  return listUsers().find((usuario) => normalizeEmail(usuario.email) === normalizeEmail(email));
}

function appendLog(log) {
  getSheet("Logs").appendRow([
    log.dataHora,
    log.email,
    log.nome,
    log.login,
    log.tipo,
    log.origem,
    log.userAgent,
    log.acao,
  ]);
}

function rowToUser(row) {
  return {
    email: String(row[0] || ""),
    nome: String(row[1] || ""),
    login: String(row[2] || ""),
    tipo: String(row[3] || "colaborador"),
    status: String(row[4] || "ativo"),
    permissoes: String(row[5] || ""),
    ultimoLogin: String(row[6] || ""),
    primeiroLogin: String(row[7] || ""),
    origem: String(row[8] || ""),
    googleSub: String(row[9] || ""),
    atualizadoEm: String(row[10] || ""),
    observacoes: String(row[11] || ""),
  };
}

function getSheet(name) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(name);

  if (!sheet) {
    throw new Error(`Aba nao encontrada: ${name}`);
  }

  return sheet;
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function normalizeLogin(login) {
  return String(login || "").trim().toLowerCase();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateUserFields(usuario) {
  if (!usuario.email || !isValidEmail(usuario.email)) {
    throw new Error("E-mail valido obrigatorio");
  }

  if (!usuario.allowExternalEmail && usuario.email.split("@")[1] !== ZIP_EMAIL_DOMAIN) {
    throw new Error("E-mail precisa ser @zipcontabilidade.com.br");
  }

  if (!usuario.nome || usuario.nome.length < 3) {
    throw new Error("Nome obrigatorio");
  }

  if (!usuario.login || !/^[a-z0-9._-]+$/.test(usuario.login)) {
    throw new Error("Login invalido");
  }

  if (USER_TYPES.indexOf(usuario.tipo) < 0) {
    throw new Error("Tipo de usuario invalido");
  }

  if (USER_STATUSES.indexOf(usuario.status) < 0) {
    throw new Error("Status invalido");
  }

  if (!usuario.permissoes) {
    throw new Error("Permissoes obrigatorias");
  }
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
