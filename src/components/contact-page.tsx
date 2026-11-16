const whatsappLink = "https://wa.me/27813514996?text=Hi%20Trunk%20Academy%2C%20I%E2%80%99d%20like%20to%20get%20in%20touch.";
const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("3184 Croatia Street, Cosmo City Ext 3, Randburg, Johannesburg, 2188")}`;

export function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h1 id="contact-title">Contact<br />Trunk Academy.</h1>
        </div>
        <div className="contact-hero-copy">
          <p>We’d love to hear from you. Our door is always open.</p>
          <p>The quickest way to reach us is WhatsApp.</p>
          <a className="button button-dark" href={whatsappLink} target="_blank" rel="noopener noreferrer">Message us now</a>
        </div>
      </section>

      <section className="contact-details" id="contact-details" aria-label="Contact details">
        <article>
          <p className="eyebrow">WhatsApp</p>
          <h2><a href={whatsappLink} target="_blank" rel="noopener noreferrer">081 351 4996</a></h2>
        </article>
        <article>
          <p className="eyebrow">Email</p>
          <h2><a href="mailto:info@trunkacademy.org.za">info@trunkacademy.org.za</a></h2>
        </article>
        <article>
          <p className="eyebrow">Visit us</p>
          <address>
            3184 Croatia Street,<br />
            Cosmo City Ext 3, Randburg,<br />
            Johannesburg, 2188
          </address>
          <a className="contact-detail-link" href={mapLink} target="_blank" rel="noopener noreferrer">Open in Maps</a>
        </article>
        <article>
          <p className="eyebrow">Hours</p>
          <h2>Monday to Friday</h2>
          <p className="contact-hours">06h30 – 17h30</p>
        </article>
      </section>

      <section className="contact-cta" id="contact-cta" aria-labelledby="contact-cta-title">
        <div>
          <p className="eyebrow">We’re here to help</p>
          <h2 id="contact-cta-title">A message is a<br />lovely place to start.</h2>
        </div>
        <a className="button button-light" href={whatsappLink} target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
      </section>
    </main>
  );
}
