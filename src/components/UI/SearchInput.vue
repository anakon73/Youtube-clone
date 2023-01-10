<script setup lang="ts">
import {
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  toRefs,
  watch,
} from 'vue'

type Props = {
  query: string
  hasResults: boolean
  // queryModifiers: {
  //   'no-extra-spaces'?: boolean
  // }
}

const props = defineProps<Props>()
const isActive = ref<boolean>(false)

const { query, hasResults } = toRefs(props)

const emits = defineEmits(['update:query', 'change-state', 'enter'])

const input = ref()
const classes = <string[]>[
  'w-full',
  'h-full',
  'px-3',
  'shadow-inner',
  'rounded-bl-sm',
  'rounded-tl-sm',
  'border',
  'border-gray-300',
  'focus:border-blue-700',
  'focus:outline-none',
]

const updateValue = (event: Event) => {
  if (event.target instanceof HTMLInputElement) {
    let {
      target: { value },
    } = event
    // if (queryModifiers.value['no-extra-spaces']) {
    //   value = value.replace(/\s+/g, ' ').trim()
    // }
    emits('update:query', value)
    setState(true)
  }
}

const setState = (state: boolean) => {
  isActive.value = state
  emits('change-state', state)
}

const handleEsc = () => {
  removeSelection()
  if (isActive.value && hasResults.value) {
    setState(false)
  } else {
    input.value.blur()
  }
}

const removeSelection = () => {
  const end = input.value.length

  input.value.setSelectionRange(end, end)
}

const clear = () => {
  input.value.focus()
  emits('update:query', '')
}

const handleEnter = () => {
  setState(false)

  input.value.blur()

  emits('enter')
}

const onKeyDown = (event: Event) => {
  if (event instanceof KeyboardEvent) {
    const isInputFocused = input.value === document.activeElement

    if (event.code === 'Slash' && !isInputFocused) {
      event.preventDefault()
      input.value.focus()
    }
  }
}

const onArrow = () => {
  if (event instanceof KeyboardEvent) {
    const isInputFocused = input.value === document.activeElement

    if (event.keyCode === 38 || event.keyCode === 40) {
      event.preventDefault()
    }
  }
}

const isMobileSearchActive: any = inject('isMobileSearchActive')

watch(isMobileSearchActive, () => nextTick(() => input.value.focus()))

onMounted(() => {
  if (innerWidth < 640) {
    input.value.focus()
  }
  document.addEventListener('keydown', onKeyDown)
  document.addEventListener('keydown', onArrow)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeyDown)
  document.removeEventListener('keydown', onArrow)
})
</script>

<template>
  <div class="w-full relative">
    <input
      ref="input"
      type="text"
      placeholder="Search"
      :class="classes"
      :value="query"
      @input="updateValue"
      @focus="setState(true)"
      @click.stop="setState(true)"
      @keyup.esc="handleEsc"
      @keydown.enter="handleEnter"
    />
    <button
      v-show="query"
      @click="clear"
      class="absolute top-0 right-0 h-full px-3 focus:outline-none"
    >
      <BaseIcon name="x" class="w-5 h-5" />
    </button>
  </div>
</template>
