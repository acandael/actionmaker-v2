import React from 'react';
import { cn } from '@/lib/utils';

interface NavLinksProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/teambuildings', label: 'Teambuildings' },
  { href: '/concepten', label: 'Concepten' },
  { href: '/over-actionmaker', label: 'Over ActionMaker' },
  { href: '/contact', label: 'Contact' },
];

export function NavLinks({ mobile, onNavigate }: NavLinksProps) {
  return (
    <ul 
      className={cn(
        "flex",
        mobile ? "flex-col space-y-6" : "space-x-8"
      )}
      role="list"
    >
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className={cn(
              "text-white/90 hover:text-white transition-colors relative group inline-block",
              mobile ? "text-2xl font-semibold" : "text-sm font-medium"
            )}
            onClick={onNavigate}
          >
            {link.label}
            <span 
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" 
              aria-hidden="true"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}