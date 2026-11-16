import Image from "next/image";

const enrolmentSteps = [
  {
    title: "Get in touch",
    detail: "Ask about availability or arrange a visit.",
  },
  {
    title: "Complete the form",
    detail: "Choose Full Day, Half Day or Day Visit, and add your child’s and family’s details.",
  },
  {
    title: "Send your documents",
    detail: "A copy of your child’s birth certificate and immunisation card, plus a copy of the parent’s ID.",
  },
  {
    title: "Pay before day one",
    detail: "One month’s fees plus the registration fee are due before your child’s first day.",
  },
  {
    title: "Join the family",
    detail: "We’ll be ready to welcome your child to Trunk Academy.",
  },
];

const feePolicies = [
  {
    title: "Monthly payments",
    detail: "Pay monthly fees by EFT by the 7th of each month. Cash is not accepted for monthly fees.",
  },
  {
    title: "Sibling discount",
    detail: "A sibling discount applies while more than one child from the same household is enrolled.",
  },
  {
    title: "Annual fee review",
    detail: "Fees are reviewed annually. We give at least 30 days’ written notice of any change.",
  },
  {
    title: "Late collection",
    detail: "Collection after 17h30 costs R50 for every 15 minutes.",
  },
  {
    title: "Notice to deregister",
    detail: "Two months’ notice is required to deregister a child.",
  },
  {
    title: "Invoice queries",
    detail: "Please query any invoice within 7 days of receiving it.",
  },
];

const questions = [
  { question: "What ages do you accept?", answer: "We welcome children from 3 months to 5 years." },
  { question: "What are your operating hours?", answer: "Monday to Friday, 06h30 to 17h30, excluding public holidays." },
  { question: "Are meals included?", answer: "Yes. Children have cooked breakfast and lunch, fresh fruit, water, juice and rooibos." },
  { question: "What language do you teach in?", answer: "Our language of instruction is English." },
  { question: "How often will I get a progress report?", answer: "We share a progress report twice a year." },
];

function whatsappLink(message: string) {
  return `https://wa.me/27813514996?text=${encodeURIComponent(message)}`;
}

export function AdmissionsPage() {
  return (
    <main className="admissions-page">
      <section className="admissions-hero" aria-labelledby="admissions-title">
        <div>
          <p className="eyebrow">Admissions & enrolment</p>
          <h1 id="admissions-title">A simple path<br />to their next<br />beginning.</h1>
        </div>
        <div className="admissions-hero-copy">
          <p>Enrolling at Trunk Academy is simple. Here’s how to join our preschool family.</p>
          <a
            className="button button-dark"
            href={whatsappLink("Hi Trunk Academy, I’d like to ask about availability or arrange a visit.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ask about availability on WhatsApp
          </a>
        </div>
      </section>

      <section className="admissions-photo-pair" aria-label="Children at Trunk Academy">
        <div className="admissions-photo">
          <Image
            src="/images/Gemini_Generated_Image_6eb2wc6eb2wc6eb2.webp"
            alt="Two preschool friends playing together with hula hoops"
            fill
            priority
            sizes="(max-width: 700px) 100vw, 50vw"
          />
        </div>
        <div className="admissions-photo">
          <Image
            src="/images/Gemini_Generated_Image_e7juhye7juhye7ju.webp"
            alt="A smiling child at Trunk Academy"
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="admissions-steps" id="admissions-steps" aria-labelledby="enrolment-steps-title">
        <div className="admissions-section-heading">
          <div>
            <p className="eyebrow">Five steps to get started</p>
            <h2 id="enrolment-steps-title">From hello<br />to day one.</h2>
          </div>
          <p>Have a question or want to arrange a visit? WhatsApp us on <a href={whatsappLink("Hi Trunk Academy, I’d like to ask about enrolment.")} target="_blank" rel="noopener noreferrer">081 351 4996</a>.</p>
        </div>
        <ol className="admissions-steps-grid">
          {enrolmentSteps.map(({ title, detail }) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="admissions-body-feature" id="admissions-visit" aria-labelledby="admissions-visit-title">
        <div className="admissions-body-copy">
          <p className="eyebrow">Come see our space</p>
          <h2 id="admissions-visit-title">See where their<br />day happens.</h2>
          <p>We welcome children from 3 months to 5 years across Full Day, Half Day, Hybrid and Day Visit options. Arrange a visit to see our classrooms and play areas in Cosmo City and meet the team before your child’s first day.</p>
          <a
            className="text-link"
            href={whatsappLink("Hi Trunk Academy, I’d like to arrange a visit to see the school.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Arrange a school visit on WhatsApp
          </a>
        </div>
        <div className="admissions-body-photo">
          <Image
            src="/images/Gemini_Generated_Image_m8bumpm8bumpm8bu.webp"
            alt="A joyful young child laughing during play at Trunk Academy"
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="admissions-fees" id="admissions-fees" aria-labelledby="fees-policies-title">
        <div className="admissions-fees-heading">
          <p className="eyebrow">Clear from the start</p>
          <h2 id="fees-policies-title">Fees & policies<br />at a glance.</h2>
          <p>Your child’s monthly fee is confirmed in the Fee Schedule when you enrol.</p>
          <a className="text-link" href={whatsappLink("Hi Trunk Academy, could you please share the current fees?")} target="_blank" rel="noopener noreferrer">Ask us for current fees</a>
        </div>
        <div className="admissions-policy-grid">
          {feePolicies.map(({ title, detail }) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="admissions-faq" id="admissions-faq" aria-labelledby="admissions-faq-title">
        <div className="admissions-faq-heading">
          <p className="eyebrow">Good to know</p>
          <h2 id="admissions-faq-title">A few things<br />families ask.</h2>
          <div className="admissions-faq-photo">
            <Image
              src="/images/Gemini_Generated_Image_mp4jormp4jormp4j.webp"
              alt="A playful young child bending upside down and smiling"
              fill
              sizes="(max-width: 700px) 100vw, 35vw"
            />
          </div>
        </div>
        <div className="admissions-faq-grid">
          {questions.map(({ question, answer }) => (
            <article key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="admissions-cta" id="admissions-cta" aria-labelledby="admissions-cta-title">
        <div>
          <p className="eyebrow">Ready to secure a place?</p>
          <h2 id="admissions-cta-title">Request the<br />registration form.</h2>
        </div>
        <a
          className="button button-light"
          href={whatsappLink("Hi Trunk Academy, I’d like to request the registration form.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Request the registration form on WhatsApp
        </a>
      </section>
    </main>
  );
}
