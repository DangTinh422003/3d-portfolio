import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { CardBody, CardContainer, CardItem } from "./ui/CardContainer";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BackgroundGradient } from "./ui/BackgroundGradient";

const Projects = () => {
  return (
    <div>
      <TextGenerateEffect
        className="mt-20 md:mt-32 md:mb-10 text-center text-[40px] md:text-5xl text-3xl leading-[1.2]"
        words="A small selection of Recent Projects"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <CardContainer className="border border-solid rounded-xl p-8">
          <CardBody className="w-full">
            <CardItem translateZ="50" className="w-full h-full">
              <div className="bg-[#13162D] relative w-full h-64 rounded-xl overflow-hidden">
                <Image
                  src={"/projects/1.png"}
                  className="object-contain rotate-6 scale-90"
                  sizes="auto"
                  alt=""
                  fill
                />
              </div>
            </CardItem>
            <CardItem
              translateZ="60"
              className="text-4xl font-bold gap-4 mt-10 mb-4 flex items-center"
            >
              <span>Portfolio</span>
              <a href="https://github.com/DangTinh422003" target="_blank">
                <FaGithub className="text-4xl cursor-pointer" />
              </a>
            </CardItem>
            <CardItem
              translateZ="60"
              className="text-xl leading-[1.6] text-white-100 line-clamp-4"
            >
              Project Description Of Personal Information, Including Skills And
              Programming Languages. Experiences And Jobs During The Time As A
              Student, Including Information About Other Personal Projects.
            </CardItem>
            <CardItem translateZ="40" className="mt-6 flex max-w-1/2">
              <div className="bg-black-100 flex items-center justify-center relative w-14 h-14 rounded-full overflow-hidden border border-white/[0.3] border-solid -translate-x-[0rem]">
                <div className="relative w-9 h-9">
                  <Image
                    src={"/techs/typescript.png"}
                    alt=""
                    fill
                    className="w-[95%] h-[95%]"
                  />
                </div>
              </div>
              <div className="bg-black-100 flex items-center justify-center relative w-14 h-14 rounded-full overflow-hidden border border-white/[0.3] border-solid -translate-x-[1rem]">
                <div className="relative w-9 h-9">
                  <Image
                    src={"/techs/typescript.png"}
                    alt=""
                    fill
                    className="w-[95%] h-[95%]"
                  />
                </div>
              </div>
              <div className="bg-black-100 flex items-center justify-center relative w-14 h-14 rounded-full overflow-hidden border border-white/[0.3] border-solid -translate-x-[2rem]">
                <div className="relative w-9 h-9">
                  <Image
                    src={"/techs/typescript.png"}
                    alt=""
                    fill
                    className="w-[95%] h-[95%]"
                  />
                </div>
              </div>
              <div className="bg-black-100 flex items-center justify-center relative w-14 h-14 rounded-full overflow-hidden border border-white/[0.3] border-solid -translate-x-[3rem]">
                <div className="relative w-9 h-9">
                  <Image
                    src={"/techs/typescript.png"}
                    alt=""
                    fill
                    className="w-[95%] h-[95%]"
                  />
                </div>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default Projects;
