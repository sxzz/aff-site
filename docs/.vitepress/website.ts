export interface Website {
  logo: string
  title: string
  description: string
  reward?: string
  rewardKinds?: string[]
  tags?: (
    string | { text: string; type: 'info' | 'tip' | 'warning' | 'danger' }
  )[]
  code?: string
  link: string
}

export const cloud: Website[] = [
  {
    logo: '/logo/digitalocean.svg',
    title: 'DigitalOcean',
    description: '注册并获得积分！按需付费，每月起价 $4！',
    reward: '$200',
    rewardKinds: ['credit', '60-day'],
    link: 'https://m.do.co/c/193139155776',
    tags: ['VPS'],
  },
]

export const exchange: Website[] = [
  {
    logo: '/logo/moomoo.png',
    title: 'Moomoo SG',
    description: '注册并获得奖励！Cash Plus 年收益率 6.8%！',
    reward: 'S$970',
    rewardKinds: ['cash'],
    tags: ['Stockbroker', { type: 'danger', text: '🇸🇬 Singapore' }],
    link: 'https://j.moomoo.com/013T60',
  },
  {
    logo: '/logo/binance.svg',
    title: '币安',
    description: '交易费率 1‰，已运营近 7 年。',
    reward: '💚',
    tags: ['Cryptocurrency'],
    link: 'https://accounts.binance.com/register?ref=86238581',
  },
  {
    logo: '/logo/okx.svg',
    title: '欧易',
    description: '交易费率 1‰，已运营近 7 年。',
    reward: '💚',
    code: '15606070',
    tags: ['Cryptocurrency'],
    link: 'https://www.cnouyi.social/join/15606070',
  },
]
