<script setup lang="ts">
import BaseIcon from './UI/BaseIcon.vue'
import BaseTooltip from './UI/BaseTooltip.vue'
import { ref, toRefs } from 'vue'
import { onClickOutside, } from '@vueuse/core'

type Props = {
  searchQuery?: string
}
const props = defineProps<Props>()

const { searchQuery } = toRefs(props)

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
  <div class="absolute w-full p-2 z-10 flex">
    <BaseTooltip text="Back" right>
      <button @click="$emit('close')" class="mr-2 p-2 focus:outline-none">
        <BaseIcon name="arrowLeft" class="w-5 h-5" />
      </button>
    </BaseTooltip>
    <slot />
    <BaseTooltip text="Search with your voice" left>
      <button class="p-2 focus:outline-none">
        <BaseIcon name="microphone" class="w-5 h-5" />
      </button>
    </BaseTooltip>
  </div>
</template>
