<script setup lang="ts">
import { defineEmits } from "vue";
import TheDropdownApps from "./TheDropdownApps.vue";
import TheDropdownSettings from "./TheDropdownSettings.vue";
import LogoMain from "./UI/LogoMain.vue";
import TheSearch from "./TheSearch.vue";
import ButtonLogin from "./UI/ButtonLogin.vue";
import BaseIcon from "./UI/BaseIcon.vue";

// const emit = defineEmits(["openMobileSidebar"]);
const emit =
  defineEmits<{
    (e: "toggleSidebar", type: null): void;
  }>();
</script>

<template>
  <header class="flex justify-between fixed z-30 w-full">
    <div class="lg:w-1/4 flex">
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
    <div
      class="
        hidden
        sm:flex
        items-center
        justify-end
        p-2.5
        pl-8
        md:pl-12
        md:px-8
        flex-1
        lg:px-0
        lg:w-1/2
        max-w-screen-md
      "
    >
      <TheSearch />
      <button class="ml-4 focus:outline-none">
        <BaseIcon name="microphone" class="w-5 h-5" />
      </button>
    </div>
    <div
      class="flex items-center justify-end lg:w-1/4 sm:space-x-3 p-2 sm:px-4"
    >
      <button class="sm:hidden p-2 focus:outline-none">
        <svg
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <button class="sm:hidden p-2 focus:outline-none"></button>
      <button class="relative group p-2 focus:outline-none">
        <BaseIcon name="viewGrid" class="w-5 h-5" />
        <TheDropdownApps />
      </button>
      <button class="relative group p-2 focus:outline-none">
        <BaseIcon name="dotsVertical" class="w-5 h-5" />
        <TheDropdownSettings />
      </button>
      <ButtonLogin> Sign in </ButtonLogin>
    </div>
  </header>
</template>

<style scoped></style>
