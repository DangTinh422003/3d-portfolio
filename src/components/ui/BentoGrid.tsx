"use client";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { GlobeDemo } from "./GlobeDemo";
import animationData from "@/data/confetti.json";

import MagicButton from "./MagicButton";
import { IoCopy } from "react-icons/io5";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { TextGenerateEffect } from "./TextGenerateEffect";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[13rem] grid-cols-1 md:grid-cols-5 lg:gap-6 xl:gap-10 max-w-7xl mx-auto gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  img,
  imgClassName,
  spareImg,
  titleClassName,
  id,
}: {
  id?: number;
  className?: string;
  imgClassName?: string;
  titleClassName?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  spareImg?: string;
}) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black-100 dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 overflow-hidden relative",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={clsx("flex justify-center items-center h-full")}>
        <div className="w-full h-full">
          {img && (
            <div className="w-full h-full absolute top-0 left-0">
              <div className={imgClassName}>
                <Image
                  src={img}
                  alt={img}
                  sizes="auto"
                  fill
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          )}

          <div
            className={`opacity-80 absolute ${
              id === 4
                ? "right-0 bottom-0 w-1/2 h-1/2"
                : "top-0 left-0 w-full h-full"
            }`}
          >
            {spareImg && (
              <div className="w-full h-full">
                <Image
                  src={spareImg}
                  alt={spareImg}
                  sizes="auto"
                  fill
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}
          </div>

          {id === 6 && (
            <div className="absolute top-0 left-0">
              <BackgroundGradientAnimation>
                <div className="w-full h-full z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
              </BackgroundGradientAnimation>
            </div>
          )}

          <div
            className={cn(
              "transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:px-6 w-full"
            )}
          >
            <p className="font-sans font-extralighttext-[#C1C2D3] z-50">
              {description}
            </p>

            <div
              className={clsx(
                "relative font-sans w-full font-bold z-50",
                titleClassName
              )}
            >
              <TextGenerateEffect words={title?.toString()!} />
            </div>
            {id === 6 && (
              <div className="w-full flex justify-center my-2">
                <MagicButton
                  type="border-magic"
                  className="z-50 flex gap-x-3 items-center justify-center"
                >
                  {!isCopied ? "Copy My Email Address!" : "Email Copied!"}
                  <IoCopy
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "caodangtinh04022003@gmail.com"
                      );
                      setIsCopied(true);
                    }}
                  />
                </MagicButton>
              </div>
            )}
          </div>
        </div>

        <div
          className={clsx(
            id === 2 && "absolute top-16 left-1/2 -translate-x-1/2 z-30"
          )}
        >
          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-4 lg:gap-5 w-fit absolute -right-3 lg:-right-2 top-0">
              <div className="translate-y-6 lg:translate-y-0 flex flex-col gap-4 lg:gap-8">
                {["Typescript", "Express", "Java"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>
              <div className="flex flex-col gap-4 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                {["Next.js", "Scss", "Javascript"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
