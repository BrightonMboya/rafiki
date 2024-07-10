import type { AppProps } from "next/app";
import "../styles/index.css";
import Nav from "../components/Nav";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});
const gillSans = localFont({
  src: "../public/fonts/Gill_Sans.otf",
  variable: "--font-gill",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={`${poppins.className} ${gillSans.className} relative`}>
        <Nav />

        <Component {...pageProps} />
      </main>
    </>
  );
}
