// "use client";

// import { useState, useRef, useEffect } from "react";
// import { ChevronDown, Play, X } from "lucide-react";

// export default function VideoSection() {
//   const [isFullScreen, setIsFullScreen] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const fullscreenVideoRef = useRef<HTMLVideoElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Handle fullscreen change events
//   useEffect(() => {
//     const handleFullscreenChange = () => {
//       const isCurrentlyFullscreen = document.fullscreenElement !== null;
//       if (!isCurrentlyFullscreen && isFullScreen) {
//         handleExitFullScreen();
//       }
//     };

//     document.addEventListener("fullscreenchange", handleFullscreenChange);
//     return () => {
//       document.removeEventListener("fullscreenchange", handleFullscreenChange);
//     };
//   }, [isFullScreen]);

//   const handlePlayClick = async () => {
//     if (!containerRef.current) return;

//     try {
//       setIsFullScreen(true);

//       // Request fullscreen first
//       if (containerRef.current?.requestFullscreen) {
//         await containerRef.current.requestFullscreen();
//       }

//       // Then play with sound after a short delay to allow animation to start
//       setTimeout(() => {
//         if (fullscreenVideoRef.current) {
//           fullscreenVideoRef.current.muted = false;
//           fullscreenVideoRef.current
//             .play()
//             .then(() => {
//               setIsPlaying(true);
//             })
//             .catch((err) => {
//               console.error("Play error:", err);
//               // Fallback for browsers that block autoplay with sound
//               if (fullscreenVideoRef.current) {
//                 fullscreenVideoRef.current.muted = true;
//                 fullscreenVideoRef.current.play().then(() => {
//                   alert(
//                     "Your browser blocked autoplay with sound. Please unmute the video manually."
//                   );
//                   setIsPlaying(true);
//                 });
//               }
//             });
//         }
//       }, 300); // Short delay to allow animation to start
//     } catch (error) {
//       console.error("Video playback error:", error);
//     }
//   };

//   const handleExitFullScreen = () => {
//     if (document.fullscreenElement && document.exitFullscreen) {
//       document
//         .exitFullscreen()
//         .catch((err) => console.error("Exit fullscreen error:", err));
//     }

//     if (videoRef.current) {
//       videoRef.current.muted = true;
//       videoRef.current.currentTime = 0; // Reset video position
//     }

//     setIsFullScreen(false);
//     setIsPlaying(false);
//   };

//   return (
//     <section className="h-screen relative bg-black">
//       <div ref={containerRef} className="absolute inset-0 w-full h-full">
//         {/* Background video (always visible when not in fullscreen) */}
//         {!isFullScreen && (
//           <>
//             <video
//               ref={videoRef}
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="w-full h-full object-cover">
//               <source src="/demovideo.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </>
//         )}

//         {/* Fullscreen video with animation */}
//         {isFullScreen && (
//           <div
//             className="absolute inset-0 z-[60] bg-black animate-in fade-in zoom-in-95 duration-500"
//             style={{
//               animationFillMode: "forwards",
//               animationDuration: "500ms",
//             }}>
//             <video
//               ref={fullscreenVideoRef}
//               autoPlay
//               muted
//               playsInline
//               className="w-full h-full object-cover"
//               controls={isFullScreen}
//               controlsList="nodownload">
//               <source src="/demovideo.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         )}
//       </div>

//       {!isFullScreen && (
//         <>
//           <div className="absolute inset-0 bg-black/30 flex items-center justify-center pointer-events-none">
//             <div className="text-center text-white">
//               <h1 className="text-2xl md:text-xl font-medium mb-4 uppercase font-biennale">
//                 2024 showreel
//               </h1>

//               <button
//                 onClick={handlePlayClick}
//                 className="mt-6 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all duration-300 group pointer-events-auto"
//                 aria-label="Play video in full screen">
//                 <Play className="h-12 w-12 text-white fill-white group-hover:scale-110 transition-transform" />
//               </button>
//             </div>
//           </div>

//           <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-4">
//             <ChevronDown className="h-8 w-8 text-white animate-bounce" />
//           </div>
//         </>
//       )}

//       {isFullScreen && (
//         <button
//           onClick={handleExitFullScreen}
//           className="absolute top-4 right-4 z-[70] bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-300 animate-in fade-in duration-700"
//           aria-label="Exit full screen">
//           <X className="h-8 w-8 text-white" />
//         </button>
//       )}
//     </section>
//   );
// }

"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Play, X } from "lucide-react";

export default function VideoSection() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = document.fullscreenElement !== null;
      if (!isCurrentlyFullscreen && isFullScreen) {
        handleExitFullScreen();
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [isFullScreen]);

  const handlePlayClick = async () => {
    if (!containerRef.current) return;

    try {
      setIsFullScreen(true);

      // Request fullscreen first
      if (containerRef.current?.requestFullscreen) {
        await containerRef.current.requestFullscreen();
      }

      // Then play with sound after a short delay to allow animation to start
      setTimeout(() => {
        if (fullscreenVideoRef.current) {
          fullscreenVideoRef.current.muted = false;
          fullscreenVideoRef.current
            .play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch((err) => {
              console.error("Play error:", err);
              // Fallback for browsers that block autoplay with sound
              if (fullscreenVideoRef.current) {
                fullscreenVideoRef.current.muted = true;
                fullscreenVideoRef.current.play().then(() => {
                  alert(
                    "Your browser blocked autoplay with sound. Please unmute the video manually."
                  );
                  setIsPlaying(true);
                });
              }
            });
        }
      }, 300); // Short delay to allow animation to start
    } catch (error) {
      console.error("Video playback error:", error);
    }
  };

  const handleExitFullScreen = () => {
    if (document.fullscreenElement && document.exitFullscreen) {
      document
        .exitFullscreen()
        .catch((err) => console.error("Exit fullscreen error:", err));
    }

    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.currentTime = 0; // Reset video position
    }

    setIsFullScreen(false);
    setIsPlaying(false);
  };

  return (
    <section className="h-screen relative bg-black">
      <div ref={containerRef} className="absolute inset-0 w-full h-full">
        {/* Background video (always visible when not in fullscreen) */}
        {!isFullScreen && (
          <>
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover">
              <source src="/demovideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </>
        )}

        {/* Fullscreen video with animation */}
        {isFullScreen && (
          <>
            <div
              className="absolute inset-0 z-[60] bg-black animate-in fade-in zoom-in-95 duration-500"
              style={{
                animationFillMode: "forwards",
                animationDuration: "500ms",
              }}>
              <video
                ref={fullscreenVideoRef}
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
                controls={isFullScreen}
                controlsList="nodownload">
                <source src="/demovideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div>
              <p className="text-white absolute top-4 left-4 z-[90] font-biennalle uppercase tracking-wider text-lg">2024 Showreel</p>
            </div>
            <button
              onClick={handleExitFullScreen}
              className="absolute top-4 right-4 z-[90] p-2"
              aria-label="Exit full screen">
              <X className="h-8 w-8 text-white/70 hover:text-white" />
            </button>
          </>
        )}
      </div>

      {!isFullScreen && (
        <>
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center pointer-events-none">
            <div className="text-center text-white">
              <h1 className="text-2xl md:text-xl font-medium mb-4 uppercase font-biennale">
                2024 showreel
              </h1>

              <button
                onClick={handlePlayClick}
                className=" bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all duration-300 group pointer-events-auto"
                aria-label="Play video in full screen">
                <Play className="h-7 w-7 text-white fill-white group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-4">
            <ChevronDown className="h-8 w-8 text-white animate-bounce" />
          </div>
        </>
      )}
    </section>
  );
}
