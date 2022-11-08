<script setup lang="ts">
import { ref } from "vue";
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";

const emits = defineEmits(["select-menu"]);
</script>

<template>
  <DropdownSettingsHeader
    @back="$emit('select-menu', 'main')"
    title="Restricted mode"
  />
  <section class="px-3 py-4 space-y-4 text-black text-sm">
    <p>
      This helps hide potentially mature videos. No filter is 100% accurate.
    </p>
    <p>This setting only applies to this browser.</p>
    <div class="text-gray-600 font-semibold flex items-center">
      <span class="uppercase mr-2">Activate restricted mode</span>
      <input type="checkbox" />
    </div>
  </section>
</template>
