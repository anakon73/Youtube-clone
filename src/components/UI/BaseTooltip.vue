<script setup lang="ts">
import { ref, toRefs, computed } from 'vue'

interface Props {
  text: string
  top?: boolean
  right?: boolean
  left?: boolean
}

const props = defineProps<Props>()

const { text, top, left, right } = toRefs(props)

const isShown = ref(false)

const getPositionClasses = () => {
  const topClass = top?.value ? 'bottom-12' : 'top-14'

  if (right?.value) {
    return [topClass, 'left-0']
  }
  if (left?.value) {
    return [topClass, 'right-0']
  }
  return [topClass, 'left-1/2', '-translate-x-1/2']
}

const classes = computed((): string[] => {
  return [
    'bg-gray-600',
    'bg-opacity-80',
    'rounded-sm',
    'text-white',
    'text-xs',
    'whitespace-nowrap',
    'p-2',
    'absolute',
    'transform',
    ...getPositionClasses(),
  ]
})
</script>

<template>
  <div class="relative">
    <div
      class="h-full flex items-center"
      @mouseenter="isShown = true"
      @mouseleave="isShown = false"
      @click="isShown = false"
    >
      <slot />
    </div>
    <Transition
      enter-active-class="duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-75"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="isShown" :class="classes">{{ text }}</div>
    </Transition>
  </div>
</template>
