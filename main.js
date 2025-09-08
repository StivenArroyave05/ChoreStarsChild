// main.js
const APP_VERSION = "1.0.01";  // Actualízalo en cada release

// 1) Traducciones
const translations = {
  es: {
    appTitle:               "Chore Stars Child",
    panelSubtitle:          "Panel de tareas, deberes y recompensas para",
    earnedLabel:            "Ganadas",
    lostLabel:              "Perdidas",
    redeemedLabel:          "Canjeadas",
    totalLabel:             "Totales",
    tabTasks:               "Tareas",
    tabRewards:             "Recompensas",
    tabSettings:            "Configuración",
    assignedTasks:          "Tareas asignadas",
    dailyCutoffLabel:       "Hora límite diaria",
    todayLabel:             "Hoy es:",
    cutoffIntro:            "Completa antes de",
    fromLabel:              "Desde:",
    toLabel:                "Hasta:",
    currentWeekLabel:       "Semana en curso",
    weeklyHistoryLabel:     "Historial de semanas anteriores",
    noHistory:              "No hay semanas cerradas aún.",
    badgesLabel:            "🏅 Insignias desbloqueadas esta semana",
    parentsIntro:           "Espacio para uso exclusivo de los padres",
    childManagementLabel:   "Gestión de niños",
    addChildBtn:            "Añadir niño",
    childNamePlaceholder:   "Nombre del niño",
    cutoffTimeLabel:        "Hora límite diaria para completar las tareas",
    saveCutoffBtn:          "Guardar hora",
    pinLabel:               "PIN de acceso al panel de configuración",
    pinPlaceholder:         "Ej: 1234",
    savePinBtn:             "Guardar PIN",
    pinSavedMsg:            "PIN guardado correctamente.",
    taskManagementLabel:    "Gestión de tareas",
    taskNamePlaceholder:    "Nombre de la tarea",
    taskPointsPlaceholder:  "Puntos",
    addTaskBtn:             "Añadir tarea",
    rewardManagementLabel:  "Gestión de recompensas",
    rewardNamePlaceholder:  "Nombre de la recompensa",
    rewardCostPlaceholder:  "Costo",
    addRewardBtn:           "Añadir recompensa",
    closeWeekLabel:         "Cerrar semana y guardar historial",
    closeWeekBtn:           "Cerrar semana",
    closedWeeksLabel:       "Historial de semanas cerradas",
    installUpdatesLabel:    "Recarga la versión más reciente de la app",
    installUpdatesBtn:      "Instalar actualizaciones",
    resetAppLabel:          "Reiniciar la app al estado inicial",
    resetAppBtn:            "Reiniciar aplicación",
    languageLabel:          "Idioma:",
    welcomeTitle:           "Bienvenido a Chore Stars Child",
    welcomeDesc:            "Organiza tareas y recompensas de forma divertida y segura.",
    startButton:            "Comenzar",
    errorNoCutoffField:     "Error: no encontré el campo de hora límite.",
    invalidTimeMsg:         "Por favor ingresa una hora válida.",
    cutoffSaved:            "Hora límite guardada: {time}",
    constantEffort:         "Esfuerzo constante",
    rewardExplorer:         "Explorador recompensas",
    totalDiscipline:        "Disciplina total",
    footerText:             "Chore Stars Child - Todos los derechos reservados - 2025 – Versión {version}",
    invalidChildName:       "Ingresa un nombre válido",
    confirmDeleteChild:     "¿Eliminar a \"{name}\"?",
    createTaskInstructions: "Para crear tareas: 1. Ingresa nombre del niño y guárdalo, 2. Selecciona un niño o si es solo uno se seleccionará por defecto, 3. Puedes agregar tareas a cada niño seleccionado de manera independiente.",
    promptNewTaskName:      "Nuevo nombre de la tarea:",
    promptNewTaskPoints:    "Nuevos puntos:",
    invalidRewardNameCost:  "Completa nombre y costo válido",
    promptNewRewardName:    "Nuevo nombre de la recompensa:",
    promptNewRewardCost:    "Nuevo coste en puntos:",
    invalidPinMsg:          "Por favor ingresa un PIN válido",
    pinSavedMsg:            "PIN guardado correctamente.",
    noActivityMsg:          "No hay actividad registrada esta semana.",
    confirmCloseWeek:       "¿Cerrar semana y guardar historial?",
    weekClosedMsg:          "Semana cerrada y guardada",
    confirmResetApp:        "⚠️ Esto borrará TODOS los datos y recargará la app. ¿Continuar?",
    resetSuccessMsg:        "✅ Aplicación reiniciada. Comenzando de cero…",
    swNotRegistered:        "No hay SW registrado.",
    searchingUpdates:       "Buscando actualizaciones…",
    selectChildBtn:         "Seleccionar",
    deleteChildBtn:         "Eliminar",
    pointsSuffix:           "pts",
    markDoneBtn:            "Hecho",
    markedDoneBtn:          "✅ Hecho",
    deleteRewardBtn:        "Eliminar",
    penaltyAppliedMsg:      "⚠️ Penalización aplicada",
    shareTitle:             "Recompensa canjeada",
    shareTextTemplate:      "¡{child} acaba de canjear \"{reward}\" en Chore Stars! 🎉",
    clipboardCopiedMsg:     "Texto copiado al portapapeles",
    redeemedByLabel:        "Canjeada por {name}",
    shareBtnLabel:          "Compartir",
    redeemBtnLabel:         "Canjear",
    unknownChild:           "alguien",
    notEnoughPoints:        '⚠️ No tienes suficientes puntos para "{reward}"',
    deleteTaskBtn:          "Eliminar",
    frequencyLabel:         "Frecuencia:",
    frequencyDaily:         "Diaria",
    frequencyWeekly:        "Semanal",
    penDailyMsg:            "⚠️ Penalización diaria aplicada",
    penWeeklyMsg:           "⚠️ Penalización semanal aplicada",
    rewardStockLabel:       "Stock",
    rewardStockPlaceholder: "Stock",
    outOfStockMsg:          "⚠️ Sin stock para esta recompensa",
    levelNovice:            "Novato",
    levelApprentice:        "Aprendiz",
    levelExpert:            "Experto",
    levelMaster:            "Maestro",
    levelLegend:            "Leyenda",
    levelLabel:             "Nivel: {level}",
    nextLevelIn:            "Faltan {points} pts para {nextLevel}",
    levelUpMsg:             "¡Felicidades! Has subido al nivel {level}",
    childAgePlaceholder:    "Edad",
    invalidChildNameOrAge:  "Por favor ingresa un nombre y edad válidos",
    parentOnlyAction:       "Solo los padres pueden añadir tareas sugeridas",
    roleSelectionLabel:     "Seleccionar rol:",
    parentRole:             "Padre",
    childRole:              "Niño",
    langEs:                 "Español",
    langEn:                 "English",
    suggestedTasksLabel:    "Tareas sugeridas",
  },
  en: {
    appTitle:               "Chore Stars Child",
    panelSubtitle:          "Task, duty and reward panel for",
    earnedLabel:            "Earned",
    lostLabel:              "Lost",
    redeemedLabel:          "Redeemed",
    totalLabel:             "Total",
    tabTasks:               "Tasks",
    tabRewards:             "Rewards",
    tabSettings:            "Settings",
    assignedTasks:          "Assigned Tasks",
    dailyCutoffLabel:       "Daily cutoff time",
    todayLabel:             "Today is:",
    cutoffIntro:            "Complete before",
    fromLabel:              "From:",
    toLabel:                "To:",
    currentWeekLabel:       "Current week",
    weeklyHistoryLabel:     "Previous weeks history",
    noHistory:              "No history yet.",
    badgesLabel:            "🏅 Badges unlocked this week",
    parentsIntro:           "Parents only area",
    childManagementLabel:   "Child management",
    addChildBtn:            "Add child",
    childNamePlaceholder:   "Child name",
    cutoffTimeLabel:        "Daily cutoff to complete tasks",
    saveCutoffBtn:          "Save time",
    pinLabel:               "Access PIN for settings",
    pinPlaceholder:         "Ex: 1234",
    savePinBtn:             "Save PIN",
    pinSavedMsg:            "PIN saved successfully.",
    taskManagementLabel:    "Task management",
    taskNamePlaceholder:    "Task name",
    taskPointsPlaceholder:  "Points",
    addTaskBtn:             "Add task",
    rewardManagementLabel:  "Reward management",
    rewardNamePlaceholder:  "Reward name",
    rewardCostPlaceholder:  "Cost",
    addRewardBtn:           "Add reward",
    closeWeekLabel:         "Close week and save history",
    closeWeekBtn:           "Close week",
    closedWeeksLabel:       "Closed weeks history",
    installUpdatesLabel:    "Reload latest version of the app",
    installUpdatesBtn:      "Install updates",
    resetAppLabel:          "Reset app to initial state",
    resetAppBtn:            "Reset app",
    languageLabel:          "Language:",
    welcomeTitle:           "Welcome to Chore Stars Child",
    welcomeDesc:            "Organize chores and rewards in a fun and safe way.",
    startButton:            "Start",
    errorNoCutoffField:     "Error: cutoff time field not found.",
    invalidTimeMsg:         "Please enter a valid time.",
    cutoffSaved:            "Cutoff time saved: {time}",
    constantEffort:         "Consistent effort",
    rewardExplorer:         "Reward explorer",
    totalDiscipline:        "Total discipline",
    footerText:             "Chore Stars Child - All rights reserved - 2025 – Version {version}",
    invalidChildName:       "Enter a valid name",
    confirmDeleteChild:     "Delete \"{name}\"?",
    createTaskInstructions: "To create tasks: 1. Enter and save the child’s name, 2. Select a child or it will default if there’s only one, 3. You can add tasks for each selected child independently.",
    promptNewTaskName:      "New task name:",
    promptNewTaskPoints:    "New points:",
    invalidRewardNameCost:  "Enter a valid name and cost",
    promptNewRewardName:    "New reward name:",
    promptNewRewardCost:    "New cost in points:",
    invalidPinMsg:          "Please enter a valid PIN",
    pinSavedMsg:            "PIN saved successfully.",
    noActivityMsg:          "No activity recorded this week.",
    confirmCloseWeek:       "Close week and save history?",
    weekClosedMsg:          "Week closed and saved",
    confirmResetApp:        "⚠️ This will erase ALL data and reload the app. Continue?",
    resetSuccessMsg:        "✅ App reset. Starting from scratch…",
    swNotRegistered:        "No SW registered.",
    searchingUpdates:       "Searching for updates…",
    selectChildBtn:         "Select",
    deleteChildBtn:         "Delete",
    pointsSuffix:           "pts",
    markDoneBtn:            "Done",
    markedDoneBtn:          "✅ Done",
    deleteRewardBtn:        "Delete",
    penaltyAppliedMsg:      "⚠️ Penalty applied",
    shareTitle:             "Reward redeemed",
    shareTextTemplate:      "{child} just redeemed \"{reward}\" in Chore Stars! 🎉",
    clipboardCopiedMsg:     "Text copied to clipboard",
    redeemedByLabel:        "Redeemed by {name}",
    shareBtnLabel:          "Share",
    redeemBtnLabel:         "Redeem",
    unknownChild:           "someone",
    notEnoughPoints:        '⚠️ You don’t have enough points for "{reward}"',
    deleteTaskBtn:          "Delete",
    frequencyLabel:         "Frequency:",
    frequencyDaily:         "Daily",
    frequencyWeekly:        "Weekly",
    penDailyMsg:            "⚠️ Daily penalty applied",
    penWeeklyMsg:           "⚠️ Weekly penalty applied",
    rewardStockLabel:       "Stock",
    rewardStockPlaceholder: "Stock",
    outOfStockMsg:          "⚠️ Out of stock",
    levelNovice:            "Novice",
    levelApprentice:        "Apprentice",
    levelExpert:            "Expert",
    levelMaster:            "Master",
    levelLegend:            "Legend",
    levelLabel:             "Level: {level}",
    nextLevelIn:            "{points} pts to {nextLevel}",
    levelUpMsg:             "Congrats! You've reached level {level}",
    childAgePlaceholder:    "Age",
    invalidChildNameOrAge:  "Please enter a valid name and age",
    parentOnlyAction:       "Only parents can add suggested tasks",
    roleSelectionLabel:     "Select role:",
    parentRole:             "Parent",
    childRole:              "Child",
    langEs:                 "Español",
    langEn:                 "English",
    suggestedTasksLabel:    "Suggested tasks",
  }
};

