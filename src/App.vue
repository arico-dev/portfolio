<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  PhArrowRight,
  PhArrowDown,
  PhGithubLogo,
  PhEnvelope,
  PhGraduationCap,
  PhTranslate,
} from '@phosphor-icons/vue'
import ThemeToggle from './components/ThemeToggle.vue'
import Reveal from './components/Reveal.vue'
import ProjectCard from './components/ProjectCard.vue'
import ProjectPreview from './components/ProjectPreview.vue'
import { PROFILE, PROJECTS, STACK } from './data'

const { t, tm, locale } = useI18n()

const mail = atob('YWxsZW4uYXJlQHByb3Rvbi5tZQ==')

const skills = computed(() => tm('sobre.skills'))
const formacion = computed(() => tm('formacion.items'))

const menuOpen = ref(false)
const all = PROJECTS

const nav = computed(() => [
  { label: t('nav.proyectos'), href: '#proyectos' },
  { label: t('nav.sobre'), href: '#sobre' },
])

function toggleLocale() {
  const next = locale.value === 'es' ? 'en' : 'es'
  locale.value = next
  try {
    localStorage.setItem('pf-locale', next)
  } catch (e) {
    /* ignore */
  }
}

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
        <button
          type="button"
          class="grid h-10 w-10 place-items-center border-2 border-line font-mono text-xs font-bold text-ink transition-colors hover:bg-accent hover:text-accentink"
          :aria-label="locale === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'"
          @click="toggleLocale"
        >
          <PhTranslate :size="18" weight="bold" />
          <span class="sr-only">{{ locale === 'es' ? 'EN' : 'ES' }}</span>
        </button>
        <a
          :href="'mailto:' + mail"
          class="hidden items-center gap-2 border-2 border-line px-3 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-colors hover:bg-accent hover:text-accentink sm:inline-flex"
        >
          {{ t('nav.contacto') }}
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
        <a :href="'mailto:' + mail" class="py-3 font-bold text-accent" @click="menuOpen = false">
          {{ t('nav.contacto') }}
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
            {{ t('hero.hola') }}
          </p>
          <h1 class="mt-3 text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            <span class="group inline-block cursor-default">
              <span class="block h-[0.95em] overflow-hidden">
                <span class="block transition-transform duration-200 ease-out motion-reduce:transition-none motion-reduce:transform-none group-hover:-translate-y-[0.95em]">
                  <span class="block">arico-<span class="text-accent">dev</span></span>
                  <span class="block">Anthony Allen</span>
                </span>
              </span>
            </span>
          </h1>
          <p class="mt-5 max-w-md text-lg text-soft">
            {{ t('hero.bio') }}
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
              {{ t('hero.estado') }}
            </p>
            <ul class="mt-4 space-y-3 text-sm">
              <li class="flex items-center justify-between gap-4 border-b border-line pb-3">
                <span class="flex items-center gap-2 text-soft">
                  <PhGraduationCap :size="16" />
                  {{ t('hero.estudiante') }}
                </span>
                <span class="font-mono text-xs font-bold text-accent">{{ t('hero.activo') }}</span>
              </li>
              <li class="flex items-center justify-between gap-4 border-b border-line pb-3">
                <span class="flex items-center gap-2 text-soft">
                  <PhGithubLogo :size="16" />
                  {{ t('hero.repos') }}
                </span>
                <span class="font-mono text-xs font-bold">{{ t('hero.reposPubl') }}</span>
              </li>
              <li class="flex justify-between gap-4 pt-1">
                <span class="text-soft">{{ t('hero.enfoque') }}</span>
                <span class="font-mono text-xs font-bold">{{ t('hero.webMovil') }}</span>
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
        {{ t('hero.proyectosCue') }}
      </a>
    </section>

    <!-- ============ PROYECTOS ============ -->
    <section id="proyectos" class="border-t-2 border-line">
      <Reveal>
        <div class="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div>
            <h2 class="text-3xl font-black uppercase tracking-tight sm:text-4xl">
              {{ t('proyectos.title') }}
            </h2>
          </div>

          <p class="mt-4 max-w-prose text-soft">
            {{ t('proyectos.sub') }}
          </p>

          <div class="mt-10 flex flex-col gap-4">
            <ProjectCard
              v-for="(project, i) in all"
              :key="project.slug"
              :index="String(i + 1).padStart(2, '0')"
              :project="project"
            />
          </div>
        </div>
      </Reveal>
    </section>

    <!-- ============ FORMACIÓN ============ -->
    <section id="formacion" class="border-t-2 border-line">
      <Reveal>
        <div class="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div class="grid gap-10 md:grid-cols-5">
            <div class="md:col-span-2">
              <h2 class="text-3xl font-black uppercase tracking-tight sm:text-4xl">
                {{ t('formacion.title') }}
              </h2>
            </div>
            <div class="md:col-span-3">
              <p class="max-w-prose text-soft">{{ t('formacion.sub') }}</p>
              <ul class="mt-6 grid gap-2 sm:grid-cols-2">
                <li
                  v-for="(item, i) in formacion"
                  :key="i"
                  class="border-2 border-line bg-raise p-4"
                >
                  <div class="flex items-start justify-between gap-3">
                    <span class="font-mono text-xs font-bold text-accent">0{{ i + 1 }}</span>
                    <span
                      class="border border-line px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider whitespace-nowrap"
                    >
                      {{ item.estado }}
                    </span>
                  </div>
                  <p class="mt-3 font-bold uppercase tracking-tight">{{ item.titulo }}</p>
                  <p class="mt-1 font-mono text-xs text-faint">{{ item.lugar }}</p>
                </li>
              </ul>
            </div>
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
              {{ t('sobre.title') }}
            </h2>
          </div>
          <div class="md:col-span-3">
            <p class="text-lg text-ink">
              {{ t('sobre.p1a') }}<span class="font-bold">arico-dev</span>{{ t('sobre.p1b') }}
            </p>
            <ul class="mt-6 grid gap-2 border-2 border-line p-6 sm:grid-cols-2">
              <li v-for="(skill, i) in skills" :key="i" class="flex items-center gap-3 text-soft">
                <span class="font-mono text-xs font-bold text-accent">0{{ i + 1 }}</span>
                {{ skill }}
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
            {{ t('footer.pregunta') }}
          </p>
          <p class="mt-2 text-3xl font-black uppercase tracking-tight sm:text-4xl">
            {{ t('footer.hablemos') }}
          </p>
        </div>
        <a
          :href="'mailto:' + mail"
          class="inline-flex w-fit items-center gap-3 bg-accent px-6 py-4 font-mono text-base font-bold uppercase tracking-wider text-accentink transition-colors hover:bg-ink hover:text-bg md:justify-self-end"
        >
          <PhEnvelope :size="18" weight="bold" />
          {{ mail }}
        </a>
      </div>

      <div class="mt-12 flex flex-col items-start justify-between gap-4 border-t-2 border-line pt-6 font-mono text-xs text-faint sm:flex-row sm:items-center">
        <p class="flex items-center gap-3">
          <span>© 2026 arico-dev</span>
          <a
            href="https://github.com/arico-dev"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1.5 transition-colors hover:text-accent"
            aria-label="GitHub"
          >
            <PhGithubLogo :size="14" weight="bold" />
            GitHub
          </a>
        </p>
        <p class="uppercase tracking-wider">{{ t('footer.hecho') }}</p>
      </div>
    </div>
  </footer>
</template>
