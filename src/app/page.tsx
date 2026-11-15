import Image from "next/image";
import { SiteHeader } from "@/components/site-header";

const photos = {
  hero: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-11-15%20225637-MuFDLtdO6GhhbpIsx1qvGvJwhUDhWA.png",
  friends: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-11-15%20225703-8mb6VUFGZaRGQ5fwOLVRjK63Q3dYqz.png",
};

const facts = [
  ["Ages", "3 months – 5 years"],
  ["Grades", "RRRR to RR"],
  ["Programmes", "Full day, half day, hybrid"],
  ["Hours", "Mon–Fri, 06h30–17h30"],
  ["Meals", "Freshly cooked breakfast & lunch"],
  ["Language", "English"],
];

const reasons = [
  { title: "Every child, seen", text: "We get to know each little personality, then encourage each child to grow at their own pace." },
  { title: "Nourishment, made fresh", text: "Breakfast and lunch are cooked daily, with fruit, water, juice and rooibos through the day." },
  { title: "Learning through play", text: "Everyday play, creativity and friendship help children build skills for life." },
  { title: "A partnership with family", text: "Our door is always open. We work closely with families, with care and respect." },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">A babyhouse & preschool in Cosmo City</p>
          <h1>A happy start<br />for little ones.</h1>
          <p className="hero-intro">A warm, play-based place to learn, belong and grow — from the very beginning.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#welcome">Meet Trunk Academy</a>
            <a className="text-link" href="#our-home">Get to know us</a>
          </div>
        </div>
        <div className="hero-image-wrap">
          <Image className="hero-image" src={photos.hero} alt="A smiling young child enjoying a playful moment" fill priority sizes="(max-width: 700px) 100vw, 50vw" />
          <div className="image-caption"><span>Room to be little.</span><span>Cosmo City, Johannesburg</span></div>
        </div>
      </section>

      <section className="facts-section" id="nutrition-safety" aria-label="At a glance">
        <div className="facts-heading"><p className="eyebrow">The little details</p><h2>Care that fits<br />real family life.</h2></div>
        <dl className="facts-grid">{facts.map(([label, value]) => <div className="fact" key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      </section>

      <section className="welcome-section" id="welcome">
        <div className="welcome-photo"><Image src={photos.friends} alt="Two preschool friends playing together" fill sizes="(max-width: 700px) 100vw, 50vw" /></div>
        <div className="welcome-copy" id="our-home"><p className="eyebrow">Welcome to our family</p><h2>A gentle place<br />to find their feet.</h2><p>Leaving your child in someone else’s care is a big step. We understand the trust it takes, and we meet it with a warm welcome, familiar faces and days full of discovery.</p><p>Our values-led approach is rooted in a Christian ethos, while celebrating and respecting every culture and family.</p><div className="signature"><span>Warm regards, <strong>Thembi & the team</strong></span></div></div>
      </section>

      <section className="reasons-section" id="programmes">
        <div className="section-heading"><p className="eyebrow">A good day starts here</p><h2>Little moments.<br />Big beginnings.</h2><p>Thoughtful care and play-based learning, built around what young children need to thrive.</p></div>
        <div className="reasons-grid">{reasons.map(({ title, text }) => <article className="reason-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="play-section">
        <div className="play-copy"><p className="eyebrow">Room to explore</p><h2>Curiosity has<br />a place to grow.</h2><p>From first friendships to new discoveries, we make space for children to explore the world around them — one day at a time.</p><a className="text-link" href="#contact">Explore life at Trunk</a></div>
        <div className="play-type" aria-hidden="true"><span>Play.</span><span>Learn.</span><span>Belong.</span></div>
      </section>

      <section className="cta-section" id="contact"><span id="admissions" /><p className="eyebrow">Your next step starts with a hello</p><h2>Let’s find out if<br />Trunk feels like home.</h2><p>We’d love to welcome your family and answer your questions.</p><a className="button button-light" href="#welcome">Meet the team</a><span className="cta-note">Trunk Academy Babyhouse & Preschool, Cosmo City, Randburg</span></section>

      <footer className="site-footer"><a className="brand footer-brand" href="#home"><span className="brand-name">TRUNK<br />ACADEMY</span></a><p>Little beginnings, cared for with love.</p><a href="#home" className="footer-top">Back to top</a><span className="footer-copy">© {new Date().getFullYear()} Trunk Academy</span></footer>
    </main>
  );
}
