<script setup lang="ts">
import { computed } from "vue";
import SidebarContent from "./SidebarContent.vue";

const classes = computed(() => {
  return [
    "w-64",
    "max-h-screen",
    "overflow-auto",
    "fixed",
    "top-0",
    "pt-12",
    "bg-white",
    "z-20",
  ];
});
</script>

<template>
  <aside :class="classes">
    <SidebarContent />
  </aside>
</template>
