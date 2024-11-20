import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface BookingFormProps {
  activityTitle: string;
}

export function BookingForm({ activityTitle }: BookingFormProps) {
  const [showSuccess, setShowSuccess] = React.useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Er is iets misgegaan');
      }

      // Reset form and show success message
      formRef.current?.reset();
      setShowSuccess(true);
      // Hide message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error:', error);
      alert('Er is iets misgegaan. Probeer het later opnieuw.');
    }
  };

  return (
    <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      {showSuccess && (
        <div className="mb-6 rounded-xl bg-green-50 p-4 text-green-700 border border-green-200">
          Bedankt voor je boeking! We nemen zo snel mogelijk contact met je op.
        </div>
      )}

      <form ref={formRef} className="space-y-8" onSubmit={handleSubmit}>
        <input type="hidden" name="activityTitle" value={activityTitle} />

        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">Boek deze activiteit</h3>
          <p className="text-muted-foreground">
            Vul het formulier in en we nemen binnen 24 uur contact met je op.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2 group">
            <label
              htmlFor="firstName"
              className="text-sm font-medium group-focus-within:text-red-600 transition-colors"
            >
              Voornaam
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-4 py-3 rounded-lg border bg-white/50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
              placeholder="John"
            />
          </div>

          <div className="space-y-2 group">
            <label
              htmlFor="lastName"
              className="text-sm font-medium group-focus-within:text-red-600 transition-colors"
            >
              Achternaam
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-4 py-3 rounded-lg border bg-white/50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="space-y-2 group">
          <label
            htmlFor="email"
            className="text-sm font-medium group-focus-within:text-red-600 transition-colors"
          >
            E-mailadres
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg border bg-white/50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
            placeholder="john.doe@company.com"
          />
        </div>

        <div className="space-y-2 group">
          <label
            htmlFor="phone"
            className="text-sm font-medium group-focus-within:text-red-600 transition-colors"
          >
            Telefoonnummer
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 rounded-lg border bg-white/50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
            placeholder="+32 123 45 67 89"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2 group">
            <label
              htmlFor="date"
              className="text-sm font-medium group-focus-within:text-red-600 transition-colors"
            >
              Gewenste datum
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              className="w-full px-4 py-3 rounded-lg border bg-white/50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
            />
          </div>

          <div className="space-y-2 group">
            <label
              htmlFor="groupSize"
              className="text-sm font-medium group-focus-within:text-red-600 transition-colors"
            >
              Aantal personen
            </label>
            <input
              type="number"
              id="groupSize"
              name="groupSize"
              min="1"
              required
              className="w-full px-4 py-3 rounded-lg border bg-white/50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
              placeholder="10"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2 group">
            <label
              htmlFor="hours"
              className="text-sm font-medium group-focus-within:text-red-600 transition-colors"
            >
              Aantal uren
            </label>
            <input
              type="number"
              id="hours"
              name="hours"
              min="1"
              required
              className="w-full px-4 py-3 rounded-lg border bg-white/50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
              placeholder="2"
            />
          </div>

          <div className="space-y-2 group">
            <label
              htmlFor="budget"
              className="text-sm font-medium group-focus-within:text-red-600 transition-colors"
            >
              Budget
            </label>
            <input
              type="number"
              id="budget"
              name="budget"
              min="0"
              required
              className="w-full px-4 py-3 rounded-lg border bg-white/50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
              placeholder="1000"
            />
          </div>
        </div>

        <div className="space-y-2 group">
          <label
            htmlFor="location"
            className="text-sm font-medium group-focus-within:text-red-600 transition-colors"
          >
            Locatie
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            className="w-full px-4 py-3 rounded-lg border bg-white/50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
            placeholder="Adres of stad"
          />
        </div>

        <div className="space-y-2 group">
          <label
            htmlFor="message"
            className="text-sm font-medium group-focus-within:text-red-600 transition-colors"
          >
            Bericht
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 rounded-lg border bg-white/50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 resize-none"
            placeholder="Vertel ons meer over je wensen..."
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white group h-auto py-4 text-lg rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <span className="flex items-center justify-center gap-2">
            Verstuur aanvraag
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Button>

        <p className="text-sm text-center text-muted-foreground">
          Door het formulier te versturen ga je akkoord met onze{' '}
          <a href="#" className="text-red-600 hover:text-red-700 underline">
            algemene voorwaarden
          </a>
        </p>
      </form>
    </Card>
  );
}
