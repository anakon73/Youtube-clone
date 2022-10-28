<script setup lang="ts">
import { computed, ref, toRefs } from "vue";

interface Props {
  text: string;
  top?: boolean;
}

const props = defineProps<Props>();

const { text, top } = toRefs(props);

const isShown = ref(false);

const classes = computed(() => {
  return [
    "bg-gray-600",
    "bg-opacity-80",
    "rounded-sm",
    "text-white",
    "text-xs",
    "whitespace-nowrap",
    "p-2",
    "absolute",
    "left-1/2",
    "transform",
    "-translate-x-1/2",
    top?.value ? "bottom-12" : "top-14",
  ];
});
</script>

<template>
  <div class="relative">
    <div
      class="h-full flex items-center"
      @mouseenter="isShown = true"
      @mouseleave="isShown = false"
      @click="isShown = false"
    >
      <slot />
    </div>
    <Transition
      enter-active-class="duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-75"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="isShown" :class="classes">{{ text }}</div>
    </Transition>
  </div>
</template>
