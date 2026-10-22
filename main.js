/* ==========================================================================
   VGM ENGINEERING — main.js
   Vanilla JS, sin dependencias (solo Lucide para iconos).
   ========================================================================== */

/* --------------------------------------------------------------------------
   0. CONFIGURACIÓN — EDITA AQUÍ TUS DATOS
   -------------------------------------------------------------------------- */

const CONFIG = {
  email: 'viktorgmc@gmail.com',
  whatsapp: '573000000000', // formato internacional sin + ni espacios (EDITAR)
  linkedin: 'https://www.linkedin.com/in/viktorgmc210197/',
  // Endpoint del formulario (opcional). Ejemplos:
  //   Formspree : 'https://formspree.io/f/TU_ID'
  //   Netlify   : '/'
  // Si se deja vacío, el formulario abre el cliente de correo con el mensaje
  // ya redactado (funciona sin backend desde el primer día).
  formEndpoint: '',
};

const LANG_KEY = 'vgm-lang';

/* --------------------------------------------------------------------------
   1. DICCIONARIO BILINGÜE
   -------------------------------------------------------------------------- */

const translations = {
  es: {
    meta_title: 'VGM Engineering & Consulting | Soluciones de Ingeniería',
    meta_desc:
      'Consultoría e ingeniería mecánica: climatización HVAC, protección contra incendios, redes de gas y piping industrial. Diseño, cálculo, inspección y supervisión con estándares NFPA y ASHRAE.',
    nav_start: 'Inicio',
    nav_services: 'Servicios',
    nav_projects: 'Proyectos',
    nav_methodology: 'Metodología',
    nav_tools: 'Herramientas',
    nav_leadership: 'Liderazgo',
    nav_faq: 'FAQ',
    cta_consulting: 'Solicitar Consultoría',
    cta_mobile: 'Solicitar Consultoría',
    lang_switch: 'Cambiar a inglés',
    drawer_title: 'Menú',
    hero_badge: 'Consultoría & Ingeniería de Alta Exigencia',
    hero_title_1: 'Ingeniería Mecánica de',
    hero_title_accent: 'Precisión & Control',
    hero_subtitle:
      'Diseño, cálculo e inspección rigurosa de sistemas de climatización (HVAC), protección contra incendios, redes de gas y piping industrial.',
    hero_trust_1: 'Respuesta en menos de 24 h',
    hero_trust_2: 'Inspección en sitio · LATAM',
    hero_trust_3: 'Entregables listos para permisología',
    hero_btn_primary: 'Solicitar Evaluación de Proyecto',
    hero_btn_secondary: 'Ver Especialidades',
    metric_exp: 'Años Exp.',
    metric_norm: 'Norma NFPA',
    metric_cad: 'Modelado CAD',
    services_kicker: 'Áreas de especialidad',
    services_title: 'Servicios Principales',
    services_subtitle: 'Especialidades técnicas con alcance detallado para cada tipo de proyecto.',
    srv1_title: 'Consultoría e Inspección Técnica',
    srv1_desc:
      'Diagnóstico especializado y auditoría técnica en campo para instalaciones existentes o en fase de construcción.',
    srv1_item1: 'Auditoría de instalaciones existentes',
    srv1_item2: 'Verificación de cumplimiento normativo',
    srv1_item3: 'Informes de peritaje y adecuación',
    srv2_title: 'Diseño y Cálculo de Ingeniería',
    srv2_desc: 'Desarrollo integral de proyectos mecánicos bajo estándares internacionales NFPA y ASHRAE.',
    srv2_item1: 'Sistemas de Climatización (HVAC)',
    srv2_item2: 'Redes Contra Incendios y Rociadores',
    srv2_item3: 'Trazado de Tuberías, Gas y Piping',
    srv3_title: 'Gestión y Calidad de Proyectos',
    srv3_desc:
      'Supervisión de montaje y aseguramiento de calidad técnica para garantizar ejecuciones sin errores.',
    srv3_item1: 'Control de especificaciones de equipos',
    srv3_item2: 'Supervisión de montaje e instalación',
    srv3_item3: 'Aprobación de pruebas operativas (QA/QC)',
    srv_cta: 'Solicitar cotización',
    sectors_title: 'Sectores atendidos',
    sector_1: 'Industria',
    sector_2: 'Data centers',
    sector_3: 'Comercial',
    sector_4: 'Hospitales',
    sector_5: 'Alimentos y bebidas',
    sector_6: 'Edificios residenciales',
    projects_kicker: 'Proyectos representativos',
    projects_title: 'Resultados que se pueden auditar',
    projects_subtitle:
      'Alcance, entregables y resultados de intervenciones representativas en climatización, fuego y piping.',
    proj1_tag: 'HVAC',
    proj1_year: '2024',
    proj1_title: 'Climatización de nave industrial',
    proj1_desc: 'Rediseño completo de distribución de aire y cálculo de cargas para una planta de alimentos.',
    proj1_m1: '4.500 m²',
    proj1_m2: 'ASHRAE 62.1',
    proj2_tag: 'PCI',
    proj2_year: '2025',
    proj2_title: 'Red contra incendios de centro comercial',
    proj2_desc: 'Cálculo hidráulico, trazado de rociadores y memorias para permiso de operación.',
    proj2_m1: '180 uds.',
    proj2_m2: '6 semanas',
    proj3_tag: 'Piping',
    proj3_year: '2025',
    proj3_title: 'Auditoría de red de gas y piping',
    proj3_desc: 'Inspección de sistemas existentes con informe de peritaje y plan de adecuación.',
    proj3_m1: '12 km',
    proj3_m2: '100 %',
    proj_metric_1: 'Superficie',
    proj_metric_2: 'Norma',
    proj_metric_3: 'Rociadores',
    proj_metric_4: 'Entrega',
    proj_metric_5: 'Alcance',
    proj_metric_6: 'Cumplimiento',
    method_kicker: 'Cómo trabajamos',
    method_title: 'Metodología de Trabajo',
    method_subtitle: 'Desplaza la página hacia abajo para seguir la progresión del proyecto.',
    step1_title: '1. Levantamiento y Diagnóstico',
    step1_desc:
      'Análisis técnico inicial en sitio o revisión de planos arquitectónicos para definir el alcance del proyecto.',
    step2_title: '2. Cálculo y Diseño de Ingeniería',
    step2_desc: 'Dimensionamiento de cargas, modelado 3D de sistemas y desarrollo de memorias descriptivas.',
    step3_title: '3. Documentación y Permisología',
    step3_desc:
      'Elaboración de planos ejecutivos en CAD/BIM listos para licitación y trámites regulatorios.',
    step4_title: '4. Supervisión y Pruebas Operativas',
    step4_desc: 'Acompañamiento en sitio durante la instalación y validación final de funcionamiento.',
    tools_title: 'Software de Modelado & Normativa Técnica Especializada',
    lead_kicker: 'Dirección Técnica',
    lead_title: 'Liderazgo de Proyectos',
    lead_subtitle:
      'Un único interlocutor técnico responsable, de la definición del alcance hasta la aprobación de pruebas.',
    lead_role: 'Ingeniero Mecánico | Consultor Principal en VGM',
    lead_bio:
      'Ingeniero Mecánico con más de 7 años de experiencia especializado en proyectos de climatización (HVAC), sistemas contra incendios, redes de gas y piping industrial.',
    lead_linkedin: 'Ver Perfil en LinkedIn',
    lead_cta: 'Agendar reunión',
    cred_1_label: 'Formación',
    cred_1: 'Ingeniero Mecánico · UPV',
    cred_2_label: 'Normativa',
    cred_2: 'NFPA 13 · 20 · 30 · 101',
    cred_3_label: 'HVAC',
    cred_3: 'ASHRAE 62.1 · 90.1',
    cred_4_label: 'Idiomas',
    cred_4: 'Español · Inglés',
    testi_kicker: 'Confianza del cliente',
    testi_title: 'Lo que dicen de nuestro trabajo',
    testi_1:
      '«La auditoría nos ангlicó la red contra incendios antes de la inspección. Llegamos al permiso sin observaciones.»',
    testi_1_name: 'Gerente de Mantenimiento',
    testi_1_role: 'Industria de alimentos',
    testi_2:
      '«El modelo BIM nos ahorró semanas de coordinación con arquitectura. Todo llegó disciplinado y listo para construir.»',
    testi_2_name: 'Jefe de Proyectos',
    testi_2_role: 'Desarrollador inmobiliario',
    testi_3:
      '«Reportes claros y entregas a tiempo. Nuestro contratista principal no tuvo observaciones en la revisión de calidad.»',
    testi_3_name: 'Coordinador de Planta',
    testi_3_role: 'Operación industrial',
    faq_kicker: 'Dudas frecuentes',
    faq_title: 'Preguntas Frecuentes',
    faq_subtitle: 'Aclaraciones clave sobre la gestión y desarrollo de proyectos.',
    faq_q1: '¿En qué etapa del proyecto debo contactar a VGM?',
    faq_a1:
      'Idealmente desde el diseño conceptual para optimizar trazados. También auditamos instalaciones en ejecución o ya operativas.',
    faq_q2: '¿Qué entregables incluye un proyecto de ingeniería?',
    faq_a2:
      'Memoria descriptiva, de cálculo, cómputos métricos, planos detallados en CAD/BIM y especificaciones técnicas de equipos.',
    faq_q3: '¿Con qué software de modelado trabajan?',
    faq_a3:
      'Trabajamos con Autodesk Revit para modelado BIM en 3D y AutoCAD para esquemas 2D, permitiendo la integración directa con arquitectos e ingenieros civiles.',
    faq_q4: '¿Los diseños facilitan los trámites de permisología?',
    faq_a4:
      'Sí, todos nuestros cálculos y esquemas técnicos se ajustan a normativas internacionales (NFPA, ASHRAE) y regulaciones locales para acelerar la aprobación institucional.',
    form_badge: 'Contacto Directo',
    form_title: '¿Tienes un proyecto en mente?',
    form_subtitle:
      'Déjanos tu mensaje y evaluaremos tus requerimientos de ingeniería. También puedes contactarme directamente por correo o WhatsApp.',
    contact_whatsapp: 'WhatsApp',
    contact_email: 'Correo',
    contact_linkedin: 'LinkedIn',
    contact_zone: 'Cobertura',
    contact_zone_value: 'Bogotá, Colombia · Proyectos en LATAM',
    contact_hours:
      'Lunes a viernes, 8:00 – 18:00 (GMT-5) · Respuesta garantizada en menos de 24 h',
    form_label_name: 'Nombre Completo',
    form_label_email: 'Correo Electrónico',
    form_label_service: 'Servicio Requerido',
    form_label_msg: 'Detalles del Proyecto',
    form_opt_placeholder: 'Selecciona una especialidad…',
    form_opt_hvac: 'Climatización (HVAC)',
    form_opt_pci: 'Sistemas Contra Incendios (NFPA)',
    form_opt_gas: 'Redes de Gas y Piping',
    form_opt_auditoria: 'Auditoría / Inspección Técnica',
    form_opt_supervision: 'Supervisión de montaje (QA/QC)',
    form_opt_otro: 'Otro',
    form_hint_msg: 'Incluye alcance, ubicación y fecha deseada.',
    form_btn: 'Enviar Mensaje',
    form_privacy:
      'Al enviar aceptas que VGM use tus datos únicamente para responder esta consulta.',
    err_name: 'Escribe tu nombre (mínimo 3 caracteres).',
    err_email: 'Escribe un correo electrónico válido.',
    err_service: 'Selecciona una especialidad.',
    err_message: 'Cuéntanos brevemente el alcance (mínimo 10 caracteres).',
    status_sending: 'Enviando mensaje…',
    status_success: '¡Gracias! Tu consulta fue enviada. Responderemos en menos de 24 h.',
    status_mail: 'Abrimos tu cliente de correo con el mensaje listo. Envíalo para completar la solicitud.',
    status_error: 'No pudimos enviar el mensaje. Escríbenos por WhatsApp o correo.',
    footer_desc:
      'Consultoría de ingeniería mecánica, climatización HVAC, redes de incendios y piping industrial.',
    footer_nav: 'Navegación',
    footer_link_services: 'Servicios Principales',
    footer_link_projects: 'Proyectos',
    footer_link_method: 'Metodología de Trabajo',
    footer_link_lead: 'Liderazgo Técnico',
    footer_link_faq: 'Preguntas Frecuentes',
    footer_contact: 'Contacto',
    footer_zone: 'Bogotá, Colombia · LATAM',
    footer_standards: 'Normativa',
    footer_copy: '© 2026 VGM Engineering Consulting. Todos los derechos reservados.',
    footer_top: 'Volver arriba',
  },

  en: {
    meta_title: 'VGM Engineering & Consulting | Engineering Solutions',
    meta_desc:
      'Mechanical engineering consulting: HVAC, fire protection, gas networks and industrial piping. Design, calculation, inspection and supervision under NFPA and ASHRAE standards.',
    nav_start: 'Home',
    nav_services: 'Services',
    nav_projects: 'Projects',
    nav_methodology: 'Methodology',
    nav_tools: 'Tools',
    nav_leadership: 'Leadership',
    nav_faq: 'FAQ',
    cta_consulting: 'Request Consulting',
    cta_mobile: 'Request Consulting',
    lang_switch: 'Switch to Spanish',
    drawer_title: 'Menu',
    hero_badge: 'High-Exacting Consulting & Engineering',
    hero_title_1: 'Mechanical Engineering of',
    hero_title_accent: 'Precision & Control',
    hero_subtitle:
      'Design, calculation, and rigorous inspection of HVAC systems, fire protection, gas networks, and industrial piping.',
    hero_trust_1: 'Reply in under 24 hours',
    hero_trust_2: 'On-site inspection · LATAM',
    hero_trust_3: 'Permit-ready deliverables',
    hero_btn_primary: 'Request Project Evaluation',
    hero_btn_secondary: 'View Specialties',
    metric_exp: 'Years Exp.',
    metric_norm: 'NFPA Standards',
    metric_cad: 'CAD Modeling',
    services_kicker: 'Areas of expertise',
    services_title: 'Core Services',
    services_subtitle: 'Technical specialties with detailed scope for each project type.',
    srv1_title: 'Consulting & Technical Inspection',
    srv1_desc:
      'Specialized diagnostics and field technical audits for existing or under-construction facilities.',
    srv1_item1: 'Audit of existing facilities',
    srv1_item2: 'Regulatory compliance verification',
    srv1_item3: 'Expert appraisal and adequacy reports',
    srv2_title: 'Engineering Design & Calculation',
    srv2_desc: 'Comprehensive mechanical projects developed under international NFPA and ASHRAE standards.',
    srv2_item1: 'HVAC Systems & Climate Control',
    srv2_item2: 'Fire Protection & Sprinkler Networks',
    srv2_item3: 'Gas Networks & Industrial Piping Layout',
    srv3_title: 'Project Management & Quality',
    srv3_desc: 'Assembly supervision and technical quality assurance to guarantee error-free execution.',
    srv3_item1: 'Equipment specs control',
    srv3_item2: 'Assembly and installation supervision',
    srv3_item3: 'Operational testing approval (QA/QC)',
    srv_cta: 'Request a quote',
    sectors_title: 'Industries served',
    sector_1: 'Industrial',
    sector_2: 'Data centers',
    sector_3: 'Commercial',
    sector_4: 'Healthcare',
    sector_5: 'Food & beverage',
    sector_6: 'Residential buildings',
    projects_kicker: 'Featured projects',
    projects_title: 'Results you can audit',
    projects_subtitle:
      'Scope, deliverables and outcomes of representative work in HVAC, fire protection and piping.',
    proj1_tag: 'HVAC',
    proj1_year: '2024',
    proj1_title: 'Industrial warehouse HVAC',
    proj1_desc: 'Full airflow distribution redesign and load calculation for a food processing plant.',
    proj1_m1: '4,500 m²',
    proj1_m2: 'ASHRAE 62.1',
    proj2_tag: 'Fire',
    proj2_year: '2025',
    proj2_title: 'Shopping mall fire protection network',
    proj2_desc: 'Hydraulic calculation, sprinkler layout and technical memos for the operating permit.',
    proj2_m1: '180 units',
    proj2_m2: '6 weeks',
    proj3_tag: 'Piping',
    proj3_year: '2025',
    proj3_title: 'Gas network & piping audit',
    proj3_desc: 'Inspection of existing systems with expert appraisal report and remediation plan.',
    proj3_m1: '12 km',
    proj3_m2: '100 %',
    proj_metric_1: 'Area',
    proj_metric_2: 'Standard',
    proj_metric_3: 'Sprinklers',
    proj_metric_4: 'Delivery',
    proj_metric_5: 'Scope',
    proj_metric_6: 'Compliance',
    method_kicker: 'How we work',
    method_title: 'Work Methodology',
    method_subtitle: 'Scroll down to follow the project progression.',
    step1_title: '1. Survey & Diagnosis',
    step1_desc: 'Initial technical site analysis or architectural plan review to define project scope.',
    step2_title: '2. Calculation & Engineering Design',
    step2_desc: 'Load sizing, 3D system modeling, and technical memory development.',
    step3_title: '3. Documentation & Permitting',
    step3_desc: 'CAD/BIM executive drawing preparation ready for bidding and regulatory approval.',
    step4_title: '4. Supervision & Operational Testing',
    step4_desc: 'On-site support during installation and final performance validation.',
    tools_title: 'Modeling Software & Specialized Technical Standards',
    lead_kicker: 'Technical Direction',
    lead_title: 'Project Leadership',
    lead_subtitle:
      'One accountable technical counterpart, from scope definition to test sign-off.',
    lead_role: 'Mechanical Engineer | Principal Consultant at VGM',
    lead_bio:
      'Mechanical Engineer with +7 years of experience specialized in HVAC, fire protection, gas networks, and industrial piping.',
    lead_linkedin: 'View LinkedIn Profile',
    lead_cta: 'Schedule a meeting',
    cred_1_label: 'Education',
    cred_1: 'Mechanical Engineer · UPV',
    cred_2_label: 'Standards',
    cred_2: 'NFPA 13 · 20 · 30 · 101',
    cred_3_label: 'HVAC',
    cred_3: 'ASHRAE 62.1 · 90.1',
    cred_4_label: 'Languages',
    cred_4: 'Spanish · English',
    testi_kicker: 'Client confidence',
    testi_title: 'What clients say about our work',
    testi_1:
      '“The audit got our fire network squared away before inspection. We got the permit with zero observations.”',
    testi_1_name: 'Maintenance Manager',
    testi_1_role: 'Food industry',
    testi_2:
      '“The BIM model saved us weeks of coordination with architecture. Everything arrived disciplined and ready to build.”',
    testi_2_name: 'Projects Manager',
    testi_2_role: 'Real estate developer',
    testi_3:
      '“Clear reports and on-time delivery. Our main contractor had no findings during the quality review.”',
    testi_3_name: 'Plant Coordinator',
    testi_3_role: 'Industrial operations',
    faq_kicker: 'Common questions',
    faq_title: 'Frequently Asked Questions',
    faq_subtitle: 'Key clarifications regarding project management and engineering development.',
    faq_q1: 'At what stage should I contact VGM?',
    faq_a1:
      'Ideally during conceptual design to optimize layouts. We also audit running or operational facilities.',
    faq_q2: 'What deliverables are included in an engineering project?',
    faq_a2:
      'Descriptive & calculation memory, quantity takeoff, detailed CAD/BIM drawings, and technical equipment specs.',
    faq_q3: 'Which modeling software do you work with?',
    faq_a3:
      'We work with Autodesk Revit for 3D BIM modeling and AutoCAD for 2D layouts, ensuring smooth coordination with architects and civil engineers.',
    faq_q4: 'Do your designs facilitate permit approval?',
    faq_a4:
      'Yes, all calculations and technical drawings adhere to international codes (NFPA, ASHRAE) and local regulations to streamline institutional approval.',
    form_badge: 'Direct Contact',
    form_title: 'Do you have a project in mind?',
    form_subtitle:
      'Leave us a message and we will evaluate your engineering requirements. You can also reach me directly by email or WhatsApp.',
    contact_whatsapp: 'WhatsApp',
    contact_email: 'Email',
    contact_linkedin: 'LinkedIn',
    contact_zone: 'Coverage',
    contact_zone_value: 'Bogotá, Colombia · Projects across LATAM',
    contact_hours: 'Monday to Friday, 8:00 – 18:00 (GMT-5) · Guaranteed reply in under 24 hours',
    form_label_name: 'Full Name',
    form_label_email: 'Email Address',
    form_label_service: 'Required Service',
    form_label_msg: 'Project Details',
    form_opt_placeholder: 'Select a specialty…',
    form_opt_hvac: 'HVAC & Climate Control',
    form_opt_pci: 'Fire Protection Systems (NFPA)',
    form_opt_gas: 'Gas Networks & Piping',
    form_opt_auditoria: 'Audit / Technical Inspection',
    form_opt_supervision: 'Assembly Supervision (QA/QC)',
    form_opt_otro: 'Other',
    form_hint_msg: 'Include scope, location and target date.',
    form_btn: 'Send Message',
    form_privacy: 'By sending you agree that VGM will use your data only to reply to this enquiry.',
    err_name: 'Please enter your name (minimum 3 characters).',
    err_email: 'Please enter a valid email address.',
    err_service: 'Please select a specialty.',
    err_message: 'Tell us briefly about the scope (minimum 10 characters).',
    status_sending: 'Sending message…',
    status_success: 'Thank you! Your enquiry was sent. We reply in under 24 hours.',
    status_mail: 'We opened your email client with the message ready. Send it to complete your request.',
    status_error: 'We could not send the message. Reach us by WhatsApp or email.',
    footer_desc:
      'Mechanical engineering consulting: HVAC, fire protection networks and industrial piping.',
    footer_nav: 'Navigation',
    footer_link_services: 'Core Services',
    footer_link_projects: 'Projects',
    footer_link_method: 'Work Methodology',
    footer_link_lead: 'Technical Leadership',
    footer_link_faq: 'Frequently Asked Questions',
    footer_contact: 'Contact',
    footer_zone: 'Bogotá, Colombia · LATAM',
    footer_standards: 'Standards',
    footer_copy: '© 2026 VGM Engineering Consulting. All rights reserved.',
    footer_top: 'Back to top',
  },
};

