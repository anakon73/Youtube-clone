<script setup lang="ts">
import { toRefs, computed } from 'vue'
import { iconType } from '../../icons'

interface Props {
  icon: iconType
  label: string
  isActive?: boolean
}
const props = defineProps<Props>()
const { icon, label, isActive } = toRefs(props)
const classes = computed(() => {
  const classes = [
    'flex',
    'items-center',
    'px-6',
    'py-2',
    'text-sm',
    'hover:bg-gray-100',
    'text-gray-700',
  ]

  return isActive?.value
    ? [
      ...classes,
      'font-medium',
      'text-gray-800',
      'bg-gray-200',
      'hover:bg-gray-300',
    ]
    : [...classes, 'hover:bg-gray-100']
})
const iconClasses = computed(() => {
  return isActive?.value ? 'w-6 h-6 mr-6 text-red-500' : 'w-6 h-6 mr-6'
})
</script>

<template>
  <li>
    <a href="#" :class="classes">
      <BaseIcon :name="icon" :class="iconClasses" />
      <span>{{ label }}</span>
    </a>
  </li>
</template>
