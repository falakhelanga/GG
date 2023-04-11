import { MutableRefObject } from "react";

const scrollToSection = (ref: MutableRefObject<null>) => {
  window.scrollTo({
    top: ref?.current?.offSet,
    behavior: "smooth",
  });
};
