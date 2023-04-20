import { Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { motion } from "framer-motion";

const mobileMegaMenuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 1, x: 1000 },
  // transition: { type: "spring", stiffness: 100 },
};

export default function MobileMegaMenu({
  menu,
  children,
  index,
}: {
  menu: any;
  children: any;
  index: any;
}) {
  return (
    <motion.div
      animate={index === menu.mobileMenuIndex ? "open" : "closed"}
      variants={mobileMegaMenuVariants}
      transition={{
        // type: "just",
        duration: 0.5,
      }}
      className=" overflow-auto absolute z-0 w-screen bg-white top-0 "
    >
      {/* <Transition
        as={Fragment}
        show={index == menu.mobileMenuIndex}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 -translate-x-12"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 -translate-x-1"
      > */}

      {children}

      {/* </Transition> */}
    </motion.div>
  );
}