// 2) applyTranslations (texto y placeholder)
function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const txt = translations[lang]?.[key];
    if (txt) el.textContent = txt;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const txt = translations[lang]?.[key];
    if (txt) el.placeholder = txt;
  });
}

function updateFooterVersion() {
  const lang = localStorage.getItem("lang") || "es";
  const template = translations[lang]?.footerText;
  if (!template) return;
  const text = template.replace("{version}", APP_VERSION);
  document.getElementById("app-footer").textContent = text;
}

// ──────────────
// Helpers para cálculos de clave de día/semana
// ──────────────
// Devuelve "YYYY-MM-DD" de hoy
function getTodayKey() {
  return new Date().toISOString().split('T')[0];
}

// Devuelve "YYYY-MM-DD" del lunes de la semana en curso
function getCurrentWeekStartKey() {
  const monday = getWeekStart(new Date()); // ya tienes getWeekStart()
  return monday.toISOString().split('T')[0];
}

// ──────────────
// 1) Penalizaciones diarias “pendientes”
// ──────────────
function applyPendingDailyPenalties() {
  const lang     = localStorage.getItem('lang') || 'es';
  const t        = translations[lang];
  const todayKey = getTodayKey();
  const lastKey  = localStorage.getItem('lastDailyPenalty') || '';

  // Fecha límite de hoy (p.ej. "21:00")
  const cutoff   = localStorage.getItem('cutoffTime') || '21:00';
  const [h, m]   = cutoff.split(':').map(Number);
  const cutoffDt = new Date();
  cutoffDt.setHours(h, m, 0, 0);

  // Si ya pasó el cutoff y aún no penalizamos hoy, aplicamos
  if (new Date() > cutoffDt && todayKey !== lastKey) {
    let anyChange = false;

    tasks.forEach(task => {
      if (task.frequency === 'daily' && !task.done && !task.penalized) {
        const stats = getStatsFor(task.childId);
        stats.lost     += task.points * 2;  // ×2
        task.penalized  = true;
        anyChange       = true;
      }
    });

    if (anyChange) {
      saveStatsMap();
      saveTasks();
      updatePointDisplay();
      flashMessage(t.penDailyMsg);
    }

    // Marcamos que ya penalizamos hoy
    localStorage.setItem('lastDailyPenalty', todayKey);
  }
}

// ──────────────
// 2) Penalizaciones semanales “pendientes”
// ──────────────
function applyPendingWeeklyPenalties() {
  const lang        = localStorage.getItem('lang') || 'es';
  const t           = translations[lang];
  const weekKey     = getCurrentWeekStartKey();
  const lastWeekKey = localStorage.getItem('lastWeeklyPenalty') || '';

  // Calcula el domingo de esta semana + hora cutoff
  const cutoff   = localStorage.getItem('cutoffTime') || '21:00';
  const [h, m]   = cutoff.split(':').map(Number);
  const sunday   = new Date(getWeekStart(new Date()));
  sunday.setDate(sunday.getDate() + 6);
  sunday.setHours(h, m, 0, 0);

  // Si ya pasó domingo+corte y aún no penalizamos esta semana
  if (new Date() > sunday && weekKey !== lastWeekKey) {
    let anyChange = false;

    tasks.forEach(task => {
      if (
        task.frequency === 'weekly' &&
        !task.done &&
        !task.penalized
      ) {
        const stats = getStatsFor(task.childId);
        stats.lost     += task.points * 3;  // ×3
        task.penalized  = true;
        anyChange       = true;
      }
    });

    if (anyChange) {
      saveStatsMap();
      saveTasks();
      updatePointDisplay();
      flashMessage(t.penWeeklyMsg);
    }

    // Marcamos que ya penalizamos esta semana
    localStorage.setItem('lastWeeklyPenalty', weekKey);
  }
}

////////////////////////////////////////////////////////////////////////////////
//  Sugerencias de tareas (catálogo + personalizado)
////////////////////////////////////////////////////////////////////////////////

// ➕ Historial de tareas personalizadas por familia
const customTaskLog = JSON.parse(localStorage.getItem('customTaskLog')) || {};
function logCustomTask(name) {
  const id = activeChildId;
  if (!customTaskLog[id]) customTaskLog[id] = [];
  if (!customTaskLog[id].includes(name)) {
    customTaskLog[id].push(name);
    localStorage.setItem('customTaskLog', JSON.stringify(customTaskLog));
  }
}

