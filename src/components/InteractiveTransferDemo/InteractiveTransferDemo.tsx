'use client';

import React, { useState, useEffect } from 'react';
import styles from './InteractiveTransferDemo.module.css';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import {
  Share2,
  ShieldCheck,
  HardDrive,
  Wifi,
  Copy,
  Check,
  ArrowRightLeft,
  FileArchive,
  RefreshCw
} from 'lucide-react';

export const InteractiveTransferDemo: React.FC = () => {
  const [isTransferring, setIsTransferring] = useState(false);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTransferring) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsTransferring(false);
            return 100;
          }
          return prev + 5;
        });
      }, 120);
    }
    return () => clearInterval(timer);
  }, [isTransferring]);

  const startDemoTransfer = () => {
    setProgress(0);
    setIsTransferring(true);
  };

  const handleCopyLink = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="interactive-transfer-simulator" className={styles.container}>
      {/* Top Header */}
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <div className={styles.p2pIconWrap}>
            <ArrowRightLeft size={18} className={styles.p2pIcon} />
          </div>
          <div>
            <h3 className={styles.headerTitle}>WebRTC Mesh Session</h3>
            <span className={styles.headerSubtitle}>Direct Browser-to-Browser Pipe</span>
          </div>
        </div>
        <div className={styles.badgesGroup}>
          <Badge variant="cyan">RTCDataChannel: Open</Badge>
          <Badge variant="green">0% Server Storage</Badge>
        </div>
      </div>

      {/* Main Transfer Arena */}
      <div className={styles.arena}>
        <div className={styles.nodesDiagram}>
          {/* Sender Node (e.g. MacBook Pro) */}
          <div className={styles.deviceNode}>
            <div className={styles.deviceIcon}>💻</div>
            <span className={styles.deviceName}>MacBook Pro M3</span>
            <span className={styles.deviceIp}>192.168.1.42 (Local NAT)</span>
            <span className={styles.nodeRoleSender}>Sender (Host)</span>
          </div>

          {/* Direct Connection Pipeline */}
          <div className={styles.pipeTrack}>
            <div
              className={`${styles.pipeFlow} ${isTransferring ? styles.pipeFlowActive : ''}`}
            ></div>
            <div className={styles.pipePill}>
              <Wifi size={12} className={styles.pipeWifi} />
              <span>STUN / Direct ICE Candidate</span>
            </div>
          </div>

          {/* Receiver Node (e.g. iPhone 16 Pro) */}
          <div className={styles.deviceNode}>
            <div className={styles.deviceIcon}>📱</div>
            <span className={styles.deviceName}>iPhone 16 Pro Max</span>
            <span className={styles.deviceIp}>192.168.1.88 (Mobile Safari)</span>
            <span className={styles.nodeRoleReceiver}>Receiver</span>
          </div>
        </div>

        {/* Active File Transfer Card */}
        <div className={styles.transferCard}>
          <div className={styles.fileMetadataRow}>
            <div className={styles.fileIconWrap}>
              <FileArchive size={24} className={styles.fileArchiveIcon} />
            </div>
            <div className={styles.fileDetails}>
              <span className={styles.fileName}>ProRes_Master_Export_4K.zip</span>
              <span className={styles.fileMetaText}>
                48.6 GB • 64KB Sliced Binary Chunks • Zero Server Cap
              </span>
            </div>
            <div className={styles.transferSpeedBadge}>
              <span className={styles.speedNumber}>168.4 MB/s</span>
              <span className={styles.speedLabel}>Direct Wi-Fi 6</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className={styles.progressBarTrack}>
            <div
              className={`${styles.progressBarFill} ${styles[`progress_${Math.round(progress / 10) * 10}`] || styles.progress_0}`}
            ></div>
          </div>

          <div className={styles.progressMetrics}>
            <span className={styles.metricItem}>
              Transferred: {((progress / 100) * 48.6).toFixed(1)} GB / 48.6 GB
            </span>
            <span className={styles.metricItem}>{progress}% Sliced</span>
            <span className={styles.metricItem}>
              {isTransferring ? 'Syncing...' : progress === 100 ? 'Transfer Complete' : 'Ready'}
            </span>
          </div>

          {/* Action Trigger */}
          <div className={styles.cardActions}>
            <Button
              id="transfer-start-simulation-btn"
              variant={isTransferring ? 'glass' : 'primary'}
              size="sm"
              onClick={startDemoTransfer}
              disabled={isTransferring}
              icon={<RefreshCw size={14} className={isTransferring ? styles.spinIcon : ''} />}
            >
              {isTransferring
                ? 'Streaming Chunks Over WebRTC...'
                : progress === 100
                ? 'Retest 50GB Transfer'
                : 'Simulate High-Speed Transfer'}
            </Button>
          </div>
        </div>

        {/* Pairing Link / QR Verification */}
        <div className={styles.pairingSection}>
          <div className={styles.pairingInfo}>
            <ShieldCheck size={16} className={styles.shieldIcon} />
            <span className={styles.pairingLabel}>
              One-Time Ephemeral Room Link (Bypasses Cloud Disk)
            </span>
          </div>
          <div className={styles.linkBox}>
            <span className={styles.roomUrl}>
              https://transfer.nothingboxlabs.com/#session=rtc-9042b-direct
            </span>
            <button
              id="copy-transfer-link-btn"
              className={styles.copyButton}
              onClick={handleCopyLink}
              title="Copy session URL"
            >
              {copied ? <Check size={14} className={styles.greenCheck} /> : <Copy size={14} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
