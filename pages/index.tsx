import Head from "next/head";
import HomeCarousel from "../components/home/HomeCarousel";

export default function Page() {
  return (
    <>
      <Head>
        <title>Rafiki Branding</title>
        <meta
          property="og:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
        <meta
          name="twitter:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
      </Head>
      <HomeCarousel />
    </>
  );
}
