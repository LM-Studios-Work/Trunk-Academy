import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trunk Academy | Babyhouse & Preschool in Cosmo City",
  description: "A warm, play-based babyhouse and preschool in Cosmo City, Randburg, caring for children from 3 months to 5 years.",
};

export const viewport: Viewport = { themeColor: "#fffcf7", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body id="top"><SiteHeader />{children}<SiteFooter /></body></html>;
}
