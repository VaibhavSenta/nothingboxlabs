'use client';

import React from 'react';
import styles from './ApplePromoGrid.module.css';
import {
  ChevronRight,
  HardDrive,
  Share2,
  Server,
  Layers,
  Sparkles,
  ShieldCheck,
  Zap,
  Radio,
  Cpu
} from 'lucide-react';

interface ApplePromoGridProps {
  onOpenSubdomains: () => void;
  onOpenSpecs: () => void;
}

export const ApplePromoGrid: React.FC<ApplePromoGridProps> = ({
  onOpenSubdomains,
  onOpenSpecs,
}) => {
  const promos = [
    {
      id: 'promo-subdomains',
      eyebrow: 'Federated Suite',
      title: '20 Subdomain Network',
      description: 'Dedicated isolated micro-frontends running across subdomains with zero cross-service degradation.',
      linkText: 'Explore the 20 Subdomains',
      action: onOpenSubdomains,
      icon: <Layers size={28} className={styles.iconBlue} />,
      badge: 'Isolated Port Mesh',
      metric: '20 Endpoints'
    },
    {
      id: 'promo-opfs',
      eyebrow: 'Virtual RAM Engine',
      title: 'Origin Private File System',
      description: 'Raw chunk streaming into OPFS for 4GB–5GB local buffers at native SSD speed with ~118MB JS heap.',
      linkText: 'View Architecture Specs',
      action: onOpenSpecs,
      icon: <HardDrive size={28} className={styles.iconCyan} />,
      badge: 'FileSystemSyncAccessHandle',
      metric: '5 GB Buffer'
    },
    {
      id: 'promo-webrtc',
      eyebrow: 'Zero Cloud Storage',
      title: 'WebRTC Data Channels',
      description: 'Peer-to-peer encrypted binary tunnels for 50GB file transfers without intermediary cloud relay servers.',
      linkText: 'Test NothingDrop',
      action: () => {
        const elem = document.getElementById('hero-drop');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      },
      icon: <Share2 size={28} className={styles.iconGreen} />,
      badge: 'DTLS / SCTP Tunnel',
      metric: '$0.00 Cost'
    },
    {
      id: 'promo-apis',
      eyebrow: 'Native Synergy',
      title: 'Google Cloud Platform',
      description: 'Google Maps Places API and Cloud Translation engine directly integrated in chat without context switching.',
      linkText: 'Test in NothingChat',
      action: () => {
        const elem = document.getElementById('hero-chat');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      },
      icon: <Zap size={28} className={styles.iconOrange} />,
      badge: 'Places & Translation API',
      metric: 'In-Bubble'
    },
    {
      id: 'promo-topology',
      eyebrow: 'Decoupled Topology',
      title: 'Independent Host Ready',
      description: 'Next.js client interface paired with dedicated Node.js + Express backend service running on its own server.',
      linkText: 'Explore Microservices',
      action: onOpenSpecs,
      icon: <Server size={28} className={styles.iconPurple} />,
      badge: 'Port 4000 Express Relay',
      metric: 'Decoupled'
    },
    {
      id: 'promo-labx',
      eyebrow: 'Next Frontier',
      title: 'NothingLabX & Passkey SSO',
      description: 'Client-side encrypted vault, WebGPU 3D shaders, and WebAuthn biometric passkey authentication.',
      linkText: 'View Planned Specs',
      action: onOpenSubdomains,
      icon: <Cpu size={28} className={styles.iconRed} />,
      badge: 'WebAuthn + WebGPU',
      metric: 'Zero-Password'
    },
  ];

  return (
    <section id="promo-grid" className={styles.promoGridSection}>
      <div className={styles.container}>
        <div className={styles.gridHeader}>
          <span className={styles.sectionEyebrow}>Ecosystem Highlights</span>
          <h3 className={styles.sectionTitle}>Engineered Without Compromise.</h3>
        </div>

        <div className={styles.gridContainer}>
          {promos.map((promo) => (
            <div key={promo.id} className={styles.promoCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardEyebrow}>{promo.eyebrow}</span>
                <h4 className={styles.cardTitle}>{promo.title}</h4>
                <p className={styles.cardDesc}>{promo.description}</p>

                <button
                  className={styles.cardLink}
                  onClick={promo.action}
                >
                  <span>{promo.linkText}</span>
                  <ChevronRight size={13} className={styles.chevron} />
                </button>
              </div>

              <div className={styles.cardVisual}>
                <div className={styles.visualBadgeRow}>
                  <div className={styles.iconContainer}>{promo.icon}</div>
                  <span className={styles.metricHighlight}>{promo.metric}</span>
                </div>
                <span className={styles.techBadge}>{promo.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
