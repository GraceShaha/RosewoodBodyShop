"use client";

import { useRef, useState, useCallback, useEffect } from "react";

interface LightboxProps {
  images: string[];
  title: string;
  onClose: () => void;
}

export default function Lightbox({ images, title, onClose }: LightboxProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateIndex = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const index = Math.round(container.scrollLeft / container.offsetWidth);
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", updateIndex, { passive: true });
    return () => container.removeEventListener("scroll", updateIndex);
  }, [updateIndex]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  });

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const scrollTo = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTo({ left: index * container.offsetWidth, behavior: "smooth" });
  };

  const prev = () => scrollTo(Math.max(0, currentIndex - 1));
  const next = () => scrollTo(Math.min(images.length - 1, currentIndex + 1));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        aria-label="Close lightbox"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Title */}
      <p className="absolute top-5 left-1/2 -translate-x-1/2 text-sm font-semibold text-white/80">
        {title}
      </p>

      {/* Image counter */}
      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-white/60">
        {currentIndex + 1} / {images.length}
      </p>

      {/* Slides */}
      <div
        ref={scrollRef}
        className="flex h-full w-full snap-x snap-mandatory overflow-x-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((src, i) => (
          <div key={i} className="flex h-full w-full flex-shrink-0 snap-start items-center justify-center p-12">
            <img
              src={src}
              alt={`${title} - image ${i + 1}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 disabled:opacity-30"
            disabled={currentIndex === 0}
            aria-label="Previous image"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 disabled:opacity-30"
            disabled={currentIndex === images.length - 1}
            aria-label="Next image"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === currentIndex ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
