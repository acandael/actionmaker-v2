import React from 'react';

interface SectionTitleProps {
  subtitle: string;
  title: string;
}

export function SectionTitle({ subtitle, title }: SectionTitleProps) {
  return (
    <div className="text-center mb-20">
      <h2 className="text-lg font-medium text-muted-foreground mb-3">
        {subtitle}
      </h2>
      <h3 className="text-4xl font-bold tracking-tight">
        {title}
      </h3>
      <div className="mt-4 w-24 h-1 bg-primary mx-auto rounded-full" />
    </div>
  );
}