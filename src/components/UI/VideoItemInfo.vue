<script setup lang="ts">
import { defineProps } from "vue";
import BaseIcon from "./BaseIcon.vue";
interface Props {
  index: number;
}

const props = defineProps<Props>();
const { index } = props;
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
      <div>{{ index }}K views &middot; {{ index }} day ago</div>
    </div>
    <button
      class="
        -mt-1
        ml-auto
        p-1
        opacity-0
        group-hover:opacity-100
        text-gray-500
        hover:text-gray-700
        focus:outline-none
      "
    >
      <BaseIcon name="dotsVertical" />
    </button>
  </div>
</template>