// ➕ Catálogo de posibles sugerencias (tu array de ~50 tareas)
const taskSuggestions = [
  { name: 'Revisar bolso y verificar el horario de clases del día siguiente', dayOfWeek: 0 },
  { name: 'Empacar lonchera',                        dayOfWeek: 1 },
  { name: 'Tender la cama',                          minAge: 5 },
  { name: 'Ayudar a servir el desayuno',             minAge: 6 },
  { name: 'Regar las matas',                         weekdays: [2,5] },
  { name: 'Sacar la basura',                         minAge: 7 },
  { name: 'Limpiar los zapatos del colegio',         dayOfWeek: 6 },
  { name: 'Organizar los útiles escolares',          dayOfWeek: 0 },
  { name: 'Leer 10 páginas de un libro',             minAge: 7 },
  { name: 'Practicar tablas de multiplicar',          minAge: 8 },
  { name: 'Repasar inglés con Duolingo',             minAge: 9 },
  { name: 'Ayudar a lavar la loza',                  minAge: 6 },
  { name: 'Barrer el patio o balcón',                minAge: 7 },
  { name: 'Limpiar el espejo del baño',              minAge: 6 },
  { name: 'Doblar la ropa limpia',                   minAge: 8 },
  { name: 'Organizar el clóset',                     minAge: 9 },
  { name: 'Ayudar a cuidar al hermanito',            minAge: 10 },
  { name: 'Llamar a los abuelos por videollamada',   dayOfWeek: 0 },
  { name: 'Escribir una nota de agradecimiento',      minAge: 9 },
  { name: 'Practicar instrumento musical',           minAge: 8 },
  { name: 'Hacer una oración antes de dormir',       weekdays: [0,1,2,3,4,5,6] },
  { name: 'Ayudar a preparar arepas',                minAge: 7 },
  { name: 'Limpiar la mesa después de comer',        minAge: 5 },
  { name: 'Hacer dibujo para decorar la nevera',     minAge: 4 },
  { name: 'Revisar tareas en la agenda escolar',     weekdays: [1,2,3,4,5] },
  { name: 'Organizar juguetes',                      minAge: 4 },
  { name: 'Ayudar a alimentar la mascota',           minAge: 5 },
  { name: 'Limpiar el comedero de la mascota',       minAge: 7 },
  { name: 'Hacer ejercicio 15 minutos',              minAge: 8 },
  { name: 'Ayudar a recoger hojas del jardín',       dayOfWeek: 6 },
  { name: 'Revisar uniforme para el lunes',          dayOfWeek: 0 },
  { name: 'Limpiar el escritorio',                   minAge: 6 },
  { name: 'Preparar mochila para el colegio',        dayOfWeek: 0 },
  { name: 'Ayudar a hacer mercado',                  dayOfWeek: 6 },
  { name: 'Contar lo mejor del día a la familia',    weekdays: [0,1,2,3,4,5,6] },
  { name: 'Hacer una manualidad con reciclaje',      minAge: 7 },
  { name: 'Limpiar el vidrio del ventanal',          minAge: 9 },
  { name: 'Revisar tareas en plataforma digital',    minAge: 10 },
  { name: 'Hacer resumen de lectura escolar',        minAge: 10 },
  { name: 'Ayudar a preparar jugo natural',          minAge: 6 },
  { name: 'Limpiar el baño (solo lavamanos)',        minAge: 9 },
  { name: 'Ayudar a organizar la despensa',          minAge: 8 },
  { name: 'Revisar el horario escolar',              dayOfWeek: 0 },
  { name: 'Hacer lista de útiles faltantes',         dayOfWeek: 6 },
  { name: 'Ayudar a poner la mesa',                  minAge: 5 },
  { name: 'Hacer una cartelera familiar',            minAge: 9 },
  { name: 'Revisar tareas pendientes',               weekdays: [1,2,3,4,5] },
  { name: 'Ayudar a limpiar el televisor',           minAge: 7 },
  { name: 'Hacer un dibujo para regalar',            minAge: 8, weekdays: [1,3,5] },
  { name: 'Ayudar a preparar chocolate caliente',    minAge: 6 }
];

// ➕ Filtra catálogo por edad, día y no repetidas
function generateCatalogSuggestions() {
  const child     = children.find(c => c.id === activeChildId);
  const age       = child?.age ?? null;
  const today     = new Date().getDay();
  const doneNames = tasks
    .filter(t => t.childId === activeChildId)
    .map(t => t.name);

  return taskSuggestions
    .filter(s => {
      if (doneNames.includes(s.name)) return false;
      const ageOk =
        (s.minAge == null || (age != null && age >= s.minAge)) &&
        (s.maxAge == null || (age != null && age <= s.maxAge));
      const dayOk =
        (s.dayOfWeek == null || s.dayOfWeek === today) &&
        (s.weekdays == null   || s.weekdays.includes(today));
      return ageOk && dayOk;
    })
    .map(s => s.name);
}

// ➕ Sugerencias basadas en historial familiar
function generateFamilyBasedSuggestions() {
  const id        = activeChildId;
  const history   = customTaskLog[id] || [];
  const doneNames = tasks
    .filter(t => t.childId === id)
    .map(t => t.name);
  return history.filter(name => !doneNames.includes(name));
}

// ➕ Combina catálogo + familia sin duplicados
function generateTaskSuggestions() {
  const base   = generateCatalogSuggestions();
  const family = generateFamilyBasedSuggestions();
  return [...new Set([...base, ...family])];
}

// ➕ Renderiza los botones de sugerencia (solo para padres),
//    con título “Tareas sugeridas” y estilo más pequeño y moderno
function renderTaskSuggestions() {
  const container = document.getElementById('task-suggestions');
  if (!container) return;

  // Solo padres ven esta sección
  const userRole = localStorage.getItem('userRole') || 'child';
  if (userRole !== 'parent') {
    container.style.display = 'none';
    return;
  }
  container.style.display = '';

  // Obtener traducciones y sugerencias
  const lang = localStorage.getItem('lang') || 'es';
  const t    = translations[lang];
  const suggestions = generateTaskSuggestions();

  // Si no hay sugerencias, lo limpiamos y salimos
  if (suggestions.length === 0) {
    container.innerHTML = '';
    return;
  }

  // Limpiar previo y añadir título
  container.innerHTML = '';
  const title = document.createElement('div');
  title.textContent = t.suggestedTasksLabel;
  title.className = 'text-sm font-medium text-gray-600 mb-2';
  container.appendChild(title);

  // Botones de sugerencia
  suggestions.forEach(name => {
    const btn = document.createElement('button');
    btn.className = 'suggestion-btn text-sm px-2 py-1 mr-2 mb-2';
    btn.textContent = name;
    btn.addEventListener('click', () => addSuggestedTask(name));
    container.appendChild(btn);
  });
}

// ➕ Añade una sugerencia como tarea y refresca vistas
function addSuggestedTask(name) {
  const lang      = localStorage.getItem('lang')     || 'es';
  const t         = translations[lang];
  const userRole  = localStorage.getItem('userRole') || 'child';

  // Solo el padre puede añadir sugerencias
  if (userRole !== 'parent') {
    alert(t.parentOnlyAction);
    return;
  }

  const defaultPts  = 10;
  const defaultFreq = 'daily';

  tasks.push({
    name,
    points:     defaultPts,
    frequency:  defaultFreq,
    done:       false,
    penalized:  false,
    childId:    activeChildId
  });

  logCustomTask(name);
  saveTasks();
  renderTasks();
  renderChildTasks();
  updatePointDisplay();
  renderTaskSuggestions();
}

// 3) Inicialización única
document.addEventListener('DOMContentLoaded', () => {
  // — 3.1) Idioma y rol guardados o por defecto
  const savedLang = localStorage.getItem('lang')     || 'es';
  const savedRole = localStorage.getItem('userRole') || 'child';
  applyTranslations(savedLang);

  // — 3.2) Ejecutar renders que dependen de idioma o localStorage
  updateHeaderName();
  updateTodayHeader();
  renderCutoffTime();
  renderWeekStart();
  renderWeeklyHistory();
  renderBadges();
  updatePointDisplay();
  updateFooterVersion();
  applyPendingDailyPenalties();
  applyPendingWeeklyPenalties();

  // — 3.3) Bienvenida: usar botones en lugar de selects
  const welcomeScreen = document.getElementById('welcome-screen');
  const langButtons   = Array.from(document.querySelectorAll('#welcome-lang-buttons button'));
  const roleButtons   = Array.from(document.querySelectorAll('#welcome-role-buttons button'));

  // Variables para estado temporal
  let welcomeLangValue = savedLang;
  let welcomeRoleValue = savedRole;

  // Función para resaltar el botón activo
  function styleButtonGroup(buttons, activeValue) {
    buttons.forEach(btn => {
      const isActive = btn.dataset.value === activeValue;
      btn.classList.toggle('bg-blue-600', isActive);
      btn.classList.toggle('text-white',  isActive);
      btn.classList.toggle('bg-gray-200', !isActive);
      btn.classList.toggle('text-gray-700',!isActive);
    });
  }

  // Aplicar estilo inicial
  styleButtonGroup(langButtons, welcomeLangValue);
  styleButtonGroup(roleButtons, welcomeRoleValue);

  // Ocultar bienvenida si ambos ya están configurados
  if (localStorage.getItem('lang') && localStorage.getItem('userRole')) {
    welcomeScreen.style.display = 'none';
  }

  // — 3.4) Click en botones de idioma
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      welcomeLangValue = btn.dataset.value;
      styleButtonGroup(langButtons, welcomeLangValue);
      applyTranslations(welcomeLangValue);
    });
  });

  // — 3.5) Click en botones de rol
  roleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      welcomeRoleValue = btn.dataset.value;
      styleButtonGroup(roleButtons, welcomeRoleValue);
    });
  });

  // — 3.6) Botón “Comenzar”: guarda idioma y rol, oculta bienvenida y refresca UI
  document.getElementById('welcome-start')?.addEventListener('click', () => {
    const lang = welcomeLangValue;
    const role = welcomeRoleValue;

    localStorage.setItem('lang',     lang);
    localStorage.setItem('userRole', role);

    applyTranslations(lang);
    welcomeScreen.style.display = 'none';

    // refrescar lógica dependiente de idioma
    updateTodayHeader();
    renderCutoffTime();
    renderWeekStart();
    renderWeeklyHistory();
    renderBadges();
    updatePointDisplay();
    updateFooterVersion();

    // cargue inicial de datos y sugerencias
    renderChildrenList();
    renderTasks();
    renderChildTasks();
    renderTaskSuggestions();
  });

  // — 3.7) Selector permanente de idioma (ya existente)
  document.getElementById('language-select')?.addEventListener('change', e => {
    const lang = e.target.value;
    localStorage.setItem('lang', lang);
    applyTranslations(lang);
    updateTodayHeader();
    renderCutoffTime();
    renderWeekStart();
    renderWeeklyHistory();
    renderBadges();
    updatePointDisplay();
    updateFooterVersion();
  });
});

