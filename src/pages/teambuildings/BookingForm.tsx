'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';

const formSchema = z.object({
  activityTitle: z.string(),
  firstName: z.string().min(2, { error: 'Voornaam moet minimaal 2 karakters bevatten' }),
  lastName: z.string().min(2, { error: 'Achternaam moet minimaal 2 karakters bevatten' }),
  email: z.string().email({ error: 'Ongeldig e-mailadres' }),
  phone: z.string().min(10, { error: 'Ongeldig telefoonnummer' }),
  date: z.string().min(1, { error: 'Datum is verplicht' }),
  groupSize: z.string().min(1, { error: 'Aantal personen is verplicht' }),
  hours: z.string().min(1, { error: 'Aantal uren is verplicht' }),
  budget: z.string().optional(),
  location: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface BookingFormProps {
  activityTitle: string;
  isGame: boolean;
  isCityGame: boolean;
}

export function BookingForm({ activityTitle, isGame, isCityGame }: BookingFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      activityTitle,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      date: '',
      groupSize: '',
      hours: '',
      budget: '',
      location: '',
      message: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      // Trigger validation manually to ensure errors are shown
      const isValid = await form.trigger();
      
      if (!isValid) {
        toast.error('Vul alle verplichte velden in.');
        return;
      }

      const promise = fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      toast.promise(promise, {
        loading: 'Aanvraag verzenden...',
        success: () => {
          form.reset();
          return 'Bedankt voor je aanvraag! We nemen binnen 24 uur contact met je op.';
        },
        error: 'Er is iets misgegaan. Probeer het later opnieuw of neem contact met ons op.',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Er is iets misgegaan. Probeer het later opnieuw.');
    }
  };

  return (
    <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="activityTitle"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="hidden" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">
              {isGame && 'Vraag een offerte aan voor deze teambuilding/game'}
              {isCityGame && 'Vraag een offerte aan voor deze city game'}
              {!isGame && !isCityGame && 'Vraag een offerte aan voor deze teambuilding/activiteit'}
            </h3>
            <p className="text-muted-foreground">
              Vul het formulier in en we nemen binnen 24 uur contact met je op.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Voornaam</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Achternaam</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mailadres</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@company.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefoonnummer</FormLabel>
                  <FormControl>
                    <Input placeholder="+32 123 45 67 89" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gewenste datum</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="groupSize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Aantal personen</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="10" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="hours"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Aantal uren</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="2" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget (optioneel)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="1000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {!isCityGame && (
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Locatie (laat veld blank indien Action Maker locatie moet voorzien)
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Adres of stad" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bericht</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Vertel ons meer over je wensen..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
            <a href="/terms-of-service" className="text-red-600 hover:text-red-700 underline">
              algemene voorwaarden
            </a>
          </p>
        </form>
      </Form>
    </Card>
  );
}
