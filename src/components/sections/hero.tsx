"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File, Mail, Phone } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { config } from "@/data/config";
import Image from "next/image";
import SectionWrapper from "../ui/section-wrapper";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">

        {/* ── Left: Text ── */}
        <div className={cn(
          "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2] col-span-1",
          "flex flex-col justify-start md:justify-center items-center md:items-start",
          "pt-28 sm:pb-16 md:p-20 lg:p-24 xl:p-28"
        )}>
          {!isLoading && (
            <div className="flex flex-col">
              <div>
                <BlurIn delay={0.7}>
                  <p className={cn(
                    "md:self-start mt-4 font-thin text-md text-slate-500 dark:text-zinc-400",
                    "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text"
                  )}>
                    Hi, I am
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1 className={cn(
                        "-ml-[6px] leading-none font-thin text-transparent text-slate-800 text-left",
                        "font-thin text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
                        "cursor-default text-edge-outline font-display"
                      )}>
                        Akila<br />Lourdes<br />Francis
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="dark:bg-white dark:text-black">
                      there&apos;s something waiting for you in devtools
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>

                <BlurIn delay={1.2}>
                  <p className={cn(
                    "md:self-start md:mt-4 font-thin text-md text-slate-500 dark:text-zinc-400",
                    "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text"
                  )}>
                    AI Engineer
                  </p>
                </BlurIn>
              </div>

              <div className="mt-8 flex flex-col gap-3 w-fit">
                {/* Resume */}
                <Link
                  href="https://docs.google.com/document/d/1YeRQO2AWUyxtsBTYlKBoEwAwObtD8usSJHuZhZjOawQ/edit?usp=sharing"
                  target="_blank"
                  className="flex-1"
                >
                  <BoxReveal delay={1.8} width="100%">
                    <Button className="flex items-center gap-2 w-full">
                      <File size={18} />
                      <p>My Resume</p>
                    </Button>
                  </BoxReveal>
                </Link>

                {/* Social row */}
                <BoxReveal delay={2} width="100%">
                  <div className="flex items-center gap-2 flex-wrap">

                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
                        <Link href={config.social.github} target="_blank" className="cursor-can-hover">
                          <Button variant="outline"><GitHubIcon /></Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="bottom"><p>GitHub</p></TooltipContent>
                    </Tooltip>

                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
                        <Link href={config.social.linkedin} target="_blank" className="cursor-can-hover">
                          <Button variant="outline"><LinkedInIcon /></Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="bottom"><p>LinkedIn</p></TooltipContent>
                    </Tooltip>

                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
                        <Link href={`mailto:${config.email}`} className="cursor-can-hover">
                          <Button variant="outline"><Mail size={20} /></Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="bottom"><p>{config.email}</p></TooltipContent>
                    </Tooltip>

                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
                        <Link href="tel:+13472782942" className="cursor-can-hover">
                          <Button variant="outline"><Phone size={20} /></Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="bottom"><p>+1 (347) 278-2942</p></TooltipContent>
                    </Tooltip>

                  </div>
                </BoxReveal>
              </div>
            </div>
          )}
        </div>

        {/* ── Right: Photo ── */}
        <div className={cn(
          "hidden md:flex col-span-1",
          "items-center justify-center",
          "h-[calc(100dvh-4rem)]"
        )}>
          {!isLoading && (
            <BlurIn delay={1.4}>
              <div className={cn(
                "relative w-72 h-72 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px]",
                "rounded-full overflow-hidden",
                "ring-2 ring-slate-200 dark:ring-zinc-700",
                "shadow-2xl"
              )}>
                <Image
                  src="/assets/akila.png"
                  alt="Akila Lourdes Miriyala Francis"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </BlurIn>
          )}
        </div>

      </div>

      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
