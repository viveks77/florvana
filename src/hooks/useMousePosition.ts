import { RefObject, useEffect, useState } from "react";



export function useMousePosition(ref: RefObject<HTMLElement>) {
    const [point, setPoint] = useState({ x: 0, y: 0 });
    const [target, setTarget] = useState<Element | null>(null);

    useEffect(() => {
      if (!ref.current) return;
    
      const handlePointerMove = ({ clientX, clientY, target }: MouseEvent) => {
        const element = ref.current!;

        const x = clientX - element.offsetLeft - element.offsetWidth / 2;
        const y = clientY - element.offsetTop - element.offsetHeight / 2;
        setPoint({ x, y });
        setTarget(target as Element);
      };
  
      window.addEventListener("mousemove", handlePointerMove);
  
      return () => window.removeEventListener("mousemove", handlePointerMove);
    }, [ref]);
  
    return {point, target};
  }

export default useMousePosition;
