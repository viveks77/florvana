import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type props = {
  card: {
    url: string;
    title: string;
    id: number;
  }
};

const Card = ({ card }: props) => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <div
      
      ref={ref}
      className="image-card group relative h-[25vh] md:h-[50vh] w-[250px] md:w-[450px] overflow-hidden rounded-md"
    >
      <motion.img
        data-text={card.title}
        src={card.url}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-110 ${!inView ? 'blur-3xl' : ''}`}
      ></motion.img>
    </div>
  );
};

export default Card;
