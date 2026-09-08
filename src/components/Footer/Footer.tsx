import React from 'react';
import styles from './Footer.module.css';
import { Logo } from '../Logo/Logo';
import { ChevronRight } from 'lucide-react';

export interface FooterProps {
  onOpenLegal?: (tab: 'trademark' | 'terms' | 'p2p' | 'privacy' | 'music') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer id="apple-footer" className={styles.footer}>
      <div className={styles.container}>
        {/* Apple Legal Footnotes */}
        <section className={styles.footnotesSection}>
          <ol className={styles.footnotesList}>
            <li className={styles.footnoteItem}>
              1. Origin Private File System (OPFS) Virtual RAM caching requires a modern Chromium or WebKit browser supporting the File System Access API and FileSystemSyncAccessHandle. Peak memory allocation adjusts dynamically based on local device storage headroom (allocating up to 5GB on Desktop/Android and falling back safely to 1GB on iOS Safari).
            </li>
            <li className={styles.footnoteItem}>
              2. WebRTC Data Channels establish direct peer-to-peer transport tunnels using DTLS and SCTP protocol encryption. 50GB file transfers bypass central cloud storage completely without intermediate disk writes or monthly bandwidth overhead.
            </li>
            <li className={styles.footnoteItem}>
              3. The NothingBox Labs Architecture represents a decoupled micro-frontend topology where individual tools run isolated without shared runtime execution bottlenecks.
            </li>
            <li className={styles.footnoteItem}>
              4. Real-time Google Maps Places search and Cloud Translation features operate directly within contextual message bubbles in NothingChat via secure client-side API proxies.
            </li>
          </ol>
        </section>

        {/* Apple Breadcrumb Bar */}
        <nav className={styles.breadcrumbBar} aria-label="Breadcrumbs">
          <Logo size={26} className={styles.footerLogoGlyph} />
          <ChevronRight size={12} className={styles.breadcrumbChevron} />
          <span className={styles.breadcrumbItem}>NothingBox Labs</span>
          <ChevronRight size={12} className={styles.breadcrumbChevron} />
          <span className={styles.breadcrumbItem}>Ecosystem Suite</span>
          <ChevronRight size={12} className={styles.breadcrumbChevron} />
          <span className={styles.breadcrumbCurrent}>Flagship Lineup</span>
        </nav>

        {/* Apple 5-Column Directory */}
        <div className={styles.directoryGrid}>
          {/* Column 1 */}
          <div className={styles.directoryCol}>
            <span className={styles.colHeader}>Explore and Learn</span>
            <ul className={styles.colLinks}>
              <li><a href="#hero-chat" className={styles.colLink}>NothingChat</a></li>
              <li><a href="#hero-drop" className={styles.colLink}>NothingDrop P2P</a></li>
              <li><a href="#hero-music" className={styles.colLink}>NothingMusic</a></li>
              <li><a href="#hero-cinema" className={styles.colLink}>NothingCinema 4K</a></li>
              <li><a href="#trust-compatibility" className={styles.colLink}>Security & Audit</a></li>
              <li><a href="#faq-section" className={styles.colLink}>Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className={styles.directoryCol}>
            <span className={styles.colHeader}>Account & Identity</span>
            <ul className={styles.colLinks}>
              <li><a href="#trust-compatibility" className={styles.colLink}>NothingAuth Passkey</a></li>
              <li><a href="#trust-compatibility" className={styles.colLink}>NothingVault Encrypted</a></li>
              <li><a href="#trust-compatibility" className={styles.colLink}>Biometric WebAuthn</a></li>
              <li><a href="#trust-compatibility" className={styles.colLink}>Session Management</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className={styles.directoryCol}>
            <span className={styles.colHeader}>Entertainment & Media</span>
            <ul className={styles.colLinks}>
              <li><a href="#hero-music" className={styles.colLink}>NothingMusic Player</a></li>
              <li><a href="#hero-cinema" className={styles.colLink}>NothingCinema 4K Stream</a></li>
              <li><a href="https://sound.nothingboxlabs.com" className={styles.colLink}>Spatial 3D Audio</a></li>
              <li><a href="https://studio.nothingboxlabs.com" className={styles.colLink}>Vector Studio</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className={styles.directoryCol}>
            <span className={styles.colHeader}>Architecture & APIs</span>
            <ul className={styles.colLinks}>
              <li><a href="#promo-grid" className={styles.colLink}>OPFS Virtual RAM Engine</a></li>
              <li><a href="#promo-grid" className={styles.colLink}>WebRTC Data Channels</a></li>
              <li><a href="#hero-chat" className={styles.colLink}>Google Maps Places API</a></li>
              <li><a href="#hero-chat" className={styles.colLink}>Cloud Translation Engine</a></li>
              <li><a href="#promo-grid" className={styles.colLink}>Node.js Express Relay</a></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className={styles.directoryCol}>
            <span className={styles.colHeader}>About NothingBox Labs</span>
            <ul className={styles.colLinks}>
              <li><a href="#main-header" className={styles.colLink}>Newsroom</a></li>
              <li><a href="https://status.nothingboxlabs.com" className={styles.colLink}>System Status</a></li>
              <li><a href="https://github.com/VaibhavSenta/nothingboxlabs" target="_blank" rel="noreferrer" className={styles.colLink}>GitHub Repository</a></li>
              <li>
                <button
                  type="button"
                  className={styles.legalBtn}
                  onClick={() => onOpenLegal?.('p2p')}
                >
                  P2P Terms of Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={styles.legalBtn}
                  onClick={() => onOpenLegal?.('trademark')}
                >
                  Trademark Notice
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Independent Platform Trademark Notice Box */}
        <div className={styles.trademarkNoticeBox}>
          <p className={styles.trademarkDisclaimer}>
            <strong>NothingBox Labs is an independent platform and is not affiliated, associated, authorized, or endorsed by Nothing Technology Limited.</strong>
            <button
              type="button"
              className={styles.trademarkLearnMore}
              onClick={() => onOpenLegal?.('trademark')}
            >
              Legal & Trademark Details
            </button>
          </p>
        </div>

        {/* Apple Copyright Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyrightText}>
            Copyright © 2026 NothingBox Labs Inc. All rights reserved.
          </div>

          <div className={styles.legalLinks}>
            <button
              type="button"
              className={styles.legalBtn}
              onClick={() => onOpenLegal?.('privacy')}
            >
              Privacy Policy
            </button>
            <span className={styles.legalDivider}>|</span>
            <button
              type="button"
              className={styles.legalBtn}
              onClick={() => onOpenLegal?.('terms')}
            >
              Terms of Use
            </button>
            <span className={styles.legalDivider}>|</span>
            <button
              type="button"
              className={styles.legalBtn}
              onClick={() => onOpenLegal?.('p2p')}
            >
              P2P Terms
            </button>
            <span className={styles.legalDivider}>|</span>
            <button
              type="button"
              className={styles.legalBtn}
              onClick={() => onOpenLegal?.('music')}
            >
              Music Compliance
            </button>
            <span className={styles.legalDivider}>|</span>
            <button
              type="button"
              className={styles.legalBtn}
              onClick={() => onOpenLegal?.('trademark')}
            >
              Legal
            </button>
            <span className={styles.legalDivider}>|</span>
            <a href="#subdomain-carousel" className={styles.legalLink}>Site Map</a>
          </div>

          <div className={styles.localeSelector}>
            India & Global (English)
          </div>
        </div>
      </div>
    </footer>
  );
};
