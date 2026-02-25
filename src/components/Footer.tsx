export default function Footer() {
  return (
    <footer className="bg-rosewood-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold">Rosewood Body Shop</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Professional auto body repair and collision services. Restoring
              your vehicle to its original beauty with expert craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <a href="#services" className="transition-colors hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="transition-colors hover:text-white">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold">Contact Info</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>844 W 14th St. Eureka, CA 95501</li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="transition-colors hover:text-white"
                >
                  (707) 443-4902
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@rosewoodbodyshop.com"
                  className="transition-colors hover:text-white"
                >
                  info@rosewoodbodyshop.com
                </a>
              </li>
              <li>Mon - Fri: 8:00 AM - 5:00 PM</li>
              <li>Sat - Sun: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          &copy; {new Date().getFullYear()} Rosewood Body Shop. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
