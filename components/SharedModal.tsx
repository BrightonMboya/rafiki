import { ArrowUturnLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { variants } from "../utils/animationVariants";
import { range } from "../utils/range";
import type { ImageProps, SharedModalProps } from "../utils/types";

export default function SharedModal({
  index,
  images,
  changePhotoId,
  closeModal,
  navigation,
  currentPhoto,
  direction,
}: SharedModalProps) {
  const [loaded, setLoaded] = useState(false);

  let filteredImages = images?.filter((img: ImageProps) =>
    range(index - 15, index + 15).includes(img.id)
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (index < images?.length - 1) {
        changePhotoId(index + 1);
      }
    },
    onSwipedRight: () => {
      if (index > 0) {
        changePhotoId(index - 1);
      }
    },
    trackMouse: true,
  });

  let currentImage = images ? images[index] : currentPhoto;

  return (
    <MotionConfig
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}>
      <div
        className="relative z-50 flex h-full w-full items-center wide:h-full px-4"
        {...handlers}
        onContextMenu={(e) => e.preventDefault()}>
        <div className="w-full overflow-hidden">
          <div className=" flex aspect-[3/2] items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute ">
                <Image
                  src={`https://res.cloudinary.com/${
                    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
                  }/image/upload/c_scale,${navigation ? "w_1280" : "w_1920"}/${
                    currentImage.public_id
                  }.${currentImage.format}`}
                  width={navigation ? 1280 : 1920}
                  height={navigation ? 853 : 1280}
                  priority
                  alt="Rafiki"
                  draggable={false}
                  onLoad={() => setLoaded(true)}
                  // className="object-contain max-w-full max-h-[90vh] border-2"
                  className={`max-h-[90vh] py-20 px-10 2xl:px-0 2xl:py-[110px] ${
                    currentImage.height > currentImage.width
                      ? "object-contain"
                      : "object-cover"
                  }`}
                />
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center ">
              <div className="absolute bottom-[150px] lg:bottom-[25px] 2xl:bottom-[50px] gap-[48px] flex items-center justify-between px-8 z-[999]">
                <div className="text-white text-base  font-sans gap-[20px] lg:gap-[48px] flex ">
                  <span>{index + 1}</span> <span>/</span>
                  <span>{images.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 mx-auto flex px-10 items-center justify-center">
          {loaded && (
            <div className="relative aspect-[3/2] max-h-full w-full font-biennale">
              {navigation && (
                <>
                  {index > 0 && (
                    <button
                      onClick={() => changePhotoId(index - 1)}
                      className="hover:scale-110 transition-transform absolute left-0 2xl:left-8 top-[calc(50%-16px)]"
                      aria-label="Previous slide">
                      <Image
                        src="/left-arrow.svg"
                        alt="Previous slide"
                        width={30}
                        height={30}
                        className="w-6 h-6 2xl:w-8 2xl:h-8"
                      />
                    </button>
                  )}
                  {index + 1 < images.length && (
                    <button
                      className="hover:scale-110 transition-transform absolute right-0 2xl:right-8 top-[calc(50%-16px)] "
                      aria-label="Next slide"
                      onClick={() => changePhotoId(index + 1)}>
                      <Image
                        src="/right-arrow.svg"
                        alt="Next slide"
                        width={30}
                        height={30}
                        className="w-6 h-6 2xl:w-8 2xl:h-8"
                      />
                    </button>
                  )}
                </>
              )}

              <div className="absolute top-[-150px] lg:top-10 right-0 flex items-center gap-2 p-3 ">
                <button
                  onClick={() => closeModal()}
                  className="p-2 text-white backdrop-blur-lg transition ">
                  {navigation ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <ArrowUturnLeftIcon className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          )}
          {/* {navigation && (
            <div className="fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60">
              <motion.div
                initial={false}
                className="mx-auto mt-6 mb-6 flex aspect-[3/2] h-14">
                <AnimatePresence initial={false}>
                  {filteredImages.map(({ public_id, format, id }) => (
                    <motion.button
                      initial={{
                        width: "0%",
                        x: `${Math.max((index - 1) * -100, 15 * -100)}%`,
                      }}
                      animate={{
                        scale: id === index ? 1.25 : 1,
                        width: "100%",
                        x: `${Math.max(index * -100, 15 * -100)}%`,
                      }}
                      exit={{ width: "0%" }}
                      onClick={() => changePhotoId(id)}
                      key={id}
                      className={`${
                        id === index
                          ? "z-20 rounded-md shadow shadow-black/50"
                          : "z-10"
                      } ${id === 0 ? "rounded-l-md" : ""} ${
                        id === images.length - 1 ? "rounded-r-md" : ""
                      } relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none`}>
                      <Image
                        alt="small photos on the bottom"
                        width={180}
                        height={120}
                        className={`${
                          id === index
                            ? "brightness-110 hover:brightness-110"
                            : "brightness-50 contrast-125 hover:brightness-75"
                        } h-full transform object-cover transition`}
                        src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_180/${public_id}.${format}`}
                      />
                    </motion.button>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          )} */}
        </div>
      </div>
    </MotionConfig>
  );
}
