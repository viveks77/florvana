import { motion } from "framer-motion";
import Navlink from "./Navlink";

const Navbar = () => {
  const links = [
    { title: "Works", href: "#" },
    { title: "Products", href: "#" },
    { title: "Patterns", href: "#" },
    { title: "About", href: "#" },
  ];

  return (
    <motion.nav initial={{opacity: 0, y:-50}} animate={{opacity: 1, y: 0}} transition={{type: "tween", duration: 0.6, delay: 0.2}}  className="p-3 md:p-10">
      <div className="flex items-center justify-between">
        <h1 className="font-bricolage text-3xl tracking-wider">florvana</h1>
        <div className="hidden md:block">
          <ul className="flex items-center justify-between space-x-5">
            {links.map((d) => (
              <li key={d.title}>
                <Navlink {...d}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
