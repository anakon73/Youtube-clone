<script setup lang="ts">
import { ref, toRefs } from "vue";
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";

interface Props {
  selectedOptions: any;
}

const props = defineProps<Props>();

const { selectedOptions } = toRefs(props);

const themes = ref<string[]>(["Use device Theme", "Dark theme", "White theme"]);

const selectedOption = (themeId: number) => {
  emits("select-option", { name: "themeId", value: themeId });
};

const emits = defineEmits(["select-menu", "select-option"]);
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
        v-for="(theme, themeId) in themes"
        icon="check"
        :key="themeId"
        :label="theme"
        :active="themeId === selectedOptions.themeId"
        @click="selectedOption(themeId)"
      />
    </ul>
  </section>
</template>
