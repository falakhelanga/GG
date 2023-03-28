import { useMenu } from "@/context/menu";
import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { MenuButton } from "./MenuButton";

const MenuItem = ({
  title,
  children,
  index,
}: {
  title: string;
  children: any;
  index: number;
}) => {
  const menu = useMenu();
  return (
    <div>
      <>
        <MenuButton title={title} index={index} />
        <div
          className="absolute left-1/2 transform -translate-x-1/2 px-2 w-screen sm:px-0"
          onMouseLeave={() => {
            menu.unlockAndHideMenu();
          }}
        >
          {children}
        </div>
      </>
    </div>
  );
};

export default MenuItem;
