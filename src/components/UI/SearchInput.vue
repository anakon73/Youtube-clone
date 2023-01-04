<script setup lang="ts">
import { onMounted, ref, toRefs } from 'vue'

interface Props {
  query: string
  // queryModifiers: {
  //   'no-extra-spaces'?: boolean
  // }
}

const props = defineProps<Props>()

const { query } = toRefs(props)

const emits = defineEmits(['update:query'])

const el = ref()
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
  }
}

onMounted(() => {
  if (innerWidth < 640) {
    el.value.focus()
  }
})
</script>

<template>
  <div class="w-full relative">
    <input ref="el" type="text" placeholder="Search" :class="classes" :value="query" @input="updateValue" />
    <button v-show="query" @click="$emit('update:query', '')"
      class="absolute top-0 right-0 h-full px-3 focus:outline-none">
      <BaseIcon name="x" class="w-5 h-5" />
    </button>
  </div>
</template>
