"use client";

import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const highlights = [
  { emoji: "🎯", title: "Scalable Personalization & Ranking", project: "StreamLens", metrics: "BM25 + FAISS + LightGBM LambdaRank · nDCG@10 = 0.7506 · +58% lift · p99 = 92ms · 1,000 concurrent users · 9 quality gates" },
  { emoji: "🤖", title: "Agentic RAG & LLM Systems", project: "NeuraPilot", metrics: "LangGraph 5-node DAG · RAGAS faithfulness = 0.81 · p95 = 4.2s · $0.00024/request · 8 bugs postmortem-documented" },
  { emoji: "🔒", title: "Security-Hardened AI Infrastructure", project: "Voice RAG Assistant", metrics: "RBAC at retrieval time · Recall@k = 1.000 · Security refusal = 1.000 (6/6) · $0.00/request — fully local" },
  { emoji: "🚗", title: "Real-Time ML & Streaming", project: "GuardianDrive", metrics: "Kafka + Airflow + Kubernetes · sub-second streaming inference · production safety gates" },
  { emoji: "🏥", title: "Clinical AI & Explainability", project: "Health Risk Prediction", metrics: "17 diseases · avg 87.3% · HIV 98.94% · TB 96.90% · SHAP-grounded interpretability" },
  { emoji: "👁️", title: "Computer Vision & Autonomous Perception", project: "OpenDriveFM", metrics: "6-camera BEV · Temporal Transformer · ADE = 2.457m · 18.4% over baseline · no pretrained weights" },
  { emoji: "🔐", title: "Cryptographic Systems", project: "StegoCloak", metrics: "AES-256-GCM · scrypt KDF · zero plaintext markers · 58 tests passing" },
  { emoji: "🎤", title: "Edge AI & Speech", project: "KWS & Distress Detection", metrics: "88.37% clean · 77.02% at 0dB SNR · 0.43 MB model size · p95 = 2.18ms" },
  { emoji: "📈", title: "Financial Intelligence", project: "Crypto Risk Bench", metrics: "AAPL MAPE 3.34% · BTC MAPE 3.37% · 91% latency reduction via TTL cache" },
];

const principles = [
  { label: "SLO-First", desc: "Define SLOs before writing code" },
  { label: "Measured", desc: "Latency at p50, p95, and p99" },
  { label: "Evaluated", desc: "Eval harnesses that catch regressions" },
  { label: "Postmortems", desc: "Every failure root-caused and published" },
];

// College logos as inline SVG components
const LIULogo = () => (
  <svg viewBox="0 0 80 80" className="w-14 h-14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="80" rx="12" fill="#003087"/>
    <text x="50%" y="38%" dominantBaseline="middle" textAnchor="middle" fill="#C8A951" fontSize="22" fontWeight="bold" fontFamily="serif">LIU</text>
    <text x="50%" y="68%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontSize="7" fontFamily="serif" letterSpacing="1">EST. 1926</text>
    <rect x="10" y="52" width="60" height="1.5" fill="#C8A951" opacity="0.6"/>
  </svg>
);

const PanimalarLogo = () => (
  <svg viewBox="0 0 80 80" className="w-14 h-14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="80" rx="12" fill="#8B0000"/>
    <text x="50%" y="38%" dominantBaseline="middle" textAnchor="middle" fill="#FFD700" fontSize="16" fontWeight="bold" fontFamily="serif">PEC</text>
    <text x="50%" y="62%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontSize="6" fontFamily="sans-serif" letterSpacing="0.5">PANIMALAR</text>
    <text x="50%" y="75%" dominantBaseline="middle" textAnchor="middle" fill="#FFD700" fontSize="5.5" fontFamily="sans-serif" letterSpacing="0.3">ENGINEERING</text>
    <rect x="10" y="50" width="60" height="1.5" fill="#FFD700" opacity="0.5"/>
  </svg>
);

