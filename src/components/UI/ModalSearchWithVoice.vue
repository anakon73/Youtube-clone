<script setup lang="ts">
import { ref } from 'vue'

const text = ref<string>('')
</script>

<template>
  <BaseModal with-close-button>
    <div class="text-2xl mb-52">{{ text }}</div>
    <ButtonSearchWithVoice @change-text="text = $event" />
  </BaseModal>
</template>
