import React from "react";
import ContentWrap from "./layout/ContentWrap";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-pink pt-14 ">
      <ContentWrap className="grid grid-cols-3 text-white">
        <div className=" col-span-3 md:col-span-1 flex flex-col items-center mb-6  md:items-start gap-4 md:pb-[10rem]">
          <Link href="/" className="uppercase hover:opacity-80 ">
            home <span className="font-bold">page</span>
          </Link>
          <Link href="/products-range" className="uppercase hover:opacity-80 ">
            product <span className="font-bold">range</span>
          </Link>
          <Link
            href="/?section=promise"
            className="uppercase hover:opacity-80 "
          >
            our <span className="font-bold">promise</span>
          </Link>
          <Link href="/?section=hub" className=" hover:opacity-80 ">
            Free to <span className="font-paul">just be</span>{" "}
            <span className="font-bold uppercase">HUB</span>
          </Link>
        </div>
        <div className="col-span-3 md:col-span-1 flex flex-col uppercase md:border-x border-x-white items-center">
          <div>
            <Logo />
          </div>
          <div className="flex gap-4 my-6">
            <div className="rounded-full flex items-center justify-center h-12 w-12 border border-2 border-white hover:opacity-80 md:cursor-pointer">
              <FontAwesomeIcon icon={faFacebookF} color="white" size="xl" />
            </div>
            <div className="rounded-full flex items-center justify-center h-12 w-12 border border-2 border-white hover:opacity-80 md:cursor-pointer">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </div>
            <div className="rounded-full flex items-center justify-center h-12 w-12 border border-2 border-white hover:opacity-80 md:cursor-pointer">
              <FontAwesomeIcon icon={faTiktok} size="xl" />
            </div>
          </div>
          <div className="text-center">
            <div>CUSTOMER SERVICE</div>
            <div className="font-bold">0800 133 844</div>
          </div>
        </div>
        <div className="col-span-3 md:col-span-1 flex flex-col uppercase items-center my-4 md:items-end gap-4">
          <Link href="/home" className="hover:opacity-80 ">
            <span className="font-bold">about</span> us
          </Link>
          <Link href="/home" className="hover:opacity-80 ">
            <span className="font-bold">contact</span> us
          </Link>
          <Link href="/home" className="hover:opacity-80 ">
            <span className="font-bold">privacy</span> policy
          </Link>
          <Link href="/home" className="hover:opacity-80 ">
            <span className="font-bold">terms</span> of use
          </Link>
        </div>
      </ContentWrap>
    </div>
  );
};

export default Footer;
