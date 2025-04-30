import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";
import { useRouter } from "next/router";
import VideoModal, { videos } from "../components/filmography/VideoModal";
import Tags from "../components/filmography/tags";
import Footer from "../components/home/Footer";
import Nav from "../components/Nav";
import { useState } from "react";

export default function FilmPage() {
  const router = useRouter();
  const activeTag = router.query.tags || "all";
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentVideoIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const goToNextVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev === filteredVideos.length - 1 ? 0 : prev + 1
    );
  };

  const goToPreviousVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev === 0 ? filteredVideos.length - 1 : prev - 1
    );
  };

  // Filter videos based on active tag
  const filteredVideos =
    activeTag === "all"
      ? videos
      : videos.filter((video) => video.tags.includes(activeTag as string));

  return (
    <main className="min-h-screen bg-black text-white px-4 md:px-8 relative">
      <Nav />
      <div className="max-w-7xl mx-auto pt-20">
        <Tags
          activeTag={activeTag}
          setActiveTag={(tag) => {
            router.push(`/film?tags=${tag}`);
          }}
        />
        {/* Videos with descriptions */}
        <div className="space-y-12">
          {filteredVideos.map((video) => (
            <div
              onClick={() => openModal(video.id)}
              key={video.id}
              className="grid md:grid-cols-2 gap-8 items-start cursor-pointer">
              <div className="relative aspect-video overflow-hidden group">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 z-[50]">
                  <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">{video.title}</h2>
                <p className=" mb-4">{video.description}</p>
                <div className="flex gap-2">
                  {video.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/film?tags=${tag}`}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200">
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <VideoModal
        isOpen={modalOpen}
        onClose={closeModal}
        currentVideo={filteredVideos[currentVideoIndex] || null}
        onNext={goToNextVideo}
        onPrevious={goToPreviousVideo}
      />
      <Footer />
    </main>
  );
}
