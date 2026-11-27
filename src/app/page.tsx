import Image from "next/image";
import Link from "next/link";
import { HomeDiscoverySection } from "@/components/home-discovery-section";

const photos = {
  hero: "/images/Gemini_Generated_Image_m8bumpm8bumpm8bu.webp",
  friends: "/images/Gemini_Generated_Image_6eb2wc6eb2wc6eb2.webp",
};

const facts = [
  ["Ages", "3 months – 5 years"],
  ["Grades", "RRRR to RR"],
  ["Programmes", "Full day, half day, hybrid"],
  ["Hours", "Monday – Friday, 06h30 – 17h30"],
  ["Meals", "We provide a cooked breakfast and lunch, afternoon snack and fruit. These meals are served with either water, rooibos tea or juice at different parts of the day."],
  ["Language of Instruction", "English"],
];

const reasons = [
  { title: "Every child is seen", text: "We get to know each little personality, then encourage each child to grow at their own pace." },
  { title: "Nourishment made fresh", text: "We provide a cooked breakfast and lunch, afternoon snack and fruit. These meals are served with either water, rooibos tea or juice at different parts of the day." },
  { title: "Learning through play", text: "Everyday play, creativity and friendship help children build skills for life." },
  { title: "A partnership with each family", text: "We work closely with families, with care and respect." },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">A babyhouse and preschool in Cosmo City</p>
          <h1>A happy start<br />for little ones.</h1>
          <p className="hero-intro">A loving, Christian-based creche in Cosmo City where little ones feel safe, grow in faith and discover the joy of learning.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#welcome" aria-label="Meet Trunk Academy">
              <span className="button-label">Meet Trunk Academy</span>
              <span className="button-arrow" aria-hidden="true">→</span>
            </a>
            <Link className="text-link" href="/programmes">Explore our programmes</Link>
          </div>
        </div>
        <div className="hero-image-wrap">
          <Image className="hero-image" src={photos.hero} alt="A smiling young child enjoying a playful moment" fill priority sizes="(max-width: 700px) 100vw, 50vw" />
          <div className="image-caption"><span>The start of something beautiful</span><span>Cosmo City, Johannesburg</span></div>
        </div>
      </section>

      <section className="facts-section" id="nutrition-safety" aria-label="At a glance">
        <div className="facts-heading"><p className="eyebrow">Where every detail is made with care</p><h2>Childcare that fits<br />your family life.</h2><Link className="text-link facts-link" href="#welcome">About us</Link></div>
        <dl className="facts-grid">{facts.map(([label, value]) => <div className="fact" key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      </section>

      <section className="welcome-section" id="welcome">
        <div className="welcome-photo"><Image src={photos.friends} alt="Two preschool friends playing together" fill sizes="(max-width: 700px) 100vw, 50vw" /></div>
        <div className="welcome-copy" id="our-home"><p className="eyebrow">Thank you for considering Trunk Academy for your little one</p><h2>A gentle place<br />to find their feet.</h2><p>Leaving your child in someone else’s care is a big step. We understand the trust it takes, and we meet it with a warm welcome, familiar faces and days full of discovery.</p><p>Our values-led approach is rooted in a Christian ethos, while celebrating and respecting every culture and family.</p></div>
      </section>

      <section className="reasons-section" id="programmes">
        <div className="section-heading"><p className="eyebrow">A good day starts here</p><h2>Little moments.<br />Big beginnings.</h2><p>Thoughtful care and play-based learning, built around what young children need to thrive.</p></div>
        <div className="reasons-grid">{reasons.map(({ title, text }) => <article className="reason-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <HomeDiscoverySection />

      <section className="play-section">
        <div className="play-copy">
          <p className="eyebrow">Where Curious Minds Bloom</p>
          <h2>Safe spaces to<br />explore, ask<br />and discover.</h2>
          <p>At Trunk Academy, every question is welcome and every discovery is celebrated, because curious little minds grow best when they feel safe, loved and free to wonder.</p>
          <Link className="text-link" href="/contact">Enquire about life at Trunk Academy Babyhouse and Preschool</Link>
        </div>
        <div className="play-type" aria-hidden="true"><span>Explore.</span><span>Grow.</span><span>Thrive.</span></div>
      </section>

      <section className="cta-section" id="contact">
        <span id="admissions" />
        <p className="eyebrow">Reach out to us</p>
        <h2>Let’s Start Something<br />Beautiful Together.</h2>
        <p>Chat to us on WhatsApp or call <a className="cta-inline-link" href="tel:+27813514996">081 351 4996</a> to make an appointment to view our facility or find out more regarding our enrollment process.</p>
        <Link className="button button-light" href="/contact" aria-label="Make an enquiry">
          <span className="button-label">Make an enquiry</span>
          <span className="button-arrow" aria-hidden="true">→</span>
        </Link>
        <span className="cta-note">
          Trunk Academy Babyhouse and Preschool
          <br />
          <a
            className="cta-location-link"
            href="https://www.google.com/maps/search/?api=1&query=3184%20Croatia%20Street%2C%20Cosmo%20City%2C%20Ext%203%2C%202188"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-location-dot" aria-hidden="true" />
            <span>3184 Croatia Street, Cosmo City, Ext 3, 2188</span>
          </a>
        </span>
      </section>
    </main>
  );
}
