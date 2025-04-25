import { TextGenerateEffect } from "../TextGenerateEffect";
import Link from "next/link";
export default function AboutUs() {
  return (
    <section className="h-screen bg-[url('/about-us.png')] bg-cover bg-center relative overflow-y-hidden snap-start snap-always">
      <div className=" bg-black absolute opacity-50 top-0 bottom-0 left-0 right-0" />
      <section className="z-[100] absolute left-[20px] top-[60px] md:top-[150px] md:left-[40px] lg:top-[200px]">
        <p className="text-white mt-6 max-w-sm md:max-w-lg lg:max-w-3xl lg:text-2xl text-balance  text-lg md:text-xl lg:text-left">
          We are a story-led content solutions company based in Rwanda and
          Tanzania that leverages the power of compelling narratives to connect
          with audiences on a profound level. Our renewed focus is on providing
          Creative Development, Ideation & Strategy, as well as production
          services in videos and photos.
        </p>
        <TextGenerateEffect
          className="text-white mt-6 max-w-sm md:max-w-lg lg:max-w-[50rem] lg:text-2xl   text-lg md:text-xl text-left"
          words=" We work with purpose-driven organizations, including brands,
            educational institutions, government departments, local authorities,
            and NGOs. Together, we collaborate to promote equality, shed light
            on important stories, explain complex information, and enhance
            communication through the creation of engaging and impactful
            content."
        />

        <Link href="/gallery">
          <button className="h-9 px-4 lg:px-10 lg:py-3 lg:text-base py-2 mt-[40px] inline-flex items-center justify-center text-base font-medium bg-white">
            Our Work
          </button>
        </Link>
      </section>
    </section>
  );
}
