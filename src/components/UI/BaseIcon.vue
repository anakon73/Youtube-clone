<script setup lang="ts">
import { computed, toRefs } from "vue";
import icons, { iconType } from "../../icons";

interface Props {
  name: iconType;
}

const props = defineProps<Props>();

const { name } = toRefs(props);

const path = computed(() => {
  return icons[name.value];
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
