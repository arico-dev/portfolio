<script setup>
import { ref, onMounted } from 'vue'
import { PhArrowLeft, PhGithubLogo, PhArrowUpRight, PhImages } from '@phosphor-icons/vue'

const props = defineProps({
  project: { type: Object, required: true },
})

const failed = ref({})

function closePreview() {
  history.back()
}

function onImageError(slug) {
  failed.value = { ...failed.value, [slug]: true }
}
</script>

<template>
  <main class="min-h-[100dvh] px-5 py-10">
    <div class="mx-auto max-w-6xl">
      <!-- topbar -->
      <div class="flex items-center justify-between gap-4 border-b-2 border-line pb-5">
        <button
          type="button"
          class="inline-flex items-center gap-2 border-2 border-line px-3 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-colors hover:bg-accent hover:text-accentink"
          @click="closePreview"
        >
          <PhArrowLeft :size="14" weight="bold" />
          Volver
        </button>
        <p class="font-mono text-xs uppercase tracking-wider text-faint">
          <span class="text-accent">~/</span>preview / {{ project.slug }}
        </p>
      </div>

      <!-- header -->
      <div class="mt-10 max-w-3xl">
        <h1 class="text-4xl font-black uppercase tracking-tight sm:text-5xl">
          {{ project.human }}
        </h1>
        <p class="mt-4 max-w-prose text-soft">{{ project.description }}</p>

        <ul class="mt-5 flex flex-wrap gap-2" aria-label="Tecnologías">
          <li
            v-for="tech in project.stack"
            :key="tech"
            class="border border-line px-2 py-0.5 font-mono text-xs uppercase tracking-wider whitespace-nowrap"
          >
            {{ tech }}
          </li>
        </ul>

        <div class="mt-6 flex flex-wrap gap-2">
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
        </div>
      </div>

      <!-- gallery -->
      <div class="mt-14">
        <p class="font-mono text-xs font-bold uppercase tracking-[0.2em] text-soft">
          Capturas
        </p>

        <div v-if="project.preview && project.preview.shots.length" class="mt-6 grid gap-8 md:grid-cols-2">
          <figure
            v-for="shot in project.preview.shots"
            :key="shot.src"
            class="border-2 border-line bg-raise"
          >
            <div class="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-raise">
              <img
                v-if="!failed[shot.src]"
                :src="shot.src"
                :alt="shot.caption"
                class="h-full w-full object-cover"
                loading="lazy"
                @error="onImageError(shot.src)"
              />
              <!-- placeholder -->
              <div v-else class="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
                <PhImages :size="32" weight="bold" class="text-faint" />
                <span class="font-mono text-xs font-bold uppercase tracking-wider text-faint">
                  Placeholder
                </span>
                <code class="font-mono text-xs text-soft break-all">{{ shot.src }}</code>
              </div>
            </div>
            <figcaption class="border-t-2 border-line px-4 py-3 font-mono text-xs uppercase tracking-wider text-soft">
              {{ shot.caption }}
            </figcaption>
          </figure>
        </div>

        <p v-else class="mt-6 border-2 border-dashed border-line p-6 font-mono text-sm text-soft">
          Sin capturas definidas para este proyecto todavía.
        </p>
      </div>
    </div>
  </main>
</template>
