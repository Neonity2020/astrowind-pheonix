import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '主页',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: '页面',
      links: [
        {
          text: '功能 (锚点链接)',
          href: getPermalink('/#features'),
        },
        {
          text: '服务',
          href: getPermalink('/services'),
        },
        {
          text: '价格',
          href: getPermalink('/pricing'),
        },
        {
          text: '关于我们',
          href: getPermalink('/about'),
        },
        {
          text: '联系我们',
          href: getPermalink('/contact'),
        },
        {
          text: '条款',
          href: getPermalink('/terms'),
        },
        {
          text: '隐私政策',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: '落地页',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: '博客',
      links: [
        {
          text: '博客列表',
          href: getBlogPermalink(),
        },
        {
          text: '文章',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: '文章  (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: '分类页面',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: '标签页面',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: '组件',
      href: '#',
    },
  ],
  actions: [
    { text: '下载', href: 'https://github.com/neonity2020/astrowind-phoenix', target: '_blank' },
  ],
};

export const footerData = {
  links: [
    {
      title: '产品',
      links: [
        { text: '功能', href: '#' },
        { text: '安全', href: '#' },
        { text: '团队', href: '#' },
        { text: '企业', href: '#' },
        { text: '客户故事', href: '#' },
        { text: '价格', href: '#' },
        { text: '资源', href: '#' },
      ],
    },
    {
      title: '平台',
      links: [
        { text: '开发者API', href: '#' },
        { text: '合作伙伴', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind桌面', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: '文档', href: '#' },
        { text: '社区论坛', href: '#' },
        { text: '专业服务', href: '#' },
        { text: '技能', href: '#' },
        { text: '状态', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: '关于', href: '#' },
        { text: '博客', href: '#' },
        { text: '职业', href: '#' },
        { text: '新闻', href: '#' },
        { text: '包容性', href: '#' },
        { text: '社会影响', href: '#' },
        { text: '商店', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    {
      ariaLabel: 'Github',
      icon: 'tabler:brand-github',
      href: 'https://github.com/neonity2020/astrowind-phoenix',
    },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="/about">Neonity</a> · All rights reserved.
  `,
};
