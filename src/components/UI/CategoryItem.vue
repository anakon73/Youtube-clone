<script setup lang="ts">
import { computed, toRefs } from 'vue'

interface Props {
  category: string
  isActive: boolean
}

const props = defineProps<Props>()

const { isActive, category } = toRefs(props)

const classes = computed(() => {
  const classes = ['px-3', 'py-1', 'transition', 'rounded-full', 'border']
  return isActive.value
    ? [
        ...classes,
        'border-gray-700',
        'bg-gray-600',
        'hover:bg-gray-500',
        'text-white',
      ]
    : [...classes, 'border-gray-300', 'bg-gray-100', 'hover:bg-gray-200']
})
</script>

<template>
  <a href="#" :class="classes">
    {{ category }}
  </a>
</template>
