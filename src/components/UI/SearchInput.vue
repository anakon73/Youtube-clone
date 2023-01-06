<script setup lang="ts">
import { onMounted, ref, toRefs } from 'vue'

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

const emits = defineEmits(['update:query', 'change-state'])

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

onMounted(() => {
  if (innerWidth < 640) {
    input.value.focus()
  }
})
</script>

<template noInheritAttrs>
  <div class="w-full relative">
    <input
      ref="input"
      type="text"
      placeholder="Search"
      :class="classes"
      :value="query"
      @input="updateValue"
      @focus="setState(true)"
      @blur="setState(false)"
      @click="setState(true)"
      @keyup.esc="handleEsc"
    />
    <button
      v-show="query"
      @click="$emit('update:query', '')"
      class="absolute top-0 right-0 h-full px-3 focus:outline-none"
    >
      <BaseIcon name="x" class="w-5 h-5" />
    </button>
  </div>
</template>
