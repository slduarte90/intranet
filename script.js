const views = document.querySelectorAll(".auth-view");
const loginPage = document.querySelector(".login-page");

const loginForm = document.querySelector("#login-form");
const usuarioInput = document.querySelector("#usuario");
const senhaInput = document.querySelector("#senha");
const senhaToggle = document.querySelector("#senha-toggle");
const errorMessage = document.querySelector("#login-error");
const successMessage = document.querySelector("#login-success");
const googleButtonContainer = document.querySelector("#google-signin-button");
const googleFallbackButton = document.querySelector("#google-login-fallback");
const googleError = document.querySelector("#google-error");

const forgotPasswordLink = document.querySelector("#forgot-password-link");
const forgotForm = document.querySelector("#forgot-form");
const emailInput = document.querySelector("#email-recuperacao");
const forgotError = document.querySelector("#forgot-error");
const resetEmailPreview = document.querySelector("#reset-email-preview");
const resetPasswordLink = document.querySelector("#reset-password-link");
const backToLoginButton = document.querySelector("#back-to-login");

const resetForm = document.querySelector("#reset-form");
const newPasswordInput = document.querySelector("#nova-senha");
const confirmPasswordInput = document.querySelector("#confirmar-senha");
const resetError = document.querySelector("#reset-error");
const resetSuccess = document.querySelector("#reset-success");
const backToLoginResetButton = document.querySelector("#back-to-login-reset");
const appShell = document.querySelector("#app-shell");
const sidebarToggle = document.querySelector("#sidebar-toggle");
const logoutButton = document.querySelector("#logout-button");
const toolsGrid = document.querySelector("#tools-grid");
const toolsEmpty = document.querySelector("#tools-empty");
const navTools = document.querySelector("#nav-tools");
const navLearning = document.querySelector("#nav-learning");
const workspaceEyebrow = document.querySelector("#workspace-eyebrow");
const workspaceTitle = document.querySelector("#workspace-title");
const toolsSection = document.querySelector("#tools-section");
const learningSection = document.querySelector("#learning-section");

const AUTH_METHODS = {
  PASSWORD: "senha",
  GOOGLE: "google",
};

const USER_STATUS = {
  ACTIVE: "ativo",
  INACTIVE: "inativo",
};

const USER_TYPES = {
  INTERNAL: "interno",
  CLIENT: "cliente",
};

const ACTIONS = {
  VIEW: "visualizar",
  CREATE: "criar",
  EDIT: "editar",
  DELETE: "excluir",
  APPROVE: "aprovar",
  EXPORT: "exportar",
  CONFIGURE: "configurar",
};

// Preencha com o Client ID web do Google Cloud para ativar o login real.
const googleClientId = "403916379779-9ioro1su7nq24uip6l8fadjv77vomn1b.apps.googleusercontent.com";

const defaultClients = [
  {
    id: "zip",
    nome: "ZIP Contabilidade",
    documento: "",
    status: USER_STATUS.ACTIVE,
    dominioPermitido: "zipcontabilidade.com.br",
    modulosContratados: ["ferramentas"],
  },
  {
    id: "cliente-demo",
    nome: "Cliente Demonstracao",
    documento: "",
    status: USER_STATUS.ACTIVE,
    dominioPermitido: "",
    modulosContratados: [],
  },
];

const defaultModules = [
  { id: "ferramentas", chave: "ferramentas", nome: "Ferramentas", status: USER_STATUS.ACTIVE },
  { id: "aprendizado", chave: "aprendizado", nome: "Aprendizado", status: USER_STATUS.ACTIVE },
];

const defaultPermissionProfiles = [
  {
    id: "admin_zip",
    nome: "Administrador ZIP",
    tipo: USER_TYPES.INTERNAL,
    permissoes: [
      {
        clienteId: "*",
        moduloId: "*",
        acoes: Object.values(ACTIONS),
      },
    ],
  },
  {
    id: "colaborador_zip",
    nome: "Colaborador ZIP",
    tipo: USER_TYPES.INTERNAL,
    permissoes: [
      {
        clienteId: "*",
        moduloId: "ferramentas",
        acoes: [ACTIONS.VIEW],
      },
      {
        clienteId: "*",
        moduloId: "aprendizado",
        acoes: [ACTIONS.VIEW],
      },
    ],
  },
  {
    id: "cliente_padrao",
    nome: "Cliente usuario",
    tipo: USER_TYPES.CLIENT,
    permissoes: [],
  },
];

