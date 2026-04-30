import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" pt-16 pb-8 border-t border-surface-variant text-on-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-3xl text-primary">Maroc Discovery</h2>
            <p className="text-on-surface-variant font-sans text-sm leading-relaxed max-w-sm">
              Experience the sensory richness of Morocco. A boutique journey through sun-baked clay and ancient courtyards.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans font-semibold text-sm tracking-widest uppercase text-secondary">Explore</h3>
            <ul className="flex flex-col gap-3 font-sans text-sm text-on-surface-variant">
              <li><Link href="/destinations" className="hover:text-primary transition-colors">Destinations</Link></li>
              <li><Link href="/culture" className="hover:text-primary transition-colors">Culture & Heritage</Link></li>
              <li><Link href="/planner" className="hover:text-primary transition-colors">Trip Planner</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans font-semibold text-sm tracking-widest uppercase text-secondary">Contact</h3>
            <ul className="flex flex-col gap-3 font-sans text-sm text-on-surface-variant">
              <li>contact@marocdiscovery.com</li>
              <li>+212 522 123 456</li>
              <li>Medina, Marrakech, Morocco</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-surface-variant/50">
          <p className="font-sans text-xs text-on-surface-variant/80 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Maroc Discovery. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 font-sans text-xs uppercase tracking-widest text-on-surface-variant">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
