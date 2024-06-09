import { Grid } from "../components/Grid";
import Image from "next/image";
import { TextGenerateEffect } from "../components/TextGenerateEffect";
import Link from "next/link";
import BlurImage from "../components/BlurImage";

export default function Page() {
  return (
    <main className="font-sans lg:flex lg:items-center lg:justify-center lg:h-screen">
      <section className="lg:grid lg:grid-cols-2">
        <div className="flex flex-col items-center pt-[40px]">
          <p className="text-6xl md:text-8xl font-medium text-white text-center lg:hidden">
            Rafiki Branding.
          </p>
          <div className="pt-[60px] lg:pt-0">
            <div className="w-[300px] h-[400px] object-cover relative rounded-md border-[1px] border-white/20 md:w-[700px] md:h-[600px] ">
              <BlurImage
                imageUrl="/demo-pic.jpg"
                preload={true}
                rounded={false}
              />
            </div>
            {/* <Image
              src="/demo-pic.jpg"
              alt="Founders"
              width={650}
              height={875}
              quality={100}
              sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              className="w-[300px] h-[400px] object-cover rounded-md border-[1px] border-white/20 md:w-[700px] md:h-[600px] "
            /> */}
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start justify-center mt-[40px] text-center px-5">
          <TextGenerateEffect
            className="text-6xl md:text-8xl font-medium text-white text-center lg:text-left hidden lg:block"
            words="Rafiki Branding."
          />

          {/* <p className="text-6xl md:text-8xl font-medium text-white text-center lg:text-left ">
            Rafiki Branding.
          </p> */}
          {/* <TextGenerateEffect
            className="text-[#878787] mt-6  text-lg md:text-xl lg:text-left"
            words="We are a story-led content solutions company based in Rwanda and
            Tanzania that leverages the power of compelling narratives to
            connect with audiences on a profound level. Our renewed focus is on
            providing Creative Development, Ideation & Strategy, as well as
            production services in videos and photos.
            "
          /> */}
          <p className="text-[#878787] mt-6  text-lg md:text-xl lg:text-left">
            We are a story-led content solutions company based in Rwanda and
            Tanzania that leverages the power of compelling narratives to
            connect with audiences on a profound level. Our renewed focus is on
            providing Creative Development, Ideation & Strategy, as well as
            production services in videos and photos
          </p>
          <TextGenerateEffect
            className="text-[#878787] mt-6  text-lg md:text-xl lg:text-left"
            words=" We work with purpose-driven organizations, including brands,
            educational institutions, government departments, local authorities,
            and NGOs. Together, we collaborate to promote equality, shed light
            on important stories, explain complex information, and enhance
            communication through the creation of engaging and impactful
            content."
          />

          <Link href="/gallery">
            <button className="h-9 px-4 py-2 mt-[50px] inline-flex items-center justify-center text-base font-medium bg-white">
              My Work
            </button>
          </Link>
          {/* <p className="text-[#878787] mt-6  text-lg md:text-xl lg:text-left">
            We are a story-led content solutions company based in Rwanda and
            Tanzania that leverages the power of compelling narratives to
            connect with audiences on a profound level. Our renewed focus is on
            providing Creative Development, Ideation & Strategy, as well as
            production services in videos and photos
          </p>
          <p className="text-[#878787] mt-6  text-lg md:text-xl lg:text-left">
            We work with purpose-driven organizations, including brands,
            educational institutions, government departments, local authorities,
            and NGOs. Together, we collaborate to promote equality, shed light
            on important stories, explain complex information, and enhance
            communication through the creation of engaging and impactful
            content.
          </p> */}
        </div>
      </section>
      <Grid />
    </main>
  );
}
