<script setup lang="ts">
import { ref, toRefs } from 'vue'

interface Props {
  selectedOptions: any
}

const props = defineProps<Props>()

const { selectedOptions } = toRefs(props)

const locations = ref<string[]>(['United States', 'Russia', 'Ukraine'])

const selectedOption = (location: { id: number; text: string }) => {
  emits('select-option', { name: 'location', value: location })
}

const emits = defineEmits(['select-menu', 'select-option'])
</script>

<template>
  <DropdownSettingsHeader @back="$emit('select-menu', 'main')" title="Choose your location" />
  <section class="border-b py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem v-for="(locationName, locationId) in locations" icon="check" :key="locationId"
        :label="locationName" :active="locationId === selectedOptions.location.id"
        @click="selectedOption({ id: locationId, text: locationName })" />
    </ul>
  </section>
</template>
