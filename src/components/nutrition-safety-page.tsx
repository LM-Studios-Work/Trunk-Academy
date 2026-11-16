import Image from "next/image";
import Link from "next/link";

const mealRoutine = [
  { title: "Cooked breakfast", detail: "A warm start to the day." },
  { title: "Cooked lunch", detail: "A freshly prepared midday meal." },
  { title: "Fresh fruit", detail: "Fruit is part of the daily routine." },
  { title: "Drinks", detail: "Water, juice and rooibos." },
];

const carePractices = [
  {
    title: "Emergency contacts",
    detail: "Each family provides a second emergency contact who does not live at the same address.",
  },
  {
    title: "Allergies & medical needs",
    detail: "The registration form asks about allergies, medical conditions, your child’s GP and medical aid details. Please let us know if anything changes.",
  },
  {
    title: "Immunisation records",
    detail: "We keep a copy of your child’s immunisation card on file.",
  },
  {
    title: "Clear operating hours",
    detail: "Monday to Friday, 06h30 to 17h30, excluding public holidays.",
  },
  {
    title: "Open communication",
    detail: "Day-to-day updates go to your chosen contact person on WhatsApp.",
  },
  {
    title: "Photos & privacy",
    detail: "We only post photos of children on our social media with a parent or guardian’s permission, given or declined on the registration form.",
  },
];

export function NutritionSafetyPage() {
  return (
    <main className="nutrition-page">
      <section className="nutrition-intro" aria-labelledby="nutrition-title">
        <div>
          <p className="eyebrow">A little care, all day long</p>
          <h1 id="nutrition-title">Good food.<br />Thoughtful care.</h1>
        </div>
        <p className="nutrition-intro-copy">Healthy meals and careful routines, so you can leave your child with confidence.</p>
      </section>

      <section className="nutrition-photo-pair" aria-label="Children enjoying time together at school">
        <div className="nutrition-photo nutrition-photo-wide">
          <Image
            src="/images/trunk-learning-moment.png"
            alt="Children exploring and playing together outdoors"
            fill
            priority
            sizes="(max-width: 700px) 100vw, 62vw"
          />
        </div>
        <div className="nutrition-photo nutrition-photo-narrow">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-11-15%20225637-MuFDLtdO6GhhbpIsx1qvGvJwhUDhWA.png"
            alt="A young child enjoying a playful moment"
            fill
            sizes="(max-width: 700px) 100vw, 38vw"
          />
        </div>
      </section>

      <section className="nutrition-meals" aria-labelledby="meal-routine-title">
        <div className="nutrition-meals-heading">
          <p className="eyebrow">Made fresh each day</p>
          <h2 id="meal-routine-title">Nutritious meals,<br />cooked fresh daily.</h2>
          <p>Good food fuels little minds and bodies. Each day includes:</p>
        </div>
        <ul className="meal-routine-list">
          {mealRoutine.map(({ title, detail }) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="nutrition-care" aria-labelledby="care-practices-title">
        <div className="nutrition-care-heading">
          <p className="eyebrow">The details that matter</p>
          <h2 id="care-practices-title">Care you can<br />feel good about.</h2>
        </div>
        <div className="care-practices-grid">
          {carePractices.map(({ title, detail }) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="nutrition-contact" aria-labelledby="nutrition-contact-title">
        <div>
          <p className="eyebrow">Here for your questions</p>
          <h2 id="nutrition-contact-title">A question about meals or your child’s health needs?</h2>
        </div>
        <Link className="button button-light" href="/contact">Get in touch</Link>
      </section>
    </main>
  );
}
