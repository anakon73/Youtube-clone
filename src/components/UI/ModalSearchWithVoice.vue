<script setup lang="ts">
import { computed, ref } from 'vue'

const isListening = ref<boolean>(false)

const text = computed(() => {
  return isListening.value ? 'Listening...' : 'Mictophone off. Try again.'
})

const buttonClasses = computed(() => {
  return [
    isListening.value ? 'bg-red-600' : 'bg-gray-300',
    isListening.value ? 'text-white' : 'text-black',
    'w-16',
    'h-16',
    'mx-auto',
    'rounded-full',
    'flex',
    'justify-center',
    'items-center',
    'relative',
    'focus:outline-none',
  ]
})
const buttonHintClasses = computed(() => {
  return [
    isListening.value ? 'invisible' : 'visible',
    'text-center',
    'text-sm',
    'text-gray-500',
    'mt-4',
  ]
})
</script>

<template>
  <BaseModal>
    <div class="text-2xl mb-52">{{ text }}</div>
    <div class="flex justify-center items-center">
      <span
        v-show="isListening"
        class="animate-ping absolute w-14 h-14 rounded-full border border-gray-300"
      />
      <button :class="buttonClasses" @click="isListening = !isListening">
        <BaseIcon name="microphone" />
      </button>
    </div>
    <div :class="buttonHintClasses">Tap the mictophone to try again</div>
  </BaseModal>
</template>
