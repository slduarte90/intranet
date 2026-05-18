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
const navHome = document.querySelector("#nav-home");
const toolsGrid = document.querySelector("#tools-grid");
const toolsEmpty = document.querySelector("#tools-empty");
const toolFrameView = document.querySelector("#tool-frame-view");
const toolFrame = document.querySelector("#tool-frame");
const toolFrameTitle = document.querySelector("#tool-frame-title");
const toolBackButton = document.querySelector("#tool-back-button");
const navTools = document.querySelector("#nav-tools");
const toolsSubmenu = document.querySelector("#tools-submenu");
const navLearning = document.querySelector("#nav-learning");
const learningNavGroup = document.querySelector("#learning-nav-group");
const learningSubmenu = document.querySelector("#learning-submenu");
const learningSubmenuItems = document.querySelectorAll("#learning-submenu [data-learning-view]");
const navConfig = document.querySelector("#nav-config");
const configNavGroup = document.querySelector("#config-nav-group");
const configMenuItems = document.querySelectorAll("#config-section [data-config-view]");
const workspaceEyebrow = document.querySelector("#workspace-eyebrow");
const workspaceTitle = document.querySelector("#workspace-title");
const homeSection = document.querySelector("#home-section");
const homeUpdatesList = document.querySelector(".home-updates");
const homeUpdatesPrevButton = document.querySelector("#home-updates-prev");
const homeUpdatesNextButton = document.querySelector("#home-updates-next");
const homeUpdatesPageStatus = document.querySelector("#home-updates-page-status");
const toolsSection = document.querySelector("#tools-section");
const learningSection = document.querySelector("#learning-section");
const configSection = document.querySelector("#config-section");
const configViews = document.querySelectorAll(".config-view");
const learningViews = document.querySelectorAll(".learning-view");
const learningCourseForm = document.querySelector("#learning-course-form");
const courseTitleInput = document.querySelector("#course-title");
const courseCategoryInput = document.querySelector("#course-category");
const courseDepartmentInput = document.querySelector("#course-department");
const courseTotalDurationInput = document.querySelector("#course-total-duration");
const learningCourseModulesList = document.querySelector("#learning-course-modules-list");
const learningAddModuleButton = document.querySelector("#learning-add-module");
const learningCourseStatus = document.querySelector("#learning-course-status");
const learningCategoryForm = document.querySelector("#learning-category-form");
const learningCategoryNameInput = document.querySelector("#learning-category-name");
const learningCategorySearch = document.querySelector("#learning-category-search");
const learningCategoryList = document.querySelector("#learning-category-list");
const learningCategoryEmpty = document.querySelector("#learning-category-empty");
const learningCategoryStatus = document.querySelector("#learning-category-status");
const learningTotalCourses = document.querySelector("#learning-total-courses");
const learningTotalPdfs = document.querySelector("#learning-total-pdfs");
const learningTotalAssessments = document.querySelector("#learning-total-assessments");
const learningCourseSearch = document.querySelector("#learning-course-search");
const learningCourseDepartmentFilter = document.querySelector("#learning-course-department-filter");
const learningCoursesGrid = document.querySelector("#learning-courses-grid");
const learningCoursesEmpty = document.querySelector("#learning-courses-empty");
const learningCoursePlayer = document.querySelector("#learning-course-player");
const learningPlayerTitle = document.querySelector("#learning-player-title");
const learningPlayerFrame = document.querySelector("#learning-player-frame");
const learningPlayerAttachments = document.querySelector("#learning-player-attachments");
const learningPlayerClose = document.querySelector("#learning-player-close");
const learningTrackSearch = document.querySelector("#learning-track-search");
const learningTrackDepartmentFilter = document.querySelector("#learning-track-department-filter");
const learningTrackList = document.querySelector("#learning-track-list");
const learningTracksEmpty = document.querySelector("#learning-tracks-empty");
const learningAssessmentForm = document.querySelector("#learning-assessment-form");
const learningAssessmentUser = document.querySelector("#learning-assessment-user");
const assessmentCourseSelect = document.querySelector("#assessment-course");
const assessmentScoreInput = document.querySelector("#assessment-score");
const assessmentStatusSelect = document.querySelector("#assessment-status");
const assessmentNotesInput = document.querySelector("#assessment-notes");
const learningAssessmentStatusMessage = document.querySelector("#learning-assessment-status-message");
const learningResultList = document.querySelector("#learning-result-list");
const learningResultsEmpty = document.querySelector("#learning-results-empty");
const userConfigForm = document.querySelector("#user-config-form");
const userConfigIdInput = document.querySelector("#user-config-id");
const userConfigNameInput = document.querySelector("#user-config-name");
const userConfigLoginInput = document.querySelector("#user-config-login");
const userConfigEmailInput = document.querySelector("#user-config-email");
const userConfigPasswordInput = document.querySelector("#user-config-password");
const userConfigTypeInput = document.querySelector("#user-config-type");
const userConfigStatusInput = document.querySelector("#user-config-status");
const userConfigPermissionInputs = document.querySelectorAll("[data-user-permission]");
const userConfigModal = document.querySelector("#user-config-modal");
const userConfigModalTitle = document.querySelector("#user-config-modal-title");
const userConfigNewButton = document.querySelector("#user-config-new");
const userConfigImportButton = document.querySelector("#user-config-import");
const userConfigExportButton = document.querySelector("#user-config-export");
const userConfigImportFile = document.querySelector("#user-config-import-file");
const userConfigResetButton = document.querySelector("#user-config-reset");
const userConfigCloseButton = document.querySelector("#user-config-close");
const userConfigStatusMessage = document.querySelector("#user-config-status-message");
const configUserList = document.querySelector("#config-user-list");

const AUTH_METHODS = {
  PASSWORD: "senha",
  GOOGLE: "google",
};

const USER_STATUS = {
  ACTIVE: "ativo",
  INACTIVE: "inativo",
};

const USER_TYPES = {
  ADMIN: "administrador",
  COLLABORATOR: "colaborador",
  INTERNAL: "interno",
  CLIENT: "cliente",
};

const LEGACY_USER_TYPE_MAP = {
  [USER_TYPES.INTERNAL]: USER_TYPES.COLLABORATOR,
  [USER_TYPES.CLIENT]: USER_TYPES.COLLABORATOR,
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

const LEARNING_VIEWS = {
  REGISTRATION: "course-registration",
  CATEGORIES: "categories",
  COURSES: "courses",
  TRACKS: "tracks",
  ASSESSMENT: "assessment",
};

const ROUTES = {
  LOGIN: "/",
  HOME: "/home",
  TOOLS: "/ferramentas",
  TOOL_EXTRACT_ANALYZER: "/ferramentas/analisador-extratos",
  CONFIG: "/configuracoes",
  CONFIG_USERS: "/configuracoes/usuarios",
  LEARNING: "/aprendizado",
  LEARNING_COURSES: "/aprendizado/cursos",
  LEARNING_TRACKS: "/aprendizado/trilhas",
  LEARNING_ASSESSMENT: "/aprendizado/avaliacoes",
  LEARNING_REGISTRATION: "/aprendizado/cadastros",
  LEARNING_CATEGORIES: "/aprendizado/categorias",
};

const LEARNING_VIEW_ROUTES = {
  [LEARNING_VIEWS.COURSES]: ROUTES.LEARNING_COURSES,
  [LEARNING_VIEWS.TRACKS]: ROUTES.LEARNING_TRACKS,
  [LEARNING_VIEWS.ASSESSMENT]: ROUTES.LEARNING_ASSESSMENT,
  [LEARNING_VIEWS.REGISTRATION]: ROUTES.LEARNING_REGISTRATION,
  [LEARNING_VIEWS.CATEGORIES]: ROUTES.LEARNING_CATEGORIES,
};

const TOOL_ROUTES = {
  "analisador-extratos": ROUTES.TOOL_EXTRACT_ANALYZER,
};

const CONFIG_VIEWS = {
  USERS: "users",
};

const CONFIG_VIEW_ROUTES = {
  [CONFIG_VIEWS.USERS]: ROUTES.CONFIG_USERS,
};

const LEARNING_VIEW_MODULES = {
  [LEARNING_VIEWS.COURSES]: "aprendizado.cursos",
  [LEARNING_VIEWS.TRACKS]: "aprendizado.trilhas",
  [LEARNING_VIEWS.ASSESSMENT]: "aprendizado.avaliacoes",
  [LEARNING_VIEWS.REGISTRATION]: "aprendizado.cadastros",
  [LEARNING_VIEWS.CATEGORIES]: "aprendizado.categorias",
};

const LEARNING_MENU_ORDER = [
  LEARNING_VIEWS.COURSES,
  LEARNING_VIEWS.TRACKS,
  LEARNING_VIEWS.ASSESSMENT,
  LEARNING_VIEWS.REGISTRATION,
  LEARNING_VIEWS.CATEGORIES,
];

const MODULE_LABELS = {
  "ferramentas.analisador-extratos": "Ferramentas - Analisador de Extratos",
  "aprendizado.cursos": "Aprendizado - Cursos",
  "aprendizado.trilhas": "Aprendizado - Trilhas",
  "aprendizado.avaliacoes": "Aprendizado - Avalia\u00e7\u00f5es",
  "aprendizado.cadastros": "Aprendizado - Cadastros",
  "aprendizado.categorias": "Aprendizado - Categorias",
  "configuracoes.usuarios": "Configura\u00e7\u00f5es - Usu\u00e1rios",
};

const DEFAULT_LEARNING_DEPARTMENTS = [
  "Contabilidade",
  "Fiscal",
  "Departamento Pessoal",
  "Tecnologia",
  "Comercial",
];

const HOME_UPDATES_PER_PAGE = 5;
const ADMIN_EMAILS = ["sidney.duarte@zipcontabilidade.com.br"];
const CENTRAL_USERS_SPREADSHEET_URL =
  "https://docs.google.com/spreadsheets/d/1GFOBNEJa7gHAPkgpdWQ7Xs3p6U2-w8A0ClNSMqlNSKs/edit";
const CENTRAL_USERS_API_URL = "";

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
  { id: "home", chave: "home", nome: "Home", status: USER_STATUS.ACTIVE },
  { id: "ferramentas", chave: "ferramentas", nome: "Ferramentas", status: USER_STATUS.ACTIVE },
  {
    id: "ferramentas.analisador-extratos",
    chave: "ferramentas.analisador-extratos",
    nome: "Analisador de Extratos",
    status: USER_STATUS.ACTIVE,
  },
  { id: "aprendizado", chave: "aprendizado", nome: "Aprendizado", status: USER_STATUS.ACTIVE },
  { id: "aprendizado.cursos", chave: "aprendizado.cursos", nome: "Cursos", status: USER_STATUS.ACTIVE },
  { id: "aprendizado.trilhas", chave: "aprendizado.trilhas", nome: "Trilhas", status: USER_STATUS.ACTIVE },
  { id: "aprendizado.avaliacoes", chave: "aprendizado.avaliacoes", nome: "Avalia\u00e7\u00f5es", status: USER_STATUS.ACTIVE },
  { id: "aprendizado.cadastros", chave: "aprendizado.cadastros", nome: "Cadastros", status: USER_STATUS.ACTIVE },
  { id: "aprendizado.categorias", chave: "aprendizado.categorias", nome: "Categorias", status: USER_STATUS.ACTIVE },
  { id: "configuracoes", chave: "configuracoes", nome: "Configura\u00e7\u00f5es", status: USER_STATUS.ACTIVE },
  { id: "configuracoes.usuarios", chave: "configuracoes.usuarios", nome: "Usu\u00e1rios", status: USER_STATUS.ACTIVE },
];

