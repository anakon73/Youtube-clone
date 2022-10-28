<script setup lang="ts">
import BaseIcon from "./UI/BaseIcon.vue";
import BaseTooltip from "./UI/BaseTooltip.vue";
import TheSearch from "./TheSearch.vue";
</script>

<template>
  <div class="flex fixed z-10 p-3 h-14 bg-white w-full">
    <BaseTooltip text="Back" right>
      <button class="p-2 focus:outline-none">
        <BaseIcon name="arrowLeft" class="w-5 h-5" />
      </button>
    </BaseTooltip>
    <TheSearch />
    <BaseTooltip text="Search with your voice" left>
      <button class="p-2 focus:outline-none">
        <BaseIcon name="microphone" class="w-5 h-5" />
      </button>
    </BaseTooltip>
  </div>
</template>
