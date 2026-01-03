import React, {useState, useRef, useEffect} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import {screenshots, categoryTitles, type ScreenshotCategory} from '@site/src/data/screenshots';
import styles from './styles.module.css';

interface ScreenshotCardProps {
  key?: string;
  screenshot: typeof screenshots[0];
  onClick: () => void;
  index: number;
}

function ScreenshotCard({screenshot, onClick, index}: ScreenshotCardProps): React.JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({x: 0, y: 0});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && imgRef.current) {
            if (imgRef.current.dataset.src) {
              imgRef.current.src = imgRef.current.dataset.src;
              observer.unobserve(imgRef.current);
            }
          }
        });
      },
      {rootMargin: '100px'}
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      ref={cardRef}
      className={clsx(styles.screenshotCard)}
      style={{ animationDelay: `${index * 0.05}s` }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      role="button"
      aria-label={`查看 ${screenshot.title}`}
    >
      <div className={styles.cardGlow} style={{
        background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(0, 255, 159, 0.15), transparent 50%)`,
        opacity: isHovered ? 1 : 0,
      }} />
      <div className={styles.cardInner}>
        <div className={styles.screenshotWrapper}>
          <div className={styles.imageContainer}>
            <img
              ref={imgRef}
              data-src={screenshot.path}
              src=""
              alt={screenshot.title}
              className={clsx(styles.screenshotImage, isLoaded && styles.loaded)}
              onLoad={() => setIsLoaded(true)}
              loading="lazy"
            />
            {!isLoaded && <div className={styles.skeletonLoader} />}
            <div className={clsx(styles.screenshotOverlay, isHovered && styles.overlayVisible)}>
              <div className={styles.zoomIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                  <path d="M11 8v6M8 11h6"/>
                </svg>
              </div>
              <span className={styles.viewButton}>点击放大</span>
            </div>
          </div>
        </div>
        <div className={styles.cardContent}>
          <Heading as="h3" className={styles.cardTitle}>{screenshot.title}</Heading>
          <p className={styles.cardDescription}>{screenshot.description}</p>
        </div>
      </div>
    </div>
  );
}

interface LightboxProps {
  screenshot: typeof screenshots[0] | null;
  onClose: () => void;
}

function Lightbox({screenshot, onClose}: LightboxProps): React.JSX.Element | null {
  if (!screenshot) return null;

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className={styles.lightbox} onClick={onClose}>
      <div className={styles.lightboxBackdrop} />
      <button className={styles.closeButton} onClick={onClose} aria-label="关闭灯箱">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.imageWrapper}>
          <img src={screenshot.path} alt={screenshot.title} />
        </div>
        <div className={styles.lightboxInfo}>
          <Heading as="h2">{screenshot.title}</Heading>
          <p>{screenshot.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function ScreenshotGallery(): React.JSX.Element {
  const [selectedScreenshot, setSelectedScreenshot] = useState<typeof screenshots[0] | null>(null);

  // Group screenshots by category
  const groupedScreenshots = screenshots.reduce<Record<ScreenshotCategory, typeof screenshots>>((acc, screenshot) => {
    if (!acc[screenshot.category]) {
      acc[screenshot.category] = [];
    }
    acc[screenshot.category].push(screenshot);
    return acc;
  }, {} as Record<ScreenshotCategory, typeof screenshots>);

  return (
    <section className={styles.gallery}>
      {selectedScreenshot && (
        <Lightbox
          screenshot={selectedScreenshot}
          onClose={() => setSelectedScreenshot(null)}
        />
      )}
      <div className="container">
        <div className={styles.galleryHeader}>
          <div className={styles.headerBadge}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            <span>互动画廊</span>
          </div>
          <Heading as="h2" className={styles.galleryTitle}>
            超级鸭鸭
            <span className={styles.titleGradient}>界面展示</span>
          </Heading>
          <p className={styles.gallerySubtitle}>
            通过 16 张截图，探索超级鸭鸭的强大功能和精美界面
          </p>
        </div>
        {Object.entries(groupedScreenshots).map(([category, categoryScreenshots]) => (
          <div key={category} className={styles.categorySection}>
            <div className={styles.categoryHeader}>
              <div className={styles.categoryIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <Heading as="h3" className={styles.categoryTitle}>
                {categoryTitles[category as ScreenshotCategory]}
              </Heading>
              <div className={styles.categoryLine} />
            </div>
            <div className={styles.screenshotsGrid}>
              {categoryScreenshots.map((screenshot, idx) => (
                <ScreenshotCard
                  key={screenshot.id}
                  screenshot={screenshot}
                  onClick={() => setSelectedScreenshot(screenshot)}
                  index={idx}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
