<script lang="ts" setup>
import { onKeyUp } from '@vueuse/core'
import { ref, computed, watch, toRefs, onMounted, onBeforeUnmount } from 'vue'

const query = ref<string>('')
const activeQuery = ref<string>('')
const results = ref<string[]>([])
const isSearchResultsShown = ref<boolean>(false)
const activeSearchResultId = ref<number | null>(null)
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

const updateSearchResults = () => {
  activeQuery.value = query.value
  if (query.value === '') {
    results.value = []
  } else {
    results.value = keywords.value.filter((result) =>
      result.includes(trimmedQuery.value)
    )
  }
}

const trimmedQuery = computed(() => query.value.replace(/\s+/g, ' ').trim())

const makePreviousSearchResult = () => {
  if (activeSearchResultId.value === null) {
    activeSearchResultId.value = results.value.length - 1
  } else if (activeSearchResultId.value === 0) {
    activeSearchResultId.value = null
  } else {
    activeSearchResultId.value--
  }
}

const makeNextSearchResult = () => {
  if (activeSearchResultId.value === null) {
    activeSearchResultId.value = 0
  } else if (activeSearchResultId.value + 1 === results.value.length) {
    activeSearchResultId.value = null
  } else {
    activeSearchResultId.value++
  }
}

const handlePreviousSearchResult = () => {
  if (isSearchResultsShown.value) {
    makePreviousSearchResult()
    updateQueryWithSearchResults()
  } else {
    toggleSearchResults(true)
  }
}
const handleNextSearchResult = () => {
  if (!isSearchResultsShown.value) {
    toggleSearchResults(true)
    updateQueryWithSearchResults()
  } else {
    makeNextSearchResult()
  }
}

const updateQueryWithSearchResults = () => {
  const hasActiveSearchResults = activeSearchResultId.value !== null

  query.value = hasActiveSearchResults
    ? results.value[activeSearchResultId.value]
    : activeQuery.value
}

const toggleSearchResults = (isSearchInputActive: boolean) => {
  isSearchResultsShown.value = isSearchInputActive && results.value.length > 0
}

const onClickAndResize = () => {
  toggleSearchResults(false)
}

const selectSearchResult = () => {
  query.value = activeSearchResultId.value
    ? results.value[activeSearchResultId.value]
    : query.value

  toggleSearchResults(false)

  updateSearchResults()
}

onKeyUp('ArrowUp', () => {
  handlePreviousSearchResult()
})
onKeyUp('ArrowDown', () => {
  handleNextSearchResult()
})

onMounted(() => {
  window.addEventListener('click', onClickAndResize)
  window.addEventListener('resize', onClickAndResize)
})
</script>

<template>
  <div class="flex w-full mr-2">
    <div class="relative flex w-full">
      <SearchInput
        v-model:query="query"
        @change-state="toggleSearchResults"
        :has-results="results.length"
        @update:query="updateSearchResults"
        @enter="selectSearchResult"
      />
      <SearchResults
        v-show="isSearchResultsShown"
        :results="results"
        :active-result-id="activeSearchResultId"
        @search-result-mouseenter="activeSearchResultId = $event"
        @search-result-mouseleave="activeSearchResultId = null"
        @search-result-click="selectSearchResult"
      />
    </div>
    <SearchButton @click.stop="selectSearchResult" />
  </div>
</template>
