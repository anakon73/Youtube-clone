<script setup lang="ts">
import icons from "./icons";
import { defineProps, toRefs } from "vue";

interface Props {
  name: keyof typeof icons;
}

const props = defineProps<Props>();

const { name } = toRefs(props);
const path = icons[props.name];
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
