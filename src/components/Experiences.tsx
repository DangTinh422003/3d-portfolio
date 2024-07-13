import React from "react";
import { Button } from "./ui/MovingBorder";
import { EXPERIENCES } from "@/data";
import Image from "next/image";

const Experiences = () => {
  return (
    <div className="mt-16 lg:mt-20 mb-10">
      <h2 className="mt-14 mb-8 md:mt-32 md:mb-10 text-center text-[40px] md:text-5xl text-3xl leading-[1.2] font-bold">
        My work <span className="text-purple">Experience</span>
      </h2>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {EXPERIENCES.map((ex, idx) => (
          <Item key={ex.id} ex={ex} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;

const Item = ({
  ex,
  idx,
}: {
  ex: (typeof EXPERIENCES)[number];
  idx: number;
}) => {
  return (
    <Button
      borderClassName="border-purple"
      borderRadius="1.75rem"
      duration={6000 + idx * 250}
      className="bg-slate-900/[0.] text-black dark:text-white border-neutral-200 dark:border-slate-800"
    >
      <div className="md:min-h-48 lg:grid grid-cols-4 rounded-3xl p-8 gap-x-8">
        <div className="col-span-1 lg:flex items-center justify-center">
          <div className="relative w-16 h-16 lg:w-28 lg:h-28 overflow-hidden">
            <Image src={ex.img} alt="" sizes="auto" fill />
          </div>
        </div>
        <div className="mt-4 lg:mt-0 col-span-3">
          <p className="text-start text-xl md:text-2xl font-bold">{ex.title}</p>
          <p className="text-left lg:text-center">{ex.company}</p>
          <p className="text-start text-white-100 mt-3 font-semibold">
            {ex.description}
          </p>
        </div>
      </div>
    </Button>
  );
};
