<script setup lang="ts">
import * as _websites from '../website'
import WebsiteItem from './WebsiteItem.vue'

defineProps<{
  id: string
}>()

const websites: Record<string, _websites.Website[]> = _websites as any
</script>

<template>
  <div flex="~ wrap" justify-between gap12 py2>
    <WebsiteItem
      v-for="website of websites[id]"
      :key="website.title"
      :website="website"
    />
  </div>
</template>