const defaultUsers = [
  {
    id: "usr-teste",
    nomeCompleto: "SIDNEY LUIZ DUARTE",
    email: "sidneyluizduarte@gmail.com",
    login: "teste",
    senha: "123456",
    tipo: USER_TYPES.INTERNAL,
    status: USER_STATUS.ACTIVE,
    clienteId: "zip",
    clientesPermitidos: ["*"],
    modulosPermitidos: ["*"],
    perfilId: "admin_zip",
    authMethods: [AUTH_METHODS.PASSWORD, AUTH_METHODS.GOOGLE],
    dominioPermitido: "",
    googleSub: "",
    acessos: [
      {
        clienteId: "*",
        moduloId: "*",
        acoes: Object.values(ACTIONS),
      },
    ],
    isTestUser: true,
  },
];

const defaultTools = [
  {
    id: "analisador-extratos",
    nome: "Analisador de Extratos",
    descricao: "Analise, categorizacao e exportacao de extratos bancarios.",
    url: "https://extract.zipcontabilidade.com.br",
    moduloId: "ferramentas",
    status: USER_STATUS.ACTIVE,
    abrirNovaAba: true,
  },
];

const clients = loadCollection("zipClients", defaultClients, normalizeClient);
const modules = loadCollection("zipModules", defaultModules, normalizeModule);
const tools = loadCollection("zipTools", defaultTools, normalizeTool);
const permissionProfiles = loadCollection(
  "zipPermissionProfiles",
  defaultPermissionProfiles,
  normalizePermissionProfile
);
const users = loadUsers();
let activeResetUser = null;
let currentSession = null;
let currentUser = null;

saveCollection("zipClients", clients);
saveCollection("zipModules", modules);
saveCollection("zipTools", tools);
saveCollection("zipPermissionProfiles", permissionProfiles);
saveUsers();

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function normalizeLogin(login) {
  return String(login || "").trim().toLowerCase();
}

function uniqueList(values) {
  return [...new Set((values || []).filter(Boolean))];
}

function normalizeActions(actions) {
  const validActions = Object.values(ACTIONS);
  const normalizedActions = Array.isArray(actions) ? actions : [];

  if (normalizedActions.includes("*")) {
    return ["*"];
  }

  return uniqueList(normalizedActions.filter((action) => validActions.includes(action)));
}

function normalizeAccess(access) {
  return {
    clienteId: access.clienteId || "*",
    moduloId: access.moduloId || "*",
    acoes: normalizeActions(access.acoes || [ACTIONS.VIEW]),
  };
}

function normalizeClient(client) {
  return {
    id: client.id || "",
    nome: client.nome || "",
    documento: client.documento || "",
    status: client.status || USER_STATUS.ACTIVE,
    dominioPermitido: normalizeLogin(client.dominioPermitido || ""),
    modulosContratados: uniqueList(client.modulosContratados || []),
  };
}

function normalizeModule(module) {
  return {
    id: module.id || module.chave || "",
    chave: module.chave || module.id || "",
    nome: module.nome || "",
    status: module.status || USER_STATUS.ACTIVE,
  };
}

function normalizeTool(tool) {
  return {
    id: tool.id || "",
    nome: tool.nome || "",
    descricao: tool.descricao || "",
    url: tool.url || "",
    moduloId: tool.moduloId || "",
    status: tool.status || USER_STATUS.ACTIVE,
    abrirNovaAba: tool.abrirNovaAba !== false,
  };
}

function normalizePermissionProfile(profile) {
  return {
    id: profile.id || "",
    nome: profile.nome || "",
    tipo: profile.tipo || USER_TYPES.CLIENT,
    permissoes: Array.isArray(profile.permissoes)
      ? profile.permissoes.map(normalizeAccess)
      : [],
  };
}

function normalizeAuthMethods(user) {
  const authMethods = Array.isArray(user.authMethods) ? user.authMethods : [];
  const legacyAuthMethod = user.authMethod || user.tipoAutenticacao || "";

  if (authMethods.length > 0) {
    return uniqueList(
      authMethods.filter((method) =>
        [AUTH_METHODS.PASSWORD, AUTH_METHODS.GOOGLE].includes(method)
      )
    );
  }

  if (legacyAuthMethod === "ambos") {
    return [AUTH_METHODS.PASSWORD, AUTH_METHODS.GOOGLE];
  }

  if ([AUTH_METHODS.PASSWORD, AUTH_METHODS.GOOGLE].includes(legacyAuthMethod)) {
    return [legacyAuthMethod];
  }

  return [AUTH_METHODS.PASSWORD];
}

