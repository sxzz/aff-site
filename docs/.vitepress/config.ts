import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Kevin's AFF Website",
  description: 'AFF Man 的聚合网页，通过 AFF 注册服务获取优惠。',
  themeConfig: {
    footer: {
      message: 'Made with ❤️',
      copyright:
        'MIT License © 2024 <a href="https://github.com/sxzz">三咲智子 Kevin Deng</a>',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sxzz' },
      { icon: 'twitter', link: 'https://twitter.com/zhizijun' },
    ],
    outline: {
      label: '页面导航',
    },
    lastUpdatedText: '最后更新于',
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '选择语言',
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
  },
})
