<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { ref, watch, nextTick } from "vue";
import BaseIcon from "./UI/BaseIcon.vue";
import BaseTooltip from "./UI/BaseTooltip.vue";
import TheDropDownSettingsMain from "./TheDropDownSettingsMain.vue";
import DropdownSettingsAppearance from "./UI/DropdownSettingsAppearance.vue";

const isOpen = ref<boolean>(false);
const selectedMenu = ref<string>("main");
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

const showSelectedMenu = () => {
  if (selectedMenu.value === "main") {
    selectedMenu.value = "appearance";
  }
};

watch(isOpen, () => {
  nextTick(() => isOpen.value && dropDown.value.focus());
});
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
        <TheDropDownSettingsMain
          v-if="selectedMenu === 'main'"
          @select-menu="showSelectedMenu"
        />
        <DropdownSettingsAppearance
          v-else-if="selectedMenu === 'appearance'"
          @select-menu="showSelectedMenu"
        />
      </div>
    </Transition>
  </div>
</template>
