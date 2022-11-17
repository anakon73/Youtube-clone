<script setup lang="ts">
import { computed, toRefs } from 'vue'
import BaseIcon from './BaseIcon.vue'
import { iconType } from '../../icons'

interface Props {
  active?: boolean
  icon?: iconType | null
  label: string
  withSubMenu?: boolean
}

const props = defineProps<Props>()
const { active, icon, label, withSubMenu } = toRefs(props)

const isIconShown = computed(() => {
  return active?.value || (icon?.value !== 'check' && icon?.value !== null)
})
const iconName = computed(() => {
  return active?.value ? 'check' : icon?.value
})
</script>

<template>
  <li>
    <a href="#" class="flex items-center pl-5 py-2 text-sm hover:bg-gray-200">
      <BaseIcon
        v-if="isIconShown && iconName"
        :name="iconName"
        class="w-5 h-5 mr-3 text-gray-400"
      />
      <span :class="[{ 'ml-8': icon && !isIconShown }, 'truncate', 'flex-1']">{{
        label
      }}</span>
      <BaseIcon
        v-if="withSubMenu"
        name="chevronRight"
        class="w-5 h-5 text-gray-400 ml-auto"
      />
    </a>
  </li>
</template>
