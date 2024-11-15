import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center" aria-label="Hero section">
      {/* Background Image with Preload */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&q=80&w=2000"
          alt=""
          role="presentation"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
          Een breed gamma van
          <br />
          <span className="text-red-500 inline-block mt-2">unieke</span> teambuildings
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
          Versterk je team met een leuke dag zonder zorgen
        </p>
        <Button 
          size="lg"
          className="bg-red-600 hover:bg-red-700 text-white group px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Vind je ideale teambuilding"
        >
          Vind je ideale teambuilding
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        role="button"
        aria-label="Scroll naar beneden"
      >
        <div className="w-1 h-12 rounded-full bg-white/30">
          <div className="w-full h-1/2 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}