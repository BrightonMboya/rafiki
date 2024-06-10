import { GeistSans } from "geist/font/sans";
import type { AppProps } from "next/app";
import "../styles/index.css";
import Link from "next/link";
import BlurImage from "../components/BlurImage";
import Nav from "../components/Nav";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <main className={`${GeistSans.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
