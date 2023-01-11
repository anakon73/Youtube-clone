<script setup lang="ts">
import { ref, toRefs, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'

type Props = {
  isSmallScreen: boolean
}
const props = defineProps<Props>()

const { isSmallScreen } = toRefs(props)

const el = ref()

const emits = defineEmits(['close', 'open-voice-modal'])

const classes = computed((): string[] => {
  return isSmallScreen.value
    ? ['absolute', 'w-full', 'p-2', 'z-10', 'flex', 'bg-white']
    : [
        'hidden',
        'sm:flex',
        'items-center',
        'justify-end',
        'p-2.5',
        'pl-8',
        'md:pl-12',
        'md:px-8',
        'flex-1',
        'lg:px-0',
        'lg:w-1/2',
        'max-w-screen-md',
      ]
})

onClickOutside(el, () => {
  emits('close')
})
</script>

<template>
  <div :class="classes">
    <BaseTooltip v-if="isSmallScreen" text="Back" right>
      <button @click="$emit('close')" class="mr-2 p-2 focus:outline-none">
        <BaseIcon name="arrowLeft" class="w-5 h-5" />
      </button>
    </BaseTooltip>
    <TheSearch />
    <BaseTooltip text="Search with your voice" :left="isSmallScreen">
      <button @click="$emit('open-voice-modal')" class="p-2 focus:outline-none">
        <BaseIcon name="microphone" class="w-5 h-5" />
      </button>
    </BaseTooltip>
  </div>
</template>
