<script setup lang="ts">
import { ref } from "vue";
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";

const selectedLanguageId = ref<number>(0);
const languages = ref<string[]>(["English", "Russian", "Ukrainian"]);

const emits = defineEmits(["select-menu"]);
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
        :active="languageId === selectedLanguageId"
        @click="selectedLanguageId = languageId"
      />
    </ul>
  </section>
</template>
