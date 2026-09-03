import React from 'react';
import styles from './Footer.module.css';
import { Logo } from '../Logo/Logo';
import { ChevronRight } from 'lucide-react';

export const Footer: React.FC = () => {
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
              3. The 20 Subdomain Network represents a decoupled micro-frontend topology where individual tools run isolated on their respective subdomains (ports 3001 through 3020) without shared runtime execution bottlenecks.
            </li>
            <li className={styles.footnoteItem}>
              4. Real-time Google Maps Places search and Cloud Translation features operate directly within contextual message bubbles in NothingChat via secure client-side API proxies.
            </li>
          </ol>
        </section>

        {/* Apple Breadcrumb Bar */}
        <nav className={styles.breadcrumbBar} aria-label="Breadcrumbs">
          <Logo size={22} className={styles.footerLogoGlyph} />
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
              <li><a href="#subdomain-carousel" className={styles.colLink}>20 Subdomain Mesh</a></li>
              <li><a href="#promo-grid" className={styles.colLink}>Architecture Whitepaper</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className={styles.directoryCol}>
            <span className={styles.colHeader}>Account & Identity</span>
            <ul className={styles.colLinks}>
              <li><a href="https://auth.nothingboxlabs.com" className={styles.colLink}>NothingAuth Passkey</a></li>
              <li><a href="https://vault.nothingboxlabs.com" className={styles.colLink}>NothingVault Encrypted</a></li>
              <li><a href="#subdomain-carousel" className={styles.colLink}>Biometric WebAuthn</a></li>
              <li><a href="#subdomain-carousel" className={styles.colLink}>Session Management</a></li>
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
              <li><a href="#promo-grid" className={styles.colLink}>Performance Benchmarks</a></li>
              <li><a href="#apple-ribbon" className={styles.colLink}>Contact Engineering</a></li>
            </ul>
          </div>
        </div>

        {/* Apple Copyright Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyrightText}>
            Copyright © 2026 NothingBox Labs Inc. All rights reserved.
          </div>

          <div className={styles.legalLinks}>
            <a href="#main-header" className={styles.legalLink}>Privacy Policy</a>
            <span className={styles.legalDivider}>|</span>
            <a href="#main-header" className={styles.legalLink}>Terms of Use</a>
            <span className={styles.legalDivider}>|</span>
            <a href="#main-header" className={styles.legalLink}>Sales Policy</a>
            <span className={styles.legalDivider}>|</span>
            <a href="#main-header" className={styles.legalLink}>Legal</a>
            <span className={styles.legalDivider}>|</span>
            <a href="#subdomain-carousel" className={styles.legalLink}>Site Map</a>
          </div>

          <div className={styles.localeSelector}>
            United States (English)
          </div>
        </div>
      </div>
    </footer>
  );
};
