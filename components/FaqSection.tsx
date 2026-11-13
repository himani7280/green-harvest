"use client";

import { useState } from "react";
import { HOME, HEADING_FONT } from "@/data/data";
import { ChevronDownIcon, ChevronUpIcon } from "@/lib/icons";

const { items } = HOME.faqs;

export function FaqList() {
  const [open, setOpen] = useState(0);

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
                className={`group flex w-full items-center gap-3 sm:gap-4 text-left font-bold transition-colors ${isOpen ? "min-h-[48px] sm:min-h-[58px] bg-[linear-gradient(90deg,#3b8a14,#1a5a08)] px-4 sm:px-6 text-[15.5px] sm:text-[18px] text-white xl:min-h-[70px] xl:px-[38px] xl:text-[28px]" : "min-h-[50px] sm:min-h-[62px] px-3.5 sm:px-4 text-[15px] sm:text-[16px] text-[#111] xl:min-h-[74px] xl:pl-[34px] xl:pr-[40px] xl:text-[28px]"}`}
              >
                {!isOpen && (
                  <span className="grid size-[30px] sm:size-[36px] shrink-0 place-items-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#9be13a,#5a9e12)] text-[17px] sm:text-[20px] font-extrabold text-white transition-transform duration-300 group-hover:scale-110 xl:size-[48px] xl:text-[28px]">?</span>
                )}
                <span className="flex-1">{item.q}</span>
                {isOpen ? <ChevronUpIcon size={24} strokeWidth={2.4} className="shrink-0 transition-transform duration-300 group-hover:scale-115 xl:size-[28px]" /> : <ChevronDownIcon size={24} strokeWidth={2.4} className="shrink-0 text-[#17650f] transition-transform duration-300 group-hover:scale-115 xl:size-[28px]" />}
              </button>
            </h3>
            <div id={`faq-${i}`} role="region" className={`grid bg-[linear-gradient(180deg,#e9f4d9,#f1f8e6)] transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <p className="min-h-0 overflow-hidden px-4 sm:px-6 text-[14px] sm:text-[15px] leading-[1.55] sm:leading-[1.6] text-[#1c1c1c] xl:px-[46px] xl:text-[23px] xl:leading-[31px]">
                <span className="block py-3 sm:py-4 xl:py-[18px]">{item.a}</span>
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
