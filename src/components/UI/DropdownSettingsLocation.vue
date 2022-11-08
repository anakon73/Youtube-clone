<script setup lang="ts">
import { ref } from "vue";
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";

const selectedLocationId = ref<number>(0);
const locations = ref<string[]>(["United States", "Russia", "Ukraine"]);

const emits = defineEmits(["select-menu"]);
</script>

<template>
  <DropdownSettingsHeader
    @back="$emit('select-menu', 'main')"
    title="Choose your locationz"
  />
  <section class="border-b py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem
        v-for="(location, locationId) in locations"
        icon="check"
        :key="locationId"
        :label="location"
        :active="locationId === selectedLocationId"
        @click="selectedLocationId = locationId"
      />
    </ul>
  </section>
</template>
