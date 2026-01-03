export interface Screenshot {
  id: string;
  filename: string;
  path: string;
  title: string;
  category: ScreenshotCategory;
  description: string;
  order: number;
}

export type ScreenshotCategory =
  | 'workshop'
  | 'mods'
  | 'profiles'
  | 'settings'
  | 'launch'
  | 'ui';

export const screenshots: Screenshot[] = [
  {
    id: 'ui-1',
    filename: 'Screenshot_20260102_211525.png',
    path: '/img/screenshots/Screenshot_20260102_211525.png',
    title: '主仪表板',
    category: 'ui',
    description: '精美主页，快速访问所有功能和查看最近活动。',
    order: 1,
  },
  {
    id: 'ui-2',
    filename: 'Screenshot_20260102_211603.png',
    path: '/img/screenshots/Screenshot_20260102_211603.png',
    title: '导航侧边栏',
    category: 'ui',
    description: '直观的侧边栏菜单，轻松在所有功能间导航。',
    order: 2,
  },
  {
    id: 'mods-1',
    filename: 'Screenshot_20260102_211621.png',
    path: '/img/screenshots/Screenshot_20260102_211621.png',
    title: 'Mod 列表视图',
    category: 'mods',
    description: '在整洁有序的列表视图中浏览和管理所有已安装的 Mod。',
    order: 3,
  },
  {
    id: 'mods-2',
    filename: 'Screenshot_20260102_211628.png',
    path: '/img/screenshots/Screenshot_20260102_211628.png',
    title: 'Mod 详情面板',
    category: 'mods',
    description: '查看每个 Mod 的详细信息，包括描述和版本。',
    order: 4,
  },
  {
    id: 'workshop-1',
    filename: 'Screenshot_20260102_211642.png',
    path: '/img/screenshots/Screenshot_20260102_211642.png',
    title: 'Steam 创意工坊浏览',
    category: 'workshop',
    description: '直接在应用内浏览 Steam 创意工坊，内置搜索功能。',
    order: 5,
  },
  {
    id: 'workshop-2',
    filename: 'Screenshot_20260102_211655.png',
    path: '/img/screenshots/Screenshot_20260102_211655.png',
    title: '创意工坊 Mod 详情',
    category: 'workshop',
    description: '订阅前查看创意工坊 Mod 的详细信息。',
    order: 6,
  },
  {
    id: 'profiles-1',
    filename: 'Screenshot_20260102_211713.png',
    path: '/img/screenshots/Screenshot_20260102_211713.png',
    title: 'Mod 配置文件概览',
    category: 'profiles',
    description: '创建和管理多个 Mod 配置文件，适应不同的游戏风格。',
    order: 7,
  },
  {
    id: 'profiles-2',
    filename: 'Screenshot_20260102_211731.png',
    path: '/img/screenshots/Screenshot_20260102_211731.png',
    title: '配置文件切换',
    category: 'profiles',
    description: '只需点击一下即可在不同 Mod 配置文件间快速切换。',
    order: 8,
  },
  {
    id: 'settings-1',
    filename: 'Screenshot_20260102_211746.png',
    path: '/img/screenshots/Screenshot_20260102_211746.png',
    title: '应用设置',
    category: 'settings',
    description: '配置应用偏好设置，自定义你的使用体验。',
    order: 9,
  },
  {
    id: 'settings-2',
    filename: 'Screenshot_20260102_211803.png',
    path: '/img/screenshots/Screenshot_20260102_211803.png',
    title: '游戏路径配置',
    category: 'settings',
    description: '设置游戏安装路径和 Mod 文件夹位置。',
    order: 10,
  },
  {
    id: 'launch-1',
    filename: 'Screenshot_20260102_211818.png',
    path: '/img/screenshots/Screenshot_20260102_211818.png',
    title: '游戏启动集成',
    category: 'launch',
    description: '直接启动游戏，自动应用选定的 Mod 配置。',
    order: 11,
  },
  {
    id: 'launch-2',
    filename: 'Screenshot_20260102_211827.png',
    path: '/img/screenshots/Screenshot_20260102_211827.png',
    title: '快速启动操作',
    category: 'launch',
    description: '快速启动按钮，以特定 Mod 配置启动游戏。',
    order: 12,
  },
  {
    id: 'mods-3',
    filename: 'Screenshot_20260102_211849.png',
    path: '/img/screenshots/Screenshot_20260102_211849.png',
    title: 'Mod 管理工具',
    category: 'mods',
    description: '强大的工具，用于组织和管理你的 Mod 收藏。',
    order: 13,
  },
  {
    id: 'ui-3',
    filename: 'Screenshot_20260102_211902.png',
    path: '/img/screenshots/Screenshot_20260102_211902.png',
    title: '主题定制',
    category: 'ui',
    description: '在明暗主题间选择，获得舒适的浏览体验。',
    order: 14,
  },
  {
    id: 'ui-4',
    filename: 'Screenshot_20260102_211909.png',
    path: '/img/screenshots/Screenshot_20260102_211909.png',
    title: '响应式设计',
    category: 'ui',
    description: '精美界面，在不同屏幕尺寸上都能完美运行。',
    order: 15,
  },
  {
    id: 'ui-5',
    filename: 'Screenshot_20260102_211938.png',
    path: '/img/screenshots/Screenshot_20260102_211938.png',
    title: '现代简洁 UI',
    category: 'ui',
    description: '现代用户界面设计，为最佳用户体验而打造。',
    order: 16,
  },
];

export const categoryTitles: Record<ScreenshotCategory, string> = {
  workshop: 'Steam 创意工坊',
  mods: 'Mod 管理',
  profiles: 'Mod 配置文件',
  settings: '设置与配置',
  launch: '游戏启动',
  ui: '用户界面',
};