////////////////////////////////////////////////////////////////////////////////
// X. Migración de un solo childName a array de children
////////////////////////////////////////////////////////////////////////////////
let children = JSON.parse(localStorage.getItem('children')) || [];
const saveChildren = () =>
  localStorage.setItem('children', JSON.stringify(children));

// Si venías usando solo childName, lo migramos a children[]
const singleName = localStorage.getItem('childName');
if (children.length === 0 && singleName) {
  const id = Date.now().toString();
  children.push({ id, name: singleName });
  saveChildren();
  localStorage.removeItem('childName');
}

// ID del niño activo (para filtrar tareas)
let activeChildId = children[0]?.id || null;

////////////////////////////////////////////////////////////////////////////////
// 0. Funciones para renderizar y cambiar de niño activo
////////////////////////////////////////////////////////////////////////////////
/**
 * Actualiza el nombre del niño activo en el header
 */
function updateHeaderName() {
  const label = document.getElementById('child-name-label');
  const child = children.find(c => c.id === activeChildId);
  if (label) label.textContent = child ? child.name : '';
}

function updateTodayHeader() {
  // 1) Obtén el idioma activo
  const lang = localStorage.getItem('lang') || 'es';
  
  // 2) Decide el locale para formatear la fecha
  //    Aquí mapeamos más explícito por si agregas más idiomas
  const localeMap = { es: 'es-CO', en: 'en-US' };
  const locale = localeMap[lang] || 'es-CO';

  // 3) Formatea la fecha
  const now     = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString(locale, options);

  // 4) Actualiza el label traducible
  const labelEl = document.querySelector('#today-header [data-i18n="todayLabel"]');
  if (labelEl) {
    labelEl.textContent = translations[lang].todayLabel;
  }

  // 5) Inyecta SOLO la parte variable (la fecha) en su propio span
  const dateEl = document.getElementById('today-date');
  if (dateEl) {
    dateEl.textContent = formattedDate;
  }
}


function renderChildrenList() {
  const ul = document.getElementById('children-list');
  if (!ul) return;
  ul.innerHTML = '';

  children.forEach(c => {
    const li = document.createElement('li');
    // clases base + padding para clic
    li.className = 'flex justify-between items-center p-2 rounded cursor-pointer';
    // si es el activo, le aplicamos estilos de selección
    if (c.id === activeChildId) {
      li.classList.add('bg-blue-100', 'text-blue-800', 'font-semibold');
    }

const lang = localStorage.getItem('lang') || 'es';
const t    = translations[lang];

li.innerHTML = `
  <span>${c.name}</span>
  <div class="space-x-2">
    <button class="btn btn-secondary btn-sm select-child" data-id="${c.id}">
      ${t.selectChildBtn}
    </button>
    <button class="btn btn-danger btn-sm delete-child" data-id="${c.id}">
      ${t.deleteChildBtn}
    </button>
  </div>`;


    ul.appendChild(li);
  });
}


/**
 * Escribe el nombre del niño activo en el header
 */

function selectChild(id) {
  activeChildId = id;

  // refresca UI de niños y pestañas
  renderChildrenList();
  renderChildTabs();

  // refresca tareas y gestión
  renderChildTasks();
  renderTasks();

  // actualiza puntos y barra
  updatePointDisplay();

  // actualiza subtítulo en el header
  updateHeaderName();
  updateTodayHeader();

  // refresca historial del niño activo
  renderWeeklyHistory();
}


function renderChildTabs() {
  const nav = document.getElementById('child-tabs');
  if (!nav) return;
  nav.innerHTML = '';
  children.forEach(c => {
    const btn = document.createElement('button');
    btn.textContent = c.name;
    btn.className = c.id === activeChildId
      ? 'btn btn-primary'
      : 'btn btn-secondary';
    btn.dataset.id = c.id;
    btn.addEventListener('click', () => selectChild(c.id));
    nav.appendChild(btn);
  });
}


// 1bis. Mapa de stats por niño
let weeklyStatsMap = JSON.parse(localStorage.getItem('weeklyStatsMap')) || {};


// getter de stats actuales
function getStatsFor(childId) {
  if (!weeklyStatsMap[childId]) {
    weeklyStatsMap[childId] = getDefaultStats();
  }
  return weeklyStatsMap[childId];
}

// persistir todo el mapa
const saveStatsMap = () =>
  localStorage.setItem('weeklyStatsMap', JSON.stringify(weeklyStatsMap));


////////////////////////////////////////////////////////////////////////////////
// 1. Estado global y valores por defecto
////////////////////////////////////////////////////////////////////////////////
function getDefaultStats() {
  return {
    earned:    0,
    lost:      0,
    redeemed:  0,
    timestamp: new Date().toISOString()
  };
}

let tasks         = JSON.parse(localStorage.getItem('tasks'))         || [];
let rewards       = JSON.parse(localStorage.getItem('rewards'))       || [];
let weeklyHistory = JSON.parse(localStorage.getItem('weeklyHistory')) || [];
let badges        = [];

////////////////////////////////////////////////////////////////////////////////
// 2. Persistencia en localStorage
////////////////////////////////////////////////////////////////////////////////
const saveTasks   = () => localStorage.setItem('tasks',         JSON.stringify(tasks));
const saveRewards = () => localStorage.setItem('rewards',       JSON.stringify(rewards));
const saveHistory = () =>
  localStorage.setItem('weeklyHistory', JSON.stringify(weeklyHistory));

////////////////////////////////////////////////////////////////////////////////
// 3. Insignias (badges) por niño
////////////////////////////////////////////////////////////////////////////////
function generateBadges() {
  const stats = getStatsFor(activeChildId);
  badges = [];

  // Detecta idioma y sacamos el namespace
  const lang = localStorage.getItem('lang') || 'es';
  const t    = translations[lang];

  // Revisamos las condiciones y usamos t.constantEffort, etc.
  if (stats.earned >= 300) {
    badges.push({
      icon:  '🥇',
      label: t.constantEffort,
      bonus: 30
    });
  }
  if (stats.redeemed > 800) {
    badges.push({
      icon:  '🚀',
      label: t.rewardExplorer,
      bonus: 50
    });
  }
  if (stats.lost === 0 && stats.earned > 800) {
    badges.push({
      icon:  '🧠',
      label: t.totalDiscipline,
      bonus: 100
    });
  }
}


function renderBadges() {
  const c = document.getElementById('badge-list');
  if (!c) return;
  c.innerHTML = '';

  generateBadges();

  badges.forEach(b => {
    const card = document.createElement('div');
    card.className =
      'badge-card flex items-center space-x-3 bg-yellow-50 p-3 rounded shadow-md mb-2';

    card.innerHTML = `
      <span style="font-size:2.2rem">${b.icon}</span>
      <div>
        <strong>${b.label}</strong><br>
        <span class="text-sm text-gray-600">+${b.bonus} ⭐</span>
      </div>`;
    c.appendChild(card);
  });
}


////////////////////////////////////////////////////////////////////////////////
// 4. Barra de progreso, puntos y sistema de niveles o rangos.
////////////////////////////////////////////////////////////////////////////////
function updateProgressBar() {
  const stats = getStatsFor(activeChildId);
  const total = stats.earned - stats.lost;
  const pct   = Math.min((total / 100) * 100, 100);
  const bar   = document.getElementById('progress-bar');
  if (bar) bar.style.width = `${pct}%`;
}

// 1) Define los umbrales de nivel justo después de tu objeto `translations`
const levelThresholds = [
  { key: 'levelNovice',     min:   0 },
  { key: 'levelApprentice', min: 500 },
  { key: 'levelExpert',     min: 1500 },
  { key: 'levelMaster',     min: 3000 },
  { key: 'levelLegend',     min: 5000 }
];

