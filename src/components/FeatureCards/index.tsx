import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

interface Feature {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  gradient: string;
}

const features: Feature[] = [
  {
    title: 'Steam 创意工坊集成',
    description: '无需离开应用，直接浏览、搜索并订阅《逃离鸭科夫》创意工坊中的 Mod。',
    link: '/docs/installation',
    gradient: 'from-emerald-400 to-cyan-500',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
        <path d="M4 22h16"/>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
      </svg>
    ),
  },
  {
    title: 'Mod 配置文件系统',
    description: '创建无限数量的 Mod 配置文件，在不同 Mod 组合间一键切换。',
    link: '/docs/installation',
    gradient: 'from-violet-500 to-purple-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    title: '一键启动游戏',
    description: '直接从超级鸭鸭启动《逃离鸭科夫》，自动应用你选择的 Mod 配置。',
    link: '/docs/installation',
    gradient: 'from-rose-500 to-pink-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="10 8 16 12 10 16 10 8"/>
      </svg>
    ),
  },
  {
    title: '本地与创意工坊 Mod',
    description: '统一管理 Steam 创意工坊订阅和本地 Mod，界面简洁直观。',
    link: '/docs/installation',
    gradient: 'from-amber-400 to-orange-500',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
  },
  {
    title: '智能导入导出',
    description: '支持 Mod 列表和配置文件的导入导出，轻松分享你的 Mod 配置。',
    link: '/docs/installation',
    gradient: 'from-blue-500 to-indigo-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
    ),
  },
];

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

function FeatureCard({feature, index}: FeatureCardProps): React.JSX.Element {
  return (
    <Link
      to={feature.link}
      className={styles.featureCard}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={styles.cardInner}>
        <div className={clsx(styles.cardGlow, styles[feature.gradient])} />
        <div className={styles.cardBorder} />
        <div className={styles.cardContent}>
          <div className={clsx(styles.cardIcon, styles[feature.gradient])}>
            {feature.icon}
            <div className={styles.iconGlow} />
          </div>
          <Heading as="h3" className={styles.cardTitle}>{feature.title}</Heading>
          <p className={styles.cardDescription}>{feature.description}</p>
          <div className={styles.cardFooter}>
            <span>了解更多</span>
            <svg className={styles.arrowIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function FeatureCards(): React.JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <div className={styles.headerBadge}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <span>强大功能</span>
          </div>
          <Heading as="h2" className={styles.featuresTitle}>
            Mod 管理所需的一切
            <span className={styles.titleGradient}>尽在超级鸭鸭</span>
          </Heading>
          <p className={styles.featuresSubtitle}>
            专为追求完美游戏体验的《逃离鸭科夫》玩家打造的终极 Mod 管理解决方案
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
