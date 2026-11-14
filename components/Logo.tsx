import Image from "next/image";
import { BRAND, IMG } from "@/data/data";

type LogoProps = { className?: string; priority?: boolean; footer?: boolean };

/* Brand logo */
export function Logo({ className = "w-[150px] xl:w-[218px]", priority = false, footer = false }: LogoProps) {
  return footer ? (
    <Image src={IMG.footerLogo} alt={BRAND.footerName} width={290} height={75} unoptimized className={`h-auto ${className}`} />
  ) : (
    <>
      <svg className="sr-only" aria-hidden="true" focusable="false">
        <defs>
          <filter id="header-agrifarm-logo" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="1 0 -0.91 0 0  0 1 -0.60 0 0  0 0 0.06 0 0  0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>
      <Image
        src={IMG.footerLogo}
        alt={BRAND.name}
        width={290}
        height={75}
        unoptimized
        priority={priority}
        style={{ filter: "url(#header-agrifarm-logo)" }}
        className={`h-auto ${className}`}
      />
    </>
  );
}
