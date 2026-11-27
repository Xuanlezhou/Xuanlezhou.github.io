"use client";

import Image from "next/image";
import { useState } from "react";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import type { Slide } from "../data/projects";

export default function Carousel({ slides, title }: { slides: Slide[]; title: string }) {
  const [i, setI] = useState(0);
  if (slides.length === 0) return null;

  const go = (n: number) => setI((n + slides.length) % slides.length);
  const slide = slides[i];

  return (
    <div className="w-full">
      <div className="relative aspect-video w-full overflow-hidden bg-[#f3f2f5] ring-1 ring-line">
        {slide.type === "image" ? (
          <Image
            key={slide.url}
            src={slide.url}
            alt={`${title} — image ${i + 1}`}
            fill
            unoptimized
            className="object-contain"
          />
        ) : (
          <iframe
            key={slide.url}
            src={slide.url}
            title={`${title} — video`}
            allow="autoplay"
            allowFullScreen
            className="h-full w-full"
          />
        )}
        {slides.length > 1 && (
          <>
            <button
              aria-label="Previous"
              onClick={() => go(i - 1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/85 p-1.5 text-ink transition hover:bg-white"
            >
              <RxChevronLeft size={20} />
            </button>
            <button
              aria-label="Next"
              onClick={() => go(i + 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/85 p-1.5 text-ink transition hover:bg-white"
            >
              <RxChevronRight size={20} />
            </button>
          </>
        )}
      </div>
      {slides.length > 1 && (
        <div className="mt-3 flex justify-center gap-1.5">
          {slides.map((s, n) => (
            <button
              key={s.url + n}
              aria-label={`Show slide ${n + 1}`}
              onClick={() => go(n)}
              className={`h-1 rounded-full transition-all ${n === i ? "w-6 bg-ink" : "w-1.5 bg-line hover:bg-muted"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
