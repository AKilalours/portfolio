"use client";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SKILLS, SkillNames } from "@/data/constants";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<typeof SKILLS[SkillNames] | null>(null);

  // Listen for skill selection from Spline keyboard via custom event
  useEffect(() => {
    const handler = (e: CustomEvent) => {
      const skillName = e.detail?.name as SkillNames;
      if (!skillName) {
        setSelectedSkill(null);
        return;
      }
      // Direct lookup
      const skill = SKILLS[skillName as SkillNames];
      if (skill) {
        setSelectedSkill(skill);
        return;
      }
      // Fuzzy match
      const found = Object.values(SKILLS).find(s =>
        s.name === skillName ||
        s.name.toLowerCase() === skillName.toLowerCase() ||
        skillName.toLowerCase().includes(s.name.toLowerCase()) ||
        s.name.toLowerCase().includes(skillName.toLowerCase())
      );
      setSelectedSkill(found || null);
    };

    window.addEventListener("spline-skill-hover" as any, handler);
    return () => window.removeEventListener("spline-skill-hover" as any, handler);
  }, []);

  return (
    <SectionWrapper id="skills" className="w-full h-screen md:h-[150dvh] pointer-events-none">
      <SectionHeader id="skills" title="Tech Stack" desc="(hint: press a key)" />

      {/* Skill popup — shows when hovering/pressing Spline keycaps */}
      <div className="pointer-events-auto flex justify-center px-4 mt-6 relative z-50">
        <div className="w-full max-w-md min-h-[72px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {selectedSkill ? (
              <motion.div
                key={selectedSkill.name}
                initial={{ opacity: 0, y: -14, scale: 0.93 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="w-full flex items-center gap-4 rounded-2xl px-5 py-4 border border-white/15"
                style={{
                  background: "rgba(8,8,20,0.95)",
                  backdropFilter: "blur(24px)",
                  boxShadow: `0 8px 40px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)`
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 p-2 border border-white/10"
                  style={{ background: `${selectedSkill.color}22` }}
                >
                  <img
                    src={selectedSkill.icon}
                    alt={selectedSkill.label}
                    className="w-full h-full object-contain"
                    onError={e => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display font-extrabold text-white text-base leading-tight">
                    {selectedSkill.label}
                  </p>
                  <p className="font-mono text-[11px] text-zinc-300 mt-1 leading-relaxed">
                    {selectedSkill.shortDescription}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="text-zinc-500 hover:text-white text-xl flex-shrink-0 pointer-events-auto leading-none"
                >
                  ×
                </button>
              </motion.div>
            ) : (
              <motion.p
                key="hint"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="font-mono text-xs text-zinc-500 text-center"
              >
                hover or press any keycap to see details
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
