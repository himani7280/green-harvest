import { LeafIcon } from "@/lib/icons";
import { HEADING_FONT } from "@/data/data";
import { Reveal } from "./Motion";

type EyebrowProps = { children: string; align?: "left" | "center"; lines?: "right" | "both" | "none"; className?: string };

/* Eyebrow label */
export function Eyebrow({ children, align = "left", lines = "right", className = "" }: EyebrowProps) {
  return (
    <p className={`group inline-flex items-center gap-2 sm:gap-3 whitespace-nowrap text-[13.5px] sm:text-[15px] font-bold uppercase tracking-[0.02em] text-[#17650f] xl:text-[19.8px] ${align === "center" ? "justify-center" : ""} ${className}`}>
      {lines === "both" && <span className="h-px w-6 sm:w-8 bg-[#4f9a28] xl:w-[80px]" aria-hidden="true" />}
      <LeafIcon size={32} className={`size-6 sm:size-8 shrink-0 text-[#2f8a1e] transition-transform duration-300 group-hover:scale-115 group-hover:rotate-12 ${lines === "both" ? "xl:size-[52px]" : "xl:size-[46px]"}`} />
      {children}
      {lines !== "none" && <span className={`h-px w-6 sm:w-8 bg-[#4f9a28] ${lines === "both" ? "xl:w-[80px]" : "xl:w-[110px]"}`} aria-hidden="true" />}
    </p>
  );
}

type TitleProps = { first?: string; accent: string; firstClass?: string; className?: string; accentBreak?: boolean };

/* Two-tone title */
export function Title({ first, accent, className = "", accentBreak = false }: TitleProps) {
  return (
    <>
      <span className={className}>
        {first && <span className="text-[#4a2616]">{first}</span>}
        {first && (accentBreak ? <br /> : " ")}
        <span className="text-[#17650f]">{accent}</span>
      </span>
    </>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  first?: string;
  accent: string;
  text?: string;
  align?: "center" | "left";
  accentBreak?: boolean;
  titleClass?: string;
  textClass?: string;
};

export function SectionHeading({
  eyebrow,
  first,
  accent,
  text,
  align = "center",
  accentBreak = false,
  titleClass = "text-[2rem] leading-[1.15] sm:text-[2.6rem] xl:text-[53px] xl:leading-[56px]",
  textClass = "text-base text-[#2d2d2d] xl:text-[20px] xl:leading-[27px]",
}: SectionHeadingProps) {
  const center = align === "center";
  return (
    <Reveal className={center ? "text-center" : ""}>
      <Eyebrow align={center ? "center" : "left"} lines={center ? "both" : "right"}>
        {eyebrow}
      </Eyebrow>
      <h2 style={{ fontFamily: HEADING_FONT }} className={`mt-1 sm:mt-2 xl:mt-0 font-bold tracking-[-0.01em] ${titleClass}`}>
        <Title first={first} accent={accent} accentBreak={accentBreak} />
      </h2>
      {text && <p className={`mt-1.5 sm:mt-2.5 xl:mt-[5px] ${center ? "mx-auto" : ""} ${textClass}`}>{text}</p>}
    </Reveal>
  );
}
