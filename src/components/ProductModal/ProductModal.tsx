'use client';

import React from 'react';
import styles from './ProductModal.module.css';
import { CoreProduct } from '../../types/products';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import { X, Cpu, HardDrive, Network, MemoryStick, CheckCircle2, ExternalLink } from 'lucide-react';

interface ProductModalProps {
  product: CoreProduct | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        id="product-spec-modal"
        className={styles.modalCard}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <div className={styles.headerInfo}>
            <div className={styles.tagGroup}>
              <Badge variant="blue">{product.category}</Badge>
              <Badge variant="subtle">{product.status}</Badge>
            </div>
            <h3 className={styles.title}>{product.title}</h3>
            <span className={styles.subdomain}>{product.subdomain}</span>
          </div>

          <button
            id="close-spec-modal-btn"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.sectionBlock}>
            <h4 className={styles.sectionTitle}>Core Mission & Purpose</h4>
            <p className={styles.purposeText}>{product.corePurpose}</p>
          </div>

          <div className={styles.archGrid}>
            <div className={styles.archCard}>
              <div className={styles.archTitleRow}>
                <HardDrive size={16} className={styles.archIconBlue} />
                <span>Storage Strategy</span>
              </div>
              <p className={styles.archValue}>
                {product.architecture.storageStrategy}
              </p>
            </div>

            <div className={styles.archCard}>
              <div className={styles.archTitleRow}>
                <Network size={16} className={styles.archIconCyan} />
                <span>Network & Transport</span>
              </div>
              <p className={styles.archValue}>
                {product.architecture.networkLayer}
              </p>
            </div>

            <div className={styles.archCard}>
              <div className={styles.archTitleRow}>
                <MemoryStick size={16} className={styles.archIconPurple} />
                <span>Memory Management</span>
              </div>
              <p className={styles.archValue}>
                {product.architecture.memoryManagement}
              </p>
            </div>

            <div className={styles.archCard}>
              <div className={styles.archTitleRow}>
                <Cpu size={16} className={styles.archIconOrange} />
                <span>Technology Stack</span>
              </div>
              <div className={styles.pillList}>
                {product.architecture.technology.map((tech) => (
                  <span key={tech} className={styles.techPill}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.sectionBlock}>
            <h4 className={styles.sectionTitle}>Architectural Advantages</h4>
            <div className={styles.benefitsList}>
              {product.architecture.keyBenefits.map((benefit, index) => (
                <div key={index} className={styles.benefitRow}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.modalFooter}>
          <a
            href={product.subdomainTarget}
            target="_blank"
            rel="noreferrer"
            className={styles.subdomainExternalLink}
          >
            <span>Target: {product.subdomain}</span>
            <ExternalLink size={14} />
          </a>
          <Button variant="secondary" size="md" onClick={onClose}>
            Done
          </Button>
        </div>
      </div>
    </div>
  );
};
