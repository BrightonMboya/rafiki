import { GeistSans } from "geist/font/sans";
import type { AppProps } from "next/app";
import "../styles/index.css";
import Link from "next/link";
import BlurImage from "../components/BlurImage";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav className="relative w-[200px] h-[50px] ml-5 mt-5 object-contain">
        <Link href="/">
          <BlurImage imageUrl="/logo.png" preload={true} rounded={false} />
          
        </Link>
      </nav>
      <main className={`${GeistSans.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
