'use client';

import React from 'react';
import Image from 'next/image';
import styles from './AppleComparison.module.css';
import { Logo } from '../Logo/Logo';
import {
  MessageSquare,
  Share2,
  Music,
  Film,
  ShieldCheck,
  Zap,
  HardDrive,
  Cpu,
  ChevronRight
} from 'lucide-react';
import { CoreProduct } from '../../types/products';

interface AppleComparisonProps {
  onOpenSpecs: (productSlug: string) => void;
}

export const AppleComparison: React.FC<AppleComparisonProps> = ({ onOpenSpecs }) => {
  const services = [
    {
      id: 'chat-app',
      slug: 'nothing-chat',
      name: 'NothingChat',
      tagline: 'Private messaging. Zero footprint.',
      icon: (
        <Image
          src="/nothingchat/icon-mark.svg"
          alt="NothingChat"
          width={36}
          height={36}
          style={{ borderRadius: 8, objectFit: 'contain' }}
        />
      ),
      accentColor: '#2997ff',
      specs: {
        architecture: 'Direct WebRTC Mesh',
        encryption: '256-bit AES-GCM',
        serverStorage: '0 KB (Zero Server Storage)',
        throughput: '12ms Direct Peer Latency',
        maxPayload: '4K Photos & Voice Memos',
        specialFeature: 'Live Maps & Translate Sync',
      },
    },
    {
      id: 'p2p-transfer',
      slug: 'nothing-drop',
      name: 'NothingDrop',
      tagline: '50GB AirDrop for the open web.',
      icon: <Share2 size={32} className={styles.iconGreen} />,
      accentColor: '#30d158',
      specs: {
        architecture: '64KB Chunk Slicing',
        encryption: 'DTLS / SCTP + SHA-256',
        serverStorage: '0 KB (Direct RAM to RAM)',
        throughput: 'Up to 168 MB/s (Local Wi-Fi)',
        maxPayload: '50 GB Single Archive',
        specialFeature: 'Ephemeral Room Link',
      },
    },
    {
      id: 'music-player',
      slug: 'nothing-music',
      name: 'NothingMusic',
      tagline: 'Lossless sound. Local speed.',
      icon: (
        <Image
          src="/nothingmusic/icon-mark.svg"
          alt="NothingMusic"
          width={28}
          height={36}
          style={{ borderRadius: 6, objectFit: 'contain' }}
        />
      ),
      accentColor: '#bf5af2',
      specs: {
        architecture: 'OPFS Native Audio Engine',
        encryption: 'Client-Sandboxed Storage',
        serverStorage: '0 KB (Stored on Device Disk)',
        throughput: '0 ms Seeking Latency',
        maxPayload: '24-bit / 96kHz Lossless',
        specialFeature: 'Zero Bandwidth Re-Stream',
      },
    },
    {
      id: 'video-player',
      slug: 'nothing-cinema',
      name: 'NothingCinema 4K',
      tagline: '4K Master streaming. Zero buffer.',
      icon: <Film size={32} className={styles.iconOrange} />,
      accentColor: '#ff9f0a',
      specs: {
        architecture: 'SyncAccessHandle Virtual RAM',
        encryption: 'Sandboxed Native Buffer',
        serverStorage: '0 KB (Direct FileSystem API)',
        throughput: '60 FPS Unlocked Playback',
        maxPayload: '20 GB+ Master ProRes Video',
        specialFeature: '118 MB Heap Zero-Leak Cap',
      },
    },
  ];

  return (
    <section id="service-comparison" className={styles.comparisonSection}>
      <div className={styles.container}>
        {/* Apple Centered Header */}
        <div className={styles.headerBlock}>
          <div className={styles.headerLogoWrap}>
            <Logo size={56} className={styles.comparisonHeaderLogo} />
          </div>
          <span className={styles.eyebrow}>Compare Services</span>
          <h2 className={styles.headline}>Which NothingBox Labs service is right for you?</h2>
          <p className={styles.subhead}>
            Every service is built without centralized cloud databases, ensuring maximum privacy, zero server retention, and native browser performance.
          </p>
        </div>

        {/* 4-Column Apple Comparison Matrix */}
        <div className={styles.matrixGrid}>
          {services.map((srv) => (
            <div key={srv.id} className={styles.serviceColumn}>
              <div className={styles.columnHeader}>
                <div className={styles.iconCircle}>{srv.icon}</div>
                <h3 className={styles.serviceTitle}>{srv.name}</h3>
                <p className={styles.serviceTagline}>{srv.tagline}</p>
                <button
                  className={styles.learnMoreLink}
                  onClick={() => onOpenSpecs(srv.slug)}
                >
                  <span>Tech specs</span>
                  <ChevronRight size={13} />
                </button>
              </div>

              <div className={styles.divider}></div>

              {/* Spec Rows */}
              <div className={styles.specsList}>
                <div className={styles.specGroup}>
                  <span className={styles.specLabel}>Core Architecture</span>
                  <span className={styles.specValue}>{srv.specs.architecture}</span>
                </div>

                <div className={styles.specGroup}>
                  <span className={styles.specLabel}>Cryptography & Security</span>
                  <span className={styles.specValueHighlight}>{srv.specs.encryption}</span>
                </div>

                <div className={styles.specGroup}>
                  <span className={styles.specLabel}>Server Footprint</span>
                  <span className={styles.specValueBadge}>{srv.specs.serverStorage}</span>
                </div>

                <div className={styles.specGroup}>
                  <span className={styles.specLabel}>Throughput & Latency</span>
                  <span className={styles.specValue}>{srv.specs.throughput}</span>
                </div>

                <div className={styles.specGroup}>
                  <span className={styles.specLabel}>Maximum Capacity</span>
                  <span className={styles.specValue}>{srv.specs.maxPayload}</span>
                </div>

                <div className={styles.specGroup}>
                  <span className={styles.specLabel}>Signature Capability</span>
                  <span className={styles.specValue}>{srv.specs.specialFeature}</span>
                </div>
              </div>

              {/* Bottom Apple CTA */}
              <div className={styles.columnFooter}>
                <button
                  className={styles.appleActionBtn}
                  onClick={() => {
                    const elem = document.getElementById(
                      srv.id === 'chat-app'
                        ? 'hero-chat'
                        : srv.id === 'p2p-transfer'
                        ? 'hero-drop'
                        : srv.id === 'music-player'
                        ? 'hero-music'
                        : 'hero-cinema'
                    );
                    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>Explore {srv.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
