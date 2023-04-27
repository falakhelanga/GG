import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDoubleUp } from "@fortawesome/pro-solid-svg-icons";
import { useState, useEffect } from "react";

export const ScrollToTop = () => {
  const [show, setShow] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <div
      onClick={() => {
        scrollToTop();
      }}
      className={` container  border-2 text-pink border-pink md:cursor-pointer md:bottom-5 bottom-12 mb-4 md:mb-0 right-0   z-10 w-10 h-10  rounded-full overflow-hidden  items-center justify-center top-1  ${
        show ? "flex" : "hidden"
      } hover:bg-pink hover:text-white`}
    >
      <div className={`absolute  animate-bounce duration-700`}>
        <FontAwesomeIcon icon={faChevronDoubleUp} />
      </div>
    </div>
  );
};
