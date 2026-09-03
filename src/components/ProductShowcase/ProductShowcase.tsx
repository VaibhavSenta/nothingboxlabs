import React from 'react';
import styles from './ProductShowcase.module.css';
import { CoreProduct } from '../../types/products';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import { InteractiveChatDemo } from '../InteractiveChatDemo/InteractiveChatDemo';
import { InteractiveTransferDemo } from '../InteractiveTransferDemo/InteractiveTransferDemo';
import { InteractiveMusicDemo } from '../InteractiveMusicDemo/InteractiveMusicDemo';
import { InteractiveVideoDemo } from '../InteractiveVideoDemo/InteractiveVideoDemo';
import {
  ExternalLink,
  Cpu,
  Layers,
  Sparkles,
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface ProductShowcaseProps {
  product: CoreProduct;
  reversed?: boolean;
  onOpenSpecs: (product: CoreProduct) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  product,
  reversed = false,
  onOpenSpecs,
}) => {
  const renderInteractiveDemo = () => {
    switch (product.id) {
      case 'chat-app':
        return <InteractiveChatDemo />;
      case 'p2p-transfer':
        return <InteractiveTransferDemo />;
      case 'music-player':
        return <InteractiveMusicDemo />;
      case 'video-player':
        return <InteractiveVideoDemo />;
      default:
        return null;
    }
  };

  return (
    <section
      id={`product-${product.id}`}
      className={styles.showcaseSection}
    >
      <div className={styles.container}>
        <div
          className={`${styles.layoutWrapper} ${reversed ? styles.layoutReversed : ''}`}
        >
          {/* Left Column: Narrative, Architecture & Feature Specs */}
          <div className={styles.infoColumn}>
            <div className={styles.productMetaRow}>
              <Badge variant="blue">{product.category}</Badge>
              <span className={styles.subdomainTag}>
                Planned: {product.subdomain}
              </span>
            </div>

            <h2 className={styles.productHeading}>{product.title}</h2>
            <p className={styles.productTagline}>{product.tagline}</p>
            <p className={styles.productPurpose}>{product.corePurpose}</p>

            {/* Feature Cards List */}
            <div className={styles.featuresContainer}>
              {product.features.map((feature, idx) => (
                <div key={feature.id} className={styles.featureBox}>
                  <div className={styles.featureBoxHeader}>
                    <span className={styles.featureIndex}>0{idx + 1}</span>
                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                    {feature.badge && (
                      <span className={styles.featureBadge}>{feature.badge}</span>
                    )}
                  </div>
                  <p className={styles.featureDescription}>
                    {feature.description}
                  </p>
                  {feature.apiIntegration && (
                    <div className={styles.apiIntegrationTag}>
                      <span className={styles.apiLabel}>Native API:</span>
                      <span className={styles.apiValue}>
                        {feature.apiIntegration}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className={styles.actionsRow}>
              <Button
                id={`specs-btn-${product.slug}`}
                variant="primary"
                size="md"
                onClick={() => onOpenSpecs(product)}
                icon={<Cpu size={16} />}
              >
                Deep Architecture Specs
              </Button>
              <a
                href={product.subdomainTarget}
                target="_blank"
                rel="noreferrer"
                className={styles.subdomainLinkBtn}
              >
                <span>Visit {product.subdomain}</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: High-Precision Live Interactive Simulator */}
          <div className={styles.demoColumn}>
            <div className={styles.demoWrapper}>
              <div className={styles.deviceGlow}></div>
              {renderInteractiveDemo()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
