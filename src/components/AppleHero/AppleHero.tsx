'use client';

import React from 'react';
import Image from 'next/image';
import styles from './AppleHero.module.css';
import { CoreProduct } from '../../types/products';
import { Logo } from '../Logo/Logo';
import { ProductFeatureCards } from '../ProductFeatureCards/ProductFeatureCards';
import { ChevronRight } from 'lucide-react';

interface AppleHeroProps {
  product: CoreProduct;
  theme?: 'titanium' | 'ultramarine' | 'spaceblack' | 'obsidian';
  onOpenSpecs: (product: CoreProduct) => void;
  onLaunchApp?: (productId: string) => void;
  sectionId: string;
}

export const AppleHero: React.FC<AppleHeroProps> = ({
  product,
  theme = 'titanium',
  onOpenSpecs,
  onLaunchApp,
  sectionId,
}) => {
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
          {product.id === 'chat-app' || product.id === 'music-player' ? (
            /* Official Brand Lockup Banners already include the brand emblem and typographic title */
            <div className={styles.lockupBannerWrap}>
              <Image
                src={
                  product.id === 'chat-app'
                    ? '/nothingchat/lockup-clean.svg'
                    : '/nothingmusic/lockup-clean.svg'
                }
                alt={product.title}
                width={product.id === 'chat-app' ? 340 : 380}
                height={product.id === 'chat-app' ? 78 : 70}
                className={styles.lockupBannerImg}
                priority
              />
            </div>
          ) : (
            <>
              <div className={styles.brandHeroBadge}>
                <Logo size={38} className={styles.heroLogoMark} />
              </div>
              <h2 className={styles.productHeadline}>{product.title}</h2>
            </>
          )}

          <p className={styles.productSubhead}>{product.tagline}</p>

          {/* Apple Action Links */}
          <div className={styles.ctaGroup}>
            <button
              id={`learn-more-${product.slug}`}
              className={styles.applePrimaryBtn}
              onClick={() => onOpenSpecs(product)}
            >
              <span>Explore Architecture & Specs</span>
            </button>

            <button
              id={`compare-${product.slug}`}
              className={styles.appleTextLink}
              onClick={() => {
                const elem = document.getElementById('service-comparison');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Compare {product.title}</span>
              <ChevronRight size={14} className={styles.chevronIcon} />
            </button>
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

        {/* Feature Cards Showcase Stage */}
        <div className={styles.showcaseStage}>
          <ProductFeatureCards product={product} onOpenSpecs={onOpenSpecs} />
        </div>
      </div>
    </section>
  );
};
