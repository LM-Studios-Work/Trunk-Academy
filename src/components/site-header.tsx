import Link from "next/link";

const navigation = [
  ["Home", "#home"],
  ["Programmes", "#programmes"],
  ["Nutrition & Safety", "#nutrition-safety"],
  ["Admissions", "#admissions"],
  ["Contact", "#contact"],
  ["Partners & Donors", "#contact"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="#home" aria-label="Trunk Academy home">
        <span className="brand-name">TRUNK<br />ACADEMY</span>
      </Link>
      <nav aria-label="Main navigation" className="main-nav">
        {navigation.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}
      </nav>
      <a className="header-cta" href="#contact">Come say hello</a>
    </header>
  );
}
