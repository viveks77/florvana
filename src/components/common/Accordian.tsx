import React, { useRef, useState } from "react";
import { Arrow } from "./Icons";
import { AnimatePresence, motion, useInView } from "framer-motion";

type Props = {
  children: React.ReactNode;
  title: string;
};

const Accordian = ({ children, title }: Props) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const isInView = useInView(ref);


  return (
    <motion.div className="border-t-2 py-2 md:mb-10 mb-4 transition-all overflow-hidden" ref={ref}>
      <motion.div initial={{y: 100, opacity: 0}} animate={isInView && {y: 0, opacity: 1}} transition={{type: "tween", duration: 0.6}}
        className="flex cursor-pointer items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-playfair text-5xl md:text-[6vw] font-bold uppercase">
          {title}
        </div>
        <div>
          <Arrow className={`md:h-16 md:w-16 w-10 h-10 transition-all duration-500 ${isOpen ? 'rotate-[90deg]' : ''}`} />
        </div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="overflow-hidden"
          >
            <div className="mt-5 flex items-center gap-3 flex-wrap">
            {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordian;
