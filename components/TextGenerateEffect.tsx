import React, { useEffect, useRef, useState } from "react";

const AnimatedText = ({ paragraphs }) => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Show animation when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Flatten word count per paragraph to stagger timing
  let wordOffset = 0;

  return (
    <div ref={containerRef} className="space-y-4">
      {paragraphs.map((paragraph, paraIndex) => {
        const words = paragraph.split(" ");
        const currentOffset = wordOffset;
        wordOffset += words.length;

        return (
          <p key={paraIndex} className="flex flex-wrap gap-2 leading-relaxed text-white max-w-sm md:max-w-lg lg:max-w-[50rem]  text-lg">
            {words.map((word, wordIndex) => (
              <span
                key={wordIndex}
                className={`inline-block ${
                  visible ? "typewriter" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${(currentOffset + wordIndex) * 150}ms`,
                }}>
                {word}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
};

export default AnimatedText;
