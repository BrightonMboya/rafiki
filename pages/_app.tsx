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
            className="w-[200px] h-[100px] object-cover"
          />
        </Link>
      </nav>
      <main className={`${GeistSans.variable} `}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
