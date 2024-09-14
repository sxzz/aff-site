import {
  LayoutMode,
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesPlugin,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import Theme from 'vitepress/theme'
import { h } from 'vue'
import WebsiteList from '../components/WebsiteList.vue'
import type { EnhanceAppContext } from 'vitepress'

import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import './global.css'
import 'uno.css'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      'nav-screen-content-after': () =>
        h(NolebaseEnhancedReadabilitiesScreenMenu),
    })
  },
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('WebsiteList', WebsiteList)
    app.use(NolebaseEnhancedReadabilitiesPlugin, {
      locales: {
        'zh-CN': {
          title: {
            title: '阅读增强插件',
          },
        },
      },
      layoutSwitch: {
        defaultMode: LayoutMode.FullWidth,
      },
    })
  },
}