function normalizeUser(user) {
  const login = user.login || user.usuario || "";
  const normalizedUser = {
    id: user.id || `usr-${normalizeLogin(login)}`,
    nomeCompleto: user.nomeCompleto || "",
    email: normalizeEmail(user.email || ""),
    login,
    senha: user.senha || "",
    tipo: user.tipo || USER_TYPES.CLIENT,
    status: user.status || USER_STATUS.ACTIVE,
    clienteId: user.clienteId || "",
    clientesPermitidos: uniqueList(user.clientesPermitidos || []),
    modulosPermitidos: uniqueList(user.modulosPermitidos || []),
    perfilId: user.perfilId || "",
    authMethods: normalizeAuthMethods(user),
    dominioPermitido: normalizeLogin(user.dominioPermitido || ""),
    googleSub: user.googleSub || "",
    acessos: Array.isArray(user.acessos) ? user.acessos.map(normalizeAccess) : [],
    isTestUser: Boolean(user.isTestUser),
  };

  if (normalizeLogin(login) === "teste" || user.id === "usr-teste") {
    return {
      ...defaultUsers[0],
      senha: normalizedUser.senha || "123456",
      googleSub: normalizedUser.googleSub,
      acessos: normalizedUser.acessos.length > 0 ? normalizedUser.acessos : defaultUsers[0].acessos,
    };
  }

  return normalizedUser;
}

function loadCollection(storageKey, defaultCollection, normalizer) {
  try {
    const storedCollection = JSON.parse(localStorage.getItem(storageKey));

    if (Array.isArray(storedCollection) && storedCollection.length > 0) {
      const normalizedCollection = storedCollection.map(normalizer);
      const missingDefaults = defaultCollection
        .map((item) => normalizer({ ...item }))
        .filter(
          (defaultItem) =>
            defaultItem.id &&
            !normalizedCollection.some((storedItem) => storedItem.id === defaultItem.id)
        );

      return [...normalizedCollection, ...missingDefaults];
    }
  } catch {
    return defaultCollection.map((item) => normalizer({ ...item }));
  }

  return defaultCollection.map((item) => normalizer({ ...item }));
}

function saveCollection(storageKey, collection) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(collection));
  } catch {
    return;
  }
}

function loadUsers() {
  const normalizedUsers = loadCollection("zipUsers", defaultUsers, normalizeUser);
  const hasTestUser = normalizedUsers.some((user) => user.id === "usr-teste");

  if (!hasTestUser) {
    normalizedUsers.push({ ...defaultUsers[0] });
  }

  return normalizedUsers;
}

function saveUsers() {
  saveCollection("zipUsers", users);
}

function getClientById(clientId) {
  return clients.find((client) => client.id === clientId);
}

function getProfileById(profileId) {
  return permissionProfiles.find((profile) => profile.id === profileId);
}

function getModuleById(moduleId) {
  return modules.find((module) => module.id === moduleId || module.chave === moduleId);
}

function getUserAccess(user) {
  if (Array.isArray(user.acessos) && user.acessos.length > 0) {
    return user.acessos;
  }

  const profile = getProfileById(user.perfilId);
  return profile ? profile.permissoes : [];
}

function hasActionAccess(user, moduloId, action) {
  return getUserAccess(user).some((access) => {
    const moduleMatches = access.moduloId === "*" || access.moduloId === moduloId;
    const actionMatches = access.acoes.includes("*") || access.acoes.includes(action);

    return moduleMatches && actionMatches;
  });
}

function canAccessTool(user, tool) {
  const linkedModule = getModuleById(tool.moduloId);

  return (
    tool.status === USER_STATUS.ACTIVE &&
    linkedModule &&
    linkedModule.status === USER_STATUS.ACTIVE &&
    hasActionAccess(user, tool.moduloId, ACTIONS.VIEW)
  );
}

function getAvailableTools(user) {
  return tools.filter((tool) => canAccessTool(user, tool));
}

