import HomePageHero from "@/components/sections/homepage/homePageHero/HomePageHero";
import Head from "next/head";
import React from "react";

const control = () => {
  return (
    <>
      <Head>
        <title>Control</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pb-14">
        <HomePageHero />
      </main>
    </>
  );
};

export default control;
