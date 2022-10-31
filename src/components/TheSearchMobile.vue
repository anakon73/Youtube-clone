<script setup lang="ts">
import BaseIcon from "./UI/BaseIcon.vue";
import BaseTooltip from "./UI/BaseTooltip.vue";
import TheSearch from "./TheSearch.vue";
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const el = ref();

const emit = defineEmits(["close"]);

onClickOutside(el, () => {
  emit("close");
});
</script>

<template>
  <div ref="el" class="flex absolute z-10 p-2 h-14 w-full">
    <BaseTooltip class="mr-2" text="Back" right>
      <button @click="$emit('close')" class="p-2 focus:outline-none">
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
