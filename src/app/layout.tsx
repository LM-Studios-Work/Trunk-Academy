import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trunk Academy | Babyhouse & Preschool in Cosmo City",
  description: "A warm, play-based babyhouse and preschool in Cosmo City, Roodepoort, caring for children from 3 months to 5 years.",
  icons: {
    icon: "/trunk academy logo.png",
    apple: "/trunk academy logo.png",
  },
};

export const viewport: Viewport = { themeColor: "#fffcf7", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body id="top">
        <SiteHeader />
        {children}
        <SiteFooter />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
