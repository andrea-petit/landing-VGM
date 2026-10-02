// DICCIONARIO BILINGÜE
const translations = {
  es: {
    nav_start: "Inicio",
    nav_services: "Servicios",
    nav_methodology: "Metodología",
    nav_tools: "Herramientas",
    nav_leadership: "Liderazgo",
    nav_faq: "FAQ",
    cta_consulting: "Solicitar Consultoría",
    hero_badge: "Consultoría & Ingeniería de Alta Exigencia",
    hero_title_1: "Ingeniería Mecánica de",
    hero_title_accent: "Precisión & Control",
    hero_subtitle: "Diseño, cálculo e inspección rigurosa de sistemas de climatización (HVAC), protección contra incendios, redes de gas y piping industrial.",
    hero_btn_primary: "Solicitar Evaluación de Proyecto",
    hero_btn_secondary: "Ver Especialidades",
    metric_exp: "Años Exp.",
    metric_norm: "Norma NFPA",
    metric_cad: "Modelado CAD",
    services_title: "Servicios Principales",
    services_subtitle: "Especialidades técnicas con alcance detallado para cada tipo de proyecto.",
    srv1_title: "Consultoría e Inspección Técnica",
    srv1_desc: "Diagnóstico especializado y auditoría técnica en campo para instalaciones existentes o en fase de construcción.",
    srv1_item1: "Auditoría de instalaciones existentes",
    srv1_item2: "Verificación de cumplimiento normativo",
    srv1_item3: "Informes de peritaje y adecuación",
    srv2_title: "Diseño y Cálculo de Ingeniería",
    srv2_desc: "Desarrollo integral de proyectos mecánicos bajo estándares internacionales NFPA y ASHRAE.",
    srv2_item1: "Sistemas de Climatización (HVAC)",
    srv2_item2: "Redes Contra Incendios y Rociadores",
    srv2_item3: "Trazado de Tuberías, Gas y Piping",
    srv3_title: "Gestión y Calidad de Proyectos",
    srv3_desc: "Supervisión de montaje y aseguramiento de calidad técnica para garantizar ejecuciones sin errores.",
    srv3_item1: "Control de especificaciones de equipos",
    srv3_item2: "Supervisión de montaje e instalación",
    srv3_item3: "Aprobación de pruebas operativas (QA/QC)",
    method_title: "Metodología de Trabajo",
    method_subtitle: "Desplaza la página hacia abajo para seguir la progresión del proyecto.",
    step1_title: "1. Levantamiento y Diagnóstico",
    step1_desc: "Análisis técnico inicial en sitio o revisión de planos arquitectónicos para definir el alcance del proyecto.",
    step2_title: "2. Cálculo y Diseño de Ingeniería",
    step2_desc: "Dimensionamiento de cargas, modelado 3D de sistemas y desarrollo de memorias descriptivas.",
    step3_title: "3. Documentación y Permisología",
    step3_desc: "Elaboración de planos ejecutivos en CAD/BIM listos para licitación y trámites regulatorios.",
    step4_title: "4. Supervisión y Pruebas Operativas",
    step4_desc: "Acompañamiento en sitio durante la instalación y validación final de funcionamiento.",
    lead_kicker: "Dirección Técnica",
    lead_title: "Liderazgo de Proyectos",
    lead_role: "Ingeniero Mecánico | Consultor Principal en VGM",
    lead_bio: "Ingeniero Mecánico con más de 7 años de experiencia especializado en proyectos de climatización (HVAC), sistemas contra incendios, redes de gas y piping industrial.",
    lead_linkedin: "Ver Perfil en LinkedIn",
    faq_title: "Preguntas Frecuentes",
    faq_subtitle: "Aclaraciones clave sobre la gestión y desarrollo de proyectos.",
    faq_q1: "¿En qué etapa del proyecto debo contactar a VGM?",
    faq_a1: "Idealmente desde el diseño conceptual para optimizar trazados. También auditamos instalaciones en ejecución o ya operativas.",
    faq_q2: "¿Qué entregables incluye un proyecto de ingeniería?",
    faq_a2: "Memoria descriptiva, de cálculo, cómputos métricos, planos detallados en CAD/BIM y especificaciones técnicas de equipos.",
    faq_q3: "¿Con qué software de modelado trabajan?",
    faq_a3: "Trabajamos con Autodesk Revit para modelado BIM en 3D y AutoCAD para esquemas 2D, permitiendo la integración directa con arquitectos e ingenieros civiles.",
    faq_q4: "¿Los diseños facilitan los trámites de permisología?",
    faq_a4: "Sí, todos nuestros cálculos y esquemas técnicos se ajustan a normativas internacionales (NFPA, ASHRAE) y regulaciones locales para acelerar la aprobación institucional.",
    form_badge: "Contacto Directo",
    form_title: "¿Tienes un proyecto en mente?",
    form_subtitle: "Déjanos tu mensaje y evaluaremos tus requerimientos de ingeniería.",
    form_label_name: "Nombre Completo",
    form_label_email: "Correo Electrónico",
    form_label_service: "Servicio Requerido",
    form_label_msg: "Detalles del Proyecto",
    form_btn: "Enviar Mensaje",
    tools_title: "Software de Modelado & Normativa Técnica Especializada",
  },
  en: {
    nav_start: "Home",
    nav_services: "Services",
    nav_methodology: "Methodology",
    nav_tools: "Tools",
    nav_leadership: "Leadership",
    nav_faq: "FAQ",
    cta_consulting: "Request Consulting",
    hero_badge: "High-Exacting Consulting & Engineering",
    hero_title_1: "Mechanical Engineering of",
    hero_title_accent: "Precision & Control",
    hero_subtitle: "Design, calculation, and rigorous inspection of HVAC systems, fire protection, gas networks, and industrial piping.",
    hero_btn_primary: "Request Project Evaluation",
    hero_btn_secondary: "View Specialties",
    metric_exp: "Years Exp.",
    metric_norm: "NFPA Standards",
    metric_cad: "CAD Modeling",
    services_title: "Core Services",
    services_subtitle: "Technical specialties with detailed scope for each project type.",
    srv1_title: "Consulting & Technical Inspection",
    srv1_desc: "Specialized diagnostics and field technical audits for existing or under-construction facilities.",
    srv1_item1: "Audit of existing facilities",
    srv1_item2: "Regulatory compliance verification",
    srv1_item3: "Expert appraisal and adequacy reports",
    srv2_title: "Engineering Design & Calculation",
    srv2_desc: "Comprehensive mechanical projects developed under international NFPA and ASHRAE standards.",
    srv2_item1: "HVAC Systems & Climate Control",
    srv2_item2: "Fire Protection & Sprinkler Networks",
    srv2_item3: "Gas Networks & Industrial Piping Layout",
    srv3_title: "Project Management & Quality",
    srv3_desc: "Assembly supervision and technical quality assurance to guarantee error-free execution.",
    srv3_item1: "Equipment specs control",
    srv3_item2: "Assembly and installation supervision",
    srv3_item3: "Operational testing approval (QA/QC)",
    method_title: "Work Methodology",
    method_subtitle: "Scroll down to follow the project progression.",
    step1_title: "1. Survey & Diagnosis",
    step1_desc: "Initial technical site analysis or architectural plan review to define project scope.",
    step2_title: "2. Calculation & Engineering Design",
    step2_desc: "Load sizing, 3D system modeling, and technical memory development.",
    step3_title: "3. Documentation & Permitting",
    step3_desc: "CAD/BIM executive drawing preparation ready for bidding and regulatory approval.",
    step4_title: "4. Supervision & Operational Testing",
    step4_desc: "On-site support during installation and final performance validation.",
    lead_kicker: "Technical Direction",
    lead_title: "Project Leadership",
    lead_role: "Mechanical Engineer | Principal Consultant at VGM",
    lead_bio: "Mechanical Engineer with +7 years of experience specialized in HVAC, fire protection, gas networks, and industrial piping.",
    lead_linkedin: "View LinkedIn Profile",
    faq_title: "Frequently Asked Questions",
    faq_subtitle: "Key clarifications regarding project management and engineering development.",
    faq_q1: "At what stage should I contact VGM?",
    faq_a1: "Ideally during conceptual design to optimize layouts. We also audit running or operational facilities.",
    faq_q2: "What deliverables are included in an engineering project?",
    faq_a2: "Descriptive & calculation memory, quantity takeoff, detailed CAD/BIM drawings, and technical equipment specs.",
    faq_q3: "Which modeling software do you work with?",
    faq_a3: "We work with Autodesk Revit for 3D BIM modeling and AutoCAD for 2D layouts, ensuring smooth coordination with architects and civil engineers.",
    faq_q4: "Do your designs facilitate permit approval?",
    faq_a4: "Yes, all calculations and technical drawings adhere to international codes (NFPA, ASHRAE) and local regulations to streamline institutional approval.",
    form_badge: "Direct Contact",
    form_title: "Do you have a project in mind?",
    form_subtitle: "Leave us a message and we will evaluate your engineering requirements.",
    form_label_name: "Full Name",
    form_label_email: "Email Address",
    form_label_service: "Required Service",
    form_label_msg: "Project Details",
    form_btn: "Send Message",
    tools_title: "Modeling Software & Specialized Technical Standards",
    
  }
};

