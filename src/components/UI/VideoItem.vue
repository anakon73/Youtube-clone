<script setup lang="ts">
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
