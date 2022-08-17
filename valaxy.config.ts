import { defineConfig } from 'valaxy'
import type { HairyTheme } from 'valaxy-theme-hairy'

/**
 * User Config
 */
export default defineConfig<HairyTheme>({
  lang: 'zh-CN',
  title: 'Hairy\'s Blog',
  author: {
    avatar: 'https://tuimao233.gitee.io/mao-blog/avatar.png',
    name: '毛先生',
  },
  url: 'https://github.com/TuiMao233',
  description: 'Mao\'s Notes',
  theme: 'hairy',
  markdown: { theme: 'material-ocean' },
  themeConfig: {
    home: {
      images: [],
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
