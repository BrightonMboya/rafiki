import { Dialog, DialogContent, DialogTrigger } from "./Dialog"; 

interface VideoProps {
  width: string;
  height: string;
  url: string;
  className: string; 
}

export default function YoutubeModal({
  width,
  height,
  url,
  className,
}: VideoProps) {


  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={`relative py-2 px-8 w-full font-semibold text-xl text-center flex items-center justify-center mx-auto sm:w-fit hover:before:bg-[#ff7900] overflow-hidden bg-white text-[#ff7900] transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#ff7900] before:transition-all before:duration-500 hover:text-white  hover:before:left-0 hover:before:w-full translate-y-12 group-hover:translate-y-4 opacity-0 group-hover:opacity-100 delay-300 duration-500 cursor-pointer`}>
          <span className="relative z-10">View More</span>
        </button>
      </DialogTrigger>
      <DialogContent className="p-0 overflow-hidden w-full min-h-72 bg-black/40 lg:w-[996px]">
        <div className={`relative aspect-w-16 aspect-h-9 `}>
          <iframe
            width={width}
            height={height}
            src={url}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; fullscreen; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}
