<script setup lang="ts">
import { ref, toRefs } from 'vue'

interface Props {
  results: string[]
  activeResultId: number
}

const props = defineProps<Props>()

const { results, activeResultId } = toRefs(props)

const emits = defineEmits([
  'search-result-mouseenter',
  'search-result-mouseleave',
  'search-result-click',
])

const isSearchPredictionsModalOpen = ref<boolean>(false)
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

const getItemClasses = (resultId: number) => {
  return [
    resultId === activeResultId.value ? 'bg-gray-100' : 'bg-transparent',
    'text-black',
    'px-3',
    'py-1',
    'select-none',
    'truncate',
  ]
}

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
      <li
        v-for="(text, id) in results"
        :key="text"
        :class="getItemClasses(id)"
        @mouseenter="$emit('search-result-mouseenter', id)"
        @mouseleave="$emit('search-result-mouseleave')"
        @click.stop="$emit('search-result-click')"
      >
        <span @mouseenter="$emit('search-result-mouseenter', id)">{{
          text
        }}</span>
      </li>
    </ul>
    <a
      href="#"
      :class="reportLinkClasses"
      @click="isSearchPredictionsModalOpen = true"
      >Report search predictions</a
    >
    <Teleport to="body">
      <ModalSearchPredictions
        v-if="isSearchPredictionsModalOpen"
        @close="isSearchPredictionsModalOpen = false"
      />
    </Teleport>
  </div>
</template>
