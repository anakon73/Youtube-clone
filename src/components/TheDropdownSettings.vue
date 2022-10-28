<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { ref, watch, nextTick } from "vue";
import BaseIcon from "./UI/BaseIcon.vue";
import BaseTooltip from "./UI/BaseTooltip.vue";
import DropdownSettingsListItem from "./UI/DropdownSettingsListItem.vue";

const isOpen = ref<boolean>(false);
const el = ref();
const dropDown = ref();
const dropdownClasses = ref<string[]>([
  "z-10",
  "absolute",
  "top-9",
  "-right-full",
  "sm:right-0",
  "bg-white",
  "w-72",
  "border",
  "border-t-0",
  "focus:outline-none",
]);

onClickOutside(el, () => {
  isOpen.value = false;
});

watch(isOpen, () => {
  nextTick(() => isOpen.value && dropDown.value.focus());
});

const listItems = ref([
  { label: "Appearance: Light", icon: "sun", withSubMenu: true },
  { label: "Language: English", icon: "translate", withSubMenu: true },
  { label: "Location: Ukraine", icon: "globeAlt", withSubMenu: true },
  { label: "Your data in YouTube", icon: "shieldCheck", withSubMenu: false },
  { label: "Help", icon: "questionMarkCircle", withSubMenu: false },
  { label: "Send feedback", icon: "chatAlt", withSubMenu: false },
  { label: "Appearance: Light", icon: "calculator", withSubMenu: false },
  { label: "Keyboard shortcuts", icon: "sun", withSubMenu: false },
  { label: "Restricted Mode: Off", withSubMenu: true },
]);
</script>

<template>
  <div ref="el" class="relative">
    <BaseTooltip text="Settings">
      <button @click="isOpen = !isOpen" class="relative p-2 focus:outline-none">
        <BaseIcon name="dotsVertical" class="h-5 w-5" />
      </button>
    </BaseTooltip>
    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        ref="dropDown"
        tabindex="-1"
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        :class="dropdownClasses"
      >
        <section class="border-b py-2">
          <ul>
            <DropdownSettingsListItem
              v-for="listItem in listItems.slice(0, 8)"
              :key="listItem.label"
              :label="listItem.label"
              :icon="listItem.icon"
              :with-sub-menu="listItem.withSubMenu"
            />
          </ul>
        </section>
        <section class="py-2">
          <ul>
            <DropdownSettingsListItem
              label="Restricted Mode: Off"
              withSubMenu
            />
          </ul>
        </section>
      </div>
    </Transition>
  </div>
</template>
