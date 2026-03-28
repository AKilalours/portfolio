"use client";

import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck } from "lucide-react";

// Inline SVG logos — no external deps, never breaks
const GoogleLogo = () => (
  <svg viewBox="0 0 48 48" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.35-8.16 2.35-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const JPMorganLogo = () => (
  <svg viewBox="0 0 80 36" className="w-20 h-9" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="36" rx="4" fill="#003087"/>
    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="9.5" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="0.3">JPMorgan</text>
    <text x="50%" y="82%" dominantBaseline="middle" textAnchor="middle" fill="#C8A951" fontSize="6" fontFamily="Arial, sans-serif" letterSpacing="1">CHASE &amp; CO.</text>
  </svg>
);

const certificates = [
  {
    id: "JZ2SOP0FBS0Z",
    title: "Google AI Essentials",
    issuer: "Google",
    issuedDate: "Jan 2026",
    accent: "from-blue-500/15 to-indigo-500/5",
    border: "hover:border-blue-400/50",
    badgeColor: "text-blue-500 border-blue-500/30 bg-blue-500/10",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/JZ2SOP0FBS0Z",
    Logo: GoogleLogo,
    tags: ["AI Fundamentals", "Google Cloud", "Generative AI"],
  },
  {
    id: "WASIBCDCZCKV",
    title: "Introduction to AI and Machine Learning on Google Cloud",
    issuer: "Google",
    issuedDate: "Feb 2026",
    accent: "from-green-500/15 to-emerald-500/5",
    border: "hover:border-green-400/50",
    badgeColor: "text-green-500 border-green-500/30 bg-green-500/10",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/WASIBCDCZCKV",
    Logo: GoogleLogo,
    tags: ["Machine Learning", "Google Cloud", "AI on GCP"],
  },
  {
    id: "wDKTcXjRnSF3qr7nq",
    title: "Quantitative Research Job Simulation",
    issuer: "JP Morgan Chase",
    issuedDate: "Jan 2026",
    accent: "from-amber-500/15 to-orange-500/5",
    border: "hover:border-amber-400/50",
    badgeColor: "text-amber-500 border-amber-500/30 bg-amber-500/10",
    verifyUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/bWqaecPDbYAwSDqJy_JPMorgan%20Chase%20&%20Co._wDKTcXjRnSF3qr7nq.pdf",
    Logo: JPMorganLogo,
    tags: ["Quantitative Research", "Financial Modeling", "Risk Analytics"],
  },
  {
    id: "iGjmHfdXyX8ywt3og",
    title: "Software Engineering Job Simulation",
    issuer: "JP Morgan Chase",
    issuedDate: "Jan 2026",
    accent: "from-violet-500/15 to-purple-500/5",
    border: "hover:border-violet-400/50",
    badgeColor: "text-violet-500 border-violet-500/30 bg-violet-500/10",
    verifyUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase%20&%20Co._iGjmHfdXyX8ywt3og.pdf",
    Logo: JPMorganLogo,
    tags: ["Software Engineering", "Financial Systems", "Production Code"],
  },
];

const CertificatesSection = () => {
  return (
    <SectionWrapper id="certificates" className="w-full bg-slate-950/90 dark:bg-black/85">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-24">
        <SectionHeader
          id="certificates"
          title="Certificates"
          desc="Verified credentials from industry leaders."
          className="mb-16 mt-0"
        />

        <div className="grid md:grid-cols-2 gap-5 mt-20">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-40px" }}
              className={cn(
                "group relative rounded-2xl border border-border p-6",
                "bg-gradient-to-br backdrop-blur-sm bg-slate-900/70",
                cert.accent,
                "transition-all duration-300",
                cert.border,
                "hover:shadow-lg"
              )}
            >
              {/* Top row: logo + verify link */}
              <div className="flex items-start justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-border bg-white/80 dark:bg-white/10 p-2 flex items-center justify-center">
                    <cert.Logo />
                  </div>
                  <span className="font-mono text-xs font-extrabold text-zinc-200">
                    {cert.issuer}
                  </span>
                </div>

                <Link
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-mono text-[11px] text-zinc-200 hover:text-white font-extrabold transition-colors duration-200 mt-1 group/link"
                >
                  <BadgeCheck size={13} className="text-emerald-500" />
                  <span className="underline underline-offset-2">Verify</span>
                  <ArrowUpRight size={11} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                </Link>
              </div>

              {/* Title */}
              <h3 className="font-display font-extrabold text-white font-extrabold text-base leading-snug mb-3">
                {cert.title}
              </h3>

              <div className="w-full h-px bg-border mb-3" />

              {/* ID + date row */}
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <span className={cn(
                  "font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border",
                  cert.badgeColor
                )}>
                  ID: {cert.id}
                </span>
                <span className="font-mono text-xs text-zinc-200">{cert.issuedDate}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-border bg-background/50 text-zinc-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CertificatesSection;
