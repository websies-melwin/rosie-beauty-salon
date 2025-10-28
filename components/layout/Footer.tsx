import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-light-yellow pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Business Information */}
          <div>
            <h3 className="text-lg font-serif font-bold text-dark-gray mb-4">
              Rosie Beauty Salon
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:rosiebeautyst@gmail.com"
                className="flex items-center text-dark-gray hover:text-accent-gold transition-colors group"
              >
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-sm">rosiebeautyst@gmail.com</span>
              </a>
              <a
                href="tel:07414601010"
                className="flex items-center text-dark-gray hover:text-accent-gold transition-colors group"
              >
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-sm">07414 601010 (Text me)</span>
              </a>
              <div className="flex items-start text-dark-gray">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p>Orchard Street, 49C</p>
                  <p>Weston-super-Mare</p>
                  <p>BS23 1RJ</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Business Hours */}
          <div>
            <h3 className="text-lg font-serif font-bold text-dark-gray mb-4">
              Hours
            </h3>
            <div className="space-y-2 text-sm text-dark-gray">
              <div className="flex justify-between">
                <span className="font-medium">Mon, Wed, Fri:</span>
                <span>9 AM - 8 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Tue, Thu:</span>
                <span>9 AM - 6 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sat:</span>
                <span>10 AM - 2 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sun:</span>
                <span className="text-accent-gold font-semibold">CLOSED</span>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold text-dark-gray mb-4">
              Quick Links
            </h3>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block text-sm text-dark-gray hover:text-accent-gold transition-colors"
              >
                Home
              </Link>
              <Link
                href="/face-skin"
                className="block text-sm text-dark-gray hover:text-accent-gold transition-colors"
              >
                Face & Skin
              </Link>
              <Link
                href="/laser-hair-removal"
                className="block text-sm text-dark-gray hover:text-accent-gold transition-colors"
              >
                Laser Hair Removal
              </Link>
              <Link
                href="/gallery"
                className="block text-sm text-dark-gray hover:text-accent-gold transition-colors"
              >
                Before & After
              </Link>
              <Link
                href="/about"
                className="block text-sm text-dark-gray hover:text-accent-gold transition-colors"
              >
                About Me
              </Link>
            </nav>
          </div>

          {/* Column 4: Follow Us & Legal */}
          <div>
            <h3 className="text-lg font-serif font-bold text-dark-gray mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.instagram.com/rosiebeautyst"
                className="text-dark-gray hover:text-accent-gold transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61575707164944"
                className="text-dark-gray hover:text-accent-gold transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <div className="space-y-2 text-sm text-medium-gray">
              <Link
                href="#"
                className="block hover:text-accent-gold transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="#"
                className="block hover:text-accent-gold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="block hover:text-accent-gold transition-colors"
              >
                Refund Policy
              </Link>
              <Link
                href="#"
                className="block hover:text-accent-gold transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-beige pt-6 text-center">
          <p className="text-sm text-medium-gray">
            © {new Date().getFullYear()} Rosie Beauty Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
