<script setup lang="ts">
import { onMounted, ref } from "vue";
import TheDropdownApps from "./TheDropdownApps.vue";
import TheDropdownSettings from "./TheDropdownSettings.vue";
import LogoMain from "./UI/LogoMain.vue";
import TheSearch from "./TheSearch.vue";
import ButtonLogin from "./UI/ButtonLogin.vue";
import BaseIcon from "./UI/BaseIcon.vue";
import BaseTooltip from "./UI/BaseTooltip.vue";
import TheSearchMobile from "./TheSearchMobile.vue";
import { computed } from "@vue/reactivity";

const isSmallScreen = ref<boolean>(false);
const isMobileSearchActive = ref<boolean>(false);
const classes = <string[]>[
  "flex",
  "justify-between",
  "w-full",
  "bg-white",
  "bg-opacity-95",
];

const onResize = () => {
  if (window.innerWidth < 640) {
    isSmallScreen.value = true;
  } else {
    isMobileSearchActive.value = false;
    isSmallScreen.value = false;
  }
};

onMounted(() => {
  onResize();
  window.addEventListener("resize", onResize);
});

const isMobileSearchShown = computed(() => {
  return isSmallScreen.value && isMobileSearchActive.value;
});

const emit = defineEmits<{
  (e: "toggleSidebar", type: null): void;
}>();
</script>

<template>
  <header :class="classes">
    <div
      :class="[
        'lg:w-1/4',
        'flex',
        isMobileSearchShown ? 'opacity-0' : 'opacity-100',
      ]"
    >
      <div class="flex items-center xl:w-64 xl:bg-white pl-4">
        <button
          @click="$emit('toggleSidebar')"
          class="mr-3 sm:ml-2 sm:mr-6 focus:outline-none"
        >
          <BaseIcon name="menu" />
        </button>
        <LogoMain />
      </div>
    </div>
    <TheSearchMobile
      v-if="isMobileSearchShown"
      @close="isMobileSearchActive = false"
    />
    <div
      v-else
      class="hidden sm:flex items-center justify-end p-2.5 pl-8 md:pl-12 md:px-8 flex-1 lg:px-0 lg:w-1/2 max-w-screen-md"
    >
      <TheSearch />
      <BaseTooltip text="Search with your voice">
        <button class="p-2 focus:outline-none">
          <BaseIcon name="microphone" class="w-5 h-5" />
        </button>
      </BaseTooltip>
    </div>
    <div
      :class="[
        'flex',
        'items-center',
        'justify-end',
        'lg:w-1/4',
        'sm:space-x-3',
        'p-2',
        'sm:px-4',
        isMobileSearchShown ? 'opacity-0' : 'opacity-100',
      ]"
    >
      <BaseTooltip text="Search with your voice">
        <button class="sm:hidden p-2 focus:outline-none">
          <BaseIcon name="microphone" class="w-5 h-5" />
        </button>
      </BaseTooltip>
      <BaseTooltip text="Search">
        <button
          @click.stop="isMobileSearchActive = true"
          class="sm:hidden p-2 focus:outline-none"
        >
          <BaseIcon name="search" class="w-5 h-5" />
        </button>
      </BaseTooltip>
      <button class="sm:hidden p-2 focus:outline-none"></button>
      <TheDropdownApps />
      <TheDropdownSettings />
      <ButtonLogin> Sign in </ButtonLogin>
    </div>
  </header>
</template>

<style scoped></style>
