"use client";

import { EXPERIENCE, SkillNames, SKILLS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";

const ExperienceSection = () => {
  return (
    <SectionWrapper
      className="flex flex-col items-center justify-center min-h-[120vh] py-20 z-10"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="experience"
          title="Experience"
          desc="My professional journey."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="flex flex-col gap-0 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-6 top-6 bottom-6 w-px bg-border" />

          {EXPERIENCE.map((exp, index) => (
            <div key={exp.id} className="relative pl-16 pb-12 last:pb-0">
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={cn(
                  "absolute left-[18px] top-6 w-4 h-4 rounded-full border-2",
                  "border-foreground bg-background",
                  "shadow-sm"
                )}
              />
              <ExperienceCard experience={exp} index={index} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: (typeof EXPERIENCE)[0];
  index: number;
}) => {
  // Split company string on " · " to extract name, location, type
  const companyParts = experience.company.split(" · ");
  const companyName = companyParts[0];
  const companyMeta = companyParts.slice(1);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay: index * 0.12, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        className={cn(
          "bg-card text-card-foreground border-border",
          "hover:border-foreground/25 transition-all duration-300",
          "shadow-sm hover:shadow-md"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex flex-col gap-3">
            {/* Date badge */}
            <Badge variant="secondary" className="w-fit font-mono text-xs font-normal gap-1.5">
              <Calendar size={11} />
              {experience.startDate} — {experience.endDate}
            </Badge>

            {/* Title */}
            <CardTitle className="text-xl font-bold tracking-tight">
              {experience.title}
            </CardTitle>

            {/* Company + meta */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-base font-semibold text-foreground">
                {companyName}
              </span>
              {companyMeta.map((m, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="text-[11px] font-mono font-normal gap-1 text-muted-foreground"
                >
                  {i === 0 && <MapPin size={10} />}
                  {m}
                </Badge>
              ))}
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Bullet points */}
          <ul className="space-y-3">
            {experience.description.map((point, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-foreground/40" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Skill badges with logos */}
          <div className="flex flex-wrap gap-2 pt-1 border-t border-border">
            {experience.skills.map((skillName) => {
              const skill = SKILLS[skillName as SkillNames];
              if (!skill) return null;
              return (
                <Badge
                  key={skillName}
                  variant="outline"
                  className="gap-1.5 text-xs font-normal bg-secondary/30 hover:bg-secondary/50 transition-colors border-transparent"
                >
                  <img
                    src={skill.icon}
                    alt={skill.label}
                    className="w-3.5 h-3.5 object-contain opacity-80"
                  />
                  {skill.label}
                </Badge>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceSection;
