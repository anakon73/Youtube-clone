<script setup lang="ts">
import VideoItemInfo from './VideoItemInfo.vue'
import VideoItemThumbnail from './VideoItemThumbnail.vue'

interface Props {
  index: number
}

const props = defineProps<Props>()
const { index } = props
</script>

<template>
  <a class="mb-7 group">
    <VideoItemThumbnail :index="index" />
    <VideoItemInfo :index="index" />
  </a>
</template>
