import Navbar from "@components/navbar/Navbar";
import Pointer from "@components/pointer/Pointer";
import useMouseVisibility from "@hooks/useMouseVisibility";
import Home from "./Home";
import { useRef } from "react";


function App() {

  const ref = useRef(null);
  const isMouseVisible = useMouseVisibility(ref);
  
  return (
    <div className="relative" ref={ref}>
      <Navbar />
      <Home />
      <Pointer isVisible={isMouseVisible}/>
    </div>
  );
}

export default App;
