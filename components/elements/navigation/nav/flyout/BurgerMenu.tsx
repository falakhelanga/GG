import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const linksVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
const burgerMenuItems = [
  {
    name: "FAQ",
    link: "/#",
  },
  {
    name: "About Gynaguard",
    link: "/#",
  },
  {
    name: "Contact Us",
    link: "/#",
  },
  {
    name: "Terms of use",
    link: "/#",
  },
];

const BurgerMenu = () => {
  return (
    <div className="absolute w-screen bg-white bg-opacity-90 z-[100] mt-[1.5vh] md:block hidden ">
      <div className="flex p-7">
        <div className="mx-auto w-full max-w-7xl px-16 flex justify-end">
          <motion.div variants={variants} className="">
            {burgerMenuItems.map((item, idx) => (
              <motion.div
                variants={linksVariants}
                key={idx}
                className="find-out-more"
              >
                <Link href={"/#"} className="w-64">
                  <div className="uppercase font-bold text-gray-500 hover:text-pink md:cursor-pointer flex py-1 justify-end items-center">
                    {item.name}
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="text-pink pl-2 find-out-more-chevron"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
