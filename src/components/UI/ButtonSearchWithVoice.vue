<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const emits = defineEmits(['change-text'])

const STATUS_IDLE = 'idle'
const STATUS_LISTENING = 'listening'
const STATUS_RECORDING = 'recording'
const STATUS_QUIET = 'quiet'

const recordingTimeout = ref<number>()
const status = ref<string>(STATUS_LISTENING)

const buttonClasses = computed(() => {
  const bgColorClass = isStatus(STATUS_LISTENING, STATUS_RECORDING)
    ? 'bg-red-600'
    : 'bg-gray-300'
  const textColorClass = isStatus(STATUS_LISTENING, STATUS_RECORDING)
    ? 'text-white'
    : 'text-black'
  return [
    bgColorClass,
    textColorClass,
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
    isStatus(STATUS_LISTENING, STATUS_RECORDING) ? 'invisible' : 'visible',
    'text-center',
    'text-sm',
    'text-gray-500',
    'mt-4',
  ]
})
const buttonAnimationClasses = computed(() => {
  return [
    isStatus(STATUS_RECORDING) ? 'bg-gray-300' : 'border border-gray-300',
    'animate-ping',
    'absolute',
    'w-14',
    'h-14',
    'rounded-full',
  ]
})

const toggleRecording = () => {
  clearTimeout(recordingTimeout.value)

  updateStatus()

  handleRecordingTimeout()
}
const handleRecordingTimeout = () => {
  if (isStatus(STATUS_LISTENING, STATUS_RECORDING)) {
    recordingTimeout.value = setTimeout(() => {
      updateStatus(STATUS_QUIET)
    }, 5000)
  }
}
const updateStatus = (handStatus?: string) => {
  if (handStatus) {
    status.value = handStatus
  } else if (isStatus(STATUS_RECORDING)) {
    status.value = STATUS_IDLE
  } else if (isStatus(STATUS_LISTENING)) {
    status.value = STATUS_RECORDING
  } else {
    status.value = STATUS_LISTENING
  }
}
const isStatus = (...statuses: string[]) => {
  return statuses.includes(status.value)
}
watch(
  status,
  () => {
    let text = 'Microphone off. Try again.'
    if (isStatus(STATUS_QUIET)) {
      text = "Didn't hear that. Try again."
    }
    if (isStatus(STATUS_LISTENING, STATUS_RECORDING)) {
      text = 'Listening...'
    }
    emits('change-text', text)
  },
  { immediate: true }
)
onMounted(() => handleRecordingTimeout())
onBeforeUnmount(() => clearTimeout(recordingTimeout.value))
</script>

<template>
  <div class="flex justify-center items-center">
    <span
      v-show="isStatus('listening', 'recording')"
      :class="buttonAnimationClasses"
    />
    <button :class="buttonClasses" @click="toggleRecording">
      <BaseIcon name="microphone" />
    </button>
  </div>
  <div :class="buttonHintClasses">Tap the mictophone to try again</div>
</template>
