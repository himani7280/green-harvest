"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HOME, IMG, HEADING_FONT } from "@/data/data";
import { LeafIcon, QuoteIcon, StarIcon } from "@/lib/icons";
import { Photo } from "./Photo";

const { items, leftImage, leftImageAlt, rightImage, rightImageAlt } = HOME.testimonials;

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
    <div className="relative mx-auto max-w-[1267px] xl:w-[calc(1267*var(--u))] xl:max-w-none" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative grid items-center gap-6 pb-0 pt-0 lg:grid-cols-[259px_1fr_259px] xl:pb-2 xl:pt-[17px] xl:px-[13px]">
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

        <div className="relative px-2 text-center">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background-image:radial-gradient(#d3d8cd_1.4px,transparent_1.4px)] [background-size:9px_9px] [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_72%)]" aria-hidden="true" />
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-[48px] bg-[#4f9a28] sm:w-[80px]" />
            <span className="group grid size-[52px] sm:size-[64px] place-items-center rounded-full bg-[#e2f4cc] text-[#17650f] shadow-sm transition-all duration-300 hover:scale-110 hover:bg-[#17650f] hover:text-white xl:size-[78px]">
              <QuoteIcon size={42} className="size-8 sm:size-10 transition-transform duration-300 group-hover:scale-110 xl:size-[42px]" />
            </span>
            <span className="h-px w-[48px] bg-[#4f9a28] sm:w-[80px]" />
          </div>

          <div className="relative mt-4 min-h-0 sm:mt-5 xl:mt-[22px] xl:min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div key={item.name} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.45, ease: "easeOut" }}>
                <blockquote className="mx-auto max-w-[640px] text-[15.5px] sm:text-[18px] font-medium leading-[1.45] sm:leading-[1.5] text-[#1c1c1c] xl:text-[28px] xl:leading-[38px]">&ldquo;{item.quote}&rdquo;</blockquote>
                <div className="mt-4 sm:mt-6 flex items-center justify-center gap-3 sm:gap-4 xl:mt-[26px]">
                  <span className="hidden h-px w-[80px] bg-[#4f9a28] sm:block" />
                  <span className="group grid size-[46px] sm:size-[56px] place-items-center rounded-full border-2 border-[#17650f] bg-white text-[#2f8a1e] transition-all duration-300 hover:scale-110 hover:bg-[#17650f] hover:text-white xl:size-[63px]">
                    <LeafIcon size={34} className="size-7 sm:size-8 transition-transform duration-300 group-hover:scale-110 xl:size-[34px]" />
                  </span>
                  <span className="text-left">
                    <span style={{ fontFamily: HEADING_FONT }} className="block text-[18px] sm:text-[20px] font-bold leading-tight text-[#17650f] xl:text-[24.5px]">{item.name}</span>
                    <span className="block text-[14.5px] sm:text-[16px] text-[#2a2a2a] xl:text-[20px]">{item.role}</span>
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
