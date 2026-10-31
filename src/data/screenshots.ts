import sizes from './screenshot-sizes.json';

export type ScreenshotCategory = 'onboarding' | 'home' | 'mods' | 'market' | 'logs' | 'settings';
export type Lang = 'zh' | 'en';

export interface Screenshot {
  /** Path under `public/screenshots/`, served as AVIF. */
  file: string;
  width: number;
  height: number;
  category: ScreenshotCategory;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
}

export const categoryTitles: Record<ScreenshotCategory, Record<Lang, string>> = {
  onboarding: { zh: '初始化向导', en: 'Setup wizard' },
  home: { zh: '首页', en: 'Home' },
  mods: { zh: '模组管理', en: 'Mod management' },
  market: { zh: '模组市场', en: 'Mod market' },
  logs: { zh: '日志系统', en: 'Log viewer' },
  settings: { zh: '设置', en: 'Settings' },
};

const shot = (
  id: string,
  category: ScreenshotCategory,
  zh: [string, string],
  en: [string, string],
): Screenshot => {
  const file = `Screenshot_20260102_${id}.avif`;
  const [width, height] = (sizes as Record<string, number[]>)[file] ?? [];
  if (!width || !height) throw new Error(`No size recorded for ${file}`);
  return { file, width, height, category,
  title: { zh: zh[0], en: en[0] },
  description: { zh: zh[1], en: en[1] },
  };
};

// Captions describe what each screenshot actually shows.
export const screenshots: Screenshot[] = [
  shot('211525', 'onboarding', ['路径配置', '首次启动时,在向导的第一步确认游戏相关的路径。'], ['Path setup', 'On first launch, the wizard starts by confirming the game-related paths.']),
  shot('211603', 'onboarding', ['向导完成', '向导的最后一步,列出 SuperDucky 提供的功能和快速开始提示。'], ['Wizard finished', 'The last step lists what SuperDucky offers, with quick-start tips.']),
  shot('211621', 'home', ['欢迎页', '快捷操作(如启动游戏)、版本信息和检查更新。'], ['Welcome page', 'Quick actions such as launching the game, plus version info and update checks.']),
  shot('211628', 'mods', ['模组套件管理', '新建、重命名、切换和删除套件,或从 BML 导入。'], ['Mod suite management', 'Create, rename, switch and delete suites, or import from BML.']),
  shot('211642', 'mods', ['模组列表', '左侧是分组,右侧是带来源标签的模组卡片。'], ['Mod list', 'Groups on the left, mod cards with source tags on the right.']),
  shot('211655', 'mods', ['还原历史记录', '选择一个历史版本还原,保存后生效。'], ['Restore history', 'Pick an earlier version to restore, then save to confirm.']),
  shot('211713', 'mods', ['分组内的模组', '查看一个分组里的模组,并直接切换启用开关。'], ['Mods in a group', 'See the mods in one group and toggle them on or off.']),
  shot('211731', 'mods', ['右键菜单', '移动到分组、调整加载顺序、打开文件夹等操作。'], ['Context menu', 'Move to a group, change load order, open the folder and more.']),
  shot('211746', 'market', ['模组市场', 'Steam Workshop 和 NuGet Gallery 两个来源,NuGet 默认未启用。'], ['Mod market', 'Two sources, Steam Workshop and NuGet Gallery. NuGet is off by default.']),
  shot('211803', 'market', ['NuGet 风险确认', '启用 NuGet 市场前需要阅读并确认的风险说明。'], ['NuGet risk notice', 'The notice you must read and confirm before enabling the NuGet market.']),
  shot('211818', 'market', ['NuGet Gallery', '启用后浏览 NuGet 上的模组。'], ['NuGet Gallery', 'Browse mods published on NuGet once it is enabled.']),
  shot('211827', 'market', ['NuGet 模组详情', '查看可用版本,安装或加入黑名单。'], ['NuGet mod details', 'See the available versions, then install or blocklist.']),
  shot('211849', 'market', ['创意工坊模组详情', '描述、预览画廊、依赖关系和订阅。'], ['Workshop mod details', 'Description, preview gallery, dependencies and subscribing.']),
  shot('211902', 'mods', ['已安装模组详情', '显示模组所在路径,并可打开所在文件夹。'], ['Installed mod details', 'Shows where the mod lives and lets you open its folder.']),
  shot('211909', 'logs', ['日志系统', '实时查看游戏运行日志。'], ['Log viewer', 'Watch the game\'s logs in real time.']),
  shot('211938', 'settings', ['通用设置', '显示语言和隐私相关选项。'], ['General settings', 'Display language and privacy options.']),
];
