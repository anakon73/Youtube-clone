<script setup lang="ts">
import { toRefs } from '@vueuse/shared';
import { computed } from 'vue'

interface Props {
  results: string[]
  activeResultId: number
}

const props = defineProps<Props>()

const { results, activeResultId } = toRefs(props)

const classes: string[] = [
  'absolute',
  'top-full',
  'w-full',
  'bg-white',
  'border',
  'border-t-0',
  'border-gray-300',
  'shadow-md',
  'pt-4',
]

const itemclasses = computed(() => {
  return (resultId: number) => [
    resultId === activeResultId.value ? 'bg-gray-100' : 'hover:bg-gray-100',
    'text-black',
    'px-3',
    'py-1',
    'select-none',
    'truncate',
  ]
})

const reportLinkClasses: string[] = [
  'w-full',
  'inline-block',
  'text-right',
  'text-xs',
  'italic',
  'text-gray-500',
  'hover:text-black',
  'pr-2',
]
</script>

<template>
  <div :class="classes">
    <ul>
      <li v-for="(text, id) in results" :key="text" :class="itemclasses(id)">
        {{ text }}
      </li>
    </ul>
    <a href="#" :class="reportLinkClasses">Report search predictions</a>
  </div>
</template>
