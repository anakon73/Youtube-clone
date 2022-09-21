<script lang="ts" setup>
import BaseIcon from "./BaseIcon.vue";
name: "ButtonLogin";
</script>

<template>
  <button
    class="
      focus:outline-none
      flex
      items-center
      whitespace-nowrap
      px-2
      py-1
      text-sm text-blue-700
      uppercase
      border border-blue-700
      rounded-sm
    "
  >
    <BaseIcon name="userCircle" />
    <slot></slot>
  </button>
</template>
