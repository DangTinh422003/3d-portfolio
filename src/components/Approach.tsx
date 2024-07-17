"use client";
import React from "react";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { AnimatePresence, motion } from "framer-motion";

const Approach = () => {
  return (
    <div>
      <h2 className="mt-14 mb-8 md:mt-32 md:mb-10 text-center text-[40px] md:text-5xl text-3xl leading-[1.2] font-bold">
        My <span className="text-purple">Approach</span>
      </h2>

      <div className="grid gap-10 grid-cols-1 lg:grid-cols-3">
        <Card>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-[#064C3A]"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-[#831843]"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-[#0276B4]"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </div>
  );
};

export default Approach;

const Card = ({
  children,
  cardChildren,
}: {
  children?: React.ReactNode;
  cardChildren?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-full mx-auto relative h-[30rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">{cardChildren}</div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
