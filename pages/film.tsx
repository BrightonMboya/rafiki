import Head from "next/head";
import React from "react";
import StanleyCarousel from "../components/StanleyCarousel";
import cloudinary from "../utils/cloudinary";
import getBase64ImageUrl from "../utils/generateBlurPlaceholder";
import { ImageProps } from "../utils/types";
import { additionalInfo } from "../components/videos";

const Page = ({ images }: { images: ImageProps[] }) => {
  console.log(images);
  return (
    <>
      <Head>
        <title>Stanley - Stanley Page</title>
        <meta
          property="og:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
        <meta
          name="twitter:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
      </Head>
      <StanleyCarousel images={images} />
    </>
  );
};

export default Page;


export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:thumbnails`)
    .sort_by("display_name", "asc")
    .max_results(30)
    .execute();
  let reducedResults = [];

  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
      display_name: result.display_name,
    });
    i++;
  }

  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image);
  });

  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);
  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  reducedResults.sort((a, b) => {
    const img1 = parseInt(a.display_name);
    const img2 = parseInt(b.display_name);
    return img1 - img2;
  });

  const finalImages = reducedResults.map((image) => {
    const moreInfo = additionalInfo.find(
      (info) => info.display_name === image.display_name
    );
    return { ...image, ...moreInfo };
  });

  return {
    props: {
      images: finalImages,
    },
  };
}
