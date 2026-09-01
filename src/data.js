// Real project data mirrored from github.com/arico-dev (fetched Sep 2026)
export const PROFILE = {
  handle: 'arico-dev',
  role: 'Desarrollador Web',
  student: true,
  location: '',
  website: 'https://github.com/arico-dev',
}

export const PROJECTS = [
  {
    name: 'portfolio',
    human: 'Este portfolio',
    kind: 'Web',
    stack: ['Vue', 'Vite', 'Tailwind'],
    description:
      'El sitio que estás viendo: portfolio brutalista con modo claro/oscuro, responsive y reveal-on-scroll con IntersectionObserver.',
    url: 'https://github.com/arico-dev/portfolio',
    demo: '',
    language: 'Vue',
    featured: false,
  },
  {
    name: 'destiny2-guessing-game',
    human: 'Destiny 2 Guessing Game',
    kind: 'Web game',
    stack: ['TypeScript', 'Next.js', 'Tailwind', 'Bungie API'],
    description:
      'Wordle-style guessing game de Destiny 2 alimentado por la API de Bungie: armas, armaduras y perks exóticos desde el manifiesto. Desplegado en Vercel.',
    url: 'https://github.com/arico-dev/destiny2-guessing-game',
    demo: 'https://destiny2-guessing-game.vercel.app',
    language: 'TypeScript',
    featured: true,
  },
  {
    name: 'Sistema-Deportivo-',
    human: 'Sistema de Gestión Deportiva',
    kind: 'Web app',
    stack: ['PHP', 'MySQL', 'SQL'],
    description:
      'Aplicación web de gestión deportiva para una institución educativa: estudiantes, entrenadores, disciplinas, inscripciones, asistencias y evaluaciones de rendimiento. Con demo desplegada.',
    url: 'https://github.com/arico-dev/Sistema-Deportivo-',
    demo: 'https://sporttrack.page.gd/login.php',
    language: 'PHP',
    featured: true,
  },
  {
    name: 'Arduino-IoT-Hub',
    human: 'Arduino IoT Hub',
    kind: 'App móvil',
    stack: ['Kotlin', 'Android', 'Bluetooth Classic'],
    description:
      'App móvil con interfaz centralizada para la interacción bidireccional con proyectos de electrónica y automatización basados en Arduino, usando comunicación serial Bluetooth Classic.',
    url: 'https://github.com/arico-dev/Arduino-IoT-Hub',
    demo: '',
    language: 'Kotlin',
    featured: false,
  },
]

export const STACK = [
  { label: 'JavaScript', level: 'Alto' },
  { label: 'TypeScript', level: 'Alto' },
  { label: 'React', level: 'Alto' },
  { label: 'Next.js', level: 'Alto' },
  { label: 'Vue', level: 'Medio' },
  { label: 'Kotlin', level: 'Medio' },
  { label: 'Python / Django', level: 'Medio' },
  { label: 'PHP', level: 'Medio' },
  { label: 'Tailwind CSS', level: 'Alto' },
  { label: 'Git / GitHub', level: 'Alto' },
]
