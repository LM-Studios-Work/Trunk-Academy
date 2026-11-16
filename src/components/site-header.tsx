import Link from "next/link";

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Programmes", href: "/programmes" },
  { label: "Nutrition & Safety", href: "/nutrition-safety" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
  { label: "Partners & Donors", href: "/partners-donors" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Trunk Academy home">
        <span className="brand-name">TRUNK<br />ACADEMY</span>
      </Link>
      <nav aria-label="Main navigation" className="main-nav">
        {navigation.map(({ label, href }) => <Link href={href} key={label}>{label}</Link>)}
      </nav>
      <Link className="header-cta" href="/contact" aria-label="Come say hello"><span className="header-cta-label">Come say hello</span><span className="header-cta-arrow" aria-hidden="true">→</span></Link>
    </header>
  );
}