function canAccessLearning(user) {
  return hasActionAccess(user, "aprendizado", ACTIONS.VIEW);
}

function hasAuthMethod(user, authMethod) {
  return user.authMethods.includes(authMethod);
}

function isActiveUser(user) {
  return user && user.status === USER_STATUS.ACTIVE;
}

function canUsePassword(user) {
  return isActiveUser(user) && hasAuthMethod(user, AUTH_METHODS.PASSWORD);
}

function getAllowedGoogleDomain(user) {
  const linkedClient = getClientById(user.clienteId);
  return user.dominioPermitido || (linkedClient ? linkedClient.dominioPermitido : "");
}

function canUseGoogle(user, hostedDomain) {
  const allowedDomain = getAllowedGoogleDomain(user);

  if (!isActiveUser(user) || !hasAuthMethod(user, AUTH_METHODS.GOOGLE)) {
    return false;
  }

  return !allowedDomain || normalizeLogin(hostedDomain) === allowedDomain;
}

function findUserByEmail(email) {
  return users.find((user) => normalizeEmail(user.email) === normalizeEmail(email));
}

function getResetTokens() {
  try {
    const resetTokens = JSON.parse(localStorage.getItem("zipResetTokens"));
    return Array.isArray(resetTokens) ? resetTokens : [];
  } catch {
    return [];
  }
}

function saveResetTokens(resetTokens) {
  try {
    localStorage.setItem("zipResetTokens", JSON.stringify(resetTokens));
  } catch {
    return;
  }
}

