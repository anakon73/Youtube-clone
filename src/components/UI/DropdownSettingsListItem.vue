<script setup lang="ts">
import { defineProps, toRefs } from "vue";
import BaseIcon from "./BaseIcon.vue";
interface Props {
  icon?: any;
  label: string;
  withSubMenu?: boolean;
}
const props = defineProps<Props>();
const { icon, label, withSubMenu } = toRefs(props);
</script>

<template>
  <li>
    <a
      href="#"
      class="flex items-center pl-5 pl-8 py-2 text-sm hover:bg-gray-200"
    >
      <BaseIcon v-if="icon" :name="icon" class="w-5 h-5 mr-4 text-gray-400" />
      <span>{{ label }}</span>
      <BaseIcon
        v-if="withSubMenu"
        name="chevronRight"
        class="w-5 h-5 text-gray-400 ml-auto"
      />
    </a>
  </li>
</template>
