import Link from "next/link";
import BlurImage from "./BlurImage";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-end items-center font-gill mt-5">
      {/* <div className="relative w-[200px] h-[50px] ml-5 object-cover ">
        <Link href="/">
          <BlurImage imageUrl="/logo.png" preload={true} rounded={false} />
          <img src="/logo.png" alt="logo" className="w-[200px] h-[50px]" />
        </Link>
      </div> */}

      <div className="">
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <svg
            className="text-white mr-[20px]"
            width="35"
            height="35"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"></path>
          </svg>
        </button>
        {isOpen && (
          <div className="absolute left-0 top-0 z-[999] h-screen w-full bg-black md:hidden">
            <button
              className="absolute right-5 top-5"
              onClick={() => setIsOpen(false)}>
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M28.2082 3.55324L25.4469 0.791992L14.4998 11.7391L3.55275 0.791992L0.791504 3.55324L11.7386 14.5003L0.791504 25.4474L3.55275 28.2087L14.4998 17.2616L25.4469 28.2087L28.2082 25.4474L17.2611 14.5003L28.2082 3.55324Z"
                  fill="#fff"
                />
              </svg>
            </button>
            <ul className="flex flex-col space-y-[20px] pl-[40px] pt-[50px]  text-[36px] mt-[50px] text-white font-gill">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <li>Home</li>
              </Link>
              
              <Link href="/about" onClick={() => setIsOpen(false)}>
                <li>About Us</li>
              </Link>

              <Link href="/gallery" onClick={() => setIsOpen(false)}>
                <li>Photography</li>
              </Link>

              {/* <Link href="" onClick={() => setIsOpen(false)}>
                <li>Contact Us</li>
              </Link> */}
            </ul>
          </div>
        )}
        <ul className="text-white md:flex text-xl gap-[30px] pr-[80px] hidden ">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About Us</li>
          </Link>

          <Link href="/gallery">
            <li>Photography</li>
          </Link>

          {/* <Link href="">
            <li>Contact Us</li>
          </Link> */}
        </ul>
      </div>
    </nav>
  );
}
