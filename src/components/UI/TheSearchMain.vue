<script setup lang="ts">
import { toRefs, watch } from 'vue';
import BaseIcon from './BaseIcon.vue'
import BaseTooltip from './BaseTooltip.vue'

const emits = defineEmits(['update-search-query'])

const classes: string[] = [
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
</script>

<template>
  <div :class="classes">
    <slot />
    <BaseTooltip text="Search with your voice">
      <button class="p-2 focus:outline-none">
        <BaseIcon name="microphone" class="w-5 h-5" />
      </button>
    </BaseTooltip>
  </div>
</template>
