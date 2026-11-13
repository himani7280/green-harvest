import raw from "./data.json";

const greenharvest = raw.GreenHarvest;
const s = greenharvest.sections;

export const fonts = greenharvest.fonts;
export const templateComponents = greenharvest.templateComponents;
export const layout = greenharvest.layout;
export const typography = greenharvest.typography;

const header = s.SiteChrome.variants.GreenHarvestHeader1;

export const SITE = header.site;
export const BRAND = header.brand;
export const NAVBAR = header.navbar;
export const NAV_LINKS = header.navLinks;
export const NAV_CTA = header.navbar?.cta ?? header.cta;
export const FOOTER = s.SiteChrome.variants.GreenHarvestFooter1;
export const IMG: Record<string, string> = s.Media.variants.GreenHarvestImages1.images;

export const HOME = {
  ...s.Home.variants.GreenHarvestHome1,
  about: s.About.variants.GreenHarvestAbout1,
  services: s.Services.variants.GreenHarvestServices1,
  why: s.WhyChooseUs.variants.GreenHarvestWhyChooseUs1,
  gallery: s.Gallery.variants.GreenHarvestGallery1,
  testimonials: s.Testimonials.variants.GreenHarvestTestimonials1,
  faqs: s.Faqs.variants.GreenHarvestFaqs1,
  contact: s.Contact.variants.GreenHarvestContact1,
};

export const BODY_FONT = fonts.fontVars?.["--font-body"] ?? `"${fonts.body.family}", ${fonts.body.fallback}`;
export const HEADING_FONT = fonts.fontVars?.["--font-heading"] ?? `"${fonts.heading.family}", ${fonts.heading.fallback}`;
