import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import Modal from "../components/Modal";
import type { ImageProps } from "../utils/types";
import { useLastViewedPhoto } from "../utils/useLastViewedPhoto";
import Nav from "../components/Nav";

const tags = [
  "all",
  "concerts",
  "hospitality",
  "nature",
  "potraits",
  "sports",
  "wildlife",
];

const GalleryPage = () => {
  const router = useRouter();
  const { photoId, tags: queryTag } = router.query;
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();
  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);
  const [activeTag, setActiveTag] = useState("all");
  const [images, setImages] = useState<ImageProps[]>([]);

  useEffect(() => {
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current?.scrollIntoView({ block: "center" });
      setLastViewedPhoto(null);
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto]);

  useEffect(() => {
    fetch(`/api/cloudinary/${activeTag}`)
      .then((r) => r.json())
      .then((data) => setImages(data))
      .catch((err) => console.error(err))
    
  }, [activeTag]);

  return (
    <>
      <Head>
        <title>Photography</title>
      </Head>
      <Nav />
      <main className="max-w-[1960px] pt-12 font-fontspring">
        {photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId);
            }}
          />
        )}

        <div className="flex flex-wrap items-center px-4 justify-center gap-5 py-6">
          {tags.map((tag) => (
            <button onClick={() => setActiveTag(tag)} key={tag}>
              <Link
                href={`/gallery?tags=${tag}`}
                scroll={false}
                className={`capitalize cursor-pointer transition-colors ${
                  tag === activeTag
                    ? "text-white font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}>
                {tag}
              </Link>
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center mx-auto">
          <div
            className="columns-1 sm:columns-2 xl:columns-4 gap-4 lg:px-[60px] lg:pt-10"
            onContextMenu={(e) => e.preventDefault()}>
            {images.map(({ id, public_id, format, blurDataUrl }) => (
             <Link
             key={id}
             href={`/gallery?tags=${activeTag}&photoId=${id}`}
             ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
             shallow
             className="group relative block w-full mb-6 sm:mb-5 cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:shadow-lg">
             <Image
               alt="Rafiki Pictures"
               className="transition-transform transform brightness-90 group-hover:brightness-110 group-hover:scale-[1.01]"
               placeholder="blur"
               blurDataURL={blurDataUrl}
               src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
               width={720}
               height={480}
               sizes="(max-width: 640px) 100vw,
                      (max-width: 1280px) 50vw,
                      (max-width: 1536px) 33vw,
                      25vw"
             />
           </Link>           
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default GalleryPage;
