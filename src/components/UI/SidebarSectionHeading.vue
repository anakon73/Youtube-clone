<script lang="ts" setup>
import { toRefs } from 'vue'

interface Props {
  title: string
}

const props = defineProps<Props>()
const { title } = toRefs(props)
</script>

<template>
  <div class="uppercase text-sm font-semibold px-6 py-2">{{ title }}</div>
</template>
