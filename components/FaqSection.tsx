"use client";

<<<<<<< HEAD
import { useLayoutEffect, useRef, useState } from "react";
=======
import { useState } from "react";
>>>>>>> aa67bf0c2867b63c1bc475882f1b039d85e58526
import { HOME, HEADING_FONT } from "@/data/data";
import { ChevronDownIcon, ChevronUpIcon } from "@/lib/icons";

const { items } = HOME.faqs;

export function FaqList() {
  const [open, setOpen] = useState(0);
<<<<<<< HEAD
  const listRef = useRef<HTMLUListElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const answerRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [stableHeight, setStableHeight] = useState<number | undefined>(undefined);

  useLayoutEffect(() => {
    const ul = listRef.current;
    if (!ul) return;

    let lastWidth = -1;
    const measure = (force = false) => {
      const width = Math.round(ul.offsetWidth);
      if (!force && width === lastWidth) return;
      lastWidth = width;

      const currentPanelsH = panelRefs.current.reduce(
        (sum, el) => sum + (el ? el.offsetHeight : 0),
        0,
      );

      const maxAnswerH = answerRefs.current.reduce(
        (max, el) => Math.max(max, el ? el.offsetHeight : 0),
        0,
      );

      const collapsedHeight = ul.offsetHeight - currentPanelsH;
      const nextHeight = Math.ceil(collapsedHeight + maxAnswerH) + 2;

      if (nextHeight > 0) {
        setStableHeight(nextHeight);
      }
    };

    measure(true);
    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) measure(true);
    });
    const ro = new ResizeObserver(() => measure(false));
    ro.observe(ul);
    return () => {
      cancelled = true;
      ro.disconnect();
    };
  }, []);

  return (
    <div
      style={stableHeight ? { minHeight: `${stableHeight}px`, overflowAnchor: "none" } : { overflowAnchor: "none" }}
    >
      <ul ref={listRef} className="flex flex-col gap-2.5 sm:gap-[14px] xl:gap-[21px]">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <li
              key={item.q}
              className={`overflow-hidden border-[1.5px] transition-shadow ${
                isOpen
                  ? "rounded-[18px] sm:rounded-[22px] border-transparent shadow-[0_14px_30px_-18px_rgba(23,101,15,0.6)]"
                  : "rounded-[15px] sm:rounded-[18px] border-[#2a6b18] bg-white shadow-[0_8px_18px_-14px_rgba(23,101,15,0.5)]"
              }`}
            >
              <h3 style={{ fontFamily: HEADING_FONT }}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className={`group flex w-full cursor-pointer items-center gap-3 sm:gap-4 text-left font-bold transition-colors min-h-[50px] sm:min-h-[58px] xl:min-h-[64px] text-[15px] sm:text-[17px] xl:text-[20px] ${
                    isOpen
                      ? "bg-[linear-gradient(90deg,#3b8a14,#1a5a08)] px-4 sm:px-6 text-white xl:px-[32px]"
                      : "px-3.5 sm:px-5 text-[#111] xl:pl-[28px] xl:pr-[34px]"
                  }`}
                >
                  {!isOpen && (
                    <span className="grid size-[30px] sm:size-[36px] shrink-0 place-items-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#9be13a,#5a9e12)] text-[16px] sm:text-[18px] font-extrabold text-white transition-transform duration-300 group-hover:scale-110 xl:size-[40px] xl:text-[22px]">?</span>
                  )}
                  <span className="flex-1">{item.q}</span>
                  {isOpen ? (
                    <ChevronUpIcon size={22} strokeWidth={2.4} className="shrink-0 transition-transform duration-300 group-hover:scale-115 xl:size-[24px]" />
                  ) : (
                    <ChevronDownIcon size={22} strokeWidth={2.4} className="shrink-0 text-[#17650f] transition-transform duration-300 group-hover:scale-115 xl:size-[24px]" />
                  )}
                </button>
              </h3>
              <div
                id={`faq-${i}`}
                ref={(el) => {
                  panelRefs.current[i] = el;
                }}
                role="region"
                className={`grid bg-[linear-gradient(180deg,#e9f4d9,#f1f8e6)] transition-[grid-template-rows] duration-300 ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <p className="min-h-0 overflow-hidden px-4 sm:px-6 text-[14.5px] sm:text-[15.5px] leading-[1.6] text-[#2d2d2d] xl:px-[36px] xl:text-[17px] xl:leading-[26px]">
                  <span
                    ref={(el) => {
                      answerRefs.current[i] = el;
                    }}
                    className="block py-3 sm:py-4 xl:py-[16px]"
                  >
                    {item.a}
                  </span>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
=======

  return (
    <ul className="space-y-2.5 sm:space-y-[14px] xl:space-y-[21px]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q} className={`overflow-hidden transition-shadow ${isOpen ? "rounded-[18px] sm:rounded-[22px] shadow-[0_14px_30px_-18px_rgba(23,101,15,0.6)]" : "rounded-[15px] sm:rounded-[18px] border-[1.5px] border-[#2a6b18] bg-white shadow-[0_8px_18px_-14px_rgba(23,101,15,0.5)]"}`}>
            <h3 style={{ fontFamily: HEADING_FONT }}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className={`group flex w-full items-center gap-3 sm:gap-4 text-left font-bold transition-colors ${isOpen ? "min-h-[48px] sm:min-h-[56px] bg-[linear-gradient(90deg,#3b8a14,#1a5a08)] px-4 sm:px-6 text-[15px] sm:text-[17px] text-white xl:min-h-[62px] xl:px-[32px] xl:text-[20px]" : "min-h-[50px] sm:min-h-[58px] px-3.5 sm:px-5 text-[15px] sm:text-[17px] text-[#111] xl:min-h-[64px] xl:pl-[28px] xl:pr-[34px] xl:text-[20px]"}`}
              >
                {!isOpen && (
                  <span className="grid size-[30px] sm:size-[36px] shrink-0 place-items-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#9be13a,#5a9e12)] text-[16px] sm:text-[18px] font-extrabold text-white transition-transform duration-300 group-hover:scale-110 xl:size-[40px] xl:text-[22px]">?</span>
                )}
                <span className="flex-1">{item.q}</span>
                {isOpen ? <ChevronUpIcon size={22} strokeWidth={2.4} className="shrink-0 transition-transform duration-300 group-hover:scale-115 xl:size-[24px]" /> : <ChevronDownIcon size={22} strokeWidth={2.4} className="shrink-0 text-[#17650f] transition-transform duration-300 group-hover:scale-115 xl:size-[24px]" />}
              </button>
            </h3>
            <div id={`faq-${i}`} role="region" className={`grid bg-[linear-gradient(180deg,#e9f4d9,#f1f8e6)] transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <p className="min-h-0 overflow-hidden px-4 sm:px-6 text-[14.5px] sm:text-[15.5px] leading-[1.6] text-[#2d2d2d] xl:px-[36px] xl:text-[17px] xl:leading-[26px]">
                <span className="block py-3 sm:py-4 xl:py-[16px]">{item.a}</span>
              </p>
            </div>
          </li>
        );
      })}
    </ul>
>>>>>>> aa67bf0c2867b63c1bc475882f1b039d85e58526
  );
}
