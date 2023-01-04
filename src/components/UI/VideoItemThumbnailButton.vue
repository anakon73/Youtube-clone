<script lang="ts" setup>
import { computed, ref, toRefs } from 'vue'
import { iconType } from '../../icons'

interface Props {
  icon: iconType
  label: string
}

const props = defineProps<Props>()

const { label, icon } = toRefs(props)

const isBadgeShow = ref<boolean>(false)

const toggleBadge = () => {
  isBadgeShow.value = !isBadgeShow.value
}

const classes = computed(() => {
  return [
    'opacity-0',
    'group-hover:opacity-100',
    'bg-opacity-60',
    'absolute',
    'right-0',
    'bg-black',
    'text-white',
    'm-1',
    'p-1',
    isBadgeShow.value ? 'rounded-r-sm' : 'rounded-sm',
  ]
})
const badgeClasses = computed(() => {
  return [
    'absolute',
    'transition-width',
    'bg-black',
    'bg-opacity-60',
    'whitespace-nowrap',
    'top-0',
    'right-full',
    'overflow-hidden',
    'uppercase',
    'text-xs',
    'delay-100',
    'font-semibold',
    'rounded-l-sm',
    isBadgeShow.value ? 'w-28' : 'w-0',
  ]
})
</script>

<template>
  <span :class="classes" @mouseenter="toggleBadge" @mouseleave="toggleBadge">
    <BaseIcon :name="icon" class="w-5 h-5" />
    <span :class="badgeClasses">
      <span class="inline-block my-1.5 mx-3">{{ label }}</span>
    </span>
  </span>
</template>
