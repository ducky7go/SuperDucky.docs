import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import hagilight from '@hagicode/hagilight-starlight';

const SITE = 'https://ducky.hagicode.com';

// Chinese is the source language and lives on `/`; English lives under `/en/`, which also keeps
// the URLs of the old Docusaurus site. The key must stay lowercase: Starlight lowercases content
// folder names, so a key like `en-US` would no longer match its own folder.
const locales = {
  root: { label: '简体中文', lang: 'zh-CN' },
  en: { label: 'English', lang: 'en-US' },
};

// Old Docusaurus URLs (`/docs/...`, `/en/docs/...`) keep working.
const pages = ['installation', 'feature-guides/mod-management', 'feature-guides/enable-nuget', 'feature-guides/enable-save-gallery'];
const redirects = {
  '/docs': '/installation/',
  '/en/docs': '/en/installation/',
  ...Object.fromEntries(pages.flatMap((page) => [
    [`/docs/${page}`, `/${page}/`],
    [`/en/docs/${page}`, `/en/${page}/`],
  ])),
};

export default defineConfig({
  site: SITE,
  redirects,
  integrations: [
    starlight({
      title: { 'zh-CN': '超级鸭鸭 SuperDucky', 'en-US': 'SuperDucky' },
      description: '《逃离鸭科夫》Mod 管理器 SuperDucky 的使用文档。',
      defaultLocale: 'root',
      locales,
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ducky7go/SuperDucky' }],
      editLink: { baseUrl: 'https://github.com/ducky7go/SuperDucky.docs/edit/main/' },
      sidebar: [
        { label: '安装指南', translations: { 'en-US': 'Installation' }, slug: 'installation' },
        {
          label: '功能指南',
          translations: { 'en-US': 'Feature Guides' },
          items: [{ autogenerate: { directory: 'feature-guides' } }],
        },
        { label: '界面截图', translations: { 'en-US': 'Screenshots' }, slug: 'screenshots' },
      ],
      customCss: ['./src/styles/custom.css'],
      plugins: [
        // Hagilight runs with its defaults: analytics, footer, logo, favicon, promotion, RSS.
        // The site is served from a hagicode.com subdomain, so the shared setup applies as is.
        hagilight({
          links: { siteId: 'ducky-docs', siteUrl: `${SITE}/` },
          // The Chinese pages are the source. Both languages were rewritten with AI assistance
          // and the English pages are AI translations, so both notices stay on.
          aiDisclosures: { isAITranslation: true, isAIAuthor: true, sourceLocale: 'root' },
        }),
      ],
    }),
  ],
});
