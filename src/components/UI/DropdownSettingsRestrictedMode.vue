<script setup lang="ts">
import { toRefs } from 'vue'

interface Props {
  selectedOptions: any
}

const props = defineProps<Props>()

const { selectedOptions } = toRefs(props)

const selectedOption = (event: Event) => {
  if (event?.target instanceof HTMLInputElement) {
    const enabled = event.target.checked
    const value = { enabled, text: enabled ? 'On' : 'Off' }
    emits('select-option', { name: 'restrictedMode', value })
  }
}

const emits = defineEmits(['select-menu', 'select-option'])
</script>

<template>
  <DropdownSettingsHeader @back="$emit('select-menu', 'main')" title="Restricted mode" />
  <section class="px-3 py-4 space-y-4 text-black text-sm">
    <p>
      This helps hide potentially mature videos. No filter is 100% accurate.
    </p>
    <p>This setting only applies to this browser.</p>
    <div class="font-semibold flex items-center">
      <span class="uppercase mr-2">Activate restricted mode</span>
      <input type="checkbox" :checked="selectedOptions.restrictedMode.enabled" @input="selectedOption" />
    </div>
  </section>
</template>
