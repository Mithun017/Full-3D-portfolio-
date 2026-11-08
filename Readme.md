# ◈ M Mithun — 3D Celestial Portfolio & Cosmic Terminal System

[![Live Demo](https://img.shields.io/badge/Live_Demo-mithun--portfolio--cyan.vercel.app-00dfa2.svg?style=for-the-badge&logo=vercel&logoColor=black)](https://mithun-portfolio-cyan.vercel.app/)
[![Repository](https://img.shields.io/badge/GitHub-Repository-amber.svg?style=for-the-badge&logo=github)](https://github.com/Mithun017/Full-3D-portfolio-)
[![Framework](https://img.shields.io/badge/React-18-61DAFB.svg?style=for-the-badge&logo=react)](https://react.dev/)
[![Graphics](https://img.shields.io/badge/Three.js-0.160-white.svg?style=for-the-badge&logo=threedotjs)](https://threejs.org/)
[![Styling](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Build](https://img.shields.io/badge/Vite-5.4-646CFF.svg?style=for-the-badge&logo=vite)](https://vitejs.dev/)

> 🌐 **Live Website**: [M Mithun — AI & Data Science Engineer | 3D Cosmic Experience](https://mithun-portfolio-cyan.vercel.app/)

An immersive, high-performance 3D WebGL developer portfolio and Ubuntu retro terminal system designed for **M Mithun** — AI & Data Science Undergraduate at Sri Eshwar College of Engineering, specializing in Generative AI, Large Language Models (LLMs), Agentic AI, Computer Vision, and scalable Machine Learning systems.

Inspired by the award-winning luxury celestial aesthetic of **Casa di Solare** (Awwwards Site of the Day / Developer Award) paired with a retro Ubuntu-style command-line interface.

---

## 🌌 Visual Design & Architectural Homage

This project combines two distinct paradigms:
1. **The Casa di Solare Celestial Aesthetic**:
   - High-end dark cosmic background (`#050409`)
   - Interactive concentric solar rings rotating with physics inertia and depth
   - Luminous central solar core with pulsating geometry
   - Ambient celestial particle dust reacting to mouse parallax and scroll position
   - Luxury typography with Cinzel, Plus Jakarta Sans, and JetBrains Mono
   - Fluid custom glowing cursor with trailing magnetic aura

2. **The Retro Ubuntu CLI System**:
   - Full command-line terminal emulator executable via the `CLI SYSTEM` launcher
   - Authenticated shell prompt: `mithun@universe:~$`
   - Interactive commands: `neofetch`, `about`, `projects`, `project <id>`, `skills`, `experience`, `contact`, `date`, `clear`
   - Quick command pills for immediate single-click execution

---

## 🛠️ Technology Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Frontend Framework** | **React 18 (JSX)** | Modern functional components, hooks, zero hydration mismatch issues |
| **3D & WebGL Engine** | **Three.js (r160)** | High-performance custom canvas, torus rings, icosahedron core, point clouds |
| **Audio Synthesis** | **Web Audio API** | Real-time procedural ambient synthesizer with LFO modulation and zero external assets |
| **Styling & Effects** | **Tailwind CSS 3.4** | Custom color systems (`solar`, `cosmic`), glassmorphism, terminal scanlines |
| **Icons & Micro-UI** | **Lucide React** | Clean, minimalist SVG iconography |
| **Interactions** | **Canvas Confetti** | Dynamic celebratory particle blast on contact dispatch transmission |
| **Build Tool** | **Vite 5.4** | Sub-second HMR, optimized manual Rollup chunking (Three.js & Vendor isolation) |

---

## 📂 Project Directory Structure

```text
3.Full 3d new/
├── .gitignore                      # Root Git ignore rules
├── Readme.md                       # Comprehensive documentation
├── Doc/                            # Portfolio source of truth documents
│   ├── Context.txt                 # Complete biography, skills, 15 projects, contact info
│   ├── Experience.txt              # Terminal portfolio experience and technical specs
│   └── Prompt/
│       └── Prompt.txt              # REA and Casa di Solare design specifications
└── Code/                           # Fully developed React application
    ├── index.html                  # HTML entry point with luxury webfonts
    ├── package.json                # Dependencies and build scripts
    ├── vite.config.js              # Vite configuration with chunk splitting
    ├── tailwind.config.js          # Extended theme with solar and cosmic palettes
    ├── postcss.config.js           # PostCSS Tailwind integration
    ├── .gitignore                  # Code-level ignore rules
    └── src/
        ├── main.jsx                # React DOM root mounting
        ├── App.jsx                 # Main application orchestrator
        ├── index.css               # Global typography, glassmorphism, scanlines
        ├── data/
        │   └── portfolioData.js    # Verified portfolio data (15 projects, skills, history)
        └── components/
            ├── CosmicBackground.jsx # Three.js solar rings & particle canvas
            ├── CustomCursor.jsx    # Magnetic glowing pointer aura
            ├── Navbar.jsx          # Glassmorphic header with CLI and audio controls
            ├── Hero.jsx            # Cinematic opening with stats and call-to-actions
            ├── AboutSection.jsx    # Identity, leadership, and dynamic type tester
            ├── ExperienceSection.jsx# CosmicIT & ULN Tech production internship breakdown
            ├── ProjectsSection.jsx # Filterable gallery of all 15 real-world projects
            ├── ProjectModal.jsx    # Architectural deep-dive modal with key features
            ├── SkillsMatrix.jsx    # Interactive 5-tier technical proficiency matrix
            ├── ContactSection.jsx  # Clipboard copy channels & secure dispatch form
            ├── TerminalModal.jsx   # Ubuntu retro terminal system with command execution
            └── Footer.jsx          # Live UTC telemetry clock and repository links
```

---

## 🚀 Getting Started & Local Development

### Prerequisites
- **Node.js**: v18.0.0 or later (Tested on Node v24)
- **NPM**: v9.0.0 or later

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Mithun017/Full-3D-portfolio-.git
   cd Full-3D-portfolio-/Code
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Launch the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to experience the 3D portfolio.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The optimized production bundle will be generated in `Code/dist/`.

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 💻 Ubuntu Terminal (CLI) Commands

Click **CLI SYSTEM** in the navigation bar or launch it from the hero section to open the integrated Ubuntu shell.

| Command | Action |
| :--- | :--- |
| `neofetch` | Display ASCII art logo, hardware host, kernel, uptime, and system status |
| `about` | Print biography, research mission, and leadership appointments |
| `projects` | Stream summary of all 15 real-world production projects |
| `project <id>` | Inspect a specific project (e.g. `project fluxsense`, `project crime-abstractor`) |
| `skills` | Output categorized competencies (AI/ML, Languages, Frameworks, Cloud, DevOps) |
| `experience` | View internships at CosmicIT, ULN Tech, and independent consulting history |
| `contact` | Print direct email, phone, LinkedIn, and GitHub links |
| `date` | Output live system timestamp |
| `clear` | Wipe terminal buffer clean |
| `help` | Display manual of available commands |

---

## 🌟 Featured Real-World Projects

The portfolio showcases all **15 real projects** documented in `Doc/Context.txt`:

1. **FluxSense** — Acoustic Transformer Health Monitoring System using spectrograms & CNNs.
2. **Crime Abstractor** — NLP-based crime report analysis and automated incident categorization.
3. **Collateral Damage Prediction** — Geospatial impact prediction with Digital Twin modeling.
4. **Voice Assist (ceF)** — Lightweight voice assistant with low-latency intent classification.
5. **Traffic Sign Board Prediction** — CNN-based traffic sign classification for autonomous vehicle ADAS.
6. **Thyroid Disease Handling** — Clinical machine learning diagnostics with interpretability dashboard.
7. **Intelligent Traffic Handling** — Dynamic congestion management and signal cycle optimization.
8. **Encryption Key Optimisation** — Cryptographic performance benchmarking and entropy testing.
9. **DTP_CodeCred** — AI-powered research literature discovery with semantic embeddings.
10. **AWS EC2 Deployment & Automation** — Cloud infrastructure with zero-downtime CI/CD pipelines.
11. **Live Classroom Platform** — Real-time collaborative virtual teaching environment with WebSockets.
12. **Student Academic Dashboard** — Academic analytics platform with grade visualizers.
13. **Resource Management & File Sharing** — Secure academic document collaboration with cryptographic tokens.
14. **CRM for Student & Teacher Management** — Academic interaction and mentorship platform.
15. **Codelab Annotation Tasks** — International dataset engineering and quality refinement.

---

## 🔗 Live Website & Official Repository

- 🌐 **Live Website**: [M Mithun — AI & Data Science Engineer | 3D Cosmic Experience](https://mithun-portfolio-cyan.vercel.app/)
- 💻 **GitHub Repository**: [https://github.com/Mithun017/Full-3D-portfolio-.git](https://github.com/Mithun017/Full-3D-portfolio-.git)

---

## 📜 License
Engineered by **M Mithun**. Licensed under the [MIT License](LICENSE).

