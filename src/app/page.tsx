"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import SkillsSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experience";
import AchievementsSection from "@/components/sections/achievements";
import CertificatesSection from "@/components/sections/certificates";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import AkilaChat from "@/components/AkilaChat";

function MainPage() {
  return (
    <SmoothScroll>
      <AnimatedBackground />
      <main className={cn("bg-slate-100 dark:bg-transparent canvas-overlay-mode")}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <CertificatesSection />
        <ContactSection />
        <AkilaChat />
      </main>
    </SmoothScroll>
  );
}

export default MainPage;
