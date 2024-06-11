import { videos, shorts } from "../components/videos";

export default function Page() {
  return (
    <main className="mt-10 ">
      <>
        <section className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-[20px] lg:grid lg:grid-cols-2">
            {videos.map((video) => (
              <iframe
                width={video.width}
                height={video.height}
                src={video.url}
                className={video.className}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // referrerpolicy="strict-origin-when-cross-origin"
                // allowfullscreen
              ></iframe>
            ))}
          </div>
        </section>

        <section className="flex items-center justify-center mt-[20px]">
          <div className="flex flex-col items-center justify-center gap-[20px] md:grid md:grid-cols-2 lg:grid-cols-3">
            {shorts.map((video) => (
              <iframe
                width={video.width}
                height={video.height}
                src={video.url}
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // referrerpolicy="strict-origin-when-cross-origin"
                // allowfullscreen
              ></iframe>
            ))}
          </div>
        </section>
      </>
    </main>
  );
}