const levelBonusMap = {
  levelApprentice:  50,
  levelExpert:     100,
  levelMaster:     200,
  levelLegend:     500
};

// 0) Estado previo de niveles por niño
let lastLevelMap = JSON.parse(localStorage.getItem('lastLevelMap')) || {};

// 0b) Persiste el mapa
function saveLastLevelMap() {
  localStorage.setItem('lastLevelMap', JSON.stringify(lastLevelMap));
}

// 2) Función para calcular nivel actual y el siguiente
function getCurrentLevel(points) {
  let current = levelThresholds[0];
  let next    = null;
  for (let i = 0; i < levelThresholds.length; i++) {
    if (points >= levelThresholds[i].min) {
      current = levelThresholds[i];
      next    = levelThresholds[i + 1] || null;
    } else {
      break;
    }
  }
  return { current, next };
}

// 3) Función para renderizar el nivel del niño activo en el header
function renderChildLevel() {
  const label = document.getElementById('child-name-label');
  if (!label) return;

  let levelEl = document.getElementById('child-level');
  if (!levelEl) {
    levelEl = document.createElement('div');
    levelEl.id = 'child-level';
    levelEl.className = 'level-badge';
    label.parentNode.insertBefore(levelEl, label.nextSibling);
  }

  // Calcula puntos totales
  const stats = getStatsFor(activeChildId);
  const bonusPts = badges.reduce((s, b) => s + b.bonus, 0);
  const total    = stats.earned + bonusPts - stats.lost - stats.redeemed;

  // Nivel actual y siguiente
  const { current, next } = getCurrentLevel(total);

  // Traducciones
  const lang = localStorage.getItem('lang') || 'es';
  const t    = translations[lang];

  // Texto del badge
  let txt = t.levelLabel.replace('{level}', t[current.key]);
  if (next) {
    const need = next.min - total;
    txt += ' • ' + t.nextLevelIn
      .replace('{points}', need)
      .replace('{nextLevel}', t[next.key]);
  }
  levelEl.textContent = txt;

  // 🚀 Alerta de subida de nivel con bonus para niveles ≥ Apprentice
  const prev = lastLevelMap[activeChildId];
  if (prev && prev !== current.key) {
    const bonus = levelBonusMap[current.key] || 0;
    if (bonus > 0) {
      // Aplica puntos extra
      stats.earned += bonus;
      saveStatsMap();
      const popup = document.createElement('div');
  popup.className = 'level-popup';
  popup.innerHTML = `🎉 ${t.levelUpMsg.replace('{level}', t[current.key])}<br>✨ +${bonus} pts extra!`;
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 3000);
    } else {
      const popup = document.createElement('div');
  popup.className = 'level-popup';
  popup.innerHTML = `🎉 ${t.levelUpMsg.replace('{level}', t[current.key])}`;
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 3000);
    }
  }

  // Actualiza el registro de niveles
  lastLevelMap[activeChildId] = current.key;
  saveLastLevelMap();
}

function updatePointDisplay() {
  console.log('✅ Entrando a updatePointDisplay');
  // stats del niño activo
  const stats = getStatsFor(activeChildId);

  // ✅ Genera las insignias completas
  generateBadges();

  const bonusPoints = badges.reduce((s, b) => s + b.bonus, 0);
  const totalEarned = stats.earned + bonusPoints;

  // actualiza spans
  document.getElementById('points-earned').textContent   = totalEarned;
  document.getElementById('points-lost').   textContent   = stats.lost;
  document.getElementById('points-redeemed').textContent = stats.redeemed;
  document.getElementById('points-total'). textContent   =
    totalEarned - stats.lost - stats.redeemed;

  updateProgressBar();
  renderBadges();
  renderChildLevel();
}


////////////////////////////////////////////////////////////////////////////////
// 5. Utilitarios de fecha
////////////////////////////////////////////////////////////////////////////////
function getWeekStart(date) {
  const d = new Date(date);
  const dayIndex = (d.getDay() + 6) % 7; // domingo→6, lunes→0…
  d.setDate(d.getDate() - dayIndex);
  d.setHours(0, 0, 0, 0);
  return d;
}


function getCurrentWeekRange() {
  const today = new Date();
  const day   = today.getDay(); // 0=domingo
  const monday = new Date(today);
  monday.setDate(today.getDate() - day + (day === 0 ? -6 : 1));
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  return {
    startDate: monday.toISOString().split('T')[0],
    endDate:   sunday.toISOString().split('T')[0],
    weekLabel: `Semana del ${monday.toLocaleDateString('es-CO', { day: 'numeric', month: 'long' })}
      al ${sunday.toLocaleDateString('es-CO', { day: 'numeric', month: 'long' })}`
  };
}

////////////////////////////////////////////////////////////////////////////////
// 6. Reglas para cierre de semana
////////////////////////////////////////////////////////////////////////////////
function canCloseWeek() {
  const now           = new Date();
  const thisWeekStart = getWeekStart(now);

  // 1) Filtra sólo las entradas del niño activo
  const childHistory = weeklyHistory
    .filter(entry => entry.childId === activeChildId);

  // 2) Si nunca cerró, siempre puede hacerlo
  if (childHistory.length === 0) {
    return true;
  }

  // 3) Toma la última entrada de este niño
  const lastEntry     = childHistory[childHistory.length - 1];
  const lastWeekStart = getWeekStart(new Date(lastEntry.timestamp));

  // 4) Mismo inicio de semana → ya cerró esta semana
  if (thisWeekStart.getTime() === lastWeekStart.getTime()) {
    alert('❌ Ya cerraste esta semana para este niño. Espera al siguiente lunes.');
    return false;
  }

  // 5) Opcional: fuerza a esperar hasta el próximo lunes
  const nextMonday = new Date(thisWeekStart.getTime() + 7 * 24 * 60 * 60 * 1000);
  if (now < nextMonday) {
    alert('❌ Todavía no es lunes de la próxima semana para cerrar.');
    return false;
  }

  return true;
}

////////////////////////////////////////////////////////////////////////////////
// 7. Penalizaciones diarias
////////////////////////////////////////////////////////////////////////////////
function flashMessage(text, duration = 1200) {
  const notice = document.createElement('div');
  notice.textContent = text;
  Object.assign(notice.style, {
    position: 'fixed', top: '50%', left: '50%',
    transform: 'translate(-50%,-50%)',
    background: '#ffe4e6', padding: '1rem 2rem',
    borderRadius: '8px', boxShadow: '0 0 5px rgba(0,0,0,0.2)'
  });
  document.body.appendChild(notice);
  setTimeout(() => notice.remove(), duration);
}

function applyDailyPenalties() {
  const lang   = localStorage.getItem('lang') || 'es';
  const t      = translations[lang];

  const now    = new Date();
  const cutoff = localStorage.getItem('cutoffTime') || '21:00';
  const [h, m] = cutoff.split(':').map(Number);
  const cd     = new Date(); cd.setHours(h, m, 0, 0);

  if (now <= cd) return;

  let anyChange = false;

  tasks.forEach(task => {
    if (task.frequency === 'daily' && !task.done && !task.penalized) {
      const stats = getStatsFor(task.childId);
      stats.lost     += task.points * 2;  // ×2
      task.penalized = true;
      anyChange       = true;
    }
  });

  if (anyChange) {
    saveStatsMap();
    saveTasks();
    updatePointDisplay();
    flashMessage(t.penDailyMsg);
    //  Renovar las tareas diarias para el próximo ciclo
    tasks.forEach(task => {
      if (task.frequency === 'daily') {
        task.done = false;
        task.penalized = false;
      }
    });
    saveTasks();
    renderChildTasks();
  }
}


/**
 * Intenta compartir vía Web Share API el mensaje:
 * “¡[Niño] acaba de canjear “[Recompensa]” en Chore Stars! 🎉”
 * Si falla, copia al portapapeles y muestra un flash.
 */
function shareReward(rewardName) {
  const lang = localStorage.getItem('lang') || 'es';
  const t    = translations[lang];

  // 1) Buscamos al niño activo
  const child = children.find(c => c.id === activeChildId);
  const childName = child ? child.name : (lang === 'en' ? 'Someone' : 'Alguien');

  // 2) Preparamos el texto a compartir
  const text = t.shareTextTemplate
    .replace('{child}', childName)
    .replace('{reward}', rewardName);

  // 3) Si el navegador soporta Web Share API...
  if (navigator.share) {
    navigator
      .share({
        title: t.shareTitle,
        text
      })
      .catch(() => {
        navigator.clipboard.writeText(text);
        flashMessage(t.clipboardCopiedMsg);
      });
  } else {
    // 4) Fallback puro: copia y notifica
    navigator.clipboard.writeText(text);
    flashMessage(t.clipboardCopiedMsg);
  }
}


