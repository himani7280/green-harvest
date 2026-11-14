import { AboutTabs } from "@/components/AboutTabs";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { FaqList } from "@/components/FaqSection";
import { ContactForm } from "@/components/Forms";
import { GalleryGrid } from "@/components/GalleryGrid";
import { HomeHero } from "@/components/HomeHero";
import { Counter, Float, ImageReveal, Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { Photo } from "@/components/Photo";
import { Eyebrow, SectionHeading } from "@/components/SectionHeading";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { HOME, IMG, HEADING_FONT, layout, typography } from "@/data/data";
import { LeafIcon, NamedIcon } from "@/lib/icons";

const { about, services, why, gallery, testimonials, faqs, contact } = HOME;

const SECTION = layout.section;
const CONTAINER = layout.container;
const H2 = ` ${typography.h2}`;
const P = typography.p;

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* About */}
      <section id="about" className={SECTION}>
        <div className={CONTAINER}>
          <div className="flex flex-col gap-2.5 sm:gap-4 lg:flex-row lg:items-start lg:justify-between">
            <Reveal className="shrink-0">
              <Eyebrow>{about.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.1} className="lg:text-right">
              <h2 style={{ fontFamily: HEADING_FONT }} className={H2}>
                <span className="block text-[#4a2616]">{about.titleLine1}</span>
                <span className="block text-[#17650f]">{about.titleLine2}</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-4 sm:mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-2 xl:mt-[36px] xl:grid-cols-[30%_26%_1fr] xl:gap-x-[17px] xl:items-stretch">
            <div className="flex flex-col gap-3 sm:gap-4 sm:h-[330px] xl:h-[366px] xl:gap-[16px]">
              <div className="group relative flex-1 h-[155px] sm:h-auto w-full overflow-hidden rounded-[14px]">
                <Photo src={IMG[about.farmerImage]} alt={about.farmerAlt} sizes="380px" className="group-hover:scale-105" />
              </div>
              <ImageReveal from="left" delay={0.08} className="group relative flex-1 h-[155px] sm:h-auto w-full overflow-hidden rounded-[14px]">
                <Photo src={IMG[about.harvestImage]} alt={about.harvestAlt} sizes="380px" className="group-hover:scale-105" />
              </ImageReveal>
            </div>
            <ImageReveal from="bottom" delay={0.1} className="group relative h-[220px] sm:h-[330px] xl:h-[366px] w-full overflow-hidden rounded-[14px]">
              <Photo src={IMG[about.tractorImage]} alt={about.tractorAlt} sizes="328px" className="group-hover:scale-105" />
            </ImageReveal>
            <Reveal delay={0.2} className="flex flex-col justify-between min-w-0 sm:col-span-2 lg:col-span-2 xl:col-span-1 xl:h-[366px] xl:ml-[12px] xl:pt-[18px]">
              <p className={P}>{about.text}</p>
              <div className="mt-3.5 sm:mt-5 xl:mt-auto">
                <AboutTabs />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className={SECTION}>
        <div className={CONTAINER}>
          <ServicesCarousel services={services} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className={SECTION}>
        <div className={`grid items-center gap-6 sm:gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10 xl:grid-cols-[44%_1fr] xl:gap-x-[4.3%] ${CONTAINER}`}>
          <div className="order-2 lg:order-1 relative mx-auto h-[clamp(270px,58vw,430px)] w-full max-w-[558px] xl:h-[490px] xl:max-w-none">
            <span
              className="absolute bottom-[7.5%] left-[12%] h-[14px] w-[34.5%] rounded-bl-[20px] bg-[linear-gradient(90deg,#7ac114,#e4f5c8)] sm:h-[16px] xl:bottom-[36px] xl:h-[18px]"
              aria-hidden="true"
            />
            <span
              className="absolute left-[52.5%] top-[7.5%] h-[14px] w-[35%] rounded-tr-[20px] bg-[linear-gradient(90deg,#e4f5c8,#7ac114)] sm:h-[16px] xl:top-[36px] xl:h-[18px]"
              aria-hidden="true"
            />

            {/* Left image */}
            <ImageReveal from="left" className="absolute left-0 top-0 z-10 h-[87.5%] w-[52.7%]">
              <div className="group relative size-full overflow-hidden rounded-[22px] sm:rounded-[26px]">
                <Photo src={IMG[why.tomatoImage]} alt={why.tomatoAlt} sizes="294px" className="group-hover:scale-105" />
              </div>
              <div className="group/badge absolute left-0 top-0 z-20 flex h-[118px] w-[106px] sm:h-[142px] sm:w-[126px] flex-col items-center justify-center rounded-[22px_0_56px_56px] sm:rounded-[26px_0_68px_68px] border-b-[4px] border-r-[4px] border-white bg-[linear-gradient(180deg,#80c41c_0%,#5da310_100%)] px-2 text-center text-white xl:h-[160px] xl:w-[142px]">
                <LeafIcon size={26} className="size-5 sm:size-6 text-white transition-transform duration-300 group-hover/badge:scale-115 group-hover/badge:rotate-12 xl:size-[26px]" />
                <span style={{ fontFamily: HEADING_FONT }} className="mt-0.5 text-[24px] sm:text-[32px] font-extrabold leading-none xl:text-[42px]">
                  <Counter value={why.badge.value} suffix={why.badge.suffix} />
                </span>
                <span className="mt-1 text-[11px] sm:text-[12.5px] font-bold leading-[1.15] xl:text-[14.5px]">
                  {why.badge.line1}
                  <br />
                  {why.badge.line2}
                </span>
              </div>
            </ImageReveal>

            {/* Right overlapping image */}
            <ImageReveal
              from="bottom"
              delay={0.15}
              className="absolute left-[46.5%] top-[12.5%] z-20 h-[87.5%] w-[53.5%]"
            >
              <div className="group relative size-full overflow-hidden rounded-[22px] sm:rounded-[26px] border-[4px] sm:border-[5px] border-white bg-white">
                <Photo src={IMG[why.spinachImage]} alt={why.spinachAlt} sizes="298px" className="group-hover:scale-105" />
              </div>
            </ImageReveal>
          </div>

          <div className="order-1 lg:order-2 min-w-0 xl:-mt-[5px]">
            <Reveal>
              <Eyebrow lines="both">{why.eyebrow}</Eyebrow>
              <h2 style={{ fontFamily: HEADING_FONT }} className={`${H2} mt-2 sm:mt-3 xl:mt-[14px]`}>
                <span className="block text-[#4a2616]">{why.titleLine1}</span>
                <span className="block text-[#17650f]">{why.titleLine2}</span>
              </h2>
              <p className={`mt-2.5 sm:mt-4 max-w-[520px] xl:mt-[16px] ${P}`}>{why.text}</p>
            </Reveal>

            <Stagger className="mt-4 grid grid-cols-2 gap-3.5 sm:mt-6 sm:grid-cols-4 sm:gap-4 xl:mt-[38px] xl:gap-4">
              {why.items.map((item) => {
                const [firstWord, ...restWords] = item.label.split(" ");
                return (
                  <StaggerItem key={item.label} className="group flex flex-col items-center text-center">
                    <span className="grid h-[52px] w-[64px] sm:h-[62px] sm:w-[74px] xl:h-[70px] xl:w-[82px] place-items-center rounded-[14px] sm:rounded-[16px] bg-[#e3f5cd] text-[#17650f] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:bg-[#17650f] group-hover:text-white group-hover:shadow-md">
                      <NamedIcon name={item.icon} size={32} strokeWidth={1.5} className="transition-transform duration-300 group-hover:scale-110" />
                    </span>
                    <p className="mt-2 sm:mt-3 text-[clamp(13.5px,1.35vw,17.5px)] font-bold leading-[1.25] text-[#161616] xl:mt-[14px]">
                      <span className="block">{firstWord}</span>
                      {restWords.length > 0 && <span className="block">{restWords.join(" ")}</span>}
                    </p>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className={SECTION}>
        <div className={CONTAINER}>
          <SectionHeading
            eyebrow={gallery.eyebrow}
            first={gallery.titlePlain}
            accent={gallery.titleAccent}
            text={gallery.text}
          />
          <div className="mt-5 sm:mt-6 xl:mt-[28px]">
            <GalleryGrid />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className={SECTION}>
        <div className={CONTAINER}>
          <SectionHeading
            eyebrow={testimonials.eyebrow}
            first={testimonials.titlePlain}
            accent={testimonials.titleAccent}
            text={testimonials.text}
          />
          <div className="mt-5 sm:mt-6 xl:mt-[34px]">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className={SECTION}>
        <div className={CONTAINER}>
          <div className="mx-auto max-w-[949px]">
            <SectionHeading
              eyebrow={faqs.eyebrow}
              first={faqs.titlePlain}
              accent={faqs.titleAccent}
              text={faqs.text}
            />
            <Reveal delay={0.1} className="mt-5 sm:mt-6 xl:mt-[32px]">
              <FaqList />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={`${SECTION} pb-[clamp(28px,4.2vw,56px)]`}>
        <div className={`grid gap-6 sm:gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10 xl:grid-cols-[36.5%_1fr] xl:gap-x-0 ${CONTAINER}`}>
          <Reveal className="min-w-0 xl:pr-[40px]">
            <Eyebrow lines="both">{contact.eyebrow}</Eyebrow>
            <h2 style={{ fontFamily: HEADING_FONT }} className={`${H2} mt-2 sm:mt-3 xl:mt-[14px]`}>
              <span className="block text-[#5a3318]">{contact.titleLine1}</span>
              <span className="block text-[#17650f]">{contact.titleLine2}</span>
            </h2>
            <p className={`mt-2.5 sm:mt-4 max-w-[420px] xl:mt-[16px] ${P}`}>{contact.text}</p>
            <ul className="mt-4 space-y-3.5 sm:mt-6 sm:space-y-5 xl:mt-[30px] xl:space-y-[24px]">
              {contact.cards.map((card) => {
                const href =
                  card.icon === "phone"
                    ? `tel:${card.value.replace(/\s+/g, "")}`
                    : card.icon === "mail"
                      ? `mailto:${card.value}`
                      : undefined;
                return (
                  <li key={card.title} className="group flex items-center gap-3.5 sm:gap-5">
                    {href ? (
                      <a
                        href={href}
                        className="grid h-[50px] w-[52px] sm:h-[58px] sm:w-[60px] xl:h-[64px] xl:w-[66px] shrink-0 place-items-center rounded-[12px] sm:rounded-[14px] bg-[#e0f3b8] text-[#17650f] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#17650f] group-hover:text-white group-hover:shadow-md"
                        aria-label={card.title}
                      >
                        <NamedIcon name={card.icon} size={28} fill={card.icon === "mail" ? "none" : "currentColor"} strokeWidth={card.icon === "mail" ? 2 : 1} className="transition-transform duration-300 group-hover:scale-110" />
                      </a>
                    ) : (
                      <span className="grid h-[50px] w-[52px] sm:h-[58px] sm:w-[60px] xl:h-[64px] xl:w-[66px] shrink-0 place-items-center rounded-[12px] sm:rounded-[14px] bg-[#e0f3b8] text-[#17650f] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#17650f] group-hover:text-white group-hover:shadow-md">
                        <NamedIcon name={card.icon} size={28} fill={card.icon === "mail" ? "none" : "currentColor"} strokeWidth={card.icon === "mail" ? 2 : 1} className="transition-transform duration-300 group-hover:scale-110" />
                      </span>
                    )}
                    <div>
                      <h3 style={{ fontFamily: HEADING_FONT }} className="text-[16px] sm:text-[18px] font-bold leading-tight text-[#17650f] xl:text-[20px]">{card.title}</h3>
                      {href ? (
                        <a href={href} className="text-[14.5px] sm:text-[16px] text-[#1c1c1c] transition-colors hover:text-[#17650f] xl:text-[18px] xl:leading-[26px]">
                          {card.value}
                        </a>
                      ) : (
                        <p className="text-[14.5px] sm:text-[16px] text-[#1c1c1c] xl:text-[18px] xl:leading-[26px]">{card.value}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="xl:mt-[23px] xl:border-l xl:border-[#c9e29b] xl:pl-[49px]">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

