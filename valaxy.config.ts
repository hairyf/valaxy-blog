import { defineConfig } from 'valaxy'
import type { HairyTheme } from 'valaxy-theme-hairy'

/**
 * User Config
 */
export default defineConfig<HairyTheme>({
  lang: 'zh-CN',
  title: 'Hairy\'s Blog',
  author: {
    avatar: 'https://pic.imgdb.cn/item/62fe02d616f2c2beb14bc2f3.jpg',
    name: '毛先生',
  },
  url: 'https://www.hairy.blog/',
  description: 'Mao\'s Notes',
  theme: 'hairy',
  markdown: { theme: 'material-ocean' },
  themeConfig: {
    mode: 'dark',
    home: {
      images: [
        'https://p0.meituan.net/dpplatform/dc7842e17c7c645635b50b870a6168532017909.jpg',
        'https://p0.meituan.net/dpplatform/820b9e428f971d35a6b9584bc17d1f272615217.jpg',
        'https://p0.meituan.net/dpplatform/0aac44175b3030d8eaeffb0b6fe51b592669123.jpg',
        'https://p0.meituan.net/dpplatform/499580c826ae5915a2862c2e730dfc5d3744677.jpg',
        'https://p0.meituan.net/dpplatform/3cf0d8735b34f87189e5108e462a85702340529.jpg',
        'https://p0.meituan.net/dpplatform/1622f7a60a40e980a6e35c895ce989662276538.jpg',
        'https://kjimg10.360buyimg.com/ott/jfs/t1/190496/8/33263/2119880/63d631beF08e0478e/715df13eb87dcbc8.jpg',
        'https://kjimg10.360buyimg.com/ott/jfs/t1/53889/7/22592/379046/63d63150Fbe0021f2/93eedcd0592ba3a2.jpg',
        'https://kjimg10.360buyimg.com/ott/jfs/t1/130126/4/29287/514354/63d631f3Fa8f1b678/0fdee892fb26a36a.jpg',
      ],
      description: 'good evening, how are you doing?',
    },
    post: {
      layout: 'image:slice:reverse',
      /**
       * posts image 数量需要达到 6 个以上才会生效
       */
      images: [],
    },
    footer: {
      since: 2016,
      beian: {
        enable: false,
        icp: '苏ICP备17038157号',
      },
      powered: true,
    },
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'i-material-symbols-home-work-sharp',
      },
      {
        text: 'About',
        link: '/about',
        icon: 'i-material-symbols-recent-actors-rounded',
      },
      {
        text: 'Posts',
        link: '/archives/',
        icon: 'i-material-symbols-import-contacts-rounded',
      },
      {
        text: 'Links',
        link: '/links/',
        icon: 'i-material-symbols-monitor-heart',
      },
      {
        text: 'Github',
        link: 'https://github.com/TuiMao233/valaxy-theme-hairy',
        icon: 'i-ri-github-fill',
      },
    ],
    meting: {
      auto: 'https://music.163.com/#/playlist?id=2043085869',
      autoplay: true,
      theme: 'var(--hy-c-primary)',
      loop: 'one',
    },
  },
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-material-symbols-rss-feed-rounded',
      color: 'orange',
    },
    {
      name: '951416545',
      link: '--',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/TuiMao233',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=293486586',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/mao-mao-47-99-46',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/1490903',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'E-Mail',
      link: 'mailto:wwu710632@gmail.com',
      icon: 'i-material-symbols-attach-email',
      color: '#8E71C1',
    },
    {
      name: 'Hairy',
      link: 'https://travellings.link',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],
  comment: {
    waline: {
      enable: true,
      serverURL: 'https://valaxy-blog-waline.vercel.app/',
    },
  },
  search: {
    enable: true,
    algolia: {
      enable: true,
      appId: '0B89DLR0Q9',
      apiKey: '756e8e048364fae43536c1d0000734a6',
      indexName: 'hairy.blog',
    },
  },
})
