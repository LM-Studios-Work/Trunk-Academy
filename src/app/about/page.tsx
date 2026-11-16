import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Trunk Academy | Babyhouse & Preschool in Cosmo City",
  description: "Meet the team and learn about the warm, play-based approach at Trunk Academy in Cosmo City.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="welcome-section" aria-labelledby="about-title">
        <div className="welcome-photo">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-11-15%20225703-8mb6VUFGZaRGQ5fwOLVRjK63Q3dYqz.png"
            alt="Two preschool friends playing together"
            fill
            priority
            sizes="(max-width: 700px) 100vw, 50vw"
          />
        </div>
        <div className="welcome-copy">
          <p className="eyebrow">Welcome to our family</p>
          <h1 className="about-title" id="about-title">A gentle place<br />to find their feet.</h1>
          <p>Leaving your child in someone else’s care is a big step. We understand the trust it takes, and we meet it with a warm welcome, familiar faces and days full of discovery.</p>
          <p>Our values-led approach is rooted in a Christian ethos, while celebrating and respecting every culture and family.</p>
          <div className="signature"><span>Warm regards, <strong>Thembi &amp; the team</strong></span></div>
          <Link className="text-link" href="/contact">Come say hello</Link>
        </div>
      </section>
    </main>
  );
}
