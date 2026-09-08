'use client';

import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { Logo } from '../Logo/Logo';
import {
  Menu,
  X,
  ChevronRight,
  MessageSquare,
  Share2,
  Music,
  Film,
  Layers,
  ArrowRight,
  ShieldCheck,
  HelpCircle
} from 'lucide-react';

interface HeaderProps {
  activeView?: string;
  onNavigate?: (view: string) => void;
  onSelectProduct?: (productId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView = 'home',
  onNavigate,
  onSelectProduct,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollTo = (elementId: string) => {
    setMobileMenuOpen(false);
    const elem = document.getElementById(elementId);
    if (elem) {
      const headerOffset = 70;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { label: 'Overview', target: 'landing-hero' },
    { label: 'Security', target: 'trust-compatibility' },
    { label: 'NothingChat', target: 'hero-chat' },
    { label: 'NothingDrop', target: 'hero-drop' },
    { label: 'NothingMusic', target: 'hero-music' },
    { label: 'NothingCinema', target: 'hero-cinema' },
    { label: 'FAQ', target: 'faq-section' },
  ];

  const mobileLinks = [
    {
      label: 'Overview',
      desc: 'Architecture & ecosystem',
      target: 'landing-hero',
      icon: <Layers size={18} className={styles.mobileIconBlue} />,
    },
    {
      label: 'Security & Compatibility',
      desc: 'Zero-Knowledge browser audit',
      target: 'trust-compatibility',
      icon: <ShieldCheck size={18} className={styles.mobileIconGreen} />,
    },
    {
      label: 'NothingChat',
      desc: 'Encrypted P2P Messaging',
      target: 'hero-chat',
      icon: <MessageSquare size={18} className={styles.mobileIconBlue} />,
    },
    {
      label: 'NothingDrop',
      desc: 'Direct P2P File Transfer',
      target: 'hero-drop',
      icon: <Share2 size={18} className={styles.mobileIconGreen} />,
    },
    {
      label: 'NothingMusic',
      desc: 'Listen to the Mood',
      target: 'hero-music',
      icon: <Music size={18} className={styles.mobileIconPurple} />,
    },
    {
      label: 'NothingCinema',
      desc: 'Offline Web Player',
      target: 'hero-cinema',
      icon: <Film size={18} className={styles.mobileIconOrange} />,
    },
    {
      label: 'FAQ',
      desc: 'Common technical questions',
      target: 'faq-section',
      icon: <HelpCircle size={18} className={styles.mobileIconBlue} />,
    },
  ];

  return (
    <header
      id="main-header"
      className={`${styles.globalNav} ${isScrolled ? styles.navScrolled : ''}`}
    >
      <div className={styles.navContainer}>
        {/* Brand Logo */}
        <button
          id="apple-logo-btn"
          className={styles.appleLogoBtn}
          onClick={() => scrollTo('landing-hero')}
          aria-label="NothingBox Labs Home"
        >
          <Logo size={32} className={styles.brandLogoSvg} />
          <span className={styles.appleBrandText}>NothingBox Labs</span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className={styles.navLinksList} aria-label="Main Navigation">
          {navItems.map((item) => (
            <button
              key={item.target}
              id={`nav-link-${item.target}`}
              className={styles.navItem}
              onClick={() => scrollTo(item.target)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className={styles.navUtilities}>
          <button
            id="nav-cta-btn"
            className={styles.desktopCtaBtn}
            onClick={() => scrollTo('hero-chat')}
            aria-label="Explore products"
          >
            <span>Explore</span>
            <ArrowRight size={13} className={styles.ctaArrowIcon} />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobile-nav-toggle"
            type="button"
            className={styles.mobileHamburger}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMobileMenuOpen((prev) => !prev);
            }}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop & Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-backdrop"
          className={styles.mobileBackdrop}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="mobile-nav-drawer"
            className={styles.mobileDropdownMenu}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.mobileMenuHeader}>
              <span className={styles.mobileMenuSubtitle}>Products & Services</span>
            </div>

            <div className={styles.mobileLinksContainer}>
              {mobileLinks.map((link) => (
                <button
                  key={link.target}
                  id={`mobile-link-${link.target}`}
                  type="button"
                  className={styles.mobileMenuLinkCard}
                  onClick={() => scrollTo(link.target)}
                >
                  <div className={styles.mobileLinkIconWrap}>{link.icon}</div>
                  <div className={styles.mobileLinkTextWrap}>
                    <span className={styles.mobileLinkTitle}>{link.label}</span>
                    <span className={styles.mobileLinkDesc}>{link.desc}</span>
                  </div>
                  <ChevronRight size={16} className={styles.mobileLinkChevron} />
                </button>
              ))}
            </div>

            <div className={styles.mobileMenuFooter}>
              <button
                id="mobile-launch-suite-btn"
                type="button"
                className={styles.mobileLaunchBtn}
                onClick={() => scrollTo('hero-chat')}
              >
                <span>Launch NothingBox Suite</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
