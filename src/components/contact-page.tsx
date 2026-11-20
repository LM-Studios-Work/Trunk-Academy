const whatsappLink = "https://wa.me/27813514996?text=Hi%20Trunk%20Academy%2C%20I%E2%80%99d%20like%20to%20get%20in%20touch.";
const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("3184 Croatia Street, Cosmo City Ext 3, Roodepoort, Johannesburg, 2188")}`;

export function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h1 id="contact-title">We would like to<br />hear from you.</h1>
        </div>
        <div className="contact-hero-copy">
          <p>We would love to hear from you and to show you around.</p>
          <dl className="contact-hero-list">
            <div className="contact-hero-row">
              <dt>WhatsApp:</dt>
              <dd><a href={whatsappLink} target="_blank" rel="noopener noreferrer">081 351 4996</a></dd>
            </div>
            <div className="contact-hero-row">
              <dt>Call:</dt>
              <dd><a href="tel:+27813514996">081 351 4996</a></dd>
            </div>
            <div className="contact-hero-row">
              <dt>Email:</dt>
              <dd><a href="mailto:info@trunkacademy.org.za">info@trunkacademy.org.za</a></dd>
            </div>
            <div className="contact-hero-row">
              <dt>Visit us:</dt>
              <dd>
                3184 Croatia Street<br />
                Cosmo City<br />
                Ext 3<br />
                Roodepoort<br />
                Johannesburg<br />
                2188
              </dd>
            </div>
            <div className="contact-hero-row">
              <dt>Visiting hours:</dt>
              <dd>13h00 – 16h00 (unless an appointment has been made prior)</dd>
            </div>
          </dl>
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
            3184 Croatia Street<br />
            Cosmo City<br />
            Ext 3<br />
            Roodepoort<br />
            Johannesburg<br />
            2188
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
          <p className="eyebrow">Not Sure Which Programme Is Right for You?</p>
          <h2 id="contact-cta-title">Reach out to us.</h2>
        </div>
        <a className="button button-light" href={whatsappLink} target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
      </section>
    </main>
  );
}
