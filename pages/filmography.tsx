"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Play } from "lucide-react";
import { cn } from "../utils/cn";
import Footer from "../components/home/Footer";
import Nav from "../components/Nav";
import VideoModal, { videos } from "../components/filmography/VideoModal";
import Tags from "../components/filmography/tags";

export default function Home() {
  const [activeTag, setActiveTag] = useState("all");
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
      : videos.filter((video) => video.tags.includes(activeTag));

  return (
    <main className="flex flex-col bg-black ">
      <section className="h-screen relative bg-black">
        <div className="absolute inset-0 z-[50]">
          <Nav />
        </div>
        <div className="absolute inset-0 w-full h-full">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/demovideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white">
            <h1 className="text-2xl md:text-xl font-medium mb-4 uppercase font-biennale">
              2024 showreel
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-4">
          <ChevronDown className="h-8 w-8 text-white animate-bounce" />
        </div>
      </section>

      {/* Second Section - Video Gallery */}
      <section className="min-h-screen py-16 px-4 md:px-0">
        <div className="max-w-full mx-auto">
          <Tags activeTag={activeTag} setActiveTag={setActiveTag} />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w-full">
            {filteredVideos.slice(0, 9).map((video, index) => (
              <div
                key={video.id}
                onClick={() => openModal(index)}
                className="group relative aspect-video overflow-hidden cursor-pointer">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
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
