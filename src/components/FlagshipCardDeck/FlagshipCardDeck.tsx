'use client';

import React, { useState, useRef, useCallback } from 'react';
import styles from './FlagshipCardDeck.module.css';
import { GlassBlobCard, GlassCardVariant } from '../GlassBlobCard';
import { Sparkles } from 'lucide-react';

export interface FlagshipCardItem {
  id: string;
  title: string;
  badge: string;
  subdomain: string;
  rotation: string;
  variant: GlassCardVariant;
  icon: React.ReactNode;
}

interface FlagshipCardDeckProps {
  cards: FlagshipCardItem[];
  onCardClick: (id: string) => void;
}

export const FlagshipCardDeck: React.FC<FlagshipCardDeckProps> = ({
  cards,
  onCardClick,
}) => {
  const N = cards.length;
  // k: index of current top item (0 to N-1)
  const [k, setK] = useState<number>(0);
  const [animatingCard, setAnimatingCard] = useState<number | null>(null);
  const [dragX, setDragX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const touchStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const hasMovedRef = useRef<boolean>(false);

  // Cycle to next card: Top card animates out to the back, behind card steps forward
  const cycleToNext = useCallback(() => {
    if (animatingCard !== null) return;
    const currentTop = k;
    setAnimatingCard(currentTop);

    setTimeout(() => {
      setK((prevK) => (prevK + 1) % N);
      setAnimatingCard(null);
    }, 320);
  }, [animatingCard, k, N]);

  // Touch handlers: Support gentle touch swipe as well as tap
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    hasMovedRef.current = false;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    const dx = touch.clientX - touchStartRef.current.x;
    const dy = touch.clientY - touchStartRef.current.y;

    if (Math.abs(dx) > Math.abs(dy)) {
      hasMovedRef.current = true;
      const clampedDx = Math.max(-120, Math.min(120, dx));
      setDragX(clampedDx);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    const threshold = 35; // swipe threshold

    if (hasMovedRef.current && Math.abs(dragX) > threshold) {
      // Swiping advances to next card (backward not needed)
      setDragX(0);
      cycleToNext();
    } else {
      setDragX(0);
    }
  };

  // Stack calculation for mobile cards
  const getStackStyle = (index: number) => {
    // If this card is actively running the exit animation, CSS takes over
    if (index === animatingCard) {
      return {};
    }

    // Relative position from current top item: 0 is top, 1 is 1st behind, etc.
    const offset = (index - k + N) % N;

    if (offset === 0) {
      // Current top active card
      const rotationDeg = dragX * 0.08;
      return {
        zIndex: 10,
        opacity: 1,
        transform: `translateX(calc(-50% + ${dragX}px)) translateY(0px) rotate(${rotationDeg}deg) scale(1)`,
        pointerEvents: 'auto' as const,
        filter: 'none',
      };
    } else if (offset === 1) {
      // 1st card behind
      return {
        zIndex: 8,
        opacity: 0.88,
        transform: `translateX(-50%) translateY(14px) rotate(3deg) scale(0.93)`,
        pointerEvents: 'none' as const,
        filter: 'brightness(0.98)',
      };
    } else if (offset === 2) {
      // 2nd card behind
      return {
        zIndex: 6,
        opacity: 0.65,
        transform: `translateX(-50%) translateY(26px) rotate(-3deg) scale(0.86)`,
        pointerEvents: 'none' as const,
        filter: 'brightness(0.96)',
      };
    } else {
      // 3rd card behind (bottom of deck)
      return {
        zIndex: 4,
        opacity: 0.42,
        transform: `translateX(-50%) translateY(38px) rotate(2deg) scale(0.80)`,
        pointerEvents: 'none' as const,
        filter: 'brightness(0.93)',
      };
    }
  };

  return (
    <section
      id="flagship-card-deck-section"
      className={styles.container}
      style={
        {
          '--n': N,
          '--k': k,
        } as React.CSSProperties
      }
    >
      {/* 1. Desktop View: Side-by-side wide cards row */}
      <div className={styles.desktopGrid}>
        {cards.map((card) => (
          <GlassBlobCard
            key={card.id}
            id={card.id}
            title={card.title}
            badge={card.badge}
            subdomain={card.subdomain}
            icon={card.icon}
            rotation={card.rotation}
            variant={card.variant}
            onClick={() => onCardClick(card.id)}
            onActionClick={() => onCardClick(card.id)}
            ariaLabel={`Jump to ${card.title} demo`}
          />
        ))}
      </div>

      {/* 2. Mobile View: Interactive Click-to-Cycle 3D Stack */}
      <div className={styles.mobileStackSection}>
        {/* Helper Hint Pill */}
        <div className={styles.swipeHintPill}>
          <Sparkles size={13} className={styles.hintSwipeIcon} />
          <span>
            Tap card to flip • <strong>{k + 1}</strong> of {N}
          </span>
        </div>

        {/* 3D Stack Stage */}
        <div
          id="mobile-card-stack-stage"
          className={`${styles.stackStage} ${isDragging ? styles.dragging : ''}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          {cards.map((card, index) => {
            const isTop = (index - k + N) % N === 0;
            const isExiting = index === animatingCard;

            return (
              <GlassBlobCard
                key={`stacked-${card.id}`}
                id={`stacked-${card.id}`}
                title={card.title}
                badge={card.badge}
                subdomain={card.subdomain}
                icon={card.icon}
                rotation={card.rotation}
                variant={card.variant}
                className={`${styles.stackedCard} ${isExiting ? styles.cardExiting : ''}`}
                style={getStackStyle(index)}
                onClick={() => {
                  // If top card is tapped, cycle to the next card
                  if (!hasMovedRef.current && isTop && !isExiting) {
                    cycleToNext();
                  }
                }}
                onActionClick={() => {
                  // Direct jump to demo when "Explore" pill is tapped
                  onCardClick(card.id);
                }}
                tabIndex={isTop ? 0 : -1}
                ariaLabel={
                  isTop
                    ? `Active card: ${card.title}. Tap to cycle deck, or tap Explore to view demo.`
                    : `${card.title} (stacked)`
                }
              />
            );
          })}
        </div>

        {/* Clean Dot Indicators (No left/right arrow buttons) */}
        <div className={styles.stackControls}>
          <div className={styles.dotsList} role="tablist" aria-label="Card pagination">
            {cards.map((card, idx) => (
              <button
                key={`dot-${card.id}`}
                className={`${styles.dot} ${idx === k ? styles.dotActive : ''}`}
                onClick={() => {
                  if (animatingCard === null && idx !== k) {
                    cycleToNext();
                  }
                }}
                aria-label={`Card ${idx + 1}: ${card.title}`}
                role="tab"
                aria-selected={idx === k}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
