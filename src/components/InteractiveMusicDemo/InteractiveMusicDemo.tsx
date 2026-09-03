'use client';

import React, { useState } from 'react';
import styles from './InteractiveMusicDemo.module.css';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  HardDrive,
  CheckCircle2,
  Sparkles,
  WifiOff,
  Radio,
  Music2
} from 'lucide-react';

export const InteractiveMusicDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);

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

  return (
    <div id="interactive-music-simulator" className={styles.container}>
      {/* Dynamic Island Inspired Now-Playing Pill */}
      <div className={styles.headerBar}>
        <div className={styles.dynamicIslandPill}>
          <div className={styles.pulseDot}></div>
          <span className={styles.pillText}>
            {isPlaying ? `Streaming: ${currentTrack.title}` : 'NothingMusic Engine: Ready'}
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
              <Music2 size={36} className={styles.vinylIcon} />
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
              onClick={() => setActiveTrackIndex((prev) => (prev > 0 ? prev - 1 : playlist.length - 1))}
              aria-label="Previous Track"
            >
              <SkipBack size={20} />
            </button>

            <button
              id="music-play-pause-btn"
              className={styles.playMasterBtn}
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>

            <button
              className={styles.transportBtn}
              onClick={() => setActiveTrackIndex((prev) => (prev < playlist.length - 1 ? prev + 1 : 0))}
              aria-label="Next Track"
            >
              <SkipForward size={20} />
            </button>
          </div>
        </div>

        {/* OPFS Caching Architecture Inspector */}
        <div className={styles.opfsInspector}>
          <div className={styles.opfsHeader}>
            <div className={styles.opfsIconWrap}>
              <HardDrive size={18} className={styles.opfsIcon} />
            </div>
            <div>
              <span className={styles.opfsTitle}>Origin Private File System</span>
              <span className={styles.opfsSubtitle}>Zero Buffering & Expiry Bypass</span>
            </div>
          </div>

          <div className={styles.opfsMetricCard}>
            <div className={styles.opfsRow}>
              <span className={styles.opfsLabel}>Cache Partition Status:</span>
              <span className={styles.opfsValueGreen}>
                <CheckCircle2 size={13} className={styles.greenCheck} />
                Mounted in OPFS Root
              </span>
            </div>
            <div className={styles.opfsRow}>
              <span className={styles.opfsLabel}>Current Audio Chunk:</span>
              <span className={styles.opfsValueMono}>{currentTrack.size} Cached (100%)</span>
            </div>
            <div className={styles.opfsRow}>
              <span className={styles.opfsLabel}>YouTube Token Expiration:</span>
              <span className={styles.opfsValueCyan}>Bypassed (Zero Re-fetching)</span>
            </div>
            <div className={styles.opfsRow}>
              <span className={styles.opfsLabel}>Offline Readiness:</span>
              <span className={styles.opfsValuePurple}>Instant Replay Active</span>
            </div>
          </div>

          <div className={styles.cachePlaylist}>
            <span className={styles.playlistLabel}>Cached Track Handles (OPFS):</span>
            <div className={styles.playlistItems}>
              {playlist.map((track, idx) => (
                <div
                  key={track.title}
                  className={`${styles.playlistItem} ${idx === activeTrackIndex ? styles.playlistItemActive : ''}`}
                  onClick={() => setActiveTrackIndex(idx)}
                >
                  <div className={styles.itemTitleGroup}>
                    <span className={styles.itemNumber}>{idx + 1}</span>
                    <span className={styles.itemSongName}>{track.title}</span>
                  </div>
                  <span className={styles.itemSizeBadge}>{track.size}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
