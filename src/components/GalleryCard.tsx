"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";

interface GalleryCardProps {
  title: string;
  images: string[];
}

export default function GalleryCard({ title, images }: GalleryCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (images.length === 0) return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group w-full cursor-pointer text-left"
      >
        <div className="relative overflow-hidden rounded-xl">
          <div className="aspect-[4/3]">
            <img
              src={images[0]}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
          {images.length > 1 && (
            <span className="absolute top-3 right-3 rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium text-white">
              {images.length} photos
            </span>
          )}
        </div>
        <p className="mt-3 text-center text-sm font-semibold text-foreground">
          {title}
        </p>
      </button>

      {isOpen && (
        <Lightbox images={images} title={title} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}