////////////////////////////////////////////////////////////////////////////////
// 8. Renderizado de listas
////////////////////////////////////////////////////////////////////////////////
function renderTasks() {
  const c = document.getElementById('tasks-manage');
  if (!c) return;

  const lang = localStorage.getItem('lang') || 'es';
  const t    = translations[lang];

  c.innerHTML = '';

  tasks
    .filter(tk => tk.childId === activeChildId)
    .forEach((tk, i) => {
      const block = document.createElement('div');
      block.className =
        'reward-block flex justify-between items-center bg-gray-100 p-2 rounded mb-2';

      // Info: nombre, puntos y frecuencia
      const info = document.createElement('div');
      info.className = 'flex flex-col';

      const title = document.createElement('span');
      title.textContent = `${tk.name} (${tk.points} ${t.pointsSuffix})`;
      info.appendChild(title);

      const freq = document.createElement('span');
      freq.className = 'text-xs text-gray-500';
      freq.textContent =
        tk.frequency === 'weekly'
          ? t.frequencyWeekly
          : t.frequencyDaily;
      info.appendChild(freq);

      // Botones editar / eliminar
      const actions = document.createElement('div');
      actions.className = 'flex space-x-2';

      const editBtn = document.createElement('button');
      editBtn.className = 'btn-edit';
      editBtn.dataset.index = i;
      editBtn.textContent = '✏️';
      if (tk.done) {
        editBtn.disabled = true;
        editBtn.classList.add('opacity-50', 'cursor-not-allowed');
      }

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn-danger';
      deleteBtn.dataset.index = i;
      deleteBtn.textContent = t.deleteTaskBtn;
      if (tk.done) {
        deleteBtn.disabled = true;
        deleteBtn.classList.add('opacity-50', 'cursor-not-allowed');
      }

      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);

      // Componer bloque
      block.appendChild(info);
      block.appendChild(actions);
      c.appendChild(block);
    });
}



/**
 * Renderiza las tareas del niño activo dentro de #tasks-list
 */
function renderChildTasks() {
  const container = document.getElementById('tasks-list');
  if (!container) return;

  const lang = localStorage.getItem('lang') || 'es';
  const t    = translations[lang];

  container.innerHTML = '';

  const filtered = tasks.filter(t => t.childId === activeChildId);

  filtered.forEach((task, idx) => {
    const card = document.createElement('div');
    card.className = 'task-card flex justify-between items-center p-3 mb-2 bg-white rounded shadow';

    // Contenedor de info (nombre, puntos, frecuencia)
    const info = document.createElement('div');
    info.className = 'flex flex-col';

    // Nombre + puntos
    const title = document.createElement('span');
    title.className = 'font-medium';
    title.textContent = `${task.name} (${task.points} ${t.pointsSuffix})`;
    info.appendChild(title);

    // Frecuencia traducida
    const freq = document.createElement('span');
    freq.className = 'text-xs text-gray-500';
    freq.textContent = task.frequency === 'weekly'
      ? t.frequencyWeekly
      : t.frequencyDaily;
    info.appendChild(freq);

    // Botón “Hecho” / “Done”
    const btn = document.createElement('button');
    btn.className = 'btn-success';
    btn.textContent = task.done ? t.markedDoneBtn : t.markDoneBtn;
    // desactiva si ya fue marcada o si es posterior al cutoff y aún no está hecha
    const cutoff = localStorage.getItem('cutoffTime') || '21:00';
    const [h, m] = cutoff.split(':').map(Number);
    const cd     = new Date(); cd.setHours(h, m, 0, 0);
    const afterCutoff = (new Date() > cd) && !task.done;
    btn.disabled = task.done || afterCutoff;
    if (task.done) btn.classList.add('btn-done');

    btn.addEventListener('click', () => {
      if (task.done) return;
      task.done = true;

      const stats = getStatsFor(activeChildId);
      stats.earned += task.points;
      saveStatsMap();
      saveTasks();
      updatePointDisplay();

      btn.textContent = t.markedDoneBtn;
      btn.disabled    = true;
      btn.classList.add('btn-done');
      updatePointDisplay();
      renderTasks();
      renderTaskSuggestions();

      const sparkle = document.createElement('div');
      sparkle.className   = 'sparkle';
      sparkle.textContent = '🌟';
      card.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 800);
    });

    card.appendChild(info);
    card.appendChild(btn);
    container.appendChild(card);
  });
}



function renderRewardsManage() {
  const c = document.getElementById('rewards-manage');
  if (!c) return;

  const lang = localStorage.getItem('lang') || 'es';
  const t    = translations[lang];

  c.innerHTML = '';

  rewards.forEach((r, i) => {
    const block = document.createElement('div');
    block.className =
      'reward-block flex justify-between items-center bg-gray-100 p-2 rounded mb-2';

    // Mostrar nombre, costo y stock
    const label = document.createElement('span');
    label.textContent =
      `${r.name} (${r.cost} ${t.pointsSuffix}) • ${t.rewardStockLabel}: ${r.stock}`;
    block.appendChild(label);

    // Botón editar
    const editBtn = document.createElement('button');
    editBtn.className = 'btn-edit';
    editBtn.dataset.index = i;
    editBtn.textContent = '✏️';
    block.appendChild(editBtn);

    // Botón eliminar
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-danger';
    deleteBtn.dataset.index = i;
    deleteBtn.textContent = t.deleteRewardBtn;
    block.appendChild(deleteBtn);

    c.appendChild(block);
  });
}


function renderChildRewards() {
  const c      = document.getElementById('rewards-list');
  const histC  = document.getElementById('redeemed-cards');
  if (!c || !histC) return;

  const lang = localStorage.getItem('lang') || 'es';
  const t    = translations[lang];

  // Lista de recompensas disponibles
  c.innerHTML = '';
  rewards.forEach((r, i) => {
    const block = document.createElement('div');
    block.className = 'reward-block';

    const span = document.createElement('span');
    span.textContent =
      `${r.name} (${r.cost} ${t.pointsSuffix}) • ${t.rewardStockLabel}: ${r.stock}`;
    block.appendChild(span);

    const btn = document.createElement('button');
    btn.className = 'btn-primary';
    if (r.stock < 1) {
      btn.disabled    = true;
      btn.textContent = t.outOfStockMsg;
    } else {
      btn.disabled      = false;
      btn.textContent   = t.redeemBtnLabel;
      btn.dataset.index = i;
      btn.addEventListener('click', () => handleRewardRedemption(i));
    }
    block.appendChild(btn);

    c.appendChild(block);
  });

  // Tarjetas de recompensas canjeadas
  histC.innerHTML = '';
  if (typeof redeemedHistory !== 'undefined') {
    redeemedHistory.forEach(entry => {
      const card = document.createElement('div');
      card.className = 'redeemed-card p-2 bg-green-50 rounded mb-2';

      const title = document.createElement('strong');
      title.textContent = entry.rewardName;
      card.appendChild(title);

      const info = document.createElement('div');
      info.innerHTML = `
        ${t.redeemedByLabel.replace('{name}', entry.childName)}
        <br><small>${new Date(entry.timestamp).toLocaleString()}</small>
      `;
      card.appendChild(info);

      const shareBtn = document.createElement('button');
      shareBtn.className   = 'share-btn mt-2';
      shareBtn.textContent = t.shareBtnLabel;
      shareBtn.addEventListener('click', () => shareReward(entry.rewardName));
      card.appendChild(shareBtn);

      histC.appendChild(card);
    });
  }
}


////////////////////////////////////////////////////////////////////////////////
// 9. Canje de recompensas
////////////////////////////////////////////////////////////////////////////////
function handleRewardRedemption(index) {
  const lang = localStorage.getItem('lang') || 'es';
  const t    = translations[lang];
  const r    = rewards[index];
  if (!r || r.stock < 1) return;

  // verificar puntos
  const stats    = getStatsFor(activeChildId);
  const bonus    = badges.reduce((s, b) => s + b.bonus, 0);
  const avail    = stats.earned + bonus - stats.lost - stats.redeemed;
  if (avail < r.cost) {
    return alert(t.notEnoughPoints.replace('{reward}', r.name));
  }

  // aplicar canje
  stats.redeemed += r.cost;
  r.stock--;
  saveStatsMap();
  saveRewards();

  // agregar a historial de canjes
  const child = children.find(c => c.id === activeChildId);
  const childName = child?.name || t.unknownChild;
  if (!window.redeemedHistory) window.redeemedHistory = [];
  window.redeemedHistory.push({
    rewardName: r.name,
    childName,
    timestamp: new Date().toISOString()
  });

  // refrescar UI
  updatePointDisplay();
  renderChildRewards();

  // animación y compartir
  const sparkle = document.createElement('div');
  sparkle.className   = 'reward-sparkle';
  sparkle.textContent = '🎉';
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 800);

  shareReward(r.name);
}


////////////////////////////////////////////////////////////////////////////////
// 10. Historial semanal en ambas pestañas
////////////////////////////////////////////////////////////////////////////////
/**
 * Muestra en cada lista (Tasks y Settings) solo los cierres del niño activo
 */
