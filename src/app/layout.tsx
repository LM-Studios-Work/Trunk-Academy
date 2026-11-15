import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trunk Academy | Babyhouse & Preschool in Cosmo City",
  description: "A warm, play-based babyhouse and preschool in Cosmo City, Randburg, caring for children from 3 months to 5 years.",
};

export const viewport: Viewport = { themeColor: "#fffcf7", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
