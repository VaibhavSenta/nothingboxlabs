'use client';

import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import {
  Search,
  ShoppingBag,
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
  onSelectProduct?: (productId: string) => void;
  onOpenRegistry?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
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
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'NothingChat (P2P Messaging)', target: 'hero-chat' },
    { label: 'NothingDrop (WebRTC 50GB)', target: 'hero-drop' },
    { label: 'NothingMusic (OPFS Audio)', target: 'hero-music' },
    { label: 'NothingCinema (4K Chunk Stream)', target: 'hero-cinema' },
    { label: '20 Subdomain Network Mesh', target: 'subdomain-carousel' },
    { label: 'OPFS 5GB Virtual RAM Architecture', target: 'promo-grid' },
  ];

  return (
    <>
      <header
        id="main-header"
        className={`${styles.globalNav} ${isScrolled ? styles.navScrolled : ''}`}
      >
        <div className={styles.navContainer}>
          {/* Apple Logo */}
          <button
            id="apple-logo-btn"
            className={styles.appleLogoBtn}
            onClick={() => scrollTo('hero-chat')}
            aria-label="NothingBox Labs Home"
          >
            <span className={styles.appleGlyph}></span>
            <span className={styles.appleBrandText}>Labs</span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className={styles.navLinksList}>
            <button
              id="nav-link-chat"
              className={styles.navItem}
              onClick={() => scrollTo('hero-chat')}
              onMouseEnter={() => setActiveDropdown('chat')}
            >
              NothingChat
            </button>
            <button
              id="nav-link-drop"
              className={styles.navItem}
              onClick={() => scrollTo('hero-drop')}
              onMouseEnter={() => setActiveDropdown('drop')}
            >
              NothingDrop
            </button>
            <button
              id="nav-link-music"
              className={styles.navItem}
              onClick={() => scrollTo('hero-music')}
              onMouseEnter={() => setActiveDropdown('music')}
            >
              NothingMusic
            </button>
            <button
              id="nav-link-cinema"
              className={styles.navItem}
              onClick={() => scrollTo('hero-cinema')}
              onMouseEnter={() => setActiveDropdown('cinema')}
            >
              NothingCinema
            </button>
            <button
              id="nav-link-subdomains"
              className={styles.navItem}
              onClick={() => scrollTo('subdomain-carousel')}
              onMouseEnter={() => setActiveDropdown('subdomains')}
            >
              20 Subdomains
            </button>
            <button
              id="nav-link-architecture"
              className={styles.navItem}
              onClick={() => scrollTo('promo-grid')}
              onMouseEnter={() => setActiveDropdown('arch')}
            >
              Architecture
            </button>
            <button
              id="nav-link-specs"
              className={styles.navItem}
              onClick={() => scrollTo('promo-grid')}
              onMouseEnter={() => setActiveDropdown(null)}
            >
              Tech Specs
            </button>
          </nav>

          {/* Nav Utilities: Search & Bag */}
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
              id="nav-bag-btn"
              className={styles.utilityBtn}
              onClick={() => scrollTo('subdomain-carousel')}
              aria-label="Subdomain Suite"
            >
              <ShoppingBag size={15} />
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
                onClick={() => scrollTo('hero-chat')}
              >
                NothingChat
              </button>
              <button
                className={styles.mobileMenuLink}
                onClick={() => scrollTo('hero-drop')}
              >
                NothingDrop
              </button>
              <button
                className={styles.mobileMenuLink}
                onClick={() => scrollTo('hero-music')}
              >
                NothingMusic
              </button>
              <button
                className={styles.mobileMenuLink}
                onClick={() => scrollTo('hero-cinema')}
              >
                NothingCinema 4K
              </button>
              <button
                className={styles.mobileMenuLink}
                onClick={() => scrollTo('subdomain-carousel')}
              >
                20 Subdomain Network
              </button>
              <button
                className={styles.mobileMenuLink}
                onClick={() => scrollTo('promo-grid')}
              >
                OPFS & WebRTC Architecture
              </button>
              <div className={styles.mobileSubdomainCTA}>
                <a
                  href="https://chat.nothingboxlabs.com"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.mobileLaunchBtn}
                >
                  <span>Launch NothingChat</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Apple Announcement Ribbon */}
      <div id="apple-ribbon" className={styles.announcementRibbon}>
        <div className={styles.ribbonContainer}>
          <span className={styles.ribbonText}>
            Engineered for raw browser power. 4 Flagship Breakthroughs & 20 Subdomains.
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
