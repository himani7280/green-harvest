import type { CSSProperties } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/Motion";
import { Navbar } from "@/components/Navbar";
import { SITE, fonts, layout } from "@/data/data";

export const metadata: Metadata = {
  title: {
    default: SITE.titleDefault,
    template: SITE.titleTemplate,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
<<<<<<< HEAD
    <html lang={layout.htmlLang} data-scroll-behavior="smooth" suppressHydrationWarning className={layout.htmlClass}>
=======
    <html lang={layout.htmlLang} suppressHydrationWarning className={layout.htmlClass}>
>>>>>>> aa67bf0c2867b63c1bc475882f1b039d85e58526
      <head>
        <link rel="preconnect" href={fonts.preconnectHref} />
        <link rel="preconnect" href={fonts.preconnectStaticHref} crossOrigin="anonymous" />
        <link rel="stylesheet" href={fonts.googleFontsHref} />
        <link rel="stylesheet" href={fonts.heading.cdnUrl} />
      </head>
      <body style={layout.bodyStyle as CSSProperties} className={layout.bodyClass}>
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
