import React from 'react';
import styles from './ArchitectureBento.module.css';
import { Badge } from '../Badge/Badge';
import {
  Cpu,
  Layers,
  Network,
  ShieldCheck,
  Server,
  Zap,
  HardDrive,
  FileCode2,
  Share2
} from 'lucide-react';

export const ArchitectureBento: React.FC = () => {
  return (
    <section id="architecture-section" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badgeRow}>
            <Badge variant="blue">Ecosystem Foundation</Badge>
            <span className={styles.badgeText}>Hardware-Accelerated Web Engineering</span>
          </div>
          <h2 className={styles.heading}>The NothingBox Architecture.</h2>
          <p className={styles.description}>
            We reject the dogma that heavy computing belongs only in native binaries.
            Every tool in the NothingBox ecosystem is engineered to squeeze maximum throughput
            from low-level browser primitives without central cloud bottlenecking.
          </p>
        </div>

        <div className={styles.bentoGrid}>
          {/* Bento Card 1: OPFS Virtual RAM Buffer */}
          <div className={`${styles.bentoCard} ${styles.cardSpan2}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapBlue}>
                <HardDrive size={22} className={styles.iconBlue} />
              </div>
              <Badge variant="blue">Storage Primitive</Badge>
            </div>
            <h3 className={styles.cardTitle}>Origin Private File System (OPFS)</h3>
            <p className={styles.cardParagraph}>
              Standard web apps crash with Out-Of-Memory errors when loading multi-gigabyte
              files because JavaScript arrays saturate the browser heap. We stream raw
              chunks into OPFS, creating an ultra-fast 4GB–5GB Virtual RAM buffer right on
              the client’s solid-state drive.
            </p>
            <div className={styles.specBox}>
              <div className={styles.specItem}>
                <span className={styles.specKey}>API Handle</span>
                <span className={styles.specVal}>FileSystemSyncAccessHandle</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specKey}>Heap Footprint</span>
                <span className={styles.specVal}>&lt; 120 MB JavaScript Heap</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specKey}>Throughput</span>
                <span className={styles.specVal}>Native SSD Bus Speed</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: WebRTC Serverless P2P */}
          <div className={styles.bentoCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapCyan}>
                <Share2 size={22} className={styles.iconCyan} />
              </div>
              <Badge variant="cyan">Zero-Server Cloud</Badge>
            </div>
            <h3 className={styles.cardTitle}>WebRTC Data Channels</h3>
            <p className={styles.cardParagraph}>
              Direct peer-to-peer data transport eliminates intermediary cloud servers.
              Sender and receiver browsers negotiate ICE/STUN candidates and stream 64KB
              binary chunks directly over encrypted transport tunnels.
            </p>
            <div className={styles.metricHighlight}>
              <span className={styles.highlightNumber}>0.00$</span>
              <span className={styles.highlightLabel}>Cloud Storage Cost for 50GB Transfers</span>
            </div>
          </div>

          {/* Bento Card 3: Decoupled Frontend/Backend Topology */}
          <div className={styles.bentoCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapPurple}>
                <Server size={22} className={styles.iconPurple} />
              </div>
              <Badge variant="purple">Decoupled Topology</Badge>
            </div>
            <h3 className={styles.cardTitle}>Independent Host Ready</h3>
            <p className={styles.cardParagraph}>
              Next.js client interface running independently, architected for a standalone
              Node.js + Express backend service running on dedicated infrastructure with
              WebSocket relays and Google Cloud integration.
            </p>
            <div className={styles.specListMini}>
              <div className={styles.specMiniRow}>
                <span className={styles.miniDot}></span>
                <span>Next.js Static/Edge Deployment</span>
              </div>
              <div className={styles.specMiniRow}>
                <span className={styles.miniDot}></span>
                <span>Node.js / Express Microservice Ready</span>
              </div>
              <div className={styles.specMiniRow}>
                <span className={styles.miniDot}></span>
                <span>Subdomain Port Routing</span>
              </div>
            </div>
          </div>

          {/* Bento Card 4: Native API Synergy */}
          <div className={`${styles.bentoCard} ${styles.cardSpan2}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapOrange}>
                <Zap size={22} className={styles.iconOrange} />
              </div>
              <Badge variant="orange">In-App Native Synergy</Badge>
            </div>
            <h3 className={styles.cardTitle}>Unified Native Ecosystem APIs</h3>
            <p className={styles.cardParagraph}>
              Rather than redirecting users to clunky third-party apps, our ecosystem
              embeds Google Maps location markers, Google Translate real-time language models,
              and precision YouTube audio timestamp trimmers directly inside contextual bubbles.
            </p>
            <div className={styles.apiGridPills}>
              <span className={styles.apiPill}>Google Maps Places API</span>
              <span className={styles.apiPill}>Cloud Translation Engine</span>
              <span className={styles.apiPill}>YouTube Audio Snippet Parser</span>
              <span className={styles.apiPill}>Web Audio Waveform Synthesizer</span>
              <span className={styles.apiPill}>MediaSource Extensions (MSE)</span>
              <span className={styles.apiPill}>Storage Estimate Quota API</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
