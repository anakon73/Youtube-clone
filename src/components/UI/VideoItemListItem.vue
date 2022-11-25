<script lang="ts" setup>
import { toRefs } from 'vue'
import { iconType } from '../../icons'
import BaseIcon from './BaseIcon.vue'

interface Props {
  label: string
  icon: iconType
}

const props = defineProps<Props>()

const { icon, label } = toRefs(props)
</script>

<template>
  <li>
    <a href="#" class="flex items-center px-4 py-2 text-sm hover:bg-gray-100">
      <BaseIcon :name="icon" class="w-6 h-6 mr-3 text-gray-400" />
      <span>{{ label }}</span>
    </a>
  </li>
</template>
