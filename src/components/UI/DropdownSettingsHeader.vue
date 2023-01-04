<script setup lang="ts">
import { toRefs } from 'vue'

interface Props {
  title: string
}

const props = defineProps<Props>()

const { title } = toRefs(props)

const emits = defineEmits(['back'])
</script>

<template>
  <section class="flex border-b border-gray-200 text-black">
    <button @click.stop="$emit('back')" class="px-3 focus:outline-none">
      <BaseIcon name="arrowLeft" />
    </button>
    <span class="py-3">{{ title }}</span>
  </section>
</template>
