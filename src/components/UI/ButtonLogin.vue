<script lang="ts" setup>
</script>

<template>
  <button
    class="focus:outline-none flex items-center whitespace-nowrap px-2 py-1 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm">
    <BaseIcon name="userCircle" class="mr-2 w-7 h-7" />
    <slot></slot>
  </button>
</template>