let currentLang = 'es';

document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  // --- TRADUCCIÓN ---
  const langToggleBtns = [document.getElementById('lang-toggle'), document.getElementById('lang-toggle-mobile')];
  
  function updateLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  langToggleBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        const nextLang = currentLang === 'es' ? 'en' : 'es';
        updateLanguage(nextLang);
      });
    }
  });

  // --- MENÚ LATERAL (DRAWER MÓVIL) ---
  const menuBtn = document.getElementById('menu-btn');
  const drawerMenu = document.getElementById('drawer-menu');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerClose = document.getElementById('drawer-close');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function openDrawer() {
    drawerBackdrop.classList.remove('hidden');
    setTimeout(() => {
      drawerBackdrop.classList.remove('opacity-0');
      drawerMenu.classList.remove('translate-x-full');
    }, 10);
  }

  function closeDrawer() {
    drawerMenu.classList.add('translate-x-full');
    drawerBackdrop.classList.add('opacity-0');
    setTimeout(() => {
      drawerBackdrop.classList.add('hidden');
    }, 300);
  }

  if (menuBtn && drawerMenu) {
    menuBtn.addEventListener('click', openDrawer);
    drawerClose.addEventListener('click', closeDrawer);
    drawerBackdrop.addEventListener('click', closeDrawer);
    mobileLinks.forEach(link => link.addEventListener('click', closeDrawer));
  }

  // --- TIMELINE EN SCROLL ---
  const steps = document.querySelectorAll('.timeline-step');
  const progressBar = document.getElementById('timeline-progress');

  function updateTimelineOnScroll() {
    if (!steps.length || !progressBar) return;

    const windowHeight = window.innerHeight;
    let activeStepsCount = 0;

    steps.forEach((step, index) => {
      const rect = step.getBoundingClientRect();
      if (rect.top <= windowHeight * 0.7) {
        step.classList.add('active');
        activeStepsCount = index + 1;
      } else {
        step.classList.remove('active');
      }
    });

    const progressPercent = (activeStepsCount / steps.length) * 100;
    progressBar.style.height = `${progressPercent}%`;
  }

  window.addEventListener('scroll', updateTimelineOnScroll);
  updateTimelineOnScroll();

  // --- ACORDEÓN FAQ ---
  document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const isOpen = !content.classList.contains('hidden');

      document.querySelectorAll('.faq-content').forEach(el => el.classList.add('hidden'));
      document.querySelectorAll('.faq-btn').forEach(el => el.classList.remove('active'));

      if (!isOpen) {
        content.classList.remove('hidden');
        btn.classList.add('active');
      }
    });
  });

  // --- FORMULARIO SUBMIT ---
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const button = contactForm.querySelector('button[type="submit"]');
      button.disabled = true;
      button.textContent = 'Enviando...';

      setTimeout(() => {
        alert('¡Gracias! Tu consulta ha sido enviada con éxito.');
        contactForm.reset();
        button.disabled = false;
        button.textContent = translations[currentLang].form_btn;
      }, 1200);
    });
  }
});