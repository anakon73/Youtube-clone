<script lang="ts" setup>
import SearchInput from './UI/SearchInput.vue'
import SearchButton from './UI/SearchButton.vue'
import SearchResults from './UI/SearchResults.vue'
import { ref, computed, watch } from 'vue'

type Props = {
  searchQuery: string
}

const { searchQuery } = defineProps<Props>()

const query = ref<string>(searchQuery)

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

watch(query, (query) => {
  emit('update-search-query', query)
})
</script>

<template>
  <div class="flex w-full mr-2">
    <div class="relative flex w-full">
      <SearchInput v-model:query="query" />
      <SearchResults v-show="results.length" :results="results" />
    </div>
    <SearchButton />
  </div>
</template>
