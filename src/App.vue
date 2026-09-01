<script setup>
import { ref } from 'vue'
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
import { PROFILE, PROJECTS, STACK } from './data'

const menuOpen = ref(false)
const all = PROJECTS

const nav = [
  { label: 'Stack', href: '#stack' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sobre', href: '#sobre' },
]
</script>

<template>
  <a
    href="#contenido"
    class="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:border-2 focus:border-accent focus:bg-bg focus:px-4 focus:py-2 focus:font-mono focus:font-bold"
  >
    Saltar al contenido
  </a>

  <!-- ============ TOPBAR ============ -->
  <header
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

  <main id="contenido">
    <!-- ============ HERO ============ -->
    <section class="relative">
      <div class="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-14 md:grid-cols-5 md:pt-20">
        <div class="md:col-span-3">
          <p class="font-mono text-sm font-bold uppercase tracking-[0.2em] text-soft">
            Hola, soy
          </p>
          <h1 class="mt-3 text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            arico<span class="text-accent">.</span>dev
          </h1>
          <p class="mt-5 max-w-md text-lg text-soft">
            Desarrollador web y estudiante. Construyo aplicaciones web con
            React, Next.js y Vue, y aplicaciones móviles con Kotlin.
          </p>
          <div class="mt-7 flex flex-wrap gap-3">
            <a
              href="#proyectos"
              class="inline-flex items-center gap-2 bg-accent px-5 py-3 font-mono text-sm font-bold uppercase tracking-wider text-accentink transition-colors hover:bg-ink hover:text-bg"
            >
              Ver proyectos
              <PhArrowRight :size="16" weight="bold" />
            </a>
            <a
              href="mailto:hello@arico.dev"
              class="inline-flex items-center gap-2 border-2 border-line px-5 py-3 font-mono text-sm font-bold uppercase tracking-wider transition-colors hover:bg-raise"
            >
              Contacto
            </a>
          </div>
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
        href="#stack"
        class="mx-auto mb-6 flex max-w-6xl items-center gap-2 px-5 font-mono text-xs uppercase tracking-wider text-faint transition-colors hover:text-accent"
      >
        <PhArrowDown :size="14" weight="bold" />
        Stack
      </a>
    </section>

    <!-- ============ STACK ============ -->
    <section id="stack" class="border-t-2 border-line">
      <Reveal>
        <div class="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 class="mt-2 text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Stack
          </h2>

          <ul class="mt-10 divide-y-2 divide-line border-y-2 border-line">
            <li
              v-for="item in STACK"
              :key="item.label"
              class="reveal grid grid-cols-2 items-center gap-4 py-4 transition-colors hover:bg-raise sm:grid-cols-[1fr_10rem_1fr] sm:px-4"
            >
              <span class="text-base font-semibold sm:text-lg">{{ item.label }}</span>
              <span class="hidden font-mono text-xs uppercase tracking-wider text-faint sm:block">
                —————
              </span>
              <span class="justify-self-start font-mono text-xs uppercase tracking-wider text-soft sm:justify-self-end">
                {{ item.level }}
              </span>
            </li>
          </ul>
        </div>
      </Reveal>
    </section>

    <!-- ============ PROYECTOS ============ -->
    <section id="proyectos" class="border-t-2 border-line">
      <Reveal>
        <div class="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div class="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p class="font-mono text-sm font-bold uppercase tracking-[0.2em] text-soft">
                Trabajo
              </p>
              <h2 class="mt-2 text-3xl font-black uppercase tracking-tight sm:text-4xl">
                Proyectos
              </h2>
            </div>
            <a
              href="https://github.com/arico-dev"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 border-2 border-line px-3 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-colors hover:bg-accent hover:text-accentink"
            >
              <PhGithubLogo :size="14" weight="bold" />
              GitHub
            </a>
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
              Soy <span class="font-bold">arico-dev</span>, desarrollador web y
              estudiante. Me gusta pasar ideas reales a producto: desde
              sistemas de gestión hasta juegos y apps móviles.
            </p>
            <p class="mt-4 max-w-prose text-soft">
              Trabajo principalmente con el ecosistema JavaScript (React,
              Next.js, Vue) y con Kotlin para Android. Publico mi código en
              GitHub y me gusta mantener cada proyecto documentado y listo
              para que otros aprendan de él.
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/arico-dev"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 border-2 border-line px-4 py-2 font-mono text-sm font-bold uppercase tracking-wider transition-colors hover:bg-accent hover:text-accentink"
              >
                <PhGithubLogo :size="16" weight="bold" />
                GitHub
              </a>
              <a
                href="mailto:hello@arico.dev"
                class="inline-flex items-center gap-2 border-2 border-line px-4 py-2 font-mono text-sm font-bold uppercase tracking-wider transition-colors hover:bg-raise"
              >
                <PhEnvelope :size="16" weight="bold" />
                Contacto
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  </main>

  <!-- ============ FOOTER / CTA ============ -->
  <footer class="border-t-2 border-line bg-raise">
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
