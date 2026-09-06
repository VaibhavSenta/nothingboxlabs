'use client';

import React from 'react';
import Image from 'next/image';
import styles from './LandingHero.module.css';
import { Logo } from '../Logo/Logo';
import {
  MessageSquare,
  Share2,
  Music,
  Film,
  ChevronDown,
  ChevronRight,
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

  const flagshipPills = [
    {
      id: 'hero-chat',
      title: 'NothingChat',
      badge: 'P2P Encrypted',
      icon: (
        <Image
          src="/nothingchat/icon-mark.svg"
          alt="NothingChat"
          width={22}
          height={22}
          style={{ borderRadius: 4, objectFit: 'contain', display: 'inline-block' }}
        />
      ),
    },
    {
      id: 'hero-drop',
      title: 'NothingDrop',
      badge: '50GB AirDrop',
      icon: <Share2 size={20} className={styles.pillIconGreen} />,
    },
    {
      id: 'hero-music',
      title: 'NothingMusic',
      badge: 'OPFS Hi-Res',
      icon: (
        <Image
          src="/nothingmusic/icon-mark.svg"
          alt="NothingMusic"
          width={18}
          height={24}
          style={{ borderRadius: 3, objectFit: 'contain', display: 'inline-block' }}
        />
      ),
    },
    {
      id: 'hero-cinema',
      title: 'NothingCinema',
      badge: '4K Peer Stream',
      icon: <Film size={20} className={styles.pillIconOrange} />,
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
            NothingBox Labs<span className={styles.periodAccent}>.</span>
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

        {/* Interactive Flagship Jump Strip */}
        <div className={styles.flagshipStrip}>
          {flagshipPills.map((pill) => (
            <button
              key={pill.id}
              className={styles.flagshipPillBtn}
              onClick={() => scrollTo(pill.id)}
              aria-label={`Jump to ${pill.title}`}
            >
              <div className={styles.pillIconWrap}>{pill.icon}</div>
              <div className={styles.pillTextWrap}>
                <span className={styles.pillTitle}>{pill.title}</span>
                <span className={styles.pillBadge}>{pill.badge}</span>
              </div>
              <ChevronRight size={14} className={styles.pillChevron} />
            </button>
          ))}
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
            id="hero-cta-compare"
            className={styles.secondaryBtn}
            onClick={() => scrollTo('service-comparison')}
          >
            <span>Compare Services</span>
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
