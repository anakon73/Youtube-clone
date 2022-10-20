<script setup lang="ts">
import { computed, toRefs } from "vue";
import VideoItem from "./UI/VideoItem.vue";

interface Props {
  isSidebarOpen: boolean;
}

const props = defineProps<Props>();
const { isSidebarOpen } = toRefs(props);

const classes = computed(() => {
  return [
    isSidebarOpen.value ? "xl:ml-64" : "md:ml-24",
    "pt-32",
    "px-5",
    "pb-5",
  ];
});
</script>

<template>
  <main :class="classes">
    <div
      class="
        grid
        gap-4
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-5
        max-w-screen-2xl
        m-auto
      "
    >
      <video-item v-for="i in 25" :key="i" :index="i" />
    </div>
  </main>
</template>
