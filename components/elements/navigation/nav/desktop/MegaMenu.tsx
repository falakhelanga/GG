import { Transition } from "@headlessui/react";
import React, { Fragment } from "react";

export default function MegaMenu({ menu, children, index, mouseLeave = true }) {
  return (
    <div>
      <Transition
        as={Fragment}
        show={index == menu.menuIndex}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 -translate-y-12"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <div
          className="absolute left-1/2 transform -translate-x-1/2 px-2 w-screen sm:px-0 p-0 z-0"
          onMouseLeave={mouseLeave ? () => menu.unlockAndHideMenu() : null}
        >
          <div
            className="absolute z-0 w-screen bg-white"
            onMouseLeave={mouseLeave ? () => menu.hideMenu() : null}
          >
            {children}
          </div>
        </div>
      </Transition>
    </div>
  );
}
