# 🚀 Akila Lourdes Miriyala Francis — AI Engineer Portfolio

A production-grade 3D portfolio with interactive animations, space-themed aesthetic, AI chatbot assistant, and a fully interactive 3D keyboard where each keycap is a skill.

## ✨ Features

- **Interactive 3D Keyboard** — Spline keyboard where each keycap represents a skill
- **AI Chatbot Assistant** — Personal assistant that answers questions about Akila (no API key needed)
- **Text-to-Speech** — Chatbot speaks every reply using the browser's built-in TTS
- **Buttery Animations** — GSAP + Framer Motion scroll, hover, and reveal animations
- **Space Theme** — Floating particles on a dark canvas
- **Light & Dark Mode** — Full theme support
- **Responsive** — Works across all screen sizes
- **Contact Form** — Email delivery via Resend
- **Sections** — Hero, About, Skills, Experience, Achievements, Certificates, Projects, Contact

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 14, React 18, TypeScript |
| **Styling** | Tailwind CSS, Shadcn UI |
| **Animation** | GSAP, Framer Motion |
| **3D** | Spline Runtime |
| **Email** | Resend |
| **Misc** | Lenis (smooth scroll), Zod, next-themes |

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- pnpm (recommended)

### 1. Install dependencies

\`\`\`bash
pnpm install
\`\`\`

### 2. Set up environment variables

\`\`\`bash
cp .env.example .env.local
\`\`\`

Then edit `.env.local`:

\`\`\`env
RESEND_API_KEY=your_resend_key   # get free at resend.com — for contact form
\`\`\`

> The chatbot works WITHOUT any API key — it's fully rule-based.

### 3. Run development server

\`\`\`bash
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) ✨

### 4. Build for production

\`\`\`bash
pnpm build
pnpm start
\`\`\`

## 📁 Key Files to Customize

| File | Purpose |
|---|---|
| `src/data/config.ts` | Name, email, social links, site URL |
| `src/data/constants.ts` | Skills and work experience |
| `src/data/projects.tsx` | All 9 projects with descriptions |
| `src/components/sections/hero.tsx` | Hero section with photo |
| `src/components/sections/about.tsx` | About, education, highlights |
| `src/components/sections/achievements.tsx` | Publications, awards |
| `src/components/sections/certificates.tsx` | Certificates |
| `src/components/AkilaChat.tsx` | AI chatbot knowledge base |
| `public/assets/akila.png` | Your profile photo |
| `public/assets/skills/` | Skill logos |
| `public/assets/projects-screenshots/akila/` | Project cover images |

## 🚀 Deploy to Vercel

1. Push your code to GitHub
2. Connect repo to [vercel.com](https://vercel.com)
3. Add `RESEND_API_KEY` in Vercel environment variables
4. Deploy — automatic on every push!

## 📄 License

MIT — Free to use. Credit to the original template by Naresh Khatri.
