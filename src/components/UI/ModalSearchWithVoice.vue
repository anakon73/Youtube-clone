<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'

const isListening = ref<boolean>(true)
const isRecording = ref<boolean>(false)
const isQuiet = ref<boolean>(false)
const recordingTimeout = ref<number>()

const text = computed(() => {
  if (isQuiet.value) {
    return "Didn't here that. Try again."
  } else if (isListening.value || isRecording.value) {
    return 'Listening...'
  } else {
    return 'Mictophone off. Try again.'
  }
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
const buttonAnimationClasses = computed(() => {
  return [
    isRecording.value ? 'bg-gray-300' : 'border border-gray-300',
    'animate-ping',
    'absolute',
    'w-14',
    'h-14',
    'rounded-full',
  ]
})

const toggleRecording = () => {
  clearTimeout(recordingTimeout.value)
  isQuiet.value = false

  if (isRecording.value) {
    isListening.value = false
    isRecording.value = false
  } else if (isListening.value) {
    isRecording.value = true
  } else {
    isListening.value = true
  }

  if (isListening.value || isRecording.value) {
    recordingTimeout.value = setTimeout(() => {
      isQuiet.value = true
      isListening.value = false
      isRecording.value = false
    }, 5000)
  }
}

onBeforeUnmount(() => clearTimeout(recordingTimeout.value))
</script>

<template>
  <BaseModal>
    <div class="text-2xl mb-52">{{ text }}</div>
    <div class="flex justify-center items-center">
      <span v-show="isListening" :class="buttonAnimationClasses" />
      <button :class="buttonClasses" @click="toggleRecording">
        <BaseIcon name="microphone" />
      </button>
    </div>
    <div :class="buttonHintClasses">Tap the mictophone to try again</div>
  </BaseModal>
</template>
