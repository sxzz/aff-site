export interface Website {
  title: string
  description: string
  link: string
  detailLink?: string
  logo: string
  rewards?: string | number
  rewardsType?: 'dollar'
  expiry?: string | Date
  tags?: (
    | string
    | { text: string; type: 'info' | 'tip' | 'warning' | 'danger' }
  )[]
  actionText?: string
}

export const cloud: Website[] = [
  {
    title: 'DigitalOcean',
    description: '最低 $4/月，共 8 个地区可选。',
    link: 'https://m.do.co/c/193139155776',
    logo: '/static/digitalocean.svg',
    rewards: 200,
    rewardsType: 'dollar',
    expiry: '60 天有效',
    tags: ['VPS'],
    // detailLink: '/cloud/digitalocean',
  },
]

export const exchange: Website[] = [
  {
    title: '币安',
    description: '交易费率 1‰，已运营近 7 年。',
    link: 'https://accounts.binance.com/register?ref=86238581',
    logo: '/static/binance.svg',
  },
]
