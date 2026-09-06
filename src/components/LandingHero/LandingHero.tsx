'use client';

import React from 'react';
import Image from 'next/image';
import styles from './LandingHero.module.css';
import { Logo } from '../Logo/Logo';
import { FlagshipCardDeck } from '../FlagshipCardDeck';
import {
  Share2,
  Film,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  Zap,
  Globe2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface LandingHeroProps {
  onExploreChat?: () => void;
  onExploreSubdomains?: () => void;
  onExploreFree?: () => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({
  onExploreChat,
  onExploreSubdomains,
  onExploreFree,
}) => {
  const scrollTo = (elementId: string) => {
    const elem = document.getElementById(elementId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const flagshipCards = [
    {
      id: 'hero-chat',
      title: 'NothingChat',
      badge: 'P2P Encrypted',
      subdomain: 'chat.nothingbox.io',
      rotation: '-2.5deg',
      variant: 'blue' as const,
      icon: (
        <Image
          src="/nothingchat/icon-mark.svg"
          alt="NothingChat"
          width={36}
          height={36}
          style={{ borderRadius: 8, objectFit: 'contain' }}
        />
      ),
    },
    {
      id: 'hero-drop',
      title: 'NothingDrop',
      badge: '50GB AirDrop',
      subdomain: 'drop.nothingbox.io',
      rotation: '1.5deg',
      variant: 'emerald' as const,
      icon: <Share2 size={28} color="#111827" strokeWidth={2.2} />,
    },
    {
      id: 'hero-music',
      title: 'NothingMusic',
      badge: 'OPFS Hi-Res',
      subdomain: 'music.nothingbox.io',
      rotation: '-1.5deg',
      variant: 'purple' as const,
      icon: (
        <Image
          src="/nothingmusic/icon-mark.svg"
          alt="NothingMusic"
          width={28}
          height={36}
          style={{ borderRadius: 6, objectFit: 'contain' }}
        />
      ),
    },
    {
      id: 'hero-cinema',
      title: 'NothingCinema',
      badge: '4K Peer Stream',
      subdomain: 'cinema.nothingbox.io',
      rotation: '2deg',
      variant: 'amber' as const,
      icon: <Film size={28} color="#111827" strokeWidth={2.2} />,
    },
  ];

  return (
    <section id="landing-hero" className={styles.heroSection}>
      <div className={styles.container}>
        {/* Central Brand Emblem & Identity */}
        <div className={styles.brandHeroEmblem}>
          <div className={styles.logoFrame}>
            <Logo size={96} className={styles.mainHeroLogo} id="landing-hero-logo" />
          </div>
        </div>

        {/* Apple Style Main Headline */}
        <div className={styles.textBlock}>
          <h1 className={styles.mainHeadline}>
            NothingBox Labs 
            <span className={styles.periodAccent}>.</span>
            <sup className={styles.sup}>Comming Soon.</sup>
          </h1>
          <p className={styles.subHeadline}>
            Engineered for raw browser power. Zero cloud servers.
          </p>
          <p className={styles.bodyDescription}>
            A breakthrough ecosystem of decentralized web applications running purely inside your hardware.
            From encrypted peer-to-peer communications and 50GB file transfers to high-fidelity audio and 4K cinema streaming.
            No accounts, no telemetry, zero server dependencies.
          </p>
        </div>

        {/* Interactive Flagship Jump Cards (Desktop Grid + Mobile 3D Swipe Stack) */}
        <div className={styles.flagshipStrip}>
          <FlagshipCardDeck
            cards={flagshipCards}
            onCardClick={scrollTo}
          />
        </div>

        {/* Action Button Group */}
        <div className={styles.ctaGroup}>
          <button
            id="hero-cta-explore"
            className={styles.primaryBtn}
            onClick={() => scrollTo('hero-chat')}
          >
            <span>Explore Flagship Suite</span>
            <ArrowRight size={16} />
          </button>
          <button
            id="hero-cta-security"
            className={styles.secondaryBtn}
            onClick={() => scrollTo('trust-compatibility')}
          >
            <span>Security Architecture</span>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Bottom Key Specifications Ribbon */}
        <div className={styles.metricsRibbon}>
          <div className={styles.metricItem}>
            <div className={styles.metricIconWrap}>
              <Zap size={18} className={styles.iconAmber} />
            </div>
            <div className={styles.metricInfo}>
              <span className={styles.metricValue}>0 Cloud Servers</span>
              <span className={styles.metricLabel}>100% local browser execution</span>
            </div>
          </div>

          <div className={styles.metricDivider}></div>

          <div className={styles.metricItem}>
            <div className={styles.metricIconWrap}>
              <Globe2 size={18} className={styles.iconBlue} />
            </div>
            <div className={styles.metricInfo}>
              <span className={styles.metricValue}>Direct P2P Mesh</span>
              <span className={styles.metricLabel}>Browser-to-browser WebRTC</span>
            </div>
          </div>

          <div className={styles.metricDivider}></div>

          <div className={styles.metricItem}>
            <div className={styles.metricIconWrap}>
              <ShieldCheck size={18} className={styles.iconGreen} />
            </div>
            <div className={styles.metricInfo}>
              <span className={styles.metricValue}>End-to-End Encrypted</span>
              <span className={styles.metricLabel}>P2P WebRTC & WebCrypto</span>
            </div>
          </div>

          <div className={styles.metricDivider}></div>

          <div className={styles.metricItem}>
            <div className={styles.metricIconWrap}>
              <Sparkles size={18} className={styles.iconPurple} />
            </div>
            <div className={styles.metricInfo}>
              <span className={styles.metricValue}>Hardware Native</span>
              <span className={styles.metricLabel}>OPFS & WebCodecs performance</span>
            </div>
          </div>
        </div>

        {/* Scroll To Explore Indicator */}
        <button
          className={styles.scrollDownIndicator}
          onClick={() => scrollTo('hero-chat')}
          aria-label="Scroll to explore NothingBox Labs products"
        >
          <span className={styles.scrollText}>Scroll to explore</span>
          <ChevronDown size={18} className={styles.scrollChevron} />
        </button>
      </div>
    </section>
  );
};
