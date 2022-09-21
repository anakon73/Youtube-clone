<script setup lang="ts">
import { defineProps, computed, toRefs } from "vue";

interface Props {
  category: string;
  isActive: boolean;
}

const props = defineProps<Props>();

// const props =
//   defineProps<{
//     category: string;
//     isActive: boolean;
//   }>();
const { isActive } = toRefs(props);

const classes = computed(() => {
  const classes = ["px-3", " py-1", "transition", "border", " rounded-full"];
  return isActive.value
    ? [
        ...classes,
        "hover:bg-gray-500",
        " bg-gray-600",
        "border-gray-700",
        "text-white",
      ]
    : [...classes, "border-gray-300", "bg-gray-100", "hover:bg-gray-200"];
});
</script>

<template>
  <a href="#" :class="classes">{{ category }}</a>
</template>
// hover:bg-gray-500 bg-gray-600 border-gray-700 text-white
