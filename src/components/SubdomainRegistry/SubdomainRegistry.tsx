'use client';

import React, { useState } from 'react';
import styles from './SubdomainRegistry.module.css';
import { SUBDOMAIN_REGISTRY } from '../../data/productsData';
import { SubdomainItem } from '../../types/products';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import {
  Globe,
  ExternalLink,
  Search,
  Server,
  Layers,
  Sparkles,
  ArrowUpRight,
  Radio
} from 'lucide-react';

export const SubdomainRegistry: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Core Flagship',
    'Media & Streaming',
    'Utilities',
    'Infrastructure',
    'Future Expansion'
  ];

  const filteredSubdomains = SUBDOMAIN_REGISTRY.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subdomain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusBadge = (status: SubdomainItem['status']) => {
    switch (status) {
      case 'Active Dev':
        return <Badge variant="blue">Active Dev</Badge>;
      case 'Prototype':
        return <Badge variant="green">Prototype</Badge>;
      case 'Architecture':
        return <Badge variant="orange">Architecture</Badge>;
      case 'Planned Subdomain':
        return <Badge variant="subtle">Planned</Badge>;
      default:
        return <Badge variant="subtle">{status}</Badge>;
    }
  };

  return (
    <section id="subdomain-registry" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.badgeRow}>
            <Badge variant="blue">Subdomain Network Hub</Badge>
            <span className={styles.badgeText}>20 Independent Micro-Sites</span>
          </div>
          <h2 className={styles.heading}>The 20 Subdomain Architecture.</h2>
          <p className={styles.subheading}>
            NothingBox Labs is engineered as a federated suite. Each service runs on its
            own dedicated subdomain, enabling isolated deployment, zero cross-service
            performance degradation, and discrete scaling.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className={styles.filterToolbar}>
          <div className={styles.categoryPills}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.categoryPill} ${selectedCategory === cat ? styles.categoryPillActive : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
                {cat === 'All' && <span className={styles.pillCount}>20</span>}
              </button>
            ))}
          </div>

          <div className={styles.searchBox}>
            <Search size={14} className={styles.searchIcon} />
            <input
              id="subdomain-search-input"
              type="text"
              placeholder="Search subdomain or feature..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>

        {/* Subdomains Grid */}
        <div className={styles.subdomainGrid}>
          {filteredSubdomains.map((item) => (
            <div key={item.id} className={styles.subdomainCard}>
              <div className={styles.cardTopRow}>
                <div className={styles.subdomainTitleGroup}>
                  <div className={styles.subdomainIcon}>
                    <Globe size={16} className={styles.globeIcon} />
                  </div>
                  <div>
                    <h3 className={styles.subdomainName}>{item.name}</h3>
                  </div>
                </div>
                {getStatusBadge(item.status)}
              </div>

              <p className={styles.subdomainDescription}>{item.description}</p>

              <div className={styles.routingInfo}>
                <span className={styles.routingLabel}>Endpoint Target:</span>
                <span className={styles.subdomainHost}>{item.subdomain}</span>
              </div>

              <div className={styles.cardBottomRow}>
                <div className={styles.portBadge}>
                  <Server size={12} className={styles.serverIcon} />
                  <span>{item.portOrRoute}</span>
                </div>

                <a
                  href={`https://${item.subdomain}`}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.openSubdomainBtn}
                >
                  <span>Connect</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
