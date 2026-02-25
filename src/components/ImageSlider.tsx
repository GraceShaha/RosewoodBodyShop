"use client";

import { useRef, useState, useCallback, useEffect } from "react";

interface ImageSliderProps {
  images: string[];
  title: string;
}

export default function ImageSlider({ images, title }: ImageSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateIndex = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const width = container.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", updateIndex, { passive: true });
    return () => container.removeEventListener("scroll", updateIndex);
  }, [updateIndex]);

  const scrollTo = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTo({ left: index * container.offsetWidth, behavior: "smooth" });
  };

  const prev = () => scrollTo(Math.max(0, currentIndex - 1));
  const next = () => scrollTo(Math.min(images.length - 1, currentIndex + 1));

  if (images.length === 0) return null;

  return (
    <div className="group relative overflow-hidden rounded-xl">
      {/* Slides */}
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory overflow-x-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((src, i) => (
          <div key={i} className="w-full flex-shrink-0 snap-start">
            <div className="aspect-[4/3]">
              <img
                src={src}
                alt={`${title} - image ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Arrows (visible on hover, hidden if single image) */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100 disabled:opacity-0"
            disabled={currentIndex === 0}
            aria-label="Previous image"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100 disabled:opacity-0"
            disabled={currentIndex === images.length - 1}
            aria-label="Next image"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
