import Link from "next/link";
export default function AboutUs() {
  return (
    <section className="h-screen bg-[url('/about-us.png')] bg-cover bg-center relative overflow-y-hidden snap-start snap-always">
      <div className=" bg-black absolute opacity-50 top-0 bottom-0 left-0 right-0" />
      <section className="z-[100] absolute left-[20px] top-[60px] md:top-[150px] md:left-[40px] lg:top-[200px] text-white">
        <h2 className="lg:text-3xl font-bold">About</h2>
        <p className="flex flex-wrap gap-2 leading-relaxed  max-w-sm md:max-w-lg lg:max-w-[50rem]  text-lg lg:text-xl">
          We are a story-led content solutions company based in Rwanda and
          Tanzania that leverages the power of compelling narratives to connect
          with audiences on a profound level. Our renewed focus is on providing
          Creative Development, Ideation & Strategy, as well as production
          services in videos and photos.
        </p>
        <p className="flex flex-wrap gap-2 leading-relaxed max-w-sm md:max-w-lg lg:max-w-[50rem]  text-lg  lg:mt-10">
          We work with purpose-driven organizations, including brands,
          educational institutions, government departments, local authorities,
          and NGOs. Together, we collaborate to promote equality, shed light on
          important stories, explain complex information, and enhance
          communication through the creation of engaging and impactful content.
        </p>

        <Link href="/gallery">
          <button className="h-9 px-4 lg:px-10 lg:py-3 lg:text-base py-2 mt-[40px] inline-flex items-center justify-center text-base font-medium bg-white text-black">
            Our Work
          </button>
        </Link>
      </section>
    </section>
  );
}
