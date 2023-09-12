import { motion } from "framer-motion";

type props = {
    children : React.ReactNode
}

export const Link = ({children}: props) => {
  return (
    <motion.a href="#" className="group relative mt-1 md:mt-2 inline-block">
      <span className="relative z-10 block overflow-hidden rounded-2xl border-2 border-neutral-900 px-5 py-2 font-semibold leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white">
        <span className="ease rop absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-neutral-900 transition-all duration-300 group-hover:-rotate-180"></span>
        <span className="relative group-hover:text-white">{children}</span>
      </span>
    </motion.a>
  );
};
