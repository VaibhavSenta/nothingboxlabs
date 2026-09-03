'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { CORE_PRODUCTS } from '../data/productsData';
import { CoreProduct } from '../types/products';
import { Header } from '../components/Header/Header';
import { AppleHero } from '../components/AppleHero/AppleHero';
import { ApplePromoGrid } from '../components/ApplePromoGrid/ApplePromoGrid';
import { AppleSubdomainCarousel } from '../components/AppleSubdomainCarousel/AppleSubdomainCarousel';
import { ProductModal } from '../components/ProductModal/ProductModal';
import { Footer } from '../components/Footer/Footer';

export default function Home() {
  const [selectedProductForModal, setSelectedProductForModal] =
    useState<CoreProduct | null>(null);

  const handleOpenSpecs = (product: CoreProduct) => {
    setSelectedProductForModal(product);
  };

  const handleScrollTo = (elementId: string) => {
    const elem = document.getElementById(elementId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const chatProduct = CORE_PRODUCTS.find((p) => p.id === 'chat-app') || CORE_PRODUCTS[0];
  const dropProduct = CORE_PRODUCTS.find((p) => p.id === 'p2p-transfer') || CORE_PRODUCTS[1];
  const musicProduct = CORE_PRODUCTS.find((p) => p.id === 'music-player') || CORE_PRODUCTS[2];
  const cinemaProduct = CORE_PRODUCTS.find((p) => p.id === 'video-player') || CORE_PRODUCTS[3];

  return (
    <main className={styles.main}>
      {/* Apple 44px Navigation Bar & Ribbon */}
      <Header
        onSelectProduct={(productId) => handleScrollTo(`hero-${productId}`)}
        onOpenRegistry={() => handleScrollTo('subdomain-carousel')}
      />

      {/* Flagship Apple Hero 1: NothingChat (Dark Titanium) */}
      <AppleHero
        product={chatProduct}
        theme="titanium"
        sectionId="hero-chat"
        onOpenSpecs={handleOpenSpecs}
      />

      {/* Flagship Apple Hero 2: NothingDrop (Deep Ultramarine) */}
      <AppleHero
        product={dropProduct}
        theme="ultramarine"
        sectionId="hero-drop"
        onOpenSpecs={handleOpenSpecs}
      />

      {/* Flagship Apple Hero 3: NothingMusic (Space Black) */}
      <AppleHero
        product={musicProduct}
        theme="spaceblack"
        sectionId="hero-music"
        onOpenSpecs={handleOpenSpecs}
      />

      {/* Flagship Apple Hero 4: NothingCinema 4K (Deep Obsidian) */}
      <AppleHero
        product={cinemaProduct}
        theme="obsidian"
        sectionId="hero-cinema"
        onOpenSpecs={handleOpenSpecs}
      />

      {/* Apple 2-Column Promo Grid (6 Signature Cards) */}
      <ApplePromoGrid
        onOpenSubdomains={() => handleScrollTo('subdomain-carousel')}
        onOpenSpecs={() => handleOpenSpecs(chatProduct)}
      />

      {/* Apple TV+ Style Interactive Filmstrip for 20 Subdomains */}
      <AppleSubdomainCarousel />

      {/* Apple 5-Column Directory & Legal Footnotes Footer */}
      <Footer />

      {/* Apple-Style Technical Specification Sheet Modal */}
      <ProductModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
      />
    </main>
  );
}
