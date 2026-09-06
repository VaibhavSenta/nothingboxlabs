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
  // Current top card index (0 to N-1)
  const [k, setK] = useState<number>(0);
  const [flingingIndex, setFlingingIndex] = useState<number | null>(null);
  const [dragX, setDragX] = useState<number>(0);

  const touchStartPos = useRef<{ x: number; y: number; time: number }>({ x: 0, y: 0, time: 0 });
  const isDraggingRef = useRef<boolean>(false);
  const lastActionTime = useRef<number>(0);
  const lastTouchTime = useRef<number>(0);

  // Cycle to next card:
  // 1. Current top card flings out to the right with card tilt
  // 2. k increments by 1: behind card becomes top, old top card smoothly slides into bottom of deck
  const cycleToNext = useCallback(() => {
    const now = Date.now();
    if (now - lastActionTime.current < 320) return; // Debounce active animation
    lastActionTime.current = now;

    const currentTop = k;
    setFlingingIndex(currentTop);

    setTimeout(() => {
      setK((prevK) => (prevK + 1) % N);
      setFlingingIndex(null);
    }, 180);
  }, [k, N]);

  // Touch handlers for mobile devices
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const t = e.touches[0];
    touchStartPos.current = { x: t.clientX, y: t.clientY, time: Date.now() };
    isDraggingRef.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!e.touches[0]) return;
    const t = e.touches[0];
    const dx = t.clientX - touchStartPos.current.x;
    isDraggingRef.current = true;
    setDragX(Math.max(-80, Math.min(80, dx)));
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const t = e.changedTouches?.[0];
    setDragX(0);

    if (!t) {
      cycleToNext();
      return;
    }

    const dt = Date.now() - touchStartPos.current.time;
    const dx = t.clientX - touchStartPos.current.x;
    const dy = t.clientY - touchStartPos.current.y;
    const absX = Math.abs(dx);
    const absY = Math.abs(dy);

    lastTouchTime.current = Date.now();

    // 1. Swipe gesture (any horizontal motion > 20px)
    if (absX > 20) {
      cycleToNext();
      return;
    }

    // 2. Tap gesture (within 35px radius allowance for human thumb, duration < 600ms)
    if (dt < 600 && absX < 35 && absY < 35) {
      cycleToNext();
      return;
    }
  };

  // Safe click handler for mouse / desktop DevTools
  const handleStageClick = () => {
    // If touch was already handled in the last 500ms, ignore duplicate synthetic click
    if (Date.now() - lastTouchTime.current < 500) return;
    cycleToNext();
  };

  // Stack calculation for mobile cards
  const getStackStyle = (index: number) => {
    // If this card is currently flinging out to the side
    if (index === flingingIndex) {
      return {
        zIndex: 22,
        opacity: 0.96,
        transform: 'translateX(calc(-50% + 140px)) translateY(-22px) rotate(16deg) scale(1.02)',
        pointerEvents: 'none' as const,
      };
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
        transform: 'translateX(-50%) translateY(14px) rotate(3deg) scale(0.93)',
        pointerEvents: 'none' as const,
        filter: 'brightness(0.98)',
      };
    } else if (offset === 2) {
      // 2nd card behind
      return {
        zIndex: 6,
        opacity: 0.65,
        transform: 'translateX(-50%) translateY(26px) rotate(-3deg) scale(0.86)',
        pointerEvents: 'none' as const,
        filter: 'brightness(0.96)',
      };
    } else {
      // 3rd card behind (bottom of deck)
      return {
        zIndex: 4,
        opacity: 0.42,
        transform: 'translateX(-50%) translateY(38px) rotate(2deg) scale(0.80)',
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
        {/* Helper Hint Pill (Clickable) */}
        <button
          type="button"
          className={styles.swipeHintPill}
          onClick={cycleToNext}
          aria-label="Tap to flip card"
        >
          <Sparkles size={13} className={styles.hintSwipeIcon} />
          <span>Tap card to flip</span>
        </button>

        {/* 3D Stack Stage */}
        <div
          id="mobile-card-stack-stage"
          className={styles.stackStage}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          onClick={handleStageClick}
        >
          {cards.map((card, index) => {
            const isTop = (index - k + N) % N === 0;
            const isFlinging = index === flingingIndex;

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
                className={`${styles.stackedCard} ${isFlinging ? styles.cardFlinging : ''}`}
                style={getStackStyle(index)}
                onClick={handleStageClick}
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

        {/* Clean Dot Indicators */}
        <div className={styles.stackControls}>
          <div className={styles.dotsList} role="tablist" aria-label="Card pagination">
            {cards.map((card, idx) => (
              <button
                key={`dot-${card.id}`}
                className={`${styles.dot} ${idx === k ? styles.dotActive : ''}`}
                onClick={() => setK(idx)}
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
