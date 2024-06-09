import { GeistSans } from "geist/font/sans";
import type { AppProps } from "next/app";
import "../styles/index.css";
import Link from "next/link";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav>
        <Link href="/">
          <img
            src="/logo.png"
            alt="logo"
            className="w-[100px] h-[50px] pl-5 pt-5 object-contain"
          />
        </Link>
      </nav>
      <main className={`${GeistSans.variable} `}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
