import React from 'react';
import styles from './EcosystemGrid.module.css';
import { CORE_PRODUCTS } from '../../data/productsData';
import { ProductCard } from '../ProductCard/ProductCard';
import { CoreProduct } from '../../types/products';
import { Badge } from '../Badge/Badge';

interface EcosystemGridProps {
  onExploreProduct: (product: CoreProduct) => void;
  onViewArchitecture: (product: CoreProduct) => void;
}

export const EcosystemGrid: React.FC<EcosystemGridProps> = ({
  onExploreProduct,
  onViewArchitecture,
}) => {
  return (
    <section id="flagship-products" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrowGroup}>
            <Badge variant="blue">Ecosystem Lineup</Badge>
            <span className={styles.eyebrowText}>Phase 1 Architectural Suite</span>
          </div>
          <h2 className={styles.title}>Four Flagship Breakthroughs.</h2>
          <p className={styles.subtitle}>
            Each product is engineered from the ground up as a standalone high-performance
            web utility, planned for independent subdomain deployment across NothingBox Labs.
          </p>
        </div>

        <div className={styles.grid}>
          {CORE_PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onExplore={onExploreProduct}
              onViewArchitecture={onViewArchitecture}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
