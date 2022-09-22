<script setup lang="ts">
import { defineProps } from "vue";
import VideoItemInfo from "./UI/VideoItemInfo.vue";
import VideoItemThumbnail from "./UI/VideoItemThumbnail.vue";

interface Props {
  index: number;
}

const props = defineProps<Props>();
const { index } = props;
</script>

<template>
  <a href="#" class="mb-7 group">
    <VideoItemThumbnail :index="index" />
    <VideoItemInfo :index="index" />
  </a>
</template>
