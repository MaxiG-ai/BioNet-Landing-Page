import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-muted/50 text-muted-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">BioNet</h3>
            <p className="text-sm">
              Innovating for a sustainable future. BioNet connects farmers, industry, and investors to source energy locally.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={24} /></Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={24} /></Link>
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={24} /></Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={24} /></Link>
            </div>
            <p className="text-sm">Email: <a href="mailto:info@bionet.example.com" className="hover:text-primary transition-colors">info@bionet.com</a></p>
            <p className="text-sm">Phone: <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a></p>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} BioNet. All rights reserved. Designed by MG.</p>
        </div>
      </div>
    </footer>
  );
}
