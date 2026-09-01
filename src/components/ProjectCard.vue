<script setup>
import { PhArrowUpRight, PhGithubLogo, PhImages } from '@phosphor-icons/vue'

const props = defineProps({
  index: { type: String, required: true },
  project: { type: Object, required: true },
})

function openPreview() {
  window.location.hash = `/preview/${props.project.slug}`
}
</script>

<template>
  <article
    class="reveal group grid gap-5 border-2 border-line bg-bg p-6 transition-colors hover:bg-raise sm:grid-cols-[4rem_1fr] sm:p-8"
  >
    <div class="flex items-start" aria-hidden="true">
      <span class="font-mono text-lg font-bold leading-none text-accent">
        /{{ index }}
      </span>
    </div>

    <div class="min-w-0">
      <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 class="text-2xl font-bold uppercase tracking-tight sm:text-3xl">
          {{ project.human }}
        </h3>
        <div class="flex items-center gap-2">
          <span
            v-if="project.demo"
            class="inline-flex items-center gap-1.5 bg-accent px-2 py-0.5 font-mono text-xs font-bold uppercase tracking-wider text-accentink"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-accentink"></span>
            Live
          </span>
          <span class="font-mono text-xs uppercase tracking-wider text-faint">
            {{ project.kind }}
          </span>
        </div>
      </div>

      <p class="mt-3 max-w-prose text-soft">{{ project.description }}</p>

      <ul class="mt-4 flex flex-wrap gap-2" aria-label="Tecnologías">
        <li
          v-for="tech in project.stack"
          :key="tech"
          class="border border-line px-2 py-0.5 font-mono text-xs uppercase tracking-wider whitespace-nowrap"
        >
          {{ tech }}
        </li>
      </ul>

      <div class="mt-5 flex flex-wrap gap-2">
        <a
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 border-2 border-line px-3 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-colors hover:bg-accent hover:text-accentink"
        >
          <PhGithubLogo :size="14" weight="bold" />
          Código
        </a>
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-accent px-3 py-2 font-mono text-xs font-bold uppercase tracking-wider text-accentink transition-colors hover:bg-ink hover:text-bg"
        >
          Ver demo
          <PhArrowUpRight :size="14" weight="bold" />
        </a>
        <button
          type="button"
          class="inline-flex items-center gap-2 border-2 border-line px-3 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-colors hover:bg-ink hover:text-bg"
          @click="openPreview"
        >
          <PhImages :size="14" weight="bold" />
          Preview
        </button>
      </div>
    </div>
  </article>
</template>
