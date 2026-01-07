import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    'installation',
    {
      type: 'category',
      label: '功能指南',
      link: {
        type: 'generated-index',
        description: 'SuperDucky 各项功能的启用和使用指南',
      },
      items: [
        'feature-guides/enable-nuget',
        'feature-guides/enable-save-gallery',
      ],
    },
  ],
};

export default sidebars;
