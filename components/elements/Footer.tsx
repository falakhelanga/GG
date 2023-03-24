import React from "react";
import ContentWrap from "./layout/ContentWrap";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-pink pt-14 ">
      <ContentWrap className="grid grid-cols-3 text-white">
        <div className="flex flex-col  items-start gap-4 pb-[10rem]">
          <div className="uppercase ">
            home <span className="font-bold">page</span>
          </div>
          <div className="uppercase ">
            product <span className="font-bold">range</span>
          </div>
          <div className="uppercase ">
            our <span className="font-bold">promise</span>
          </div>
          <div className="">
            Free to <span className="font-paul">just be</span>{" "}
            <span className="font-bold uppercase">HUB</span>
          </div>
        </div>
        <div className="flex flex-col uppercase border-x border-x-white items-center">
          <div>
            <Logo />
          </div>
          <div className="flex gap-4 my-6">
            <div className="rounded-full flex items-center justify-center h-12 w-12 border border-2 border-white">
              <FontAwesomeIcon icon={faFacebookF} color="white" size="xl" />
            </div>
            <div className="rounded-full flex items-center justify-center h-12 w-12 border border-2 border-white">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </div>
            <div className="rounded-full flex items-center justify-center h-12 w-12 border border-2 border-white">
              <FontAwesomeIcon icon={faTiktok} size="xl" />
            </div>
          </div>
          <div className="text-center">
            <div>CUSTOMER SERVICE</div>
            <div className="font-bold">0800 133 844</div>
          </div>
        </div>
        <div className="flex flex-col uppercase items-end gap-4">
          <div>
            <span className="font-bold">about</span> us
          </div>
          <div>
            <span className="font-bold">contact</span> us
          </div>
          <div>
            <span className="font-bold">privacy</span> policy
          </div>
          <div>
            <span className="font-bold">terms</span> of use
          </div>
        </div>
      </ContentWrap>
    </div>
  );
};

export default Footer;