function renderWeeklyHistory() {
  const lang   = localStorage.getItem('lang') || 'es';
  const locale = lang === 'en' ? 'en-US' : 'es-CO';

  ['weekly-history-list', 'closed-weeks-history'].forEach(id => {
    const container = document.getElementById(id);
    if (!container) return;
    container.innerHTML = '';

    // 1) Filtra solo el historial del niño activo
    const historyForChild = weeklyHistory.filter(h => h.childId === activeChildId);

    // 2) Caso sin historial
    if (historyForChild.length === 0) {
      const p = document.createElement('p');
      p.className = 'text-gray-500';
      p.textContent = translations[lang].noHistory;
      container.appendChild(p);
      return;
    }

    // 3) Renderiza últimas 5 entradas (más recientes primero)
    historyForChild
      .slice(-5)
      .reverse()
      .forEach(w => {
        // A) Formatea fecha de cierre
        const dateStr = new Date(w.timestamp).toLocaleDateString(locale, {
          weekday: 'short',
          year:    'numeric',
          month:   'long',
          day:     'numeric'
        });

        // B) Genera etiqueta de semana traducida
        const start = new Date(w.startDate).toLocaleDateString(locale, {
          day: 'numeric', month: 'long'
        });
        const end = new Date(w.endDate).toLocaleDateString(locale, {
          day: 'numeric', month: 'long'
        });
        const weekLabel = lang === 'en'
          ? `Week from ${start} to ${end}`
          : `Semana del ${start} al ${end}`;

        // C) Renderiza entrada
        const entry = document.createElement('div');
        entry.className = 'week-entry';
        entry.innerHTML = `
          <p class="font-semibold">
            ${weekLabel} <span class="text-sm text-gray-500">(${dateStr})</span>
          </p>
          <p class="text-sm text-gray-600">
            ⭐ ${translations[lang].earnedLabel}: ${w.earned} |
            ❌ ${translations[lang].lostLabel}: ${w.lost} |
            🎁 ${translations[lang].redeemedLabel}: ${w.redeemed}
          </p>`;
        container.appendChild(entry);
      });
  });
}



////////////////////////////////////////////////////////////////////////////////
// 11. Visualización de hora de corte y rango de semana
////////////////////////////////////////////////////////////////////////////////
function renderCutoffTime() {
  const stored = localStorage.getItem('cutoffTime') || '21:00';
  const [hour, minute] = stored.split(':').map(n => parseInt(n, 10));

  const dt = new Date();
  dt.setHours(hour, minute, 0, 0);

  const lang   = localStorage.getItem('lang') || 'es';
  const locale = lang === 'en' ? 'en-US' : 'es-CO';

  const timeStr = dt.toLocaleTimeString(locale, {
    hour:   'numeric',
    minute: '2-digit',
    hour12: true
  });

  // etiqueta estática traducible
  document
    .querySelectorAll('[data-i18n="cutoffIntro"]')
    .forEach(el => el.textContent = translations[lang].cutoffIntro);

  // parte dinámica: solo la hora
  const disp = document.getElementById('cutoff-time-display');
  if (disp) disp.textContent = timeStr;

  const info = document.getElementById('cutoff-info-time');
  if (info) info.textContent = timeStr;

  // conserva input en 24h
  const inputEl = document.getElementById('cutoff-time');
  if (inputEl) inputEl.value = stored;
}

// llamada inicial
renderCutoffTime();


  // 2) Engancho el botón con el mismo ID que tu HTML
  document.getElementById('save-cutoff')?.addEventListener('click', () => {
  const lang = localStorage.getItem('lang') || 'es';
  const inputEl = document.getElementById('cutoff-time');
  if (!inputEl) {
    return alert(translations[lang].errorNoCutoffField);
  }
  const time = inputEl.value;
  if (!time) {
    return alert(translations[lang].invalidTimeMsg);
  }
  localStorage.setItem('cutoffTime', time);
  renderCutoffTime();
  const msg = translations[lang].cutoffSaved.replace('{time}', time);
  alert(msg);
});


function renderWeekStart() {
  const lang = localStorage.getItem('lang') || 'es';
  const locale = lang === 'en' ? 'en-US' : 'es-CO';

  const { startDate, endDate } = getCurrentWeekRange();

  // 1) Actualiza etiquetas
  document.querySelectorAll('[data-i18n="fromLabel"]')
    .forEach(el => el.textContent = translations[lang].fromLabel);
  document.querySelectorAll('[data-i18n="toLabel"]')
    .forEach(el => el.textContent = translations[lang].toLabel);

  // 2) Inyecta fechas
  const startEl = document.getElementById('week-start');
  const endEl   = document.getElementById('week-end');
  if (startEl) startEl.textContent = startDate;
  if (endEl)   endEl.textContent   = endDate;
}


////////////////////////////////////////////////////////////////////////////////
// 12. Navegación por pestañas
////////////////////////////////////////////////////////////////////////////////
function showTab(tabId) {
  document.querySelectorAll('.tab-content')
    .forEach(s => s.style.display = s.id === tabId ? 'block' : 'none');
  document.querySelectorAll('.tab-btn')
    .forEach(b => b.classList.toggle('tab-active', b.dataset.tab === tabId));

  // Al mostrar Tasks o Settings, refresca historial
  if (tabId === 'tasks' || tabId === 'settings') {
    renderWeeklyHistory();
  }
}


////////////////////////////////////////////////////////////////////////////////
// 13. Inicialización y eventos
////////////////////////////////////////////////////////////////////////////////
window.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 DOM cargado, inicializando app');

  updateHeaderName();
  updateTodayHeader();
  renderChildrenList();
  renderChildTabs();
  applyDailyPenalties();
  renderWeekStart();
  renderWeeklyHistory();
  renderTasks();
  renderChildTasks();
  renderRewardsManage();
  renderChildRewards();
  updatePointDisplay();
  showTab('tasks');



  // ➕ Evento Añadir Niño
document.getElementById('add-child')?.addEventListener('click', () => {
  const lang      = localStorage.getItem('lang') || 'es';
  const t         = translations[lang];
  const nameInput = document.getElementById('new-child-name');
  const ageInput  = document.getElementById('new-child-age');

  const name = nameInput.value.trim();
  const age  = parseInt(ageInput.value, 10);

  // Valida nombre y edad
  if (!name || isNaN(age) || age < 1) {
    return alert(t.invalidChildNameOrAge);
  }

  const id = Date.now().toString();
  children.push({ id, name, age });
  saveChildren();
  renderChildrenList();
  selectChild(id);

  nameInput.value = '';
  ageInput.value  = '';
});


// ➖ Evento Seleccionar / Eliminar Niño
document.getElementById('children-list')?.addEventListener('click', e => {
  const lang = localStorage.getItem('lang') || 'es';
  const id = e.target.dataset.id;

  if (e.target.classList.contains('select-child')) {
    selectChild(id);
  }

  if (e.target.classList.contains('delete-child')) {
    const childName = children.find(c => c.id === id).name;
    const msg = translations[lang].confirmDeleteChild.replace('{name}', childName);
    if (!confirm(msg)) return;

    children = children.filter(c => c.id !== id);
    saveChildren();

    tasks = tasks.filter(t => t.childId !== id);
    saveTasks();

    if (activeChildId === id) {
      activeChildId = children[0]?.id || null;
    }

    renderChildrenList();
    renderChildTabs();
    renderTasks();
    renderChildTasks();
    updatePointDisplay();
    renderTaskSuggestions();
  }
});

// ➕ Evento “Añadir Tarea”
document.getElementById('add-task')?.addEventListener('click', () => {
  const lang       = localStorage.getItem('lang') || 'es';
  const t          = translations[lang];
  const nameInput  = document.getElementById('new-task-name');
  const ptsInput   = document.getElementById('new-task-points');
  const freqSelect = document.getElementById('new-task-frequency');
  const name       = nameInput.value.trim();
  const points     = parseInt(ptsInput.value, 10);
  const frequency  = freqSelect.value; // "daily" o "weekly"

  if (!name || isNaN(points) || !activeChildId) {
    return alert(t.createTaskInstructions);
  }

  tasks.push({
    name,
    points,
    frequency,
    done:      false,
    penalized: false,
    childId:   activeChildId
  });
  saveTasks();
  renderTasks();
  renderChildTasks();
  updatePointDisplay();
  renderTaskSuggestions();

  nameInput.value  = '';
  ptsInput.value   = '';
  freqSelect.value = 'daily';
});

// — Editar / Eliminar tarea
document.getElementById('tasks-manage')?.addEventListener('click', e => {
  const lang = localStorage.getItem('lang') || 'es';

  // Editar tarea
  if (e.target.matches('.btn-edit')) {
    const idx     = parseInt(e.target.dataset.index, 10);
    const visible = tasks.filter(t => t.childId === activeChildId);
    const task    = visible[idx];

    const newName = prompt(translations[lang].promptNewTaskName, task.name);
    if (newName) {
      task.name = newName;
      const newPts = prompt(translations[lang].promptNewTaskPoints, task.points);
      if (!isNaN(parseInt(newPts, 10))) {
        task.points = parseInt(newPts, 10);
      }
      saveTasks();
      renderTasks();
      renderChildTasks();
      updatePointDisplay();
      renderTaskSuggestions();
    }
    return;
  }

  // Eliminar tarea
  if (e.target.matches('.btn-danger')) {
    const idx = parseInt(e.target.dataset.index, 10);
    tasks.splice(idx, 1);
    saveTasks();
    renderTasks();
    renderChildTasks();
    updatePointDisplay();
    renderTaskSuggestions();
  }
});

