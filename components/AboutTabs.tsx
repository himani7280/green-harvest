"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { HOME } from "@/data/data";
import { MountainFlagIcon, NamedIcon } from "@/lib/icons";

const { tabs } = HOME.about;

export function AboutTabs() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <div>
      <div className="flex gap-[10px]" role="tablist" aria-label="Mission and vision">
        {tabs.map((item, i) => {
          const isActive = i === active;
          return (
            <button
              key={item.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className={`group flex h-[42px] sm:h-[48px] flex-1 items-center justify-center gap-2 sm:gap-2.5 rounded-t-[14px] sm:rounded-t-[16px] text-[14.5px] sm:text-[16px] font-bold transition-colors duration-300 xl:h-[54px] xl:text-[18.5px] ${isActive ? "bg-[#1e6b0f] text-white" : "bg-[#dff1c8] text-[#161616] hover:bg-[#cfe9b0]"}`}
            >
              <NamedIcon name={item.icon} size={22} className="transition-transform duration-300 group-hover:scale-115 group-hover:-rotate-6" />
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="relative min-h-[125px] sm:min-h-[148px] xl:min-h-[164px] overflow-hidden rounded-b-[18px] rounded-t-none border border-[#4f8f2c] bg-[linear-gradient(135deg,#f6faf0_0%,#e6f3d4_100%)] p-3.5 sm:p-4 xl:p-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab.key}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="group flex items-center gap-3.5 sm:gap-5 xl:gap-0"
          >
            <span className="grid size-[56px] sm:size-[72px] shrink-0 place-items-center rounded-full bg-[#d6efc0] text-[#2f7d1c] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#1e6b0f] group-hover:text-white xl:size-[92px]">
              <MountainFlagIcon size={40} strokeWidth={1.5} className="transition-transform duration-300 group-hover:scale-110" />
            </span>
            <span className="mx-6 hidden h-[84px] w-px bg-[#b8c9a8] xl:block" aria-hidden="true" />
            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.6] text-[#2d2d2d] xl:text-[17px] xl:leading-[26px]">{tab.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
