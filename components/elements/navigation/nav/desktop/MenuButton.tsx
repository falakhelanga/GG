import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover } from "@headlessui/react";
import React from "react";
import { useMenu } from "../../../../../context/menu";

export const MenuButton = ({
  title,
  index,
}: {
  title: string;
  index: number;
}) => {
  const menu = useMenu();
  return (
    <div
      className={`
            ${
              index == menu.menuIndex
                ? "text-green border-green"
                : "text-gray-500 border-white"
            }
            transition-colors group border-b-4 bg-white inline-flex items-center text-base font-medium hover:text-green-dark focus:outline-none py-8 px-4 outline-none focus:ring-0 cursor-pointer`}
      onMouseEnter={() => {
        menu.showMenu(index);
      }}
      onClick={() => {
        menu.lockMenu();
      }}
    >
      <span>{title}</span>

      <FontAwesomeIcon
        icon={faChevronDown as IconProp}
        className={`
                ${
                  index == menu.menuIndex
                    ? "text-green -rotate-180"
                    : " rotate-0 text-gray-500"
                }
                transform transition-transform ml-3 h-3 w-3 group-hover:text-green-dark
              `}
        aria-hidden="true"
      />
    </div>
  );
};
