<script lang="ts" setup>
import { onClickOutside, onKeyStroke } from "@vueuse/core";
import { computed, nextTick, ref, watch } from "vue";
import BaseIcon from "./BaseIcon.vue";
import VideoItemListItem from "./VideoItemListItem.vue";

const el = ref();
const dropDown = ref();
const positionClasses = ref<any[]>([]);
const isOpen = ref<boolean>(false);

onClickOutside(el, () => {
  isOpen.value = false;
});

watch(isOpen, () => {
  nextTick(() => isOpen.value && dropDown.value);
});

const toggle = (event: Event) => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    nextTick(() => {
      positionClasses.value = getPositionClasses(event);
    });
  }
};

const getPositionClasses = (event: {
  clientY: any;
  currentTarget: { offsetHeight: any };
}) => {
  return [getTopClass(event), getRightClass(), getLeftClass()];
};

const getTopClass = (event: {
  clientY: any;
  currentTarget: { offsetHeight: any };
}) => {
  const clickCoordY = event.clientY;
  const buttonHeight = event.currentTarget.offsetHeight;
  const dropdownHeight = dropDown.value.offsetHeight;
  if (window.innerHeight - clickCoordY < dropdownHeight) {
    return "-top-14";
  }
  if (window.innerHeight - clickCoordY < dropdownHeight + buttonHeight) {
    return "top-0";
  }

  return "top-9";
};
const getRightClass = () => {};
const getLeftClass = () => {};

onKeyStroke("Escape", () => {
  isOpen.value = false;
});

const buttonClasses = computed(() => {
  return [
    "-mt-1",
    "ml-auto",
    "p-1",
    "opacity-0",
    "group-hover:opacity-100",
    "text-gray-500",
    "hover:text-gray-700",
    "focus:outline-none",
  ];
});
const dropdownClasses = computed(() => {
  return [
    "absolute",
    "-right-full",
    "w-48",
    "rounded",
    "shadow",
    "bg-white",
    "sm:right-0",
    "outline-none",
    ...positionClasses.value,
  ];
});
</script>

<template>
  <div ref="el" class="relative -mt-1 ml-auto">
    <button @click="toggle" :class="buttonClasses">
      <BaseIcon name="dotsVertical" />
    </button>
    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        ref="dropDown"
        tabindex="-1"
        v-show="isOpen"
        :class="dropdownClasses"
      >
        <section class="py-2">
          <ul>
            <VideoItemListItem label="add to queue" icon="menuAlt3" />
          </ul>
        </section>
      </div>
    </Transition>
  </div>
</template>
