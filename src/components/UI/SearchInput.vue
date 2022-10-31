<script setup lang="ts">
import { onMounted, ref } from "vue";

const el = ref();
const classes = <string[]>[
  "w-full",
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
  <input ref="el" type="text" placeholder="Search" :class="classes" />
</template>
