<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { defineProps } from "vue";
import BaseIcon from "./BaseIcon.vue";
import VideoItemInfoDropdown from "./VideoItemInfoDropdown.vue";
interface Props {
  index: number;
}

const props = defineProps<Props>();
const { index } = props;
const summary = computed(() => {
  const days = index === 1 ? "day" : "days";
  return `${index}K views &middot; ${index} ${days} ago`;
});
</script>

<template>
  <div class="flex items-start mt-3">
    <img
      :src="`https://picsum.photos/seed/avatar${index}/68`"
      class="mr-3 rounded-full w-9 h-9"
      alt=""
    />
    <div class="text-sm">
      <span class="font-semibold text-gray-800">Video title {{ index }}</span>
      <div class="mt-1 flex items-center">
        <span>Channel name {{ index }}</span>
        <BaseIcon class="w-3.5 h-3.5 ml-1 text-gray-400" name="checkCircle" />
      </div>
      <div v-html="summary"></div>
    </div>
    <VideoItemInfoDropdown />
  </div>
</template>
