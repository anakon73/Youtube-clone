<script setup lang="ts">
import { onMounted, ref, computed, provide } from 'vue'

const isSmallScreen = ref<boolean>(false)
const isMobileSearchActive = ref<boolean>(false)
const classes = <string[]>[
  'flex',
  'justify-between',
  'w-full',
  'bg-white',
  'bg-opacity-95',
]

const onResize = () => {
  if (window.innerWidth < 640) {
    isSmallScreen.value = true
  } else {
    isMobileSearchActive.value = false
    isSmallScreen.value = false
  }
}

onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
})

const isMobileSearchShown = computed(() => {
  return isSmallScreen.value && isMobileSearchActive.value
})

const closeMobileSearch = () => {
  isMobileSearchActive.value = false
}

const emit = defineEmits<{
  (e: 'toggleSidebar', type: null): void
}>()

const isVoiceModalOpen = ref<boolean>(false)

const isSearchShown = computed(() => {
  return isMobileSearchShown.value || !isSmallScreen.value
})

const opacity = computed((): string => {
  return isMobileSearchShown.value ? 'opacity-0' : 'opacity-100'
})

const leftSideClasses = computed(() => {
  return ['lg:w-1/4', 'flex', opacity]
})
const rightSideClasses = computed(() => {
  return [
    'flex',
    'items-center',
    'justify-end',
    'lg:w-1/4',
    'sm:space-x-3',
    'p-2',
    'sm:px-4',
    opacity,
  ]
})

provide(
  'isMobileSearchActive',
  computed(() => isMobileSearchActive.value)
)
</script>

<template>
  <header :class="classes">
    <div :class="leftSideClasses">
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
    <TheSearchWrapper
      @open-voice-modal="isVoiceModalOpen = true"
      v-show="isSearchShown"
      :is-small-screen="isSmallScreen"
      @close="closeMobileSearch"
    />

    <div :class="rightSideClasses">
      <BaseTooltip text="Search with your voice">
        <button
          class="sm:hidden p-2 focus:outline-none"
          @click="isVoiceModalOpen = true"
        >
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
    <Teleport to="body">
      <ModalSearchWithVoice
        v-if="isVoiceModalOpen"
        @close="isVoiceModalOpen = false"
      />
    </Teleport>
  </header>
</template>
