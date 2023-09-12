import { motion } from "framer-motion";

const HeadingText = ({ text }: { text: string }) => {
    const container = {
      show: {
        transition: {
          staggerChildren: 0.04
        },
      },
    };
  
    const items = {
      hidden: {
        y: 200,
      },
      show: {
        y: 0,
        opacity: 1,
      },
    };
  
    return (
      <motion.div
        className="flex items-center overflow-hidden"
        style={{ lineHeight: "1" }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {text.split(" ").map((t, i) => {
          return (
            <div className="flex items-center" key={i}>
              {[...t].map((d, j) => (
                <motion.span
                  variants={items}
                  key={j}
                  transition={{ type: "just", ease: 'easeInOut', duration: 0.6 }}
                >
                  {d}
                </motion.span>
              ))}
              {i < text.split(" ").length - 1 && <span>&nbsp;</span>}
            </div>
          );
        })}
      </motion.div>
    );
  };

  export default HeadingText