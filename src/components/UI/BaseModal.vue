<script setup lang="ts">
import { onClickOutside, onKeyDown } from '@vueuse/core'
import { ref } from 'vue'
const emits = defineEmits(['close'])

const close = () => emits('close')
const Modal = ref()

onClickOutside(Modal, () => close())
onKeyDown('Escape', () => close())
</script>

<template>
  <div class="fixed inset-0 z-10 bg-black bg-opacity-80">
    <div ref="Modal" class="bg-white max-w-sm mx-auto my-8">
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
