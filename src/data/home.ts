import type { Lang } from './screenshots';

type Text = Record<Lang, string>;

export const STORE_URL = 'https://apps.microsoft.com/store/detail/9ndbtdkqbx30';
export const RELEASES_URL = 'https://github.com/ducky7go/SuperDucky/releases';

/** Home-page screenshots. All live in `public/screenshots/` as AVIF; sizes come from the files. */
export interface HomeShot {
  src: string;
  width: number;
  height: number;
  alt: Text;
}

export const heroShot: HomeShot = {
  src: '/screenshots/Screenshot_20260102_211642.avif',
  width: 1600,
  height: 981,
  alt: {
    zh: 'SuperDucky 模组管理页:左侧是分组列表,右侧是带来源标签的模组卡片',
    en: 'SuperDucky mod management: group list on the left, mod cards with source tags on the right',
  },
};

export interface TourStep {
  title: Text;
  body: Text;
  shot: HomeShot;
  /** Docs page, relative to the language root. */
  href: string;
  link: Text;
}

// Every claim below is taken from the docs pages or visible in the screenshot beside it.
export const tour: TourStep[] = [
  {
    title: { zh: '本地、创意工坊、NuGet,同一个列表', en: 'Local, Workshop and NuGet in one list' },
    body: {
      zh: '每张模组卡片都带来源标签。按分组整理、拖拽排序,改乱了可以还原历史,还有健康检查。',
      en: 'Every mod card carries a source tag. Organise by group, drag to reorder, restore an earlier version if you change your mind, and run a health check.',
    },
    shot: {
      src: '/screenshots/Screenshot_20260102_211731.avif',
      width: 1600,
      height: 978,
      alt: {
        zh: '模组管理页里一张模组卡片的右键菜单,可以移动到分组、调整加载顺序、打开文件夹',
        en: 'The right-click menu of a mod card: move to a group, change load order, open the folder',
      },
    },
    href: 'feature-guides/mod-management/',
    link: { zh: '阅读模组管理', en: 'Read Mod Management' },
  },
  {
    title: { zh: '按玩法,一键换模组套件', en: 'One click to switch mod suites' },
    body: {
      zh: '把模组存成不同的模组套件,新建、重命名、切换、删除都在一个对话框里完成。已有的 Better Mod Loader 配置可以直接导入。',
      en: 'Save mods as separate mod suites, then create, rename, switch and delete them from one dialog. An existing Better Mod Loader setup can be imported.',
    },
    shot: {
      src: '/screenshots/Screenshot_20260102_211628.avif',
      width: 1600,
      height: 990,
      alt: {
        zh: '模组套件管理对话框,有新建、重命名、切换到、删除和 BML 导入按钮,下面是套件列表',
        en: 'The mod suite dialog with New, Rename, Switch to, Delete and BML import buttons above the suite list',
      },
    },
    href: 'feature-guides/mod-management/',
    link: { zh: '了解模组套件', en: 'Learn about mod suites' },
  },
  {
    title: { zh: '不离开应用就能找模组', en: 'Find mods without leaving the app' },
    body: {
      zh: '模组市场有 Steam Workshop 和 NuGet Gallery 两个来源。NuGet 默认未启用,读完风险说明再打开。',
      en: 'The mod market has two sources, Steam Workshop and NuGet Gallery. NuGet is off by default; read the risk notice before you turn it on.',
    },
    shot: {
      src: '/screenshots/Screenshot_20260102_211746.avif',
      width: 1600,
      height: 978,
      alt: {
        zh: '模组市场页,可以在 Steam Workshop 和 NuGet Gallery 两个来源之间切换',
        en: 'The mod market page, with a switch between the Steam Workshop and NuGet Gallery sources',
      },
    },
    href: 'feature-guides/enable-nuget/',
    link: { zh: '启用 NuGet 市场', en: 'Enable the NuGet market' },
  },
  {
    title: { zh: '存档图鉴,最多 6 件并排对比', en: 'Save gallery: compare up to 6 items' },
    body: {
      zh: '读取游戏存档,按分类展示收集到的物品,属性逐行对比。需要先安装游戏 Mod SuperDucky.Connector。',
      en: 'Reads your game save and shows collected items by category, with attributes compared row by row. It needs the SuperDucky.Connector game mod first.',
    },
    shot: {
      src: '/screenshots/enable_save_gallery/004_compare_items.avif',
      width: 1600,
      height: 976,
      alt: {
        zh: '存档图鉴的对比面板,6 个物品的伤害、价值、使用时间等属性按行排列',
        en: 'The save gallery comparison panel, with 6 items and their damage, value and use time laid out row by row',
      },
    },
    href: 'feature-guides/enable-save-gallery/',
    link: { zh: '启用存档图鉴', en: 'Enable the save gallery' },
  },
  {
    title: { zh: '配好就直接开玩', en: 'Set up, then just play' },
    body: {
      zh: '在 SuperDucky 里直接启动《逃离鸭科夫》,不用再切到别的窗口。',
      en: 'Launch Escape from Duckov straight from SuperDucky, without switching to another window.',
    },
    shot: {
      src: '/screenshots/Screenshot_20260102_211621.avif',
      width: 1600,
      height: 990,
      alt: {
        zh: 'SuperDucky 欢迎页,快速操作里有"启动游戏"按钮,下方是版本信息',
        en: 'The SuperDucky welcome page, with a Launch game button under Quick actions and version info below',
      },
    },
    href: 'installation/',
    link: { zh: '看安装指南', en: 'See the installation guide' },
  },
];

