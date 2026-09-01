<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
  PhArrowRight,
  PhArrowDown,
  PhGithubLogo,
  PhEnvelope,
  PhGraduationCap,
} from '@phosphor-icons/vue'
import ThemeToggle from './components/ThemeToggle.vue'
import Reveal from './components/Reveal.vue'
import ProjectCard from './components/ProjectCard.vue'
import ProjectPreview from './components/ProjectPreview.vue'
import { PROFILE, PROJECTS, STACK } from './data'

const menuOpen = ref(false)
const all = PROJECTS

const nav = [
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sobre', href: '#sobre' },
]

// --- Preview routing via location.hash (#/preview/:slug) ---
const PREVIEW_PREFIX = '#/preview/'
const previewSlug = ref(null)

function parseHash() {
  const h = window.location.hash
  if (h.startsWith(PREVIEW_PREFIX)) {
    previewSlug.value = decodeURIComponent(h.slice(PREVIEW_PREFIX.length))
  } else {
    previewSlug.value = null
  }
}

const activeProject = computed(() =>
  previewSlug.value
    ? all.find((p) => p.slug === previewSlug.value) || null
    : null
)

onMounted(() => {
  parseHash()
  window.addEventListener('hashchange', parseHash)
})
onUnmounted(() => window.removeEventListener('hashchange', parseHash))
</script>

