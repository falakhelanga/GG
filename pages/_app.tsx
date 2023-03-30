import Footer from "@/components/elements/Footer";
import NavBar from "@/components/elements/layout/NavBar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import DataProvider from "@/context/data";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
config.autoAddCss = false;
export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <NavBar />
      <div className="">
        <Component {...pageProps} />
      </div>
      <Footer />
    </DataProvider>
  );
}
