export interface Website {
  logo: string
  title: string
  description: string
  reward?: string
  rewardKinds?: string[]
  tags?: (
    | string
    | { text: string; type: 'info' | 'tip' | 'warning' | 'danger' }
  )[]
  code?: string
  link: string
}

export const cloud: Website[] = [
  {
    logo: '/logo/digitalocean.svg',
    title: 'DigitalOcean',
    description:
      'Sign up and get credit! Pay as you go, starting at $4 a month!',
    reward: '$200',
    rewardKinds: ['credit', '60-day'],
    link: 'https://m.do.co/c/193139155776',
    tags: ['VPS'],
  },
]

export const exchange: Website[] = [
  {
    title: '币安',
    description: '交易费率 1‰，已运营近 7 年。',
    link: 'https://accounts.binance.com/register?ref=86238581',
    logo: '/logo/binance.svg',
    reward: '💚',
  },
]
