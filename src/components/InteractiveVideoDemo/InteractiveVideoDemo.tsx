'use client';

import React, { useState } from 'react';
import styles from './InteractiveVideoDemo.module.css';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import {
  Film,
  HardDrive,
  Cpu,
  Sliders,
  Play,
  Pause,
  Maximize2,
  CheckCircle2,
  AlertTriangle,
  FileVideo,
  MonitorSmartphone,
  Layers
} from 'lucide-react';

export const InteractiveVideoDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<'desktop' | 'ios'>('desktop');
  const [seekTime, setSeekTime] = useState(42);
  const [isPickerSimulated, setIsPickerSimulated] = useState(true);

  const platformQuota = selectedPlatform === 'desktop' ? '5.0 GB Buffer' : '1.0 GB Safe Buffer';
  const platformMax = selectedPlatform === 'desktop' ? '5120 MB' : '1024 MB';

  return (
    <div id="interactive-video-simulator" className={styles.container}>
      {/* Top Header */}
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <div className={styles.videoIconWrap}>
            <Film size={18} className={styles.videoIcon} />
          </div>
          <div>
            <h3 className={styles.headerTitle}>Local Chunk-Streaming Engine</h3>
            <span className={styles.headerSubtitle}>File System Access API + OPFS Virtual RAM</span>
          </div>
        </div>
        <div className={styles.headerBadges}>
          <Badge variant="orange">Zero OOM Crash</Badge>
          <Badge variant="blue">4K 60FPS Pro</Badge>
        </div>
      </div>

      {/* Main Video Stage */}
      <div className={styles.videoStage}>
        {/* Cinema Screen Mockup */}
        <div className={styles.screenFrame}>
          <div className={styles.screenBackdrop}>
            <div className={styles.filmNoiseLayer}></div>
            <div className={styles.screenCenterInfo}>
              <FileVideo size={40} className={styles.centerVideoIcon} />
              <span className={styles.cinemaMovieTitle}>Oppenheimer_4K_HDR_Master.mkv</span>
              <span className={styles.cinemaFileMeta}>
                18.4 GB Local File • Direct Disk Read • Zero Server Upload
              </span>
            </div>

            {/* Quick Seek Feedback Pill */}
            <div className={styles.seekPill}>
              <CheckCircle2 size={12} className={styles.greenCheck} />
              <span>Instant Seek Latency: 3.8 ms (From OPFS Cache)</span>
            </div>
          </div>

          {/* Video Control Bar */}
          <div className={styles.controlBar}>
            <button
              id="cinema-play-pause-btn"
              className={styles.cinemaPlayBtn}
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>

            <div className={styles.timelineScrubber}>
              <div className={styles.scrubberBufferedRange}></div>
              <div
                className={`${styles.scrubberCurrentProgress} ${isPlaying ? styles.scrubberPlaying : ''}`}
              ></div>
            </div>

            <span className={styles.timeCounter}>
              01:14:28 / 03:00:09
            </span>

            <button className={styles.fullscreenBtn} aria-label="Fullscreen">
              <Maximize2 size={16} />
            </button>
          </div>
        </div>

        {/* Virtual RAM & OPFS Architecture Breakdown */}
        <div className={styles.telemetryGrid}>
          {/* Virtual RAM Visualizer */}
          <div className={styles.telemetryCard}>
            <div className={styles.cardHeader}>
              <Cpu size={16} className={styles.cpuIcon} />
              <span className={styles.cardTitle}>Memory Architecture (No OOM)</span>
            </div>

            <div className={styles.memoryGauges}>
              {/* Device RAM */}
              <div className={styles.gaugeItem}>
                <div className={styles.gaugeLabelRow}>
                  <span>Browser JS Heap (RAM)</span>
                  <span className={styles.heapValue}>118 MB (Optimal)</span>
                </div>
                <div className={styles.gaugeBarTrack}>
                  <div className={styles.heapFill}></div>
                </div>
                <span className={styles.gaugeHelper}>
                  Safe from browser memory limits (Prevents Out-Of-Memory)
                </span>
              </div>

              {/* OPFS Virtual RAM Buffer */}
              <div className={styles.gaugeItem}>
                <div className={styles.gaugeLabelRow}>
                  <span>OPFS Virtual RAM Buffer</span>
                  <span className={styles.opfsBufferValue}>4.2 GB / 5.0 GB</span>
                </div>
                <div className={styles.gaugeBarTrack}>
                  <div className={styles.opfsFill}></div>
                </div>
                <span className={styles.gaugeHelper}>
                  Streaming chunks via SyncAccessHandle directly to disk
                </span>
              </div>
            </div>
          </div>

          {/* Smart Platform Quota Detection */}
          <div className={styles.telemetryCard}>
            <div className={styles.cardHeader}>
              <MonitorSmartphone size={16} className={styles.platformIcon} />
              <span className={styles.cardTitle}>Smart Storage Quota Detection</span>
            </div>

            <div className={styles.platformSelectorRow}>
              <button
                id="platform-switch-desktop"
                className={`${styles.platformBtn} ${selectedPlatform === 'desktop' ? styles.platformBtnActive : ''}`}
                onClick={() => setSelectedPlatform('desktop')}
              >
                Desktop Chrome / Edge
              </button>
              <button
                id="platform-switch-ios"
                className={`${styles.platformBtn} ${selectedPlatform === 'ios' ? styles.platformBtnActive : ''}`}
                onClick={() => setSelectedPlatform('ios')}
              >
                iOS Safari Fallback
              </button>
            </div>

            <div className={styles.quotaDetails}>
              <div className={styles.quotaRow}>
                <span className={styles.quotaLabel}>Allocated Buffer:</span>
                <span className={styles.quotaValueGreen}>{platformQuota}</span>
              </div>
              <div className={styles.quotaRow}>
                <span className={styles.quotaLabel}>Storage Estimate API:</span>
                <span className={styles.quotaValueCyan}>Active Detection</span>
              </div>
              <div className={styles.quotaRow}>
                <span className={styles.quotaLabel}>Frame Dropping:</span>
                <span className={styles.quotaValuePurple}>0 Dropped Frames (60fps)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
