# ◈ M Mithun — 3D Celestial Portfolio & Cosmic Terminal System (React & JSX)

[![Live Demo](https://img.shields.io/badge/Live_Demo-mithun--portfolio--cyan.vercel.app-00dfa2.svg?style=for-the-badge&logo=vercel&logoColor=black)](https://mithun-portfolio-cyan.vercel.app/)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Full--3D--portfolio--amber.svg?style=for-the-badge&logo=github)](https://github.com/Mithun017/Full-3D-portfolio-)
[![React 18](https://img.shields.io/badge/React-18.3_JSX-61DAFB.svg?style=for-the-badge&logo=react)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r160-white.svg?style=for-the-badge&logo=threedotjs)](https://threejs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF.svg?style=for-the-badge&logo=vite)](https://vitejs.dev/)

> 🌐 **Live Website**: [M Mithun — AI & Data Science Engineer | 3D Cosmic Experience](https://mithun-portfolio-cyan.vercel.app/)

An immersive, luxury 3D WebGL developer portfolio and Ubuntu retro terminal system developed with **React.js and JSX** for **M Mithun** — AI & Data Science Undergraduate at Sri Eshwar College of Engineering.

Inspired by the award-winning celestial design of **Casa di Solare** (Awwwards Site of the Day / Developer Award) paired with an authentic Ubuntu retro command-line experience.

---

## ⚡ 1-Click Launch (Windows)

Simply double-click the included batch launcher:

```bat
Run_project.bat
```

This automated script will:
1. Verify Node.js is present.
2. Automatically run `npm install` if `node_modules` is not detected.
3. Launch the default web browser to [http://localhost:3000](http://localhost:3000).
4. Run the Vite development server.

---

## 🛠️ Manual Run & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized, chunk-split production bundle in the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 🌌 System Architecture & Features

### 1. Three.js Celestial WebGL Canvas (`src/components/CosmicBackground.jsx`)
- Concentric solar rings rotating with physics inertia and depth.
- Central solar core with pulsating icosahedron wireframe geometry.
- 1,200+ particle dust stars with mouse parallax damping and scroll interpolation.

### 2. Integrated Ubuntu Terminal CLI (`src/components/TerminalModal.jsx`)
- Interactive Ubuntu shell with user prompt `mithun@universe:~$`.
- Supports commands:
  - `neofetch` — Display ASCII art logo, hardware host, kernel, uptime, and system status.
  - `about` — Biography, research mission, and leadership appointments.
  - `projects` — Streams all 15 production projects.
  - `project <id>` — Inspect a specific project (e.g. `project fluxsense`).
  - `skills` — Output categorized competencies with proficiency percentages.
  - `experience` — View CosmicIT, ULN Tech, and freelancing timeline.
  - `contact` — Print direct email, phone, and profile links.
  - `date` — Output live system timestamp.
  - `clear` — Wipe terminal buffer clean.
  - `help` — List available commands.

### 3. 15 Real-World Production Projects (`src/components/ProjectsSection.jsx`)
Filterable by category (AI & ML, NLP, Computer Vision, Cloud & DevOps, Web & Systems) and real-time search:
1. **FluxSense** — Acoustic Transformer Health Monitoring System (CNN + Spectrograms).
2. **Crime Abstractor** — NLP-based crime report analysis and semantic clustering.
3. **Collateral Damage Prediction** — Geospatial impact prediction with Digital Twin modeling.
4. **Voice Assist (ceF)** — Modular lightweight voice assistant with STT/TTS.
5. **Traffic Sign Board Prediction** — CNN sign recognition for autonomous vehicle ADAS.
6. **Thyroid Disease Handling** — Clinical ML screening with interpretability dashboard.
7. **Intelligent Traffic Handling** — Dynamic congestion forecasting and signal timing optimization.
8. **Encryption Key Optimisation** — Cryptographic benchmarking across AES, RSA, ECC.
9. **DTP_CodeCred** — AI research recommendation system using semantic embeddings.
10. **AWS EC2 Deployment & Automation** — Cloud infrastructure with CI/CD automation.
11. **Live Classroom Platform** — Real-time collaborative teaching environment with WebSockets.
12. **Student Academic Dashboard** — Academic analytics system with grade visualizers.
13. **Resource Management & File Sharing** — Secure academic document collaboration platform.
14. **CRM for Student & Teacher Management** — Academic communication and task tracking CRM.
15. **Codelab Annotation Tasks** — International dataset engineering and quality refinement.

### 4. Contact Channels & Interactive Dispatch (`src/components/ContactSection.jsx`)
- Direct 1-click clipboard copy for email (`mmithun1701@gmail.com`) and phone (`+91 93611 23237`).
- Secure contact form with instantaneous cosmic confetti burst on transmission.

---

## 📁 Source File Tree

```text
Code/
├── Run_project.bat               # 1-Click Windows execution script
├── Readme.md                     # Code-level technical documentation
├── package.json                  # Dependencies & scripts
├── vite.config.js                # Vite build config with manual chunk splitting
├── tailwind.config.js            # Custom colors (solar, cosmic) & typography
├── postcss.config.js             # PostCSS Tailwind config
├── index.html                    # Luxury webfonts & HTML entry point
├── .gitignore                    # Node modules & build ignore rules
└── src/
    ├── main.jsx                  # Application root mounting
    ├── App.jsx                   # Primary layout orchestrator
    ├── index.css                 # Global styling, glassmorphism, scanlines
    ├── data/
    │   └── portfolioData.js      # All 15 projects, internships, skills, telemetry
    └── components/
        ├── CosmicBackground.jsx  # Three.js celestial rings & particle scene
        ├── CustomCursor.jsx      # Magnetic glowing pointer aura
        ├── Navbar.jsx            # Glassmorphic header with CLI & audio pills
        ├── Hero.jsx              # Cinematic opening with live stats
        ├── AboutSection.jsx      # Bio, leadership, and dynamic typography tester
        ├── ExperienceSection.jsx # CosmicIT, ULN Tech & Freelancing timeline
        ├── ProjectsSection.jsx   # Filterable 15 projects grid
        ├── ProjectModal.jsx      # Architectural deep-dive modal
        ├── SkillsMatrix.jsx      # Technical proficiency matrix
        ├── ContactSection.jsx    # Contact channels & confetti dispatch form
        ├── TerminalModal.jsx     # Ubuntu retro CLI terminal emulator
        └── Footer.jsx            # Live UTC telemetry clock and repository links
```

---

## 🔗 Live Website & Official Repository

- 🌐 **Live Website**: [M Mithun — AI & Data Science Engineer | 3D Cosmic Experience](https://mithun-portfolio-cyan.vercel.app/)
- 💻 **Repository**: [https://github.com/Mithun017/Full-3D-portfolio-.git](https://github.com/Mithun017/Full-3D-portfolio-.git)

