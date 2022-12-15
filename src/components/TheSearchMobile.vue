<script setup lang="ts">
import BaseIcon from './UI/BaseIcon.vue'
import BaseTooltip from './UI/BaseTooltip.vue'
import TheSearch from './TheSearch.vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

type Props = {
  searchQuery: string
}
const { searchQuery } = defineProps<Props>()

const el = ref()

const emits = defineEmits(['close', 'update-search-query'])

const updateQuery = (event: Event) => {
  emits('update-search-query', event)
}

onClickOutside(el, () => {
  emits('close')
})
</script>

<template>
  <div ref="el" class="flex absolute z-10 p-2 h-14 w-full">
    <BaseTooltip class="mr-2" text="Back" right>
      <button @click="$emit('close')" class="p-2 focus:outline-none">
        <BaseIcon name="arrowLeft" class="w-5 h-5" />
      </button>
    </BaseTooltip>
    <TheSearch :search-query="searchQuery" @update-search-query="updateQuery" />
    <BaseTooltip text="Search with your voice" left>
      <button class="p-2 focus:outline-none">
        <BaseIcon name="microphone" class="w-5 h-5" />
      </button>
    </BaseTooltip>
  </div>
</template>