// ➕ Agregar Recompensa
document.getElementById('add-reward')?.addEventListener('click', () => {
  const lang       = localStorage.getItem('lang') || 'es';
  const t          = translations[lang];
  const nameInput  = document.getElementById('new-reward-name');
  const costInput  = document.getElementById('new-reward-cost');
  const stockInput = document.getElementById('new-reward-stock');
  const name       = nameInput.value.trim();
  const cost       = parseInt(costInput.value,   10);
  const stock      = parseInt(stockInput?.value, 10);

  if (!name || isNaN(cost) || isNaN(stock) || stock < 1) {
    return alert(t.invalidRewardNameCost);
  }

  rewards.push({
    name,
    cost,
    stock,
    redeemed: false
  });
  saveRewards();
  renderRewardsManage();
  renderChildRewards();
  updatePointDisplay();

  nameInput.value  = '';
  costInput.value  = '';
  stockInput.value = '';
});


// — Editar / Eliminar recompensa
document.getElementById('rewards-manage')?.addEventListener('click', e => {
  const lang = localStorage.getItem('lang') || 'es';

  // Editar
  if (e.target.matches('.btn-edit')) {
    const idx       = parseInt(e.target.dataset.index, 10);
    const reward    = rewards[idx];
    const newName   = prompt(translations[lang].promptNewRewardName, reward.name);
    if (newName) {
      reward.name = newName;
      const newCost = prompt(translations[lang].promptNewRewardCost, reward.cost);
      if (!isNaN(parseInt(newCost, 10))) {
        reward.cost = parseInt(newCost, 10);
      }
      saveRewards();
      renderRewardsManage();
      renderChildRewards();
      updatePointDisplay();
    }
    return;
  }

  // Eliminar
  if (e.target.matches('.btn-danger')) {
    rewards.splice(parseInt(e.target.dataset.index, 10), 1);
    saveRewards();
    renderRewardsManage();
    renderChildRewards();
    updatePointDisplay();
  }
});


document.getElementById('reset-week')?.addEventListener('click', () => {
  const lang = localStorage.getItem('lang') || 'es';
  const t    = translations[lang];
  const stats = getStatsFor(activeChildId);

  // A) Verifica actividad
  if (stats.earned === 0 && stats.lost === 0 && stats.redeemed === 0) {
    return alert(t.noActivityMsg);
  }

  // B) Regla de cierre (ya maneja sus propios alerts)
  if (!canCloseWeek()) return;

  // ** Penalizar tareas semanales no hechas **
  tasks.forEach(task => {
    if (task.childId === activeChildId
        && task.frequency === 'weekly'
        && !task.done
        && !task.penalized) {
      stats.lost += task.points * 3; // ×3
      task.penalized = true;
    }
  });

  // C) Confirmación
  if (!confirm(t.confirmCloseWeek)) return;

// D) Genera la entrada con childId y sus stats
const range = getCurrentWeekRange();
weeklyHistory.push({
  childId:   activeChildId,
  earned:    stats.earned,
  lost:      stats.lost,
  redeemed:  stats.redeemed,
  weekLabel: range.weekLabel,         // ← conservas tu etiqueta original
  startDate: range.startDate,         // ← nuevo campo para traducción dinámica
  endDate:   range.endDate,           // ← nuevo campo para traducción dinámica
  timestamp: new Date().toISOString()
});
saveHistory();


  // E) Reinicia SOLO los stats de ese niño y las tareas/recompensas
  weeklyStatsMap[activeChildId] = getDefaultStats();
  saveStatsMap();
  tasks   = tasks.filter(t => t.childId !== activeChildId);
  rewards = rewards.filter(r => r.childId !== activeChildId);
  saveTasks();
  saveRewards();

  // F) Refresca UI
  renderTasks();
  renderChildTasks();
  renderTaskSuggestions();
  renderRewardsManage();
  renderChildRewards();
  updatePointDisplay();
  renderWeeklyHistory();
  showTab('tasks');

  // G) Notificación final traducida
  alert(t.weekClosedMsg);
});


  // 🔄 Reset completo de la app (traducción total)
document.getElementById('reset-app')?.addEventListener('click', () => {
  const lang = localStorage.getItem('lang') || 'es';
  const t    = translations[lang];

  // 1) Confirmación traducida
  if (!confirm(t.confirmResetApp)) return;

  // 2) Limpia TODO localStorage
  localStorage.clear();

  // 3) Feedback y recarga traducidos
  alert(t.resetSuccessMsg);
  location.reload();
});



  // 🔐 Navegación con PIN
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.tab === 'settings' && localStorage.getItem('pin')) {
        const entered = prompt('🔐 Ingresa PIN:');
        if (entered !== localStorage.getItem('pin')) {
          return alert('❌ PIN incorrecto');
        }
      }
      showTab(btn.dataset.tab);
    });
  });

  // 👤 Guardar nombre del niño
  function initChildName() {
  const labelEl = document.getElementById('child-name-label');
  const inputEl = document.getElementById('child-name-input');
  const saveBtn = document.getElementById('save-child-name');

  // 1. Al cargar la app, ponemos el nombre guardado (si existe)
  const storedName = localStorage.getItem('childName');
  if (storedName) {
    if (labelEl) labelEl.textContent = storedName;
    if (inputEl) inputEl.value = storedName;
  }

  // 2. Al hacer click en “Guardar nombre”, validamos y persistimos
  saveBtn?.addEventListener('click', () => {
    const name = inputEl?.value.trim() || '';
    if (!name) {
      return alert('❗ Por favor ingresa un nombre válido');
    }

    localStorage.setItem('childName', name);
    if (labelEl) labelEl.textContent = name;
    alert(`✅ Nombre guardado: ${name}`);
  });
  }


// 🔐 Guardar PIN (traducción completa)
document.getElementById('save-pin')?.addEventListener('click', () => {
  const lang  = localStorage.getItem('lang') || 'es';
  const input = document.getElementById('pin-input');
  const v     = input?.value.trim();

  // 1) Validación
  if (!v) {
    return alert(translations[lang].invalidPinMsg);
  }

  // 2) Persiste y notifica en el idioma activo
  localStorage.setItem('pin', v);
  alert(translations[lang].pinSavedMsg);
});


  // 🚀 Service Worker PWA con auto-update
  if ('serviceWorker' in navigator) {
    // Registramos tras el load para garantizar que todo está listo
    window.addEventListener('load', async () => {
      try {
        const registration = await navigator.serviceWorker.register('service-worker.js');
        console.log('✅ SW registrado');

        // 1) Si ya había un SW en waiting (esperando a activarse), forzamos skipWaiting
        if (registration.waiting) {
          sendSkipWaiting(registration.waiting);
        }

        // 2) Cuando se detecta una nueva versión de SW…
        registration.addEventListener('updatefound', () => {
          const newSW = registration.installing;
          console.log('👀 SW updatefound, estado:', newSW.state);
          newSW.addEventListener('statechange', () => {
            console.log('👀 SW statechange:', newSW.state);
            // Si ya había un controlador activo, es una actualización
            if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
              sendSkipWaiting(newSW);
            }
          });
        });

      } catch (err) {
        console.error('❌ SW error', err);
      }
    });
  }

// ➕ Evento para tu botón “Instalar actualizaciones”
document.getElementById('install-updates')
  ?.addEventListener('click', async () => {
    const lang = localStorage.getItem('lang') || 'es';
    const t    = translations[lang];

    // 1) Obtiene la instancia del Service Worker
    const registration = await navigator.serviceWorker.getRegistration();
    if (!registration) {
      // Muestra aviso traducido en consola
      return console.warn(t.swNotRegistered);
    }

    // 2) Si ya había SW esperando, forzamos skipWaiting
    if (registration.waiting) {
      sendSkipWaiting(registration.waiting);
    } else {
      // Sino, lanza búsqueda de nueva versión
      registration.update();
    }

    // 3) Feedback al usuario mediante flashMessage traducido
    flashMessage(t.searchingUpdates);
  });


});

/**
 * Envía mensaje SKIP_WAITING al SW y recarga la página cuando se active
 */
function sendSkipWaiting(worker) {
  console.log('✉️ Enviando SKIP_WAITING al SW…');
  worker.postMessage({ type: 'SKIP_WAITING' });
  worker.addEventListener('statechange', () => {
    if (worker.state === 'activated') {
      console.log('🔄 SW activado, recargando página');
      window.location.reload();
    }
  });
}


