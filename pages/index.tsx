"use client";
import HeroSection from "../components/home/HeroSection";
import AboutUs from "../components/home/AboutUs";
import Services from "../components/home/Services";
import Footer from "../components/home/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - sectionHeight / 3 &&
          scrollPosition < sectionTop + sectionHeight - sectionHeight / 3
        ) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="overflow-x-hidden scroll-smooth h-screen snap-y snap-mandatory ">
      <HeroSection />
      <AboutUs />
      <Services />
      <Footer />
    </main>
  );
}
