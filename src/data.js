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
    name: 'destiny2-guessing-game',
    human: 'Destiny 2 Guessing Game',
    kind: 'Web app',
    stack: ['TypeScript', 'Next.js', 'Tailwind'],
    description:
      'Juego de adivinar estilo Wordle de Destiny 2, alimentado por la API de Bungie: armas, armaduras y perks exóticos desde el manifiesto.',
    url: 'https://github.com/arico-dev/destiny2-guessing-game',
    demo: 'https://destiny2-guessing-game.vercel.app',
    license: 'MIT',
    featured: true,
  },
  {
    name: 'Sistema-Deportivo-',
    human: 'Sistema de Gestión Deportiva',
    kind: 'Web app',
    stack: ['PHP', 'MySQL', 'SQL'],
    description:
      'Gestión de actividades deportivas para una institución educativa: estudiantes, entrenadores, disciplinas, inscripciones, asistencias y evaluaciones.',
    url: 'https://github.com/arico-dev/Sistema-Deportivo-',
    demo: 'https://sporttrack.page.gd/login.php',
    license: 'MIT',
    featured: true,
  },
  {
    name: 'FastFood-Django',
    human: 'FastFood (Django)',
    kind: 'Web app',
    stack: ['Python', 'Django', 'REST'],
    description:
      'Gestión de catálogo, carrito y ventas de un local de comida rápida. Incluye API REST, fixtures de ejemplo y panel de administración.',
    url: 'https://github.com/arico-dev/FastFood-Django',
    demo: '',
    license: '',
    featured: false,
  },
  {
    name: 'FastFood-XAMPP-main',
    human: 'FastFood Express',
    kind: 'Web app',
    stack: ['JavaScript', 'XAMPP', 'MySQL'],
    description:
      'Demo completa de e-commerce para comida rápida: catálogo, carrito y checkout, CRUD con login, validación en tiempo real y seguimiento de ventas.',
    url: 'https://github.com/arico-dev/FastFood-XAMPP-main',
    demo: '',
    license: '',
    featured: false,
  },
  {
    name: 'Arduino-IoT-Hub',
    human: 'Arduino IoT Hub',
    kind: 'App móvil',
    stack: ['Kotlin', 'Android', 'Bluetooth'],
    description:
      'App móvil con interfaz centralizada para interactuar con proyectos de electrónica sobre Arduino mediante comunicación serial Bluetooth Classic.',
    url: 'https://github.com/arico-dev/Arduino-IoT-Hub',
    demo: '',
    license: '',
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
