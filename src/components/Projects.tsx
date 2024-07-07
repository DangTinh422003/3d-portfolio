import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { PinContainer } from "./ui/PinCard";

const Projects = () => {
  return (
    <div>
      <TextGenerateEffect
        className="my-20 lg:my-36 text-center text-[40px] md:text-5xl text-3xl leading-[1.2]"
        words="A small selection of recent projects"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <PinContainer
          containerClassName="bg-red-500 w-full"
          className="min-w-fit md:w-96"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          eveniet eligendi quis consectetur culpa! Ut perspiciatis sed iusto
          repudiandae nam itaque facere unde, adipisci quos fuga recusandae
          corrupti sequi quo!
        </PinContainer>
        <PinContainer
          containerClassName="bg-red-500 w-full"
          className="min-w-fit md:w-96"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          eveniet eligendi quis consectetur culpa! Ut perspiciatis sed iusto
          repudiandae nam itaque facere unde, adipisci quos fuga recusandae
          corrupti sequi quo!
        </PinContainer>
        <PinContainer
          containerClassName="bg-red-500 w-full"
          className="min-w-fit md:w-96"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          eveniet eligendi quis consectetur culpa! Ut perspiciatis sed iusto
          repudiandae nam itaque facere unde, adipisci quos fuga recusandae
          corrupti sequi quo!
        </PinContainer>
        <PinContainer
          containerClassName="bg-red-500 w-full"
          className="min-w-fit md:w-96"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          eveniet eligendi quis consectetur culpa! Ut perspiciatis sed iusto
          repudiandae nam itaque facere unde, adipisci quos fuga recusandae
          corrupti sequi quo!
        </PinContainer>
      </div>
    </div>
  );
};

export default Projects;

const ProjectItem = () => {
  return <div>ProjectItem</div>;
};
