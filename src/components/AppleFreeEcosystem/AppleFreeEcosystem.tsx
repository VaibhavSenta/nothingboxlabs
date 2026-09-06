'use client';

import React from 'react';
import styles from './AppleFreeEcosystem.module.css';
import { Logo } from '../Logo/Logo';
import {
  Sparkles,
  ShieldCheck,
  Zap,
  Globe2,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  Lock,
  Cpu
} from 'lucide-react';

interface AppleFreeEcosystemProps {
  onOpenSpecsBySlug?: (slug: string) => void;
}

export const AppleFreeEcosystem: React.FC<AppleFreeEcosystemProps> = ({ onOpenSpecsBySlug }) => {
  const scrollTo = (elementId: string) => {
    const elem = document.getElementById(elementId);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const freeHighlights = [
    {
      icon: <Sparkles size={24} className={styles.iconBlue} />,
      title: 'Zero Fees. Free Forever.',
      stat: '$0.00',
      statLabel: 'No subscriptions. No trials.',
      description:
        'Every flagship application and utility is completely free. We do not charge monthly fees, hide features behind paywalls, or meter your bandwidth usage.',
      bulletPoints: [
        'Unlimited end-to-end encrypted messaging',
        'Direct 50GB file transfers via WebRTC',
        'Native OPFS virtual RAM caching',
        'No credit card or billing details required',
      ],
    },
    {
      icon: <ShieldCheck size={24} className={styles.iconGreen} />,
      title: 'No Accounts. No Tracking.',
      stat: '0 Logins',
      statLabel: 'Instant browser execution',
      description:
        'NothingBox Labs does not harvest emails, require account creation, or track your activity. Your sessions are ephemeral and cryptographically self-contained in your browser.',
      bulletPoints: [
        'Zero registration or email verification',
        'No advertising trackers or telemetry beacons',
        'Passkey WebAuthn biometric security',
        'Your identity never touches a centralized server',
      ],
    },
    {
      icon: <Zap size={24} className={styles.iconOrange} />,
      title: 'Decentralized Architecture',
      stat: '100% P2P',
      statLabel: 'Powered by your hardware',
      description:
        'Traditional SaaS companies charge high subscription fees to cover massive server clusters. NothingBox Labs runs peer-to-peer directly on your device, eliminating cloud hosting overhead.',
      bulletPoints: [
        'Direct browser-to-browser WebRTC data channels',
        'Local file caching via Origin Private File System',
        'Hardware-accelerated 60 FPS video decoding',
        'Zero intermediate cloud storage bills',
      ],
    },
    {
      icon: <Globe2 size={24} className={styles.iconPurple} />,
      title: 'Modular Micro-Architecture',
      stat: 'Autonomous',
      statLabel: 'Decentralized ecosystem',
      description:
        'Independent, sandboxed application modules operate autonomously. If one node or peer disconnects, the rest of your computing environment runs uninterrupted.',
      bulletPoints: [
        'NothingChat, NothingDrop, NothingMusic, & NothingCinema',
        'Direct peer discovery via WebRTC signaling',
        'Isolated sandboxed browser execution',
        'Open architecture for community auditability',
      ],
    },
  ];

  return (
    <section id="free-ecosystem" className={styles.freeSection}>
      <div className={styles.container}>
        {/* Apple Centered Header Block */}
        <div className={styles.headerBlock}>
          <div className={styles.headerLogoWrap}>
            <Logo size={64} className={styles.ecosystemLogo} />
          </div>
          <span className={styles.eyebrow}>Decentralized Computing Suite</span>
          <h2 className={styles.headline}>Engineered for raw browser power. Zero cloud overhead.</h2>
          <p className={styles.subhead}>
            NothingBox Labs is engineered on the principle that modern browsers have supercomputer capabilities.
            Because your device performs the computation and peers connect directly, applications operate with zero server dependencies.
          </p>
        </div>

        {/* 4-Pillar Grid */}
        <div className={styles.pillarsGrid}>
          {freeHighlights.map((item, idx) => (
            <div key={idx} className={styles.pillarCard}>
              <div className={styles.pillarTop}>
                <div className={styles.iconBubble}>{item.icon}</div>
                <div className={styles.statBox}>
                  <span className={styles.statNumber}>{item.stat}</span>
                  <span className={styles.statCaption}>{item.statLabel}</span>
                </div>
              </div>

              <h3 className={styles.pillarTitle}>{item.title}</h3>
              <p className={styles.pillarDesc}>{item.description}</p>

              <div className={styles.bulletsList}>
                {item.bulletPoints.map((bp, i) => (
                  <div key={i} className={styles.bulletItem}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>{bp}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Apple Instant Launch Bar */}
        <div className={styles.launchCallout}>
          <div className={styles.calloutLeft}>
            <div className={styles.calloutBadge}>
              <span className={styles.pulseDot}></span>
              <span>Live & Ready to Use</span>
            </div>
            <h3 className={styles.calloutTitle}>Experience NothingBox Labs</h3>
            <p className={styles.calloutSub}>
              Explore the flagship suite directly inside your browser. No installation, no account creation.
            </p>
          </div>

          <div className={styles.launchButtons}>
            <button
              className={styles.primaryLaunchBtn}
              onClick={() => scrollTo('hero-chat')}
            >
              <span>Explore NothingChat</span>
              <ChevronRight size={14} />
            </button>
            <button
              className={styles.secondaryLaunchBtn}
              onClick={() => scrollTo('hero-drop')}
            >
              <span>Explore NothingDrop</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
