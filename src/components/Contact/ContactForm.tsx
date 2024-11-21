import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const salutations = [
  { value: 'dhr', label: 'Dhr' },
  { value: 'mevr', label: 'Mevr' },
  { value: 'mx', label: 'Mx' },
];

const formSchema = z.object({
  salutation: z.string().min(1, 'Aanspreking is verplicht'),
  firstName: z.string().min(2, 'Voornaam moet minimaal 2 karakters bevatten'),
  lastName: z.string().min(2, 'Achternaam moet minimaal 2 karakters bevatten'),
  email: z.string().email('Ongeldig e-mailadres'),
  phone: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      salutation: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Er is iets misgegaan');
      }

      form.reset();
      toast.success('Bedankt voor je bericht!', {
        description: 'We nemen zo snel mogelijk contact met je op.',
      });
    } catch (error) {
      console.error('Error:', error);
      toast.error('Er is iets misgegaan', {
        description: 'Probeer het later opnieuw of neem contact met ons op.',
      });
    }
  };

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Heb Je Nog Vragen?</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Heb je nog vragen of heb je een idee voor een activiteit?
          <br />
          Vraag vrijblijvend advies
        </p>
      </div>

      <Card className="p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
            {/* Salutation */}
            <FormField
              control={form.control}
              name="salutation"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-sm font-medium text-foreground/80">
                    Aanspreking
                  </FormLabel>
                  <div className="flex flex-wrap gap-6">
                    {salutations.map((item) => (
                      <label
                        key={item.value}
                        className="relative flex items-center gap-3 group cursor-pointer"
                      >
                        <input
                          type="radio"
                          {...field}
                          value={item.value}
                          className="peer sr-only"
                        />
                        <div className="w-5 h-5 border-2 rounded-full border-muted-foreground/30 peer-checked:border-red-500 peer-checked:bg-red-500 transition-all duration-200">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-white scale-0 peer-checked:scale-100 transition-transform duration-200" />
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                          {item.label}
                        </span>
                      </label>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Name Fields */}
            <div className="grid sm:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="space-y-3 group">
                    <FormLabel className="text-sm font-medium text-foreground/80 group-focus-within:text-red-600">
                      Voornaam *
                    </FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="w-full px-4 py-3 rounded-xl border-2 bg-white/50 focus:bg-white focus:border-red-500 transition-all duration-300"
                        placeholder="John"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="space-y-3 group">
                    <FormLabel className="text-sm font-medium text-foreground/80 group-focus-within:text-red-600">
                      Achternaam *
                    </FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="w-full px-4 py-3 rounded-xl border-2 bg-white/50 focus:bg-white focus:border-red-500 transition-all duration-300"
                        placeholder="Doe"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Contact Fields */}
            <div className="grid sm:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-3 group">
                    <FormLabel className="text-sm font-medium text-foreground/80 group-focus-within:text-red-600">
                      Email *
                    </FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="w-full px-4 py-3 rounded-xl border-2 bg-white/50 focus:bg-white focus:border-red-500 transition-all duration-300"
                        placeholder="john.doe@company.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="space-y-3 group">
                    <FormLabel className="text-sm font-medium text-foreground/80 group-focus-within:text-red-600">
                      Telefoonnummer
                    </FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="w-full px-4 py-3 rounded-xl border-2 bg-white/50 focus:bg-white focus:border-red-500 transition-all duration-300"
                        placeholder="+32 123 45 67 89"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="space-y-3 group">
                  <FormLabel className="text-sm font-medium text-foreground/80 group-focus-within:text-red-600">
                    Bijkomende Vragen
                  </FormLabel>
                  <FormControl>
                    <textarea
                      {...field}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border-2 bg-white/50 focus:bg-white focus:border-red-500 transition-all duration-300 resize-none"
                      placeholder="Vertel ons meer over je vragen..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white group h-auto py-6 text-lg rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                Bericht Versturen
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
}
