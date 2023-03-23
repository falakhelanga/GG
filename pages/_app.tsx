import NavBar from "@/components/elements/layout/NavBar";
import DataProvider from "@/context/data";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <NavBar />
      <div className="">
        <Component {...pageProps} />
      </div>
    </DataProvider>
  );
}
