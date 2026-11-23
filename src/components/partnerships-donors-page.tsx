import Image from "next/image";

const whySponsor = [
  {
    title: "Registered NPO (269-171)",
    detail: "We are accountable and transparent in how support is used.",
  },
  {
    title: "Whole-child care",
    detail: "We nurture cognitive, emotional, creative, physical and social development.",
  },
  {
    title: "Nutrition",
    detail: "We provide all meals, including a cooked breakfast, a hot lunch and an afternoon snack.",
  },
  {
    title: "Accountability to parents",
    detail: "Progress reports every six months and one-on-one sessions with parents and guardians.",
  },
  {
    title: "Community impact",
    detail: "We support working families and prepare children for primary school.",
  },
];

const waysToSponsor = [
  "Sponsor a child’s fees or part of them",
  "Sponsor meals, learning materials or stationery",
  "Sponsor play equipment or improvements to our classrooms and outdoor play area",
  "Sponsor an event or programme",
];

const howDonationHelps = [
  "Quality early learning and care for children in our community",
  "Healthy meals and daily essentials",
  "Learning materials, stationery and play equipment",
  "A safe, bright place to explore, wonder and grow",
];

const whyPartner = [
  "Trusted and registered non-profit organisation (NPO 269-171)",
  "Christian-ethos, play-based approach to early learning",
  "Visible, community-focused impact",
  "Flexible ways to get involved",
  "Opportunities for staff volunteering and CSR/CSI projects",
];

const waysToPartner = [
  "Skills and volunteer support, such as story time or maintenance days",
  "Donations of educational resources, food or equipment",
  "Funding for a specific project or programme",
  "Joint community events and training for parents and guardians",
];

const whatsappLink = "https://wa.me/27813514996?text=Hi%20Trunk%20Academy%2C%20I%E2%80%99d%20like%20to%20talk%20about%20a%20partnership%20or%20sponsorship.";
const donationEnquiryLink = "https://wa.me/27813514996?text=Hi%20Trunk%20Academy%2C%20I%E2%80%99d%20like%20to%20make%20a%20donation%20enquiry.";

export function PartnershipsDonorsPage() {
  return (
    <main className="partnerships-page">
      <section className="partnerships-hero" aria-labelledby="partnerships-title">
        <p className="eyebrow">Sponsor a Child’s Start in Life</p>
        <div className="partnerships-hero-grid">
          <h1 id="partnerships-title">Help us open the door to quality early learning in our community.</h1>
          <p>Every child deserves a strong start. As a registered non-profit organisation (NPO 269-171), Trunk Academy provides loving, faith-based early childhood care and learning through play. Your sponsorship helps us nurture children and strengthen education in our community.</p>
        </div>
      </section>

      <section className="partnerships-why" id="why-partner" aria-labelledby="partnerships-why-title">
        <div className="partnerships-photo">
          <Image
            src="/images/Gemini_Generated_Image_wmj1zrwmj1zrwmj1.webp"
            alt="A young child showing painted pink hands in a moment of creative discovery"
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
          />
        </div>
        <div className="partnerships-why-copy">
          <p className="eyebrow">Sponsorship</p>
          <h2 id="partnerships-why-title">Why sponsor<br />Trunk Academy?</h2>
          <div className="sponsorship-reasons-grid">
            {whySponsor.map(({ title, detail }) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="partnerships-ways" id="ways-to-help" aria-labelledby="ways-to-help-title">
        <div className="partnerships-section-heading">
          <div>
            <p className="eyebrow">How you can sponsor</p>
            <h2 id="ways-to-help-title">Ways to sponsor.</h2>
          </div>
          <p className="partnerships-ways-intro">If you are interested in sponsoring us kindly contact us to discuss how your support can make the biggest difference.</p>
        </div>
        <div className="partnerships-ways-grid">
          {waysToSponsor.map((item) => (
            <article key={item}>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="partnerships-donation" id="donation" aria-labelledby="donation-title">
        <div className="partnerships-donation-intro">
          <p className="eyebrow">Give a Little, Grow a Lot</p>
          <h2 id="donation-title">Every contribution helps a child learn, play and thrive.</h2>
          <p>Trunk Academy is a registered non-profit organisation (NPO 269-171), and donations from individuals, businesses and organisations help us strengthen early education in our community. Whatever the size, your gift matters.</p>
          <div className="donation-helps-block">
            <h3>How your donation helps</h3>
            <div className="donation-helps-grid">
              {howDonationHelps.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="donation-how-block">
          <h3 className="donation-how-title">How to donate</h3>
          <p className="donation-how-note">We are a cashless organisation, so all donations are made by direct bank transfer.</p>
          <p className="donation-how-followup">
            Please make an enquiry with us before donating via <a href="mailto:info@trunkacademy.org.za">info@trunkacademy.org.za</a> or WhatsApp <a href={donationEnquiryLink} target="_blank" rel="noopener noreferrer">081 351 4996</a>, and we will share our banking details directly with you.
          </p>
          <p className="donation-how-thanks">Thank you for helping us make it the start of something beautiful.</p>
        </div>
      </section>

      <section className="partnerships-partner-section" id="partnerships" aria-labelledby="partnerships-partner-title">
        <div className="partnerships-partner-intro">
          <p className="eyebrow">Partner With Us to Strengthen Education</p>
          <h2 id="partnerships-partner-title">Together, we can build a brighter future for our children and our community.</h2>
          <p>We welcome partnerships with businesses, churches, schools, foundations and community organisations that share our passion for early childhood development.</p>
        </div>
        <div className="partnerships-partner-columns">
          <div className="partnerships-partner-group">
            <h3>Why partner with Trunk Academy?</h3>
            <div className="partnerships-partner-grid">
              {whyPartner.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
          <div className="partnerships-partner-group">
            <h3>Ways to partner</h3>
            <div className="partnerships-partner-grid">
              {waysToPartner.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="partnerships-cta" id="partnerships-cta" aria-labelledby="partnerships-cta-title">
        <div className="partnerships-cta-copy">
          <p className="eyebrow">Interested in sponsoring, donating or partnering with us?</p>
          <h2 id="partnerships-cta-title">Together, we can make it the start of something beautiful.</h2>
          <p>Trunk Academy is a registered non-profit organisation (NPO 269-171) nurturing children through loving, faith-based care and learning through play. Whether you sponsor a child’s start, donate to support meals and learning resources, or partner with us on a project, your support helps us uplift education and contribute to the Sustainable Development Goals, especially Quality Education, Zero Hunger and Good Health and Well-being.</p>
        </div>
        <a href={whatsappLink} className="button button-light" target="_blank" rel="noopener noreferrer">Talk to us on WhatsApp</a>
      </section>
    </main>
  );
}
