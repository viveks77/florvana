import HorizontalScrollCarousel from "@components/common/HorizontalScrollCarousel";
import FooterSection from "@components/footerSection/FooterSection";
// import FooterSection from "@components/footerSection/FooterSection";
import HeaderSection from "@components/headerSection/HeaderSection";
import PatternSection from "@components/patternSection/PatternSection";
import ProjectSection from "@components/projectSection/ProjectSection";
import { cards } from "@helpers/constants";

const Home = () => {
  return (
    <main>
      <HeaderSection />
      <div className="bg-neutral-900 px-3 md:px-10">
        <HorizontalScrollCarousel cards={cards} />
      </div>
      <ProjectSection />
      <PatternSection />
      <FooterSection />
    </main>
  );
};

export default Home;
