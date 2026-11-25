import Image from "next/image";
<<<<<<< HEAD
import { BRAND, FOOTER, IMG, SITE, HEADING_FONT } from "@/data/data";
=======
import { BRAND, FOOTER, HOME, IMG, SITE, HEADING_FONT } from "@/data/data";
>>>>>>> aa67bf0c2867b63c1bc475882f1b039d85e58526
import { ChevronRightIcon, ChevronUpIcon, FacebookIcon, InstagramIcon, LinkedinIcon, NamedIcon, YoutubeIcon } from "@/lib/icons";
import { Logo } from "./Logo";

const SOCIAL_ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
} as const;

const Heading = ({ children }: { children: string }) => (
  <>
    <h3 style={{ fontFamily: HEADING_FONT }} className="text-[20px] sm:text-[22px] font-bold leading-none text-white xl:text-[26px]">{children}</h3>
    <span className="mt-2.5 block h-1 w-[60px] rounded bg-[#86c61a] xl:mt-[12px]" />
  </>
);

const ContactRow = ({ icon, href, children }: { icon: string; href?: string; children: React.ReactNode }) => {
  const inner = (
    <>
      <span className="grid size-[40px] sm:size-[42px] shrink-0 place-items-center rounded-[12px] bg-[#2d6a0a] text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#86c61a] group-hover:text-[#0a2e02] group-hover:shadow-md">
        <NamedIcon name={icon} size={20} fill={icon === "mail" ? "none" : "currentColor"} strokeWidth={icon === "mail" ? 2 : 1} className="transition-transform duration-300 group-hover:scale-110" />
      </span>
      <span className="text-[14.5px] sm:text-[15.5px] text-white transition-colors duration-300 group-hover:text-[#86c61a] xl:text-[17px]">{children}</span>
    </>
  );

  return (
    <li>
      {href ? (
        <a href={href} className="group flex items-center gap-3.5 cursor-pointer">
          {inner}
        </a>
      ) : (
        <div className="group flex items-center gap-3.5">{inner}</div>
      )}
    </li>
  );
};

export function Footer() {
  const phoneHref = `tel:${BRAND.phone.replace(/\s+/g, "")}`;
  const mailHref = `mailto:${BRAND.email}`;

  return (
    <footer className="relative isolate overflow-hidden bg-[#0a2f00] text-white">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[115px] sm:h-[135px] xl:h-[calc(152*var(--u))]" aria-hidden="true">
        <Image src={IMG.footerField} alt="" fill unoptimized sizes="100vw" className="object-cover object-bottom" />
        <div className="absolute inset-x-0 top-0 h-8 bg-[linear-gradient(180deg,#0a2f00_0%,transparent_100%)]" />
      </div>

      <div className="mx-auto w-full max-w-[1267px] px-4 pt-[clamp(26px,3.6vw,46px)] pb-[clamp(18px,2.4vw,30px)] sm:px-6 xl:w-[calc(1267*var(--u))] xl:px-0">
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-[1.2fr_0.9fr_1fr_1.1fr] xl:grid-cols-[28%_20.5%_24%_1fr] xl:gap-0">
          <div className="sm:col-span-2 lg:col-span-1 xl:pr-[30px]">
            <Logo footer className="w-[180px] sm:w-[205px] xl:w-[250px]" />
            <p className="mt-2.5 max-w-[360px] text-[14.5px] leading-[1.6] sm:mt-3 sm:text-[15.5px] xl:mt-[14px] xl:text-[17px] xl:leading-[25px]">{FOOTER.blurb}</p>
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

          <div className="grid grid-cols-2 gap-4 sm:col-span-2 sm:gap-7 lg:contents">
            <div className="lg:border-l lg:border-white/25 lg:pl-8 xl:pl-[39px]">
              <Heading>{FOOTER.quickLinksTitle}</Heading>
              <ul className="mt-2.5 space-y-[5px] sm:mt-3.5 sm:space-y-[7px] xl:mt-[14px]">
                {FOOTER.quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="group inline-flex items-center gap-2 text-[14.5px] sm:gap-2.5 sm:text-[15.5px] transition hover:text-[#86c61a] xl:text-[17px]">
                      <ChevronRightIcon size={16} strokeWidth={2.2} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
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
                    <a href={FOOTER.servicesHref} className="group inline-flex items-center gap-2 text-[14.5px] sm:gap-2.5 sm:text-[15.5px] transition hover:text-[#86c61a] xl:text-[17px]">
                      <ChevronRightIcon size={16} strokeWidth={2.2} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-1 lg:border-l lg:border-white/25 lg:pl-8 xl:pl-[43px]">
            <Heading>{FOOTER.contactTitle}</Heading>
            <ul className="mt-2.5 space-y-[8px] sm:mt-3.5 sm:space-y-[10px] xl:mt-[14px]">
              <ContactRow icon="phone" href={phoneHref}>{BRAND.phone}</ContactRow>
              <ContactRow icon="mail" href={mailHref}>{BRAND.email}</ContactRow>
              <ContactRow icon="pin">{BRAND.address}</ContactRow>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-[#86c61a]/80 pt-4 pb-1 sm:mt-8 sm:pt-5 xl:mt-[40px] xl:pt-[20px] xl:pb-[4px]">
          <div className="relative flex flex-col items-center justify-center gap-3 text-center text-[14px] sm:flex-row sm:text-[15px] font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] xl:text-[16.5px]">
            <p>
              {SITE.copyrightPrefix} {SITE.copyrightSuffix}{" "}
              <span className="font-semibold text-[#86c61a]">{SITE.poweredBy}</span>
            </p>
            <a
              href={FOOTER.scrollTopHref}
              aria-label={FOOTER.scrollTopLabel}
              className="group inline-flex size-10 sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 sm:mt-1 items-center justify-center rounded-full border-2 border-[#86c61a] bg-[#17650f] text-white shadow-md transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-[calc(50%+3px)] hover:bg-[#86c61a] hover:text-[#0a2f00] active:scale-95"
            >
              <ChevronUpIcon size={20} strokeWidth={2.5} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

