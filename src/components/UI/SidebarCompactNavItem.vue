<script setup lang="ts">
import { computed, toRefs } from "vue";
import BaseIcon from "./BaseIcon.vue";

interface Props {
  label: string;
  icon: string;
  isActive: boolean;
}

const props = defineProps<Props>();

const { label, icon, isActive } = toRefs(props);

const classes = computed(() => {
  const classes = [
    "flex",
    "flex-col",
    "items-center",
    "px-2",
    "py-5",

    "hover:bg-gray-100",
  ];
  return isActive.value ? [...classes, "text-red-500"] : classes;
});
</script>

<template>
  <li>
    <a href="#" :class="classes">
      <BaseIcon :name="icon" class="h-6 w-6 mb-1.5" />
      <span class="text-xs">{{ label }}</span>
    </a>
  </li>
</template>
