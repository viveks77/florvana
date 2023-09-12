import HeadingText from "@components/common/HeadingText";
import { motion } from "framer-motion";

const HeaderSection = () => {
  const headings = ["The Art of Flowers", "A Gentle Visual Journey"];

  return (
    <div className="mt-28 mb-28 md:mb-0 w-full p-3 md:p-10">
    <div className="text-[8vw] md:text-[6vw] font-playfair font-bold">
        {headings.map((heading, i) => (
          <HeadingText text={heading} key={i} />
        ))}
      </div>
      <motion.div
        className="mt-2 text-neutral-500 text-sm md:text-[1.6vw]"
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ type: "tween", duration: 0.6 }}
      >
        Discover the Tranquil Elegance of Nature's Petals
      </motion.div>
    </div>
  );
};

export default HeaderSection;
