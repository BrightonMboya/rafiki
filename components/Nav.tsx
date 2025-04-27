import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const activeRouteClasses = "underline underline-offset-[10px] list-none ";
  const inactiveRouteClasses = "";
  const baseListClasses = "list-none cursor-pointer";

  return (
    <nav className="font-gill lg:flex w-full z-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed right-5 top-5 z-50 ">
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
            fillRule="evenodd"
            clipRule="evenodd"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-black md:hidden">
          <button
            className="fixed right-5 top-5"
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
          <ul className="flex flex-col space-y-[20px] pl-[40px] pt-[100px] text-[36px] text-white font-gill capitalize">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <li>Photography</li>
            </Link>

            <Link href="/about" onClick={() => setIsOpen(false)}>
              <li>Filmography</li>
            </Link>

            <Link href="/gallery" onClick={() => setIsOpen(false)}>
              <li>Portfolio</li>
            </Link>

            <Link href="/film" onClick={() => setIsOpen(false)}>
              <li>Connect</li>
            </Link>
          </ul>
        </div>
      )}
      <div className="hidden md:flex w-full justify-between items-center px-6 py-4 text-lg text-white capitalize">
        <div className="flex gap-[30px]">
          <Link href="/gallery">
            <li
              className={`${baseListClasses} ${
                pathname.endsWith("/gallery")
                  ? activeRouteClasses
                  : inactiveRouteClasses
              }`}>
              Photography
            </li>
          </Link>
          <Link href="/film">
            <li
              className={`${baseListClasses} ${
                pathname.startsWith("/film")
                  ? activeRouteClasses
                  : inactiveRouteClasses
              }`}>
              Filmography
            </li>
          </Link>
        </div>

        {/* Center section - Rafiki */}
        <div className="flex justify-center">
          <Link href="/">
            {/* <li
              className={`${baseListClasses} ${
                pathname === "/" ? activeRouteClasses : inactiveRouteClasses
              }`}>

              Rafiki
            </li> */}
            <Image
              src="https://res.cloudinary.com/du50lw9fp/image/upload/v1745593552/logo_pv8r0l.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </Link>
        </div>

        <div className="flex gap-[30px]">
          <Link href="/impact">
            <li
              className={`${baseListClasses} ${
                pathname.startsWith("/impact")
                  ? activeRouteClasses
                  : inactiveRouteClasses
              }`}>
              Portfolio
            </li>
          </Link>
          <Link href="/connect">
            <li
              className={`${baseListClasses} ${
                pathname.startsWith("/connect")
                  ? activeRouteClasses
                  : inactiveRouteClasses
              }`}>
              Connect
            </li>
          </Link>
        </div>
      </div>
    </nav>
  );
}
