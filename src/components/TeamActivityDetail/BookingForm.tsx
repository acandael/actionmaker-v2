import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

// Define the form schema with Zod
const formSchema = z.object({
  activityTitle: z.string(),
  firstName: z.string().min(2, 'Voornaam moet minimaal 2 karakters bevatten'),
  lastName: z.string().min(2, 'Achternaam moet minimaal 2 karakters bevatten'),
  email: z.string().email('Ongeldig e-mailadres'),
  phone: z.string().min(10, 'Ongeldig telefoonnummer'),
  date: z.string().min(1, 'Datum is verplicht'),
  groupSize: z.string().min(1, 'Aantal personen is verplicht'),
  hours: z.string().min(1, 'Aantal uren is verplicht'),
  budget: z.string().optional(),
  location: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface BookingFormProps {
  activityTitle: string;
}

export function BookingForm({ activityTitle }: BookingFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      activityTitle,
    },
  });

  const onSubmit = async (data: FormData) => {
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

      reset();
      toast('Bedankt voor je boeking!', {
        description: 'We nemen zo snel mogelijk contact met je op.',
      });
    } catch (error) {
      console.error('Error:', error);
      toast('Er is iets misgegaan', {
        description: 'Probeer het later opnieuw of neem contact met ons op.',
      });
    }
  };

  return (
    <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" {...register('activityTitle')} />

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
              {...register('firstName')}
              className="w-full px-4 py-3 rounded-lg border bg-white/50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
              placeholder="John"
            />
            {errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message}</p>}
          </div>

          <div className="space-y-2 group">
            <label
              htmlFor="lastName"
              className="text-sm font-medium group-focus-within:text-red-600 transition-colors"
            >
              Achternaam
            </label>
            <input
              {...register('lastName')}
              className="w-full px-4 py-3 rounded-lg border bg-white/50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
              placeholder="Doe"
            />
            {errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message}</p>}
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
            {...register('email')}
            className="w-full px-4 py-3 rounded-lg border bg-white/50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
            placeholder="john.doe@company.com"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>

        <div className="space-y-2 group">
          <label
            htmlFor="phone"
            className="text-sm font-medium group-focus-within:text-red-600 transition-colors"
          >
            Telefoonnummer
          </label>
          <input
            {...register('phone')}
            className="w-full px-4 py-3 rounded-lg border bg-white/50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
            placeholder="+32 123 45 67 89"
          />
          {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
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
              {...register('date')}
              className="w-full px-4 py-3 rounded-lg border bg-white/50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
            />
            {errors.date && <p className="text-sm text-red-500">{errors.date.message}</p>}
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
              {...register('groupSize')}
              className="w-full px-4 py-3 rounded-lg border bg-white/50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
              placeholder="10"
            />
            {errors.groupSize && <p className="text-sm text-red-500">{errors.groupSize.message}</p>}
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
              {...register('hours')}
              className="w-full px-4 py-3 rounded-lg border bg-white/50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
              placeholder="2"
            />
            {errors.hours && <p className="text-sm text-red-500">{errors.hours.message}</p>}
          </div>

          <div className="space-y-2 group">
            <label
              htmlFor="budget"
              className="text-sm font-medium group-focus-within:text-red-600 transition-colors"
            >
              Budget (optioneel)
            </label>
            <input
              type="number"
              {...register('budget')}
              className="w-full px-4 py-3 rounded-lg border bg-white/50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
              placeholder="1000"
            />
            {errors.budget && <p className="text-sm text-red-500">{errors.budget.message}</p>}
          </div>
        </div>

        <div className="space-y-2 group">
          <label
            htmlFor="location"
            className="text-sm font-medium group-focus-within:text-red-600 transition-colors"
          >
            Locatie (laat veld blank indien ActionMaker locatie moet voorzien)
          </label>
          <input
            {...register('location')}
            className="w-full px-4 py-3 rounded-lg border bg-white/50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300"
            placeholder="Adres of stad"
          />
          {errors.location && <p className="text-sm text-red-500">{errors.location.message}</p>}
        </div>

        <div className="space-y-2 group">
          <label
            htmlFor="message"
            className="text-sm font-medium group-focus-within:text-red-600 transition-colors"
          >
            Bericht
          </label>
          <textarea
            {...register('message')}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border bg-white/50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 resize-none"
            placeholder="Vertel ons meer over je wensen..."
          />
          {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
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
