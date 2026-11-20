import Image from "next/image";
import Link from "next/link";

const mealRoutine = [
  {
    title: "Breakfast",
    detail: "Your child starts the day with a warm, cooked breakfast that gives them the energy to play, explore and learn.",
  },
  {
    title: "Lunch",
    detail: "A hot, balanced lunch keeps children fuelled through the busiest part of the day, so they can enjoy their activities and rest well afterwards.",
  },
  {
    title: "Afternoon Snack",
    detail: "A light afternoon snack with fresh fruit keeps energy up until pick-up time.",
  },
  {
    title: "Drinks",
    detail: "Water, juice and rooibos tea is served at different times throughout the day.",
  },
];

const nutritionFaqs = [
  {
    category: "About Us",
    items: [
      {
        question: "Who can attend?",
        answer: "We welcome children from 3 months to 5 years old.",
      },
      {
        question: "Are you a registered organisation?",
        answer: "Yes. Trunk Academy is a registered NPO (269-171).",
      },
      {
        question: "Do you have a Christian ethos?",
        answer: "Yes. Gentle Christian teaching and values shape our care and help children learn love, gratitude and respect.",
      },
    ],
  },
  {
    category: "Programmes and Hours",
    items: [
      {
        question: "What programmes do you offer?",
        answer: "We offer full day, half day, hybrid and day visit options, so you can choose what suits your child and your family’s schedule.",
      },
      {
        question: "How do I choose the right programme?",
        answer: "We are happy to guide you. Tell us about your schedule and your child’s needs, and we’ll help you find the best fit.",
      },
      {
        question: "When are you open?",
        answer: "We operate Monday to Friday from 06h30 to 17h30. We stay open during school breaks, so you have care when you need it. We close on public holidays and for the festive break during December.",
      },
    ],
  },
  {
    category: "Learning and Development",
    items: [
      {
        question: "What is your approach to learning?",
        answer: "We learn through play. Our classrooms and outdoor play area give children space to explore, wonder and grow, gently guided by caring teachers.",
      },
      {
        question: "How will I know how my child is doing?",
        answer: "You receive a progress report every six months, and we offer one-on-one sessions with parents and guardians to talk about your child’s development.",
      },
      {
        question: "Do you prepare children for primary school?",
        answer: "Yes. Our school-bound learners build early literacy, numeracy, independence and confidence, so they’re ready for Grade R and primary school.",
      },
    ],
  },
  {
    category: "Daily Life",
    items: [
      {
        question: "Do you provide meals?",
        answer: "Yes. We provide all meals, including a cooked breakfast, a hot lunch and an afternoon snack, with water, rooibos and fruit served. There’s no need to pack a lunchbox.",
      },
      {
        question: "What should my child bring?",
        answer: "Your child brings a blanket, pillow and bed cover for rest time. We send these home on Fridays for washing.",
      },
    ],
  },
  {
    category: "Fees and Payment",
    items: [
      {
        question: "How much are your fees?",
        answer: "Fees vary depending on the programme you select, and a sibling discount applies for siblings. Message us on WhatsApp or call 081 351 4996 for our current fee structure.",
      },
      {
        question: "How are fees paid?",
        answer: "All fees are paid in advance, before your child starts. The payment pattern depends on the programme, and full day fees are paid over 12 months. A once-off registration fee is payable annually and covers stationery, hygiene essentials and more. We are a cashless environment, so all fees are paid directly into our bank account.",
      },
    ],
  },
  {
    category: "Registration and Enrollment",
    items: [
      {
        question: "How do I register?",
        answer: "Reach out to us on WhatsApp or call 081 351 4996 for more details. Complete a registration form. Submit the supporting documents: a copy of your child’s birth certificate, a copy of the parent’s or guardian’s ID and a copy of your child’s immunisation card.",
      },
      {
        question: "Can I visit before I enroll?",
        answer: "Absolutely. We’d love to show you around. Message us on WhatsApp or call 081 351 4996 to arrange a visit.",
      },
    ],
  },
];

export function NutritionSafetyPage() {
  return (
    <main className="nutrition-page">
      <section className="nutrition-intro" aria-labelledby="nutrition-title">
        <div>
          <p className="eyebrow">Nourished and Safe, Every Day</p>
          <h1 id="nutrition-title">Healthy meals and a secure, caring environment for your little one.</h1>
        </div>
        <div className="nutrition-intro-copy">
          <article>
            <h2>Nutrition</h2>
            <p>Growing bodies and minds need good fuel. We provide all meals, including a cooked breakfast, a hot lunch and an afternoon snack, with water, rooibos and fresh fruit served throughout the day, so you never have to pack a lunchbox.</p>
          </article>
          <article>
            <h2>Safety</h2>
            <p>Your child’s safety is our first priority. Our classrooms and outdoor play area are set up with care, and our attentive teachers supervise children closely, so little ones can explore and play freely while you have peace of mind.</p>
          </article>
        </div>
      </section>

      <section className="nutrition-photo-pair" aria-label="Children enjoying time together at school">
        <div className="nutrition-photo nutrition-photo-wide">
          <Image
            src="/images/Gemini_Generated_Image_e7juhye7juhye7ju.webp"
            alt="A smiling young girl in a blue ruffled top"
            fill
            priority
            sizes="(max-width: 700px) 100vw, 50vw"
          />
        </div>
        <div className="nutrition-photo nutrition-photo-narrow">
          <Image
            src="/images/Gemini_Generated_Image_80s83a80s83a80s8.webp"
            alt="A cheerful young child holding two yellow play balls"
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="nutrition-meals" id="nutrition-meals" aria-labelledby="meal-routine-title">
        <div className="nutrition-meals-heading">
          <p className="eyebrow">Healthy meals, made each day</p>
          <h2 id="meal-routine-title">Cooked with care,<br />served with love.</h2>
          <p>Good food helps little bodies grow and little minds focus. We provide all meals (with the exception of children younger than 1 or with special dietary requirements), so there are no lunchboxes to pack and no morning rush.</p>
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

      <section className="nutrition-contact" id="nutrition-contact" aria-labelledby="nutrition-contact-title">
        <div>
          <p className="eyebrow">Frequently asked questions</p>
          <h2 id="nutrition-contact-title">Everything you would like to know about Trunk Academy.</h2>
        </div>
        <div className="nutrition-faq-groups">
          {nutritionFaqs.map(({ category, items }) => (
            <div className="nutrition-faq-group" key={category}>
              <h3 className="nutrition-faq-category">{category}</h3>
              <div className="nutrition-faq-list">
                {items.map(({ question, answer }) => (
                  <article className="nutrition-faq-item" key={question}>
                    <h4>{question}</h4>
                    <p>{answer}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Link className="button button-light" href="/contact">Make an enquiry</Link>
      </section>
    </main>
  );
}
