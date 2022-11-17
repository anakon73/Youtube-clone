<script setup lang="ts">
import { onMounted, ref } from "vue";
import BaseIcon from "./BaseIcon.vue";

const el = ref();
const classes = <string[]>[
  "w-full",
  "h-full",
  "px-3",
  "shadow-inner",
  "rounded-bl-sm",
  "rounded-tl-sm",
  "border",
  "border-gray-300",
  "focus:border-blue-700",
  "focus:outline-none",
];

onMounted(() => {
  if (innerWidth < 640) {
    el.value.focus();
  }
});
</script>

<template>
  <div class="w-full relative">
    <input ref="el" type="text" placeholder="Search" :class="classes" />
    <button class="absolute top-0 right-0 h-full px-3 focus:outline-none">
      <BaseIcon name="x" class="w-5 h-5" />
    </button>
  </div>
</template>
