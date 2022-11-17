<script lang="ts" setup>
import { computed, ref, toRefs } from 'vue'
import CategoryItem from './UI/CategoryItem.vue'

const categories = ref<string[]>([
  'All',
  'Trucks',
  'Tools',
  'Machines',
  'Engines',
  'Show',
  'Ships',
  'Roads',
  'Tanks',
  'Building',
  'Mars',
  'Woodworking',
  'Tractors',
  'Songs',
  'TV Shows',
  'Football',
  'Planes',
  'Live',
  'Streets',
  'Math',
  'Programming',
])

interface Props {
  isSidebarOpen: boolean
}

const props = defineProps<Props>()
const { isSidebarOpen } = toRefs(props)

const classes = computed(() => {
  return isSidebarOpen.value ? 'xl:pl-64' : 'md:pl-24'
})
</script>

<template>
  <section :class="classes">
    <div
      class="bg-white bg-opacity-95 border-t border-b px-4 max-w-screen-2xl m-auto"
    >
      <div class="py-3 flex space-x-3 overflow-auto text-sm whitespace-nowrap">
        <CategoryItem
          v-for="category in categories"
          :key="category"
          :category="category"
          :is-active="category === 'All'"
        />
      </div>
    </div>
  </section>
</template>
