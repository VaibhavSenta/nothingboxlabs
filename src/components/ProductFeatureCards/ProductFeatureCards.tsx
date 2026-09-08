'use client';

import React from 'react';
import styles from './ProductFeatureCards.module.css';
import { CoreProduct } from '../../types/products';
import {
  ShieldCheck,
  Zap,
  Lock,
  Share2,
  HardDrive,
  Cpu,
  Radio,
  Music,
  Film,
  Globe2,
  CheckCircle2,
  Activity,
  Layers,
  ArrowUpRight,
  Database,
  Gauge
} from 'lucide-react';

interface ProductFeatureCardsProps {
  product: CoreProduct;
  onOpenSpecs?: (product: CoreProduct) => void;
}

export const ProductFeatureCards: React.FC<ProductFeatureCardsProps> = ({
  product,
  onOpenSpecs,
}) => {
  if (product.id === 'chat-app') {
    return (
      <div className={styles.cardsContainer}>
        {/* Card 1: End-to-End Cryptography */}
        <div className={`${styles.featureCard} ${styles.highlightCard}`}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIconWrap} ${styles.blueGlow}`}>
              <Lock size={22} className={styles.iconBlue} />
            </div>
            <span className={styles.cardBadge}>Curve25519 + AES-256</span>
          </div>
          <h3 className={styles.cardTitle}>Zero-Knowledge Cryptography</h3>
          <p className={styles.cardDesc}>
            Messages, attachments, and calls are encrypted on the sender device before transmitting. No private keys or unencrypted payloads ever touch a central database.
          </p>

          {/* Visual Protocol Flow Diagram */}
          <div className={styles.visualFlow}>
            <div className={styles.flowNode}>
              <span className={styles.nodeLabel}>Client A</span>
              <span className={styles.nodeSub}>Local KeyGen</span>
            </div>
            <div className={styles.flowLine}>
              <span className={styles.flowTag}>Direct P2P E2EE</span>
              <div className={styles.pulseDot}></div>
            </div>
            <div className={styles.flowNode}>
              <span className={styles.nodeLabel}>Client B</span>
              <span className={styles.nodeSub}>Decrypted on SSD</span>
            </div>
          </div>

          <div className={styles.cardHighlights}>
            <div className={styles.highlightItem}>
              <CheckCircle2 size={14} className={styles.checkIcon} />
              <span>Double-ratchet session forward secrecy</span>
            </div>
            <div className={styles.highlightItem}>
              <CheckCircle2 size={14} className={styles.checkIcon} />
              <span>Biometric Passkey WebAuthn unlock</span>
            </div>
          </div>
        </div>

        {/* Card 2: Native Google Cloud Synergy */}
        <div className={styles.featureCard}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIconWrap} ${styles.amberGlow}`}>
              <Globe2 size={22} className={styles.iconAmber} />
            </div>
            <span className={styles.cardBadge}>Google Cloud Grounded</span>
          </div>
          <h3 className={styles.cardTitle}>In-Conversation Intelligence</h3>
          <p className={styles.cardDesc}>
            Query live Google Maps Places and execute multilingual translation without switching apps. Rich interactive cards render seamlessly inside the conversation.
          </p>
          <div className={styles.statsPillRow}>
            <div className={styles.statMiniCard}>
              <span className={styles.miniStatNum}>100+</span>
              <span className={styles.miniStatLbl}>Languages</span>
            </div>
            <div className={styles.statMiniCard}>
              <span className={styles.miniStatNum}>&lt; 50ms</span>
              <span className={styles.miniStatLbl}>POI Latency</span>
            </div>
            <div className={styles.statMiniCard}>
              <span className={styles.miniStatNum}>0 Ads</span>
              <span className={styles.miniStatLbl}>No Trackers</span>
            </div>
          </div>
        </div>

        {/* Card 3: Ephemeral Browser Memory */}
        <div className={styles.featureCard}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIconWrap} ${styles.greenGlow}`}>
              <ShieldCheck size={22} className={styles.iconGreen} />
            </div>
            <span className={styles.cardBadge}>Pure Client Memory</span>
          </div>
          <h3 className={styles.cardTitle}>Ephemeral Data Sovereignty</h3>
          <p className={styles.cardDesc}>
            Your entire message history resides inside IndexedDB and RAM. Closing your browser or clearing storage permanently wipes data with zero server-side ghost backups.
          </p>
          <div className={styles.badgeRow}>
            <span className={styles.techPill}>No Phone Required</span>
            <span className={styles.techPill}>No Email Needed</span>
            <span className={styles.techPill}>Self-Hostable</span>
          </div>
        </div>
      </div>
    );
  }

  if (product.id === 'p2p-transfer') {
    return (
      <div className={styles.cardsContainer}>
        {/* Card 1: 50GB Chunk Pipeline */}
        <div className={`${styles.featureCard} ${styles.highlightCard}`}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIconWrap} ${styles.blueGlow}`}>
              <Share2 size={22} className={styles.iconBlue} />
            </div>
            <span className={styles.cardBadge}>64KB Binary Slicing</span>
          </div>
          <h3 className={styles.cardTitle}>Zero-Cloud 50GB Pipeline</h3>
          <p className={styles.cardDesc}>
            Bypasses cloud upload limits entirely. Files are read locally into ArrayBuffers and streamed over direct WebRTC SCTP data channels directly into peer storage.
          </p>

          {/* Speed Benchmark Bar */}
          <div className={styles.benchmarkBox}>
            <div className={styles.benchmarkHeader}>
              <span>Direct LAN / WiFi Transfer Rate</span>
              <span className={styles.benchmarkVal}>Up to 850 Mbps</span>
            </div>
            <div className={styles.progressBarWrap}>
              <div className={styles.progressBarFill} style={{ width: '92%' }}></div>
            </div>
            <div className={styles.benchmarkLabels}>
              <span>Standard Cloud: ~45 Mbps</span>
              <span className={styles.highlightText}>NothingDrop: Full Wire-Speed</span>
            </div>
          </div>

          <div className={styles.cardHighlights}>
            <div className={styles.highlightItem}>
              <CheckCircle2 size={14} className={styles.checkIcon} />
              <span>SHA-256 automated hash integrity validation</span>
            </div>
            <div className={styles.highlightItem}>
              <CheckCircle2 size={14} className={styles.checkIcon} />
              <span>Zero third-party storage fees or bandwith caps</span>
            </div>
          </div>
        </div>

        {/* Card 2: LAN Peer Auto-Discovery */}
        <div className={styles.featureCard}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIconWrap} ${styles.cyanGlow}`}>
              <Radio size={22} className={styles.iconCyan} />
            </div>
            <span className={styles.cardBadge}>AirDrop Universal</span>
          </div>
          <h3 className={styles.cardTitle}>Zero-Setup Peer Discovery</h3>
          <p className={styles.cardDesc}>
            Open NothingDrop on any iOS, Android, Mac, or Windows machine on the same network to auto-discover peers instantly with one-tap QR handshake codes.
          </p>
          <div className={styles.statsPillRow}>
            <div className={styles.statMiniCard}>
              <span className={styles.miniStatNum}>0</span>
              <span className={styles.miniStatLbl}>Driver Installs</span>
            </div>
            <div className={styles.statMiniCard}>
              <span className={styles.miniStatNum}>All</span>
              <span className={styles.miniStatLbl}>OS Platforms</span>
            </div>
            <div className={styles.statMiniCard}>
              <span className={styles.miniStatNum}>100%</span>
              <span className={styles.miniStatLbl}>Browser Native</span>
            </div>
          </div>
        </div>

        {/* Card 3: Memory Safe Streaming */}
        <div className={styles.featureCard}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIconWrap} ${styles.greenGlow}`}>
              <Cpu size={22} className={styles.iconGreen} />
            </div>
            <span className={styles.cardBadge}>Backpressure Throttling</span>
          </div>
          <h3 className={styles.cardTitle}>Dynamic Buffer Management</h3>
          <p className={styles.cardDesc}>
            Intelligent browser backpressure flow control ensures smooth transfers of large files without exhausting device RAM or locking up user interface threads.
          </p>
          <div className={styles.badgeRow}>
            <span className={styles.techPill}>Web Streams API</span>
            <span className={styles.techPill}>SCTP Ordered Packets</span>
            <span className={styles.techPill}>Zero Heap Bloat</span>
          </div>
        </div>
      </div>
    );
  }

  if (product.id === 'music-player') {
    return (
      <div className={styles.cardsContainer}>
        {/* Card 1: Precision Timestamp & Drop Sharing */}
        <div className={`${styles.featureCard} ${styles.highlightCard}`}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIconWrap} ${styles.purpleGlow}`}>
              <Music size={22} className={styles.iconPurple} />
            </div>
            <span className={styles.cardBadge}>Official YouTube Player API</span>
          </div>
          <h3 className={styles.cardTitle}>Precision Timestamp Snippet Engine</h3>
          <p className={styles.cardDesc}>
            Clip, tag, and send friends the exact hook or drop of any song (e.g. 0:45 to 1:15). Streams natively through the official YouTube Player framework with zero latency and full creator attribution.
          </p>

          {/* Audio Spec Visualization */}
          <div className={styles.audioSpecBox}>
            <div className={styles.specMetric}>
              <span className={styles.specLabel}>Snippet Range</span>
              <span className={styles.specValue}>0:45 ➔ 1:15 Drop</span>
            </div>
            <div className={styles.specMetricDivider}></div>
            <div className={styles.specMetric}>
              <span className={styles.specLabel}>Attribution</span>
              <span className={styles.specValue}>100% Creator</span>
            </div>
            <div className={styles.specMetricDivider}></div>
            <div className={styles.specMetric}>
              <span className={styles.specLabel}>Copyright</span>
              <span className={styles.specValue}>Zero Friction</span>
            </div>
          </div>

          <div className={styles.cardHighlights}>
            <div className={styles.highlightItem}>
              <CheckCircle2 size={14} className={styles.checkIcon} />
              <span>One-tap share link for NothingChat, WhatsApp, & web</span>
            </div>
            <div className={styles.highlightItem}>
              <CheckCircle2 size={14} className={styles.checkIcon} />
              <span>Direct official YouTube embed streams with full licensing integrity</span>
            </div>
          </div>
        </div>

        {/* Card 2: Parametric WebAudio Equalizer */}
        <div className={styles.featureCard}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIconWrap} ${styles.blueGlow}`}>
              <Activity size={22} className={styles.iconBlue} />
            </div>
            <span className={styles.cardBadge}>DSP Processing</span>
          </div>
          <h3 className={styles.cardTitle}>10-Band Studio DSP Equalizer</h3>
          <p className={styles.cardDesc}>
            Hardware-accelerated Web Audio API nodes provide precision 10-band equalization, spatial stereo widening, and dynamic loudness normalization.
          </p>
          <div className={styles.statsPillRow}>
            <div className={styles.statMiniCard}>
              <span className={styles.miniStatNum}>10</span>
              <span className={styles.miniStatLbl}>Bands</span>
            </div>
            <div className={styles.statMiniCard}>
              <span className={styles.miniStatNum}>0.01%</span>
              <span className={styles.miniStatLbl}>THD Distortion</span>
            </div>
            <div className={styles.statMiniCard}>
              <span className={styles.miniStatNum}>Gapless</span>
              <span className={styles.miniStatLbl}>Transitions</span>
            </div>
          </div>
        </div>

        {/* Card 3: Zero Telemetry & Local Library */}
        <div className={styles.featureCard}>
          <div className={styles.cardHeader}>
            <div className={`${styles.cardIconWrap} ${styles.greenGlow}`}>
              <ShieldCheck size={22} className={styles.iconGreen} />
            </div>
            <span className={styles.cardBadge}>Private Listening</span>
          </div>
          <h3 className={styles.cardTitle}>100% Client-Side Privacy</h3>
          <p className={styles.cardDesc}>
            Your listening habits, library playlists, and local files remain strictly confidential. No tracking algorithms or algorithmic profiling.
          </p>
          <div className={styles.badgeRow}>
            <span className={styles.techPill}>Local IndexedDB Metadata</span>
            <span className={styles.techPill}>Cover Art Extraction</span>
            <span className={styles.techPill}>No Cloud Sync</span>
          </div>
        </div>
      </div>
    );
  }

  // Fallback: video-player / NothingCinema
  return (
    <div className={styles.cardsContainer}>
      {/* Card 1: 4K WebCodecs Pipeline */}
      <div className={`${styles.featureCard} ${styles.highlightCard}`}>
        <div className={styles.cardHeader}>
          <div className={`${styles.cardIconWrap} ${styles.orangeGlow}`}>
            <Film size={22} className={styles.iconOrange} />
          </div>
          <span className={styles.cardBadge}>WebCodecs HW Acceleration</span>
        </div>
        <h3 className={styles.cardTitle}>Hardware-Accelerated 4K Engine</h3>
        <p className={styles.cardDesc}>
          Leverages modern GPU decode pipelines via WebCodecs and WebGPU shaders to play demanding 4K 60fps HDR MKV and MP4 files directly in the browser with silky smooth playback.
        </p>

        {/* Video Performance Box */}
        <div className={styles.benchmarkBox}>
          <div className={styles.benchmarkHeader}>
            <span>4K 60 FPS Decoding Performance</span>
            <span className={styles.benchmarkVal}>0 Frame Drops</span>
          </div>
          <div className={styles.progressBarWrap}>
            <div className={`${styles.progressBarFill} ${styles.orangeBar}`} style={{ width: '96%' }}></div>
          </div>
          <div className={styles.benchmarkLabels}>
            <span>CPU Load: ~8%</span>
            <span className={styles.highlightText}>GPU VRAM Decoding Active</span>
          </div>
        </div>

        <div className={styles.cardHighlights}>
          <div className={styles.highlightItem}>
            <CheckCircle2 size={14} className={styles.checkIcon} />
            <span>SubStation Alpha (.ass) vector subtitle rendering</span>
          </div>
          <div className={styles.highlightItem}>
            <CheckCircle2 size={14} className={styles.checkIcon} />
            <span>Multi-audio track switching & spatial audio support</span>
          </div>
        </div>
      </div>

      {/* Card 2: Peer-to-Peer Cinema Sync */}
      <div className={styles.featureCard}>
        <div className={styles.cardHeader}>
          <div className={`${styles.cardIconWrap} ${styles.purpleGlow}`}>
            <Share2 size={22} className={styles.iconPurple} />
          </div>
          <span className={styles.cardBadge}>Watch Party P2P</span>
        </div>
        <h3 className={styles.cardTitle}>Sub-15ms Timestamp Sync</h3>
        <p className={styles.cardDesc}>
          Stream video to authorized peers with ultra-low latency WebRTC data channels. Synchronized playback ensures you and your viewers experience frame-accurate cinema.
        </p>
        <div className={styles.statsPillRow}>
          <div className={styles.statMiniCard}>
            <span className={styles.miniStatNum}>&lt; 15ms</span>
            <span className={styles.miniStatLbl}>Sync Drift</span>
          </div>
          <div className={styles.statMiniCard}>
            <span className={styles.miniStatNum}>E2EE</span>
            <span className={styles.miniStatLbl}>Data Channel</span>
          </div>
          <div className={styles.statMiniCard}>
            <span className={styles.miniStatNum}>0 MB</span>
            <span className={styles.miniStatLbl}>Server Storage</span>
          </div>
        </div>
      </div>

      {/* Card 3: Local Offline Theater */}
      <div className={styles.featureCard}>
        <div className={styles.cardHeader}>
          <div className={`${styles.cardIconWrap} ${styles.greenGlow}`}>
            <ShieldCheck size={22} className={styles.iconGreen} />
          </div>
          <span className={styles.cardBadge}>No Subscriptions</span>
        </div>
        <h3 className={styles.cardTitle}>Complete Codec Freedom</h3>
        <p className={styles.cardDesc}>
          No bandwidth throttling, no DRM restrictions, and zero compression artifacts. Run all your local media files with pure native visual fidelity.
        </p>
        <div className={styles.badgeRow}>
          <span className={styles.techPill}>HDR10 / Dolby Vision</span>
          <span className={styles.techPill}>10-bit Color Depth</span>
          <span className={styles.techPill}>Audio Passthrough</span>
        </div>
      </div>
    </div>
  );
};
