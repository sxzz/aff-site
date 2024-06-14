<script setup lang="ts">
import { VPBadge } from 'vitepress/theme'
import { useClipboard } from '@vueuse/core'
import type { Website } from '../website'

const props = defineProps<{
  website: Website
}>()

const { copy, copied } = useClipboard()
function copyCode() {
  copy(props.website.code || props.website.link)
}
</script>

<template>
  <div flex="~ col" w="[min(28rem,100vw)]" gap4 rounded-xl p5 bg-blue="500/10">
    <div flex="~ col" gap2>
      <div text-green="500/85" flex items-end gap2>
        <div v-if="website.reward" text-nowrap text-6xl font-bold>
          {{ website.reward }}
        </div>

        <div flex="~ col" flex-1 text-sm font-bold>
          <div v-for="kind of website.rewardKinds" :key="kind" text-nowrap>
            {{ kind }}
          </div>
        </div>

        <img
          :src="website.logo"
          :alt="website.title"
          h-12
          w-12
          items-end
          self-start
          object-contain
          op90
        />
      </div>

      <div op85>{{ website.description }}</div>
    </div>

    <div flex justify-between>
      <div>
        <VPBadge
          v-for="tag of website.tags"
          :key="typeof tag === 'string' ? tag : tag.text"
          :text="typeof tag === 'string' ? tag : tag.text"
          :type="typeof tag === 'string' ? undefined : tag.type"
        />
      </div>
      <div font-outfit>{{ website.title }}</div>
    </div>

    <div flex items-center justify-between>
      <div bg-blue="500/30" flex items-center gap1 rounded-lg px2 py1>
        <input
          type="text"
          :value="website.code || website.link"
          readonly
          field-content
          inline
          max-w-70
          w-fit
          text-xs
          font-mono
          op80
          @click="$event.target.select()"
        />
        <button
          :class="
            copied ? 'i-ri:check-line text-green-500' : 'i-ri:file-copy-line'
          "
          h5
          w5
          title="Copy"
          @click="copyCode"
        />
      </div>
      <a
        :href="website.link"
        target="_blank"
        flex
        items-center
        gap="0.5"
        no-underline="!"
        text-pink="!"
      >
        <div i-ri:external-link-line />
        Open
      </a>
    </div>
  </div>
</template>

<style>
.VPButton {
  text-decoration: none !important;
}
</style>
