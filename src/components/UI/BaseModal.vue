<script setup lang="ts">
import { onClickOutside, onKeyDown } from '@vueuse/core'
import { ref } from 'vue'
const emits = defineEmits(['close'])

const close = () => {
  isOpen.value = false
  setTimeout(() => emits('close'), 100)
}
const Modal = ref()

const isOpen = ref<boolean>(true)

onClickOutside(Modal, () => close())
onKeyDown('Escape', () => close())
</script>

<template>
  <div class="fixed inset-0 z-10 focus:outline-none">
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
    <div
      v-if="isOpen"
      ref="Modal"
      class="relative bg-white max-w-sm mx-auto my-8"
    >
      <div class="p-2 text-right">
        <BaseModalButtonClose @click="close" />
      </div>
      <div class="p-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis,
        cupiditate non? Veniam fuga provident nulla eaque ea necessitatibus.
        Voluptatum sequi illum ipsam ipsum fugiat beatae nulla repellendus neque
        error repudiandae.
      </div>
    </div>
  </div>
</template>
