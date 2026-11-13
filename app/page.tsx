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
import { HOME, IMG, HEADING_FONT } from "@/data/data";
import { LeafIcon, LeavesIcon, NamedIcon } from "@/lib/icons";

const { about, services, why, gallery, testimonials, faqs, contact } = HOME;

const SPACING = "pt-7 sm:pt-9 md:pt-10 xl:pt-[40px]";
const SECTION = `px-4 sm:px-6 xl:px-0 ${SPACING}`;
const CONTAINER = "mx-auto max-w-[1267px] xl:w-[calc(1267*var(--u))] xl:max-w-none";
const H2 = " font-bold tracking-[-0.01em]";

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* ── About ── */}
      <section id="about" className={SECTION}>
        <div className={CONTAINER}>
          <div className="flex flex-col gap-2.5 sm:gap-4 lg:flex-row lg:items-start lg:justify-between">
            <Reveal className="shrink-0">
              <Eyebrow>{about.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.1} className="lg:text-right">
              <h2 style={{ fontFamily: HEADING_FONT }} className={`${H2} text-[clamp(1.25rem,5vw,2.6rem)] leading-[1.15] xl:text-[length:calc(54*var(--u))] xl:leading-[1.12]`}>
                <span className="block whitespace-nowrap text-[#4a2616]">{about.titleLine1}</span>
                <span className="block whitespace-nowrap text-[#17650f]">{about.titleLine2}</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-5 sm:mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-[1fr_1fr] xl:mt-[60px] xl:grid-cols-[380px_328px_1fr] xl:gap-x-[17px]">
            <div className="group relative aspect-[380/233] sm:aspect-[328/380] w-full overflow-hidden rounded-[14px] xl:aspect-[380/233] xl:self-start">
              <Photo src={IMG[about.farmerImage]} alt={about.farmerAlt} sizes="380px" className="group-hover:scale-105" />
            </div>
            <ImageReveal from="bottom" delay={0.1} className="group relative aspect-[16/9] sm:aspect-[328/380] overflow-hidden rounded-[14px] xl:aspect-[328/435]">
              <Photo src={IMG[about.tractorImage]} alt={about.tractorAlt} sizes="328px" className="group-hover:scale-105" />
            </ImageReveal>
            <Reveal delay={0.2} className="sm:col-span-2 lg:col-span-2 xl:col-span-1 xl:ml-[16px]">
              <p className="text-[14.5px] leading-[1.55] sm:text-[16px] sm:leading-[1.6] text-[#1c1c1c] xl:text-[22.5px] xl:leading-[30px]">{about.text}</p>
              <div className="mt-3.5 sm:mt-5 xl:mt-[40px]">
                <AboutTabs />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className={SECTION}>
        <div className={CONTAINER}>
          <ServicesCarousel services={services} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className={`${SECTION} pt-8 sm:pt-10 md:pt-12 xl:pt-[48px]`}>
        <div className={`grid items-start gap-6 sm:gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10 xl:grid-cols-[558px_1fr] xl:gap-x-[55px] ${CONTAINER}`}>
          <div className="relative mx-auto h-[clamp(250px,54vw,440px)] w-full max-w-[558px] xl:h-[490px] xl:max-w-none">
            <span
              className="absolute bottom-[7.5%] left-[12%] h-[14px] w-[34.5%] rounded-bl-[20px] bg-[linear-gradient(90deg,#7ac114,#e4f5c8)] sm:h-[16px] xl:bottom-[36px] xl:left-[68px] xl:h-[18px] xl:w-[190px]"
              aria-hidden="true"
            />
            <span
              className="absolute left-[52.5%] top-[7.5%] h-[14px] w-[35%] rounded-tr-[20px] bg-[linear-gradient(90deg,#e4f5c8,#7ac114)] sm:h-[16px] xl:left-[294px] xl:top-[36px] xl:h-[18px] xl:w-[192px]"
              aria-hidden="true"
            />

            {/* Left image */}
            <ImageReveal from="left" className="absolute left-0 top-0 z-10 h-[86.5%] w-[52.5%] xl:h-[430px] xl:w-[294px]">
              <div className="group relative size-full overflow-hidden rounded-[22px] sm:rounded-[26px]">
                <Photo src={IMG[why.tomatoImage]} alt={why.tomatoAlt} sizes="294px" className="group-hover:scale-105" />
              </div>
              <div className="group/badge absolute left-0 top-0 flex h-[37%] w-[52%] flex-col items-center justify-center rounded-[22px_0_64px_64px] sm:rounded-[26px_0_72px_72px] bg-[linear-gradient(180deg,#80c41c_0%,#5da310_100%)] px-2 text-center text-white shadow-sm xl:h-[164px] xl:w-[144px]">
                <LeafIcon size={28} className="size-5 sm:size-6 text-white transition-transform duration-300 group-hover/badge:scale-115 group-hover/badge:rotate-12 xl:size-[28px]" />
                <span style={{ fontFamily: HEADING_FONT }} className="mt-0.5 text-[24px] sm:text-[34px] md:text-[38px] font-extrabold leading-none xl:text-[48px]">
                  <Counter value={why.badge.value} suffix={why.badge.suffix} />
                </span>
                <span className="mt-1 text-[10px] sm:text-[12.5px] font-bold leading-[1.15] xl:text-[15.5px]">
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
              className="absolute left-[46.5%] top-[12.5%] z-20 h-[87.5%] w-[53.5%] xl:left-[260px] xl:top-[60px] xl:h-[430px] xl:w-[298px]"
            >
              <div className="group relative size-full overflow-hidden rounded-[22px] sm:rounded-[26px] border-[4px] sm:border-[5px] border-white bg-white shadow-[0_18px_36px_-18px_rgba(0,0,0,0.35)]">
                <Photo src={IMG[why.spinachImage]} alt={why.spinachAlt} sizes="298px" className="group-hover:scale-105" />
              </div>
            </ImageReveal>
          </div>

          <div className="xl:-mt-[5px]">
            <Reveal>
              <p className="group inline-flex items-center gap-2.5 sm:gap-3 text-[14px] sm:text-[15px] font-bold uppercase text-[#17650f] xl:text-[20px]">
                <span className="h-px w-6 sm:w-8 bg-[#4f9a28] xl:w-[40px]" />
                <LeafIcon size={40} className="size-7 sm:size-9 text-[#2f8a1e] transition-transform duration-300 group-hover:scale-115 group-hover:rotate-12 xl:size-[40px]" />
                {why.eyebrow}
                <span className="h-px w-6 sm:w-8 bg-[#4f9a28] xl:w-[40px]" />
              </p>
              <h2 style={{ fontFamily: HEADING_FONT }} className={`${H2} mt-2 sm:mt-3 text-[1.6rem] leading-[1.15] sm:text-[2.1rem] lg:text-[2.4rem] xl:mt-[18px] xl:text-[48px] xl:leading-[52px]`}>
                <span className="block whitespace-nowrap text-[#4a2616]">{why.titleLine1}</span>
                <span className="block whitespace-nowrap text-[#17650f]">{why.titleLine2}</span>
              </h2>
              <p className="mt-3 sm:mt-4 max-w-[520px] text-[14.5px] sm:text-[16px] leading-[1.55] sm:leading-[1.6] text-[#3b3b3b] xl:mt-[18px] xl:text-[23.5px] xl:leading-[33px]">{why.text}</p>
            </Reveal>

            <Stagger className="mt-5 grid grid-cols-2 gap-4 sm:mt-7 sm:grid-cols-4 sm:gap-5 xl:mt-[48px] xl:gap-4">
              {why.items.map((item) => (
                <StaggerItem key={item.label} className="group flex flex-col items-center text-center">
                  <span className="grid h-[56px] w-[68px] sm:h-[64px] sm:w-[76px] xl:h-[70px] xl:w-[82px] place-items-center rounded-[14px] sm:rounded-[16px] bg-[#e3f5cd] text-[#17650f] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:bg-[#17650f] group-hover:text-white group-hover:shadow-md">
                    <NamedIcon name={item.icon} size={34} strokeWidth={1.5} className="transition-transform duration-300 group-hover:scale-110" />
                  </span>
                  <p className="mt-2 sm:mt-3 whitespace-nowrap text-[14px] sm:text-[15.5px] font-bold leading-[1.2] text-[#161616] xl:mt-[14px] xl:max-w-[140px] xl:whitespace-normal xl:text-[23.5px] xl:leading-[27px]">{item.label}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section id="gallery" className={SECTION}>
        <div className={CONTAINER}>
          <SectionHeading
            eyebrow={gallery.eyebrow}
            first={gallery.titlePlain}
            accent={gallery.titleAccent}
            text={gallery.text}
            titleClass="text-[1.75rem] leading-[1.15] sm:text-[2.4rem] md:text-[2.6rem] xl:text-[53px] xl:leading-[56px]"
            textClass="text-[14.5px] sm:text-[15px] text-[#2d2d2d] xl:text-[20px] xl:leading-[26px]"
          />
          <div className="mt-5 sm:mt-6 xl:mt-[28px]">
            <GalleryGrid />
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className={SECTION}>
        <div className={CONTAINER}>
          <SectionHeading
            eyebrow={testimonials.eyebrow}
            first={testimonials.titlePlain}
            accent={testimonials.titleAccent}
            text={testimonials.text}
            titleClass="text-[1.75rem] leading-[1.15] sm:text-[2.4rem] md:text-[2.6rem] xl:text-[61px] xl:leading-[62px]"
            textClass="text-[14.5px] sm:text-[15px] text-[#1c1c1c] xl:text-[21.5px] xl:leading-[26px]"
          />
          <div className="mt-5 sm:mt-6 xl:mt-[34px]">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section id="faqs" className={SECTION}>
        <div className={CONTAINER}>
          <div className="mx-auto max-w-[949px]">
            <SectionHeading
              eyebrow={faqs.eyebrow}
              first={faqs.titlePlain}
              accent={faqs.titleAccent}
              text={faqs.text}
              titleClass="text-[1.75rem] leading-[1.15] sm:text-[2.4rem] md:text-[2.6rem] xl:text-[64px] xl:leading-[64px]"
              textClass="text-[14.5px] sm:text-[15px] text-[#2d2d2d] xl:text-[23.5px] xl:leading-[30px]"
            />
            <Reveal delay={0.1} className="mt-5 sm:mt-6 xl:mt-[32px]">
              <FaqList />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className={`${SECTION} pb-7 sm:pb-9 md:pb-10 xl:pb-[40px]`}>
        <div className={`grid gap-6 sm:gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10 xl:grid-cols-[461px_1fr] xl:gap-x-0 ${CONTAINER}`}>
          <Reveal className="xl:pr-[49px]">
            <Eyebrow lines="both">{contact.eyebrow}</Eyebrow>
            <h2 style={{ fontFamily: HEADING_FONT }} className={`${H2} mt-2 sm:mt-3 text-[2rem] leading-[1.1] sm:text-[2.8rem] md:text-[3.2rem] xl:mt-[14px] xl:text-[72px] xl:leading-[64px]`}>
              <span className="block text-[#5a3318]">{contact.titleLine1}</span>
              <span className="block text-[#17650f]">{contact.titleLine2}</span>
            </h2>
            <p className="mt-3 sm:mt-4 max-w-[420px] text-[14.5px] sm:text-[16px] leading-[1.55] sm:leading-[1.6] text-[#4a4a4a] xl:mt-[20px] xl:text-[22.5px] xl:leading-[29px]">{contact.text}</p>
            <ul className="mt-4 space-y-3.5 sm:mt-6 sm:space-y-5 xl:mt-[30px] xl:space-y-[24px]">
              {contact.cards.map((card) => (
                <li key={card.title} className="group flex items-center gap-3.5 sm:gap-5">
                  <span className="grid h-[50px] w-[52px] sm:h-[58px] sm:w-[60px] xl:h-[64px] xl:w-[66px] shrink-0 place-items-center rounded-[12px] sm:rounded-[14px] bg-[#e0f3b8] text-[#17650f] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#17650f] group-hover:text-white group-hover:shadow-md">
                    <NamedIcon name={card.icon} size={28} fill={card.icon === "mail" ? "none" : "currentColor"} strokeWidth={card.icon === "mail" ? 2 : 1} className="transition-transform duration-300 group-hover:scale-110" />
                  </span>
                  <div>
                    <h3 style={{ fontFamily: HEADING_FONT }} className=" text-[17.5px] sm:text-[20px] font-bold leading-tight text-[#17650f] xl:text-[25.5px]">{card.title}</h3>
                    <p className="text-[14.5px] sm:text-[16px] text-[#1c1c1c] xl:text-[24.5px] xl:leading-[30px]">{card.value}</p>
                  </div>
                </li>
              ))}
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

