'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './InteractiveMusicDemo.module.css';
import { Badge } from '../Badge/Badge';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  HardDrive,
  CheckCircle2,
  Music2
} from 'lucide-react';

export const InteractiveMusicDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [volume, setVolume] = useState(0.7);

  const playlist = [
    {
      title: 'Aura of Silence',
      artist: 'NothingBox Sound Collective',
      duration: '3:42',
      opfsCached: true,
      size: '4.8 MB'
    },
    {
      title: 'Cupertino Midnight',
      artist: 'Neural Audio Engine',
      duration: '4:15',
      opfsCached: true,
      size: '5.2 MB'
    },
    {
      title: 'P2P Resonance Loop',
      artist: 'Aria Synthetics',
      duration: '2:58',
      opfsCached: true,
      size: '3.9 MB'
    }
  ];

  const currentTrack = playlist[activeTrackIndex];

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleNextTrack = () => {
    setActiveTrackIndex((prev) => (prev < playlist.length - 1 ? prev + 1 : 0));
  };

  const handlePrevTrack = () => {
    setActiveTrackIndex((prev) => (prev > 0 ? prev - 1 : playlist.length - 1));
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <div id="interactive-music-simulator" className={styles.container}>
      {/* Dynamic Island Inspired Now-Playing Pill */}
      <div className={styles.headerBar}>
        <div className={styles.dynamicIslandPill}>
          <Image
            src="/nothingmusic/icon-mark.svg"
            alt="NothingMusic"
            width={16}
            height={20}
            style={{ borderRadius: 2, objectFit: 'contain' }}
          />
          <div className={styles.pulseDot}></div>
          <span className={styles.pillText}>
            {isPlaying ? `Streaming: ${currentTrack.title} (Live Web Audio)` : 'NothingMusic Engine: Ready'}
          </span>
          <span className={styles.opfsActiveTag}>OPFS Fast-Mount</span>
        </div>
        <div className={styles.headerBadges}>
          <Badge variant="purple">Ad-Free Stream</Badge>
          <Badge variant="green">OPFS Cached</Badge>
        </div>
      </div>

      <div className={styles.playerBody}>
        {/* Apple Music Style Album Artwork Card */}
        <div className={styles.artworkSection}>
          <div className={styles.artworkFrame}>
            <div
              className={`${styles.vinylCenter} ${isPlaying ? styles.spinningVinyl : ''}`}
            >
              <Image
                src="/nothingmusic/soundwave-mark-white.svg"
                alt="NothingMusic"
                width={40}
                height={52}
                style={{ objectFit: 'contain', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))' }}
              />
            </div>
            {/* Visualizer bars */}
            <div className={styles.eqVisualizer}>
              <span className={`${styles.eqBar} ${isPlaying ? styles.eqBarPlay : ''}`}></span>
              <span className={`${styles.eqBar} ${isPlaying ? styles.eqBarPlay : ''}`}></span>
              <span className={`${styles.eqBar} ${isPlaying ? styles.eqBarPlay : ''}`}></span>
              <span className={`${styles.eqBar} ${isPlaying ? styles.eqBarPlay : ''}`}></span>
              <span className={`${styles.eqBar} ${isPlaying ? styles.eqBarPlay : ''}`}></span>
            </div>
          </div>

          <div className={styles.trackDetails}>
            <h4 className={styles.trackTitle}>{currentTrack.title}</h4>
            <span className={styles.trackArtist}>{currentTrack.artist}</span>
          </div>

          {/* Progress Scrubber */}
          <div className={styles.scrubberContainer}>
            <div className={styles.timelineTrack}>
              <div
                className={`${styles.timelineFill} ${isPlaying ? styles.timelineAnimating : ''}`}
              ></div>
            </div>
            <div className={styles.timeLabels}>
              <span>{isPlaying ? '1:24' : '0:00'}</span>
              <span>{currentTrack.duration}</span>
            </div>
          </div>

          {/* Player Transport Controls */}
          <div className={styles.transportRow}>
            <button
              className={styles.transportBtn}
              onClick={handlePrevTrack}
              aria-label="Previous Track"
            >
              <SkipBack size={20} />
            </button>

            <button
              id="music-play-pause-btn"
              className={styles.playMasterBtn}
              onClick={handleTogglePlay}
              aria-label={isPlaying ? 'Pause' : 'Play'}
              title={isPlaying ? 'Pause Audio' : 'Play Real Web Audio'}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>

            <button
              className={styles.transportBtn}
              onClick={handleNextTrack}
              aria-label="Next Track"
            >
              <SkipForward size={20} />
            </button>
          </div>

          {/* Volume Slider */}
          <div className={styles.volumeRow}>
            <Volume2 size={16} className={styles.volumeIcon} />
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
              className={styles.volumeSlider}
              title={`Volume: ${Math.round(volume * 100)}%`}
            />
          </div>
        </div>

        {/* Official YouTube API & Snippet Architecture Inspector */}
        <div className={styles.opfsInspector}>
          <div className={styles.opfsHeader}>
            <div className={styles.opfsIconWrap}>
              <Music2 size={18} className={styles.opfsIcon} />
            </div>
            <div>
              <span className={styles.opfsTitle}>Official YouTube Player Engine</span>
              <span className={styles.opfsSubtitle}>Precision Timestamp & Snippet Sharing</span>
            </div>
          </div>

          <div className={styles.opfsMetricCard}>
            <div className={styles.opfsRow}>
              <span className={styles.opfsLabel}>Streaming Framework:</span>
              <span className={styles.opfsValueGreen}>
                <CheckCircle2 size={13} className={styles.greenCheck} />
                YouTube IFrame API (Verified)
              </span>
            </div>
            <div className={styles.opfsRow}>
              <span className={styles.opfsLabel}>Selected Highlight Range:</span>
              <span className={styles.opfsValueMono}>0:45 ➔ 1:15 (The Drop • 30s)</span>
            </div>
            <div className={styles.opfsRow}>
              <span className={styles.opfsLabel}>Creator Attribution:</span>
              <span className={styles.opfsValueCyan}>100% Views & Monetization to Artist</span>
            </div>
            <div className={styles.opfsRow}>
              <span className={styles.opfsLabel}>Social Snippet Link:</span>
              <span className={styles.opfsValuePurple}>youtube.com/watch?start=45&end=75</span>
            </div>
          </div>

          <div className={styles.cachePlaylist}>
            <span className={styles.playlistLabel}>Select Song Highlight to Share:</span>
            <div className={styles.playlistItems}>
              {playlist.map((track, idx) => (
                <div
                  key={track.title}
                  className={`${styles.playlistItem} ${idx === activeTrackIndex ? styles.playlistItemActive : ''}`}
                  onClick={() => {
                    setActiveTrackIndex(idx);
                  }}
                >
                  <div className={styles.itemTitleGroup}>
                    <span className={styles.itemNumber}>{idx + 1}</span>
                    <span className={styles.itemSongName}>{track.title}</span>
                  </div>
                  <span className={styles.itemSizeBadge}>Snippet Ready</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
