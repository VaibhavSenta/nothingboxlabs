import React from 'react';
import styles from './Hero.module.css';
import { Button } from '../Button/Button';
import { Badge } from '../Badge/Badge';
import { ArrowRight, Layers, Cpu, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onSubdomainClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onSubdomainClick,
}) => {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.glowSpotlight}></div>
      <div className={styles.contentContainer}>
        <div className={styles.badgeRow}>
          <Badge variant="blue">Ecosystem 1.0 Initial Architecture</Badge>
          <span className={styles.badgeSeparator}>•</span>
          <span className={styles.ecosystemMeta}>20 Subdomain Network in Progress</span>
        </div>

        <h1 className={styles.mainHeading}>
          NothingBox Labs.
          <span className={styles.headlineGradient}>
            Engineered for raw browser power.
          </span>
        </h1>

        <p className={styles.subheadline}>
          A suite of flagship web utilities pushing modern browser APIs to the threshold.
          From peer-to-peer 50GB file streaming and OPFS-buffered 4K cinema playback to
          zero-lag localized chat and ad-free music architecture.
        </p>

        <div className={styles.ctaGroup}>
          <Button
            id="hero-explore-products-btn"
            variant="secondary"
            size="lg"
            onClick={onExploreClick}
            icon={<ArrowRight size={18} />}
          >
            Explore Flagship Apps
          </Button>
          <Button
            id="hero-view-subdomains-btn"
            variant="glass"
            size="lg"
            onClick={onSubdomainClick}
            icon={<Layers size={18} />}
          >
            20 Subdomains Map
          </Button>
        </div>

        {/* Apple-style Architecture Metric Ribbon */}
        <div className={styles.metricRibbon}>
          <div className={styles.metricCard}>
            <div className={styles.metricIconWrap}>
              <Cpu size={20} className={styles.metricIconBlue} />
            </div>
            <div className={styles.metricContent}>
              <span className={styles.metricValue}>OPFS Virtual RAM</span>
              <span className={styles.metricLabel}>4GB–5GB Local Buffer for 4K Playback</span>
            </div>
          </div>

          <div className={styles.metricCard}>
            <div className={styles.metricIconWrap}>
              <ShieldCheck size={20} className={styles.metricIconCyan} />
            </div>
            <div className={styles.metricContent}>
              <span className={styles.metricValue}>0% Server Footprint</span>
              <span className={styles.metricLabel}>WebRTC Direct P2P Device-to-Device</span>
            </div>
          </div>

          <div className={styles.metricCard}>
            <div className={styles.metricIconWrap}>
              <Zap size={20} className={styles.metricIconPurple} />
            </div>
            <div className={styles.metricContent}>
              <span className={styles.metricValue}>Native APIs</span>
              <span className={styles.metricLabel}>Maps • Translate • YouTube Audio Trim</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