let currentLang = 'es';

/* --------------------------------------------------------------------------
   2. UTILIDADES
   -------------------------------------------------------------------------- */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function detectLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'es' || saved === 'en') return saved;
  } catch (e) {
    /* localStorage bloqueado: seguimos con la detección del navegador */
  }
  return (navigator.language || 'es').toLowerCase().startsWith('en') ? 'en' : 'es';
}

function setStatus(el, type, message) {
  if (!el) return;
  el.className = 'hidden mb-5 rounded-xl border px-4 py-3 text-sm';
  if (!message) return;
  el.textContent = message;
  el.classList.remove('hidden');
  el.classList.add(type === 'success' ? 'is-success' : 'is-error');
}

/* --------------------------------------------------------------------------
   3. TRADUCCIÓN
   -------------------------------------------------------------------------- */

function applyLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];

  // Texto plano (hojas: nunca contienen hijos)
  $$('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!dict[key]) return;
    if (el.tagName === 'META') {
      el.setAttribute('content', dict[key]);
    } else {
      el.textContent = dict[key];
    }
  });

  // Atributos traducibles
  $$('[data-i18n-aria-label]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria-label');
    if (dict[key]) el.setAttribute('aria-label', dict[key]);
  });
  $$('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.setAttribute('placeholder', dict[key]);
  });

  // Idioma activo
  $$('.lang-opt').forEach((el) => {
    el.classList.toggle('is-active', el.dataset.lang === lang);
  });

  // <html lang> para lectores de pantalla y buscadores
  document.documentElement.lang = lang;

  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (e) {
    /* sin persistencia: no es crítico */
  }
}

