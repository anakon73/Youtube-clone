<script lang="ts" setup>
import { toRefs, watch, ref, nextTick } from "vue";
import SidebarContent from "./SidebarContent.vue";
import LogoMain from "./UI/LogoMain.vue";
import BaseIcon from "./UI/BaseIcon.vue";
import TheSidebarMobileOverlay from "./TheSidebarMobileOverlay.vue";

const mobileSidebar = ref();

interface Props {
  isOpen: boolean;
}

const props = defineProps<Props>();
const { isOpen } = toRefs(props);

const emit =
  defineEmits<{
    (e: "close", type: boolean): void;
  }>();

watch(isOpen, () => {
  nextTick(() => isOpen.value && mobileSidebar.value.focus());
});
</script>

<template>
  <transition
    enter-active-class="transition-opacity ease-linear duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity ease-linear duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <TheSidebarMobileOverlay @click="$emit('close')" v-show="isOpen" />
  </transition>
  <transition
    enter-active-class="transition ease-in-out duration-200 transform"
    enter-from-class="-translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition ease-in-out duration-200 transform"
    leave-from-class="translate-x-0"
    leave-to-class="-translate-x-full"
  >
    <aside
      @keydown.esc="$emit('close')"
      ref="mobileSidebar"
      tabindex="-1"
      v-show="isOpen"
      class="w-64 max-h-screen overflow-auto bg-white fixed z-40"
    >
      <section class="flex items-center p-4 border-b sticky top-0 bg-white">
        <button @click="$emit('close')" class="ml-2 mr-6 focus:outline-none">
          <BaseIcon name="menu" />
        </button>
        <LogoMain />
      </section>
      <SidebarContent />
    </aside>
  </transition>
</template>
