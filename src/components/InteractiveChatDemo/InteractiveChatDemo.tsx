'use client';

import React, { useState } from 'react';
import styles from './InteractiveChatDemo.module.css';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import {
  MapPin,
  Languages,
  Play,
  Pause,
  Volume2,
  Mic,
  Send,
  Sparkles,
  ExternalLink,
  CheckCheck
} from 'lucide-react';

export const InteractiveChatDemo: React.FC = () => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isPlayingYoutubeSnippet, setIsPlayingYoutubeSnippet] = useState(false);
  const [isTranslated, setIsTranslated] = useState(false);
  const [activeMessageIndex, setActiveMessageIndex] = useState<number | null>(null);

  const toggleTranslate = () => {
    setIsTranslated((prev) => !prev);
  };

  return (
    <div id="interactive-chat-simulator" className={styles.container}>
      {/* iOS Chat Header */}
      <div className={styles.phoneHeader}>
        <div className={styles.avatarGroup}>
          <div className={styles.avatar}>
            <span className={styles.avatarInitial}>NB</span>
            <span className={styles.onlineDot}></span>
          </div>
          <div className={styles.userInfo}>
            <span className={styles.userName}>Aria (NothingChat P2P)</span>
            <span className={styles.userStatus}>End-to-End Encrypted • WebSocket Active</span>
          </div>
        </div>
        <div className={styles.headerBadges}>
          <Badge variant="blue">Maps API Active</Badge>
          <Badge variant="purple">Translate Sync</Badge>
        </div>
      </div>

      {/* Message Thread */}
      <div className={styles.thread}>
        {/* Message 1: Text with Translation Feature */}
        <div className={styles.messageRowIncoming}>
          <div className={styles.bubbleIncoming}>
            <div className={styles.bubbleContent}>
              <p className={styles.messageText}>
                {isTranslated
                  ? 'नमस्ते! मीटिंग का नया पिन यहाँ ड्रॉप कर दिया है। इसे सीधे चैट में चेक करें।'
                  : 'Hey! I just dropped the new location pin for our lab sync. You can inspect it directly here.'}
              </p>
            </div>
            <div className={styles.messageFooter}>
              <span className={styles.timestamp}>10:42 AM</span>
              <button
                id="chat-translate-trigger"
                className={`${styles.actionPill} ${isTranslated ? styles.actionPillActive : ''}`}
                onClick={toggleTranslate}
                title="Toggle Google Translate API"
              >
                <Languages size={12} className={styles.pillIcon} />
                <span>{isTranslated ? 'Original (EN)' : 'Translate (HI)'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Message 2: Google Maps Interactive Location Card */}
        <div className={styles.messageRowIncoming}>
          <div className={styles.mapCardBubble}>
            <div className={styles.mapPreviewHeader}>
              <div className={styles.mapPinIconWrap}>
                <MapPin size={16} className={styles.mapPinIcon} />
              </div>
              <div className={styles.mapMeta}>
                <span className={styles.mapTitle}>NothingBox R&D Lab - Cupertino</span>
                <span className={styles.mapCoordinates}>37.3349° N, 122.0090° W • Live GPS Pin</span>
              </div>
            </div>

            {/* Apple Maps Mock Canvas */}
            <div className={styles.mapCanvas}>
              <div className={styles.mapGridLayer}></div>
              <div className={styles.mapRadarPulse}></div>
              <div className={styles.mapPinBeacon}>
                <div className={styles.pinDot}></div>
                <span className={styles.pinLabel}>Lab Core</span>
              </div>
            </div>

            <div className={styles.mapFooter}>
              <span className={styles.mapBadge}>Google Maps Platform</span>
              <span className={styles.mapDistance}>0.4 mi away</span>
            </div>
          </div>
        </div>

        {/* Message 3: Outgoing Voice Note with Canvas Waveform */}
        <div className={styles.messageRowOutgoing}>
          <div className={styles.bubbleOutgoing}>
            <div className={styles.voiceNoteWrap}>
              <button
                id="chat-play-voice-note"
                className={styles.voicePlayBtn}
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              >
                {isPlayingAudio ? <Pause size={14} /> : <Play size={14} />}
              </button>
              <div className={styles.waveformGraphic}>
                <span className={`${styles.waveBar} ${isPlayingAudio ? styles.barWaveAnim : ''}`}></span>
                <span className={`${styles.waveBar} ${isPlayingAudio ? styles.barWaveAnim : ''}`}></span>
                <span className={`${styles.waveBar} ${isPlayingAudio ? styles.barWaveAnim : ''}`}></span>
                <span className={`${styles.waveBar} ${isPlayingAudio ? styles.barWaveAnim : ''}`}></span>
                <span className={`${styles.waveBar} ${isPlayingAudio ? styles.barWaveAnim : ''}`}></span>
                <span className={`${styles.waveBar} ${isPlayingAudio ? styles.barWaveAnim : ''}`}></span>
                <span className={`${styles.waveBar} ${isPlayingAudio ? styles.barWaveAnim : ''}`}></span>
                <span className={`${styles.waveBar} ${isPlayingAudio ? styles.barWaveAnim : ''}`}></span>
              </div>
              <span className={styles.audioDuration}>0:18</span>
            </div>
            <div className={styles.messageFooterOutgoing}>
              <span className={styles.timestampOutgoing}>10:44 AM</span>
              <CheckCheck size={14} className={styles.checkIcon} />
            </div>
          </div>
        </div>

        {/* Message 4: Precision YouTube Audio Snippet */}
        <div className={styles.messageRowIncoming}>
          <div className={styles.youtubeSnippetBubble}>
            <div className={styles.snippetTop}>
              <Badge variant="orange">YouTube Audio Snippet</Badge>
              <span className={styles.timestampRange}>Trimmed [01:14 — 01:42]</span>
            </div>

            <div className={styles.snippetTrackBody}>
              <div className={styles.snippetCover}>
                <Volume2 size={20} className={styles.snippetAudioIcon} />
              </div>
              <div className={styles.snippetDetails}>
                <span className={styles.snippetSongName}>Solaris (Ambient Theme)</span>
                <span className={styles.snippetArtist}>NothingBox Synth Lab • 28s Highlight Hook</span>
              </div>
            </div>

            <div className={styles.snippetScrubber}>
              <button
                id="chat-youtube-snippet-play"
                className={styles.snippetPlayBtn}
                onClick={() => setIsPlayingYoutubeSnippet(!isPlayingYoutubeSnippet)}
              >
                {isPlayingYoutubeSnippet ? <Pause size={14} /> : <Play size={14} />}
              </button>
              <div className={styles.scrubberTrack}>
                <div
                  className={`${styles.scrubberFill} ${isPlayingYoutubeSnippet ? styles.scrubberActive : ''}`}
                ></div>
              </div>
              <span className={styles.scrubberTime}>
                {isPlayingYoutubeSnippet ? '01:28' : '01:14'}
              </span>
            </div>
            <div className={styles.snippetNotice}>
              Receiver hears only the trimmed interval without video ads or leaving the chat.
            </div>
          </div>
        </div>
      </div>

      {/* Chat Input Bar */}
      <div className={styles.inputBar}>
        <div className={styles.inputActions}>
          <button className={styles.iconButton} aria-label="Audio Record">
            <Mic size={18} />
          </button>
        </div>
        <div className={styles.fakeInput}>
          <span className={styles.placeholderText}>Type message or drop Maps pin...</span>
        </div>
        <button className={styles.sendButton} aria-label="Send">
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};
