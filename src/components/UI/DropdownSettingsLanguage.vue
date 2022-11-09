<script setup lang="ts">
import { ref, toRefs } from "vue";
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";

interface Props {
  selectedOptions: any;
}

const props = defineProps<Props>();

const { selectedOptions } = toRefs(props);

const languages = ref<string[]>(["English", "Russian", "Ukrainian"]);

const selectedOption = (languageId: number) => {
  emits("select-option", { name: "languageId", value: languageId });
};

const emits = defineEmits(["select-menu", "select-option"]);
</script>

<template>
  <DropdownSettingsHeader
    @back="$emit('select-menu', 'main')"
    title="Choose your language"
  />
  <section class="border-b py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem
        v-for="(language, languageId) in languages"
        icon="check"
        :key="languageId"
        :label="language"
        :active="languageId === selectedOptions.languageId"
        @click="selectedOption(languageId)"
      />
    </ul>
  </section>
</template>
