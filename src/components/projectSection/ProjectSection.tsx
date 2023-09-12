import Accordian from "@components/common/Accordian";
import { Link } from "@components/common/Common";
import { projectCards } from "@helpers/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="mb-10 px-3 md:px-10">
      <div className="h-56"></div>
      <div className="mx-auto mb-20 w-[80%] text-center text-neutral-600 md:w-[60%] lg:w-[40%]">
        <span>
          We are a creative studio that unites the beauty of flowers with art, fashion,
          and design. From space design to textiles, product innovation, and art
          direction, we infuse every project with floral elegance. Explore our
          work where blossoms meet design excellence.
        </span>
      </div>
      <div className="mb-10 flex flex-col items-center">
        <div className="mx-auto sm:overflow-hidden">
          <motion.div
            ref={ref}
            className="font-playfair text-5xl font-bold tracking-wider md:text-6xl"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView && { y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "tween" }}
          >
            PROJECTS
          </motion.div>
        </div>
        <div className="mt-10 w-full">
          <motion.div
            animate={isInView && { y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            transition={{ type: "tween", duration: 0.7, delay: 0.1 }}
            className="text-netural-600 font-bricolage"
          >
            Recent Projects
          </motion.div>
          <div
            className="mt-3 flex flex-col items-center gap-4 overflow-hidden sm:flex-row"
            data-hidden={true}
          >
            {projectCards.map((d) => {
              return (
                <motion.div
                  animate={isInView && { y: 0, opacity: 1 }}
                  initial={{ y: 50, opacity: 0 }}
                  transition={{ type: "tween", duration: 0.7, delay: 0.2 }}
                  className="project-card group relative overflow-hidden rounded-lg"
                  key={d.id}
                >
                  <img
                    src={d.url}
                    alt={d.title}
                    data-text="View"
                    className=" h-[250px] w-[600px] rounded-lg object-cover sm:h-[200px] sm:w-[220px] lg:h-[380px] lg:w-[440px]"
                  />
                  <div className="ml-1 mt-3 font-playfair text-sm font-medium">
                    {d.title}
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-20">
            <Accordian title="Work">
              {WorkSection.map(({ title }, i) => (
                <Link key={i}>{title}</Link>
              ))}
            </Accordian>
            <Accordian title="Projects">
              {PorjectSection.map(({ title }, i) => (
                <Link key={i}>{title}</Link>
              ))}
            </Accordian>
            <Accordian title="Exhibitions">
              {ExhibitionsSection.map(({ title }, i) => (
                <Link key={i}>{title}</Link>
              ))}
            </Accordian>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;

const WorkSection = [
  {
    title: "All Work",
  },
  {
    title: "Events",
  },
  {
    title: "Facilities",
  },
  {
    title: "Store",
  },
];

const PorjectSection = [
  {
    title: "All Projects",
  },
  {
    title: "Fashion",
  },
  {
    title: "Lifestyle",
  },
  {
    title: "Package",
  },
  {
    title: "Sports",
  },
];

const ExhibitionsSection = [
  {
    title: "All Exhibitions",
  },
  {
    title: "India",
  },
  {
    title: "World",
  },
];
