import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import FeatureCards from '@site/src/components/FeatureCards';
import ScreenshotGallery from '@site/src/components/ScreenshotGallery';
import Heading from '@theme/Heading';
import {useEffect, useState} from 'react';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div
        className={styles.gradientBg}
        style={{
          '--mouse-x': `${mousePosition.x}%`,
          '--mouse-y': `${mousePosition.y}%`,
        } as React.CSSProperties}
      >
        <div className={styles.gradientOrb} style={{
          left: '20%',
          top: '20%',
          animationDelay: '0s',
        }} />
        <div className={styles.gradientOrb} style={{
          right: '15%',
          top: '60%',
          animationDelay: '2s',
        }} />
        <div className={styles.gradientOrb} style={{
          left: '50%',
          bottom: '10%',
          animationDelay: '4s',
        }} />
        <div className={styles.gridOverlay} />
        <div className={styles.scanline} />
      </div>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <span>超级鸭鸭 - 终极 Mod 管理器</span>
          </div>
          <Heading as="h1" className={styles.heroTitle}>
            <span className={styles.titleLine}>让你的《逃离鸭科夫》</span>
            <span className={styles.titleHighlight}>游戏体验焕然一新</span>
          </Heading>
          <p className={styles.heroSubtitle}>
            {siteConfig.tagline}
          </p>
          <p className={styles.heroDescription}>
            全能型 Mod 管理工具，专为《逃离鸭科夫》玩家打造。内置 Steam 创意工坊浏览、本地 Mod 管理、多配置文件切换，
            以及一键启动游戏功能 —— 全部整合在一个精美的界面中。
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(styles.ctaButton, styles.ctaPrimary)}
              to="/docs/installation">
              <span>开始使用</span>
              <svg className={styles.buttonArrow} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link
              className={clsx(styles.ctaButton, styles.ctaSecondary)}
              to="https://github.com/ducky7go/SuperDucky/releases">
              <svg className={styles.downloadIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              <span>立即下载</span>
            </Link>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statValue}>Steam</div>
              <div className={styles.statLabel}>创意工坊集成</div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <div className={styles.statValue}>∞</div>
              <div className={styles.statLabel}>配置文件</div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <div className={styles.statValue}>100%</div>
              <div className={styles.statLabel}>免费开源</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`超级鸭鸭 - 《逃离鸭科夫》Mod 管理器`}
      description="超级鸭鸭 - 专为《逃离鸭科夫》玩家打造的 Mod 管理器，支持 Steam 创意工坊集成、多配置文件管理和一键启动游戏。">
      <HomepageHeader />
      <main>
        <FeatureCards />
        <ScreenshotGallery />
      </main>
    </Layout>
  );
}
