import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useScroll = (thresh = 0.2) => {
  const controls = useAnimation(0);
  const [element, view] = useInView({ threshold: thresh });

  if (view) {
    console.log("started");
    controls.start("show");
  } else {
    console.log("hidden");
    controls.start("hidden");
  }

  return [element, controls];
};
