import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdmissionsPage } from "@/components/admissions-page";
import { ContactPage } from "@/components/contact-page";
import { NutritionSafetyPage } from "@/components/nutrition-safety-page";
import { PartnershipsDonorsPage } from "@/components/partnerships-donors-page";

const staticPages = [
  { slug: "programmes", title: "Programmes & Curriculum" },
  { slug: "nutrition-safety", title: "Nutrition, Health & Safety" },
  { slug: "admissions", title: "Admissions" },
  { slug: "contact", title: "Contact" },
  { slug: "partners-donors", title: "Partners & Donors" },
];

const programmeOptions = [
  { title: "Full Day", description: "Our complete day of care and learning, Monday to Friday, with cooked meals included." },
  { title: "Half Day", description: "A shorter day with the same caring, structured learning and play." },
  { title: "Hybrid", description: "A flexible mix of days to suit working families." },
  { title: "Day Visit", description: "Occasional care for children who do not attend every week." },
];

const developmentAreas = ["Cognitive development", "Social development", "Emotional development", "Physical development", "Creative development"];

const schoolReadiness = [
  "Independence and self-help skills",
  "Following multi-step directions",
  "Sitting and focusing during group activities",
  "Social skills for classroom environments",
  "A basic academic foundation in literacy and numeracy",
  "Enthusiasm and confidence about learning",
];

export function generateStaticParams() {
  return staticPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = staticPages.find((item) => item.slug === slug);

  if (slug === "admissions") {
    return {
      title: "Admissions & Enrolment | Trunk Academy",
      description: "Find out how to enrol at Trunk Academy, review fees and policies, and ask about availability or a visit.",
    };
  }

  if (slug === "contact") {
    return {
      title: "Contact | Trunk Academy",
      description: "Contact Trunk Academy in Cosmo City by WhatsApp, email or visit us during opening hours.",
    };
  }

  if (slug === "partners-donors") {
    return {
      title: "Sponsorship, Partnerships & Donors | Trunk Academy",
      description: "Support early learning in Cosmo City through meal sponsorships, learning resources, facilities, partnerships, goods or time.",
    };
  }

  if (slug === "nutrition-safety") {
    return {
      title: "Nutrition, Health & Safety | Trunk Academy",
      description: "Learn about Trunk Academy’s fresh daily meals, health information, safety routines and family communication.",
    };
  }

  if (slug === "programmes") {
    return {
      title: "Programmes & Curriculum | Trunk Academy",
      description: "Explore Trunk Academy's play-based early learning approach and programme options for babies, toddlers and preschoolers.",
    };
  }

  return page ? { title: `${page.title} | Trunk Academy` } : {};
}

export default async function PlaceholderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = staticPages.find((item) => item.slug === slug);

  if (slug === "admissions") return <AdmissionsPage />;
  if (slug === "contact") return <ContactPage />;
  if (slug === "partners-donors") return <PartnershipsDonorsPage />;

  if (slug === "nutrition-safety") return <NutritionSafetyPage />;

  if (slug === "programmes") {
    return (
      <main className="programmes-page">
        <section className="programmes-hero">
          <div className="programmes-hero-copy">
            <p className="eyebrow">Babyhouse to Grade RR</p>
            <h1>Learning starts<br />with play.</h1>
            <p>Play-based early learning for babies, toddlers and preschoolers, from Babyhouse to Grade RR.</p>
          </div>
          <div className="programmes-hero-image">
            <Image
              src="/images/Gemini_Generated_Image_80s83a80s83a80s8.webp"
              alt="A smiling child in a lavender beanie holding out two bright yellow play balls"
              fill
              priority
              sizes="(max-width: 700px) 100vw, 50vw"
            />
            <p>Learning through play, every day.</p>
          </div>
        </section>

        <section className="programme-options" id="programme-options" aria-labelledby="programme-options-title">
          <div className="programme-section-heading">
            <p className="eyebrow">Our programme options</p>
            <h2 id="programme-options-title">A day that fits<br />your family.</h2>
          </div>
          <div className="programme-options-grid">
            {programmeOptions.map(({ title, description }) => (
              <article className="programme-option" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="teaching-approach" id="teaching-approach" aria-labelledby="teaching-approach-title">
          <div className="teaching-approach-image">
            <Image
              src="/images/Gemini_Generated_Image_mp4jormp4jormp4j.webp"
              alt="A playful young child bending upside down with a big smile"
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
            />
          </div>
          <div className="teaching-approach-content">
            <div className="teaching-approach-heading">
              <p className="eyebrow">How children learn</p>
              <h2 id="teaching-approach-title">Play is how<br />we begin.</h2>
            </div>
            <div className="teaching-approach-copy">
              <p>Play is the primary way young children learn. Our curriculum weaves learning into enjoyable, meaningful experiences, and our daily schedule balances structured learning time with child-directed play so children stay engaged and enthusiastic.</p>
              <p>We celebrate diversity and bring multicultural perspectives into the classroom, helping children develop respect and appreciation for all people.</p>
            </div>
          </div>
        </section>

        <section className="whole-child" id="whole-child" aria-labelledby="whole-child-title">
          <div className="whole-child-intro">
            <p className="eyebrow">Growing in every direction</p>
            <h2 id="whole-child-title">The whole<br />child matters.</h2>
          </div>
          <div className="development-areas">
            {developmentAreas.map((area) => <p key={area}>{area}</p>)}
          </div>
        </section>

        <section className="school-readiness" id="school-readiness" aria-labelledby="school-readiness-title">
          <div className="readiness-heading">
            <p className="eyebrow">For our older preschoolers</p>
            <h2 id="school-readiness-title">Ready for<br />what comes next.</h2>
          </div>
          <div className="readiness-content">
            <p className="readiness-intro">We prepare our oldest children for primary school success by building:</p>
            <ul>{schoolReadiness.map((skill) => <li key={skill}>{skill}</li>)}</ul>
          </div>
        </section>

        <section className="progress-reports" id="progress-reports" aria-label="Progress reports">
          <p className="eyebrow">Growing, together</p>
          <h2>Every child receives a report twice a year, so you always know how they are growing.</h2>
        </section>

        <section className="programmes-cta" id="programmes-cta">
          <p className="eyebrow">Want to see our programmes in action?</p>
          <h2>Come say hello.</h2>
          <Link className="button button-light" href="/contact">Make an enquiry</Link>
        </section>
      </main>
    );
  }

  if (!page) notFound();

  return <main className="placeholder-page" aria-label={page.title} />;
}
