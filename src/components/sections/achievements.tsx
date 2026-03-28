"use client";

import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const achievements = [
  {
    type: "Publication",
    typeLabel: "📄 Peer-Reviewed Publication",
    accent: "from-violet-500/20 to-indigo-500/10",
    border: "hover:border-violet-400/40",
    dot: "bg-violet-400",
    title: "Cryptocurrency Price Prediction",
    venue: "AIP Conference Proceedings, 3175(1), 020004 · ICONIC 2K23 · 2025",
    authors: "Akila Lourdes Miriyala Francis (First Author), Esaiyarasi Viswanathan, Dheeksha Jayaraman, Janani Padamanavan Ashokkumar & Kavitha Subramani",
    link: "https://doi.org/10.1063/5.0256861",
    linkLabel: "doi.org/10.1063/5.0256861",
    description: "As First Author, led end-to-end research, design, and writing of a peer-reviewed ML paper published in AIP Conference Proceedings — indexed across global academic databases. Applies LASSO regression to cryptocurrency price prediction, directly attacking the time complexity problem that plagues most existing Bitcoin forecasting models. By combining LASSO feature selection with ML-driven pattern recognition on historical market data, the system identifies stable, repeatable price trends with reduced computational overhead — demonstrating that intelligent feature engineering outperforms brute-force deep learning on high-noise financial signals.",
    tags: ["First Author", "ML Research", "LASSO Regression", "Financial AI", "AIP Indexed"],
  },
  {
    type: "Conference",
    typeLabel: "🎤 Conference Presentation",
    accent: "from-cyan-500/20 to-blue-500/10",
    border: "hover:border-cyan-400/40",
    dot: "bg-cyan-400",
    title: "Sign Language Recognition using CNN Algorithm with Machine Learning Techniques",
    venue: "IMPULSE 2K23 · Panimalar Engineering College, Chennai, India · 2023",
    authors: "M Akilan & M F Akila Lourdes",
    link: "https://github.com/AKilalours/Sign-Language-Regonization-using-CNN-Algorithm-with-Meachine-Learning-Techniques-Paper",
    linkLabel: "GitHub Repository",
    description: "Researched, built, and presented a real-time sign language recognition system — combining CNNs for spatial gesture feature extraction with LSTMs for temporal sequence modeling. Translates hand gestures from the Indian Sign Language alphabet into text and audio output, addressing one of the most persistent accessibility barriers faced by 63 million deaf and hard-of-hearing individuals in India. Presented to an audience of researchers, faculty, and engineers — demonstrating both technical depth and the ability to communicate complex AI systems to a live expert audience.",
    tags: ["CNN", "LSTM", "Accessibility AI", "Sign Language", "Live Presentation"],
  },
  {
    type: "Competition",
    typeLabel: "🏆 Competition — 3rd Place",
    accent: "from-amber-500/20 to-orange-500/10",
    border: "hover:border-amber-400/40",
    dot: "bg-amber-400",
    title: "IDEATHON 2K22 — 3rd Place Winner",
    venue: "Panimalar Engineering College, Chennai, India · 2022",
    authors: "",
    link: "https://github.com/AKilalours/IDEATHON_2022_ACFL",
    linkLabel: "GitHub Repository",
    description: "Secured 3rd place in a college-wide innovation competition — where teams have limited time to conceive an original problem, design a viable solution, build a working prototype, and defend it in front of a technical judging panel. The win demanded full-stack thinking: rapid ideation, architecture design, technical implementation, and high-stakes presentation under pressure. Placing in the top 3 is a direct signal of the ability to execute original ideas fast — the core skill FAANG engineering internships demand from day one.",
    tags: ["Innovation", "Rapid Prototyping", "Top 3", "Technical Presentation"],
  },
  {
    type: "Leadership",
    typeLabel: "🎓 Leadership",
    accent: "from-emerald-500/20 to-teal-500/10",
    border: "hover:border-emerald-400/40",
    dot: "bg-emerald-400",
    title: "School Pupil Leader",
    venue: "Secondary School, India",
    authors: "",
    link: "",
    linkLabel: "",
    description: "Selected through a rigorous faculty and peer evaluation process to serve as School Pupil Leader — the highest student leadership position in the institution. Responsible for representing the entire student body, coordinating school-wide events, and serving as the primary communication bridge between students and faculty. Managed competing stakeholder needs, resolved student concerns through structured dialogue, and drove participation in academic and extracurricular initiatives. This role — earned before university, before any technical credential — is the earliest evidence of ownership, accountability, communication under pressure, and the trust of peers and authority figures.",
    tags: ["Leadership", "Accountability", "Communication", "Stakeholder Management"],
  },
];

const AchievementsSection = () => {
  return (
    <SectionWrapper id="achievements" className="w-full bg-slate-950/90 dark:bg-black/85">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-24">
        <SectionHeader
          id="achievements"
          title="Achievements"
          desc="Publications, presentations, competitions & leadership."
          className="mb-16 mt-0"
        />

        <div className="flex flex-col gap-6 mt-20">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-40px" }}
              className={cn(
                "group relative rounded-2xl border border-border p-6 md:p-8",
                "bg-gradient-to-br",
                item.accent,
                "backdrop-blur-sm transition-all duration-300",
                item.border,
                "hover:shadow-lg"
              )}
            >
              {/* Top row: type label + link */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className={cn("w-2 h-2 rounded-full flex-shrink-0", item.dot)} />
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-200">
                    {item.typeLabel}
                  </span>
                </div>
                {item.link && (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center gap-1 font-mono text-xs text-zinc-200",
                      "hover:text-white font-extrabold transition-colors duration-200 group/link"
                    )}
                  >
                    <span className="underline underline-offset-2">{item.linkLabel}</span>
                    <ArrowUpRight
                      size={12}
                      className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
                    />
                  </Link>
                )}
              </div>

              {/* Title */}
              <h3 className="font-display font-extrabold text-white font-extrabold text-lg md:text-xl leading-snug mb-1">
                {item.title}
              </h3>

              {/* Venue */}
              <p className="font-mono text-xs text-zinc-200 mb-1">{item.venue}</p>

              {/* Authors */}
              {item.authors && (
                <p className="font-mono text-xs text-zinc-200/80 italic mb-4">
                  {item.authors}
                </p>
              )}

              {/* Divider */}
              <div className="w-full h-px bg-border my-4" />

              {/* Description */}
              <p className="font-mono text-sm text-zinc-200 leading-relaxed">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {item.tags.map((tag) => (
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

export default AchievementsSection;
