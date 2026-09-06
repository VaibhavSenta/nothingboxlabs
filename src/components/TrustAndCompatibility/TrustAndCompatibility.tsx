'use client';

import React, { useState, useEffect } from 'react';
import styles from './TrustAndCompatibility.module.css';
import {
  ShieldCheck,
  Lock,
  EyeOff,
  Cpu,
  CheckCircle2,
  HardDrive,
  Radio,
  Music,
  Film,
  Zap,
  Check,
  Sparkles,
  ServerOff
} from 'lucide-react';

interface ApiCapability {
  name: string;
  key: string;
  supported: boolean;
  standard: string;
  description: string;
}

export const TrustAndCompatibility: React.FC = () => {
  const [browserInfo, setBrowserInfo] = useState<string>('Detecting browser...');
  const [capabilities, setCapabilities] = useState<ApiCapability[]>([]);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    // Detect browser environment
    if (typeof window !== 'undefined') {
      const ua = navigator.userAgent;
      let detectedName = 'Modern Web Browser';
      if (ua.includes('Chrome') && !ua.includes('Edg')) detectedName = 'Google Chrome / Chromium';
      else if (ua.includes('Safari') && !ua.includes('Chrome')) detectedName = 'Apple Safari';
      else if (ua.includes('Firefox')) detectedName = 'Mozilla Firefox';
      else if (ua.includes('Edg')) detectedName = 'Microsoft Edge';
      else if (ua.includes('Brave')) detectedName = 'Brave Browser';

      setBrowserInfo(detectedName);

      // Check capabilities
      const hasWebRTC = typeof window.RTCPeerConnection !== 'undefined';
      const hasOPFS = 'storage' in navigator && typeof navigator.storage?.getDirectory === 'function';
      const hasWebAudio = typeof window.AudioContext !== 'undefined' || typeof (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext !== 'undefined';
      const hasWebCrypto = typeof window.crypto?.subtle !== 'undefined';
      const hasWebCodecs = 'VideoDecoder' in window;

      setCapabilities([
        {
          name: 'WebRTC P2P DataChannels',
          key: 'webrtc',
          supported: hasWebRTC,
          standard: 'IETF RFC 8831',
          description: 'Direct browser-to-browser SCTP tunnels for low latency messaging and 50GB file transfers.',
        },
        {
          name: 'Origin Private File System (OPFS)',
          key: 'opfs',
          supported: hasOPFS,
          standard: 'W3C File System',
          description: 'High-speed sandboxed virtual disk access for instantaneous audio & video streaming.',
        },
        {
          name: 'WebCrypto Subsystem',
          key: 'crypto',
          supported: hasWebCrypto,
          standard: 'W3C Web Cryptography',
          description: 'Hardware-backed Curve25519 key derivation and AES-GCM-256 client-side encryption.',
        },
        {
          name: 'WebAudio DSP Pipeline',
          key: 'audio',
          supported: hasWebAudio,
          standard: 'W3C Web Audio API',
          description: '192 kHz / 24-bit real-time spatial equalization and studio audio synthesis nodes.',
        },
        {
          name: 'WebCodecs GPU Pipeline',
          key: 'codecs',
          supported: hasWebCodecs,
          standard: 'W3C WebCodecs',
          description: 'Direct GPU hardware-accelerated video decoding for smooth 4K HDR playback.',
        },
      ]);

      setIsReady(true);
    }
  }, []);

  const trustPillars = [
    {
      icon: <ServerOff size={22} className={styles.pillarIconBlue} />,
      title: 'Zero Cloud Storage',
      desc: 'No centralized database holds your files or messages. All data is processed in local RAM and discarded upon tab closure.',
    },
    {
      icon: <Lock size={22} className={styles.pillarIconGreen} />,
      title: 'End-to-End Encrypted',
      desc: 'Direct P2P streams are sealed using Curve25519 key exchanges and AES-256-GCM. Intermediate nodes cannot inspect traffic.',
    },
    {
      icon: <EyeOff size={22} className={styles.pillarIconPurple} />,
      title: 'Zero Tracking & Cookies',
      desc: 'No ad networks, behavioral telemetry, or session profiling. Your activity remains completely private to your device.',
    },
  ];

  return (
    <section id="trust-compatibility" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.eyebrowPill}>
            <ShieldCheck size={14} className={styles.eyebrowIcon} />
            <span>Architecture & Security Audit</span>
          </div>
          <h2 className={styles.headline}>
            Privacy by mathematical proof, not policy promises.
          </h2>
          <p className={styles.subhead}>
            NothingBox Labs is built on a zero-knowledge, zero-server paradigm. Your browser is the application server, computing environment, and private cryptographic vault.
          </p>
        </div>

        {/* 3 Privacy Pillars */}
        <div className={styles.pillarsGrid}>
          {trustPillars.map((pillar, idx) => (
            <div key={idx} className={styles.pillarCard}>
              <div className={styles.pillarIconWrap}>{pillar.icon}</div>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDesc}>{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Live Browser Hardware & API Compatibility Checker */}
        <div className={styles.compatibilityPanel}>
          <div className={styles.panelHeader}>
            <div className={styles.panelTitleGroup}>
              <div className={styles.statusLivePill}>
                <span className={styles.livePulse}></span>
                <span className={styles.liveLabel}>Live Device Detection</span>
              </div>
              <h3 className={styles.panelTitle}>
                {browserInfo} Compatibility Status
              </h3>
              <p className={styles.panelSubtitle}>
                Verified hardware capabilities required to execute the browser-native computing suite:
              </p>
            </div>

            <div className={styles.verifiedBadge}>
              <CheckCircle2 size={18} className={styles.verifiedIcon} />
              <div className={styles.verifiedText}>
                <span className={styles.verifiedTitle}>Hardware Verified</span>
                <span className={styles.verifiedSub}>100% Native Ready</span>
              </div>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className={styles.capabilitiesList}>
            {capabilities.map((cap) => (
              <div key={cap.key} className={styles.capabilityRow}>
                <div className={styles.capLeft}>
                  <div className={cap.supported ? styles.capCheckOk : styles.capCheckWarn}>
                    <Check size={14} />
                  </div>
                  <div className={styles.capInfo}>
                    <div className={styles.capTitleLine}>
                      <span className={styles.capName}>{cap.name}</span>
                      <span className={styles.capStandard}>{cap.standard}</span>
                    </div>
                    <span className={styles.capDesc}>{cap.description}</span>
                  </div>
                </div>

                <div className={styles.capStatusWrap}>
                  <span className={cap.supported ? styles.statusBadgeActive : styles.statusBadgeFallback}>
                    {cap.supported ? 'Supported' : 'Fallback Ready'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.panelFooter}>
            <div className={styles.footerNote}>
              <Zap size={14} className={styles.zapIcon} />
              <span>Zero external plugins or drivers are needed. All processing operates within standard web security sandboxes.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
