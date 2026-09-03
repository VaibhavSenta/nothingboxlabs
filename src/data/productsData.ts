import { CoreProduct, SubdomainItem } from '../types/products';

export const CORE_PRODUCTS: CoreProduct[] = [
  {
    id: 'chat-app',
    slug: 'chat',
    subdomain: 'chat.nothingboxlabs.com',
    title: 'NothingChat',
    tagline: 'Instant messaging engineered with Apple-grade precision and native APIs.',
    category: 'Flagship Communication',
    status: 'In Development',
    corePurpose: 'A high-performance, minimalist messaging platform built for instant, feature-rich communication with zero lag and native media handling.',
    iconName: 'MessageSquare',
    accentColor: '#0071e3',
    gradient: 'linear-gradient(135deg, #0071e3 0%, #4facfe 100%)',
    features: [
      {
        id: 'c-1',
        title: 'Rich Media & Voice Notes',
        description: 'Send high-res photos, ultra-crisp video, fluid stickers, and recorded waveform voice notes directly in thread.',
        badge: 'Zero Compression Loss',
        apiIntegration: 'Web Audio API + Canvas Waveforms'
      },
      {
        id: 'c-2',
        title: 'Interactive Google Maps Pinning',
        description: 'Share live GPS coordinates, search places, or drop interactive pins that render directly inside message bubbles without opening external browsers.',
        badge: 'Google Maps Platform',
        apiIntegration: 'Google Maps Places & Geolocation API'
      },
      {
        id: 'c-3',
        title: 'In-Chat Message Translation',
        description: 'Long-press any message to translate immediately into your preferred language. Pre-configure default target dialects seamlessly in settings.',
        badge: 'Google Translate API',
        apiIntegration: 'Cloud Translation Engine'
      },
      {
        id: 'c-4',
        title: 'Precision YouTube Audio Snippets',
        description: 'Search any track and send either the full song or isolate an exact timestamp snippet (e.g. 01:14 - 01:42). Receivers listen to the trimmed hook instantly on tap.',
        badge: 'Timestamp Trimmer',
        apiIntegration: 'YouTube IFrame & Media Streams'
      }
    ],
    architecture: {
      technology: ['Next.js React Frontend', 'Node.js WebSocket Engine', 'Web Audio API', 'Google Cloud APIs'],
      storageStrategy: 'Encrypted device cache with lightweight message logs',
      networkLayer: 'Persistent Bi-directional WebSockets + REST API fallback',
      memoryManagement: 'Lazy DOM unmounting for 100k+ messages with virtualized scrolling',
      keyBenefits: [
        'Instantaneous UI response matching iOS iMessage tactile feel',
        'Direct in-line map and translation interaction without app-switching',
        'Rich multimedia without heavy memory overhead'
      ]
    },
    subdomainTarget: 'https://chat.nothingboxlabs.com'
  },
  {
    id: 'p2p-transfer',
    slug: 'transfer',
    subdomain: 'transfer.nothingboxlabs.com',
    title: 'NothingDrop P2P',
    tagline: 'Direct device-to-device browser transfer with 0% server storage.',
    category: 'Serverless Utility',
    status: 'Prototype Ready',
    corePurpose: 'Direct, serverless, and secure file sharing between two browsers powered by WebRTC Data Channels — zero cloud footprint, zero file limits.',
    iconName: 'Share2',
    accentColor: '#30b0c7',
    gradient: 'linear-gradient(135deg, #30b0c7 0%, #00f2fe 100%)',
    features: [
      {
        id: 'p-1',
        title: 'WebRTC Direct Data Channels',
        description: 'Establishes a peer-to-peer cryptographic tunnel directly between sender and receiver browsers with zero relay middlemen.',
        badge: 'P2P Mesh',
        apiIntegration: 'RTCDataChannel / STUN & TURN Mesh'
      },
      {
        id: 'p-2',
        title: 'Zero Server Storage & No Limits',
        description: 'Transfers bypass cloud storage completely. No 2GB file caps, no data retention, 100% privacy, and zero server bandwidth overhead.',
        badge: 'Unlimited File Size',
        apiIntegration: 'Stream Chunking API'
      },
      {
        id: 'p-3',
        title: 'Instant QR / Link Pairing',
        description: 'Pair two smartphones, tablets, or Macbooks in seconds via a one-time dynamic QR code or encrypted peer link.',
        badge: 'One-Tap Connect',
        apiIntegration: 'Web Crypto API + Signaling Relay'
      },
      {
        id: 'p-4',
        title: 'Browser Backpressure Control',
        description: 'Streams binary chunks synchronously to prevent receiver buffer overflow, maintaining steady multi-gigabit throughput.',
        badge: 'Hardware Adaptive',
        apiIntegration: 'Streams API & ArrayBuffers'
      }
    ],
    architecture: {
      technology: ['WebRTC Data Channels', 'Web Crypto API', 'WritableStreams', 'Next.js Client Engine'],
      storageStrategy: 'Zero disk storage on server. Transferred direct to memory/disk',
      networkLayer: 'STUN / ICE Negotiation for Direct NAT traversal',
      memoryManagement: 'Fixed 64KB chunk slicing preventing browser RAM exhaustion',
      keyBenefits: [
        '100% privacy: Files never touch a central server',
        'Transfers 50GB files without server costs',
        'AirDrop simplicity right from any modern browser'
      ]
    },
    subdomainTarget: 'https://transfer.nothingboxlabs.com'
  },
  {
    id: 'music-player',
    slug: 'music',
    subdomain: 'music.nothingboxlabs.com',
    title: 'NothingMusic',
    tagline: 'Distraction-free audio streaming cached locally in browser OPFS.',
    category: 'Audio Streaming',
    status: 'In Development',
    corePurpose: 'A minimalist, high-end audio streaming utility powered by YouTube API with zero video ads and persistent Origin Private File System caching.',
    iconName: 'Music',
    accentColor: '#af52de',
    gradient: 'linear-gradient(135deg, #af52de 0%, #ff2d55 100%)',
    features: [
      {
        id: 'm-1',
        title: 'Ad-Free Minimalist UI',
        description: 'Streams pure high-fidelity audio tracks without video clutter, commercial banners, or interruptions, styled like Apple Music.',
        badge: 'Ad-Free Experience',
        apiIntegration: 'YouTube Data & Audio Streaming Core'
      },
      {
        id: 'm-2',
        title: 'OPFS Audio Caching System',
        description: 'Streamed audio is automatically cached inside the browser’s Origin Private File System for zero-buffering playback on network dips.',
        badge: 'Origin Private File System',
        apiIntegration: 'FileSystemDirectoryHandle (OPFS)'
      },
      {
        id: 'm-3',
        title: 'Bypasses Token Expiration',
        description: 'Cached tracks eliminate YouTube temporary stream token expiration, enabling repeat plays instantly without re-requesting stream URLs.',
        badge: 'Smart Expiry Bypass',
        apiIntegration: 'Cache Persistence Layer'
      },
      {
        id: 'm-4',
        title: 'Offline-Ready Track Library',
        description: 'Previously heard songs load instantaneously even on spotty flight Wi-Fi or offline subway commutes.',
        badge: 'Instant Playback',
        apiIntegration: 'Web Audio Graph + MediaSession API'
      }
    ],
    architecture: {
      technology: ['OPFS (Origin Private File System)', 'Web Audio API', 'MediaSession API', 'YouTube Core Proxy'],
      storageStrategy: 'Browser OPFS virtual partition (multi-gigabyte audio cache)',
      networkLayer: 'Byte-range audio requests with streaming fetch pipeline',
      memoryManagement: 'OPFS streaming file handles with minimal heap memory footstep',
      keyBenefits: [
        'Zero buffering once song cached to OPFS',
        'Background lockscreen controls via native MediaSession API',
        'Apple Music fluid aesthetic without video bloat'
      ]
    },
    subdomainTarget: 'https://music.nothingboxlabs.com'
  },
  {
    id: 'video-player',
    slug: 'stream',
    subdomain: 'stream.nothingboxlabs.com',
    title: 'NothingCinema 4K',
    tagline: 'Desktop-grade chunk-streaming video player with OPFS Virtual RAM.',
    category: 'High-Performance Media',
    status: 'Architecture Finalized',
    corePurpose: 'Desktop-grade media player inside the web browser capable of playing massive 15–20 GB 4K movies with zero memory crashes and instant seeking.',
    iconName: 'Film',
    accentColor: '#ff9500',
    gradient: 'linear-gradient(135deg, #ff9500 0%, #ff3b30 100%)',
    features: [
      {
        id: 'v-1',
        title: 'File System Access API Picker',
        description: 'Securely mounts local device files via showOpenFilePicker without requiring time-consuming server uploads or file copies.',
        badge: 'Local Disk Native',
        apiIntegration: 'Window.showOpenFilePicker'
      },
      {
        id: 'v-2',
        title: 'OPFS Virtual RAM Buffering',
        description: 'Streams chunks into a 4–5 GB OPFS Virtual RAM buffer, completely preventing browser Out-Of-Memory (OOM) crashes on 20GB files.',
        badge: 'Virtual RAM Engine',
        apiIntegration: 'OPFS SyncAccessHandle & Circular Ring Buffer'
      },
      {
        id: 'v-3',
        title: 'Zero-Lag Scrubbing & Seeking',
        description: 'Pre-buffered video chunks inside high-speed OPFS storage allow buttery smooth timeline scrubbing forward and backward.',
        badge: 'Instant Frame Seek',
        apiIntegration: 'MediaSource Extensions (MSE)'
      },
      {
        id: 'v-4',
        title: 'Smart Device Quota Detection',
        description: 'Dynamically measures device storage headroom: allocates up to 5GB on Desktop/Android, safely calibrating to 1GB on iOS Safari.',
        badge: 'Platform Adaptive',
        apiIntegration: 'navigator.storage.estimate()'
      }
    ],
    architecture: {
      technology: ['File System Access API', 'OPFS Virtual RAM Buffering', 'MediaSource Extensions (MSE)', 'Web Workers'],
      storageStrategy: 'Dynamic 1GB–5GB circular buffer inside high-speed OPFS',
      networkLayer: 'Zero network — 100% local hardware bus acceleration',
      memoryManagement: 'Dedicated Web Worker handles demuxing and chunk streaming off the main UI thread',
      keyBenefits: [
        'Play 20GB 4K MKV/MP4 files in Chrome/Safari without stuttering',
        'Zero RAM ballooning; stable ~120MB heap allocation',
        'HDR tone-mapping and Apple Pro Display XDR color profiling support'
      ]
    },
    subdomainTarget: 'https://stream.nothingboxlabs.com'
  }
];

