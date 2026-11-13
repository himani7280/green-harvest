"use client";

import { useEffect, useRef, useState } from "react";
import { ServiceCard } from "./Cards";
import { Eyebrow } from "./SectionHeading";
import { Reveal } from "./Motion";
import { ArrowLeftIcon, ArrowRightIcon, LeavesIcon } from "@/lib/icons";
import { HEADING_FONT } from "@/data/data";

type ServiceItem = {
  icon: string;
  title: string;
  text: string;
  image: string;
};

type ServicesData = {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  text: string;
  prevLabel?: string;
  nextLabel?: string;
  items: ServiceItem[];
};

export function ServicesCarousel({ services }: { services: ServicesData }) {
  const items = services.items;
  const totalOriginal = items.length;

  const tripleItems = [...items, ...items, ...items];
  const [index, setIndex] = useState(totalOriginal);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const updateCount = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 768) setVisibleCount(2);
      else if (w < 1024) setVisibleCount(3);
      else setVisibleCount(4);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const moveLeft = () => {
    setIsTransitioning(true);
    setIndex((prev) => prev + 1);
  };

  const moveRight = () => {
    setIsTransitioning(true);
    setIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (index >= totalOriginal * 2) {
      setIsTransitioning(false);
      setIndex((prev) => prev - totalOriginal);
    } else if (index < totalOriginal) {
      setIsTransitioning(false);
      setIndex((prev) => prev + totalOriginal);
    }
  };

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

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 45) {
      moveRight();
    } else if (diff < -45) {
      moveLeft();
    }
    touchStartX.current = null;
  };

  return (
    <div>
      <div className="flex flex-col gap-3.5 sm:gap-5 lg:flex-row lg:items-center xl:items-end">
        <Reveal className="lg:w-[574px] lg:shrink-0">
          <Eyebrow>{services.eyebrow}</Eyebrow>
          <h2 style={{ fontFamily: HEADING_FONT }} className="mt-1.5 sm:mt-2 text-[1.75rem] font-bold tracking-[-0.01em] leading-[1.1] sm:text-[2.4rem] md:text-[2.6rem] xl:text-[51px] xl:leading-[52px]">
            <span className="block text-[#4a2616]">{services.titleLine1}</span>
            <span className="group relative inline-block text-[#17650f]">
              {services.titleLine2}
              <LeavesIcon size={64} strokeWidth={1.2} className="absolute -right-[84px] top-1 hidden text-[#2f8a1e] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 sm:block" />
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="flex items-center gap-6 lg:flex-1">
          <span className="hidden h-[76px] w-px bg-[#b9c7ad] lg:block" aria-hidden="true" />
          <p className="max-w-[400px] text-[14.5px] sm:text-[15px] leading-[1.55] sm:leading-[1.6] text-[#1c1c1c] xl:text-[18.7px] xl:leading-[26px]">{services.text}</p>
        </Reveal>
        <Reveal delay={0.2} className="lg:ml-auto xl:mr-[19px]">
          <div className="flex gap-3 sm:gap-[15px]">
            <button
              type="button"
              aria-label={services.prevLabel}
              onClick={moveLeft}
              className="group grid size-[42px] sm:size-[48px] place-items-center rounded-[12px] sm:rounded-[14px] border-[1.5px] border-[#4f9a28] bg-white text-[#17650f] shadow-sm cursor-pointer transition-all duration-300 hover:bg-[linear-gradient(135deg,#3b8a14,#17650f)] hover:text-white hover:border-transparent hover:shadow-md active:scale-95 xl:h-[54px] xl:w-[56px]"
            >
              <ArrowLeftIcon size={22} strokeWidth={2.2} className="transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:scale-110" />
            </button>
            <button
              type="button"
              aria-label={services.nextLabel}
              onClick={moveRight}
              className="group grid size-[42px] sm:size-[48px] place-items-center rounded-[12px] sm:rounded-[14px] border-[1.5px] border-[#4f9a28] bg-white text-[#17650f] shadow-sm cursor-pointer transition-all duration-300 hover:bg-[linear-gradient(135deg,#3b8a14,#17650f)] hover:text-white hover:border-transparent hover:shadow-md active:scale-95 xl:h-[54px] xl:w-[56px]"
            >
              <ArrowRightIcon size={22} strokeWidth={2.2} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-110" />
            </button>
          </div>
        </Reveal>
      </div>

      {/* Carousel track */}
      <div
        className="mt-5 -mx-4 overflow-hidden px-4 pt-2 pb-3 sm:mt-6 sm:pt-3 sm:pb-4 xl:mt-[38px] xl:pt-5 xl:pb-4"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(calc(-${index} * (100% + 20px) / ${visibleCount}))`,
            transition: isTransitioning ? "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)" : "none",
          }}
          className="flex gap-[20px]"
        >
          {tripleItems.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="w-full shrink-0 sm:w-[calc((100%-20px)/2)] md:w-[calc((100%-40px)/3)] lg:w-[calc((100%-60px)/4)]"
            >
              <ServiceCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

