<script setup lang="ts">
import { ref } from "vue";
import TheHeader from "./components/TheHeader.vue";
import TheSidebarSmall from "./components/TheSidebarSmall.vue";
import TheSidebar from "./components/TheSidebar.vue";
import TheSidebarMobile from "./components/TheSidebarMobile.vue";
import TheCategories from "./components/TheCategories.vue";
import TheVideos from "./components/TheVideos.vue";

const isMobileSidebarOpen = ref<boolean>(false);
const openMobileSidebar = () => {
  isMobileSidebarOpen.value = true;
};
const closeMobileSidebar = () => {
  isMobileSidebarOpen.value = false;
};
</script>

<template>
  <TheHeader @open-mobile-sidebar="openMobileSidebar" />
  <TheSidebarSmall />
  <TheSidebar />
  <TheSidebarMobile :isOpen="isMobileSidebarOpen" @close="closeMobileSidebar" />
  <TheCategories />
  <TheVideos />
</template>

<style scoped></style>
