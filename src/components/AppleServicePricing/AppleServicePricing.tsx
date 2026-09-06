'use client';

import React, { useState } from 'react';
import styles from './AppleServicePricing.module.css';
import { Logo } from '../Logo/Logo';
import { Check, ShieldCheck, Zap, Sparkles, ChevronRight, ShoppingBag } from 'lucide-react';

interface AppleServicePricingProps {
  onBagChange?: (count: number) => void;
}

export const AppleServicePricing: React.FC<AppleServicePricingProps> = ({ onBagChange }) => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [bagItemCount, setBagItemCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const tiers = [
    {
      id: 'community',
      name: 'Community Open Source',
      price: '$0',
      period: 'Forever free',
      tagline: 'Everything you need for personal, browser-to-browser privacy.',
      features: [
        'Unlimited NothingChat P2P messaging',
        'Direct 50GB file transfer via NothingDrop',
        'Native OPFS audio playback with NothingMusic',
        '4K local video playback with NothingCinema',
        'Full access to all 20 public subdomains',
        'Community Discord & GitHub support',
      ],
      cta: 'Get Started Free',
      isPopular: false,
    },
    {
      id: 'pro',
      name: 'NothingBox Pro',
      price: '$19',
      period: 'per month',
      tagline: 'High-speed relay assistance and custom subdomain vanity routing.',
      features: [
        'Everything in Community tier',
        'Global TURN/STUN relay for strict NAT traversal',
        'Custom vanity subdomains (yourname.nothingboxlabs.com)',
        'Priority 60 FPS 4K stream acceleration',
        'Encrypted passkey sync across multiple devices',
        'Priority developer engineering support',
      ],
      cta: 'Subscribe to Pro',
      isPopular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise Fleet Mesh',
      price: '$99',
      period: 'per node / month',
      tagline: 'Private P2P infrastructure tailored for sensitive enterprise networks.',
      features: [
        'Dedicated self-hosted signaling server binaries',
        'Custom air-gapped intranet deployment profiles',
        'SOC2 & HIPAA compliant zero-knowledge verification',
        'Unlimited organizational subdomains & custom DNS',
        'Custom WebCrypto KMS hardware key integration',
        '24/7 dedicated enterprise SLA & direct engineer line',
      ],
      cta: 'Contact Enterprise Sales',
      isPopular: false,
    },
  ];

  const handleSelectTier = (tierId: string) => {
    setSelectedTier(tierId);
    const newCount = bagItemCount + 1;
    setBagItemCount(newCount);
    if (onBagChange) onBagChange(newCount);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <section id="service-pricing" className={styles.pricingSection}>
      <div className={styles.container}>
        {/* Apple Centered Header */}
        <div className={styles.headerBlock}>
          <div className={styles.headerLogoWrap}>
            <Logo size={52} className={styles.pricingLogo} />
          </div>
          <span className={styles.eyebrow}>NothingBox Services</span>
          <h2 className={styles.headline}>One seamless ecosystem. Simple plans.</h2>
          <p className={styles.subhead}>
            No hidden cloud egress fees. No predatory lock-in. Powered by client-side browser performance.
          </p>
        </div>

        {/* Notification Toast */}
        {showNotification && (
          <div className={styles.notificationToast}>
            <ShoppingBag size={16} className={styles.bagIcon} />
            <span>Service plan added to your Apple Bag. Ready for checkout.</span>
          </div>
        )}

        {/* Pricing Cards */}
        <div className={styles.tiersGrid}>
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`${styles.tierCard} ${tier.isPopular ? styles.tierCardPopular : ''}`}
            >
              {tier.isPopular && (
                <div className={styles.popularBadge}>
                  <Sparkles size={12} />
                  <span>Most Popular</span>
                </div>
              )}

              <div className={styles.tierTop}>
                <h3 className={styles.tierName}>{tier.name}</h3>
                <p className={styles.tierTagline}>{tier.tagline}</p>

                <div className={styles.priceRow}>
                  <span className={styles.priceNumber}>{tier.price}</span>
                  <span className={styles.pricePeriod}>{tier.period}</span>
                </div>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.featuresList}>
                <span className={styles.featuresTitle}>What’s included:</span>
                {tier.features.map((feat, idx) => (
                  <div key={idx} className={styles.featureItem}>
                    <Check size={16} className={styles.checkIcon} />
                    <span className={styles.featureText}>{feat}</span>
                  </div>
                ))}
              </div>

              <div className={styles.cardFooter}>
                <button
                  id={`tier-select-${tier.id}`}
                  className={tier.isPopular ? styles.primaryBtn : styles.secondaryBtn}
                  onClick={() => handleSelectTier(tier.id)}
                >
                  <span>{tier.cta}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