function initLanguage() {
  applyLanguage(detectLang());
  const buttons = [$('#lang-toggle'), $('#lang-toggle-mobile')].filter(Boolean);
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLanguage(currentLang === 'es' ? 'en' : 'es');
    });
  });
}

/* --------------------------------------------------------------------------
   4. MENÚ LATERAL (DRAWER MÓVIL) — ACCESIBLE
   -------------------------------------------------------------------------- */

function initDrawer() {
  const menuBtn = $('#menu-btn');
  const drawer = $('#drawer-menu');
  const backdrop = $('#drawer-backdrop');
  const closeBtn = $('#drawer-close');
  if (!menuBtn || !drawer || !backdrop) return;

  const links = $$('.mobile-link', drawer);
  let lastFocused = null;

  const focusables = () =>
    $$(
      'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      drawer
    ).filter((el) => el.offsetParent !== null);

  function lockScroll() {
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbar > 0) document.body.style.paddingRight = scrollbar + 'px';
  }

  function unlockScroll() {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }

  function open() {
    lastFocused = document.activeElement;
    backdrop.classList.remove('hidden');
    drawer.classList.remove('translate-x-full');
    menuBtn.setAttribute('aria-expanded', 'true');
    lockScroll();
    requestAnimationFrame(() => {
      backdrop.classList.remove('opacity-0');
      (closeBtn || focusables()[0] || drawer).focus();
    });
  }

  function close() {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('opacity-0');
    menuBtn.setAttribute('aria-expanded', 'false');
    unlockScroll();
    setTimeout(() => backdrop.classList.add('hidden'), 300);
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  menuBtn.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  backdrop.addEventListener('click', close);
  links.forEach((link) => link.addEventListener('click', close));

  // Escape cierra
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !drawer.classList.contains('translate-x-full')) close();
  });

  // Focus trap
  drawer.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const items = focusables();
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
}

