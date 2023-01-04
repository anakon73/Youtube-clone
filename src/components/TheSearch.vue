<script lang="ts" setup>
import { ref, computed, watch, toRefs } from 'vue'

type Props = {
  searchQuery: string
}

const props = defineProps<Props>()

const { searchQuery } = toRefs(props)

const query = ref<string>(searchQuery.value)
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

const emit = defineEmits(['update-search-query'])

const results = computed<string[]>(() => {
  if (!query.value) {
    return []
  }
  return keywords.value.filter((result) => result.includes(trimmedQuery.value))
})

const trimmedQuery = computed(() => query.value.replace(/\s+/g, ' ').trim())

const handlePreviousSearchResult = () => { }
const handleNextSearchResult = () => { }

watch(query, (query) => {
  emit('update-search-query', query)
})
</script>

<template>
  <div class="flex w-full mr-2">
    <div class="relative flex w-full">
      <SearchInput v-model:query="query" @keyup.up="handlePreviousSearchResult" @keyup.down="handleNextSearchResult" />
      <SearchResults v-show="results.length" :results="results" :active-result-id="activeSearchResultId" />
    </div>
    <SearchButton />
  </div>
</template>
