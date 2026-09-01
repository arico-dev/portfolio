<script setup>
import { useReveal } from '../composables/useReveal'

// Sets up scroll-in reveal for any `.reveal` elements inside this component.
defineProps({
  tag: { type: String, default: 'div' },
})
useReveal()
</script>

<template>
  <component :is="tag" class="contents">
    <slot />
  </component>
</template>