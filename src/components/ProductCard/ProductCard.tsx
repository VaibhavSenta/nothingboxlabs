import React from 'react';
import styles from './ProductCard.module.css';
import { CoreProduct } from '../../types/products';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import {
  MessageSquare,
  Share2,
  Music,
  Film,
  ArrowRight,
  ExternalLink,
  Cpu
} from 'lucide-react';

interface ProductCardProps {
  product: CoreProduct;
  onExplore: (product: CoreProduct) => void;
  onViewArchitecture: (product: CoreProduct) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onExplore,
  onViewArchitecture,
}) => {
  const getIcon = () => {
    switch (product.iconName) {
      case 'MessageSquare':
        return <MessageSquare size={22} className={styles.iconBlue} />;
      case 'Share2':
        return <Share2 size={22} className={styles.iconCyan} />;
      case 'Music':
        return <Music size={22} className={styles.iconPurple} />;
      case 'Film':
        return <Film size={22} className={styles.iconOrange} />;
      default:
        return <Cpu size={22} />;
    }
  };

  const getStatusBadgeVariant = () => {
    switch (product.status) {
      case 'In Development':
        return 'blue';
      case 'Prototype Ready':
        return 'green';
      case 'Architecture Finalized':
        return 'orange';
      default:
        return 'subtle';
    }
  };

  return (
    <div id={`product-card-${product.slug}`} className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.iconWrap}>{getIcon()}</div>
        <div className={styles.headerMeta}>
          <Badge variant={getStatusBadgeVariant()}>{product.status}</Badge>
        </div>
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <p className={styles.tagline}>{product.tagline}</p>
        <p className={styles.purpose}>{product.corePurpose}</p>
      </div>

      <div className={styles.featuresPreview}>
        <span className={styles.previewTitle}>Key Breakthroughs:</span>
        <ul className={styles.featureList}>
          {product.features.slice(0, 3).map((feat) => (
            <li key={feat.id} className={styles.featureItem}>
              <span className={styles.bulletDot}></span>
              <span className={styles.featureText}>{feat.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.subdomainBar}>
        <span className={styles.subdomainLabel}>Planned Host:</span>
        <span className={styles.subdomainUrl}>{product.subdomain}</span>
      </div>

      <div className={styles.cardFooter}>
        <Button
          id={`inspect-btn-${product.slug}`}
          variant="primary"
          size="sm"
          onClick={() => onExplore(product)}
          icon={<ArrowRight size={14} />}
        >
          Inspect Live Demo
        </Button>
        <Button
          id={`arch-btn-${product.slug}`}
          variant="glass"
          size="sm"
          onClick={() => onViewArchitecture(product)}
        >
          Tech Specs
        </Button>
      </div>
    </div>
  );
};
