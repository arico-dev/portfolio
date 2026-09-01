import { createI18n } from 'vue-i18n'

const messages = {
  es: {
    site: {
      title: 'arico-dev │ Desarrollador Web',
      description: 'Portfolio de arico-dev, desarrollador web. React, Next.js, Kotlin y más. Proyectos, educación y formas de contacto.',
    },
    nav: {
      proyectos: 'Proyectos',
      sobre: 'Sobre',
      contacto: 'Contacto',
    },
    hero: {
      hola: 'Hola, soy',
      bio: 'Soy estudiante y todavía no soy desarrollador, pero es lo que me gusta hacer. Construyo aplicaciones web con React, Next.js y Vue, y aplicaciones móviles con Kotlin.',
      estado: 'Estado',
      estudiante: 'Estudiante',
      activo: 'Activo',
      repos: 'Repos',
      reposPubl: '5 públicos',
      enfoque: 'Enfoque',
      webMovil: 'Web + Móvil',
      proyectosCue: 'Proyectos',
    },
    proyectos: {
      title: 'Proyectos',
      sub: 'Una selección de mis repositorios públicos en GitHub.',
      codigo: 'Código',
      verDemo: 'Ver demo',
      preview: 'Preview',
      tecnologias: 'Tecnologías',
      live: 'Live',
    },
    sobre: {
      title: 'Sobre mí',
      p1a: 'Soy ',
      p1b: ', estudiante. Aún no soy desarrollador, pero es lo que me gusta hacer: me encanta pasar ideas reales a producto, desde sistemas de gestión hasta juegos y apps móviles.',
      skills: ['React, Next.js y Vue', 'Kotlin para Android', 'Código documentado en GitHub', 'Open source y con fines de aprendizaje'],
    },
    formacion: {
      title: 'Formación',
      sub: 'Mi recorrido de estudio hasta hoy.',
      items: [
        { titulo: 'Educación secundaria', lugar: 'Técnico en redes y telecomunicaciones', estado: 'Finalizado' },
        { titulo: 'Práctica profesional', lugar: 'Colegio Kronos · renovación completa de la infraestructura de red', estado: 'Completada' },
        { titulo: 'Ingeniería en Informática', lugar: 'INACAP · Desarrollo web, móvil y bases de datos', estado: 'En curso' },
      ],
    },
    footer: {
      pregunta: '¿Un proyecto en mente?',
      hablemos: 'Hablemos',
      hecho: 'Construido con Vue + Tailwind',
    },
    preview: {
      volver: 'Volver',
      capturas: 'Capturas',
      sinCapturas: 'Sin capturas definidas para este proyecto todavía.',
      placeholder: 'Placeholder',
    },
    projects: {
      portfolio: {
        human: 'Este portfolio',
        kind: 'Web',
        description: 'El sitio que estás viendo: portfolio brutalista con modo claro/oscuro, responsive y reveal-on-scroll con IntersectionObserver.',
        shots: ['Landing', 'Sección de proyectos'],
      },
      'destiny2-guessing-game': {
        human: 'Destiny 2 Guessing Game',
        kind: 'Web game',
        description: 'Wordle-style guessing game de Destiny 2 alimentado por la API de Bungie: armas, armaduras y perks exóticos desde el manifiesto. Desplegado en Vercel.',
        shots: ['Pantalla de inicio', 'Tablero de adivinanzas'],
      },
      'sistema-deportivo': {
        human: 'Sistema de Gestión Deportiva',
        kind: 'Web app',
        description: 'Aplicación web de gestión deportiva para una institución educativa: estudiantes, entrenadores, disciplinas, inscripciones, asistencias y evaluaciones de rendimiento. Con demo desplegada.',
        shots: ['Inicio de sesión', 'Panel principal', 'Gestión de estudiantes'],
      },
      'arduino-iot-hub': {
        human: 'Arduino IoT Hub',
        kind: 'App móvil',
        description: 'App móvil con interfaz centralizada para la interacción bidireccional con proyectos de electrónica y automatización basados en Arduino, usando comunicación serial Bluetooth Classic.',
        shots: ['Pantalla principal', 'Conexión Bluetooth'],
      },
    },
  },
  en: {
    site: {
      title: 'arico-dev │ Web Developer',
      description: 'Portfolio of arico-dev, web developer. React, Next.js, Kotlin and more. Projects, education and ways to get in touch.',
    },
    nav: {
      proyectos: 'Projects',
      sobre: 'About',
      contacto: 'Contact',
    },
    hero: {
      hola: "Hi, I'm",
      bio: "I'm a student and not a developer yet, but it's what I love doing. I build web apps with React, Next.js and Vue, and mobile apps with Kotlin.",
      estado: 'Status',
      estudiante: 'Student',
      activo: 'Active',
      repos: 'Repos',
      reposPubl: '5 public',
      enfoque: 'Focus',
      webMovil: 'Web + Mobile',
      proyectosCue: 'Projects',
    },
    proyectos: {
      title: 'Projects',
      sub: 'A selection of my public repositories on GitHub.',
      codigo: 'Code',
      verDemo: 'Live demo',
      preview: 'Preview',
      tecnologias: 'Tech',
      live: 'Live',
    },
    sobre: {
      title: 'About me',
      p1a: "I'm ",
      p1b: ", a student. Not a developer yet, but it's what I love doing: I enjoy turning real ideas into products, from management systems to games and mobile apps.",
      skills: ['React, Next.js and Vue', 'Kotlin for Android', 'Code documented on GitHub', 'Open source and for learning'],
    },
    formacion: {
      title: 'Education',
      sub: 'My learning journey so far.',
      items: [
        { titulo: 'High school', lugar: 'Networking & telecommunications technician', estado: 'Completed' },
        { titulo: 'Professional internship', lugar: 'Colegio Kronos · full network infrastructure overhaul', estado: 'Completed' },
        { titulo: 'Computer engineering', lugar: 'INACAP · Web, mobile & databases', estado: 'In progress' },
      ],
    },
    footer: {
      pregunta: 'Got a project in mind?',
      hablemos: "Let's talk",
      hecho: 'Built with Vue + Tailwind',
    },
    preview: {
      volver: 'Back',
      capturas: 'Screenshots',
      sinCapturas: 'No screenshots defined for this project yet.',
      placeholder: 'Placeholder',
    },
    projects: {
      portfolio: {
        human: 'This portfolio',
        kind: 'Web',
        description: 'The site you are looking at: a brutalist portfolio with light/dark mode, responsive and reveal-on-scroll with IntersectionObserver.',
        shots: ['Hero', 'Projects section'],
      },
      'destiny2-guessing-game': {
        human: 'Destiny 2 Guessing Game',
        kind: 'Web game',
        description: 'Wordle-style guessing game of Destiny 2 powered by the Bungie API: exotic weapons, armor and perks from the manifest. Deployed on Vercel.',
        shots: ['Home screen', 'Guessing board'],
      },
      'sistema-deportivo': {
        human: 'Sports Management System',
        kind: 'Web app',
        description: 'Sports management web app for an educational institution: students, coaches, disciplines, enrollments, attendance and performance evaluations. With a live demo.',
        shots: ['Login', 'Main dashboard', 'Student management'],
      },
      'arduino-iot-hub': {
        human: 'Arduino IoT Hub',
        kind: 'Mobile app',
        description: 'Mobile app with a centralized interface for bidirectional interaction with Arduino-based electronics and automation projects, using Bluetooth Classic serial communication.',
        shots: ['Main screen', 'Bluetooth connection'],
      },
    },
  },
}

function detectLocale() {
  const saved = localStorage.getItem('pf-locale')
  if (saved === 'es' || saved === 'en') return saved
  const lang = (navigator.language || 'es').toLowerCase()
  return lang.startsWith('en') ? 'en' : 'es'
}

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: detectLocale(),
  fallbackLocale: 'es',
  messages,
})
