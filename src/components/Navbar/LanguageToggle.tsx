import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

interface LanguageToggleProps {
  mobile?: boolean;
}

export function LanguageToggle({ mobile }: LanguageToggleProps) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "text-white/90 hover:text-white focus-visible:ring-2 focus-visible:ring-red-500",
        mobile ? "text-2xl font-semibold" : "text-sm font-medium"
      )}
      aria-label="Wissel taal"
    >
      NL
    </Button>
  );
}