/* --------------------------------------------------------------------------
   5. SCROLL-SPY + BARRA DE PROGRESO + VOLVER ARRIBA
   -------------------------------------------------------------------------- */

function initScrollSpy() {
  const links = $$('a[href^="#"]').filter((a) => a.getAttribute('href').length > 1);
  const navLinks = links.filter((a) => a.classList.contains('nav-link'));
  const progress = $('#scroll-progress');
  const backTop = $('#back-to-top');
  const sections = navLinks
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  function update() {
    const y = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;

    if (progress) progress.style.width = (docH > 0 ? Math.min(100, (y / docH) * 100) : 0) + '%';

    if (backTop) backTop.classList.toggle('is-visible', y > 600);

    // Sección activa: la última cuyo inicio ya pasó la línea de lectura
    const line = y + window.innerHeight * 0.3;
    let currentId = sections.length ? sections[0].id : null;
    sections.forEach((s) => {
      if (s.offsetTop <= line) currentId = s.id;
    });
    // Al final de la página siempre manda la última sección
    if (docH > 0 && y >= docH - 4 && sections.length) currentId = sections[sections.length - 1].id;

    links.forEach((a) => {
      const isActive = a.getAttribute('href') === '#' + currentId;
      a.classList.toggle('is-active', isActive);
      if (isActive) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  }

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      update();
      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();

  if (backTop) {
    backTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }
}

/* --------------------------------------------------------------------------
   6. TIMELINE DE METODOLOGÍA
   -------------------------------------------------------------------------- */

function initTimeline() {
  const wrap = $('#timeline-wrap');
  const bar = $('#timeline-progress');
  const steps = $$('.timeline-step');
  if (!wrap || !bar || !steps.length) return;

  let ticking = false;

  function update() {
    const rect = wrap.getBoundingClientRect();
    const anchor = window.innerHeight * 0.62;
    const total = Math.max(1, rect.height - 120);
    const passed = anchor - rect.top;
    const p = Math.min(1, Math.max(0, passed / total));
    bar.style.height = (p * 100) + '%';

    steps.forEach((step) => {
      const node = $('.timeline-node', step);
      if (!node) return;
      const active = step.getBoundingClientRect().top <= anchor;
      node.classList.toggle('is-active', active);
    });
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      update();
      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
}

/* --------------------------------------------------------------------------
   7. CARRUSEL DE HERRAMIENTAS — pausa cuando no está visible
   -------------------------------------------------------------------------- */

function initMarquee() {
  const marquee = $('#tools-marquee');
  if (!marquee) return;
  const track = $('.animate-infinite-scroll', marquee);
  if (!track) return;

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          track.classList.toggle('is-paused', !entry.isIntersecting);
        });
      },
      { threshold: 0.05 }
    );
    io.observe(marquee);
  }
}