const defaultPermissionProfiles = [
  {
    id: "admin_zip",
    nome: "Administrador ZIP",
    tipo: USER_TYPES.ADMIN,
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
    tipo: USER_TYPES.COLLABORATOR,
    permissoes: [
      {
        clienteId: "*",
        moduloId: "ferramentas.analisador-extratos",
        acoes: [ACTIONS.VIEW],
      },
      {
        clienteId: "*",
        moduloId: "aprendizado.cursos",
        acoes: [ACTIONS.VIEW],
      },
      {
        clienteId: "*",
        moduloId: "aprendizado.trilhas",
        acoes: [ACTIONS.VIEW],
      },
      {
        clienteId: "*",
        moduloId: "aprendizado.avaliacoes",
        acoes: [ACTIONS.VIEW],
      },
    ],
  },
  {
    id: "cliente_padrao",
    nome: "Colaborador padr\u00e3o",
    tipo: USER_TYPES.COLLABORATOR,
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
    tipo: USER_TYPES.ADMIN,
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
  {
    id: "usr-sidney-duarte",
    nomeCompleto: "SIDNEY LUIZ DUARTE",
    email: "sidney.duarte@zipcontabilidade.com.br",
    login: "sidney.duarte",
    senha: "",
    tipo: USER_TYPES.ADMIN,
    status: USER_STATUS.ACTIVE,
    clienteId: "zip",
    clientesPermitidos: ["*"],
    modulosPermitidos: ["*"],
    perfilId: "admin_zip",
    authMethods: [AUTH_METHODS.GOOGLE],
    dominioPermitido: "zipcontabilidade.com.br",
    googleSub: "",
    acessos: [
      {
        clienteId: "*",
        moduloId: "*",
        acoes: Object.values(ACTIONS),
      },
    ],
    isTestUser: false,
  },
];

const defaultTools = [
  {
    id: "analisador-extratos",
    nome: "Analisador de Extratos",
    descricao: "Analise, categorizacao e exportacao de extratos bancarios.",
    url: "",
    internalPath: "extract/index.html",
    moduloId: "ferramentas.analisador-extratos",
    status: USER_STATUS.ACTIVE,
    abrirNovaAba: false,
  },
];

const defaultLearningCourses = [];
const defaultLearningAssessments = [];
const defaultLearningCategories = [
  { id: "cat-onboarding", nome: "Onboarding" },
  { id: "cat-operacional", nome: "Operacional" },
  { id: "cat-tecnologia", nome: "Tecnologia" },
  { id: "cat-compliance", nome: "Compliance" },
];

const clients = loadCollection("zipClients", defaultClients, normalizeClient);
const modules = loadCollection("zipModules", defaultModules, normalizeModule);
const tools = loadCollection("zipTools", defaultTools, normalizeTool);
const learningCourses = loadCollection(
  "zipLearningCourses",
  defaultLearningCourses,
  normalizeLearningCourse
);
const learningAssessments = loadCollection(
  "zipLearningAssessments",
  defaultLearningAssessments,
  normalizeLearningAssessment
);
const learningCategories = loadCollection(
  "zipLearningCategories",
  defaultLearningCategories,
  normalizeLearningCategory
);
const permissionProfiles = loadCollection(
  "zipPermissionProfiles",
  defaultPermissionProfiles,
  normalizePermissionProfile
);
const users = loadUsers();
let activeResetUser = null;
let currentSession = null;
let currentUser = null;
let toolsMenuExpanded = true;
let learningMenuExpanded = false;
let activeLearningView = LEARNING_VIEWS.COURSES;
let learningModuleCounter = 0;
let learningVideoCounter = 0;
let homeUpdatesPage = 1;

saveCollection("zipClients", clients);
saveCollection("zipModules", modules);
saveCollection("zipTools", tools);
saveCollection("zipLearningCourses", learningCourses);
saveCollection("zipLearningAssessments", learningAssessments);
syncLearningCategoriesFromCourses();
saveCollection("zipLearningCategories", learningCategories);
syncDefaultPermissionProfiles();
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

function normalizeRoutePath(pathname = window.location.pathname) {
  let path = decodeURI(pathname || ROUTES.LOGIN).replace(/\/index\.html$/i, "");

  if (path.length > 1) {
    path = path.replace(/\/+$/, "");
  }

  return path || ROUTES.LOGIN;
}

function getRouteForPath(pathname = window.location.pathname) {
  const path = normalizeRoutePath(pathname);
  const toolRoute = Object.entries(TOOL_ROUTES).find(([, routePath]) => routePath === path);
  const configRoute = Object.entries(CONFIG_VIEW_ROUTES).find(([, routePath]) => routePath === path);
  const learningRoute = Object.entries(LEARNING_VIEW_ROUTES).find(
    ([, routePath]) => routePath === path
  );

  if (path === ROUTES.HOME) {
    return { section: "home", path: ROUTES.HOME };
  }

  if (path === ROUTES.TOOLS) {
    return { section: "tools", path: ROUTES.TOOLS };
  }

  if (toolRoute) {
    return { section: "tools", toolId: toolRoute[0], path };
  }

  if (path === ROUTES.CONFIG) {
    return {
      section: "config",
      configView: CONFIG_VIEWS.USERS,
      path: ROUTES.CONFIG,
    };
  }

  if (configRoute) {
    return {
      section: "config",
      configView: configRoute[0],
      path,
    };
  }

  if (path === ROUTES.LEARNING) {
    return {
      section: "learning",
      learningView: LEARNING_VIEWS.COURSES,
      path: ROUTES.LEARNING,
    };
  }

  if (learningRoute) {
    return {
      section: "learning",
      learningView: learningRoute[0],
      path,
    };
  }

  return { section: "home", path: ROUTES.HOME };
}

function getRouteForWorkspace(section, options = {}) {
  if (options.routePath) {
    return options.routePath;
  }

  if (section === "tools") {
    if (options.toolId && TOOL_ROUTES[options.toolId]) {
      return TOOL_ROUTES[options.toolId];
    }

    return ROUTES.TOOLS;
  }

  if (section === "learning") {
    return LEARNING_VIEW_ROUTES[options.learningView || activeLearningView] || ROUTES.LEARNING;
  }

  if (section === "config") {
    return CONFIG_VIEW_ROUTES[options.configView || CONFIG_VIEWS.USERS] || ROUTES.CONFIG;
  }

  return ROUTES.HOME;
}

function updateRoute(path, replace = false) {
  if (window.location.hash || normalizeRoutePath() === path) {
    return;
  }

  const method = replace ? "replaceState" : "pushState";
  window.history[method]({}, "", path);
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
  const isInternalExtractTool = tool.id === "analisador-extratos";

  return {
    id: tool.id || "",
    nome: tool.nome || "",
    descricao: tool.descricao || "",
    url: isInternalExtractTool ? "" : tool.url || "",
    internalPath: isInternalExtractTool ? "/extract/index.html" : tool.internalPath || "",
    moduloId: tool.moduloId || "",
    status: tool.status || USER_STATUS.ACTIVE,
    abrirNovaAba: !isInternalExtractTool && Boolean(tool.url) && tool.abrirNovaAba !== false,
  };
}

function normalizeLearningCourse(course) {
  const rawModules = Array.isArray(course.modulos)
    ? course.modulos
    : Array.isArray(course.modules)
      ? course.modules
      : [];
  const legacyVideos = course.vimeo || course.vimeoUrl
    ? [
        {
          vimeo: course.vimeo || course.vimeoUrl,
          duracao: course.duracao || course.duration || "",
          documentos: normalizeDocumentList(course.pdfs || course.attachments || []),
        },
      ]
    : [];
  const modulos = rawModules.length > 0
    ? rawModules.map(normalizeLearningModule)
    : [
        normalizeLearningModule({
          titulo: "M\u00f3dulo principal",
          videos: legacyVideos,
        }),
      ];
  const duracaoSegundos = getCourseDurationSeconds({ modulos });

  return {
    id: course.id || createLearningCourseId(course.titulo || course.title || "curso"),
    titulo: course.titulo || course.title || "",
    categoria: course.categoria || course.category || "Geral",
    departamento: course.departamento || course.department || "Geral",
    resumo: course.resumo || course.summary || "",
    modulos,
    duracaoSegundos,
    duracao: formatDuration(duracaoSegundos),
    pdfs: getCourseDocuments({ modulos }),
    status: course.status || USER_STATUS.ACTIVE,
    criadoEm: course.criadoEm || course.createdAt || new Date().toISOString(),
  };
}

function normalizeLearningModule(module) {
  const videos = Array.isArray(module.videos) && module.videos.length > 0
    ? module.videos.map(normalizeLearningVideo)
    : [normalizeLearningVideo({})];
  const duracaoSegundos = videos.reduce(
    (total, video) => total + Number(video.duracaoSegundos || 0),
    0
  );

  return {
    id: module.id || `modulo-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    titulo: module.titulo || module.title || "M\u00f3dulo",
    videos,
    duracaoSegundos,
    duracao: formatDuration(duracaoSegundos),
  };
}

function normalizeLearningVideo(video) {
  const rawDuration = video.duracao || video.duration || video.duracaoManual || "";
  const duracaoSegundos = Number(video.duracaoSegundos || video.durationSeconds || 0) ||
    parseDurationToSeconds(rawDuration);

  return {
    id: video.id || `video-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    titulo: video.titulo || video.title || "",
    vimeo: video.vimeo || video.vimeoUrl || "",
    duracaoSegundos,
    duracao: rawDuration || (duracaoSegundos ? formatDuration(duracaoSegundos) : ""),
    documentos: normalizeDocumentList(video.documentos || video.documents || video.pdfs || []),
  };
}

function normalizeLearningAssessment(assessment) {
  return {
    id: assessment.id || `avaliacao-${Date.now()}`,
    usuarioId: assessment.usuarioId || assessment.userId || "",
    cursoId: assessment.cursoId || assessment.courseId || "",
    nota: Number(assessment.nota || assessment.score || 0),
    status: assessment.status || "concluido",
    observacoes: assessment.observacoes || assessment.notes || "",
    criadoEm: assessment.criadoEm || assessment.createdAt || new Date().toISOString(),
  };
}

function normalizeLearningCategory(category) {
  const name = String(category.nome || category.name || category.categoria || "").trim();

  return {
    id: category.id || createLearningCategoryId(name || "categoria"),
    nome: name,
  };
}

function normalizePermissionProfile(profile) {
  return {
    id: profile.id || "",
    nome: profile.nome || "",
    tipo: normalizeUserType(profile.tipo),
    permissoes: Array.isArray(profile.permissoes)
      ? profile.permissoes.map(normalizeAccess)
      : [],
  };
}

function normalizeUserType(type) {
  const normalizedType = String(type || "").trim().toLowerCase();

  if ([USER_TYPES.ADMIN, USER_TYPES.COLLABORATOR].includes(normalizedType)) {
    return normalizedType;
  }

  return LEGACY_USER_TYPE_MAP[normalizedType] || USER_TYPES.COLLABORATOR;
}

function isConfiguredAdminEmail(email) {
  return ADMIN_EMAILS.includes(normalizeEmail(email));
}

function getAdminAccess() {
  return [
    {
      clienteId: "*",
      moduloId: "*",
      acoes: Object.values(ACTIONS),
    },
  ];
}

function promoteConfiguredAdminUser(user) {
  return {
    ...user,
    tipo: USER_TYPES.ADMIN,
    status: USER_STATUS.ACTIVE,
    clienteId: user.clienteId || "zip",
    clientesPermitidos: ["*"],
    modulosPermitidos: ["*"],
    perfilId: "admin_zip",
    authMethods: uniqueList([
      ...(user.authMethods || []),
      AUTH_METHODS.GOOGLE,
    ]),
    dominioPermitido: user.dominioPermitido || "zipcontabilidade.com.br",
    acessos: getAdminAccess(),
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
    tipo: normalizeUserType(user.tipo),
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

  if (isConfiguredAdminEmail(normalizedUser.email)) {
    return promoteConfiguredAdminUser(normalizedUser);
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

function syncDefaultPermissionProfiles() {
  defaultPermissionProfiles.forEach((defaultProfile) => {
    const normalizedDefault = normalizePermissionProfile({ ...defaultProfile });
    const profileIndex = permissionProfiles.findIndex((profile) => profile.id === normalizedDefault.id);

    if (profileIndex >= 0) {
      permissionProfiles[profileIndex] = normalizedDefault;
    } else {
      permissionProfiles.push(normalizedDefault);
    }
  });
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

function isCentralUsersApiConfigured() {
  return Boolean(CENTRAL_USERS_API_URL.trim());
}

async function callCentralUsersApi(action, payload = {}) {
  if (!isCentralUsersApiConfigured()) {
    return null;
  }

  const response = await fetch(CENTRAL_USERS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({
      action,
      ...payload,
    }),
  });

  if (!response.ok) {
    throw new Error("Central de usuarios indisponivel");
  }

  return response.json();
}

function accessFromPermissionString(permissions) {
  const value = String(permissions || "").trim();

  if (!value) {
    return [];
  }

  if (value === "*") {
    return getAdminAccess();
  }

  return value
    .split(",")
    .map((permission) => permission.trim())
    .filter(Boolean)
    .map((moduleId) => ({
      clienteId: "*",
      moduloId: moduleId,
      acoes: [ACTIONS.VIEW],
    }));
}

function permissionStringFromUser(user) {
  const access = getUserAccess(user);

  if (access.some((item) => item.moduloId === "*")) {
    return "*";
  }

  return access.map((item) => item.moduloId).filter(Boolean).join(",");
}

function normalizeCentralUserRecord(record) {
  const email = normalizeEmail(record.email);
  const login = normalizeLogin(record.login || (email ? email.split("@")[0] : ""));

  return normalizeUser({
    id: record.id || createUserIdFromEmail(email || login),
    nomeCompleto: record.nome || record.nomeCompleto || record.name || login,
    email,
    login,
    senha: "",
    tipo: record.tipo || USER_TYPES.COLLABORATOR,
    status: record.status || USER_STATUS.ACTIVE,
    clienteId: "zip",
    clientesPermitidos: ["*"],
    modulosPermitidos: String(record.permissoes || "").trim() === "*"
      ? ["*"]
      : String(record.permissoes || "").split(",").map((item) => item.trim()).filter(Boolean),
    perfilId: record.tipo === USER_TYPES.ADMIN || record.permissoes === "*" ? "admin_zip" : "colaborador_zip",
    authMethods: [AUTH_METHODS.GOOGLE],
    dominioPermitido: "zipcontabilidade.com.br",
    googleSub: record.googleSub || "",
    acessos: accessFromPermissionString(record.permissoes),
  });
}

function upsertCentralUser(record) {
  const centralUser = normalizeCentralUserRecord(record);
  const existingIndex = users.findIndex((user) => {
    const sameEmail = centralUser.email && normalizeEmail(user.email) === centralUser.email;
    const sameLogin = centralUser.login && normalizeLogin(user.login) === normalizeLogin(centralUser.login);
    return user.id === centralUser.id || sameEmail || sameLogin;
  });

  if (existingIndex >= 0) {
    users[existingIndex] = normalizeUser({
      ...users[existingIndex],
      ...centralUser,
      senha: users[existingIndex].senha || centralUser.senha,
      authMethods: uniqueList([...(users[existingIndex].authMethods || []), ...centralUser.authMethods]),
    });
    return users[existingIndex];
  }

  users.push(centralUser);
  return centralUser;
}

async function syncCentralLogin(user, authMethod) {
  if (!isCentralUsersApiConfigured()) {
    return user;
  }

  try {
    const result = await callCentralUsersApi("registerLogin", {
      usuario: {
        email: user.email,
        nome: user.nomeCompleto || user.login,
        login: user.login,
        tipo: user.tipo,
        status: user.status,
        permissoes: permissionStringFromUser(user),
        googleSub: user.googleSub || "",
      },
      origem: authMethod,
      userAgent: window.navigator.userAgent,
    });

    if (result && result.usuario) {
      const syncedUser = upsertCentralUser(result.usuario);
      saveUsers();
      return syncedUser;
    }
  } catch {
    return user;
  }

  return user;
}

async function syncCentralUsersDirectory() {
  if (!isCentralUsersApiConfigured()) {
    return;
  }

  try {
    const result = await callCentralUsersApi("listUsers");
    const centralUsers = result && Array.isArray(result.usuarios) ? result.usuarios : [];

    centralUsers.forEach(upsertCentralUser);
    saveUsers();
  } catch {
    return;
  }
}

async function saveCentralUser(user) {
  if (!isCentralUsersApiConfigured()) {
    return;
  }

  await callCentralUsersApi("saveUser", {
    usuario: {
      email: user.email,
      nome: user.nomeCompleto || user.login,
      login: user.login,
      tipo: user.tipo,
      status: user.status,
      permissoes: permissionStringFromUser(user),
      googleSub: user.googleSub || "",
      observacoes: user.isTestUser ? "Usuario de teste local" : "",
    },
  });
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

function getToolById(toolId) {
  return tools.find((tool) => tool.id === toolId);
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

function hasAnyActionAccess(user, moduleIds, action) {
  return moduleIds.some((moduleId) => hasActionAccess(user, moduleId, action));
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

function getLearningModuleId(view) {
  return LEARNING_VIEW_MODULES[view] || "aprendizado.cursos";
}

function canAccessLearningView(user, view) {
  const moduleId = getLearningModuleId(view);
  const linkedModule = getModuleById(moduleId);

  return (
    linkedModule &&
    linkedModule.status === USER_STATUS.ACTIVE &&
    hasActionAccess(user, moduleId, ACTIONS.VIEW)
  );
}

function getAvailableLearningViews(user) {
  return LEARNING_MENU_ORDER.filter((view) => canAccessLearningView(user, view));
}

function getFirstAvailableLearningView(user) {
  return getAvailableLearningViews(user)[0] || "";
}

function canAccessConfigView(user, view) {
  if (view === CONFIG_VIEWS.USERS) {
    return hasActionAccess(user, "configuracoes.usuarios", ACTIONS.VIEW);
  }

  return false;
}

function canAccessConfig(user) {
  return Object.values(CONFIG_VIEWS).some((view) => canAccessConfigView(user, view));
}

function canAccessRoute(user, route) {
  if (route.section === "tools" && route.toolId) {
    const tool = getToolById(route.toolId);
    return Boolean(tool && canAccessTool(user, tool));
  }

  if (route.section === "tools") {
    return getAvailableTools(user).length > 0;
  }

  if (route.section === "learning") {
    return canAccessLearningView(user, route.learningView || getFirstAvailableLearningView(user));
  }

  if (route.section === "config") {
    return canAccessConfigView(user, route.configView || CONFIG_VIEWS.USERS);
  }

  return true;
}

function canAccessLearning(user) {
  return getAvailableLearningViews(user).length > 0;
}

function getFallbackRoute(user) {
  if (hasActionAccess(user, "home", ACTIONS.VIEW) || getUserAccess(user).length > 0) {
    return { section: "home", path: ROUTES.HOME };
  }

  const firstTool = getAvailableTools(user)[0];
  if (firstTool) {
    return { section: "tools", path: TOOL_ROUTES[firstTool.id] || ROUTES.TOOLS, toolId: firstTool.id };
  }

  const firstLearningView = getFirstAvailableLearningView(user);
  if (firstLearningView) {
    return {
      section: "learning",
      learningView: firstLearningView,
      path: LEARNING_VIEW_ROUTES[firstLearningView] || ROUTES.LEARNING,
    };
  }

  if (canAccessConfig(user)) {
    return { section: "config", configView: CONFIG_VIEWS.USERS, path: ROUTES.CONFIG_USERS };
  }

  return { section: "home", path: ROUTES.HOME };
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

function createUserIdFromEmail(email) {
  const baseId = normalizeEmail(email).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  let userId = `usr-google-${baseId}`;
  let suffix = 1;

  while (users.some((user) => user.id === userId)) {
    suffix += 1;
    userId = `usr-google-${baseId}-${suffix}`;
  }

  return userId;
}

function getGoogleDisplayName(profile) {
  const displayName =
    profile.name || `${profile.given_name || ""} ${profile.family_name || ""}`.trim();

  return displayName || normalizeEmail(profile.email).split("@")[0];
}

function getInternalGoogleDomain() {
  const zipClient = getClientById("zip");

  return zipClient && zipClient.dominioPermitido
    ? zipClient.dominioPermitido
    : "zipcontabilidade.com.br";
}

function canAutoCreateInternalGoogleUser(profile, hostedDomain) {
  return (
    normalizeEmail(profile.email) &&
    profile.email_verified !== false &&
    normalizeLogin(hostedDomain) === getInternalGoogleDomain()
  );
}

function createInternalGoogleUser(profile, hostedDomain) {
  const googleEmail = normalizeEmail(profile.email);
  const login = normalizeLogin(googleEmail.split("@")[0]);
  const user = normalizeUser({
    id: createUserIdFromEmail(googleEmail),
    nomeCompleto: getGoogleDisplayName(profile),
    email: googleEmail,
    login,
    senha: "",
    tipo: isConfiguredAdminEmail(googleEmail) ? USER_TYPES.ADMIN : USER_TYPES.COLLABORATOR,
    status: USER_STATUS.ACTIVE,
    clienteId: "zip",
    clientesPermitidos: ["*"],
    modulosPermitidos: isConfiguredAdminEmail(googleEmail)
      ? ["*"]
      : [
          "ferramentas.analisador-extratos",
          "aprendizado.cursos",
          "aprendizado.trilhas",
          "aprendizado.avaliacoes",
        ],
    perfilId: isConfiguredAdminEmail(googleEmail) ? "admin_zip" : "colaborador_zip",
    authMethods: [AUTH_METHODS.GOOGLE],
    dominioPermitido: normalizeLogin(hostedDomain),
    googleSub: profile.sub || "",
    acessos: isConfiguredAdminEmail(googleEmail) ? getAdminAccess() : [],
  });

  users.push(user);
  saveUsers();
  return user;
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

function getStoredSession() {
  try {
    return JSON.parse(sessionStorage.getItem("zipCurrentSession"));
  } catch {
    return null;
  }
}

function getSessionUser(session) {
  if (!session || !session.userId) {
    return null;
  }

  return users.find((user) => user.id === session.userId && isActiveUser(user)) || null;
}

function restoreStoredSession() {
  const storedSession = getStoredSession();
  const user = getSessionUser(storedSession);

  if (!user) {
    sessionStorage.removeItem("zipCurrentSession");
    return false;
  }

  currentSession = storedSession;
  renderAuthenticatedApp(user, { route: getRouteForPath(), replaceRoute: true });
  return true;
}

function clearToolsGrid() {
  while (toolsGrid.firstChild) {
    toolsGrid.removeChild(toolsGrid.firstChild);
  }
}

function clearToolsSubmenu() {
  while (toolsSubmenu.firstChild) {
    toolsSubmenu.removeChild(toolsSubmenu.firstChild);
  }
}

function setToolsMenuExpanded(isExpanded) {
  toolsMenuExpanded = Boolean(isExpanded);
  navTools.classList.toggle("is-expanded", toolsMenuExpanded);
  navTools.setAttribute("aria-expanded", String(toolsMenuExpanded));
  toolsSubmenu.hidden = !toolsMenuExpanded || toolsSubmenu.children.length === 0;
}

function setActiveToolMenu(toolId) {
  toolsSubmenu.querySelectorAll(".sidebar__subitem").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.toolId === toolId);
  });
}

function showToolsGrid() {
  toolFrameView.hidden = true;
  toolFrame.removeAttribute("src");
  toolFrameTitle.textContent = "Ferramenta";
  toolsGrid.hidden = false;
  toolsEmpty.hidden = toolsGrid.children.length > 0;
  setActiveToolMenu("");
  workspaceEyebrow.textContent = "Ferramentas";
  workspaceTitle.textContent = "Ferramentas internas";
}

function showInternalToolFrame(tool) {
  if (!tool.internalPath) {
    return;
  }

  setToolsMenuExpanded(true);
  setActiveToolMenu(tool.id);
  toolsGrid.hidden = true;
  toolsEmpty.hidden = true;
  toolFrameTitle.textContent = tool.nome;
  toolFrame.title = tool.nome;
  toolFrame.src = tool.internalPath;
  toolFrameView.hidden = false;
  workspaceEyebrow.textContent = "Ferramentas";
  workspaceTitle.textContent = tool.nome;
}

function openInternalTool(tool) {
  if (!tool.internalPath || (currentUser && !canAccessTool(currentUser, tool))) {
    return;
  }

  setWorkspaceSection("tools", { toolId: tool.id });
}

function openExternalTool(tool) {
  if (!tool.url) {
    return;
  }

  window.open(tool.url, "_blank", "noopener,noreferrer");
}

function openTool(tool) {
  if (tool.internalPath) {
    openInternalTool(tool);
    return;
  }

  openExternalTool(tool);
}

function createToolSubmenuItem(tool) {
  const item = document.createElement("button");
  item.className = "sidebar__subitem";
  item.type = "button";
  item.dataset.toolId = tool.id;
  item.textContent = tool.nome;
  item.addEventListener("click", () => openTool(tool));

  return item;
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

  const action = document.createElement(tool.internalPath ? "button" : "a");
  action.className = "tool-card__action";
  action.textContent = "Abrir ferramenta";

  if (tool.internalPath) {
    action.type = "button";
    action.addEventListener("click", () => openTool(tool));
  } else {
    action.href = tool.url;
    action.target = "_blank";
    action.rel = "noopener noreferrer";
  }

  card.append(icon, title, description, action);
  return card;
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function createLearningCourseId(title) {
  const slug = normalizeLogin(title)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `curso-${slug || "aprendizado"}-${Date.now().toString(36)}`;
}

function createLearningCategoryId(name) {
  const slug = normalizeLogin(name)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `cat-${slug || "categoria"}-${Date.now().toString(36)}`;
}

function normalizePdfList(pdfs) {
  const source = Array.isArray(pdfs) ? pdfs : String(pdfs || "").split(/\r?\n/);

  return uniqueList(
    source
      .map((pdf) => (typeof pdf === "string" ? pdf : pdf.url || pdf.path || ""))
      .map((pdf) => String(pdf).trim())
      .filter(Boolean)
  );
}

function normalizeDocumentList(documents) {
  const source = Array.isArray(documents) ? documents : String(documents || "").split(/\r?\n/);
  const normalizedDocuments = source
    .map((document, index) => {
      if (typeof document === "string") {
        const url = document.trim();

        return url
          ? {
              id: `doc-${index}-${normalizeLogin(getAttachmentName(url, index)) || Date.now()}`,
              nome: getAttachmentName(url, index),
              url,
              tipo: "",
              tamanho: 0,
            }
          : null;
      }

      const url = String(document.url || document.path || document.dataUrl || "").trim();
      const name = String(document.nome || document.name || document.filename || "").trim();

      if (!url && !name) {
        return null;
      }

      return {
        id: document.id || `doc-${Date.now().toString(36)}-${index}`,
        nome: name || getAttachmentName(url, index),
        url,
        tipo: document.tipo || document.type || "",
        tamanho: Number(document.tamanho || document.size || 0),
      };
    })
    .filter(Boolean);

  const seenDocuments = new Set();
  return normalizedDocuments.filter((document) => {
    const key = `${normalizeLogin(document.nome)}|${document.url}`;

    if (seenDocuments.has(key)) {
      return false;
    }

    seenDocuments.add(key);
    return true;
  });
}

function parseDurationToSeconds(duration) {
  const value = String(duration || "").trim().toLowerCase();

  if (!value) {
    return 0;
  }

  if (/^\d+$/.test(value)) {
    return Number(value) * 60;
  }

  const timeParts = value.split(":").map((part) => Number(part));

  if (timeParts.length > 1 && timeParts.every((part) => Number.isFinite(part))) {
    return timeParts.reduce((total, part) => total * 60 + part, 0);
  }

  const hours = Number((value.match(/(\d+(?:[,.]\d+)?)\s*h/) || [])[1]?.replace(",", ".") || 0);
  const minutes = Number((value.match(/(\d+(?:[,.]\d+)?)\s*(?:m|min|minuto)/) || [])[1]?.replace(",", ".") || 0);
  const seconds = Number((value.match(/(\d+(?:[,.]\d+)?)\s*(?:s|seg|segundo)/) || [])[1]?.replace(",", ".") || 0);

  return Math.round(hours * 3600 + minutes * 60 + seconds);
}

function formatDuration(totalSeconds) {
  const seconds = Math.max(0, Math.round(Number(totalSeconds) || 0));

  if (seconds === 0) {
    return "0 min";
  }

  if (seconds < 60) {
    return "menos de 1 min";
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.round((seconds % 3600) / 60);

  if (hours > 0 && minutes > 0) {
    return `${hours}h ${String(minutes).padStart(2, "0")}min`;
  }

  if (hours > 0) {
    return `${hours}h`;
  }

  return `${minutes} min`;
}

function getCourseModules(course) {
  return Array.isArray(course.modulos) ? course.modulos : [];
}

function getModuleVideos(module) {
  return Array.isArray(module.videos) ? module.videos : [];
}

function getCourseVideos(course) {
  return getCourseModules(course).flatMap((module) => getModuleVideos(module));
}

function getCourseDocuments(course) {
  return normalizeDocumentList(
    getCourseVideos(course).flatMap((video) => normalizeDocumentList(video.documentos || []))
  );
}

function getCourseDurationSeconds(course) {
  return getCourseVideos(course).reduce(
    (total, video) => total + Number(video.duracaoSegundos || 0),
    0
  );
}

function getLearningCategoryNames() {
  return uniqueList(
    learningCategories
      .map((category) => category.nome)
      .map((name) => String(name || "").trim())
      .filter(Boolean)
  );
}

function hasLearningCategory(categoryName) {
  const normalizedName = normalizeLogin(categoryName);
  return learningCategories.some((category) => normalizeLogin(category.nome) === normalizedName);
}

function addLearningCategory(categoryName) {
  const name = String(categoryName || "").trim();

  if (!name) {
    return null;
  }

  if (hasLearningCategory(name)) {
    return null;
  }

  const category = normalizeLearningCategory({
    id: createLearningCategoryId(name),
    nome: name,
  });

  learningCategories.push(category);
  learningCategories.sort((first, second) => first.nome.localeCompare(second.nome, "pt-BR"));
  saveCollection("zipLearningCategories", learningCategories);
  return category;
}

function syncLearningCategoriesFromCourses() {
  learningCourses.forEach((course) => {
    const category = String(course.categoria || "").trim();

    if (category && !hasLearningCategory(category)) {
      learningCategories.push(normalizeLearningCategory({
        id: createLearningCategoryId(category),
        nome: category,
      }));
    }
  });

  learningCategories.sort((first, second) => first.nome.localeCompare(second.nome, "pt-BR"));
}

function isLearningCategoryInUse(categoryName) {
  const normalizedName = normalizeLogin(categoryName);
  return learningCourses.some((course) => normalizeLogin(course.categoria) === normalizedName);
}

function removeLearningCategory(categoryId) {
  const category = learningCategories.find((item) => item.id === categoryId);

  if (!category) {
    return false;
  }

  if (isLearningCategoryInUse(category.nome) || learningCategories.length <= 1) {
    return false;
  }

  const categoryIndex = learningCategories.findIndex((item) => item.id === categoryId);
  learningCategories.splice(categoryIndex, 1);
  saveCollection("zipLearningCategories", learningCategories);
  return true;
}

function renderLearningCategoryOptions() {
  const currentValue = courseCategoryInput.value;
  const categoryNames = getLearningCategoryNames();

  clearElement(courseCategoryInput);

  categoryNames.forEach((categoryName) => {
    const option = document.createElement("option");
    option.value = categoryName;
    option.textContent = categoryName;
    courseCategoryInput.appendChild(option);
  });

  if (categoryNames.includes(currentValue)) {
    courseCategoryInput.value = currentValue;
  } else if (categoryNames.length > 0) {
    courseCategoryInput.value = categoryNames[0];
  }
}

function renderLearningDepartmentOptions() {
  const currentValue = courseDepartmentInput.value;
  const departmentNames = uniqueList([
    ...DEFAULT_LEARNING_DEPARTMENTS,
    ...getLearningDepartments(),
  ]).sort((first, second) => first.localeCompare(second, "pt-BR"));

  clearElement(courseDepartmentInput);

  departmentNames.forEach((departmentName) => {
    const option = document.createElement("option");
    option.value = departmentName;
    option.textContent = departmentName;
    courseDepartmentInput.appendChild(option);
  });

  if (departmentNames.includes(currentValue)) {
    courseDepartmentInput.value = currentValue;
  } else if (departmentNames.length > 0) {
    courseDepartmentInput.value = departmentNames[0];
  }
}

function setLearningCategoryStatus(message, isError = false) {
  learningCategoryStatus.textContent = message;
  learningCategoryStatus.hidden = !message;
  learningCategoryStatus.classList.toggle("is-error", isError);
}

function createLearningCategoryItem(category) {
  const item = document.createElement("div");
  item.className = "learning-category-item";

  const name = document.createElement("span");
  name.textContent = category.nome;

  const removeButton = document.createElement("button");
  removeButton.className = "learning-danger-action";
  removeButton.type = "button";
  removeButton.dataset.categoryId = category.id;
  removeButton.textContent = "Remover";

  if (isLearningCategoryInUse(category.nome) || learningCategories.length <= 1) {
    removeButton.disabled = true;
    removeButton.title = isLearningCategoryInUse(category.nome)
      ? "Categoria em uso por curso cadastrado"
      : "Mantenha pelo menos uma categoria";
  }

  item.append(name, removeButton);
  return item;
}

function getFilteredLearningCategories() {
  const searchTerm = normalizeLogin(learningCategorySearch.value);

  if (!searchTerm) {
    return [...learningCategories];
  }

  return learningCategories.filter((category) =>
    normalizeLogin(category.nome).includes(searchTerm)
  );
}

function renderLearningCategories() {
  renderLearningCategoryOptions();
  renderLearningDepartmentOptions();
  const visibleCategories = getFilteredLearningCategories();

  clearElement(learningCategoryList);

  visibleCategories.forEach((category) => {
    learningCategoryList.appendChild(createLearningCategoryItem(category));
  });

  learningCategoryEmpty.hidden = visibleCategories.length > 0;
}

function getLearningDepartments() {
  return uniqueList(
    learningCourses
      .map((course) => course.departamento || "Geral")
      .map((department) => String(department).trim())
      .filter(Boolean)
  ).sort((first, second) => first.localeCompare(second, "pt-BR"));
}

function syncLearningDepartmentFilter(selectElement) {
  const currentValue = selectElement.value;
  const departments = getLearningDepartments();

  clearElement(selectElement);

  const allOption = document.createElement("option");
  allOption.value = "";
  allOption.textContent = "Todos os departamentos";
  selectElement.appendChild(allOption);

  departments.forEach((department) => {
    const option = document.createElement("option");
    option.value = department;
    option.textContent = department;
    selectElement.appendChild(option);
  });

  selectElement.value = departments.includes(currentValue) ? currentValue : "";
}

function syncLearningDepartmentFilters() {
  syncLearningDepartmentFilter(learningCourseDepartmentFilter);
  syncLearningDepartmentFilter(learningTrackDepartmentFilter);
}

function courseMatchesDepartment(course, department) {
  return !department || normalizeLogin(course.departamento) === normalizeLogin(department);
}

function courseMatchesSearch(course, searchTerm) {
  if (!searchTerm) {
    return true;
  }

  const searchableValues = [
    course.titulo,
    course.categoria,
    course.departamento,
    course.resumo,
    ...getCourseModules(course).map((module) => module.titulo),
    ...getCourseVideos(course).flatMap((video) => [
      video.vimeo,
      ...normalizeDocumentList(video.documentos || []).flatMap((document) => [
        document.nome,
        document.url,
      ]),
    ]),
  ];

  return searchableValues.some((value) => normalizeLogin(value).includes(searchTerm));
}

function getFilteredCoursesByControls(searchValue, departmentValue) {
  const searchTerm = normalizeLogin(searchValue);

  return learningCourses.filter(
    (course) =>
      courseMatchesDepartment(course, departmentValue) &&
      courseMatchesSearch(course, searchTerm)
  );
}

function getLearningViewTitle(view) {
  const titles = {
    [LEARNING_VIEWS.REGISTRATION]: "Cadastros",
    [LEARNING_VIEWS.CATEGORIES]: "Categorias",
    [LEARNING_VIEWS.COURSES]: "Cursos",
    [LEARNING_VIEWS.TRACKS]: "Trilhas",
    [LEARNING_VIEWS.ASSESSMENT]: "Avalia\u00e7\u00f5es",
  };

  return titles[view] || "Aprendizado";
}

function setLearningMenuExpanded(isExpanded) {
  learningMenuExpanded = Boolean(isExpanded);
  navLearning.classList.toggle("is-expanded", learningMenuExpanded);
  navLearning.setAttribute("aria-expanded", String(learningMenuExpanded));
  learningSubmenu.hidden = !learningMenuExpanded;
}

function setActiveLearningMenu(view) {
  learningSubmenuItems.forEach((item) => {
    item.classList.toggle("is-active", item.dataset.learningView === view);
  });
}

function syncLearningMenuAccess(user) {
  learningSubmenuItems.forEach((item) => {
    item.hidden = !canAccessLearningView(user, item.dataset.learningView);
  });
}

function setConfigMenuExpanded(isExpanded) {
  navConfig.classList.toggle("is-expanded", Boolean(isExpanded));
}

function setActiveConfigMenu(view) {
  configMenuItems.forEach((item) => {
    item.classList.toggle("is-active", item.dataset.configView === view);
  });
}

function syncConfigMenuAccess(user) {
  configNavGroup.hidden = !canAccessConfig(user);
  configMenuItems.forEach((item) => {
    item.hidden = !canAccessConfigView(user, item.dataset.configView);
  });
}

function setLearningView(view) {
  const requestedView = Object.values(LEARNING_VIEWS).includes(view)
    ? view
    : LEARNING_VIEWS.COURSES;
  activeLearningView = currentUser && canAccessLearningView(currentUser, requestedView)
    ? requestedView
    : getFirstAvailableLearningView(currentUser);

  if (!activeLearningView) {
    setWorkspaceSection("home", { replaceRoute: true });
    return;
  }

  learningViews.forEach((viewElement) => {
    viewElement.hidden = viewElement.dataset.learningView !== activeLearningView;
  });

  setActiveLearningMenu(activeLearningView);
  workspaceEyebrow.textContent = "Aprendizado";
  workspaceTitle.textContent = getLearningViewTitle(activeLearningView);

  if (activeLearningView === LEARNING_VIEWS.COURSES) {
    renderLearningCourses();
  }

  if (activeLearningView === LEARNING_VIEWS.CATEGORIES) {
    renderLearningCategories();
  }

  if (activeLearningView === LEARNING_VIEWS.TRACKS) {
    renderLearningTracks();
  }

  if (activeLearningView === LEARNING_VIEWS.ASSESSMENT) {
    renderLearningAssessment();
  }

  renderLearningStats();
}

function setConfigView(view) {
  const activeConfigView = Object.values(CONFIG_VIEWS).includes(view)
    ? view
    : CONFIG_VIEWS.USERS;

  if (!currentUser || !canAccessConfigView(currentUser, activeConfigView)) {
    setWorkspaceSection("home", { replaceRoute: true });
    return;
  }

  configViews.forEach((viewElement) => {
    viewElement.hidden = viewElement.dataset.configView !== activeConfigView;
  });

  setActiveConfigMenu(activeConfigView);
  workspaceEyebrow.textContent = "Configura\u00e7\u00f5es";
  workspaceTitle.textContent = "Usu\u00e1rios";
  renderUsersConfig();
}

function getVimeoId(vimeoValue) {
  const value = String(vimeoValue || "").trim();

  if (/^\d+$/.test(value)) {
    return value;
  }

  const match = value.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
  return match ? match[1] : "";
}

function getVimeoEmbedUrl(vimeoValue) {
  const vimeoId = getVimeoId(vimeoValue);

  return vimeoId ? `https://player.vimeo.com/video/${vimeoId}` : "";
}

function getAttachmentName(pdf, index) {
  if (pdf && typeof pdf === "object") {
    return pdf.nome || pdf.name || `PDF ${index + 1}`;
  }

  const cleanedPdf = String(pdf || "").split("?")[0].replace(/\/+$/, "");
  const fallbackName = `PDF ${index + 1}`;

  try {
    const url = new URL(cleanedPdf, window.location.href);
    const lastSegment = url.pathname.split("/").filter(Boolean).pop();
    return lastSegment ? decodeURIComponent(lastSegment) : fallbackName;
  } catch {
    const lastSegment = cleanedPdf.split(/[\\/]/).filter(Boolean).pop();
    return lastSegment || fallbackName;
  }
}

function getDocumentHref(document) {
  return typeof document === "string" ? document : document.url || "";
}

function formatFileSize(bytes) {
  const size = Number(bytes || 0);

  if (!size) {
    return "";
  }

  if (size < 1024 * 1024) {
    return `${Math.ceil(size / 1024)} KB`;
  }

  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function getNextLearningModuleId() {
  learningModuleCounter += 1;
  return `module-editor-${learningModuleCounter}`;
}

function getNextLearningVideoId() {
  learningVideoCounter += 1;
  return `video-editor-${learningVideoCounter}`;
}

function createWrappedInput(labelText, input) {
  const label = document.createElement("label");
  label.className = "field learning-field";

  const labelSpan = document.createElement("span");
  labelSpan.textContent = labelText;

  label.append(labelSpan, input);
  return label;
}

function createTextInput(className, value = "") {
  const input = document.createElement("input");
  input.className = className;
  input.type = "text";
  input.value = value;
  return input;
}

function getVideoEditorDocuments(videoElement) {
  try {
    return normalizeDocumentList(JSON.parse(videoElement.dataset.documents || "[]"));
  } catch {
    return [];
  }
}

function setVideoEditorDocuments(videoElement, documents) {
  videoElement.dataset.documents = JSON.stringify(normalizeDocumentList(documents));
}

function renderVideoDocumentList(videoElement) {
  const list = videoElement.querySelector(".learning-document-list");

  if (!list) {
    return;
  }

  clearElement(list);

  const documents = getVideoEditorDocuments(videoElement);

  if (documents.length === 0) {
    const empty = document.createElement("span");
    empty.className = "learning-document-empty";
    empty.textContent = "Nenhum documento anexado.";
    list.appendChild(empty);
    return;
  }

  documents.forEach((document, index) => {
    const item = document.createElement("div");
    item.className = "learning-document-item";

    const name = document.createElement("span");
    const size = formatFileSize(document.tamanho);
    name.textContent = size ? `${getAttachmentName(document, index)} - ${size}` : getAttachmentName(document, index);

    const removeButton = document.createElement("button");
    removeButton.className = "learning-danger-action";
    removeButton.type = "button";
    removeButton.dataset.action = "remove-document";
    removeButton.dataset.documentIndex = String(index);
    removeButton.textContent = "Remover";

    item.append(name, removeButton);
    list.appendChild(item);
  });
}

function createDocumentUploader(videoElement, documents) {
  const wrapper = document.createElement("div");
  wrapper.className = "learning-document-uploader";

  const label = document.createElement("label");
  label.className = "learning-secondary-action learning-document-uploader__button";
  label.textContent = "Anexar PDF ou documento";

  const input = document.createElement("input");
  input.className = "learning-document-uploader__input";
  input.type = "file";
  input.multiple = true;
  input.accept = ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

  const list = document.createElement("div");
  list.className = "learning-document-list";

  label.appendChild(input);
  wrapper.append(label, list);
  setVideoEditorDocuments(videoElement, documents);
  renderVideoDocumentList(videoElement);

  return wrapper;
}

function readFileAsDocument(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      resolve({
        id: `doc-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
        nome: file.name,
        url: String(reader.result || ""),
        tipo: file.type,
        tamanho: file.size,
      });
    });

    reader.addEventListener("error", () => reject(reader.error));
    reader.readAsDataURL(file);
  });
}

function createLearningVideoEditor(video = {}) {
  const videoElement = document.createElement("article");
  videoElement.className = "learning-video-editor";
  videoElement.dataset.videoId = video.id || getNextLearningVideoId();

  const vimeoInput = createTextInput("learning-video-vimeo", video.vimeo || "");
  vimeoInput.required = true;
  vimeoInput.inputMode = "url";

  const durationInput = createTextInput(
    "learning-video-duration",
    video.duracao || (video.duracaoSegundos ? formatDuration(video.duracaoSegundos) : "")
  );
  durationInput.placeholder = "Ex.: 12 min ou 00:12:30";

  if (video.duracaoSegundos) {
    durationInput.dataset.seconds = String(video.duracaoSegundos);
  }

  const documentsUploader = createDocumentUploader(
    videoElement,
    normalizeDocumentList(video.documentos || [])
  );

  const grid = document.createElement("div");
  grid.className = "learning-video-editor__grid";
  grid.append(
    createWrappedInput("Link ou ID do Vimeo", vimeoInput),
    createWrappedInput("Dura\u00e7\u00e3o", durationInput),
    createWrappedInput("PDF ou documento", documentsUploader)
  );

  const actions = document.createElement("div");
  actions.className = "learning-video-editor__actions";

  const fetchButton = document.createElement("button");
  fetchButton.className = "learning-secondary-action";
  fetchButton.type = "button";
  fetchButton.dataset.action = "fetch-vimeo-duration";
  fetchButton.textContent = "Buscar dura\u00e7\u00e3o no Vimeo";

  const removeButton = document.createElement("button");
  removeButton.className = "learning-danger-action";
  removeButton.type = "button";
  removeButton.dataset.action = "remove-video";
  removeButton.textContent = "Remover v\u00eddeo";

  const status = document.createElement("p");
  status.className = "learning-video-editor__status";
  status.hidden = true;

  actions.append(fetchButton, removeButton, status);
  videoElement.append(grid, actions);
  renderVideoDocumentList(videoElement);

  return videoElement;
}

function createLearningModuleEditor(module = {}) {
  const moduleElement = document.createElement("article");
  moduleElement.className = "learning-module-editor";
  moduleElement.dataset.moduleId = module.id || getNextLearningModuleId();

  const titleInput = createTextInput("learning-module-title", module.titulo || "");
  titleInput.required = true;
  titleInput.placeholder = "Ex.: M\u00f3dulo 1 - Integra\u00e7\u00e3o";

  const durationInput = createTextInput(
    "learning-module-duration",
    formatDuration(module.duracaoSegundos)
  );
  durationInput.readOnly = true;

  const headerGrid = document.createElement("div");
  headerGrid.className = "learning-module-editor__grid";
  headerGrid.append(
    createWrappedInput("T\u00edtulo do M\u00f3dulo", titleInput),
    createWrappedInput("Dura\u00e7\u00e3o Total", durationInput)
  );

  const removeModuleButton = document.createElement("button");
  removeModuleButton.className = "learning-danger-action";
  removeModuleButton.type = "button";
  removeModuleButton.dataset.action = "remove-module";
  removeModuleButton.textContent = "Remover m\u00f3dulo";

  const header = document.createElement("div");
  header.className = "learning-module-editor__header";
  header.append(headerGrid, removeModuleButton);

  const videosList = document.createElement("div");
  videosList.className = "learning-video-list";

  const videos = Array.isArray(module.videos) && module.videos.length > 0
    ? module.videos
    : [normalizeLearningVideo({})];
  videos.forEach((video) => {
    videosList.appendChild(createLearningVideoEditor(video));
  });

  const addVideoButton = document.createElement("button");
  addVideoButton.className = "learning-secondary-action";
  addVideoButton.type = "button";
  addVideoButton.dataset.action = "add-video";
  addVideoButton.textContent = "Adicionar v\u00eddeo";

  moduleElement.append(header, videosList, addVideoButton);
  return moduleElement;
}

function initializeLearningCourseForm() {
  renderLearningCategories();
  courseTitleInput.value = "";
  renderLearningCategoryOptions();
  renderLearningDepartmentOptions();
  courseTotalDurationInput.value = "0 min";
  clearElement(learningCourseModulesList);
  learningCourseModulesList.appendChild(createLearningModuleEditor({
    titulo: "M\u00f3dulo 1",
    videos: [normalizeLearningVideo({})],
  }));
  updateLearningDurationTotals();
}

function updateLearningDurationTotals() {
  let courseTotalSeconds = 0;

  learningCourseModulesList.querySelectorAll(".learning-module-editor").forEach((moduleElement) => {
    let moduleTotalSeconds = 0;

    moduleElement.querySelectorAll(".learning-video-duration").forEach((durationInput) => {
      const parsedSeconds = Number(durationInput.dataset.seconds || 0) ||
        parseDurationToSeconds(durationInput.value);
      moduleTotalSeconds += parsedSeconds;
    });

    const moduleDurationInput = moduleElement.querySelector(".learning-module-duration");

    if (moduleDurationInput) {
      moduleDurationInput.value = formatDuration(moduleTotalSeconds);
    }

    courseTotalSeconds += moduleTotalSeconds;
  });

  courseTotalDurationInput.value = formatDuration(courseTotalSeconds);
  return courseTotalSeconds;
}

function extractLearningModulesFromForm() {
  return Array.from(learningCourseModulesList.querySelectorAll(".learning-module-editor")).map(
    (moduleElement, moduleIndex) => {
      const titleInput = moduleElement.querySelector(".learning-module-title");
      const videos = Array.from(moduleElement.querySelectorAll(".learning-video-editor")).map(
        (videoElement, videoIndex) => {
          const vimeoInput = videoElement.querySelector(".learning-video-vimeo");
          const durationInput = videoElement.querySelector(".learning-video-duration");
          const duracaoSegundos = Number(durationInput.dataset.seconds || 0) ||
            parseDurationToSeconds(durationInput.value);

          return normalizeLearningVideo({
            titulo: `V\u00eddeo ${videoIndex + 1}`,
            vimeo: vimeoInput.value.trim(),
            duracao: durationInput.value.trim(),
            duracaoSegundos,
            documentos: getVideoEditorDocuments(videoElement),
          });
        }
      );

      return normalizeLearningModule({
        titulo: titleInput.value.trim() || `M\u00f3dulo ${moduleIndex + 1}`,
        videos,
      });
    }
  );
}

function setVideoEditorStatus(videoElement, message, isError = false) {
  const status = videoElement.querySelector(".learning-video-editor__status");

  if (!status) {
    return;
  }

  status.textContent = message;
  status.hidden = !message;
  status.classList.toggle("is-error", isError);
}

async function fetchVimeoDurationForVideo(button) {
  const videoElement = button.closest(".learning-video-editor");
  const vimeoInput = videoElement.querySelector(".learning-video-vimeo");
  const durationInput = videoElement.querySelector(".learning-video-duration");
  const vimeoId = getVimeoId(vimeoInput.value);

  if (!vimeoId) {
    setVideoEditorStatus(videoElement, "Informe um link ou ID valido do Vimeo.", true);
    return;
  }

  button.disabled = true;
  setVideoEditorStatus(videoElement, "Buscando dura\u00e7\u00e3o...");

  try {
    const videoUrl = `https://vimeo.com/${vimeoId}`;
    const response = await fetch(
      `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(videoUrl)}`
    );

    if (!response.ok) {
      throw new Error("Vimeo indisponivel");
    }

    const data = await response.json();
    const durationSeconds = Number(data.duration || 0);

    if (!durationSeconds) {
      throw new Error("Duracao nao retornada");
    }

    durationInput.dataset.seconds = String(durationSeconds);
    durationInput.value = formatDuration(durationSeconds);
    updateLearningDurationTotals();
    setVideoEditorStatus(videoElement, `Dura\u00e7\u00e3o atualizada: ${formatDuration(durationSeconds)}.`);
  } catch {
    setVideoEditorStatus(videoElement, "Nao foi possivel buscar. Preencha a duracao manualmente.", true);
  } finally {
    button.disabled = false;
  }
}

function renderLearningStats() {
  const pdfCount = learningCourses.reduce(
    (total, course) => total + getCourseDocuments(course).length,
    0
  );

  learningTotalCourses.textContent = String(learningCourses.length);
  learningTotalPdfs.textContent = String(pdfCount);
  learningTotalAssessments.textContent = String(learningAssessments.length);
}

function createLearningCourseCard(course) {
  const card = document.createElement("article");
  card.className = "learning-course-card";
  const moduleCount = getCourseModules(course).length;
  const videoCount = getCourseVideos(course).length;
  const documentCount = getCourseDocuments(course).length;

  const meta = document.createElement("div");
  meta.className = "learning-course-card__meta";

  const category = document.createElement("span");
  category.className = "learning-badge";
  category.textContent = course.categoria || "Geral";

  const department = document.createElement("span");
  department.className = "learning-badge learning-badge--department";
  department.textContent = course.departamento || "Geral";

  const duration = document.createElement("span");
  duration.textContent = course.duracaoSegundos
    ? formatDuration(course.duracaoSegundos)
    : "Sem dura\u00e7\u00e3o";

  meta.append(category, department, duration);

  const title = document.createElement("h3");
  title.textContent = course.titulo;

  const summary = document.createElement("p");
  summary.textContent = `${moduleCount} m\u00f3dulo${moduleCount === 1 ? "" : "s"} - ${videoCount} v\u00eddeo${videoCount === 1 ? "" : "s"}.`;

  const footer = document.createElement("div");
  footer.className = "learning-course-card__footer";

  const attachments = document.createElement("span");
  attachments.textContent = `${documentCount} documento${documentCount === 1 ? "" : "s"}`;

  const action = document.createElement("button");
  action.className = "learning-secondary-action";
  action.type = "button";
  action.textContent = "Abrir curso";
  action.addEventListener("click", () => openLearningCourse(course));

  footer.append(attachments, action);
  card.append(meta, title, summary, footer);

  return card;
}

function getFilteredLearningCourses() {
  return getFilteredCoursesByControls(
    learningCourseSearch.value,
    learningCourseDepartmentFilter.value
  );
}

function renderLearningCourses() {
  renderLearningDepartmentOptions();
  syncLearningDepartmentFilters();
  const visibleCourses = getFilteredLearningCourses();

  clearElement(learningCoursesGrid);
  visibleCourses.forEach((course) => {
    learningCoursesGrid.appendChild(createLearningCourseCard(course));
  });

  learningCoursesEmpty.hidden = visibleCourses.length > 0;
}

function renderLearningPlayerVideo(video, fallbackTitle) {
  const embedUrl = getVimeoEmbedUrl(video.vimeo);
  clearElement(learningPlayerFrame);

  if (embedUrl) {
    const iframe = document.createElement("iframe");
    iframe.src = embedUrl;
    iframe.title = video.titulo || fallbackTitle;
    iframe.allow = "autoplay; fullscreen; picture-in-picture";
    iframe.allowFullscreen = true;
    learningPlayerFrame.appendChild(iframe);
  } else {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Vimeo inv\u00e1lido para este curso.";
    learningPlayerFrame.appendChild(empty);
  }
}

function createLearningPlayerVideoRow(course, module, video, videoIndex) {
  const row = document.createElement("div");
  row.className = "learning-player-video-row";

  const action = document.createElement("button");
  action.className = "learning-secondary-action";
  action.type = "button";
  action.textContent = `V\u00eddeo ${videoIndex + 1}`;
  action.addEventListener("click", () => renderLearningPlayerVideo(video, course.titulo));

  const details = document.createElement("span");
  details.textContent = video.duracaoSegundos
    ? formatDuration(video.duracaoSegundos)
    : "Sem dura\u00e7\u00e3o";

  row.append(action, details);

  normalizeDocumentList(video.documentos || []).forEach((documentItem, documentIndex) => {
    const link = document.createElement("a");
    link.href = getDocumentHref(documentItem);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = getAttachmentName(documentItem, documentIndex);
    row.appendChild(link);
  });

  return row;
}

function openLearningCourse(course) {
  const firstVideo = getCourseVideos(course).find((video) => video.vimeo);

  learningPlayerTitle.textContent = course.titulo;
  clearElement(learningPlayerAttachments);

  if (firstVideo) {
    renderLearningPlayerVideo(firstVideo, course.titulo);
  } else {
    clearElement(learningPlayerFrame);
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Nenhum v\u00eddeo cadastrado para este curso.";
    learningPlayerFrame.appendChild(empty);
  }

  getCourseModules(course).forEach((module) => {
    const moduleBlock = document.createElement("article");
    moduleBlock.className = "learning-player-module";

    const title = document.createElement("h3");
    title.textContent = `${module.titulo} - ${formatDuration(module.duracaoSegundos)}`;
    moduleBlock.appendChild(title);

    getModuleVideos(module).forEach((video, videoIndex) => {
      moduleBlock.appendChild(createLearningPlayerVideoRow(course, module, video, videoIndex));
    });

    learningPlayerAttachments.appendChild(moduleBlock);
  });

  learningCoursePlayer.hidden = false;
}

function closeLearningCourse() {
  learningCoursePlayer.hidden = true;
  clearElement(learningPlayerFrame);
  clearElement(learningPlayerAttachments);
}

function renderLearningTracks() {
  syncLearningDepartmentFilters();

  const filteredCourses = getFilteredCoursesByControls(
    learningTrackSearch.value,
    learningTrackDepartmentFilter.value
  );
  const tracksByCategory = filteredCourses.reduce((tracks, course) => {
    const category = course.categoria || "Geral";
    tracks[category] = tracks[category] || [];
    tracks[category].push(course);
    return tracks;
  }, {});
  const trackNames = Object.keys(tracksByCategory).sort((first, second) =>
    first.localeCompare(second)
  );

  clearElement(learningTrackList);
  trackNames.forEach((trackName) => {
    const track = document.createElement("article");
    track.className = "learning-track";

    const title = document.createElement("h3");
    title.textContent = trackName;

    const list = document.createElement("ol");
    tracksByCategory[trackName].forEach((course) => {
      const item = document.createElement("li");
      const moduleCount = getCourseModules(course).length;
      item.textContent = `${course.titulo} - ${course.departamento || "Geral"} - ${moduleCount} m\u00f3dulo${moduleCount === 1 ? "" : "s"} - ${formatDuration(course.duracaoSegundos)}`;
      list.appendChild(item);
    });

    track.append(title, list);
    learningTrackList.appendChild(track);
  });

  learningTracksEmpty.hidden = trackNames.length > 0;
}

function renderLearningCourseOptions() {
  clearElement(assessmentCourseSelect);

  if (learningCourses.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Nenhum curso cadastrado";
    option.disabled = true;
    option.selected = true;
    assessmentCourseSelect.appendChild(option);
    return;
  }

  learningCourses.forEach((course) => {
    const option = document.createElement("option");
    option.value = course.id;
    option.textContent = course.titulo;
    assessmentCourseSelect.appendChild(option);
  });
}

function getCourseById(courseId) {
  return learningCourses.find((course) => course.id === courseId);
}

function getCurrentUserAssessments() {
  const userId = currentUser ? currentUser.id : "";
  return learningAssessments.filter((assessment) => assessment.usuarioId === userId);
}

function createLearningResultItem(assessment) {
  const course = getCourseById(assessment.cursoId);
  const item = document.createElement("article");
  item.className = "learning-result";

  const title = document.createElement("strong");
  title.textContent = course ? course.titulo : "Curso removido";

  const details = document.createElement("span");
  const date = new Date(assessment.criadoEm).toLocaleDateString("pt-BR");
  details.textContent = `${assessment.nota}/100 - ${assessment.status} - ${date}`;

  item.append(title, details);

  if (assessment.observacoes) {
    const notes = document.createElement("p");
    notes.textContent = assessment.observacoes;
    item.appendChild(notes);
  }

  return item;
}

function renderLearningResults() {
  const assessments = getCurrentUserAssessments();

  clearElement(learningResultList);
  assessments.forEach((assessment) => {
    learningResultList.appendChild(createLearningResultItem(assessment));
  });

  learningResultsEmpty.hidden = assessments.length > 0;
}

function renderLearningAssessment() {
  learningAssessmentUser.textContent = currentUser
    ? currentUser.nomeCompleto || currentUser.login || "Usu\u00e1rio"
    : "Usu\u00e1rio";
  renderLearningCourseOptions();
  renderLearningResults();
}

function renderHomeUpdates() {
  const updateItems = Array.from(homeUpdatesList.querySelectorAll("li"));
  const totalPages = Math.max(1, Math.ceil(updateItems.length / HOME_UPDATES_PER_PAGE));

  homeUpdatesPage = Math.min(Math.max(homeUpdatesPage, 1), totalPages);

  updateItems.forEach((item, index) => {
    const pageIndex = Math.floor(index / HOME_UPDATES_PER_PAGE) + 1;
    item.hidden = pageIndex !== homeUpdatesPage;
  });

  homeUpdatesPrevButton.disabled = homeUpdatesPage <= 1;
  homeUpdatesNextButton.disabled = homeUpdatesPage >= totalPages;
  homeUpdatesPageStatus.textContent = `P\u00e1gina ${homeUpdatesPage} de ${totalPages}`;
}

function goToHomeUpdatesPage(direction) {
  homeUpdatesPage += direction;
  renderHomeUpdates();
}

function saveLearningCategory(event) {
  event.preventDefault();

  if (!learningCategoryForm.checkValidity()) {
    learningCategoryForm.reportValidity();
    return;
  }

  const category = addLearningCategory(learningCategoryNameInput.value);

  if (!category) {
    setLearningCategoryStatus("Categoria ja cadastrada.", true);
    return;
  }

  learningCategoryForm.reset();
  renderLearningCategories();
  courseCategoryInput.value = category.nome;
  setLearningCategoryStatus("Categoria adicionada.");
}

function saveLearningCourse(event) {
  event.preventDefault();

  if (!learningCourseForm.checkValidity()) {
    learningCourseForm.reportValidity();
    return;
  }

  const course = normalizeLearningCourse({
    id: createLearningCourseId(courseTitleInput.value),
    titulo: courseTitleInput.value.trim(),
    categoria: courseCategoryInput.value.trim() || "Geral",
    departamento: courseDepartmentInput.value.trim() || "Geral",
    modulos: extractLearningModulesFromForm(),
    criadoEm: new Date().toISOString(),
  });

  learningCourses.unshift(course);
  saveCollection("zipLearningCourses", learningCourses);
  initializeLearningCourseForm();
  learningCourseStatus.textContent = "Curso salvo localmente.";
  learningCourseStatus.hidden = false;
  renderLearningCategories();
  renderLearningStats();
  renderLearningCourses();
  renderLearningTracks();
  renderLearningAssessment();
}

function saveLearningAssessment(event) {
  event.preventDefault();

  if (learningCourses.length === 0) {
    learningAssessmentStatusMessage.textContent = "Cadastre um curso antes da avalia\u00e7\u00e3o.";
    learningAssessmentStatusMessage.hidden = false;
    return;
  }

  if (!learningAssessmentForm.checkValidity()) {
    learningAssessmentForm.reportValidity();
    return;
  }

  const assessment = normalizeLearningAssessment({
    id: `avaliacao-${Date.now().toString(36)}`,
    usuarioId: currentUser ? currentUser.id : "",
    cursoId: assessmentCourseSelect.value,
    nota: assessmentScoreInput.value,
    status: assessmentStatusSelect.value,
    observacoes: assessmentNotesInput.value.trim(),
    criadoEm: new Date().toISOString(),
  });

  learningAssessments.unshift(assessment);
  saveCollection("zipLearningAssessments", learningAssessments);
  learningAssessmentForm.reset();
  learningAssessmentStatusMessage.textContent = "Avalia\u00e7\u00e3o registrada localmente.";
  learningAssessmentStatusMessage.hidden = false;
  renderLearningStats();
  renderLearningAssessment();
}

function getUserTypeLabel(type) {
  return normalizeUserType(type) === USER_TYPES.ADMIN ? "Administrador" : "Colaborador";
}

function getUserStatusLabel(status) {
  return status === USER_STATUS.INACTIVE ? "Inativo" : "Ativo";
}

function createUserIdFromLogin(login) {
  const baseId = normalizeLogin(login).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  let userId = `usr-${baseId || Date.now().toString(36)}`;
  let suffix = 1;

  while (users.some((user) => user.id === userId)) {
    suffix += 1;
    userId = `usr-${baseId}-${suffix}`;
  }

  return userId;
}

function getSelectedUserPermissionModules() {
  return Array.from(userConfigPermissionInputs)
    .filter((input) => input.checked)
    .map((input) => input.value);
}

function buildUserAccessFromModules(type, moduleIds) {
  if (normalizeUserType(type) === USER_TYPES.ADMIN) {
    return getAdminAccess();
  }

  return moduleIds.map((moduleId) => ({
    clienteId: "*",
    moduloId: moduleId,
    acoes: [ACTIONS.VIEW],
  }));
}

function getUserPermissionModules(user) {
  const access = getUserAccess(user);

  if (access.some((item) => item.moduloId === "*")) {
    return Object.keys(MODULE_LABELS);
  }

  return access.map((item) => item.moduloId).filter((moduleId) => MODULE_LABELS[moduleId]);
}

function setUserConfigStatus(message, isError = false) {
  userConfigStatusMessage.textContent = message;
  userConfigStatusMessage.hidden = !message;
  userConfigStatusMessage.classList.toggle("is-error", isError);
}

function resetUserConfigForm() {
  userConfigForm.reset();
  userConfigIdInput.value = "";
  userConfigModalTitle.textContent = "Novo usu\u00e1rio";
  userConfigTypeInput.value = USER_TYPES.COLLABORATOR;
  userConfigStatusInput.value = USER_STATUS.ACTIVE;
  userConfigPermissionInputs.forEach((input) => {
    input.checked = ["ferramentas.analisador-extratos", "aprendizado.cursos", "aprendizado.trilhas", "aprendizado.avaliacoes"].includes(input.value);
  });
  userConfigLoginInput.disabled = false;
  setUserConfigStatus("");
}

function fillUserConfigForm(user) {
  userConfigIdInput.value = user.id;
  userConfigModalTitle.textContent = "Editar usu\u00e1rio";
  userConfigNameInput.value = user.nomeCompleto;
  userConfigLoginInput.value = user.login;
  userConfigLoginInput.disabled = Boolean(user.isTestUser);
  userConfigEmailInput.value = user.email;
  userConfigPasswordInput.value = "";
  userConfigPasswordInput.placeholder = "Manter senha atual";
  userConfigTypeInput.value = normalizeUserType(user.tipo);
  userConfigStatusInput.value = user.status;

  const userModules = getUserPermissionModules(user);
  userConfigPermissionInputs.forEach((input) => {
    input.checked = userModules.includes(input.value);
  });

  setUserConfigStatus("");
}

function openUserConfigModal(user) {
  if (user) {
    fillUserConfigForm(user);
  } else {
    resetUserConfigForm();
  }

  userConfigModal.hidden = false;
  document.body.classList.add("is-modal-open");
  userConfigNameInput.focus();
}

function closeUserConfigModal() {
  userConfigModal.hidden = true;
  document.body.classList.remove("is-modal-open");
}

async function saveUserConfig(event) {
  event.preventDefault();

  if (!userConfigForm.checkValidity()) {
    userConfigForm.reportValidity();
    return;
  }

  const userId = userConfigIdInput.value || createUserIdFromLogin(userConfigLoginInput.value);
  const existingUser = users.find((user) => user.id === userId);
  const type = normalizeUserType(userConfigTypeInput.value);
  const selectedModules = getSelectedUserPermissionModules();

  if (type === USER_TYPES.COLLABORATOR && selectedModules.length === 0) {
    setUserConfigStatus("Selecione pelo menos um acesso para o colaborador.", true);
    return;
  }

  const duplicateLogin = users.some(
    (user) => user.id !== userId && normalizeLogin(user.login) === normalizeLogin(userConfigLoginInput.value)
  );

  if (duplicateLogin) {
    setUserConfigStatus("Ja existe um usuario com este login.", true);
    return;
  }

  const user = normalizeUser({
    ...(existingUser || {}),
    id: userId,
    nomeCompleto: userConfigNameInput.value.trim(),
    email: userConfigEmailInput.value,
    login: userConfigLoginInput.value.trim(),
    senha: userConfigPasswordInput.value || (existingUser ? existingUser.senha : ""),
    tipo: type,
    status: userConfigStatusInput.value,
    clienteId: existingUser ? existingUser.clienteId : "zip",
    clientesPermitidos: existingUser ? existingUser.clientesPermitidos : ["*"],
    modulosPermitidos: type === USER_TYPES.ADMIN ? ["*"] : selectedModules,
    perfilId: "",
    authMethods: existingUser ? existingUser.authMethods : [AUTH_METHODS.PASSWORD],
    dominioPermitido: existingUser ? existingUser.dominioPermitido : "",
    googleSub: existingUser ? existingUser.googleSub : "",
    acessos: buildUserAccessFromModules(type, selectedModules),
    isTestUser: existingUser ? existingUser.isTestUser : false,
  });

  const existingIndex = users.findIndex((item) => item.id === user.id);

  if (existingIndex >= 0) {
    users[existingIndex] = user;
  } else {
    users.push(user);
  }

  saveUsers();
  try {
    await saveCentralUser(user);
  } catch {
    setUserConfigStatus("Usuario salvo localmente, mas a central nao respondeu.", true);
    return;
  }

  renderUsersConfig();
  closeUserConfigModal();
}

function createUserConfigCard(user) {
  const card = document.createElement("article");
  card.className = "config-user-card";

  const name = document.createElement("strong");
  name.className = "config-user-card__name";
  name.textContent = user.nomeCompleto || user.login;

  const email = document.createElement("span");
  email.textContent = user.email || "sem e-mail";

  const type = document.createElement("span");
  type.textContent = getUserTypeLabel(user.tipo);

  const status = document.createElement("span");
  status.className = "config-user-status";
  status.classList.toggle("is-inactive", user.status === USER_STATUS.INACTIVE);
  status.textContent = getUserStatusLabel(user.status);

  const editButton = document.createElement("button");
  editButton.className = "learning-secondary-action";
  editButton.type = "button";
  editButton.dataset.userId = user.id;
  editButton.textContent = "Editar";

  card.append(name, email, type, status, editButton);
  return card;
}

function getConfigUsers() {
  const usersByIdentity = new Map();

  users.forEach((user) => {
    const identityKey = normalizeEmail(user.email) || normalizeLogin(user.login) || user.id;
    const currentUserForIdentity = usersByIdentity.get(identityKey);

    if (
      !currentUserForIdentity ||
      (user.googleSub && !currentUserForIdentity.googleSub) ||
      (isConfiguredAdminEmail(user.email) && currentUserForIdentity.isTestUser)
    ) {
      usersByIdentity.set(identityKey, user);
    }
  });

  return Array.from(usersByIdentity.values());
}

function exportUsersDirectory() {
  const usersDirectory = getConfigUsers().map((user) => ({
    ...user,
    senha: user.senha ? "" : "",
    googleSub: user.googleSub || "",
  }));
  const payload = {
    exportadoEm: new Date().toISOString(),
    origem: "Intranet ZIP",
    usuarios: usersDirectory,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `usuarios-intranet-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function mergeImportedUsers(importedUsers) {
  let mergedCount = 0;

  importedUsers.map(normalizeUser).forEach((importedUser) => {
    const existingIndex = users.findIndex((user) => {
      const sameEmail = importedUser.email && normalizeEmail(user.email) === importedUser.email;
      const sameLogin = importedUser.login && normalizeLogin(user.login) === normalizeLogin(importedUser.login);
      return user.id === importedUser.id || sameEmail || sameLogin;
    });

    if (existingIndex >= 0) {
      users[existingIndex] = {
        ...users[existingIndex],
        ...importedUser,
        senha: users[existingIndex].senha || importedUser.senha,
      };
    } else {
      users.push(importedUser);
    }

    mergedCount += 1;
  });

  saveUsers();
  renderUsersConfig();
  return mergedCount;
}

async function importUsersDirectory(file) {
  if (!file) {
    return;
  }

  try {
    const payload = JSON.parse(await file.text());
    const importedUsers = Array.isArray(payload) ? payload : payload.usuarios;

    if (!Array.isArray(importedUsers)) {
      throw new Error("Formato invalido");
    }

    const mergedCount = mergeImportedUsers(importedUsers);
    window.alert(`${mergedCount} usuario${mergedCount === 1 ? "" : "s"} sincronizado${mergedCount === 1 ? "" : "s"}.`);
  } catch {
    window.alert("Nao foi possivel importar a lista de usuarios. Verifique o arquivo JSON.");
  } finally {
    userConfigImportFile.value = "";
  }
}

async function renderUsersConfig() {
  await syncCentralUsersDirectory();
  clearElement(configUserList);

  getConfigUsers()
    .slice()
    .sort((first, second) => (first.nomeCompleto || first.login).localeCompare(second.nomeCompleto || second.login, "pt-BR"))
    .forEach((user) => {
      configUserList.appendChild(createUserConfigCard(user));
    });
}

function renderAuthenticatedApp(user, options = {}) {
  currentUser = user;
  const availableTools = getAvailableTools(user);
  const requestedRoute = options.route || getRouteForPath();
  const canOpenRequestedRoute = canAccessRoute(user, requestedRoute);
  const route = canOpenRequestedRoute ? requestedRoute : getFallbackRoute(user);

  clearToolsGrid();
  clearToolsSubmenu();
  availableTools.forEach((tool) => {
    toolsGrid.appendChild(createToolCard(tool));
    toolsSubmenu.appendChild(createToolSubmenuItem(tool));
  });

  toolFrameView.hidden = true;
  toolFrame.removeAttribute("src");
  toolsGrid.hidden = false;
  toolsEmpty.hidden = availableTools.length > 0;
  navTools.closest(".sidebar__group").hidden = availableTools.length === 0;
  setToolsMenuExpanded(availableTools.length > 0);
  syncLearningMenuAccess(user);
  syncConfigMenuAccess(user);
  learningNavGroup.hidden = !canAccessLearning(user);
  setLearningMenuExpanded(false);
  setConfigMenuExpanded(false);
  activeLearningView = LEARNING_VIEWS.COURSES;
  initializeLearningCourseForm();
  resetUserConfigForm();
  renderLearningStats();
  loginPage.classList.add("is-authenticated");
  appShell.hidden = false;
  setWorkspaceSection(route.section, {
    learningView: route.learningView,
    configView: route.configView,
    toolId: route.toolId,
    routePath: route.path,
    replaceRoute: options.replaceRoute || !canOpenRequestedRoute,
  });
}

function setWorkspaceSection(section, options = {}) {
  const isHome = section === "home";
  const isTools = section === "tools";
  const isLearning = section === "learning";
  const isConfig = section === "config";

  homeSection.hidden = !isHome;
  toolsSection.hidden = !isTools;
  learningSection.hidden = !isLearning;
  configSection.hidden = !isConfig;
  navHome.classList.toggle("is-active", isHome);
  navTools.classList.toggle("is-active", isTools);
  navLearning.classList.toggle("is-active", isLearning);
  navConfig.classList.toggle("is-active", isConfig);

  if (isHome) {
    setActiveToolMenu("");
    setToolsMenuExpanded(false);
    setLearningMenuExpanded(false);
    setConfigMenuExpanded(false);
    toolFrameView.hidden = true;
    toolFrame.removeAttribute("src");
    workspaceEyebrow.textContent = "Home";
    workspaceTitle.textContent = "\u00daltimas atualiza\u00e7\u00f5es";
    renderHomeUpdates();
  }

  if (isTools) {
    setLearningMenuExpanded(false);
    setConfigMenuExpanded(false);

    if (options.toolId) {
      const tool = getAvailableTools(currentUser).find((availableTool) => availableTool.id === options.toolId);

      if (tool && tool.internalPath) {
        showInternalToolFrame(tool);
      } else {
        showToolsGrid();
      }
    } else if (!options.preserveToolView) {
      showToolsGrid();
    }
  }

  if (isLearning) {
    setActiveToolMenu("");
    setToolsMenuExpanded(false);
    setConfigMenuExpanded(false);
    setLearningMenuExpanded(true);
    toolFrameView.hidden = true;
    toolFrame.removeAttribute("src");
    setLearningView(options.learningView || activeLearningView);
  }

  if (isConfig) {
    setActiveToolMenu("");
    setToolsMenuExpanded(false);
    setLearningMenuExpanded(false);
    setConfigMenuExpanded(true);
    toolFrameView.hidden = true;
    toolFrame.removeAttribute("src");
    setConfigView(options.configView || CONFIG_VIEWS.USERS);
  }

  if (!options.skipRouteUpdate) {
    updateRoute(getRouteForWorkspace(section, options), Boolean(options.replaceRoute));
  }
}

function logout() {
  currentSession = null;
  currentUser = null;
  sessionStorage.removeItem("zipCurrentSession");
  appShell.hidden = true;
  loginPage.classList.remove("is-authenticated");
  toolFrameView.hidden = true;
  configSection.hidden = true;
  closeUserConfigModal();
  toolFrame.removeAttribute("src");
  loginForm.reset();
  clearLoginError();
  clearLoginSuccess();
  clearGoogleError();
  showView(loginForm);
  window.history.replaceState({}, "", ROUTES.LOGIN);
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

async function showLoginSuccess(user, authMethod) {
  if (user && authMethod) {
    const syncedUser = await syncCentralLogin(user, authMethod);
    startSession(syncedUser, authMethod);
    renderAuthenticatedApp(syncedUser);
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
  let user = findUserByEmail(googleEmail);

  if (!googleEmail || profile.email_verified === false) {
    showGoogleError("Conta Google sem e-mail verificado.");
    return;
  }

  if (!user) {
    if (!canAutoCreateInternalGoogleUser(profile, hostedDomain)) {
      showGoogleError("Use uma conta Google do dominio zipcontabilidade.com.br.");
      return;
    }

    user = createInternalGoogleUser(profile, hostedDomain);
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

function hasAuthHashRoute() {
  return (
    window.location.hash === "#recuperar-senha" ||
    window.location.hash.startsWith("#redefinir-senha")
  );
}

function bootstrapApp() {
  if (hasAuthHashRoute()) {
    syncViewFromHash();
    return;
  }

  if (restoreStoredSession()) {
    return;
  }

  syncViewFromHash();
}

function syncWorkspaceFromRoute() {
  if (!currentUser) {
    bootstrapApp();
    return;
  }

  const route = getRouteForPath();
  const canOpenRequestedRoute = canAccessRoute(currentUser, route);
  const nextRoute = canOpenRequestedRoute ? route : getFallbackRoute(currentUser);

  setWorkspaceSection(nextRoute.section, {
    learningView: nextRoute.learningView,
    configView: nextRoute.configView,
    toolId: nextRoute.toolId,
    routePath: nextRoute.path,
    replaceRoute: !canOpenRequestedRoute,
  });
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
navTools.addEventListener("click", () => {
  if (getAvailableTools(currentUser).length === 0) {
    return;
  }

  const wasToolsActive = navTools.classList.contains("is-active");

  setWorkspaceSection("tools");
  setToolsMenuExpanded(wasToolsActive ? !toolsMenuExpanded : true);
});
navHome.addEventListener("click", () => setWorkspaceSection("home"));
navLearning.addEventListener("click", () => {
  const wasLearningActive = navLearning.classList.contains("is-active");
  const firstLearningView = getFirstAvailableLearningView(currentUser);

  setWorkspaceSection("learning", {
    learningView: firstLearningView || LEARNING_VIEWS.COURSES,
    routePath: LEARNING_VIEW_ROUTES[firstLearningView] || ROUTES.LEARNING,
  });
  setLearningMenuExpanded(wasLearningActive ? !learningMenuExpanded : true);
});
learningSubmenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (!canAccessLearningView(currentUser, item.dataset.learningView)) {
      return;
    }

    setWorkspaceSection("learning", { learningView: item.dataset.learningView });
  });
});
navConfig.addEventListener("click", () => {
  if (!canAccessConfig(currentUser)) {
    return;
  }

  setWorkspaceSection("config", {
    configView: CONFIG_VIEWS.USERS,
    routePath: ROUTES.CONFIG,
  });
});
configMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (!canAccessConfigView(currentUser, item.dataset.configView)) {
      return;
    }

    setWorkspaceSection("config", { configView: item.dataset.configView });
  });
});
toolBackButton.addEventListener("click", () => setWorkspaceSection("tools"));
learningCategoryForm.addEventListener("submit", saveLearningCategory);
learningCategoryNameInput.addEventListener("input", () => {
  setLearningCategoryStatus("");
});
learningCategorySearch.addEventListener("input", renderLearningCategories);
learningCategoryList.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-category-id]");

  if (!removeButton) {
    return;
  }

  const removed = removeLearningCategory(removeButton.dataset.categoryId);

  if (!removed) {
    setLearningCategoryStatus("Categoria em uso ou unica categoria disponivel.", true);
    return;
  }

  renderLearningCategories();
  setLearningCategoryStatus("Categoria removida.");
});
learningAddModuleButton.addEventListener("click", () => {
  const moduleNumber = learningCourseModulesList.querySelectorAll(".learning-module-editor").length + 1;
  learningCourseModulesList.appendChild(createLearningModuleEditor({
    titulo: `M\u00f3dulo ${moduleNumber}`,
    videos: [normalizeLearningVideo({})],
  }));
  updateLearningDurationTotals();
});
learningCourseModulesList.addEventListener("click", async (event) => {
  const actionButton = event.target.closest("[data-action]");

  if (!actionButton) {
    return;
  }

  const moduleElement = actionButton.closest(".learning-module-editor");
  const videoElement = actionButton.closest(".learning-video-editor");
  const action = actionButton.dataset.action;

  if (action === "remove-module" && moduleElement) {
    moduleElement.remove();

    if (learningCourseModulesList.children.length === 0) {
      learningCourseModulesList.appendChild(createLearningModuleEditor({
        titulo: "M\u00f3dulo 1",
        videos: [normalizeLearningVideo({})],
      }));
    }

    updateLearningDurationTotals();
    return;
  }

  if (action === "add-video" && moduleElement) {
    moduleElement.querySelector(".learning-video-list").appendChild(createLearningVideoEditor({}));
    updateLearningDurationTotals();
    return;
  }

  if (action === "remove-video" && videoElement && moduleElement) {
    const videoList = moduleElement.querySelector(".learning-video-list");
    videoElement.remove();

    if (videoList.children.length === 0) {
      videoList.appendChild(createLearningVideoEditor({}));
    }

    updateLearningDurationTotals();
    return;
  }

  if (action === "remove-document" && videoElement) {
    const documents = getVideoEditorDocuments(videoElement);
    documents.splice(Number(actionButton.dataset.documentIndex || 0), 1);
    setVideoEditorDocuments(videoElement, documents);
    renderVideoDocumentList(videoElement);
    return;
  }

  if (action === "fetch-vimeo-duration" && videoElement) {
    await fetchVimeoDurationForVideo(actionButton);
  }
});
learningCourseModulesList.addEventListener("change", async (event) => {
  if (!event.target.classList.contains("learning-document-uploader__input")) {
    return;
  }

  const videoElement = event.target.closest(".learning-video-editor");
  const files = Array.from(event.target.files || []);

  if (!videoElement || files.length === 0) {
    return;
  }

  setVideoEditorStatus(videoElement, "Anexando documento...");

  try {
    const currentDocuments = getVideoEditorDocuments(videoElement);
    const newDocuments = await Promise.all(files.map(readFileAsDocument));
    setVideoEditorDocuments(videoElement, [...currentDocuments, ...newDocuments]);
    renderVideoDocumentList(videoElement);
    setVideoEditorStatus(videoElement, "Documento anexado localmente.");
    event.target.value = "";
  } catch {
    setVideoEditorStatus(videoElement, "Nao foi possivel anexar este documento.", true);
  }
});
learningCourseModulesList.addEventListener("input", (event) => {
  if (event.target.classList.contains("learning-video-duration")) {
    delete event.target.dataset.seconds;
    updateLearningDurationTotals();
  }

  if (event.target.classList.contains("learning-video-vimeo")) {
    const videoElement = event.target.closest(".learning-video-editor");
    setVideoEditorStatus(videoElement, "");
  }
});
learningCourseForm.addEventListener("submit", saveLearningCourse);
learningCourseForm.addEventListener("reset", (event) => {
  event.preventDefault();
  initializeLearningCourseForm();
  learningCourseStatus.hidden = true;
});
learningCourseSearch.addEventListener("input", renderLearningCourses);
learningCourseDepartmentFilter.addEventListener("change", renderLearningCourses);
learningPlayerClose.addEventListener("click", closeLearningCourse);
learningTrackSearch.addEventListener("input", renderLearningTracks);
learningTrackDepartmentFilter.addEventListener("change", renderLearningTracks);
learningAssessmentForm.addEventListener("submit", saveLearningAssessment);
learningAssessmentForm.addEventListener("input", () => {
  learningAssessmentStatusMessage.hidden = true;
});
homeUpdatesPrevButton.addEventListener("click", () => goToHomeUpdatesPage(-1));
homeUpdatesNextButton.addEventListener("click", () => goToHomeUpdatesPage(1));
userConfigForm.addEventListener("submit", saveUserConfig);
userConfigNewButton.addEventListener("click", () => openUserConfigModal());
userConfigExportButton.addEventListener("click", exportUsersDirectory);
userConfigImportButton.addEventListener("click", () => userConfigImportFile.click());
userConfigImportFile.addEventListener("change", () => {
  importUsersDirectory(userConfigImportFile.files[0]);
});
userConfigResetButton.addEventListener("click", resetUserConfigForm);
userConfigCloseButton.addEventListener("click", closeUserConfigModal);
userConfigModal.addEventListener("click", (event) => {
  if (event.target.closest("[data-modal-close]")) {
    closeUserConfigModal();
  }
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !userConfigModal.hidden) {
    closeUserConfigModal();
  }
});
userConfigTypeInput.addEventListener("change", () => {
  if (userConfigTypeInput.value === USER_TYPES.ADMIN) {
    userConfigPermissionInputs.forEach((input) => {
      input.checked = true;
    });
  }
});
configUserList.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-user-id]");

  if (!editButton) {
    return;
  }

  const user = users.find((item) => item.id === editButton.dataset.userId);

  if (user) {
    openUserConfigModal(user);
  }
});

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

bootstrapApp();

window.handleGoogleCredentialResponse = handleGoogleCredentialResponse;
window.addEventListener("load", initializeGoogleLogin);
window.addEventListener("hashchange", syncViewFromHash);
window.addEventListener("popstate", syncWorkspaceFromRoute);

window.zipAuthModel = {
  clients,
  modules,
  tools,
  learningCourses,
  learningAssessments,
  learningCategories,
  permissionProfiles,
  users,
  getModuleById,
  getUserAccess,
  getCurrentSession: () => currentSession,
};
