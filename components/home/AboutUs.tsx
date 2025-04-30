
export default function AboutUs() {
  return (
    // <section className="h-screen bg-[url('/about-us.png')] bg-cover bg-center relative overflow-y-hidden snap-start snap-always">
    //   <div className=" bg-black absolute opacity-50 top-0 bottom-0 left-0 right-0" />
    //   <section className="z-[100] absolute left-[20px] top-[60px] md:top-[150px] md:left-[40px] lg:left-[60px] lg:top-[200px] text-white lg:max-w-2xl">
    //     <h2 className="lg:text-3xl font-bold text-center uppercase">About</h2>
    //     <p className="flex flex-wrap gap-2 leading-relaxed pt-5 ">
    //       Evance is a Tanzanian-born visual artist based in East Africa with
    //       over six years of experience capturing stories that move people. His
    //       journey began with a simple desire to document life as it is, honestly
    //       and beautifully. Over time, that passion grew into a craft rooted in
    //       purpose—led storytelling, with every frame designed to stir emotion
    //       and spark connection.
    //     </p>
    //     <p className="flex flex-wrap gap-2 leading-relaxed  lg:mt-5">
    //       His work blends cinematic style with documentary depth, focusing on
    //       the people, places, and moments that shape communities. He has
    //       collaborated with leading organizations and brands across the region,
    //       including BK Arena, Radisson Blu Hotel, African Leadership University,
    //       UNICEF Rwanda, IUCN Tanzania, Nyumbani Collection Camps, Mastercard
    //       Foundation, and the World Health Organization. Every project opens a
    //       new window into culture, community, and human
    //     </p>
    //     <p className="flex flex-wrap gap-2 leading-relaxed lg:mt-5">
    //       Based in Kigali and working across East Africa, Evance creates stories
    //       that feel true, timeless, and deeply human. His mission is simple: to
    //       craft work that crosses borders and connects hearts.
    //     </p>

    //   </section>
    // </section>
    <section className="h-screen bg-[url('/about-us.png')] bg-cover bg-center  relative overflow-y-hidden snap-start snap-always font-fontspring">
      <div className="flex items-center h-full">
        <div className="lg:pl-[100px] text-justify ">
          <section className=" text-white lg:max-w-xl text-wrap font-fontspring lg:w-[500px] lg:h-[497px]">
            <h2 className="lg:text-3xl font-bold text-center uppercase">
              About
            </h2>
            <p className="gap-2 leading-relaxed pt-5  text-[14px] font-fontspring ">
              Evance is a Tanzanian<span className="font-biennale">-</span>born
              visual artist based in East Africa with over six years of
              experience capturing stories that move people. His journey began
              with a simple desire to document life as it is, honestly and
              beautifully. Over time, that passion grew into a craft rooted in
              purpose<span className="font-biennale">-</span>led storytelling,
              with every frame designed to stir emotion and spark connection.
            </p>
            <p className="flex flex-wrap gap-2 leading-relaxed  lg:mt-5 text-[14px] font-fontspring">
              His work blends cinematic style with documentary depth, focusing
              on the people, places, and moments that shape communities. He has
              collaborated with leading organizations and brands across the
              region, including BK Arena, Radisson Blu Hotel, African Leadership
              University, UNICEF Rwanda, IUCN Tanzania, Nyumbani Collection
              Camps, Mastercard Foundation, and the World Health Organization.
              Every project opens a new window into culture, community, and
              human
            </p>
            <p className="flex flex-wrap gap-2 leading-relaxed lg:mt-5 text-[14px] font-fontspring">
              Based in Kigali and working across East Africa, Evance creates
              stories that feel true, timeless, and deeply human. His mission is
              simple: to craft work that crosses borders and connects hearts.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
