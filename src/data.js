// Real project data mirrored from github.com/arico-dev (fetched Sep 2026)
// Translated strings (role, human, kind, description, preview captions) live
// in src/i18n.js keyed by project slug. This file keeps non-translatable data.
export const PROFILE = {
  handle: 'arico-dev',
  student: true,
  location: '',
  website: 'https://github.com/arico-dev',
}

export const PROJECTS = [
  {
    slug: 'portfolio',
    stack: ['Vue', 'Vite', 'Tailwind'],
    url: 'https://github.com/arico-dev/portfolio',
    demo: '',
    language: 'Vue',
    featured: false,
    preview: {
      shots: [
        { src: '/projects/portfolio/hero.png' },
        { src: '/projects/portfolio/proyectos.png' },
      ],
    },
  },
  {
    slug: 'destiny2-guessing-game',
    stack: ['TypeScript', 'Next.js', 'Tailwind', 'Bungie API'],
    url: 'https://github.com/arico-dev/destiny2-guessing-game',
    demo: 'https://destiny2-guessing-game.vercel.app',
    language: 'TypeScript',
    featured: true,
    preview: {
      shots: [
        { src: '/projects/destiny2/portada.png' },
        { src: '/projects/destiny2/juego.png' },
      ],
    },
  },
  {
    slug: 'sistema-deportivo',
    stack: ['PHP', 'MySQL', 'SQL'],
    url: 'https://github.com/arico-dev/Sistema-Deportivo-',
    demo: 'https://sporttrack.page.gd/login.php',
    language: 'PHP',
    featured: true,
    preview: {
      shots: [
        { src: '/projects/sistema-deportivo/login.png' },
        { src: '/projects/sistema-deportivo/dashboard.png' },
        { src: '/projects/sistema-deportivo/estudiantes.png' },
      ],
    },
  },
  {
    slug: 'music-player',
    stack: ['Kotlin', 'Compose', 'Media3'],
    url: 'https://github.com/arico-dev/music-player',
    demo: '',
    language: 'Kotlin',
    featured: false,
    inProgress: true,
    preview: {
      shots: [
        { src: '/projects/music-player/portada.png' },
        { src: '/projects/music-player/reproductor.png' },
      ],
    },
  },
]

export const STACK = [
  { label: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/javascript/javascript-original.svg' },
  { label: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/typescript/typescript-original.svg' },
  { label: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/react/react-original.svg' },
  { label: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/nextjs/nextjs-original.svg', invert: true },
  { label: 'Vue', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/vuejs/vuejs-original.svg' },
  { label: 'Kotlin', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/kotlin/kotlin-original.svg' },
  { label: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/python/python-original.svg' },
  { label: 'PHP', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/php/php-original.svg' },
  { label: 'Tailwind CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/tailwindcss/tailwindcss-original.svg' },
  { label: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/git/git-original.svg' },
]
