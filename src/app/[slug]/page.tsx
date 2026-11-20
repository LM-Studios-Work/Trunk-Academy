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
  { title: "Full Day", description: "Your child enjoys a complete day of learning, play, meals and rest, ideal for working parents." },
  { title: "Half Day", description: "A shorter morning programme that gives your child structured play and learning, with time at home for the rest of the day." },
  { title: "Hybrid", description: "A flexible mix of days and hours, so you can build a weekly routine that works around your family." },
  { title: "Day Visit", description: "Drop in for a single day to let your child experience our classrooms, play area and teachers, or to cover those occasional days you need extra support." },
];

const developmentAreas = [
  {
    title: "Growing Minds",
    description: "Through stories, songs, puzzles and hands-on activities, children build early language, number skills and a love of learning.",
  },
  {
    title: "Growing Bodies",
    description: "Outdoor play and movement help little ones develop strength, coordination and healthy habits, supported by nutritious meals each day.",
  },
  {
    title: "Growing Hearts",
    description: "Children learn to share, take turns, show kindness and express their feelings in a safe, caring environment.",
  },
  {
    title: "Growing in Faith",
    description: "Gentle Christian teaching and values shape character, helping children learn love, gratitude and respect.",
  },
  {
    title: "Growing in Confidence",
    description: "With encouragement from our teachers, children try new things, ask questions and discover what they can do.",
  },
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
            <p className="eyebrow">Learning happens through play</p>
            <h1>Where curious little minds explore, imagine and grow.</h1>
            <p>At Trunk Academy, we believe play is how children learn best. Through building, pretending, singing, sharing and exploring, little ones develop the skills they need for school and for life, all while having fun.</p>
          </div>
          <div className="programmes-hero-image">
            <Image
              src="/images/Gemini_Generated_Image_80s83a80s83a80s8.webp"
              alt="A smiling child in a lavender beanie holding out two bright yellow play balls"
              fill
              priority
              sizes="(max-width: 700px) 100vw, 50vw"
            />
            <p>Play Is How We Learn</p>
          </div>
        </section>

        <section className="programme-options" id="programme-options" aria-labelledby="programme-options-title">
          <div className="programme-section-heading">
            <p className="eyebrow">Our programme options</p>
            <h2 id="programme-options-title">We offer flexible options to suit your schedule and your child’s needs.</h2>
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
              <p className="eyebrow">How Children Grow at Trunk Academy</p>
              <h2 id="teaching-approach-title">Nurtured in mind,<br />body, heart<br />and spirit.</h2>
            </div>
            <div className="teaching-approach-copy">
              <p>Every child grows at their own pace and we celebrate each step. At Trunk Academy, we nurture the whole child through play, loving guidance and Christian values, so they are ready for school and for life.</p>
            </div>
            <div className="teaching-growth-grid">
              {developmentAreas.map(({ title, description }) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="whole-child" id="whole-child" aria-labelledby="whole-child-title">
          <div className="whole-child-intro">
            <p className="eyebrow">Supporting Every Stage of Your Child’s Development</p>
            <h2 id="whole-child-title">Cognitive, emotional, creative, physical and social growth, nurtured through play.</h2>
          </div>
          <div className="development-areas">
            <p>When children are supported in every area of growth, they flourish.</p>
            <p>We share a progress report twice a month on your child’s development, and we meet with you one-on-one to celebrate their growth and plan the way forward together.</p>
          </div>
        </section>

        <section className="school-readiness" id="school-readiness" aria-labelledby="school-readiness-title">
          <div className="readiness-heading">
            <p className="eyebrow">Ready for Primary School</p>
            <h2 id="school-readiness-title">Preparing our school-bound learners for a confident start in primary school.</h2>
          </div>
          <div className="readiness-content">
            <p className="readiness-intro">As our school-bound learners get ready for Grade R and primary school, we gently build the skills they need to step forward with confidence. Through play-based activities, they strengthen early literacy and numeracy, fine-motor skills, listening, concentration and independence, along with the social and emotional skills that help them settle into a new classroom.</p>
          </div>
        </section>

        <section className="progress-reports" id="progress-reports" aria-label="Fees that fit your family">
          <p className="eyebrow">Fees That Fit Your Family</p>
          <h2>Our fees vary depending on the programme you select, so you can choose the option that best suits your child and your family’s schedule. We also offer a sibling discount for families with more than one child at Trunk Academy.</h2>
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
