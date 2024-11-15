import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative bg-background py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Een Leuke Dag Zonder Zorgen
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
                Het Team Versterkt!
              </h3>
            </div>
            
            <Button 
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white group"
            >
              Vind je ideale teambuilding
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] lg:h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1200"
              alt="Team Archery Activity"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}