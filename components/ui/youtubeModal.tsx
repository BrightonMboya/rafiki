import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";

interface VideoProps {
  width: string;
  height: string;
  url: string;
  className: string;
  videoType: string;
  isHovered: boolean
}

export default function YoutubeModal({
  width,
  height,
  url,
  videoType,
  className,
  isHovered
}: VideoProps) {
  const isPortrait = videoType === "portrait";
  const modalWidth = isPortrait ? "w-[400px]" : "min-w-[80%]";
  const minWidth = isPortrait ? "w-[30%]" : "w-[80%]"
  const iframeWidth = isPortrait ? 280 : width;
  const iframeHeight = isPortrait ? 500 : height;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={`relative py-1 px-6 w-fit font-semibold text-lg text-center flex items-center justify-center mx-auto hover:before:bg-[#ff7900] overflow-hidden bg-white text-[#ff7900] transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#ff7900] before:transition-all before:duration-500 hover:text-white  hover:before:left-0 hover:before:w-full translate-y-10 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0'} group-hover:translate-y-0 group-hover:opacity-100 delay-300 duration-500 `}>  
          <span className="relative z-10 font-acumin">WATCH VIDEO</span>
        </button>
      </DialogTrigger>
      <DialogContent
        className={`p-2 md:p-0 overflow-hidden ${modalWidth} h-[80%] bg-black/40`}>
        <div>
          <iframe
            width={iframeWidth}
            height={iframeHeight}
            src={url}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}

  