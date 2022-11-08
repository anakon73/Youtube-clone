<script setup lang="ts">
import { onClickOutside, whenever } from "@vueuse/core";
import { ref, nextTick } from "vue";
import BaseIcon from "./UI/BaseIcon.vue";
import BaseTooltip from "./UI/BaseTooltip.vue";
import TheDropDownSettingsMain from "./TheDropDownSettingsMain.vue";
import DropdownSettingsAppearance from "./UI/DropdownSettingsAppearance.vue";
import DropdownSettingsLanguage from "./UI/DropdownSettingsLanguage.vue";
import DropdownSettingsLocation from "./UI/DropdownSettingsLocation.vue";
import DropdownSettingsRestrictedMode from "./UI/DropdownSettingsRestrictedMode.vue";

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

const toggle = () => {
  isOpen.value ? close() : open();
};

const open = () => {
  isOpen.value = true;
};

const close = () => {
  isOpen.value = false;
  setTimeout(() => {
    selectedMenu.value = "main";
  }, 100);
};

onClickOutside(el, close);

const showSelectedMenu = (selectMenu: string) => {
  selectedMenu.value = selectMenu;
  dropDown.value.focus();
};

whenever(isOpen, () => {
  nextTick(() => {
    dropDown.value.focus();
  });
});
</script>

<template>
  <div ref="el" class="relative">
    <BaseTooltip text="Settings">
      <button @click="toggle" class="relative p-2 focus:outline-none">
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
        @keydown.esc="close"
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
        <DropdownSettingsLanguage
          v-else-if="selectedMenu === 'language'"
          @select-menu="showSelectedMenu"
        />
        <DropdownSettingsLocation
          v-else-if="selectedMenu === 'location'"
          @select-menu="showSelectedMenu"
        />
        <DropdownSettingsRestrictedMode
          v-else-if="selectedMenu === 'restricted_mode'"
          @select-menu="showSelectedMenu"
        />
      </div>
    </Transition>
  </div>
</template>