/* --------------------------------------------------------------------------
   8. ACORDEÓN FAQ (accesible + animado)
   -------------------------------------------------------------------------- */

function initFaq() {
  const buttons = $$('.faq-btn');

  function animate(panel, opening) {
    const finish = (fn) => {
      let done = false;
      const run = () => {
        if (done) return;
        done = true;
        panel.removeEventListener('transitionend', onEnd);
        clearTimeout(timer);
        fn();
      };
      const onEnd = (e) => {
        if (e.propertyName !== 'height') return;
        run();
      };
      // Fallback: si la transición se interrumpe o no dispara, el panel se cierra igual
      const timer = setTimeout(run, 400);
      panel.addEventListener('transitionend', onEnd);
    };

    if (opening) {
      panel.classList.remove('hidden');
      panel.style.height = '0px';
      panel.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        panel.style.transition = 'height .28s cubic-bezier(.2,.7,.3,1)';
        panel.style.height = panel.scrollHeight + 'px';
      });
      finish(() => {
        panel.style.height = '';
        panel.style.transition = '';
        panel.style.overflow = '';
      });
    } else {
      panel.style.height = panel.scrollHeight + 'px';
      requestAnimationFrame(() => {
        panel.style.transition = 'height .24s cubic-bezier(.2,.7,.3,1)';
        panel.style.height = '0px';
      });
      finish(() => {
        panel.classList.add('hidden');
        panel.style.height = '';
        panel.style.transition = '';
      });
    }
  }

  buttons.forEach((btn) => {
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    if (!panel) return;

    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Acordeón: cerrar el resto
      buttons.forEach((other) => {
        if (other === btn) return;
        const otherPanel = document.getElementById(other.getAttribute('aria-controls'));
        if (other.getAttribute('aria-expanded') === 'true' && otherPanel) {
          other.setAttribute('aria-expanded', 'false');
          animate(otherPanel, false);
        }
      });

      btn.setAttribute('aria-expanded', String(!isOpen));
      animate(panel, !isOpen);
    });
  });
}

