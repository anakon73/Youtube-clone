<script lang="ts" setup>
import SearchInput from "./UI/SearchInput.vue";
import SearchButton from "./UI/SearchButton.vue";
import SearchResults from "./UI/SearchResults.vue";

const keywords: string[] = [
  "new york giants",
  "new york alicia keys",
  "new york giants vs washington football",
  "new york",
  "new york song",
  "new york new york frank sinatra",
  "new york jets",
  "new york city",
  "new york giants live",
  "new york state of mind",
  "new york giants vs washington football live",
  "new york giants injury",
  "new york giants live stream",
  "new york accent",
];
</script>

<template>
  <div class="flex w-full mr-2">
    <div class="relative flex w-full">
      <SearchInput />
      <SearchResults :results="keywords" />
    </div>
    <SearchButton />
  </div>
</template>