<template>
  <a
    v-if="!activeProject"
    href="#contenido"
    class="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:border-2 focus:border-accent focus:bg-bg focus:px-4 focus:py-2 focus:font-mono focus:font-bold"
  >
    Saltar al contenido
  </a>

  <ProjectPreview
    v-else
    :project="activeProject"
  />

  <!-- ============ TOPBAR ============ -->
  <header
    v-if="!activeProject"
    class="sticky top-0 z-40 border-b-2 border-line bg-bg/90 backdrop-blur-sm"
  >
    <div
      class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3"
    >
      <a
        href="#"
        class="font-mono text-sm font-bold tracking-tight"
        aria-label="Ir al inicio"
      >
        <span class="text-accent">~/</span>arico-dev
      </a>

      <nav class="hidden items-center gap-6 font-mono text-sm md:flex" aria-label="Principal">
        <a
          v-for="item in nav"
          :key="item.href"
          :href="item.href"
          class="text-soft transition-colors hover:text-accent"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <ThemeToggle />
        <a
          href="mailto:hello@arico.dev"
          class="hidden items-center gap-2 border-2 border-line px-3 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-colors hover:bg-accent hover:text-accentink sm:inline-flex"
        >
          Contacto
          <PhArrowRight :size="13" weight="bold" />
        </a>
        <button
          type="button"
          class="grid h-10 w-10 place-items-center border-2 border-line font-mono font-bold md:hidden"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          aria-label="Abrir menú"
          @click="menuOpen = !menuOpen"
        >
          {{ menuOpen ? 'X' : '=' }}
        </button>
      </div>
    </div>

    <!-- mobile menu -->
    <div v-if="menuOpen" id="mobile-menu" class="border-t-2 border-line md:hidden">
      <nav class="mx-auto flex max-w-6xl flex-col px-5 py-2 font-mono text-sm" aria-label="Móvil">
        <a
          v-for="item in nav"
          :key="item.href"
          :href="item.href"
          class="border-b border-line py-3 text-soft"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </a>
        <a href="mailto:hello@arico.dev" class="py-3 font-bold text-accent" @click="menuOpen = false">
          Contacto
        </a>
      </nav>
    </div>
  </header>

  <main id="contenido" v-if="!activeProject">
    <!-- ============ HERO ============ -->
    <section class="relative flex min-h-[calc(100dvh-66px)] flex-col">
      <div
        class="mx-auto flex w-full max-w-6xl flex-1 items-center gap-10 px-5 py-12 md:grid md:grid-cols-5 md:py-16"
      >
        <div class="md:col-span-3">
          <p class="font-mono text-sm font-bold uppercase tracking-[0.2em] text-soft">
            Hola, soy
          </p>
          <h1 class="mt-3 text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            arico<span class="text-accent">.</span>dev
          </h1>
          <p class="mt-5 max-w-md text-lg text-soft">
            Soy estudiante y todavía no soy desarrollador, pero es lo que me
            gusta hacer. Construyo aplicaciones web con React, Next.js y Vue,
            y aplicaciones móviles con Kotlin.
          </p>

          <ul
            class="mt-8 flex flex-wrap items-center gap-x-8 gap-y-6"
            aria-label="Stack de tecnologías"
          >
            <li v-for="item in STACK" :key="item.label" class="group relative">
              <img
                :src="item.src"
                :alt="item.label"
                :class="['h-8 w-8 transition-transform group-hover:scale-110', item.invert && 'stack-icon-invert']"
                width="32"
                height="32"
                loading="lazy"
              />
              <span
                class="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap border-2 border-line bg-bg px-2 py-0.5 font-mono text-xs font-bold uppercase tracking-wider text-ink opacity-0 transition-opacity group-hover:opacity-100"
              >
                {{ item.label }}
              </span>
            </li>
          </ul>
        </div>

        <!-- index / status block -->
        <div class="md:col-span-2">
          <div class="border-2 border-line bg-raise p-6">
            <p class="font-mono text-sm font-bold uppercase tracking-[0.2em] text-soft">
              Estado
            </p>
            <ul class="mt-4 space-y-3 text-sm">
              <li class="flex items-center justify-between gap-4 border-b border-line pb-3">
                <span class="flex items-center gap-2 text-soft">
                  <PhGraduationCap :size="16" />
                  Estudiante
                </span>
                <span class="font-mono text-xs font-bold text-accent">Activo</span>
              </li>
              <li class="flex items-center justify-between gap-4 border-b border-line pb-3">
                <span class="flex items-center gap-2 text-soft">
                  <PhGithubLogo :size="16" />
                  Repos
                </span>
                <span class="font-mono text-xs font-bold">5 públicos</span>
              </li>
              <li class="flex justify-between gap-4 pt-1">
                <span class="text-soft">Enfoque</span>
                <span class="font-mono text-xs font-bold">Web + Móvil</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- scroll cue -->
      <a
        href="#proyectos"
        class="mx-auto mb-10 flex max-w-6xl items-center gap-2 px-5 font-mono text-xs uppercase tracking-wider text-faint transition-colors hover:text-accent"
      >
        <PhArrowDown :size="14" weight="bold" />
        Proyectos
      </a>
    </section>

    <!-- ============ PROYECTOS ============ -->
    <section id="proyectos" class="border-t-2 border-line">
      <Reveal>
        <div class="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div>
            <h2 class="text-3xl font-black uppercase tracking-tight sm:text-4xl">
              Proyectos
            </h2>
          </div>

          <p class="mt-4 max-w-prose text-soft">
            Una selección de mis repositorios públicos en GitHub.
          </p>

          <div class="mt-10 flex flex-col gap-4">
            <ProjectCard
              v-for="(project, i) in all"
              :key="project.name"
              :index="String(i + 1).padStart(2, '0')"
              :project="project"
            />
          </div>
        </div>
      </Reveal>
    </section>

    <!-- ============ SOBRE ============ -->
    <section id="sobre" class="border-t-2 border-line">
      <Reveal>
        <div class="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-5 md:py-20">
          <div class="md:col-span-2">
            <h2 class="text-3xl font-black uppercase tracking-tight sm:text-4xl">
              Sobre mí
            </h2>
          </div>
          <div class="md:col-span-3">
            <p class="text-lg text-ink">
              Soy <span class="font-bold">arico-dev</span>, estudiante. Aún
              no soy desarrollador, pero es lo que me gusta hacer: me encanta
              pasar ideas reales a producto, desde sistemas de gestión hasta
              juegos y apps móviles.
            </p>
            <ul class="mt-6 grid gap-2 border-2 border-line p-6 sm:grid-cols-2">
              <li class="flex items-center gap-2 text-soft">
                <span class="text-accent">▸</span>
                React, Next.js y Vue
              </li>
              <li class="flex items-center gap-2 text-soft">
                <span class="text-accent">▸</span>
                Kotlin para Android
              </li>
              <li class="flex items-center gap-2 text-soft">
                <span class="text-accent">▸</span>
                Código documentado en GitHub
              </li>
              <li class="flex items-center gap-2 text-soft">
                <span class="text-accent">▸</span>
                Open source y con fines de aprendizaje
              </li>
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  </main>

  <!-- ============ FOOTER / CTA ============ -->
  <footer v-if="!activeProject" class="border-t-2 border-line bg-raise">
    <div class="mx-auto max-w-6xl px-5 py-14 md:py-16">
      <div class="grid items-center gap-8 md:grid-cols-2">
        <div>
          <p class="font-mono text-sm font-bold uppercase tracking-[0.2em] text-soft">
            ¿Un proyecto en mente?
          </p>
          <p class="mt-2 text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Hablemos
          </p>
        </div>
        <a
          href="mailto:hello@arico.dev"
          class="inline-flex w-fit items-center gap-3 bg-accent px-6 py-4 font-mono text-base font-bold uppercase tracking-wider text-accentink transition-colors hover:bg-ink hover:text-bg"
        >
          <PhEnvelope :size="18" weight="bold" />
          hello@arico.dev
        </a>
      </div>

      <div class="mt-12 flex flex-col items-start justify-between gap-4 border-t-2 border-line pt-6 font-mono text-xs text-faint sm:flex-row sm:items-center">
        <p>© 2026 arico-dev</p>
        <p class="uppercase tracking-wider">Construido con Vue + Tailwind</p>
      </div>
    </div>
  </footer>
</template>
