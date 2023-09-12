import { motion, useInView, useScroll, useTransform } from "framer-motion";
import MarqueeText from "./MarqueeText";
import { useRef } from "react";

const FooterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: targetRef });

  const scale = useTransform(scrollYProgress, [0, 20], [1, 4]);

  return (
    <div className="h-fit w-full" ref={targetRef}>
      <MarqueeText />
      <div className="flex flex-col items-center bg-neutral-900">
        <div
          className="overflow-hidden px-3 py-10 text-center font-bold text-white md:px-10"
          ref={ref}
        >
          <motion.h1
            initial={{ y: 50 }}
            animate={inView && { y: 0 }}
            transition={{ type: "tween", duration: 0.6 }}
            className="font-playfair text-3xl sm:text-5xl md:text-8xl"
          >
            Pushing the boundries of floral art
          </motion.h1>
        </div>
        <div className="my-10 h-[350px] w-[85%] overflow-hidden rounded-md sm:h-[450px] md:h-[550px]">
          <motion.img
            style={{ scale: scale }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "tween", duration: 0.6 }}
            className="h-full w-full rounded-md object-cover"
            src="/img/pattern-2.jpg"
            alt="footer"
          />
        </div>
        <div className="h-[180px]"></div>
        <div className="flex w-full items-center justify-center bg-white p-10 text-neutral-600">
          Inspired by
          <a
            data-hidden="true"
            href="https://plantica.net/en/" target="_blank"
            className="group cursor-pointer p-1 text-xl text-black font-medium font-bricolage"
          >
            Planatica
            <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
