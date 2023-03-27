import React from "react";
import ContentWrap from "./ContentWrap";
import Logo from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/pro-solid-svg-icons";
const NAV_ITEMS = [
  {
    lightText: "product",
    boldText: "range",
    link: "#",
  },
  {
    lightText: "what is",
    boldText: "feminine hygiene?",
    link: "#",
  },
  {
    lightText: "our",
    boldText: "promise",
    link: "#",
  },
  // {
  //   lightText: "free to just be",
  //   boldText: "hub",
  //   link: "#",
  // },
];

const NavBar = () => {
  return (
    <div className="bg-pink w-full h-[10vh] fixed top-0 right-0 left-0 flex items-center z-[10]">
      <ContentWrap className="flex justify-between items-center">
        <Logo />
        <div className="md:flex md:gap-[5rem] hidden text-sm">
          {NAV_ITEMS.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col items-start text-white  uppercase"
              >
                <div className="text-[#f5f5f5]">{item.lightText}</div>
                <div className="font-bold">{item.boldText}</div>
              </div>
            );
          })}
          <div className="flex flex-col items-start text-white  ">
            <div className="text-[#f5f5f5] ">
              <span>Free to</span>{" "}
              <span className="font-paul lowercase  ">just be</span>
            </div>
            <div className="font-bold uppercase">hub</div>
          </div>
        </div>
        <FontAwesomeIcon icon={faBars} color="white" size="xl" />
      </ContentWrap>
    </div>
  );
};

export default NavBar;
