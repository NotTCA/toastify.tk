import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import { Inter } from "@next/font/google";
import { config } from "../lib/seo";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...config} />
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily}, "sans-serif";
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
