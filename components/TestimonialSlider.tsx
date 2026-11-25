"use client";

<<<<<<< HEAD
import { useEffect, useRef, useState, type TransitionEvent } from "react";
=======
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
>>>>>>> aa67bf0c2867b63c1bc475882f1b039d85e58526
import { HOME, IMG, HEADING_FONT } from "@/data/data";
import { LeafIcon, QuoteIcon, StarIcon } from "@/lib/icons";
import { Photo } from "./Photo";

const { items, leftImage, leftImageAlt, rightImage, rightImageAlt } = HOME.testimonials;
<<<<<<< HEAD
const slides = items.length > 1 ? [...items, items[0]] : items;

export function TestimonialSlider() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [touching, setTouching] = useState(false);
  const [manualTick, setManualTick] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const activeIndex = items.length > 0 ? trackIndex % items.length : 0;

  useEffect(() => {
    if (touching || items.length <= 1) return;
    const timer = setInterval(() => {
      if (document.hidden) return;
      setIsTransitioning(true);
      setTrackIndex((prev) => (prev >= items.length ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [touching, manualTick]);

  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  const handleTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget || e.propertyName !== "transform") return;
    if (trackIndex >= items.length) {
      setIsTransitioning(false);
      setTrackIndex(0);
    }
  };

  const goToSlide = (i: number) => {
    setIsTransitioning(true);
    setTrackIndex(i);
    setManualTick((n) => n + 1);
  };

  const showNext = () => {
    setIsTransitioning(true);
    setTrackIndex((prev) => (prev >= items.length ? 1 : prev + 1));
    setManualTick((n) => n + 1);
  };

  const showPrev = () => {
    setIsTransitioning(true);
    setTrackIndex((prev) => (prev <= 0 ? items.length - 1 : prev - 1));
    setManualTick((n) => n + 1);
  };

  return (
    <div className="relative w-full">
=======

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % items.length), 5500);
    return () => clearInterval(timer);
  }, [paused]);

  const item = items[index];

  return (
    <div className="relative w-full" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
>>>>>>> aa67bf0c2867b63c1bc475882f1b039d85e58526
      <div className="relative grid items-center gap-6 pb-0 pt-3.5 lg:grid-cols-[259px_1fr_259px] lg:px-3.5 xl:pb-2 xl:pt-[17px] xl:px-[14px]">
        {/* Left image */}
        <div className="relative mx-auto hidden lg:block">
          <div
            className="pointer-events-none absolute -left-3 -top-3 z-0 h-[calc(50%+12px)] w-[calc(50%+12px)] rounded-[46px_22px_0_22px] border-[1.5px] border-[#6fb43a] xl:-left-3.5 xl:-top-3.5 xl:h-[calc(50%+14px)] xl:w-[calc(50%+14px)] xl:rounded-[48px_24px_0_24px]"
            aria-hidden="true"
          />
          <div className="relative z-10 h-[396px] w-[255px] overflow-hidden rounded-[34px_34px_64px_34px]">
            <Photo src={IMG[leftImage]} alt={leftImageAlt} sizes="255px" className="group-hover:scale-100" />
          </div>
        </div>

<<<<<<< HEAD
        <div className="relative min-w-0 px-2 text-center">
=======
        <div className="relative px-2 text-center">
>>>>>>> aa67bf0c2867b63c1bc475882f1b039d85e58526
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-[48px] bg-[#4f9a28] sm:w-[80px]" />
            <span className="group grid size-[52px] sm:size-[64px] place-items-center rounded-full bg-[#e2f4cc] text-[#17650f] shadow-sm transition-all duration-300 hover:scale-110 hover:bg-[#17650f] hover:text-white xl:size-[78px]">
              <QuoteIcon size={42} className="size-8 sm:size-10 transition-transform duration-300 group-hover:scale-110 xl:size-[42px]" />
            </span>
            <span className="h-px w-[48px] bg-[#4f9a28] sm:w-[80px]" />
          </div>

<<<<<<< HEAD
          <div
            className="relative mt-4 overflow-hidden sm:mt-5 xl:mt-[22px]"
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
              setTouching(true);
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current !== null) {
                const diff = e.changedTouches[0].clientX - touchStartX.current;
                if (diff > 45) showPrev();
                else if (diff < -45) showNext();
                touchStartX.current = null;
              }
              setTouching(false);
            }}
          >
            <div
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(-${trackIndex * 100}%)`,
                transition: isTransitioning ? "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)" : "none",
              }}
              className="flex"
            >
              {slides.map((item, i) => (
                <div key={`${item.name}-${i}`} className="w-full shrink-0 px-1">
                  <blockquote className="mx-auto max-w-[640px] text-[15px] sm:text-[17.5px] font-medium leading-[1.55] text-[#1c1c1c] xl:text-[21px] xl:leading-[32px]">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <div className="mt-4 sm:mt-6 flex items-center justify-center gap-3 sm:gap-4 xl:mt-[24px]">
                    <span className="hidden h-px w-[80px] bg-[#4f9a28] sm:block" />
                    <span className="group grid size-[46px] sm:size-[54px] place-items-center rounded-full border-2 border-[#17650f] bg-white text-[#2f8a1e] transition-all duration-300 hover:scale-110 hover:bg-[#17650f] hover:text-white xl:size-[58px]">
                      <LeafIcon size={32} className="size-7 sm:size-8 transition-transform duration-300 group-hover:scale-110 xl:size-[32px]" />
                    </span>
                    <span className="text-left">
                      <span style={{ fontFamily: HEADING_FONT }} className="block text-[17px] sm:text-[19px] font-bold leading-tight text-[#17650f] xl:text-[21px]">
                        {item.name}
                      </span>
                      <span className="block text-[14px] sm:text-[15.5px] text-[#2a2a2a] xl:text-[17px]">{item.role}</span>
                    </span>
                    <span className="hidden h-px w-[80px] bg-[#4f9a28] sm:block" />
                  </div>
                  <div className="mt-2 sm:mt-3 flex justify-center gap-1 text-[#f5b800]">
                    {Array.from({ length: 5 }, (_, starIdx) => (
                      <StarIcon key={starIdx} size={26} className="size-5 sm:size-6 transition-transform duration-200 hover:scale-125 xl:size-[26px]" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {items.length > 1 && (
            <div className="mt-4 flex items-center justify-center gap-2 sm:mt-5" role="tablist" aria-label="Testimonials slides">
              {items.map((item, i) => {
                const isActive = activeIndex === i;
                return (
                  <button
                    key={item.name}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Show testimonial from ${item.name}`}
                    onClick={() => goToSlide(i)}
                    className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 ${
                      isActive ? "w-7 bg-[#17650f]" : "w-2.5 bg-[#c6e59c] hover:bg-[#86c61a]"
                    }`}
                  />
                );
              })}
            </div>
          )}
=======
          <div className="relative mt-4 min-h-0 sm:mt-5 xl:mt-[22px] xl:min-h-[240px]">
            <AnimatePresence mode="wait">
              <motion.div key={item.name} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.45, ease: "easeOut" }}>
                <blockquote className="mx-auto max-w-[640px] text-[15px] sm:text-[17.5px] font-medium leading-[1.55] text-[#1c1c1c] xl:text-[21px] xl:leading-[32px]">&ldquo;{item.quote}&rdquo;</blockquote>
                <div className="mt-4 sm:mt-6 flex items-center justify-center gap-3 sm:gap-4 xl:mt-[24px]">
                  <span className="hidden h-px w-[80px] bg-[#4f9a28] sm:block" />
                  <span className="group grid size-[46px] sm:size-[54px] place-items-center rounded-full border-2 border-[#17650f] bg-white text-[#2f8a1e] transition-all duration-300 hover:scale-110 hover:bg-[#17650f] hover:text-white xl:size-[58px]">
                    <LeafIcon size={32} className="size-7 sm:size-8 transition-transform duration-300 group-hover:scale-110 xl:size-[32px]" />
                  </span>
                  <span className="text-left">
                    <span style={{ fontFamily: HEADING_FONT }} className="block text-[17px] sm:text-[19px] font-bold leading-tight text-[#17650f] xl:text-[21px]">{item.name}</span>
                    <span className="block text-[14px] sm:text-[15.5px] text-[#2a2a2a] xl:text-[17px]">{item.role}</span>
                  </span>
                  <span className="hidden h-px w-[80px] bg-[#4f9a28] sm:block" />
                </div>
                <div className="mt-2 sm:mt-3 flex justify-center gap-1 text-[#f5b800]">
                  {Array.from({ length: 5 }, (_, i) => (
                    <StarIcon key={i} size={26} className="size-5 sm:size-6 transition-transform duration-200 hover:scale-125 xl:size-[26px]" />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

>>>>>>> aa67bf0c2867b63c1bc475882f1b039d85e58526
        </div>

        {/* Right image */}
        <div className="relative mx-auto hidden lg:block">
          <div
            className="pointer-events-none absolute -right-3 -top-3 z-0 h-[calc(50%+12px)] w-[calc(50%+12px)] rounded-[22px_46px_22px_0] border-[1.5px] border-[#6fb43a] xl:-right-3.5 xl:-top-3.5 xl:h-[calc(50%+14px)] xl:w-[calc(50%+14px)] xl:rounded-[24px_48px_24px_0]"
            aria-hidden="true"
          />
          <div className="relative z-10 h-[396px] w-[252px] overflow-hidden rounded-[34px_34px_34px_64px]">
            <Photo src={IMG[rightImage]} alt={rightImageAlt} sizes="252px" className="group-hover:scale-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
