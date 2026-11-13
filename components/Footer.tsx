import Image from "next/image";
import { BRAND, FOOTER, HOME, IMG, SITE, HEADING_FONT } from "@/data/data";
import { ChevronRightIcon, FacebookIcon, InstagramIcon, LinkedinIcon, NamedIcon, YoutubeIcon } from "@/lib/icons";
import { Logo } from "./Logo";

const SOCIAL_ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
} as const;

const Heading = ({ children }: { children: string }) => (
  <>
    <h3 style={{ fontFamily: HEADING_FONT }} className=" text-[22px] font-bold leading-none text-white xl:text-[28px]">{children}</h3>
    <span className="mt-2.5 block h-1 w-[60px] rounded bg-[#86c61a] xl:mt-[12px]" />
  </>
);

const ContactRow = ({ icon, children }: { icon: string; children: React.ReactNode }) => (
  <li className="group flex items-center gap-3.5">
    <span className="grid size-[42px] shrink-0 place-items-center rounded-[12px] bg-[#2d6a0a] text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#86c61a] group-hover:text-[#0a2e02] group-hover:shadow-md">
      <NamedIcon name={icon} size={21} fill={icon === "mail" ? "none" : "currentColor"} strokeWidth={icon === "mail" ? 2 : 1} className="transition-transform duration-300 group-hover:scale-110" />
    </span>
    <span className="text-[15.5px] text-white transition-colors duration-300 group-hover:text-[#86c61a] xl:text-[19px]">{children}</span>
  </li>
);

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#0a2f00] text-white">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[115px] sm:h-[135px] xl:h-[calc(152*var(--u))]" aria-hidden="true">
        <Image src={IMG.footerField} alt="" fill unoptimized sizes="100vw" className="object-cover object-bottom" />
        <div className="absolute inset-x-0 top-0 h-8 bg-[linear-gradient(180deg,#0a2f00_0%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-[1267px] px-4 pt-5 pb-2.5 sm:px-6 sm:pt-7 sm:pb-4 xl:w-[calc(1267*var(--u))] xl:max-w-none xl:px-0 xl:pt-[28px] xl:pb-[14px]">
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-[1fr_auto_auto_auto] xl:grid-cols-[352px_259px_303px_1fr] xl:gap-0">
          <div className="xl:pr-[30px]">
            <Logo footer className="w-[180px] sm:w-[205px] xl:w-[250px]" />
            <p className="mt-2.5 max-w-[330px] text-[14.5px] leading-[1.55] sm:mt-3 sm:text-[15px] xl:mt-[14px] xl:text-[17.5px] xl:leading-[24px]">{FOOTER.blurb}</p>
            <div className="mt-3.5 flex gap-3 sm:mt-4 sm:gap-3.5 xl:mt-[18px]">
              {FOOTER.socials.map(({ key, label, href }) => {
                const Icon = SOCIAL_ICONS[key as keyof typeof SOCIAL_ICONS] ?? FacebookIcon;
                return (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="group grid size-[38px] sm:size-[42px] place-items-center rounded-full border border-[#86c61a] text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[#86c61a] hover:text-[#0a2e02] hover:shadow-md">
                    <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:border-l lg:border-white/25 lg:pl-8 xl:pl-[39px]">
            <Heading>{FOOTER.quickLinksTitle}</Heading>
            <ul className="mt-2.5 space-y-[4px] sm:mt-3.5 sm:space-y-[6px] xl:mt-[14px]">
              {FOOTER.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="group inline-flex items-center gap-2.5 text-[15px] sm:gap-3 sm:text-[16px] transition hover:text-[#86c61a] xl:text-[18px]">
                    <ChevronRightIcon size={16} strokeWidth={2.2} className="transition-transform duration-300 group-hover:translate-x-1" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:border-l lg:border-white/25 lg:pl-8 xl:pl-[39px]">
            <Heading>{FOOTER.servicesTitle}</Heading>
            <ul className="mt-2.5 space-y-[5px] sm:mt-3.5 sm:space-y-[7px] xl:mt-[14px]">
              {FOOTER.services.map((service) => (
                <li key={service}>
                  <a href="#services" className="group inline-flex items-center gap-2.5 text-[15px] sm:gap-3 sm:text-[16px] transition hover:text-[#86c61a] xl:text-[18px]">
                    <ChevronRightIcon size={16} strokeWidth={2.2} className="transition-transform duration-300 group-hover:translate-x-1" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:border-l lg:border-white/25 lg:pl-8 xl:pl-[43px]">
            <Heading>{FOOTER.contactTitle}</Heading>
            <ul className="mt-2.5 space-y-[8px] sm:mt-3.5 sm:space-y-[10px] xl:mt-[14px]">
              <ContactRow icon="phone">{BRAND.phone}</ContactRow>
              <ContactRow icon="mail">{BRAND.email}</ContactRow>
              <ContactRow icon="pin">{HOME.contact.cards[2].value}</ContactRow>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-[#86c61a]/80 pt-3 pb-0.5 sm:mt-9 sm:pt-3.5 xl:mt-[46px] xl:pt-[14px] xl:pb-[2px]">
          <div className="flex items-center justify-center text-center text-[15px] xl:text-[17.5px]">
            <p>
              {SITE.copyrightPrefix} <span className="text-[#86c61a]">{BRAND.footerName}</span>. {SITE.copyrightSuffix} <span className="text-[#86c61a]">{SITE.poweredBy}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

