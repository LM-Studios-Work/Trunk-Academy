import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/components/site-navigation";

const exploreLinks = navigation.slice(0, 4);
const communityLinks = navigation.slice(4);

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand-block">
        <Link className="brand footer-brand" href="/" aria-label="Trunk Academy home">
          <Image
            src="/trunk academy logo.png"
            alt="Trunk Academy logo"
            width={46}
            height={69}
            className="brand-logo footer-brand-logo"
          />
          <span className="brand-name">Trunk Academy</span>
        </Link>
        <p>The start of something beautiful.</p>
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
        <div className="footer-bottom-main">
          <p className="footer-copy">© {new Date().getFullYear()} Trunk Academy · NPO 269-171</p>
          <a href="#top" className="footer-top">Back to top</a>
        </div>
        <div className="footer-credit">
          <a
            href="https://www.lmwebdesign.co.za/"
            target="_blank"
            rel="noopener noreferrer"
          >
            designed by lmwebdesign
          </a>
        </div>
      </div>
    </footer>
  );
}
