import Link from "next/link";
import { navigation } from "@/components/site-navigation";

const exploreLinks = navigation.slice(0, 4);
const communityLinks = navigation.slice(4);

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand-block">
        <Link className="brand footer-brand" href="/" aria-label="Trunk Academy home">
          <span className="brand-name">TRUNK<br />ACADEMY</span>
        </Link>
        <p>Little beginnings, cared for with love.</p>
      </div>
      <nav aria-label="Footer navigation" className="footer-navigation">
        <div className="footer-group">
          <h2>Explore</h2>
          {exploreLinks.map(({ label, href }) => <Link href={href} key={href}>{label}</Link>)}
        </div>
        <div className="footer-group">
          <h2>Connect</h2>
          {communityLinks.map(({ label, href }) => <Link href={href} key={href}>{label}</Link>)}
        </div>
      </nav>
      <div className="footer-bottom">
        <p className="footer-copy">© {new Date().getFullYear()} Trunk Academy</p>
        <Link href="#top" className="footer-top">Back to top</Link>
      </div>
    </footer>
  );
}
