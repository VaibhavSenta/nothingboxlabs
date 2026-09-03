'use client';

import React from 'react';
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
      icon: <MessageSquare size={16} className={styles.pillIconBlue} />,
    },
    {
      id: 'hero-drop',
      title: 'NothingDrop',
      badge: '50GB AirDrop',
      icon: <Share2 size={16} className={styles.pillIconGreen} />,
    },
    {
      id: 'hero-music',
      title: 'NothingMusic',
      badge: 'OPFS Hi-Res',
      icon: <Music size={16} className={styles.pillIconPink} />,
    },
    {
      id: 'hero-cinema',
      title: 'NothingCinema',
      badge: '4K Peer Stream',
      icon: <Film size={16} className={styles.pillIconOrange} />,
    },
  ];

  return (
    <section id="landing-hero" className={styles.heroSection}>
      <div className={styles.container}>
        {/* Top Eyebrow Badge */}
        <div className={styles.eyebrowWrapper}>
          <div className={styles.badgePill}>
            <span className={styles.pulseIndicator}></span>
            <span className={styles.badgeText}>The Browser-Native Computing Suite</span>
            <span className={styles.badgeDivider}>•</span>
            <span className={styles.badgeHighlight}>100% Free Forever</span>
          </div>
        </div>

        {/* Central Brand Emblem & Identity */}
        <div className={styles.brandHeroEmblem}>
          <div className={styles.logoFrame}>
            <Logo size={84} className={styles.mainHeroLogo} id="landing-hero-logo" />
          </div>
        </div>

        {/* Apple Style Main Headline */}
        <div className={styles.textBlock}>
          <h1 className={styles.mainHeadline}>
            NothingBox Labs<span className={styles.periodAccent}>.</span>
          </h1>
          <p className={styles.subHeadline}>
            Engineered for raw browser power. Zero cloud servers. Free forever.
          </p>
          <p className={styles.bodyDescription}>
            A breakthrough ecosystem of 20 decentralized web applications running purely inside your hardware.
            From encrypted peer-to-peer communications and 50GB file transfers to high-fidelity audio and 4K cinema streaming.
            No accounts, no telemetry, no subscription fees.
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
            <span>Explore Flagship Apps</span>
            <ArrowRight size={16} />
          </button>
          <button
            id="hero-cta-subdomains"
            className={styles.secondaryBtn}
            onClick={() => scrollTo('subdomain-carousel')}
          >
            <span>View 20 Subdomains</span>
            <ChevronRight size={16} />
          </button>
          <button
            id="hero-cta-free"
            className={styles.tertiaryBtn}
            onClick={() => scrollTo('free-ecosystem')}
          >
            <span>Why It&apos;s 100% Free</span>
            <Sparkles size={14} className={styles.sparkleIcon} />
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
              <span className={styles.metricValue}>20 Subdomains</span>
              <span className={styles.metricLabel}>Dedicated micro-frontends</span>
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
              <span className={styles.metricValue}>$0.00 Forever</span>
              <span className={styles.metricLabel}>No billing, accounts, or trials</span>
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
