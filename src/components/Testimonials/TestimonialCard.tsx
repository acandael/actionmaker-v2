import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

export function TestimonialCard({ name, role, content, image }: TestimonialCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('');
  
  return (
    <Card className="relative">
      <CardContent className="pt-12 pb-8 px-8">
        <div className="absolute -top-6 left-8">
          <Avatar className="h-12 w-12 ring-4 ring-background">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </div>

        <Quote className="absolute top-8 right-8 h-6 w-6 text-muted-foreground/10" />
        
        <blockquote className="mb-6">
          <p className="text-muted-foreground leading-relaxed relative z-10">
            {content}
          </p>
        </blockquote>

        <footer>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </footer>
      </CardContent>
    </Card>
  );
}