<script setup lang="ts">
import { computed } from "@vue/reactivity";
import icons, { iconType } from "../../icons";

interface Props {
  name: iconType;
}

const props = defineProps<Props>();

const path = computed(() => {
  return icons[props.name];
});
</script>

<template>
  <svg
    :class="$attrs.class || 'w-6 h-6'"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    v-html="path"
  ></svg>
</template>
