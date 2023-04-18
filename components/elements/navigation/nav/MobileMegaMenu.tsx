import { Transition } from "@headlessui/react";
import React, { Fragment } from "react";

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
    <div className=" overflow-auto">
      <Transition
        as={Fragment}
        show={index == menu.mobileMenuIndex}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 -translate-x-12"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 -translate-x-1"
      >
        <div className="absolute left-1/2 transform -translate-x-1/2 w-screen  pl-6 sm:px-0 p-0 z-0 ">
          <div className="absolute z-0 w-screen bg-white top-0 ">
            {children}
          </div>
        </div>
      </Transition>
    </div>
  );
}
