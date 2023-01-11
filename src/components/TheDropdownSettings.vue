<script setup lang="ts">
import { onClickOutside, whenever } from '@vueuse/core'
import { ref, nextTick, computed, type Component } from 'vue'
import BaseIcon from './UI/BaseIcon.vue'
import BaseTooltip from './UI/BaseTooltip.vue'
import TheDropDownSettingsMain from './TheDropDownSettingsMain.vue'
import DropdownSettingsAppearance from './UI/DropdownSettingsAppearance.vue'
import DropdownSettingsLanguage from './UI/DropdownSettingsLanguage.vue'
import DropdownSettingsLocation from './UI/DropdownSettingsLocation.vue'
import DropdownSettingsRestrictedMode from './UI/DropdownSettingsRestrictedMode.vue'

const menuComponentNames = {
  main: TheDropDownSettingsMain,
  appearance: DropdownSettingsAppearance,
  language: DropdownSettingsLanguage,
  location: DropdownSettingsLocation,
  restricted_mode: DropdownSettingsRestrictedMode,
}

type IMenu = keyof typeof menuComponentNames

const isOpen = ref<boolean>(false)
const selectedMenu = ref<IMenu>('main')
const el = ref()
const dropDown = ref()
const dropdownClasses = ref<string[]>([
  'z-10',
  'absolute',
  'top-9',
  '-right-full',
  'sm:right-0',
  'bg-white',
  'w-72',
  'border',
  'border-t-0',
  'focus:outline-none',
])

const selectedOptions = ref({
  theme: {
    id: 0,
    text: 'Device theme',
  },
  language: {
    id: 0,
    text: 'English',
  },
  location: {
    id: 0,
    text: 'United States',
  },
  restrictedMode: {
    enabled: false,
    text: 'Off',
  },
})

const menu = computed((): Component => {
  return menuComponentNames[selectedMenu.value]
})

const toggle = () => {
  isOpen.value ? close() : open()
}

const open = () => {
  isOpen.value = true
}

const close = () => {
  isOpen.value = false
  setTimeout(() => {
    selectedMenu.value = 'main'
  }, 100)
}

onClickOutside(el, close)

const showSelectedMenu = (selectMenu: IMenu) => {
  selectedMenu.value = selectMenu
  dropDown.value.focus()
}

const selectedOption = (option: {
  name: keyof typeof selectedOptions.value
  value: number | boolean
}): void => {
  selectedOptions.value[option.name] =
    option.value as typeof selectedOption[keyof typeof selectedOption]
}

whenever(isOpen, () => {
  nextTick(() => {
    dropDown.value.focus()
  })
})
</script>

<template>
  <div ref="el" class="relative">
    <BaseTooltip text="Settings">
      <button @click="toggle" class="relative p-2 focus:outline-none">
        <BaseIcon name="dotsVertical" class="h-5 w-5" />
      </button>
    </BaseTooltip>
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
        @keydown.esc="close"
        v-show="isOpen"
        :class="dropdownClasses"
      >
        <component
          :is="menu"
          :selectedOptions="selectedOptions"
          @select-option="selectedOption"
          @select-menu="showSelectedMenu"
        />
      </div>
    </Transition>
  </div>
</template>
