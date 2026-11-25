import { HOME, IMG, HEADING_FONT } from "@/data/data";
import { ArrowUpRightIcon, NamedIcon } from "@/lib/icons";
import { Photo } from "./Photo";

type ServiceCardProps = { icon: string; title: string; text: string; image: string };

export function ServiceCard({ icon, title, text, image }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[22px] xl:rounded-[26px] border-[1.5px] border-[#4f8f2c] bg-white transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_40px_-24px_rgba(23,101,15,0.45)]">
      <div className="px-3.5 pt-3.5 xl:px-[20px] xl:pt-[20px]">
        {/* Icon badge */}
        <span className="grid h-[40px] w-[52px] place-items-center rounded-[18px_4px_18px_4px] xl:rounded-[22px_4px_22px_4px] bg-[#1c5c0d] text-white shadow-sm transition duration-500 group-hover:rotate-[-5deg] group-hover:scale-105 xl:h-[56px] xl:w-[72px]">
          <NamedIcon name={icon} size={23} strokeWidth={2} className="xl:size-[30px]" />
        </span>
        {/* Title */}
        <h3
          style={{ fontFamily: HEADING_FONT }}
          className="mt-2 whitespace-nowrap overflow-hidden text-ellipsis text-[16.5px] font-bold leading-tight tracking-[-0.01em] text-[#17650f] lg:text-[18px] xl:mt-[14px] xl:text-[21.5px]"
          title={title}
        >
          {title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-[1.4] text-[#2c2c2c] lg:text-[14px] xl:mt-2.5 xl:text-[15.5px] xl:leading-[23px]">{text}</p>
        <a href={HOME.services.moreHref} className="mt-2 inline-flex items-center gap-1.5 text-[14px] font-bold text-[#17650f] transition-[gap] group-hover:gap-2.5 xl:mt-3.5 xl:text-[16px]">
          {HOME.services.moreLabel}
          <ArrowUpRightIcon size={15} strokeWidth={2.4} className="xl:size-[17px]" />
        </a>
      </div>
      {/* Bottom curved image */}
      <div className="mt-auto px-1.5 pb-1.5 pt-1 xl:pb-2.5 xl:pt-2">
        <svg className="absolute size-0 overflow-hidden" aria-hidden="true" focusable="false">
          <defs>
            <clipPath id="service-card-shape" clipPathUnits="objectBoundingBox">
              <path d="M 0,0.42 C 0,0.37 0.04,0.34 0.10,0.34 C 0.32,0.26 0.52,0.15 0.72,0.05 C 0.84,0.02 0.94,0.06 1,0.26 L 1,0.90 C 1,0.96 0.96,1 0.90,1 L 0.10,1 C 0.04,1 0,0.96 0,0.90 Z" />
            </clipPath>
          </defs>
        </svg>
        <div
          className="relative aspect-[290/126] xl:aspect-[290/186] overflow-hidden [transform:translateZ(0)] isolate"
          style={{
            clipPath: "url(#service-card-shape)",
          }}
        >
          <Photo src={IMG[image]} alt={title} sizes="290px" />
        </div>
      </div>
    </article>
  );
}