export interface DocLink {
  href: string;
  title: Text;
  description: Text;
}

export const docLinks: DocLink[] = [
  {
    href: 'installation/',
    title: { zh: '安装指南', en: 'Installation' },
    description: { zh: '下载、安装,以及安装后的校验。', en: 'Download, install and verify.' },
  },
  {
    href: 'feature-guides/mod-management/',
    title: { zh: '模组管理', en: 'Mod Management' },
    description: { zh: '模组套件、分组、排序、筛选、历史还原与健康检查。', en: 'Suites, groups, ordering, filters, history restore and health checks.' },
  },
  {
    href: 'feature-guides/enable-nuget/',
    title: { zh: '启用 NuGet 市场', en: 'Enable the NuGet Market' },
    description: { zh: '浏览并安装 NuGet 上的模组,以及启用前要知道的风险。', en: 'Browse and install NuGet mods, and the risks to know first.' },
  },
  {
    href: 'feature-guides/enable-save-gallery/',
    title: { zh: '启用存档图鉴', en: 'Enable the Save Gallery' },
    description: { zh: '安装 SuperDucky.Connector,查看并对比存档里的物品。', en: 'Install SuperDucky.Connector, then view and compare the items in your save.' },
  },
  {
    href: 'screenshots/',
    title: { zh: '界面截图', en: 'Screenshots' },
    description: { zh: '初始化向导、模组管理、市场、日志与设置。', en: 'Setup wizard, mod management, market, logs and settings.' },
  },
];

export const copy = {
  title: { zh: '超级鸭鸭 SuperDucky', en: 'SuperDucky' } as Text,
  lead: {
    zh: '《逃离鸭科夫》的 Mod 管理器。本地、Steam 创意工坊和 NuGet 模组放进同一个列表,按玩法一键切换模组套件。',
    en: 'The mod manager for Escape from Duckov. Local, Steam Workshop and NuGet mods share one list, and mod suites switch with one click.',
  } as Text,
  store: { zh: '从 Microsoft Store 获取', en: 'Get it from Microsoft Store' } as Text,
  docs: { zh: '阅读文档', en: 'Read the docs' } as Text,
  heroNote: {
    zh: '适用于 Windows 10 / 11(x64)。macOS、Linux 和免安装版请到 GitHub Releases 下载。',
    en: 'For Windows 10 / 11 (x64). macOS, Linux and the portable build are on GitHub Releases.',
  } as Text,
  tourLabel: { zh: '产品巡览', en: 'Product tour' } as Text,
  downloadTitle: { zh: '下载 SuperDucky', en: 'Download SuperDucky' } as Text,
  downloadBody: {
    zh: 'Windows 用户可以直接从 Microsoft Store 安装。其他系统和免安装版在 GitHub Releases。',
    en: 'On Windows, install straight from Microsoft Store. Other systems and the portable build are on GitHub Releases.',
  } as Text,
  releases: { zh: '前往 GitHub Releases', en: 'Go to GitHub Releases' } as Text,
  requirements: [
    { os: 'Windows', req: { zh: 'Windows 10 / 11(x64)', en: 'Windows 10 / 11 (x64)' } as Text },
    { os: 'macOS', req: { zh: 'macOS 10.15 及以上,Intel 或 Apple Silicon', en: 'macOS 10.15 or later, Intel or Apple Silicon' } as Text },
    { os: 'Linux', req: { zh: 'x64', en: 'x64' } as Text },
  ],
  docsTitle: { zh: '从文档开始', en: 'Start with the docs' } as Text,
  docsBody: {
    zh: '装不上、想换套件、想开 NuGet 或存档图鉴,都能在这里找到步骤。',
    en: 'Stuck on install, switching suites, or turning on NuGet or the save gallery? The steps are here.',
  } as Text,
};
