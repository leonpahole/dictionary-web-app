import { ThemeProvider } from "@/providers/ThemeContext";
import type { AppProps } from "next/app";
import Head from "next/head";
import { inconsolata, inter, lora } from "@/fonts";

import "@/styles/globals.css";

export const PageWrapperId = "__page-wrapper__";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <ThemeProvider>
        <div
          id={PageWrapperId}
          className={`${inconsolata.variable} ${lora.variable} ${inter.variable}`}
        >
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}
