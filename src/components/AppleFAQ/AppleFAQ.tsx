'use client';

import React, { useState } from 'react';
import styles from './AppleFAQ.module.css';
import { ChevronDown, HelpCircle, Sparkles, Shield, Cpu, Share2 } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const AppleFAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      category: 'Installation & Access',
      question: 'Do I need to install any application, driver, or browser extension?',
      answer:
        'No. Every tool in NothingBox Labs runs purely inside standard, modern web browsers using native WebRTC, WebAudio, OPFS, and WebCodecs APIs. You never need to download installers, install device drivers, or grant intrusive operating system privileges. Simply open the URL and you are ready.',
    },
    {
      id: 'faq-2',
      category: 'P2P File Transfers',
      question: 'How does NothingDrop transfer 50GB files without an intermediate cloud server?',
      answer:
        'NothingDrop establishes a direct peer-to-peer WebRTC SCTP data channel between both devices. The file is sliced into binary chunks directly from local storage and streamed over your local Wi-Fi or internet connection straight into the recipient browser. Because no third-party cloud server is involved, there are zero storage limits, no bandwidth throttling, and wire-speed throughput.',
    },
    {
      id: 'faq-3',
      category: 'Privacy & Cryptography',
      question: 'Are my chats, calls, and shared files genuinely private?',
      answer:
        'Yes. All peer communication uses end-to-end encryption combining Curve25519 key agreements and AES-GCM-256 authenticated encryption. Keys are generated exclusively on your local device and are never transmitted to any central authority. Because we operate zero centralized message databases, neither NothingBox Labs nor any third party can intercept or inspect your data.',
    },
    {
      id: 'faq-4',
      category: 'Cross-Platform Compatibility',
      question: 'Which devices, operating systems, and browsers are supported?',
      answer:
        'NothingBox Labs is built for universal compatibility. It is fully supported across macOS, Windows, Linux, iOS (Safari), iPadOS, and Android (Chrome, Firefox, Brave, Edge). Any browser supporting standard WebRTC and HTML5 APIs achieves full hardware acceleration.',
    },
    {
      id: 'faq-5',
      category: 'Pricing & Business Model',
      question: 'Is there any subscription fee, credit card requirement, or usage limit?',
      answer:
        'No. Unlike conventional SaaS platforms that charge subscriptions to pay for expensive cloud compute servers and database clusters, NothingBox Labs leverages the compute power already inside your personal hardware. Because peers communicate directly, there is no costly server infrastructure to fund.',
    },
    {
      id: 'faq-6',
      category: 'Offline Capability',
      question: 'Can I use these tools offline or without an active internet connection?',
      answer:
        'Yes. NothingMusic and NothingCinema work completely offline once loaded, streaming media directly from your device storage through OPFS without querying any remote server. Additionally, NothingDrop can perform transfers across your local Wi-Fi or LAN network even if the building loses its external internet connection.',
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq-section" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.eyebrowPill}>
            <HelpCircle size={14} className={styles.eyebrowIcon} />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className={styles.headline}>Questions & Answers</h2>
          <p className={styles.subhead}>
            Everything you need to know about browser-native architecture, zero-knowledge privacy, and direct peer networking.
          </p>
        </div>

        {/* Accordion List */}
        <div className={styles.accordionList}>
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ''}`}
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  className={styles.faqButton}
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-ans-${faq.id}`}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <div className={`${styles.iconWrap} ${isOpen ? styles.iconWrapRotated : ''}`}>
                    <ChevronDown size={18} className={styles.chevronIcon} />
                  </div>
                </button>

                <div
                  id={`faq-ans-${faq.id}`}
                  className={`${styles.answerWrapper} ${isOpen ? styles.answerWrapperOpen : ''}`}
                >
                  <div className={styles.answerContent}>
                    <p className={styles.answerText}>{faq.answer}</p>
                    <span className={styles.categoryTag}>{faq.category}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
