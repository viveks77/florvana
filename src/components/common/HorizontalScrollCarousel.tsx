import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Card from "./Card";

type props = {
  cards: {
    url: string;
    title: string;
    id: number;
  }[];
};

const HorizontalScrollCarousel = ({ cards }: props) => {
  const targetRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  const [viewPort, setViewPort] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const onResize = useCallback((entries: ResizeObserverEntry[]) => {
    for (const entry of entries) {
      setViewPort(entry.contentRect.width);
    }
  }, []);

  useEffect(() => {
    scrollRef.current && setScrollWidth(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    if (!scrollRef.current) return;

    resizeObserver.observe(scrollRef.current);

    return () => resizeObserver.disconnect();
  }, [onResize]);

  const x = useTransform(scrollYProgress, [0, 1], [0 , -scrollWidth + viewPort]);

  const translateX = useSpring(x, { damping: 15, mass: 0.27, stiffness: 55 })


  return (
    <section className="relative" ref={targetRef}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden" ref={scrollRef}>
        <motion.div
          data-hidden="true"
          layout
          style={{ x:translateX }}
          animate={{ x: 0 }}
          initial={{ x: 100 }}
          className="flex items-center justify-around gap-4"
        >
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
      <div
        ref={ghostRef}
        style={{ height: scrollWidth }}
        className="w-full"
      ></div>
    </section>
  );
};

export default HorizontalScrollCarousel;
