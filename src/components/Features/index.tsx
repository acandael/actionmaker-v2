import React from 'react';
import { ArrowUpDown, Users, Trophy } from 'lucide-react';

export function Features() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold tracking-tight mb-20">
          Waarom Kiezen Voor <span className="text-red-600">Action Maker</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Flexibel */}
          <div className="group p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <ArrowUpDown className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Flexibel</h3>
            <p className="text-muted-foreground">
              Een onvoorziene wijziging op het laatste moment? Geen probleem, wij zijn flexibel en kunnen jou teambuilding aanpassen aan elke omstandigheid.
            </p>
          </div>

          {/* Persoonlijk */}
          <div className="group p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Persoonlijk</h3>
            <p className="text-muted-foreground">
              In tegenstelling tot andere bedrijven werken wij niet met onderaannemers. Action Maker organiseert al zijn teambuildings zelf.
            </p>
          </div>

          {/* Gecertificeerde animatoren */}
          <div className="group p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Trophy className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Gecertificeerde animatoren</h3>
            <p className="text-muted-foreground">
              Al onze animatoren zijn gecertificeerd en experts op het vlak van de activiteiten die ze begeleiden
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}