<div align="center">

# Akila Lourdes Miriyala Francis
### AI Engineer Portfolio

[![Live](https://img.shields.io/badge/Live-akilalourdesmiriyalafrancis.com-black?style=for-the-badge&logo=vercel)](https://akilalourdesmiriyalafrancis.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://typescriptlang.org)

A production-grade AI Engineer portfolio featuring an interactive 3D keyboard, space-themed animations, and 9 production ML systems showcased end-to-end.

</div>

---

## ✨ Features

- 🎹 **Interactive 3D Keyboard** — Spline-powered keyboard where every keycap is a skill. Hover or press to see descriptions.
- 🤖 **AI Chatbot Assistant** — Rule-based personal assistant answers questions about Akila's work. No API key needed.
- 🔊 **Text-to-Speech** — Every chatbot reply is spoken using the browser's built-in TTS.
- 🚀 **GSAP + Framer Motion** — Scroll-triggered animations, staggered reveals, elastic keycap physics.
- 🌌 **Space Theme** — Starfield particles on a deep dark canvas.
- 🌗 **Light & Dark Mode** — Full theme support.
- 📱 **Fully Responsive** — Works across all screen sizes.
- 📬 **Contact Form** — Email delivery via Resend.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 14, React 18, TypeScript |
| **Styling** | Tailwind CSS, Shadcn UI |
| **Animation** | GSAP, Framer Motion, Lenis |
| **3D** | Spline Runtime |
| **Email** | Resend |

---

## 📂 Project Structure

```
portfolio/
├── public/
│   └── assets/
│       ├── skills-keyboard.spline     # 3D keyboard with 42 skills
│       ├── akila.png                  # Profile photo
│       ├── skills/                    # 42 skill logos (PNG/SVG)
│       └── projects-screenshots/     # 9 project cover images
├── src/
│   ├── app/
│   │   └── page.tsx                  # Main page — section order
│   ├── components/
│   │   ├── sections/                 # Hero, About, Skills, Experience...
│   │   ├── animated-background.tsx   # Spline keyboard + GSAP logic
│   │   └── AkilaChat.tsx             # Chatbot with TTS
│   └── data/
│       ├── config.ts                 # Name, email, social links
│       ├── constants.ts              # 42 skills + experience
│       └── projects.tsx              # 9 projects with full descriptions
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- pnpm

### 1. Clone & install

```bash
git clone https://github.com/AKilalours/portfolio.git
cd portfolio
pnpm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
RESEND_API_KEY=your_resend_key   # Free at resend.com — powers the contact form
```

> The chatbot works with **zero API keys** — fully rule-based and offline.

### 3. Run locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) ✨

### 4. Build for production

```bash
pnpm build
pnpm start
```

---

## 📁 Key Files to Customize

| File | What to change |
|---|---|
| `src/data/config.ts` | Your name, email, GitHub, LinkedIn, resume link |
| `src/data/constants.ts` | 42 skill names + descriptions, work experience |
| `src/data/projects.tsx` | Project titles, tech stacks, descriptions |
| `src/components/sections/hero.tsx` | Your photo, title, social buttons |
| `src/components/sections/about.tsx` | Bio, education, technical highlights |
| `src/components/sections/achievements.tsx` | Publications, awards, competitions |
| `src/components/sections/certificates.tsx` | Certifications with verify links |
| `src/components/AkilaChat.tsx` | Chatbot knowledge base |
| `public/assets/akila.png` | Your profile photo |
| `public/assets/skills/` | Skill logos (PNG/SVG, 256×256+) |
| `public/assets/skills-keyboard.spline` | 3D keyboard (edit in spline.design) |
| `public/assets/projects-screenshots/akila/` | Project cover images |

---

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Set install command to `pnpm install`
4. Add `RESEND_API_KEY` in Vercel → Settings → Environment Variables
5. Click **Deploy** — auto-deploys on every `git push`

### Connect custom domain

After deploying, go to Vercel → Settings → Domains → add your domain.
Then add the DNS records Vercel provides in your domain registrar.

---

## 🧠 9 Production ML Systems

| Project | Stack | Key Metric |
|---|---|---|
| **StreamLens** | LightGBM · FAISS · Airflow · K8s | nDCG@10 = 0.7506 · +58% lift · p99 = 92ms |
| **NeuraPilot** | LangGraph · ChromaDB · RAGAS | Faithfulness = 0.81 · $0.00024/request |
| **GuardianDrive** | Kafka · PyTorch · OpenCV · Kubernetes | Sub-second streaming inference |
| **OpenDriveFM** | Temporal Transformer · BEV | ADE = 2.457m · 18.4% over baseline |
| **Health Risk AI** | EfficientNet · SHAP · FastAPI | 17 diseases · avg 87.3% · HIV 98.94% |
| **StegoCloak** | AES-256-GCM · scrypt KDF | 58/58 tests passing · zero plaintext |
| **Voice RAG** | Whisper · LLaMA · ChromaDB | Recall@k = 1.000 · $0.00/request |
| **Noise KWS** | CNN/CRNN · MFCC · PyTorch | 88.37% clean · 0.43 MB · p95 = 2.18ms |
| **Crypto Risk** | LASSO · yfinance · Plotly | AAPL MAPE 3.34% · BTC MAPE 3.37% |

---