function createResetToken(user) {
  if (user.isTestUser) {
    return "teste-reset-token";
  }

  const token = `reset-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const resetTokens = getResetTokens().filter((item) => item.email !== user.email);

  resetTokens.push({
    token,
    email: user.email,
    createdAt: new Date().toISOString(),
  });

  saveResetTokens(resetTokens);
  return token;
}

function findResetUserByToken(token) {
  if (token === "teste-reset-token") {
    return users.find((user) => user.isTestUser);
  }

  const resetToken = getResetTokens().find((item) => item.token === token);
  return resetToken ? findUserByEmail(resetToken.email) : null;
}

function getResetTokenFromHash() {
  const [, queryString = ""] = window.location.hash.split("?");
  return new URLSearchParams(queryString).get("token");
}

function findUserByCredentials(identifier, senha) {
  const normalizedIdentifier = normalizeLogin(identifier);

  return users.find(
    (user) =>
      canUsePassword(user) &&
      (normalizeLogin(user.login) === normalizedIdentifier ||
        normalizeEmail(user.email) === normalizedIdentifier) &&
      (user.senha === senha || (user.isTestUser && senha === "123456"))
  );
}

function buildSession(user, authMethod) {
  return {
    userId: user.id,
    nomeCompleto: user.nomeCompleto,
    email: user.email,
    login: user.login,
    tipo: user.tipo,
    clienteId: user.clienteId,
    perfilId: user.perfilId,
    authMethod,
    clientesPermitidos: user.clientesPermitidos,
    modulosPermitidos: user.modulosPermitidos,
    acessos: getUserAccess(user),
    loggedAt: new Date().toISOString(),
  };
}

function startSession(user, authMethod) {
  currentSession = buildSession(user, authMethod);

  try {
    sessionStorage.setItem("zipCurrentSession", JSON.stringify(currentSession));
  } catch {
    return;
  }
}

function clearToolsGrid() {
  while (toolsGrid.firstChild) {
    toolsGrid.removeChild(toolsGrid.firstChild);
  }
}

function createToolCard(tool) {
  const card = document.createElement("article");
  card.className = "tool-card";

  const icon = document.createElement("div");
  icon.className = "tool-card__icon";
  icon.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0-5 5L4 17v3h3l5.7-5.7a4 4 0 0 0 5-5l-2.4 2.4-3-3 2.4-2.4z" /></svg>';

  const title = document.createElement("h2");
  title.textContent = tool.nome;

  const description = document.createElement("p");
  description.textContent = tool.descricao;

  const action = document.createElement("a");
  action.className = "tool-card__action";
  action.href = tool.url;
  action.target = "_blank";
  action.rel = "noopener noreferrer";
  action.textContent = "Abrir ferramenta";

  card.append(icon, title, description, action);
  return card;
}

function renderAuthenticatedApp(user) {
  currentUser = user;
  const availableTools = getAvailableTools(user);

  clearToolsGrid();
  availableTools.forEach((tool) => {
    toolsGrid.appendChild(createToolCard(tool));
  });

  toolsEmpty.hidden = availableTools.length > 0;
  navLearning.hidden = !canAccessLearning(user);
  setWorkspaceSection("tools");
  loginPage.classList.add("is-authenticated");
  appShell.hidden = false;
}

function setWorkspaceSection(section) {
  const isTools = section === "tools";
  const isLearning = section === "learning";

  toolsSection.hidden = !isTools;
  learningSection.hidden = !isLearning;
  navTools.classList.toggle("is-active", isTools);
  navLearning.classList.toggle("is-active", isLearning);

  if (isTools) {
    workspaceEyebrow.textContent = "Ferramentas";
    workspaceTitle.textContent = "Ferramentas internas";
  }

  if (isLearning) {
    workspaceEyebrow.textContent = "Aprendizado";
    workspaceTitle.textContent = "Aprendizado";
  }
}

function logout() {
  currentSession = null;
  currentUser = null;
  sessionStorage.removeItem("zipCurrentSession");
  appShell.hidden = true;
  loginPage.classList.remove("is-authenticated");
  loginForm.reset();
  clearLoginError();
  clearLoginSuccess();
  clearGoogleError();
  showView(loginForm);
  window.location.hash = "";
}

function showView(viewToShow) {
  views.forEach((view) => {
    view.hidden = view !== viewToShow;
  });
}

function clearLoginError() {
  loginForm.classList.remove("is-invalid");
  usuarioInput.removeAttribute("aria-invalid");
  senhaInput.removeAttribute("aria-invalid");
  errorMessage.hidden = true;
}

function clearLoginSuccess() {
  loginForm.classList.remove("is-valid");
  successMessage.hidden = true;
}

function clearGoogleError() {
  googleError.hidden = true;
  googleError.textContent = "";
}

function clearForgotState() {
  forgotForm.classList.remove("is-invalid");
  emailInput.removeAttribute("aria-invalid");
  forgotError.hidden = true;
  resetEmailPreview.hidden = true;
}

function clearResetState() {
  resetForm.classList.remove("is-invalid");
  newPasswordInput.removeAttribute("aria-invalid");
  confirmPasswordInput.removeAttribute("aria-invalid");
  resetError.hidden = true;
  resetError.textContent = "";
  resetSuccess.hidden = true;
}

function showLoginError() {
  clearLoginSuccess();
  clearGoogleError();
  loginForm.classList.add("is-invalid");
  usuarioInput.setAttribute("aria-invalid", "true");
  senhaInput.setAttribute("aria-invalid", "true");
  errorMessage.hidden = false;
}

function showLoginSuccess(user, authMethod) {
  if (user && authMethod) {
    startSession(user, authMethod);
    renderAuthenticatedApp(user);
    return;
  }

  clearLoginError();
  clearGoogleError();
  loginForm.classList.add("is-valid");
  successMessage.hidden = false;
}

function showPasswordWhilePressed() {
  senhaInput.type = "text";
  senhaToggle.setAttribute("aria-pressed", "true");
}

function hidePasswordAfterRelease() {
  senhaInput.type = "password";
  senhaToggle.setAttribute("aria-pressed", "false");
}

function showGoogleError(message) {
  clearLoginError();
  clearLoginSuccess();
  googleError.textContent = message;
  googleError.hidden = false;
}

function showForgotError(message = "E-mail nao encontrado.") {
  forgotError.textContent = message;
  resetEmailPreview.hidden = true;
  forgotForm.classList.add("is-invalid");
  emailInput.setAttribute("aria-invalid", "true");
  forgotError.hidden = false;
}

function showResetError(message) {
  resetSuccess.hidden = true;
  resetForm.classList.add("is-invalid");
  newPasswordInput.setAttribute("aria-invalid", "true");
  confirmPasswordInput.setAttribute("aria-invalid", "true");
  resetError.textContent = message;
  resetError.hidden = false;
}

function showResetSuccess() {
  clearResetState();
  resetSuccess.hidden = false;
}

function isStrongPassword(password) {
  return (
    password.length >= 8 &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password)
  );
}

function isPasswordAllowedForUser(user, password) {
  return isStrongPassword(password) || (user.isTestUser && password === "123456");
}

function isGoogleConfigured() {
  return googleClientId.includes(".apps.googleusercontent.com");
}

function decodeJwtPayload(token) {
  const payload = token.split(".")[1];
  const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    Array.from(atob(base64))
      .map((char) => `%${char.charCodeAt(0).toString(16).padStart(2, "0")}`)
      .join("")
  );

  return JSON.parse(jsonPayload);
}

function handleGoogleCredentialResponse(response) {
  const profile = decodeJwtPayload(response.credential);
  const googleEmail = profile.email ? normalizeEmail(profile.email) : "";
  const hostedDomain = profile.hd || "";
  const user = findUserByEmail(googleEmail);

  if (!user) {
    showGoogleError("Conta Google nao vinculada a um usuario cadastrado.");
    return;
  }

  if (!canUseGoogle(user, hostedDomain)) {
    showGoogleError("Conta Google sem permissao para acessar este sistema.");
    return;
  }

  if (user.googleSub && profile.sub && user.googleSub !== profile.sub) {
    showGoogleError("Conta Google diferente da conta vinculada ao usuario.");
    return;
  }

  if (!user.googleSub && profile.sub) {
    user.googleSub = profile.sub;
    saveUsers();
  }

  showLoginSuccess(user, AUTH_METHODS.GOOGLE);
}

function initializeGoogleLogin() {
  if (!isGoogleConfigured()) {
    googleFallbackButton.hidden = false;
    return;
  }

  if (!window.google || !window.google.accounts || !window.google.accounts.id) {
    googleFallbackButton.hidden = false;
    return;
  }

  window.google.accounts.id.initialize({
    client_id: googleClientId,
    callback: handleGoogleCredentialResponse,
  });

  window.google.accounts.id.renderButton(googleButtonContainer, {
    theme: "outline",
    size: "large",
    type: "standard",
    shape: "rectangular",
    text: "signin_with",
    logo_alignment: "left",
    width: 320,
    locale: "pt-BR",
  });

  googleFallbackButton.hidden = true;
}

function prepareResetForUser(user) {
  activeResetUser = user;
  const resetToken = createResetToken(user);
  sessionStorage.setItem("resetUserEmail", user.email);
  resetPasswordLink.href = `#redefinir-senha?token=${encodeURIComponent(resetToken)}`;
  resetEmailPreview.hidden = false;
}

