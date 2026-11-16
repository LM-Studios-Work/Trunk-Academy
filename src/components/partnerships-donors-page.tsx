import Image from "next/image";

const waysToHelp = [
  {
    title: "Sponsor meals",
    detail: "Help us serve fresh, cooked meals every day.",
  },
  {
    title: "Learning resources",
    detail: "Books, puzzles, art supplies and educational toys.",
  },
  {
    title: "Facilities",
    detail: "Support improvements to our classrooms and play areas.",
  },
  {
    title: "Corporate partnerships",
    detail: "Partner with us on social investment and community projects.",
  },
  {
    title: "Donate goods or time",
    detail: "Clothing, stationery, volunteer hours and skills are welcome.",
  },
];

const donationDetails = [
  { label: "Account name", value: "Trunk Academy Babyhouse and Preschool" },
  { label: "Bank", value: "Standard Bank" },
  { label: "Account type", value: "Cheque account" },
  { label: "Account number", value: "10187826941" },
  { label: "Reference", value: "Donation + your name or company" },
];

const whatsappLink = "https://wa.me/27813514996?text=Hi%20Trunk%20Academy%2C%20I%E2%80%99d%20like%20to%20talk%20about%20a%20partnership%20or%20sponsorship.";
const donationFollowUpLink = "https://wa.me/27813514996?text=Hi%20Trunk%20Academy%2C%20I%E2%80%99ve%20made%20a%20donation%20and%20would%20like%20to%20let%20you%20know.";

export function PartnershipsDonorsPage() {
  return (
    <main className="partnerships-page">
      <section className="partnerships-hero" aria-labelledby="partnerships-title">
        <p className="eyebrow">Sponsorship, partnerships & donors</p>
        <div className="partnerships-hero-grid">
          <h1 id="partnerships-title">Help every child<br />get a strong,<br />joyful start.</h1>
          <p>Your support helps young children in Cosmo City learn, play and grow in a safe, stimulating space.</p>
        </div>
      </section>

      <section className="partnerships-why" aria-labelledby="partnerships-why-title">
        <div className="partnerships-photo">
          <Image
            src="/images/Gemini_Generated_Image_wmj1zrwmj1zrwmj1.webp"
            alt="A young child showing painted pink hands in a moment of creative discovery"
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
          />
        </div>
        <div className="partnerships-why-copy">
          <p className="eyebrow">Why partner with us</p>
          <h2 id="partnerships-why-title">A strong start<br />shapes what’s next.</h2>
          <p>Quality early learning shapes a child’s future. Your support helps us provide nutritious meals, learning resources and a safe, stimulating space for young children in Cosmo City.</p>
        </div>
      </section>

      <section className="partnerships-ways" aria-labelledby="ways-to-help-title">
        <div className="partnerships-section-heading">
          <p className="eyebrow">Ways to help</p>
          <h2 id="ways-to-help-title">A contribution<br />that makes a difference.</h2>
        </div>
        <div className="partnerships-ways-grid">
          {waysToHelp.map(({ title, detail }) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="partnerships-donation" aria-labelledby="donation-title">
        <div className="partnerships-donation-intro">
          <p className="eyebrow">Make a donation</p>
          <h2 id="donation-title">Thank you for<br />standing with us.</h2>
          <p>Use the account details below for your donation. Please WhatsApp us after you donate so we can thank you and acknowledge your contribution.</p>
          <a href={donationFollowUpLink} className="text-link" target="_blank" rel="noopener noreferrer">Let us know you donated</a>
        </div>
        <dl className="donation-details">
          {donationDetails.map(({ label, value }) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="partnerships-cta" aria-labelledby="partnerships-cta-title">
        <div>
          <p className="eyebrow">Interested in a partnership or sponsorship?</p>
          <h2 id="partnerships-cta-title">Let’s talk.</h2>
        </div>
        <a href={whatsappLink} className="button button-light" target="_blank" rel="noopener noreferrer">Talk to us on WhatsApp</a>
      </section>
    </main>
  );
}
