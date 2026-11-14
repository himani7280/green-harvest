import type { CSSProperties } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/Motion";
import { Navbar } from "@/components/Navbar";
import { BODY_FONT, SITE, fonts } from "@/data/data";

const googleFontsHref =
  fonts.googleFontsHref ??
  `https://fonts.googleapis.com/css2?${fonts.googleFonts
    .map((font) => `family=${font.family.replace(/ /g, "+")}:${font.spec ?? `wght@${font.weights.join(";")}`}`)
    .join("&")}&display=swap`;

export const metadata: Metadata = {
  title: {
    default: SITE.titleDefault,
    template: SITE.titleTemplate,
  },
  description: SITE.description,
};

const bodyStyle = { fontFamily: BODY_FONT, "--u": "min(1px, calc(100vw / 1351))" } as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full scroll-smooth scroll-pt-[110px] antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={googleFontsHref} />
        <link rel="stylesheet" href={fonts.heading.cdnUrl} />
      </head>
      <body style={bodyStyle} className="flex min-h-full flex-col overflow-x-hidden bg-white text-[15px] leading-[1.6] text-[#1c1c1c] [text-rendering:optimizeLegibility] selection:bg-[#17650f] selection:text-white [&_:focus-visible]:rounded-md [&_:focus-visible]:outline-2 [&_:focus-visible]:outline-offset-2 [&_:focus-visible]:outline-[#17650f]">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
