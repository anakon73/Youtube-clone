<script setup lang="ts">
import { computed, ref } from 'vue'
import { iconType } from '../icons'

type navItem = {
  label: string
  icon: iconType
  isActive: boolean
}

const navItems = ref<navItem[]>([
  { label: 'Home', icon: 'home', isActive: true },
  { label: 'Trending', icon: 'fire', isActive: false },
  { label: 'Subsctiptions', icon: 'collection', isActive: false },
  { label: 'Library', icon: 'duplicate', isActive: false },
  { label: 'History', icon: 'clock', isActive: false },
])

const classes = computed(() => {
  return [
    'min-h-screen',
    'overflow-auto',
    'fixed',
    'top-0',
    'pt-14',
    'bg-white',
    'z-20',
  ]
})
</script>

<template>
  <aside :class="classes">
    <section>
      <ul>
        <SidebarCompactNavItem v-for="navItem in navItems" :key="navItem.label" :label="navItem.label"
          :icon="navItem.icon" :is-active="navItem.isActive" />
      </ul>
    </section>
  </aside>
</template>
