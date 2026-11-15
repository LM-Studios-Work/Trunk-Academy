import type { Metadata } from "next";
import { notFound } from "next/navigation";

const placeholderPages = [
  { slug: "programmes", title: "Programmes" },
  { slug: "nutrition-safety", title: "Nutrition & Safety" },
  { slug: "admissions", title: "Admissions" },
  { slug: "contact", title: "Contact" },
  { slug: "partners-donors", title: "Partners & Donors" },
];

export function generateStaticParams() {
  return placeholderPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = placeholderPages.find((item) => item.slug === slug);

  return page ? { title: `${page.title} | Trunk Academy` } : {};
}

export default async function PlaceholderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = placeholderPages.find((item) => item.slug === slug);

  if (!page) notFound();

  return <main className="placeholder-page" aria-label={page.title} />;
}
