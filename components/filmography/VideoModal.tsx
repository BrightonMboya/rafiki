import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";


export const videos = [
  {
    id: 1,
    title: "Campus Life",
    url: "https://www.youtube.com/embed/2p9Qt60W91Q",
    thumbnail:
      "https://res.cloudinary.com/du50lw9fp/image/upload/v1717938756/Hillsong-24_hlcqp3.jpg",
    tags: ["students", "spaces"],
    description:
      "Experience a day in the life of students on our vibrant campus. This documentary follows several students through their daily routines, showcasing the diverse activities and opportunities available.",
  },
  {
    id: 2,
    title: "Annual Festival",
    url: "https://www.youtube.com/embed/2xW9mTStyhM",
    thumbnail:
      "https://res.cloudinary.com/du50lw9fp/image/upload/v1717937379/DSC_0999_v5not8.jpg",
    tags: ["events", "students"],
    description:
      "Our annual festival brings together students, faculty, and the community for a celebration of arts, culture, and innovation. This video captures the highlights from last year's event.",
  },
  {
    id: 3,
    title: "Architecture Tour",
    url: "https://www.youtube.com/embed/2p9Qt60W91Q",
    thumbnail:
      "https://res.cloudinary.com/du50lw9fp/image/upload/v1717936942/Project-9_ygc50d.jpg",
    tags: ["spaces", "documentaries"],
     description:
      "Our annual festival brings together students, faculty, and the community for a celebration of arts, culture, and innovation. This video captures the highlights from last year's event.",
  },
  {
    id: 4,
    title: "Student Interviews",
    url: "https://www.youtube.com/embed/2p9Qt60W91Q",
    thumbnail:
      "https://res.cloudinary.com/du50lw9fp/image/upload/v1717935063/IMG_3589_pn8izu.jpg",
    tags: ["students", "documentaries"],
     description:
      "Our annual festival brings together students, faculty, and the community for a celebration of arts, culture, and innovation. This video captures the highlights from last year's event.",
  },
  {
    id: 5,
    title: "Morning Routine",
    url: "https://www.youtube.com/embed/2p9Qt60W91Q",
    thumbnail:
      "https://res.cloudinary.com/du50lw9fp/image/upload/v1717936911/IMG_9483_z5zuyi.jpg",
    tags: ["lifestyle", "students"],
     description:
      "Our annual festival brings together students, faculty, and the community for a celebration of arts, culture, and innovation. This video captures the highlights from last year's event.",
  },
  {
    id: 6,
    title: "Exhibition Opening",
    url: "https://www.youtube.com/embed/2p9Qt60W91Q",
    thumbnail:
      "https://res.cloudinary.com/du50lw9fp/image/upload/v1717937352/DSC_0743_xdaw9y.jpg",
    tags: ["events", "spaces"],
     description:
      "Our annual festival brings together students, faculty, and the community for a celebration of arts, culture, and innovation. This video captures the highlights from last year's event.",
  },
  {
    id: 7,
    title: "Campus History",
    url: "https://www.youtube.com/embed/2p9Qt60W91Q",
    thumbnail:
      "https://res.cloudinary.com/du50lw9fp/image/upload/v1717937362/Friday-29_dji0lt.jpg",
    tags: ["documentaries", "spaces"],
     description:
      "Our annual festival brings together students, faculty, and the community for a celebration of arts, culture, and innovation. This video captures the highlights from last year's event.",
  },
  {
    id: 8,
    title: "Student Wellness",
    url: "https://www.youtube.com/embed/2p9Qt60W91Q",
    thumbnail:
      "https://res.cloudinary.com/du50lw9fp/image/upload/v1717938690/All_Star-76_ecoawf.jpg",
    tags: ["lifestyle", "students"],
     description:
      "Our annual festival brings together students, faculty, and the community for a celebration of arts, culture, and innovation. This video captures the highlights from last year's event.",
  },
  {
    id: 9,
    title: "Graduation Ceremony",
    url: "https://www.youtube.com/embed/2p9Qt60W91Q",
    thumbnail:
      "https://res.cloudinary.com/du50lw9fp/image/upload/v1717938788/RAP_CITY-84_zillhp.jpg",
    tags: ["events", "students"],
     description:
      "Our annual festival brings together students, faculty, and the community for a celebration of arts, culture, and innovation. This video captures the highlights from last year's event.",
  },
];

export default function VideoModal({
  isOpen,
  onClose,
  currentVideo,
  onNext,
  onPrevious,
}: {
  isOpen: boolean;
  onClose: () => void;
  currentVideo: (typeof videos)[0] | null;
  onNext: () => void;
  onPrevious: () => void;
}) {
  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrevious();
    };

    window.addEventListener("keydown", handleKeyDown);

    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen || !currentVideo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blurred background overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className=" z-10 w-full max-w-5xl mx-4 bg-black rounded-lg overflow-hidden">
        {/* Video player */}
        <div className="relative aspect-video">
          <iframe
            src={currentVideo.url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Controls */}
        <div className="absolute top-5 left-5 right-0 flex justify-between items-center p-4">
          <h3 className="text-white font-medium text-lg ">
            {currentVideo.title}
          </h3>
          <button
            onClick={onClose}
            className="rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={onPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors">
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
