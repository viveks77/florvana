import useMousePosition from "@hooks/useMousePosition";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useReducer, useRef } from "react";

enum ActionTypes {
  SET_TEXT = "SET_TEXT",
  SET_STYLE = "SET_STYLE",
  SET_SRC = "SET_SRC",
  RESET = "RESET",
}

type ReducerAction = {
  type: ActionTypes;
  payload?: StateType;
};

type StateType = {
  innerText?: string;
  height?: string;
  width?: string;
  background?: string;
  padding?: string;
  backdropFilter?: string;
  src?: string;
  margin?: string;
  borderRadius?: string;
};

const initialState: StateType = {
  innerText: "",
  height: "0.5rem",
  width: "0.5rem",
  background: "rgb(23,23,23)",
  padding: "0px",
  backdropFilter: "none",
  src: "",
  margin: "0px",
  borderRadius: "100%",
};

const stylesReducer = (state: StateType, action: ReducerAction) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.SET_TEXT:
      return {
        ...state,
        innerText: payload?.innerText || "",
      };
    case ActionTypes.SET_STYLE:
      return {
        ...state,
        ...payload,
      };
    case ActionTypes.RESET:
      return initialState;
    default:
      return state;
  }
};

const Pointer = ({ isVisible }: { isVisible: boolean }) => {
  const ref = useRef(null);
  const [state, dispatch] = useReducer(stylesReducer, initialState);
  const { point, target } = useMousePosition(ref);

  const variants = {
    default: {
      x: point.x,
      y: point.y,
    },
  };

  const setPointerStyles = useCallback((target: Element) => {
    if (target.getAttribute("data-text")) {
      dispatch({
        type: ActionTypes.SET_STYLE,
        payload: {
          innerText: target.getAttribute("data-text") || "",
          height: "auto",
          width: "auto",
          backdropFilter: "saturate(100%) blur(0.347vw)",
          background: "hsla(0,0%,62.7%,.3)",
          padding: "3px 10px",
          borderRadius: "10px",
        },
      });
    } else if (target.getAttribute("data-src")) {
      const src = target.getAttribute("data-src") || "";
      dispatch({
        type: ActionTypes.SET_STYLE,
        payload: {
          src,
          height: "250px",
          width: "250px",
          background: "transparent",
          margin: "19em 0px 0px 17em",
          borderRadius: "0px",
        },
      });
    } else if(target.getAttribute("data-hidden")){
      dispatch({type: ActionTypes.SET_STYLE, payload: {
        backdropFilter: "none",
        background: "transparent",
        innerText: "",
      }})
    } else {
      dispatch({ type: ActionTypes.RESET });
    }
  }, []);

  useEffect(() => {
    if (!target) return;

    setPointerStyles(target);
  }, [target, setPointerStyles]);

  const childVariants = {
    exit: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      style={{ transform: "translate3d(-50%, -50%, 0)" }}
      variants={variants}
      animate="default"
      transition={{ ease: [0.17, 0.67, 0.83, 0.93], duration: 0.3 }}
      layoutId="pointer"
      className="pointer-events-none fixed z-10 rounded-full"
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key={"pointer_key"}
            layoutId="pointercursor"
            variants={childVariants}
            initial="hidden"
            style={{
              width: state.width,
              height: state.height,
              background: state.background,
              padding: state.padding,
              margin: state.margin,
              borderRadius: state.borderRadius,
            }}
            animate="visible"
            exit="exit"
            className="font-bricolage uppercase"
          >
            {state.innerText && (
              <motion.span className="text-white">
                {state.innerText}
              </motion.span>
            )}
            {state.src && (
              <motion.img
                initial={{filter: "blur(5px)"}}
                animate={{filter: "blur(0px)"}}
                transition={{duration: 0.6}}
                src={state.src}
                alt="pointer"
                className=" h-full w-full rounded-lg object-cover"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Pointer;
