import Image from "next/image";
import type { CSSProperties } from "react";
import { HOME, IMG, HEADING_FONT } from "@/data/data";
import { LeafIcon } from "@/lib/icons";
import { Reveal, WordReveal, ZoomIn } from "./Motion";

const { hero } = HOME;

const unit = { "--u": "min(1px, calc(100vw / 1351))" } as CSSProperties;

export function HomeHero() {
  return (
    <section id="home" style={unit} className="relative isolate h-[clamp(290px,60vw,610px)] xl:h-screen xl:min-h-[640px] xl:max-h-[820px] overflow-hidden bg-[#fed8a8]">
      {/* Hero background */}
      <ZoomIn className="absolute inset-0 -z-10">
        <Image src={IMG[hero.image]} alt={hero.imageAlt} fill priority unoptimized sizes="100vw" className="object-cover object-[86%_bottom] xl:object-[72%_bottom]" />
      </ZoomIn>

      <div className="relative mx-auto h-full w-full max-w-[1267px] px-4 sm:px-6 xl:w-[calc(1267*var(--u))] xl:px-0">
        {/* Hero text panel */}
        <div className="absolute inset-x-4 top-[clamp(66px,11vw,110px)] sm:inset-x-6 xl:inset-x-auto xl:left-0 xl:top-[28%] xl:h-[calc(310*var(--u))] xl:w-[calc(596*var(--u))]">
          <div className="absolute inset-0 hidden rounded-l-[calc(28*var(--u))] rounded-r-none bg-white/60 backdrop-blur-[2px] xl:block xl:[mask-image:linear-gradient(90deg,#000_70%,transparent_100%)]" />
          <div className="absolute left-0 top-[calc(30*var(--u))] hidden h-[calc(100%-calc(60*var(--u)))] w-[1.5px] bg-[#2f7d1c] xl:block" />
          <div className="absolute bottom-0 left-0 hidden size-[calc(30*var(--u))] rounded-bl-[calc(30*var(--u))] border-b-[1.5px] border-l-[1.5px] border-[#2f7d1c] xl:block" />
          <div className="absolute bottom-0 left-[calc(29*var(--u))] hidden h-[1.5px] w-[calc(470*var(--u))] bg-[linear-gradient(90deg,#2f7d1c,transparent)] xl:block" />
          <div className="absolute left-[calc(29*var(--u))] top-0 hidden h-[1.5px] w-[calc(27*var(--u))] bg-[#2f7d1c] xl:block" />
          <div className="absolute left-0 top-0 hidden size-[calc(30*var(--u))] rounded-tl-[calc(30*var(--u))] border-l-[1.5px] border-t-[1.5px] border-[#2f7d1c] xl:block" />

          <Reveal className="group relative flex items-center gap-1.5 pt-1 sm:gap-2 sm:pt-2 xl:absolute xl:-top-[calc(28*var(--u))] xl:left-[calc(55*var(--u))] xl:gap-[calc(14*var(--u))] xl:p-0">
            <LeafIcon size={44} className="size-6 sm:size-8 shrink-0 text-[#2f8a1e] transition-transform duration-300 group-hover:scale-115 group-hover:rotate-12 xl:size-[calc(44*var(--u))]" />
            <span className="text-[clamp(11.5px,2.2vw,15px)] font-bold leading-tight text-[#17650f] xl:whitespace-nowrap xl:text-[length:calc(18.7*var(--u))]">{hero.eyebrow}</span>
            <span className="hidden h-[1.5px] w-[calc(137*var(--u))] bg-[#2f7d1c] xl:block" />
          </Reveal>

          <div className="relative pb-2 pt-1 sm:pb-4 sm:pt-2 xl:p-0 xl:pl-[calc(41*var(--u))] xl:pt-[calc(40*var(--u))]">
            <h1 style={{ fontFamily: HEADING_FONT }} className=" text-[clamp(1.25rem,4.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.01em] text-[#1c1c1c] xl:whitespace-nowrap xl:text-[length:calc(61*var(--u))] xl:leading-[calc(62*var(--u))]">
              <WordReveal text={hero.titleLine1} delay={0.15} />
              <span className="block">
                <WordReveal text={hero.titlePlain} delay={0.5} className="text-[#1c1c1c]" />
                <WordReveal text={hero.titleAccent} delay={0.62} className="text-[#17650f]" />
              </span>
            </h1>
            <Reveal delay={0.3} className="hidden md:block">
              <p className="mt-2.5 max-w-[540px] text-[clamp(13.5px,1.8vw,16px)] font-medium leading-[1.5] text-[#1c1c1c] xl:mt-[calc(14*var(--u))] xl:max-w-[calc(540*var(--u))] xl:text-[length:calc(21*var(--u))] xl:leading-[calc(28*var(--u))]">{hero.text}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
