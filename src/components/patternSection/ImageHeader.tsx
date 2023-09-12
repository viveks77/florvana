import { motion } from "framer-motion";

const ImageHeader = ({ src }: { src: string }) => {
  return (
    <motion.div
      className="sticky top-0 h-[120vh] w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{opacity: 0}}
      key={src}
      transition={{ duration: 0.8 }}
    >
      <img src={src} className="h-full w-full object-cover" alt="" />
    </motion.div>
  );
};

export default ImageHeader;