export const SUBDOMAIN_REGISTRY: SubdomainItem[] = [
  {
    id: 'sub-1',
    name: 'NothingChat',
    subdomain: 'chat.nothingboxlabs.com',
    category: 'Core Flagship',
    status: 'Active Dev',
    description: 'Instant communication with Google Maps live tracking, real-time message translation & YouTube audio clipping.',
    portOrRoute: 'Port 3001'
  },
  {
    id: 'sub-2',
    name: 'NothingDrop',
    subdomain: 'transfer.nothingboxlabs.com',
    category: 'Core Flagship',
    status: 'Prototype',
    description: 'P2P browser-to-browser serverless file transfer with WebRTC Data Channels and infinite file scale.',
    portOrRoute: 'Port 3002'
  },
  {
    id: 'sub-3',
    name: 'NothingMusic',
    subdomain: 'music.nothingboxlabs.com',
    category: 'Core Flagship',
    status: 'Active Dev',
    description: 'Minimalist audio streamer with OPFS file caching, eliminating ads and buffering completely.',
    portOrRoute: 'Port 3003'
  },
  {
    id: 'sub-4',
    name: 'NothingCinema',
    subdomain: 'stream.nothingboxlabs.com',
    category: 'Core Flagship',
    status: 'Architecture',
    description: '4K local chunk-streaming video player with OPFS 5GB Virtual RAM buffer for 20GB files.',
    portOrRoute: 'Port 3004'
  },
  {
    id: 'sub-5',
    name: 'NothingAuth',
    subdomain: 'auth.nothingboxlabs.com',
    category: 'Infrastructure',
    status: 'Planned Subdomain',
    description: 'Unified Single Sign-On (SSO) passkey authentication bridge for all NothingBox subdomains.',
    portOrRoute: 'Port 3005'
  },
  {
    id: 'sub-6',
    name: 'NothingVault',
    subdomain: 'vault.nothingboxlabs.com',
    category: 'Utilities',
    status: 'Planned Subdomain',
    description: 'Client-side zero-knowledge encrypted credential and document vault using Web Crypto.',
    portOrRoute: 'Port 3006'
  },
  {
    id: 'sub-7',
    name: 'NothingDocs',
    subdomain: 'docs.nothingboxlabs.com',
    category: 'Utilities',
    status: 'Planned Subdomain',
    description: 'Local-first Markdown and rich document composer with CRDT live peer collaboration.',
    portOrRoute: 'Port 3007'
  },
  {
    id: 'sub-8',
    name: 'NothingCode',
    subdomain: 'code.nothingboxlabs.com',
    category: 'Utilities',
    status: 'Planned Subdomain',
    description: 'Browser-based sandboxed code execution runner and TypeScript playground.',
    portOrRoute: 'Port 3008'
  },
  {
    id: 'sub-9',
    name: 'NothingStudio',
    subdomain: 'studio.nothingboxlabs.com',
    category: 'Media & Streaming',
    status: 'Planned Subdomain',
    description: 'In-browser vector graphic and visual asset canvas with SVG export.',
    portOrRoute: 'Port 3009'
  },
  {
    id: 'sub-10',
    name: 'NothingScreen',
    subdomain: 'cast.nothingboxlabs.com',
    category: 'Media & Streaming',
    status: 'Planned Subdomain',
    description: 'Low-latency screen casting and multi-screen wireless display over WebRTC.',
    portOrRoute: 'Port 3010'
  },
  {
    id: 'sub-11',
    name: 'NothingNotes',
    subdomain: 'notes.nothingboxlabs.com',
    category: 'Utilities',
    status: 'Planned Subdomain',
    description: 'Instant scratchpad with bidirectional links, tags, and OPFS local backup.',
    portOrRoute: 'Port 3011'
  },
  {
    id: 'sub-12',
    name: 'NothingStatus',
    subdomain: 'status.nothingboxlabs.com',
    category: 'Infrastructure',
    status: 'Planned Subdomain',
    description: 'Global health monitoring, latency gauges, and uptime telemetry for all subdomains.',
    portOrRoute: 'Port 3012'
  },
  {
    id: 'sub-13',
    name: 'NothingAPI',
    subdomain: 'api.nothingboxlabs.com',
    category: 'Infrastructure',
    status: 'Planned Subdomain',
    description: 'Node.js Express microservices hub, rate limiting, and webhook dispatch.',
    portOrRoute: 'Port 4000'
  },
  {
    id: 'sub-14',
    name: 'NothingRelay',
    subdomain: 'relay.nothingboxlabs.com',
    category: 'Infrastructure',
    status: 'Planned Subdomain',
    description: 'Global STUN / TURN signaling mesh facilitating high-speed P2P traversal.',
    portOrRoute: 'Port 4001'
  },
  {
    id: 'sub-15',
    name: 'NothingCompress',
    subdomain: 'compress.nothingboxlabs.com',
    category: 'Utilities',
    status: 'Planned Subdomain',
    description: 'WebAssembly multi-threaded image and media compression engine.',
    portOrRoute: 'Port 3015'
  },
  {
    id: 'sub-16',
    name: 'NothingDraw',
    subdomain: 'draw.nothingboxlabs.com',
    category: 'Media & Streaming',
    status: 'Planned Subdomain',
    description: 'Infinite collaborative whiteboard with pressure-sensitive Apple Pencil styling.',
    portOrRoute: 'Port 3016'
  },
  {
    id: 'sub-17',
    name: 'NothingSync',
    subdomain: 'sync.nothingboxlabs.com',
    category: 'Infrastructure',
    status: 'Planned Subdomain',
    description: 'Background cross-tab and cross-device sync bus powered by IndexedDB & WebSockets.',
    portOrRoute: 'Port 3017'
  },
  {
    id: 'sub-18',
    name: 'NothingSound',
    subdomain: 'sound.nothingboxlabs.com',
    category: 'Media & Streaming',
    status: 'Planned Subdomain',
    description: 'Spatial 3D audio synthesizer and binaural frequency generator.',
    portOrRoute: 'Port 3018'
  },
  {
    id: 'sub-19',
    name: 'NothingLabX',
    subdomain: 'labx.nothingboxlabs.com',
    category: 'Future Expansion',
    status: 'Planned Subdomain',
    description: 'Experimental WebGPU shaders, neural net inferencing, and cutting-edge browser demos.',
    portOrRoute: 'Port 3019'
  },
  {
    id: 'sub-20',
    name: 'NothingTerminal',
    subdomain: 'sh.nothingboxlabs.com',
    category: 'Future Expansion',
    status: 'Planned Subdomain',
    description: 'WebAssembly Linux shell environment running directly inside browser Web Workers.',
    portOrRoute: 'Port 3020'
  }
];