/* --------------------------------------------------------------------------
   9. REVEAL ON SCROLL
   -------------------------------------------------------------------------- */

function initReveal() {
  const items = $$('[data-reveal]');
  if (!items.length) return;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  // Escalonado por contenedor
  const counters = new Map();
  items.forEach((el) => {
    const parent = el.parentElement;
    const n = counters.get(parent) || 0;
    counters.set(parent, n + 1);
    el.style.transitionDelay = Math.min(n, 4) * 70 + 'ms';
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  items.forEach((el) => io.observe(el));
}

/* --------------------------------------------------------------------------
   10. FORMULARIO — validación en línea + envío
   -------------------------------------------------------------------------- */

function initForm() {
  const form = $('#contact-form');
  if (!form) return;

  const status = $('#form-status');
  const submitBtn = $('#form-submit');
  const btnLabel = $('#form-btn-label') || $('span', submitBtn);
  const honeypot = $('#empresa');

  const rules = {
    nombre: (v) => (v.trim().length >= 3 ? '' : translations[currentLang].err_name),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : translations[currentLang].err_email),
    servicio: (v) => (v ? '' : translations[currentLang].err_service),
    mensaje: (v) => (v.trim().length >= 10 ? '' : translations[currentLang].err_message),
  };

  function fieldError(name, message) {
    const input = form.elements[name];
    const box = document.getElementById('error-' + name);
    if (!input) return;
    if (message) {
      input.classList.add('field-invalid');
      input.setAttribute('aria-invalid', 'true');
      if (box) {
        box.textContent = message;
        box.classList.remove('hidden');
      }
    } else {
      input.classList.remove('field-invalid');
      input.removeAttribute('aria-invalid');
      if (box) box.classList.add('hidden');
    }
  }

  function validateField(name) {
    const input = form.elements[name];
    if (!input || !rules[name]) return true;
    const message = rules[name](input.value);
    fieldError(name, message);
    return !message;
  }

  Object.keys(rules).forEach((name) => {
    const input = form.elements[name];
    if (!input) return;
    input.addEventListener('blur', () => validateField(name));
    input.addEventListener('input', () => {
      if (input.getAttribute('aria-invalid') === 'true') validateField(name);
    });
  });

  function setLoading(loading) {
    submitBtn.disabled = loading;
    const spinner = $('.spinner', submitBtn);
    if (loading) {
      if (!spinner) {
        const s = document.createElement('span');
        s.className = 'spinner';
        s.setAttribute('aria-hidden', 'true');
        submitBtn.prepend(s);
      }
      if (btnLabel) btnLabel.textContent = translations[currentLang].status_sending;
    } else {
      const s = $('.spinner', submitBtn);
      if (s) s.remove();
      if (btnLabel) btnLabel.textContent = translations[currentLang].form_btn;
    }
  }

  function buildMailto() {
    const data = new FormData(form);
    const subject = `Consulta de proyecto — VGM Engineering (${data.get('servicio') || 'General'})`;
    const body = [
      `Nombre: ${data.get('nombre')}`,
      `Correo: ${data.get('email')}`,
      `Servicio: ${data.get('servicio')}`,
      '',
      'Detalles:',
      data.get('mensaje'),
    ].join('\n');
    return `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (honeypot && honeypot.value) return; // bot

    let firstInvalid = null;
    Object.keys(rules).forEach((name) => {
      if (!validateField(name) && !firstInvalid) firstInvalid = form.elements[name];
    });
    if (firstInvalid) {
      firstInvalid.focus();
      setStatus(status, 'error', translations[currentLang].status_error);
      return;
    }

    const endpoint = form.dataset.endpoint || CONFIG.formEndpoint;
    setLoading(true);
    setStatus(status, 'success', translations[currentLang].status_sending);

    if (!endpoint) {
      // Sin backend: se abre el cliente de correo con el mensaje redactado
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = buildMailto();
        link.rel = 'noopener';
        document.body.appendChild(link);
        link.click();
        link.remove();
        setLoading(false);
        setStatus(status, 'success', translations[currentLang].status_mail);
      }, 600);
      return;
    }

    try {
      const payload = Object.fromEntries(new FormData(form).entries());
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      form.reset();
      setStatus(status, 'success', translations[currentLang].status_success);
    } catch (err) {
      setStatus(status, 'error', translations[currentLang].status_error);
    } finally {
      setLoading(false);
    }
  });
}

/* --------------------------------------------------------------------------
   11. ENLACES DE CONTACTO (WhatsApp con número configurable)
   -------------------------------------------------------------------------- */

function initContactLinks() {
  if (!CONFIG.whatsapp) return;
  $$('a[href*="wa.me"]').forEach((a) => {
    a.setAttribute('href', `https://wa.me/${CONFIG.whatsapp}`);
  });
}

/* --------------------------------------------------------------------------
   12. ARRANQUE
   -------------------------------------------------------------------------- */

function init() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

  initLanguage();
  initDrawer();
  initScrollSpy();
  initTimeline();
  initMarquee();
  initFaq();
  initReveal();
  initForm();
  initContactLinks();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
