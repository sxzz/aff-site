import Theme from 'vitepress/theme'
import WebsiteList from '../components/WebsiteList.vue'
import type { EnhanceAppContext } from 'vitepress'
import 'uno.css'

export default {
  ...Theme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('WebsiteList', WebsiteList)
  },
}
