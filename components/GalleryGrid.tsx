"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { HOME, IMG } from "@/data/data";
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from "@/lib/icons";
import { Photo } from "./Photo";
import { Stagger, StaggerItem } from "./Motion";

const { items, lightbox } = HOME.gallery;

/* Desktop mosaic slots */
const SLOTS = [
  [0, 0, 302, 160],
  [310, 0, 244, 160],
  [562, 0, 245, 283],
  [815, 0, 435, 153],
  [0, 168, 284, 148],
  [293, 168, 261, 148],
  [815, 162, 435, 298],
  [0, 325, 230, 135],
  [238, 325, 235, 135],
  [481, 292, 161, 168],
  [651, 292, 156, 168],
] as const;

/* Mobile bento spans */
const MOBILE_SPANS = [
  "col-span-2 row-span-1 md:col-span-2 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  "col-span-1 row-span-2 md:col-span-1 md:row-span-2",
  "col-span-1 row-span-1 md:col-span-2 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  "col-span-2 row-span-1 md:col-span-2 md:row-span-2",
  "col-span-1 row-span-2 md:col-span-1 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  "col-span-2 row-span-1 md:col-span-2 md:row-span-1",
] as const;

const W = 1250;
const H = 460;
const pct = (value: number, total: number) => `${((value / total) * 100).toFixed(4)}%`;

export function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const touchStartX = useRef<number | null>(null);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === null ? 0 : (prev - 1 + items.length) % items.length));
  }, []);

  const showNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % items.length));
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, closeLightbox, showPrev, showNext]);

  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  return (
    <div className="relative w-full">
      {/* Notch clipPath */}
      <svg className="pointer-events-none absolute size-0 overflow-hidden" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="gallery-wheat-notch" clipPathUnits="objectBoundingBox">
            <path d="M 0.590,0 L 0.913,0 Q 1,0 1,0.083 L 1,0.917 Q 1,1 0.913,1 L 0.087,1 Q 0,1 0,0.917 L 0,0.280 Q 0,0.196 0.087,0.196 L 0.391,0.196 Q 0.503,0.196 0.503,0.089 Q 0.503,0 0.590,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Mobile & tablet grid */}
      <Stagger className="grid grid-flow-dense grid-cols-2 auto-rows-[155px] gap-3 sm:auto-rows-[190px] sm:gap-3.5 md:grid-cols-3 md:auto-rows-[205px] md:gap-4 lg:hidden">
        {items.map((item, i) => (
          <StaggerItem
            key={`mobile-${item.image}`}
            className={`group relative overflow-hidden rounded-[14px] sm:rounded-[16px] ${MOBILE_SPANS[i] ?? "col-span-1"}`}
          >
            <button
              type="button"
              onClick={() => {
                setDirection(1);
                setActiveIndex(i);
              }}
              aria-label={`${lightbox.viewPrefix} ${item.alt}`}
              className="relative block size-full cursor-pointer text-left focus:outline-none"
            >
              <Photo
                src={IMG[item.image]}
                alt={item.alt}
                sizes="(min-width: 768px) 66vw, 100vw"
                className="group-hover:scale-110"
              />
              <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
            </button>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Desktop mosaic */}
      <Stagger className="relative hidden w-full aspect-[1250/460] lg:block">
        {items.map((item, i) => {
          const [left, top, width, height] = SLOTS[i];
          const isNotched = i === 9;
          const style: CSSProperties = {
            left: pct(left, W),
            top: pct(top, H),
            width: pct(width, W),
            height: pct(height, H),
            ...(isNotched ? { clipPath: "url(#gallery-wheat-notch)" } : {}),
          };

          return (
            <StaggerItem
              key={item.image}
              style={style}
              className={`group absolute overflow-hidden ${
                isNotched ? "" : "rounded-[clamp(5px,1.1vw,14px)]"
              }`}
            >
              <button
                type="button"
                onClick={() => {
                  setDirection(1);
                  setActiveIndex(i);
                }}
                aria-label={`${lightbox.viewPrefix} ${item.alt}`}
                className="relative block size-full cursor-pointer text-left focus:outline-none"
              >
                <Photo
                  src={IMG[item.image]}
                  alt={item.alt}
                  sizes="(min-width: 1024px) 435px, 35vw"
                  className="group-hover:scale-110"
                />
                <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
              </button>
            </StaggerItem>
          );
        })}
      </Stagger>

      {/* Lightbox modal */}
      <AnimatePresence>
        {activeIndex !== null && activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/85 px-4 py-4 backdrop-blur-md sm:px-6"
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.dialogAriaLabel}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative flex w-full max-w-[680px] flex-col items-center"
            >
              <div
                onTouchStart={(e) => {
                  touchStartX.current = e.touches[0].clientX;
                }}
                onTouchEnd={(e) => {
                  if (touchStartX.current === null) return;
                  const diff = e.changedTouches[0].clientX - touchStartX.current;
                  if (diff > 45) showPrev();
                  else if (diff < -45) showNext();
                  touchStartX.current = null;
                }}
                className="relative flex w-full items-center justify-center"
              >
                {/* Close button */}
                <button
                  type="button"
                  onClick={closeLightbox}
                  aria-label={lightbox.closeLabel}
                  className="absolute right-3 top-3 z-30 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-[#86c61a] bg-[#0a2f00]/90 text-white shadow-lg backdrop-blur-sm transition hover:bg-[#86c61a] hover:text-[#0a2f00] active:scale-95"
                >
                  <CloseIcon size={20} />
                </button>

                {/* Prev arrow */}
                <button
                  type="button"
                  onClick={showPrev}
                  aria-label={lightbox.prevLabel}
                  className="group absolute left-3 z-20 grid size-10 sm:size-11 cursor-pointer place-items-center rounded-full border-[1.5px] border-[#86c61a] bg-[#0a2f00]/85 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-[#17650f] hover:scale-105 active:scale-95"
                >
                  <ArrowLeftIcon size={20} strokeWidth={2.2} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
                </button>

                {/* Image frame */}
                <div className="relative aspect-[3/2] max-h-[68vh] w-full overflow-hidden rounded-[16px] sm:rounded-[20px] border border-white/25 bg-[#071d02] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.75)]">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={activeItem.image}
                      custom={direction}
                      initial={{ opacity: 0, x: direction * 40, scale: 0.98 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: direction * -40, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="relative size-full"
                    >
                      <Image
                        src={IMG[activeItem.image]}
                        alt={activeItem.alt}
                        fill
                        unoptimized
                        priority
                        sizes="(min-width: 768px) 680px, 92vw"
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Next arrow */}
                <button
                  type="button"
                  onClick={showNext}
                  aria-label={lightbox.nextLabel}
                  className="group absolute right-3 z-20 grid size-10 sm:size-11 cursor-pointer place-items-center rounded-full border-[1.5px] border-[#86c61a] bg-[#0a2f00]/85 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-[#17650f] hover:scale-105 active:scale-95"
                >
                  <ArrowRightIcon size={20} strokeWidth={2.2} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
