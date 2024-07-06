import { cn } from "@/utils/cn";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { GlobeDemo } from "./GlobeDemo";
import clsx from "clsx";
import MagicButton from "./MagicButton";

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
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
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
            className={`${
              id === 4 && "opacity-80 absolute w-1/2 h-1/2 right-0 bottom-0"
            } `}
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
              titleClassName,
              "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:px-10"
            )}
          >
            <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
              {description}
            </div>

            <div
              className={`relative font-sans text-lg lg:text-3xl w-full font-bold z-50`}
            >
              {title}
            </div>
            {id === 6 && (
              <div className="w-full flex justify-center my-2">
                <MagicButton type="border-magic">Show my work</MagicButton>
              </div>
            )}
          </div>
        </div>

        {id === 2 && (
          <div className="z-10 absolute top-0 left-0 w-full h-full">
            <GlobeDemo />
          </div>
        )}
      </div>
    </div>
  );
};
