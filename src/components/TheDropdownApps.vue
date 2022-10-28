<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { ref, watch, nextTick } from "vue";
import BaseIcon from "./UI/BaseIcon.vue";
import DropdownAppsListItem from "./UI/DropdownAppsListItem.vue";

const isOpen = ref<boolean>(false);
const dropDown = ref();
const el = ref();

onClickOutside(el, () => {
  isOpen.value = false;
});
watch(isOpen, () => {
  nextTick(() => isOpen.value && dropDown.value.focus());
});

/* const closeDropDown = (event: Event) => {
  if (!el.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("click", closeDropDown);
});
onUnmounted(() => {
  window.removeEventListener("click", closeDropDown);
}); */
</script>

<template>
  <div ref="el" class="relative">
    <button @click="isOpen = !isOpen" class="relative p-2 focus:outline-none">
      <BaseIcon name="viewGrid" class="h-5 w-5" />
    </button>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-show="isOpen"
        ref="dropDown"
        tabindex="-1"
        @keydown.esc="isOpen = false"
        class="absolute top-9 right-0 w-60 border border-t-0 bg-white sm:left-0 outline-none"
      >
        <section class="border-b py-2">
          <ul>
            <DropdownAppsListItem label="YouTube TV" />
          </ul>
        </section>
        <section class="border-b py-2">
          <ul>
            <DropdownAppsListItem label="YouTube Music" />
            <DropdownAppsListItem label="YouTube Kids" />
          </ul>
        </section>
        <section class="py-2">
          <ul>
            <DropdownAppsListItem label="Creator Academy" />
            <DropdownAppsListItem label="YouTube for Artists" />
          </ul>
        </section>
      </div>
    </transition>
  </div>
</template>
