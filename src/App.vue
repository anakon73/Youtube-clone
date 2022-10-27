<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import TheHeader from "./components/TheHeader.vue";
import TheSidebarCompact from "./components/TheSidebarCompact.vue";
import TheSidebar from "./components/TheSidebar.vue";
import TheSidebarMobile from "./components/TheSidebarMobile.vue";
import TheCategories from "./components/TheCategories.vue";
import TheVideos from "./components/TheVideos.vue";

const isCompactSidebarActive = ref<boolean>(false);
const isMobileSidebarOpen = ref<boolean>(false);
const isCompactSidebarOpen = ref<boolean>(false);
const isSidebarOpen = ref<boolean>(false);

const openMobileSidebar = () => {
  isMobileSidebarOpen.value = true;
};
const closeMobileSidebar = () => {
  isMobileSidebarOpen.value = false;
};
const toggleSidebar = () => {
  if (window.innerWidth >= 1280) {
    isCompactSidebarActive.value = !isCompactSidebarActive.value;
    onResize();
  } else {
    openMobileSidebar();
  }
};

const onResize = () => {
  if (window.innerWidth < 768) {
    isCompactSidebarOpen.value = false;
    isSidebarOpen.value = false;
  } else if (window.innerWidth < 1280) {
    isCompactSidebarOpen.value = true;
    isSidebarOpen.value = false;
  } else {
    isCompactSidebarOpen.value = isCompactSidebarActive.value;
    isSidebarOpen.value = !isCompactSidebarActive.value;
    isMobileSidebarOpen.value = false;
  }
};

onMounted(() => {
  onResize();
  window.addEventListener("resize", onResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});
</script>

<template>
  <TheHeader @toggle-sidebar="toggleSidebar" />
  <TheSidebarCompact v-if="isCompactSidebarOpen" />
  <TheSidebar v-if="isSidebarOpen" />
  <TheSidebarMobile :isOpen="isMobileSidebarOpen" @close="closeMobileSidebar" />
  <TheCategories :is-sidebar-open="isSidebarOpen" />
  <TheVideos :is-sidebar-open="isSidebarOpen" />
</template>
