import { motion } from "framer-motion";
import { useState } from "react";
import ImageHeader from "./ImageHeader";
import { patterns, series } from "@helpers/constants";
import LinkText from "./LinkText";
import React from "react";

const PatternSection = () => {
  const [backdropImg, setBackdropImg] = useState<string>(patterns[0].src);

  const handleOnHover = (p: (typeof patterns)[number]) => {
    setBackdropImg(p.src);
  };

  return (
    <div className="relative">
      <ImageHeader src={backdropImg} />
      <div className="relative z-10 ml-auto h-1/2 w-full bg-white pb-10 lg:w-1/2 lg:rounded-l-lg lg:rounded-bl-none">
        <div className="px-3 pt-10 lg:px-10">
          <h1 className="z-10 font-playfair text-6xl font-bold uppercase tracking-wider">
            Patterns
          </h1>
          <div className="mt-[8rem] w-full text-justify text-sm text-neutral-600 lg:mx-auto lg:w-2/3">
            <span>
              Inspired from "Ikebana", a traditional Japanese floral design,
              Pantica is an authentic floral pattern brand that are graphical
              and true to life. The patterns are generated from works of floral
              artists, where they spin out the fascinating beauty of form and
              profundity of Ikebana by hands and capture the moment into
              patterns.
            </span>
          </div>
          <div className="mt-[8rem] flex items-center lg:justify-end justify-start w-full">
            <div className="w-full px-3">
              <div className="mb-5 flex lg:justify-end justify-start font-bricolage text-3xl">
                <h3>Pickup Patterns</h3>
              </div>
              <div className="flex items-center justify-start lg:justify-end gap-2 md:flex-row flex-col w-full">
                {patterns.map((p, i) => {
                  return (
                    <motion.div
                      key={i}
                      className="lg:h-[100px] lg:w-[100px] md:h-36 md:w-36 w-full h-[350px] cursor-pointer rounded-lg"
                      onHoverStart={() => handleOnHover(p)}
                    >
                      <img
                        src={p.src}
                        className="h-full w-full rounded-lg object-cover"
                        alt={p.alt}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-3 lg:mx-auto mt-[8rem] lg:w-2/3">
          <div className="font-bricolage text-4xl">*Series</div>
          <div className="mt-5 flex flex-wrap items-center justify-start">
            {series.map((s, i) => {
              return (
                <React.Fragment key={i}>
                  <LinkText title={s.title} src={s.src} key={i} />
                  {series.length - 1 > i && <div className="mx-1">/</div>}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternSection;
