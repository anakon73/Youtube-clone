<script lang="ts" setup>
import { onClickOutside, onKeyStroke } from '@vueuse/core'
import { computed, nextTick, ref, watch } from 'vue'


const el = ref()
const dropDown = ref()
const positionClasses = ref<any[]>([])
const isOpen = ref<boolean>(false)

onClickOutside(el, () => {
  isOpen.value = false
})

// onMounted(() => {window.addEventListener("scroll", () => (isOpen.value = false));});

watch(isOpen, () => {
  // document.body.classList.toggle("overflow-hidden");

  nextTick(() => isOpen.value && dropDown.value)
})

const toggle = (event: Event) => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    nextTick(() => {
      if (
        event instanceof MouseEvent &&
        event.currentTarget instanceof HTMLElement
      ) {
        positionClasses.value = getPositionClasses(
          event.clientY,
          event.clientX,
          event.currentTarget.offsetHeight
        )
      }
    })
  }
}

const getPositionClasses = (
  clientY: number,
  clientX: number,
  offsetHeight: number
) => {
  return [
    getTopClass(clientY, offsetHeight),
    getBottomClass(clientY, offsetHeight),
    getRightClass(clientY, clientX, offsetHeight),
    getLeftClass(clientY, clientX, offsetHeight),
  ]
}

const getTopClass = (clickCoordY: number, offsetHeight: number) => {
  const dropdownHeight = dropDown.value.offsetHeight
  if (window.innerHeight - clickCoordY < dropdownHeight) {
    return '-top-14'
  }
  if (window.innerHeight - clickCoordY < dropdownHeight + offsetHeight) {
    return 'top-0'
  }

  return 'top-8'
}

const getBottomClass = (clickCoordY: number, offsetHeight: number) => {
  if (window.innerHeight - clickCoordY < offsetHeight) {
    return 'bottom-9'
  }
  return 'buttom-auto'
}

const getRightClass = (
  clientY: number,
  clientX: number,
  offsetHeight: number
) => {
  const dropdownWidth = dropDown.value.offsetWidth
  const dropdownHeight = dropDown.value.offsetHeight
  if (window.innerWidth - clientX > dropdownWidth) {
    return 'right-auto'
  }
  if (window.innerHeight - clientY > dropdownHeight + offsetHeight) {
    return 'right-0'
  }
  if (window.innerHeight - clientY > dropdownHeight) {
    return 'right-8'
  }
  return 'right-0'
}

const getLeftClass = (
  clientY: number,
  clientX: number,
  offsetHeight: number
) => {
  const dropdownWidth = dropDown.value.offsetWidth
  const dropdownHeight = dropDown.value.offsetHeight

  if (window.innerWidth - clientX < dropdownWidth) {
    return 'left-auto'
  }
  if (window.innerHeight - clientY < dropdownHeight) {
    return 'left-auto'
  }
  if (window.innerHeight - clientY > dropdownHeight + offsetHeight) {
    return 'left-auto'
  }
  return 'left-8'
}

onKeyStroke('Escape', () => {
  isOpen.value = false
})

const buttonClasses = computed(() => {
  return [
    '-mt-1',
    'ml-auto',
    'p-1',
    'text-gray-500',
    'hover:text-gray-700',
    'focus:outline-none',
    'group-hover:opacity-100',
    isOpen.value ? 'opacity-100' : 'opacity-0',
  ]
})
const dropdownClasses = computed(() => {
  return [
    'z-30',
    'absolute',
    'w-48',
    'rounded',
    'shadow',
    'bg-white',
    'outline-none',
    ...positionClasses.value,
  ]
})
</script>

<template>
  <div ref="el" class="relative -mt-1 ml-auto">
    <button @click="toggle" :class="buttonClasses">
      <BaseIcon name="dotsVertical" />
    </button>
    <Transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <div ref="dropDown" tabindex="-1" v-show="isOpen" :class="dropdownClasses">
        <section class="py-2">
          <ul>
            <VideoItemListItem label="add to queue" icon="menuAlt3" />
          </ul>
        </section>
      </div>
    </Transition>
  </div>
</template>
