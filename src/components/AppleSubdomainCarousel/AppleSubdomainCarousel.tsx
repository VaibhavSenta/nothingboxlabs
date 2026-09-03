'use client';

import React, { useState, useRef } from 'react';
import styles from './AppleSubdomainCarousel.module.css';
import { SUBDOMAIN_REGISTRY } from '../../data/productsData';
import {
  ChevronLeft,
  ChevronRight,
  Search,
  ExternalLink,
  Globe,
  Radio,
  Server
} from 'lucide-react';

export const AppleSubdomainCarousel: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const sliderRef = useRef<HTMLDivElement>(null);

  const categories = [
    'All',
    'Core Flagship',
    'Media & Streaming',
    'Utilities',
    'Infrastructure',
    'Future Expansion'
  ];

  const filteredItems = SUBDOMAIN_REGISTRY.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subdomain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="subdomain-carousel" className={styles.carouselSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.headerInfo}>
          <span className={styles.eyebrow}>The 20 Subdomain Suite</span>
          <h3 className={styles.title}>Explore the Federated Mesh.</h3>
          <p className={styles.subhead}>
            Each utility runs independently on dedicated subdomains, eliminating
            shared runtime bottlenecks and allowing isolated deployments.
          </p>
        </div>

        <div className={styles.controlsRow}>
          <button
            className={styles.navArrowBtn}
            onClick={() => scrollSlider('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className={styles.navArrowBtn}
            onClick={() => scrollSlider('right')}
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Categories & Search Toolbar */}
      <div className={styles.filterToolbar}>
        <div className={styles.categoryPills}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.pillBtn} ${selectedCategory === cat ? styles.pillBtnActive : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.searchBox}>
          <Search size={14} className={styles.searchIcon} />
          <input
            id="carousel-search"
            type="text"
            placeholder="Search subdomains..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </div>

      {/* Filmstrip Slider */}
      <div ref={sliderRef} className={styles.sliderTrack}>
        {filteredItems.map((item) => (
          <div key={item.id} className={styles.streamCard}>
            <div className={styles.cardCover}>
              <div className={styles.coverTopRow}>
                <span className={styles.portLabel}>
                  <Server size={12} />
                  <span>{item.portOrRoute}</span>
                </span>
                <span className={styles.statusTag}>{item.status}</span>
              </div>

              <div className={styles.coverCenter}>
                <div className={styles.globeWrap}>
                  <Globe size={24} className={styles.globeIcon} />
                </div>
                <h4 className={styles.itemName}>{item.name}</h4>
                <span className={styles.itemCategory}>{item.category}</span>
              </div>

              <div className={styles.coverBottom}>
                <p className={styles.itemDesc}>{item.description}</p>
                <div className={styles.endpointPill}>
                  <span>{item.subdomain}</span>
                </div>
              </div>
            </div>

            <div className={styles.cardActions}>
              <a
                href={`https://${item.subdomain}`}
                target="_blank"
                rel="noreferrer"
                className={styles.launchBtn}
              >
                <span>Connect</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
