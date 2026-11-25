"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { NAVBAR, NAV_CTA, NAV_LINKS } from "@/data/data";
import { ArrowRightIcon, CloseIcon, MenuIcon, PhoneIcon } from "@/lib/icons";
import { Logo } from "./Logo";

const unit = { "--u": "min(1px, calc(100vw / 1351))" } as CSSProperties;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(`#${entry.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header style={unit} className="fixed inset-x-0 top-3 z-50 px-3 sm:px-4 xl:top-[calc(22*var(--u))] xl:px-0">
      <div className="relative mx-auto w-full max-w-[1267px] rounded-full bg-white shadow-[0_10px_30px_-12px_rgba(20,60,10,0.35)] xl:w-[calc(1267*var(--u))]">
        <div className="flex h-[56px] sm:h-[60px] items-center justify-between gap-4 px-4 sm:px-6 xl:h-[calc(68*var(--u))] xl:px-[calc(30*var(--u))]">
          <div className="flex items-center">
            <a href={NAVBAR.homeHref} aria-label={NAVBAR.homeAriaLabel} onClick={() => setOpen(false)} className="shrink-0">
              <Logo priority className="w-[140px] sm:w-[150px] xl:w-[calc(190*var(--u))]" />
            </a>
            <span className="hidden w-px bg-[#d4d9d0] xl:mx-[calc(20*var(--u))] xl:block xl:h-[calc(38*var(--u))]" aria-hidden="true" />
          </div>

          <nav className="hidden items-center xl:flex xl:gap-[calc(22*var(--u))]" aria-label={NAVBAR.mainNavAriaLabel}>
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href && link.label !== NAVBAR.activeExcludeLabel;
              return (
                <a key={link.label} href={link.href} className={`relative whitespace-nowrap py-2 text-[15.5px] font-bold tracking-[-0.01em] xl:text-[length:calc(15.2*var(--u))] transition-colors ${isActive ? "text-[#17650f]" : "text-[#161616] hover:text-[#17650f]"}`}>
                  {link.label}
                  <span className={`absolute inset-x-0 -bottom-[3px] h-[2px] origin-left rounded bg-[#17650f] transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"}`} />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a href={NAV_CTA.href} className="group hidden h-[40px] items-center gap-2 whitespace-nowrap rounded-full bg-[#0d5a10] px-5 text-[14px] xl:h-[calc(40*var(--u))] xl:gap-[calc(8*var(--u))] xl:px-[calc(20*var(--u))] xl:text-[length:calc(14*var(--u))] font-bold text-white transition hover:bg-[#09440c] hover:shadow-lg sm:inline-flex">
              <PhoneIcon size={18} fill="currentColor" strokeWidth={1} className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" />
              {NAV_CTA.label}
              <ArrowRightIcon size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <button type="button" aria-label={open ? NAVBAR.closeMenuLabel : NAVBAR.openMenuLabel} aria-expanded={open} onClick={() => setOpen((v) => !v)} className="grid size-9 sm:size-10 place-items-center rounded-full border border-[#17650f]/25 text-[#17650f] transition-all duration-300 hover:scale-105 hover:bg-[#17650f] hover:text-white xl:hidden">
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`absolute right-0 top-[calc(100%+8px)] w-[235px] sm:w-[255px] origin-top-right rounded-2xl border border-[#17650f]/15 bg-white p-3 shadow-[0_18px_38px_-12px_rgba(20,60,10,0.38)] transition-all duration-200 xl:hidden ${
            open ? "pointer-events-auto scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
          }`}
        >
          <nav aria-label={NAVBAR.mobileNavAriaLabel}>
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-[14.5px] font-bold transition-colors hover:bg-[#eaf6dc] hover:text-[#17650f] ${
                      active === link.href ? "bg-[#eaf6dc]/70 text-[#17650f]" : "text-[#161616]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 pt-2 border-t border-[#17650f]/10">
                <a href={NAV_CTA.href} onClick={() => setOpen(false)} className="group inline-flex h-9 w-full items-center justify-center gap-2 rounded-full bg-[#0d5a10] text-[14px] font-bold text-white transition hover:bg-[#09440c]">
                  <PhoneIcon size={16} fill="currentColor" strokeWidth={1} className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" />
                  {NAV_CTA.label}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
