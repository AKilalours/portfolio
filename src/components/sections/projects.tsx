"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";

import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./section-header";

import SectionWrapper from "../ui/section-wrapper";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto">
      <SectionHeader id='projects' title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {projects.map((project) => (
          <Modall key={project.src} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const Modall = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn w-full">
          <div
            className="relative w-full rounded-xl overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              className="absolute w-full h-full top-0 left-0 object-cover group-hover/modal-btn:scale-[1.05] transition-all duration-500"
              src={project.src}
              alt={project.title}
              width={600}
              height={450}
            />
            {/* Gradient overlay */}
            <div className="absolute w-full h-2/3 bottom-0 left-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col items-start gap-2">
              <h3 className="text-white font-display font-bold text-base leading-snug line-clamp-2">
                {project.title}
              </h3>
              <span className="text-[11px] font-mono bg-white text-black rounded-full px-3 py-0.5 font-medium">
                {project.category}
              </span>
            </div>
            {/* Hover border glow */}
            <div className="absolute inset-0 ring-0 group-hover/modal-btn:ring-2 ring-white/20 rounded-xl transition-all duration-300 pointer-events-none" />
          </div>
        </ModalTrigger>

        <ModalBody className="md:max-w-4xl md:max-h-[85%] overflow-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalContent>
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>
          <ModalFooter className="gap-4">
            <button className="px-4 py-2 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28 font-mono">
              Close
            </button>
            <Link href={project.live} target="_blank">
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-4 py-2 rounded-md border border-black w-28 font-mono font-bold">
                Visit
              </button>
            </Link>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        {project.title}
      </h4>
      <div className="flex flex-col md:flex-row md:justify-evenly max-w-screen overflow-hidden md:overflow-visible">
        <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
          <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
            Stack
          </p>
          {project.skills.frontend?.length > 0 && (
            <FloatingDock items={project.skills.frontend} />
          )}
        </div>
        {project.skills.backend?.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
            <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
              Infrastructure
            </p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>
      {project.content}
    </>
  );
};
