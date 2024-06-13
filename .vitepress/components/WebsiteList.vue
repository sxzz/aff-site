<script setup lang="ts">
import { formatDistance } from 'date-fns'
import { zhCN } from 'date-fns/locale/zh-CN'
import { VPBadge, VPButton } from 'vitepress/theme'
import * as _websites from '../website'

defineProps<{
  id: string
}>()

const websites: Record<string, _websites.Website[]> = _websites as any

function formatTime(time: string | Date) {
  if (typeof time === 'string') return time
  return formatDistance(time, new Date(), { locale: zhCN })
}
</script>

<template>
  <div flex="~ col wrap" gap8 py2>
    <div v-for="website of websites[id]" :key="website.title" flex gap4 px3>
      <a :href="website.link" target="_blank">
        <img w-10 :src="website.logo" :alt="website.title" />
      </a>

      <div flex="~ col" flex-1 gap1>
        <div flex items-baseline gap2>
          <a w-fit text-lg font-bold :href="website.link" target="_blank">
            {{ website.title }}
          </a>
          <VPBadge
            v-for="tag of website.tags"
            :key="typeof tag === 'string' ? tag : tag.text"
            :text="tag"
          />
        </div>

        <div mb1 op85>{{ website.description }}</div>

        <div flex gap4>
          <VPButton
            :text="website.actionText || '立即注册'"
            :href="website.link"
            target="_blank"
            rel="noopener"
            w-fit
          />
          <VPButton
            v-if="website.detailLink"
            :href="website.detailLink"
            text="了解更多"
            target="_blank"
            rel="noopener"
            w-fit
          />
        </div>
      </div>

      <div flex="~ col" items-start justify-center gap1>
        <div v-if="website.rewards" flex items-center gap1 text-2xl font-bold>
          <div
            v-if="website.rewardsType === 'dollar'"
            i-ri:money-dollar-circle-line
            text-yellow="500/90"
            title="USD"
          />
          <div text-nowrap>{{ website.rewards }}</div>
        </div>

        <div v-if="website.expiry" flex items-center gap1>
          <div i-ri:timer-flash-line text-2xl title="Expiry" />
          <div text-nowrap>{{ formatTime(website.expiry) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.VPButton {
  text-decoration: none !important;
}
</style>
