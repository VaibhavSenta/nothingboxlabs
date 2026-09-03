'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  RefreshCw,
  Upload,
  Download,
  FileText
} from 'lucide-react';

export const InteractiveTransferDemo: React.FC = () => {
  const [isTransferring, setIsTransferring] = useState(false);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [activeFile, setActiveFile] = useState<{
    name: string;
    size: string;
    blobUrl?: string;
  }>({
    name: 'ProRes_Master_Export_4K.zip',
    size: '48.6 GB',
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTransferring) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsTransferring(false);
            return 100;
          }
          return prev + 10;
        });
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isTransferring]);

  const startDemoTransfer = () => {
    setProgress(0);
    setIsTransferring(true);
  };

  const handleCopyLink = () => {
    setCopied(true);
    navigator.clipboard?.writeText('https://transfer.nothingboxlabs.com/#session=rtc-9042b-direct');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCustomFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formattedSize =
        file.size > 1024 * 1024
          ? `${(file.size / (1024 * 1024)).toFixed(2)} MB`
          : `${(file.size / 1024).toFixed(1)} KB`;
      const url = URL.createObjectURL(file);
      setActiveFile({
        name: file.name,
        size: formattedSize,
        blobUrl: url,
      });
      setProgress(0);
      setIsTransferring(true);
    }
  };

  const handleDownload = () => {
    if (activeFile.blobUrl) {
      const a = document.createElement('a');
      a.href = activeFile.blobUrl;
      a.download = `P2P_Received_${activeFile.name}`;
      a.click();
    } else {
      const blob = new Blob(['NothingBox Labs WebRTC P2P Transfer Payload Verified'], {
        type: 'text/plain',
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `P2P_Received_${activeFile.name}.txt`;
      a.click();
      URL.revokeObjectURL(url);
    }
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
              <span className={styles.fileName}>{activeFile.name}</span>
              <span className={styles.fileMetaText}>
                {activeFile.size} • 64KB Sliced Binary Chunks • Zero Server Cap
              </span>
            </div>
            <div className={styles.transferSpeedBadge}>
              <span className={styles.speedNumber}>168.4 MB/s</span>
              <span className={styles.speedLabel}>Direct Wi-Fi 6</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className={styles.progressBarTrack}>
            <div className={styles.progressBarFillStudio}></div>
          </div>

          <div className={styles.progressMetrics}>
            <span className={styles.metricItem}>
              Status: Active 64KB Chunk Stream (Direct Socket Buffer)
            </span>
            <span className={styles.metricItem}>78% Transferred • 37.9 GB / 48.6 GB</span>
          </div>

          {/* Apple Studio Telemetry Specs Bar */}
          <div className={styles.studioSpecsRow}>
            <div className={styles.specChip}>
              <ShieldCheck size={13} className={styles.greenCheck} />
              <span>SHA-256 On-the-Fly Verification</span>
            </div>
            <div className={styles.specChip}>
              <span>0% Cloud Intermediary</span>
            </div>
            <div className={styles.specChip}>
              <span>Latency: 2.4ms (LAN)</span>
            </div>
          </div>
        </div>

        {/* Pairing Link / QR Verification */}
        <div className={styles.pairingSection}>
          <div className={styles.pairingInfo}>
            <ShieldCheck size={16} className={styles.shieldIcon} />
            <span className={styles.pairingLabel}>
              Ephemeral WebRTC DataChannel Session (End-to-End Encrypted)
            </span>
          </div>
          <div className={styles.linkBox}>
            <span className={styles.roomUrl}>
              https://transfer.nothingboxlabs.com/#session=rtc-9042b-direct
            </span>
            <div className={styles.directPillBadge}>
              <span>Direct Link Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
