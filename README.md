# NothingBox Labs 

> Next-generation web applications ecosystem engineered with Apple-inspired precision and browser-native performance.

NothingBox Labs is architected as a decoupled, federated suite of 20 high-performance web applications running on independent subdomains, engineered with pure Vanilla CSS, component-scoped modular architecture, and Next.js.

---

## 🚀 The 4 Flagship Core Products

### 1. NothingChat (`chat.nothingboxlabs.com`)
* **Core Purpose**: High-performance, minimalist messaging platform built for instant, feature-rich communication.
* **Key Capabilities**:
  - **Rich Media Sharing**: High-resolution photos, fluid videos, stickers, and interactive voice note waveforms.
  - **Google Maps API Live Pinning**: Drop GPS coordinates and search places directly rendered inside chat bubbles.
  - **In-Chat Message Translation (Google Translate API)**: Instant one-tap message translation with default language settings.
  - **Precision YouTube Audio Snippet Sharing**: Share full tracks or trim precise timestamps (e.g. `01:14` to `01:42`) with in-bubble audio playback.

### 2. NothingDrop P2P (`transfer.nothingboxlabs.com`)
* **Core Purpose**: Direct, serverless, and secure file sharing between two browsers.
* **Key Capabilities**:
  - **WebRTC Data Channels**: Peer-to-peer cryptographic tunnel without relay servers.
  - **Zero Server Storage & No Limits**: Direct device-to-device streaming for 50GB+ files without cloud storage fees or file limits.
  - **One-Tap Pairing**: Instant dynamic QR code and encrypted session URL.

### 3. NothingMusic (`music.nothingboxlabs.com`)
* **Core Purpose**: Distraction-free, high-end audio streaming utility styled with Apple Music elegance.
* **Key Capabilities**:
  - **Minimalist Streaming (YouTube API)**: Pure audio stream without video ads or visual distractions.
  - **OPFS Audio Caching**: Automatically caches streamed audio tracks inside the browser's Origin Private File System (OPFS).
  - **Zero-Buffering & Expiry Bypass**: Eliminates network buffering and bypasses YouTube temporary stream token expirations for instant replays.

### 4. NothingCinema 4K (`stream.nothingboxlabs.com`)
* **Core Purpose**: Desktop-grade local media playback capable of handling massive 15–20 GB 4K movies without browser Out-Of-Memory (OOM) crashes.
* **Key Capabilities**:
  - **File System Access API**: Securely mounts local files via `showOpenFilePicker` with zero server uploads.
  - **OPFS Virtual RAM Buffering**: Streams chunks into a 4–5 GB OPFS Virtual RAM buffer, maintaining a stable ~120 MB JavaScript heap.
  - **Zero Lag Scrubbing**: Buttery smooth timeline seeking forward and backward.
  - **Smart Storage Quota Detection**: Dynamically detects device storage headroom (allocating up to 5GB on Desktop/Android, safely falling back to 1GB on iOS Safari).

---

## 🌐 The 20 Subdomain Network Architecture

| Subdomain | Service Name | Role / Category | Planned Port |
| :--- | :--- | :--- | :--- |
| `chat.nothingboxlabs.com` | NothingChat | Flagship Real-Time Communication | `Port 3001` |
| `transfer.nothingboxlabs.com` | NothingDrop | Flagship Serverless WebRTC P2P | `Port 3002` |
| `music.nothingboxlabs.com` | NothingMusic | Flagship OPFS Audio Streamer | `Port 3003` |
| `stream.nothingboxlabs.com` | NothingCinema | Flagship 4K Chunk-Stream Player | `Port 3004` |
| `auth.nothingboxlabs.com` | NothingAuth | Passkey Unified SSO Bridge | `Port 3005` |
| `vault.nothingboxlabs.com` | NothingVault | Client-Side Encrypted Secrets | `Port 3006` |
| `docs.nothingboxlabs.com` | NothingDocs | Local-first CRDT Collaborative Editor | `Port 3007` |
| `code.nothingboxlabs.com` | NothingCode | Sandboxed Browser Code Runner | `Port 3008` |
| `studio.nothingboxlabs.com` | NothingStudio | In-Browser Vector Asset Canvas | `Port 3009` |
| `cast.nothingboxlabs.com` | NothingScreen | Low-Latency Screen Casting | `Port 3010` |
| `notes.nothingboxlabs.com` | NothingNotes | Bidirectional Linked Scratchpad | `Port 3011` |
| `status.nothingboxlabs.com` | NothingStatus | Telemetry & Latency Dashboard | `Port 3012` |
| `api.nothingboxlabs.com` | NothingAPI | Backend Node.js / Express Microservices | `Port 4000` |
| `relay.nothingboxlabs.com` | NothingRelay | Global STUN/TURN Signaling Mesh | `Port 4001` |
| `compress.nothingboxlabs.com` | NothingCompress | Multi-Threaded WASM Compression | `Port 3015` |
| `draw.nothingboxlabs.com` | NothingDraw | Apple Pencil Pressure Canvas | `Port 3016` |
| `sync.nothingboxlabs.com` | NothingSync | Cross-Tab Sync Bus | `Port 3017` |
| `sound.nothingboxlabs.com` | NothingSound | Spatial 3D Audio Synthesizer | `Port 3018` |
| `labx.nothingboxlabs.com` | NothingLabX | Experimental WebGPU Shaders | `Port 3019` |
| `sh.nothingboxlabs.com` | NothingTerminal | WASM Linux Shell in Web Worker | `Port 3020` |

---

## 🛠️ Strict Architecture & Styling Mandates Met

1. **Pure Vanilla CSS**:
   - Zero Tailwind or CSS-in-JS libraries.
   - Every single component has its own dedicated directory with its component `.tsx` and `.module.css`.
   - **Zero inline styles** (`style={{ ... }}` is strictly absent across the entire project).
   - Global tokens, fonts, and reset confined strictly to `globals.css`.
2. **Apple & iOS Aesthetic**:
   - Translucent frosted glass navigation (`backdrop-filter: blur(20px) saturate(180%)`).
   - Cupertino typography, sleek bento grids, and interactive device simulators for all 4 flagship apps.
3. **Decoupled Architecture**:
   - Frontend built with Next.js, completely prepared for a separated Node.js / Express backend server hosted on its own port or server.
