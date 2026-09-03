'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './InteractiveChatDemo.module.css';
import { Badge } from '../Badge/Badge';
import {
  MapPin,
  Languages,
  Play,
  Pause,
  Volume2,
  Mic,
  Send,
  Sparkles,
  CheckCheck,
  Plus
} from 'lucide-react';
import { ambientSynth } from '../../lib/audioSynth';

interface ChatMessage {
  id: string;
  sender: 'user' | 'aria';
  text?: string;
  type: 'text' | 'map' | 'voice' | 'youtube';
  timestamp: string;
  translatedText?: string;
}

export const InteractiveChatDemo: React.FC = () => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isPlayingYoutubeSnippet, setIsPlayingYoutubeSnippet] = useState(false);
  const [isTranslated, setIsTranslated] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTypingReply, setIsTypingReply] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'aria',
      type: 'text',
      text: 'Hey! I just dropped the new location pin for our lab sync. You can inspect it directly here.',
      translatedText: 'नमस्ते! मीटिंग का नया पिन यहाँ ड्रॉप कर दिया है। इसे सीधे चैट में चेक करें।',
      timestamp: '10:42 AM',
    },
    {
      id: 'msg-2',
      sender: 'aria',
      type: 'map',
      timestamp: '10:43 AM',
    },
    {
      id: 'msg-3',
      sender: 'user',
      type: 'voice',
      timestamp: '10:44 AM',
    },
    {
      id: 'msg-4',
      sender: 'aria',
      type: 'youtube',
      timestamp: '10:45 AM',
    },
  ]);

  const threadEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    threadEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTypingReply]);

  const toggleTranslate = () => {
    setIsTranslated((prev) => !prev);
  };

  const handleToggleAudio = () => {
    if (isPlayingAudio) {
      ambientSynth.pause();
      setIsPlayingAudio(false);
    } else {
      ambientSynth.play();
      setIsPlayingAudio(true);
    }
  };

  const handleToggleYoutube = () => {
    if (isPlayingYoutubeSnippet) {
      ambientSynth.pause();
      setIsPlayingYoutubeSnippet(false);
    } else {
      ambientSynth.play();
      setIsPlayingYoutubeSnippet(true);
    }
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    const userMsgText = inputText.trim();
    setInputText('');

    const newMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      type: 'text',
      text: userMsgText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newMsg]);
    setIsTypingReply(true);

    setTimeout(() => {
      setIsTypingReply(false);
      let replyText = 'Received in real-time over P2P WebRTC data tunnel! Zero server storage used.';
      if (userMsgText.toLowerCase().includes('hello') || userMsgText.toLowerCase().includes('hi')) {
        replyText = 'Hello! Welcome to NothingChat. The peer-to-peer connection is active and fully encrypted.';
      } else if (userMsgText.toLowerCase().includes('map') || userMsgText.toLowerCase().includes('location')) {
        replyText = 'Pinned the Cupertino R&D coordinate directly to our thread. Native Google Places API loaded.';
      } else if (userMsgText.toLowerCase().includes('ram') || userMsgText.toLowerCase().includes('opfs')) {
        replyText = 'OPFS Virtual RAM is buffering 4GB chunk cache in browser without consuming device memory.';
      }

      const ariaReply: ChatMessage = {
        id: `aria-${Date.now()}`,
        sender: 'aria',
        type: 'text',
        text: replyText,
        translatedText: 'रियल-टाइम में P2P WebRTC के ज़रिए प्राप्त हुआ! सर्वर पर कोई डेटा स्टोर नहीं हुआ।',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, ariaReply]);
    }, 900);
  };

  const handleSendVoiceNote = () => {
    const voiceMsg: ChatMessage = {
      id: `user-voice-${Date.now()}`,
      sender: 'user',
      type: 'voice',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, voiceMsg]);
  };

  const handleSendLocation = () => {
    const mapMsg: ChatMessage = {
      id: `user-map-${Date.now()}`,
      sender: 'user',
      type: 'map',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, mapMsg]);
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
        {messages.map((msg) => {
          if (msg.type === 'text') {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                className={isUser ? styles.messageRowOutgoing : styles.messageRowIncoming}
              >
                <div className={isUser ? styles.bubbleOutgoing : styles.bubbleIncoming}>
                  <div className={styles.bubbleContent}>
                    <p className={styles.messageText}>
                      {isTranslated && msg.translatedText ? msg.translatedText : msg.text}
                    </p>
                  </div>
                  <div className={isUser ? styles.messageFooterOutgoing : styles.messageFooter}>
                    <span className={isUser ? styles.timestampOutgoing : styles.timestamp}>
                      {msg.timestamp}
                    </span>
                    {!isUser && msg.translatedText && (
                      <button
                        className={`${styles.actionPill} ${isTranslated ? styles.actionPillActive : ''}`}
                        onClick={toggleTranslate}
                        title="Toggle Google Translate API"
                      >
                        <Languages size={12} className={styles.pillIcon} />
                        <span>{isTranslated ? 'Original (EN)' : 'Translate (HI)'}</span>
                      </button>
                    )}
                    {isUser && <CheckCheck size={14} className={styles.checkIcon} />}
                  </div>
                </div>
              </div>
            );
          }

          if (msg.type === 'map') {
            return (
              <div key={msg.id} className={styles.messageRowIncoming}>
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
            );
          }

          if (msg.type === 'voice') {
            return (
              <div key={msg.id} className={styles.messageRowOutgoing}>
                <div className={styles.bubbleOutgoing}>
                  <div className={styles.voiceNoteWrap}>
                    <button
                      id="chat-play-voice-note"
                      className={styles.voicePlayBtn}
                      onClick={handleToggleAudio}
                      title="Play Audio Voice Note"
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
                    <span className={styles.audioDuration}>{isPlayingAudio ? 'Playing' : '0:18'}</span>
                  </div>
                  <div className={styles.messageFooterOutgoing}>
                    <span className={styles.timestampOutgoing}>{msg.timestamp}</span>
                    <CheckCheck size={14} className={styles.checkIcon} />
                  </div>
                </div>
              </div>
            );
          }

          if (msg.type === 'youtube') {
            return (
              <div key={msg.id} className={styles.messageRowIncoming}>
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
                      <span className={styles.snippetArtist}>NothingBox Synth Lab • 28s Hook</span>
                    </div>
                  </div>

                  <div className={styles.snippetScrubber}>
                    <button
                      id="chat-youtube-snippet-play"
                      className={styles.snippetPlayBtn}
                      onClick={handleToggleYoutube}
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
                    Trimmed interval streamed without leaving the chat thread.
                  </div>
                </div>
              </div>
            );
          }

          return null;
        })}

        {isTypingReply && (
          <div className={styles.messageRowIncoming}>
            <div className={styles.bubbleIncoming}>
              <div className={styles.typingIndicator}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}

        <div ref={threadEndRef} />
      </div>

      {/* Apple Studio Telemetry Ribbon instead of input form */}
      <div className={styles.studioTelemetryRibbon}>
        <div className={styles.telemetryPill}>
          <Sparkles size={13} className={styles.telemetryIcon} />
          <span>WebRTC P2P Mesh</span>
        </div>
        <div className={styles.telemetryPill}>
          <span>AES-GCM 256-Bit</span>
        </div>
        <div className={styles.telemetryPill}>
          <span className={styles.telemetryDot}></span>
          <span>0 Bytes on Server</span>
        </div>
        <div className={styles.telemetryPill}>
          <span>11ms Direct Latency</span>
        </div>
      </div>
    </div>
  );
};
