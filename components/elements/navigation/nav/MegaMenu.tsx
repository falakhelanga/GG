import { Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { motion } from "framer-motion";
export default function MegaMenu({
  menu,
  children,
  index,
  mouseLeave = true,
}: {
  menu?: any;
  children?: any;
  index?: any;
  mouseLeave?: any;
}) {
  const variants = {
    open: { opacity: 1, y: 0, display: "block" },
    closed: {
      opacity: 1,
      y: -800,
      // transitionEnd: {
      //   display: "none",
      // },
    },
  };

  return (
    <motion.div
      initial="closed"
      animate={index == menu.menuIndex ? "open" : "closed"}
      transition={{
        duration: 0.4,
      }}
      variants={variants}
      className="absolute l transform -translate-x-1/2 w-screen sm:px-0 p-0 z-0 "
      onMouseLeave={menu.hideMenu}
    >
      {children}

      {/* </Transition> */}
    </motion.div>
  );
}
