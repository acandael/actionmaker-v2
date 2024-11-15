import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Facebook, Instagram } from 'lucide-react';
import { FooterLogo } from './FooterLogo';
import { footerLinks } from './footer-data';

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-200">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <FooterLogo />
            <div className="mt-6 space-y-2">
              <p className="text-sm">Action Maker BVBA</p>
              <p className="text-sm">Hundelgemsesteenweg 445 A</p>
              <p className="text-sm">9050 Gentbrugge</p>
              <p className="text-sm">BTW: BE0716509976</p>
            </div>
            <div className="mt-6 space-y-3">
              <a href="tel:048546250" className="flex items-center text-sm hover:text-white transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                0485 46 25 05
              </a>
              <a href="mailto:info@actionmaker.be" className="flex items-center text-sm hover:text-white transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                info@actionmaker.be
              </a>
            </div>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-zinc-800" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between text-sm text-zinc-400">
          <div>
            Copyright ActionMaker {new Date().getFullYear()}
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Alle rechten voorbehouden
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Algemene voorwaarden
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}