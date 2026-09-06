'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { CORE_PRODUCTS } from '../data/productsData';
import { CoreProduct } from '../types/products';
import { Header } from '../components/Header/Header';
import { LandingHero } from '../components/LandingHero/LandingHero';
import { AppleHero } from '../components/AppleHero/AppleHero';
import { ApplePromoGrid } from '../components/ApplePromoGrid/ApplePromoGrid';
import { AppleComparison } from '../components/AppleComparison/AppleComparison';
import { TrustAndCompatibility } from '../components/TrustAndCompatibility/TrustAndCompatibility';
import { AppleFAQ } from '../components/AppleFAQ/AppleFAQ';
import { AppleFreeEcosystem } from '../components/AppleFreeEcosystem/AppleFreeEcosystem';
import { ProductModal } from '../components/ProductModal/ProductModal';
import { Footer } from '../components/Footer/Footer';

export default function Home() {
  const [selectedProductForModal, setSelectedProductForModal] =
    useState<CoreProduct | null>(null);

  const handleOpenSpecs = (product: CoreProduct) => {
    setSelectedProductForModal(product);
  };

  const handleOpenSpecsBySlug = (slug: string) => {
    const found = CORE_PRODUCTS.find((p) => p.slug === slug || p.id === slug);
    if (found) {
      setSelectedProductForModal(found);
    } else {
      setSelectedProductForModal(CORE_PRODUCTS[0]);
    }
  };

  const chatProduct = CORE_PRODUCTS.find((p) => p.id === 'chat-app') || CORE_PRODUCTS[0];
  const dropProduct = CORE_PRODUCTS.find((p) => p.id === 'p2p-transfer') || CORE_PRODUCTS[1];
  const musicProduct = CORE_PRODUCTS.find((p) => p.id === 'music-player') || CORE_PRODUCTS[2];
  const cinemaProduct = CORE_PRODUCTS.find((p) => p.id === 'video-player') || CORE_PRODUCTS[3];

  return (
    <main className={styles.main}>
      {/* Apple 44px Blur Navigation Bar */}
      <Header />

      {/* Full Device Height Landing / Ecosystem Introduction: NothingBox Labs */}
      <LandingHero
        onExploreChat={() => {
          const elem = document.getElementById('hero-chat');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }}
        onExploreSubdomains={() => {
          const elem = document.getElementById('service-comparison');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }}
        onExploreFree={() => {
          const elem = document.getElementById('service-comparison');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Zero-Knowledge Security Trust Bar & Live Browser Hardware Compatibility Audit */}
      <TrustAndCompatibility />

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

      {/* Apple 2-Column Promo Grid (Architectural Breakthroughs) */}
      <ApplePromoGrid
        onOpenSubdomains={() => {
          const elem = document.getElementById('service-comparison');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenSpecs={() => handleOpenSpecs(chatProduct)}
      />

      {/* Apple 4-Column "Which Service is Right for You?" Comparison Matrix */}
      <AppleComparison onOpenSpecs={handleOpenSpecsBySlug} />

      {/* Apple-Style Frequently Asked Questions Accordion */}
      <AppleFAQ />

      {/* Open Architecture - Zero Fees & Zero Cloud Dependencies */}
      <AppleFreeEcosystem onOpenSpecsBySlug={handleOpenSpecsBySlug} />

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
