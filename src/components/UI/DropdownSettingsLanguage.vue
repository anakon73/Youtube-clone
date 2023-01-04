<script setup lang="ts">
import { ref, toRefs } from 'vue'

interface Props {
  selectedOptions: any
}

const props = defineProps<Props>()

const { selectedOptions } = toRefs(props)

const languages = ref<string[]>(['English', 'Russian', 'Ukrainian'])

const selectedOption = (language: { id: number; text: string }) => {
  emits('select-option', { name: 'language', value: language })
}

const emits = defineEmits(['select-menu', 'select-option'])
</script>

<template>
  <DropdownSettingsHeader @back="$emit('select-menu', 'main')" title="Choose your language" />
  <section class="border-b py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem v-for="(languageName, languageId) in languages" icon="check" :key="languageId"
        :label="languageName" :active="languageId === selectedOptions.language.id"
        @click="selectedOption({ id: languageId, text: languageName })" />
    </ul>
  </section>
</template>
