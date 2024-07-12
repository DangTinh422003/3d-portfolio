"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { CardBody, CardContainer, CardItem } from "./ui/CardContainer";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BackgroundGradient } from "./ui/BackgroundGradient";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { PROJECTS } from "@/data";

const Projects = () => {
  return (
    <div>
      <TextGenerateEffect
        className="mt-14 mb-8 md:mt-32 md:mb-10 text-center text-[40px] md:text-5xl text-3xl leading-[1.2]"
        words="A small selection of Recent Projects"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
        {PROJECTS.map((p) => (
          <ProjectItem key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

const ProjectItem = (p: (typeof PROJECTS)[number]) => {
  return (
    <BackgroundGradient>
      <CardContainer className="border border-solid rounded-xl p-4 md:p-8 h-full bg-black-100">
        <CardBody className="w-full h-full">
          <CardItem translateZ="80" className="w-full h-full">
            <div className="bg-[#13162D] relative w-full md:h-64 h-44 rounded-xl overflow-hidden">
              <Image
                src={p.img}
                className="object-contain rotate-6 scale-95"
                sizes="auto"
                alt=""
                fill
              />
            </div>
          </CardItem>
          <CardItem
            translateZ="70"
            className="text-3xl md:text-4xl font-bold gap-4 mt-4 md:mt-10 mb-4 flex items-center"
          >
            <span className="capitalize">{p.title}</span>
            <a href={p.src} target="_blank">
              <FaGithub className="text-4xl cursor-pointer hover:text-purple" />
            </a>
          </CardItem>
          <CardItem
            translateZ="60"
            className="md:text-xl leading-[1.6] text-white-100 line-clamp-3 md:min-h-28"
          >
            {p.desc}
          </CardItem>

          <CardItem
            translateZ="50"
            className="w-full flex justify-between items-center"
          >
            <div className="flex max-w-1/2">
              {p.techs.map((t, idx) => {
                return (
                  <div
                    key={t}
                    className={`bg-black-100 flex items-center justify-center relative w-6 h-6 md:w-12 md:h-12 rounded-full overflow-hidden border border-white/[0.3] border-solid`}
                    style={{
                      translate: `-${idx * 12}px`,
                    }}
                  >
                    <div className="relative w-5 h-5 md:w-8 md:h-8 rounded-full overflow-hidden">
                      <Image src={t} alt="" fill className="w-full h-full" />
                    </div>
                  </div>
                );
              })}
            </div>

            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                className="mt-4 flex items-center md:text-xl text-purple hover:underline gap-3"
              >
                <span>Check Live Site</span> <LuArrowUpRightFromCircle />
              </a>
            )}
          </CardItem>
        </CardBody>
      </CardContainer>
    </BackgroundGradient>
  );
};
