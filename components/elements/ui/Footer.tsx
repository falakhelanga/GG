import React from "react";
import ContentWrap from "./ContentWrap";
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
      <ContentWrap className="grid md:grid-cols-3 grid-cols-2 text-white">
        <div className=" col-span-3 md:col-span-1 flex md:hidden flex-col uppercase md:border-x border-x-white items-center mb-8">
          <Link
            href="/"
            className=" hover:opacity-80 transition-all ease-in-out transition-duration-300"
          >
            <div className="hidden block">
              <Logo />
            </div>
            <div className="md:hidden block">
              <Logo height={300} width={300} />
            </div>
          </Link>
          <div className="flex gap-4 my-6">
            <a
              target="_blank"
              href="https://www.facebook.com/GynaGuard"
              className="rounded-full flex items-center justify-center h-12 w-12 border border-2 border-white hover:opacity-80 md:cursor-pointer transition-all ease-in-out transition-duration-300"
            >
              <FontAwesomeIcon icon={faFacebookF} color="white" size="xl" />
            </a>
            <a
              href="https://www.instagram.com/gynaguardsa/"
              target="_blank"
              className="rounded-full flex items-center justify-center h-12 w-12 border border-2 border-white hover:opacity-80 md:cursor-pointer transition-all ease-in-out transition-duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
            <a
              href="https://www.tiktok.com/@gynaguardsa"
              target="_blank"
              className="rounded-full flex items-center justify-center h-12 w-12 border border-2 border-white hover:opacity-80 md:cursor-pointer transition-all ease-in-out transition-duration-300"
            >
              <FontAwesomeIcon icon={faTiktok} size="xl" />
            </a>
          </div>
          <div className="text-center">
            <div>CUSTOMER SERVICE</div>
            <a
              href="tel:0800-133-844"
              className="font-bold cursor-pointer transition-all ease-in-out transition-duration-300"
            >
              0800 133 844
            </a>
          </div>
        </div>
        <div className=" col-span-1 flex flex-col mb-6  items-start gap-4 md:pb-[10rem]">
          <Link
            href="/"
            className="uppercase hover:opacity-80 transition-all ease-in-out transition-duration-300"
          >
            home <span className="font-bold">page</span>
          </Link>
          <Link
            href="/products-range"
            className="uppercase hover:opacity-80 transition-all ease-in-out transition-duration-300"
          >
            product <span className="font-bold">range</span>
          </Link>
          <Link
            href="/?section=promise"
            className="uppercase hover:opacity-80 transition-all ease-in-out transition-duration-300"
          >
            our <span className="font-bold">promise</span>
          </Link>
          <Link
            href="/?section=hub"
            className=" hover:opacity-80 transition-all ease-in-out transition-duration-300"
          >
            Free to <span className="font-paul text-3xl">just be</span>{" "}
            <span className="font-bold uppercase">HUB</span>
          </Link>
        </div>
        <div className=" col-span-3 md:col-span-1 md:flex hidden flex-col uppercase md:border-x border-x-white items-center ">
          <Link
            href="/"
            className=" hover:opacity-80 transition-all ease-in-out transition-duration-300"
          >
            <Logo />
          </Link>
          <div className="flex gap-4 my-6">
            <a
              href="https://www.facebook.com/GynaGuard"
              target="_blank"
              className="rounded-full flex items-center justify-center h-12 w-12 border border-2 border-white hover:opacity-80 md:cursor-pointer transition-all ease-in-out transition-duration-300"
            >
              <FontAwesomeIcon icon={faFacebookF} color="white" size="xl" />
            </a>
            <a
              href="https://www.instagram.com/gynaguardsa/"
              target="_blank"
              className="rounded-full flex items-center justify-center h-12 w-12 border border-2 border-white hover:opacity-80 md:cursor-pointer transition-all ease-in-out transition-duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
            <a
              href="https://www.tiktok.com/@gynaguardsa"
              target="_blank"
              className="rounded-full flex items-center justify-center h-12 w-12 border border-2 border-white hover:opacity-80 md:cursor-pointer transition-all ease-in-out transition-duration-300"
            >
              <FontAwesomeIcon icon={faTiktok} size="xl" />
            </a>
          </div>
          <div className="text-center">
            <div>CUSTOMER SERVICE</div>
            <a
              href="tel:0800-133-844"
              className="font-bold cursor-pointer transition-all ease-in-out transition-duration-300"
            >
              0800 133 844
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col uppercase  md:my-4 items-end gap-4 max-sm:mb-6">
          <Link
            href="/about-gynaguard"
            className="hover:opacity-80 transition-all ease-in-out transition-duration-300"
          >
            <span className="font-bold">about</span> us
          </Link>
          <Link
            href="/contact-page"
            className="hover:opacity-80 transition-all ease-in-out transition-duration-300"
          >
            <span className="font-bold">contact</span> us
          </Link>
          <Link
            href="/faq"
            className="hover:opacity-80 transition-all ease-in-out transition-duration-300"
          >
            <span className="font-bold">privacy</span> policy
          </Link>
          <Link
            href="/terms-of-use"
            className="hover:opacity-80 transition-all ease-in-out transition-duration-300 mt-2"
          >
            <span className="font-bold">terms</span> of use
          </Link>
        </div>
      </ContentWrap>
    </div>
  );
};

export default Footer;
