<script lang="ts" setup>
import { onKeyUp } from '@vueuse/core';
import { ref, computed, watch, toRefs } from 'vue'

type Props = {
  searchQuery: string
}

const props = defineProps<Props>()

const { searchQuery } = toRefs(props)

const query = ref<string>(searchQuery.value)
const activeSearchResultId = ref<number | null>(null)
const isSearchResultsShown = ref<boolean | number>(false)
const keywords = ref<string[]>([
  'new york giants',
  'new york alicia keys',
  'new york giants vs washington football',
  'new york',
  'new york song',
  'new york new york frank sinatra',
  'new york jets',
  'new york city',
  'new york giants live',
  'new york state of mind',
  'new york giants vs washington football live',
  'new york giants injury',
  'new york giants live stream',
  'new york accent',
])

const emit = defineEmits(['update-search-query'])

const results = computed<string[]>(() => {
  if (!query.value) {
    return []
  }
  return keywords.value.filter((result) => result.includes(trimmedQuery.value))
})

const trimmedQuery = computed(() => query.value.replace(/\s+/g, ' ').trim())

const makePreviousSearchResult = () => {
  if (activeSearchResultId.value === null) {
    activeSearchResultId.value = results.value.length - 1
  }
  else if (activeSearchResultId.value === 0) {
    activeSearchResultId.value = null
  } else {
    activeSearchResultId.value--
  }
}

const makeNextSearchResult = () => {
  if (activeSearchResultId.value === null) {
    activeSearchResultId.value = 0
  }
  else if (activeSearchResultId.value + 1 === results.value.length) {
    activeSearchResultId.value = null
  } else {
    activeSearchResultId.value++
  }
}

const handlePreviousSearchResult = () => {
  if (isSearchResultsShown.value) {
    makePreviousSearchResult()
  } else {
    toggleSearchResults(true)
  }
}
const handleNextSearchResult = () => {
  if (!isSearchResultsShown.value) {
    toggleSearchResults(true)
  } else {
    makeNextSearchResult()
  }
}

const toggleSearchResults = (isSearchInputActive: boolean) => {
  isSearchResultsShown.value = isSearchInputActive && results.value.length
}

watch(query, (query) => {
  emit('update-search-query', query)
})

onKeyUp('ArrowUp', () => { handlePreviousSearchResult() })
onKeyUp('ArrowDown', () => { handleNextSearchResult() })

</script>

<template>
  <div class="flex w-full mr-2">
    <div class="relative flex w-full">
      <SearchInput v-model:query="query" />
      <SearchResults v-show="results.length" :results="results" :active-result-id="activeSearchResultId" />
    </div>
    <SearchButton />
  </div>
</template>