function getStoredResetUser() {
  const resetToken = getResetTokenFromHash();

  if (resetToken) {
    return findResetUserByToken(resetToken);
  }

  const storedEmail = sessionStorage.getItem("resetUserEmail");
  return storedEmail ? findUserByEmail(storedEmail) : null;
}

function goToLogin() {
  window.location.hash = "";
  activeResetUser = null;
  sessionStorage.removeItem("resetUserEmail");
  clearLoginError();
  clearLoginSuccess();
  clearGoogleError();
  clearForgotState();
  clearResetState();
  showView(loginForm);
}

function goToForgotPassword() {
  window.location.hash = "recuperar-senha";
  clearLoginError();
  clearLoginSuccess();
  clearGoogleError();
  clearForgotState();
  showView(forgotForm);
  emailInput.focus();
}

function goToResetPassword() {
  activeResetUser = activeResetUser || getStoredResetUser();

  if (!activeResetUser) {
    goToForgotPassword();
    return;
  }

  window.location.hash = "redefinir-senha";
  clearResetState();
  showView(resetForm);
  newPasswordInput.focus();
}

function syncViewFromHash() {
  if (window.location.hash === "#recuperar-senha") {
    clearLoginError();
    clearLoginSuccess();
    clearGoogleError();
    clearForgotState();
    showView(forgotForm);
    return;
  }

  if (window.location.hash.startsWith("#redefinir-senha")) {
    activeResetUser = activeResetUser || getStoredResetUser();

    if (!activeResetUser) {
      showView(forgotForm);
      return;
    }

    clearResetState();
    showView(resetForm);
    return;
  }

  showView(loginForm);
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!loginForm.checkValidity()) {
    clearLoginError();
    clearLoginSuccess();
    clearGoogleError();
    loginForm.reportValidity();
    return;
  }

  const user = findUserByCredentials(usuarioInput.value, senhaInput.value);

  if (user) {
    showLoginSuccess(user, AUTH_METHODS.PASSWORD);
    return;
  }

  showLoginError();
});

forgotForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!forgotForm.checkValidity()) {
    clearForgotState();
    forgotForm.reportValidity();
    return;
  }

  const user = findUserByEmail(emailInput.value);

  if (!user) {
    showForgotError();
    return;
  }

  if (!canUsePassword(user)) {
    showForgotError("Este usuario nao possui acesso por senha.");
    return;
  }

  clearForgotState();
  prepareResetForUser(user);
});

resetForm.addEventListener("submit", (event) => {
  event.preventDefault();

  activeResetUser = activeResetUser || getStoredResetUser();

  if (!activeResetUser) {
    showResetError("Solicite uma nova redefinicao de senha.");
    return;
  }

  if (!resetForm.checkValidity()) {
    clearResetState();
    resetForm.reportValidity();
    return;
  }

  if (newPasswordInput.value !== confirmPasswordInput.value) {
    showResetError("As senhas informadas nao conferem.");
    return;
  }

  if (!isPasswordAllowedForUser(activeResetUser, newPasswordInput.value)) {
    showResetError(
      "A senha deve ter no minimo 8 caracteres, com letras maiusculas, minusculas, numeros e caractere especial."
    );
    return;
  }

  activeResetUser.senha = newPasswordInput.value;
  saveUsers();
  sessionStorage.removeItem("resetUserEmail");
  showResetSuccess();
  resetForm.reset();
});

forgotPasswordLink.addEventListener("click", (event) => {
  event.preventDefault();
  goToForgotPassword();
});

resetPasswordLink.addEventListener("click", (event) => {
  event.preventDefault();
  goToResetPassword();
});

googleFallbackButton.addEventListener("click", () => {
  if (isGoogleConfigured()) {
    initializeGoogleLogin();
    return;
  }

  showGoogleError("Login com Google indisponivel. Configure o Client ID do Google.");
});

backToLoginButton.addEventListener("click", goToLogin);
backToLoginResetButton.addEventListener("click", goToLogin);
sidebarToggle.addEventListener("click", () => {
  const isCollapsed = appShell.classList.toggle("is-collapsed");
  sidebarToggle.setAttribute("aria-expanded", String(!isCollapsed));
  sidebarToggle.setAttribute("aria-label", isCollapsed ? "Expandir menu" : "Recolher menu");
});
logoutButton.addEventListener("click", logout);
navTools.addEventListener("click", () => setWorkspaceSection("tools"));
navLearning.addEventListener("click", () => setWorkspaceSection("learning"));

usuarioInput.addEventListener("input", () => {
  clearLoginError();
  clearLoginSuccess();
  clearGoogleError();
});

senhaInput.addEventListener("input", () => {
  clearLoginError();
  clearLoginSuccess();
  clearGoogleError();
});

senhaToggle.addEventListener("mousedown", showPasswordWhilePressed);
senhaToggle.addEventListener("mouseup", hidePasswordAfterRelease);
senhaToggle.addEventListener("mouseleave", hidePasswordAfterRelease);
senhaToggle.addEventListener("touchstart", showPasswordWhilePressed);
senhaToggle.addEventListener("touchend", hidePasswordAfterRelease);
senhaToggle.addEventListener("touchcancel", hidePasswordAfterRelease);
senhaToggle.addEventListener("keydown", (event) => {
  if (event.key === " " || event.key === "Enter") {
    event.preventDefault();
    showPasswordWhilePressed();
  }
});
senhaToggle.addEventListener("keyup", (event) => {
  if (event.key === " " || event.key === "Enter") {
    hidePasswordAfterRelease();
  }
});
senhaToggle.addEventListener("blur", hidePasswordAfterRelease);

emailInput.addEventListener("input", clearForgotState);
newPasswordInput.addEventListener("input", clearResetState);
confirmPasswordInput.addEventListener("input", clearResetState);

syncViewFromHash();

window.handleGoogleCredentialResponse = handleGoogleCredentialResponse;
window.addEventListener("load", initializeGoogleLogin);
window.addEventListener("hashchange", syncViewFromHash);

window.zipAuthModel = {
  clients,
  modules,
  tools,
  permissionProfiles,
  users,
  getModuleById,
  getUserAccess,
  getCurrentSession: () => currentSession,
};
