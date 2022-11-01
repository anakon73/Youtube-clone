<script setup lang="ts">
import { ref } from "vue";
import BaseIcon from "./BaseIcon.vue";
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";

const selectedThemeId = ref<number>(0);
const themes = ref<string[]>(["Use device Theme", "Dark theme", "White theme"]);
</script>

<template>
  <section class="flex border-b border-gray-200 text-black">
    <button class="px-3 focus:outline-none">
      <BaseIcon name="arrowLeft" />
    </button>
    <span class="py-3">Appearance</span>
  </section>
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
        :active="themeId === selectedThemeId"
        @click="selectedThemeId = themeId"
      />
    </ul>
  </section>
</template>
