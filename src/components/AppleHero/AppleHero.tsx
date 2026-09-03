'use client';

import React from 'react';
import styles from './AppleHero.module.css';
import { CoreProduct } from '../../types/products';
import { InteractiveChatDemo } from '../InteractiveChatDemo/InteractiveChatDemo';
import { InteractiveTransferDemo } from '../InteractiveTransferDemo/InteractiveTransferDemo';
import { InteractiveMusicDemo } from '../InteractiveMusicDemo/InteractiveMusicDemo';
import { InteractiveVideoDemo } from '../InteractiveVideoDemo/InteractiveVideoDemo';
import { ChevronRight, ExternalLink, Cpu } from 'lucide-react';

interface AppleHeroProps {
  product: CoreProduct;
  theme?: 'titanium' | 'ultramarine' | 'spaceblack' | 'obsidian';
  onOpenSpecs: (product: CoreProduct) => void;
  sectionId: string;
}

export const AppleHero: React.FC<AppleHeroProps> = ({
  product,
  theme = 'titanium',
  onOpenSpecs,
  sectionId,
}) => {
  const renderDeviceContent = () => {
    switch (product.id) {
      case 'chat-app':
        return <InteractiveChatDemo />;
      case 'p2p-transfer':
        return <InteractiveTransferDemo />;
      case 'music-player':
        return <InteractiveMusicDemo />;
      case 'video-player':
        return <InteractiveVideoDemo />;
      default:
        return null;
    }
  };

  const getThemeClass = () => {
    switch (theme) {
      case 'ultramarine':
        return styles.themeUltramarine;
      case 'spaceblack':
        return styles.themeSpaceblack;
      case 'obsidian':
        return styles.themeObsidian;
      case 'titanium':
      default:
        return styles.themeTitanium;
    }
  };

  return (
    <section id={sectionId} className={`${styles.heroSection} ${getThemeClass()}`}>
      <div className={styles.heroContent}>
        {/* Apple Centered Text Block */}
        <div className={styles.headerBlock}>
          <span className={styles.eyebrowTag}>{product.category}</span>
          <h2 className={styles.productHeadline}>{product.title}</h2>
          <p className={styles.productSubhead}>{product.tagline}</p>

          {/* Apple Action Links */}
          <div className={styles.ctaGroup}>
            <button
              id={`learn-more-${product.slug}`}
              className={styles.applePrimaryBtn}
              onClick={() => onOpenSpecs(product)}
            >
              <span>Learn more</span>
            </button>

            <a
              href={product.subdomainTarget}
              target="_blank"
              rel="noreferrer"
              className={styles.appleTextLink}
            >
              <span>Open {product.subdomain}</span>
              <ChevronRight size={14} className={styles.chevronIcon} />
            </a>
          </div>

          {/* Sub-feature chips */}
          <div className={styles.featureChipsList}>
            {product.features.map((feat) => (
              <span key={feat.id} className={styles.featureChip}>
                {feat.title}
              </span>
            ))}
          </div>
        </div>

        {/* Apple Device Frame Stage */}
        <div className={styles.deviceStage}>
          <div className={styles.deviceMockupFrame}>
            <div className={styles.deviceScreen}>
              {renderDeviceContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
