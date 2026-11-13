import Image from "next/image";
import { BRAND, IMG } from "@/data/data";

type LogoProps = { className?: string; priority?: boolean; footer?: boolean };

/* Brand logo */
export function Logo({ className = "w-[150px] xl:w-[218px]", priority = false, footer = false }: LogoProps) {
  return footer ? (
    <Image src={IMG.footerLogo} alt={BRAND.footerName} width={290} height={95} unoptimized className={`h-auto ${className}`} />
  ) : (
    <Image src={IMG.logo} alt={BRAND.name} width={218} height={58} unoptimized priority={priority} className={`h-auto ${className}`} />
  );
}
