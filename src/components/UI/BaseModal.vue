<script setup lang="ts">
import { onClickOutside, onKeyDown } from '@vueuse/core'
import { ref, toRefs } from 'vue'

type Props = {
  withCloseButton?: boolean
}

const props = defineProps<Props>()

const { withCloseButton } = toRefs(props)

const emits = defineEmits(['close'])

const close = () => {
  isOpen.value = false
  setTimeout(() => emits('close'), 100)
}
const Modal = ref()

const isOpen = ref<boolean>(true)
const classes: string[] = [
  'fixed',
  'inset-0',
  'z-30',
  'focus:outline-none',
  'flex',
  'justify-center',
  'items-start',
]

onClickOutside(Modal, () => close())
onKeyDown('Escape', () => close())
</script>

<template>
  <div :class="classes">
    <Transition
      appear
      enter-active-class="ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <BaseModalOverlay v-if="isOpen" />
    </Transition>
    <div v-if="isOpen" ref="Modal" class="relative bg-white w-2/3 m-8">
      <div v-if="withCloseButton" class="p-2 text-right">
        <BaseModalButtonClose @click="close" />
      </div>
      <div class="p-6">
        <slot />
      </div>
    </div>
  </div>
</template>
