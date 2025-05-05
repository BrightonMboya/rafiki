export default function AboutUs() {
  return (
    <section className="h-screen bg-[url('/about-us.png')] bg-cover bg-center  relative overflow-y-hidden snap-start snap-always font-fontspring">
      <div className="flex items-center h-full lg:max-w-[79rem] xl:max-w-[84rem] xl:px-0 2xl:max-w-[82rem] mx-auto">
        <div className="text-justify px-8 2xl:px-0">
          <section className="text-white text-wrap font-fontspring lg:max-w-[460px] lg:mt-[8px]">
            <h2 className="lg:text-3xl font-bold lg:text-left text-center uppercase">
              About
            </h2>
            <p className="gap-2 tracking-tighter pt-5  text-[14px] font-fontspring ">
              Evance is a Tanzanian—born photographer and visual artist based in
              East Africa with over six years of experience capturing stories
              that move people. His journey began with a simple desire to
              document life as it is, honestly and beautifully. Over time, that
              passion grew into a craft rooted in purpose—led storytelling, with
              every frame designed to stir emotion and spark connection.
            </p>
            <p className="flex flex-wrap gap-2 tracking-tighter  lg:mt-5 text-[14px] font-fontspring">
              His work blends cinematic style with documentary depth, focusing
              on the people, places, and moments that shape communities. He has
              collaborated with leading organizations and brands across the
              region, including BK Arena, Radisson Blu Hotels, African
              Leadership University, UNICEF Rwanda, IUCN Tanzania, Nyumbani
              Collection Camps, Mastercard Foundation, and the World Health
              Organization. Every project opens a new window into culture,
              community, and human impact.
            </p>
            <p className="flex flex-wrap gap-2 tracking-tighter lg:mt-5 text-[14px] font-fontspring">
              Based in Kigali and working across East Africa, Evance creates
              stories that feel true, timeless, and deeply human. His dream is
              simply to craft stories that cross borders and connect hearts.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