const education = [
  {
    degree: "MS in Artificial Intelligence",
    school: "Long Island University",
    location: "Brooklyn, New York, USA",
    period: "2025 — 2027",
    cgpa: "3.98 / 4.0",
    flag: "🇺🇸",
    accent: "from-blue-500/20 to-indigo-500/10",
    border: "hover:border-blue-400/40",
    dot: "bg-blue-400",
    current: true,
    Logo: LIULogo,
  },
  {
    degree: "BE in Computer Science & Engineering",
    school: "Panimalar Engineering College",
    location: "Chennai, Tamil Nadu, India",
    period: "2020 — 2024",
    cgpa: "9.36 / 10",
    flag: "🇮🇳",
    accent: "from-emerald-500/20 to-teal-500/10",
    border: "hover:border-emerald-400/40",
    dot: "bg-emerald-400",
    current: false,
    Logo: PanimalarLogo,
  },
];

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="w-full bg-slate-950/90 dark:bg-black/85">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-24">
        <SectionHeader id="about" title="About Me" />

        {/* WHO I AM */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-200 mb-4">Who I Am</p>
            <h3 className="text-2xl md:text-3xl font-thin font-display text-white font-bold leading-snug mb-6">
              I operate at one standard — the one{" "}
              <span className="text-white font-bold font-medium">Netflix, Google, and Meta</span> use
              when they ship ML to hundreds of millions of users.
            </h3>
            <p className="font-mono font-bold text-white text-sm text-zinc-200 leading-relaxed">
              I don't stop at model accuracy. I define SLOs before I write code. I measure latency at
              p50, p95, and p99. I write evaluation harnesses that catch regressions before they
              reach production. I document every failure in a postmortem log with a root cause and a fix.
            </p>
            <p className="font-mono font-bold text-white text-sm text-zinc-200 leading-relaxed mt-4">
              Nine production-grade ML systems. Every one shipped with SLO definitions, ablation
              studies, latency benchmarks, quality gates, and documented production failures — not
              because a rubric asked for it, but because that's the only way to know if something actually works.
            </p>
          </motion.div>

          {/* Principles grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {principles.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 * i }}
                viewport={{ once: true }}
                className={cn(
                  "rounded-xl border border-border p-5",
                  "bg-slate-800/80 dark:bg-white/8 backdrop-blur-sm",
                  "hover:border-foreground/30 transition-colors duration-300"
                )}
              >
                <p className="font-display font-extrabold text-white font-bold text-lg mb-1">{p.label}</p>
                <p className="font-mono font-bold text-white text-xs text-zinc-200 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* EDUCATION */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-200 mb-2">Education</p>
            <h3 className="text-2xl md:text-3xl font-thin font-display text-white font-bold">Academic Background</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                viewport={{ once: true }}
                className={cn(
                  "relative rounded-2xl border border-border p-6",
                  "bg-gradient-to-br backdrop-blur-sm",
                  edu.accent,
                  "transition-all duration-300",
                  edu.border,
                  "hover:shadow-md"
                )}
              >
                {/* Current badge */}
                {edu.current && (
                  <span className="absolute top-4 right-4 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-emerald-500 border border-emerald-500/30 rounded-full px-2.5 py-1 bg-emerald-500/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Current
                  </span>
                )}

                {/* Logo + school name */}
                <div className="flex items-center gap-4 mb-4">
                  <edu.Logo />
                  <div>
                    <p className="font-display font-bold text-white font-bold text-base leading-tight">{edu.school}</p>
                    <p className="font-mono font-bold text-white text-xs text-zinc-200 mt-1">{edu.flag} {edu.location}</p>
                  </div>
                </div>

                <div className="w-full h-px bg-border mb-4" />

                {/* Degree */}
                <p className="font-mono font-bold text-white text-sm font-medium text-white font-bold mb-3">{edu.degree}</p>

                {/* Period + CGPA */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="font-mono font-bold text-white text-xs text-zinc-200">{edu.period}</span>
                  <div className="flex items-center gap-1.5">
                    <span className={cn("w-2 h-2 rounded-full", edu.dot)} />
                    <span className="font-mono font-bold text-white text-xs font-extrabold text-white font-bold">CGPA {edu.cgpa}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* TECHNICAL HIGHLIGHTS */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-200 mb-2">Technical Highlights</p>
            <h3 className="text-2xl md:text-3xl font-thin font-display text-white font-bold">9 Production-Grade Systems</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.project}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.07 * i }}
                viewport={{ once: true }}
                className={cn(
                  "group rounded-xl border border-border p-5",
                  "bg-slate-800/80 dark:bg-white/8 backdrop-blur-sm",
                  "hover:border-foreground/40 hover:bg-slate-700/80 dark:hover:bg-white/12",
                  "transition-all duration-300 cursor-default"
                )}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{h.emoji}</span>
                  <div>
                    <p className="font-mono font-bold text-white text-[10px] uppercase tracking-widest text-zinc-200">{h.title}</p>
                    <p className="font-display font-extrabold text-white font-bold text-sm">{h.project}</p>
                  </div>
                </div>
                <p className="font-mono font-bold text-white text-xs text-zinc-200 leading-relaxed border-t border-border pt-3">{h.metrics}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
