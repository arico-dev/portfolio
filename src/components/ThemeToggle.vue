<script setup>
import { ref } from 'vue'
import { PhSun, PhMoon } from '@phosphor-icons/vue'

const theme = ref('dark')
try {
  theme.value =
    document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
} catch (e) {
  theme.value = 'dark'
}

function toggle() {
  const next = theme.value === 'dark' ? 'light' : 'dark'
  theme.value = next
  document.documentElement.setAttribute('data-theme', next)
  try {
    localStorage.setItem('pf-theme', next)
  } catch (e) {
    /* ignore */
  }
}
</script>

<template>
  <button
    type="button"
    class="grid h-10 w-10 place-items-center border-2 border-line bg-transparent font-mono text-sm text-ink transition-colors hover:bg-accent hover:text-accentink"
    :aria-label="theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
    @click="toggle"
  >
    <PhSun v-if="theme === 'dark'" :size="18" weight="bold" />
    <PhMoon v-else :size="18" weight="bold" />
  </button>
</template>
