<script setup lang="ts">
import { ref, toRefs } from "vue";
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";

interface Props {
  selectedOptions: any;
}

const props = defineProps<Props>();

const { selectedOptions } = toRefs(props);

const locations = ref<string[]>(["United States", "Russia", "Ukraine"]);

const selectedOption = (locationId: number) => {
  emits("select-option", { name: "locationId", value: locationId });
};

const emits = defineEmits(["select-menu", "select-option"]);
</script>

<template>
  <DropdownSettingsHeader
    @back="$emit('select-menu', 'main')"
    title="Choose your location"
  />
  <section class="border-b py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem
        v-for="(location, locationId) in locations"
        icon="check"
        :key="locationId"
        :label="location"
        :active="locationId === selectedOptions.locationId"
        @click="selectedOption(locationId)"
      />
    </ul>
  </section>
</template>
