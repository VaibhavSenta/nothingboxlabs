'use client';

import React, { useState, useEffect } from 'react';
import styles from './LegalModal.module.css';
import {
  X,
  Shield,
  FileText,
  Lock,
  Share2,
  Music,
  Scale,
  CheckCircle2,
  AlertTriangle,
  Info
} from 'lucide-react';

export type LegalTabType = 'trademark' | 'terms' | 'p2p' | 'privacy' | 'music';

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: LegalTabType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialTab = 'trademark',
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<LegalTabType>(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        id="legal-policy-modal"
        className={styles.modalCard}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
      >
        {/* Header */}
        <div className={styles.modalHeader}>
          <div className={styles.headerTitleGroup}>
            <div className={styles.iconWrapper}>
              <Scale size={22} />
            </div>
            <div>
              <h2 id="legal-modal-title" className={styles.title}>
                Legal & Compliance Center
              </h2>
              <span className={styles.subtitle}>
                NothingBox Labs Regulatory Compliance & Terms
              </span>
            </div>
          </div>
          <button
            id="close-legal-modal-btn"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close legal modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className={styles.tabsBar}>
          <button
            id="tab-trademark-btn"
            className={`${styles.tabBtn} ${activeTab === 'trademark' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('trademark')}
          >
            <Info size={14} />
            Trademark Disclaimer
          </button>
          <button
            id="tab-p2p-btn"
            className={`${styles.tabBtn} ${activeTab === 'p2p' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('p2p')}
          >
            <Share2 size={14} />
            NothingDrop P2P Terms
          </button>
          <button
            id="tab-music-btn"
            className={`${styles.tabBtn} ${activeTab === 'music' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('music')}
          >
            <Music size={14} />
            NothingMusic Compliance
          </button>
          <button
            id="tab-privacy-btn"
            className={`${styles.tabBtn} ${activeTab === 'privacy' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('privacy')}
          >
            <Lock size={14} />
            DPDP & Privacy Policy
          </button>
          <button
            id="tab-terms-btn"
            className={`${styles.tabBtn} ${activeTab === 'terms' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('terms')}
          >
            <FileText size={14} />
            General Terms of Use
          </button>
        </div>

        {/* Modal Body Scroll */}
        <div className={styles.modalBody}>
          {/* TAB 1: TRADEMARK DISCLAIMER */}
          {activeTab === 'trademark' && (
            <>
              <div className={`${styles.calloutBox} ${styles.calloutImportant}`}>
                <div className={styles.calloutTitle}>
                  <AlertTriangle size={16} color="#d97706" />
                  Independent Platform Notice
                </div>
                <p className={styles.calloutText}>
                  <strong>NothingBox Labs is an independent platform and is not affiliated, associated, authorized, or endorsed by Nothing Technology Limited.</strong>
                </p>
              </div>

              <div className={styles.legalBlock}>
                <h3 className={styles.sectionHeading}>
                  <Shield size={16} /> Brand & Intellectual Property Clarification
                </h3>
                <p className={styles.sectionBody}>
                  "NothingBox Labs", "NothingBox", and all associated modular sub-services (including NothingChat, NothingDrop, NothingMusic, and NothingCinema) represent an independent open-web experiment and experimental software suite developed separately.
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.strongText}>No Corporate Connection:</span> Nothing Technology Limited (makers of Nothing Phone, Nothing OS, and Ear products) holds no ownership, sponsorship, operational control, or partnership in this web platform.
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.strongText}>Registered Marks:</span> Any references to third-party trademarks, company names, or product names are purely for descriptive, non-confusing, and technical compatibility identification purposes.
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.strongText}>Original Design:</span> All logos, visual styling, source code, and responsive interface implementations are original creations engineered by the NothingBox Labs team.
                  </li>
                </ul>
              </div>
            </>
          )}

          {/* TAB 2: P2P TERMS OF SERVICE (NOTHINGDROP) */}
          {activeTab === 'p2p' && (
            <>
              <div className={styles.calloutBox}>
                <div className={styles.calloutTitle}>
                  <CheckCircle2 size={16} color="#16a34a" />
                  Zero Server Intermediary Architecture
                </div>
                <p className={styles.calloutText}>
                  NothingDrop operates via direct WebRTC DataChannel protocols. <strong>Zero files or payloads ever touch, pass through, or are stored on NothingBox Labs servers.</strong> Transfers occur strictly between user devices.
                </p>
              </div>

              <div className={styles.legalBlock}>
                <h3 className={styles.sectionHeading}>
                  <Scale size={16} /> Section 79 Intermediary Safe Harbor Notice (IT Act, 2000)
                </h3>
                <p className={styles.sectionBody}>
                  Under Section 79 of the Information Technology Act, 2000 (India) and international safe harbor frameworks, NothingBox Labs acts solely as an ephemeral signaling facility and facilitator of direct browser-to-browser connections:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.strongText}>No Content Caching or Access:</span> Because payloads stream directly point-to-point via peer cryptographic DTLS/SCTP channels, NothingBox Labs has no technological means to access, monitor, inspect, copy, or retain any transferred file.
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.strongText}>User Sole Responsibility:</span> You, the user, bear sole and exclusive legal liability for the content, nature, copyright ownership, and lawfulness of any files you transmit or receive using NothingDrop.
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.strongText}>Prohibited Transmission:</span> You agree never to use NothingDrop to transmit unlawful, copyright-infringing, abusive, defamatory, harassing, sexually explicit without consent, malicious software, or legally prohibited material under Indian law or the laws of your jurisdiction.
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.strongText}>Ephemeral Signaling:</span> WebRTC peer pairing tokens and room codes are strictly transient in-memory handshake vectors that automatically expire and self-destruct upon session completion.
                  </li>
                </ul>
              </div>
            </>
          )}

          {/* TAB 3: MUSIC STREAMING & YOUTUBE API COMPLIANCE */}
          {activeTab === 'music' && (
            <>
              <div className={styles.calloutBox}>
                <div className={styles.calloutTitle}>
                  <CheckCircle2 size={16} color="#16a34a" />
                  Official YouTube API & Copyright Attribution
                </div>
                <p className={styles.calloutText}>
                  NothingMusic streams audio content exclusively via the official <strong>YouTube Embedded / IFrame Player API</strong>. We do not download, rip, strip advertisements from, or store copyrighted audio streams.
                </p>
              </div>

              <div className={styles.legalBlock}>
                <h3 className={styles.sectionHeading}>
                  <Music size={16} /> Social Timestamp Snippet Sharing Feature
                </h3>
                <p className={styles.sectionBody}>
                  The core utility of NothingMusic is collaborative listening and social timestamp sharing:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.strongText}>Snippet Markers:</span> Allows users to tag and share specific musical moments (such as a 30-second chorus or breakdown, e.g., starting at 0:45 and ending at 1:15) using standard YouTube Player API parameters (<code>start</code> and <code>end</code>).
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.strongText}>Creator Monetization & Views:</span> All plays, impressions, and views are credited directly to the original artist and content creator on YouTube in accordance with YouTube Developer Policies.
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.strongText}>No Circumvention:</span> NothingMusic does not circumvent DRM, does not bypass platform token mechanisms, and does not rip files to offline disk storage.
                  </li>
                </ul>
              </div>
            </>
          )}

          {/* TAB 4: DATA PROTECTION & PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <>
              <div className={styles.calloutBox}>
                <div className={styles.calloutTitle}>
                  <Lock size={16} color="#0071e3" />
                  Digital Personal Data Protection (DPDP) Act, 2023 Compliance
                </div>
                <p className={styles.calloutText}>
                  Your privacy is a fundamental pillar of NothingBox Labs. We practice zero data brokering, zero profiling, and zero unauthorized analytics tracking.
                </p>
              </div>

              <div className={styles.legalBlock}>
                <h3 className={styles.sectionHeading}>
                  <Shield size={16} /> End-to-End Encryption & User Rights
                </h3>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.strongText}>End-to-End Encryption (E2EE):</span> In NothingChat, messaging channels employ client-side cryptographic keys (Web Crypto API). Unencrypted message text is never readable by NothingBox Labs infrastructure.
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.strongText}>Right to Complete Erasure:</span> Under India's DPDP Act 2023 and GDPR, every user maintains the absolute right to delete their account, stored credentials, session history, and messages at any time without friction.
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.strongText}>No Third-Party Data Sale:</span> We never sell, rent, monetize, or disclose user identities, device fingerprints, or transfer metadata to advertising networks or data brokers.
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.strongText}>Local Device Sovereignty:</span> Temporary cache storage (Origin Private File System, LocalStorage) remains exclusively within your personal browser sandbox and can be wiped instantly by clearing browser site data.
                  </li>
                </ul>
              </div>
            </>
          )}

          {/* TAB 5: GENERAL TERMS OF USE */}
          {activeTab === 'terms' && (
            <>
              <div className={styles.legalBlock}>
                <h3 className={styles.sectionHeading}>
                  <FileText size={16} /> Acceptance of Terms
                </h3>
                <p className={styles.sectionBody}>
                  By accessing or utilizing NothingBox Labs (nothingboxlabs.com) or its subdomains, you agree to be bound by these Terms of Use, applicable laws of the Republic of India, and all relevant international guidelines.
                </p>
              </div>

              <div className={styles.legalBlock}>
                <h3 className={styles.sectionHeading}>
                  <Scale size={16} /> Permitted Use & Service Availability
                </h3>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.strongText}>Experimental Suite:</span> NothingBox Labs services are provided on an "as-is" and "as-available" basis for high-speed browser utility, productivity, and media consumption.
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.strongText}>Jurisdiction:</span> These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of the services shall be subject to the exclusive jurisdiction of the competent courts.
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.strongText}>Amendments:</span> We reserve the right to revise these terms to maintain adherence to evolving statutory requirements and technical standards.
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className={styles.modalFooter}>
          <span className={styles.updatedNote}>
            Last updated: September 2026 • Valid for India & International Use
          </span>
          <button
            id="acknowledge-legal-modal-btn"
            className={styles.actionBtn}
            onClick={onClose}
          >
            I Understand & Agree
          </button>
        </div>
      </div>
    </div>
  );
};
