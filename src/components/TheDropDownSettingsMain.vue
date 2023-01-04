<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { iconType } from '../icons'

interface Props {
  selectedOptions: any
}

const props = defineProps<Props>()

const { selectedOptions } = toRefs(props)

interface item {
  id: string
  label: string
  icon?: iconType | null
  withSubMenu: boolean
}

const listItems = ref<item[]>([
  {
    id: 'appearance',
    label: `Appearance: ${selectedOptions.value.theme.text}`,
    icon: 'sun',
    withSubMenu: true,
  },
  {
    id: 'language',
    label: `Language: ${selectedOptions.value.language.text}`,
    icon: 'translate',
    withSubMenu: true,
  },
  {
    id: 'location',
    label: `Location: ${selectedOptions.value.location.text}`,
    icon: 'globeAlt',
    withSubMenu: true,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'cog',
    withSubMenu: false,
  },
  {
    id: 'your_data_in_youtube',
    label: 'Your data in YouTube',
    icon: 'shieldCheck',
    withSubMenu: false,
  },
  {
    id: 'help',
    label: 'Help',
    icon: 'questionMarkCircle',
    withSubMenu: false,
  },
  {
    id: 'send_feedback',
    label: 'Send feedback',
    icon: 'chatAlt',
    withSubMenu: false,
  },
  {
    id: 'keyboard_shortcuts',
    label: 'Keyboard shortcuts',
    icon: 'calculator',
    withSubMenu: false,
  },
  {
    id: 'restricted_mode',
    label: `Restricted Mode: ${selectedOptions.value.restrictedMode.text}`,
    icon: null,
    withSubMenu: true,
  },
])

const emits = defineEmits(['select-menu', 'select-option'])

const onMenuClick = (withSubMenu: boolean, id: string) => {
  if (withSubMenu) {
    emits('select-menu', id)
  }
}
</script>

<template>
  <section class="border-b py-2">
    <ul>
      <DropdownSettingsListItem v-for="listItem in listItems.slice(0, 8)" :key="listItem.label" :label="listItem.label"
        :icon="listItem.icon" :with-sub-menu="listItem.withSubMenu"
        @click.stop="onMenuClick(listItem.withSubMenu, listItem.id)" />
    </ul>
  </section>
  <section class="py-2">
    <ul>
      <DropdownSettingsListItem :label="listItems[8].label" :icon="listItems[8].icon" withSubMenu
        @click.stop="onMenuClick(listItems[8].withSubMenu, listItems[8].id)" />
    </ul>
  </section>
</template>
