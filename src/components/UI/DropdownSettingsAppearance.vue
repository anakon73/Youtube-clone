<script setup lang="ts">
import { ref, toRefs } from 'vue'
import DropdownSettingsHeader from './DropdownSettingsHeader.vue'
import DropdownSettingsListItem from './DropdownSettingsListItem.vue'

interface Props {
  selectedOptions: any
}

const props = defineProps<Props>()

const { selectedOptions } = toRefs(props)

const themes = ref<string[]>(['Device theme', 'Dark theme', 'Light theme'])

const selectedOption = (theme: { id: number; text: string }) => {
  emits('select-option', { name: 'theme', value: theme })
}

const emits = defineEmits(['select-menu', 'select-option'])
</script>

<template>
  <DropdownSettingsHeader
    @back="$emit('select-menu', 'main')"
    title="Appearance"
  />
  <section class="border-b py-2">
    <div class="text-gray-500 text-xs p-3">
      Setting applies to this browser only
    </div>
    <ul>
      <DropdownSettingsListItem
        v-for="(themeName, themeId) in themes"
        icon="check"
        :key="themeId"
        :label="themeName"
        :active="themeId === selectedOptions.theme.id"
        @click="selectedOption({ id: themeId, text: themeName })"
      />
    </ul>
  </section>
</template>
