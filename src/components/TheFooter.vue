<script setup lang="ts">
import { ref } from 'vue'

const links = ref<string[]>([
  'About',
  'Press',
  'Copyright',
  'Contact us',
  'Creators',
  'Advertise',
  'Developers',
  'Terms',
  'Privacy',
  'Policy & Safety',
  'How YouTube works',
  'Test new features',
])
</script>

<template>
  <div>
    <a v-for="link in links.slice(0, 7)" :key="link" href="#" class="mr-2">
      {{ link }}
    </a>
  </div>
  <div class="mt-4">
    <a v-for="link in links.slice(7)" :key="link" href="#" class="mr-2">
      {{ link }}
    </a>
  </div>
  <div class="mt-4 font-normal text-gray-500">&copy; 2022 Google LLC</div>
</template>
