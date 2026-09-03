'use client';

import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { Logo } from '../Logo/Logo';
import {
  Search,
  Menu,
  X,
  ChevronRight,
  ExternalLink,
  Cpu,
  Layers,
  HardDrive,
  Share2,
  Music,
  Video
} from 'lucide-react';

interface HeaderProps {
  activeView?: string;
  onNavigate?: (view: string) => void;
  onSelectProduct?: (productId: string) => void;
  onOpenRegistry?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView = 'home',
  onNavigate,
  onSelectProduct,
  onOpenRegistry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (elementId: string) => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
    setActiveDropdown(null);
    const elem = document.getElementById(elementId);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Overview (NothingBox Labs)', target: 'landing-hero' },
    { label: 'NothingChat (P2P Messaging)', target: 'hero-chat' },
    { label: 'NothingDrop (WebRTC 50GB)', target: 'hero-drop' },
    { label: 'NothingMusic (OPFS Audio)', target: 'hero-music' },
    { label: 'NothingCinema (4K Chunk Stream)', target: 'hero-cinema' },
    { label: '20 Subdomain Network Mesh', target: 'subdomain-carousel' },
    { label: 'Compare All Services', target: 'service-comparison' },
    { label: '100% Free Ecosystem', target: 'free-ecosystem' },
  ];

  return (
    <>
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
            <Logo size={28} className={styles.brandLogoSvg} />
            <span className={styles.appleBrandText}>NothingBox Labs</span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className={styles.navLinksList}>
            <button
              id="nav-link-overview"
              className={styles.navItem}
              onClick={() => scrollTo('landing-hero')}
            >
              Overview
            </button>
            <button
              id="nav-link-chat"
              className={styles.navItem}
              onClick={() => scrollTo('hero-chat')}
            >
              NothingChat
            </button>
            <button
              id="nav-link-drop"
              className={styles.navItem}
              onClick={() => scrollTo('hero-drop')}
            >
              NothingDrop
            </button>
            <button
              id="nav-link-music"
              className={styles.navItem}
              onClick={() => scrollTo('hero-music')}
            >
              NothingMusic
            </button>
            <button
              id="nav-link-cinema"
              className={styles.navItem}
              onClick={() => scrollTo('hero-cinema')}
            >
              NothingCinema
            </button>
            <button
              id="nav-link-subdomains"
              className={styles.navItem}
              onClick={() => scrollTo('subdomain-carousel')}
            >
              20 Services
            </button>
            <button
              id="nav-link-compare"
              className={styles.navItem}
              onClick={() => scrollTo('service-comparison')}
            >
              Compare
            </button>
            <button
              id="nav-link-free"
              className={styles.navItemHighlight}
              onClick={() => scrollTo('free-ecosystem')}
            >
              100% Free
            </button>
          </nav>

          {/* Nav Utilities: Search & Free Pill */}
          <div className={styles.navUtilities}>
            <button
              id="nav-search-toggle"
              className={styles.utilityBtn}
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search NothingBox Labs"
            >
              <Search size={15} />
            </button>

            <button
              id="nav-free-pill"
              className={styles.freePillBtn}
              onClick={() => scrollTo('free-ecosystem')}
              aria-label="100% Free & Open"
            >
              <span>Free</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-nav-toggle"
              className={styles.mobileHamburger}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Apple-style Interactive Search Flyout */}
        {searchOpen && (
          <div className={styles.searchFlyout}>
            <div className={styles.searchInner}>
              <div className={styles.searchBar}>
                <Search size={18} className={styles.searchBarIcon} />
                <input
                  id="apple-search-input"
                  type="text"
                  placeholder="Search NothingChat, OPFS RAM, 20 Subdomains, WebRTC..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchBarInput}
                  autoFocus
                />
                <button
                  className={styles.searchCloseBtn}
                  onClick={() => setSearchOpen(false)}
                >
                  <X size={16} />
                </button>
              </div>

              <div className={styles.quickLinksGroup}>
                <span className={styles.quickLinksTitle}>Quick Links</span>
                <div className={styles.quickLinksList}>
                  {quickLinks
                    .filter((l) =>
                      l.label.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((item) => (
                      <button
                        key={item.target}
                        className={styles.quickLinkItem}
                        onClick={() => scrollTo(item.target)}
                      >
                        <ChevronRight size={14} className={styles.quickLinkArrow} />
                        <span>{item.label}</span>
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Full-Screen Apple Menu */}
        {mobileMenuOpen && (
          <div className={styles.mobileDrawer}>
            <div className={styles.mobileLinksContainer}>
              <button
                className={styles.mobileMenuLink}
                onClick={() => scrollTo('landing-hero')}
              >
                Overview (NothingBox Labs)
              </button>
              <button
                className={styles.mobileMenuLink}
                onClick={() => scrollTo('hero-chat')}
              >
                NothingChat (P2P Messaging)
              </button>
              <button
                className={styles.mobileMenuLink}
                onClick={() => scrollTo('hero-drop')}
              >
                NothingDrop (50GB Transfer)
              </button>
              <button
                className={styles.mobileMenuLink}
                onClick={() => scrollTo('hero-music')}
              >
                NothingMusic (OPFS Audio)
              </button>
              <button
                className={styles.mobileMenuLink}
                onClick={() => scrollTo('hero-cinema')}
              >
                NothingCinema (4K Chunk Stream)
              </button>
              <button
                className={styles.mobileMenuLink}
                onClick={() => scrollTo('subdomain-carousel')}
              >
                20 Subdomain Network
              </button>
              <button
                className={styles.mobileMenuLink}
                onClick={() => scrollTo('service-comparison')}
              >
                Compare All Services
              </button>
              <button
                className={styles.mobileMenuLink}
                onClick={() => scrollTo('free-ecosystem')}
              >
                100% Free Ecosystem
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Apple Announcement Ribbon */}
      <div id="apple-ribbon" className={styles.announcementRibbon}>
        <div className={styles.ribbonContainer}>
          <span className={styles.ribbonText}>
            100% Free & Open Architecture. 4 Flagship Breakthroughs & 20 Subdomains with zero fees or subscriptions.
          </span>
          <button
            className={styles.ribbonLink}
            onClick={() => scrollTo('subdomain-carousel')}
          >
            <span>Explore the Suite</span>
            <ChevronRight size={12} />
          </button>
        </div>
      </div>
    </>
  );
};
