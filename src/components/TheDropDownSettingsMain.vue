<script setup lang="ts">
import { ref } from "vue";
import { iconType } from "../icons";
import DropdownSettingsListItem from "./UI/DropdownSettingsListItem.vue";

interface item {
  id: string;
  label: string;
  icon?: iconType | null;
  withSubMenu: boolean;
}

const listItems = ref<item[]>([
  {
    id: "appearance",
    label: "Appearance: Light",
    icon: "sun",
    withSubMenu: true,
  },
  {
    id: "language",
    label: "Language: English",
    icon: "translate",
    withSubMenu: true,
  },
  {
    id: "location",
    label: "Location: Ukraine",
    icon: "globeAlt",
    withSubMenu: true,
  },
  {
    id: "settings",
    label: "Settings",
    icon: "cog",
    withSubMenu: false,
  },
  {
    id: "your_data_in_youtube",
    label: "Your data in YouTube",
    icon: "shieldCheck",
    withSubMenu: false,
  },
  {
    id: "help",
    label: "Help",
    icon: "questionMarkCircle",
    withSubMenu: false,
  },
  {
    id: "send_feedback",
    label: "Send feedback",
    icon: "chatAlt",
    withSubMenu: false,
  },
  {
    id: "keyboard_shortcuts",
    label: "Keyboard shortcuts",
    icon: "calculator",
    withSubMenu: false,
  },
  {
    id: "restricted_mode",
    label: "Restricted Mode: Off",
    icon: null,
    withSubMenu: true,
  },
]);
</script>

<template>
  <section class="border-b py-2">
    <ul>
      <DropdownSettingsListItem
        v-for="listItem in listItems.slice(0, 8)"
        :key="listItem.label"
        :label="listItem.label"
        :icon="listItem.icon"
        :with-sub-menu="listItem.withSubMenu"
        @click.stop="$emit('select-menu', listItem.id)"
      />
    </ul>
  </section>
  <section class="py-2">
    <ul>
      <DropdownSettingsListItem
        label="Restricted Mode: Off"
        :icon="listItems[8].icon"
        withSubMenu
        @click.stop="$emit('select-menu', listItems[8].id)"
      />
    </ul>
  </section>
</template>
