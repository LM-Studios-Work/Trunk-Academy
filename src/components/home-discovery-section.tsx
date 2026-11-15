import Image from "next/image";
import Link from "next/link";

export function HomeDiscoverySection() {
  return (
    <section className="learning-section" aria-labelledby="learning-heading">
      <div className="learning-photo">
        <Image
          src="/images/trunk-learning-moment.png"
          alt="Preschool children exploring leaves and wooden blocks together outdoors"
          fill
          sizes="(max-width: 700px) 100vw, 50vw"
        />
      </div>
      <div className="learning-copy">
        <p className="eyebrow">Little discoveries, every day</p>
        <h2 id="learning-heading">A place to wonder.</h2>
        <p>Our classroom and garden make room for hands-on discovery, new friendships, and the small wins that build confidence.</p>
        <Link className="text-link" href="/programmes">Explore our programmes</Link>
      </div>
    </section>
  );
}
