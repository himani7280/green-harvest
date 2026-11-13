"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@/lib/icons";

/** Previous / next buttons that scroll the services carousel track exactly one card per click */
export function ServiceArrows({ targetId }: { targetId: string }) {
  const scroll = (direction: 1 | -1) => {
    const track = document.getElementById(targetId);
    if (!track) return;

    const cards = track.querySelectorAll<HTMLElement>(".snap-start");
    if (!cards.length) return;

    const cardWidth = cards[0].getBoundingClientRect().width;
    const computedGap = parseFloat(window.getComputedStyle(track).gap) || 20;
    const step = cardWidth + computedGap;

    const visibleCount = Math.max(1, Math.round((track.clientWidth + computedGap) / step));
    const maxIndex = Math.max(0, cards.length - visibleCount);

    const currentIndex = Math.round(track.scrollLeft / step);
    let targetIndex = currentIndex + direction;

    if (targetIndex > maxIndex) {
      targetIndex = 0; // Loop back to the first card
    } else if (targetIndex < 0) {
      targetIndex = maxIndex; // Loop to the last set
    }

    track.scrollTo({
      left: targetIndex * step,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex gap-[15px]">
      <button
        type="button"
        aria-label="Previous services"
        onClick={() => scroll(-1)}
        className="grid size-[48px] place-items-center rounded-[14px] border-[1.5px] border-[#4f9a28] bg-white text-[#17650f] shadow-sm cursor-pointer transition-all duration-300 hover:bg-[linear-gradient(135deg,#3b8a14,#17650f)] hover:text-white hover:border-transparent hover:shadow-md active:scale-95 xl:h-[54px] xl:w-[56px]"
      >
        <ArrowLeftIcon size={24} strokeWidth={2.2} />
      </button>
      <button
        type="button"
        aria-label="Next services"
        onClick={() => scroll(1)}
        className="grid size-[48px] place-items-center rounded-[14px] border-[1.5px] border-[#4f9a28] bg-white text-[#17650f] shadow-sm cursor-pointer transition-all duration-300 hover:bg-[linear-gradient(135deg,#3b8a14,#17650f)] hover:text-white hover:border-transparent hover:shadow-md active:scale-95 xl:h-[54px] xl:w-[56px]"
      >
        <ArrowRightIcon size={24} strokeWidth={2.2} />
      </button>
    </div>
  );
}
