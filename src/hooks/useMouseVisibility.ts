import { RefObject, useEffect, useState } from "react";

const useMouseVisibility = (ref: RefObject<HTMLElement>) => {
  const [isMouseVisible, setIsMouseVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseEnter = () => {
      setIsMouseVisible(true);
    };

    const handleMouseLeave = () => {
      setIsMouseVisible(false);
    };

    window.addEventListener("mouseover", handleMouseEnter);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mouseover", handleMouseEnter);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [ref]);

  return isMouseVisible;
};

export default useMouseVisibility;
