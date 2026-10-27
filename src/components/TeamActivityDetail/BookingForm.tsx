'use client';

import { useMemo } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

type Language = 'nl' | 'fr' | 'en';

const translations = {
  nl: {
    title: 'Boek deze teambuilding/activiteit',
    intro: 'Vul het formulier in en we nemen binnen 24 uur contact met je op.',
    firstName: 'Voornaam',
    lastName: 'Achternaam',
    email: 'E-mailadres',
    phone: 'Telefoonnummer',
    date: 'Gewenste datum',
    groupSize: 'Aantal personen',
    hours: 'Aantal uren',
    budget: 'Budget (optioneel)',
    location: 'Locatie (laat leeg indien Action Maker de locatie moet voorzien)',
    locationPlaceholder: 'Adres of stad',
    message: 'Bericht',
    messagePlaceholder: 'Vertel ons meer over je wensen...',
    submit: 'Verstuur aanvraag',
    termsIntro: 'Door het formulier te versturen ga je akkoord met onze',
    terms: 'algemene voorwaarden',
    termsHref: '/terms-of-service',
    errors: {
      firstName: 'Voornaam moet minimaal 2 tekens bevatten.',
      lastName: 'Achternaam moet minimaal 2 tekens bevatten.',
      email: 'Ongeldig e-mailadres.',
      phone: 'Telefoonnummer moet minimaal 10 tekens bevatten.',
      date: 'Datum is verplicht.',
      groupSize: 'Aantal personen is verplicht.',
      hours: 'Aantal uren is verplicht.',
      required: 'Vul alle verplichte velden correct in.',
    },
    sending: 'Aanvraag verzenden...',
    success: 'Bedankt voor je aanvraag! We nemen binnen 24 uur contact met je op.',
    submitError: 'Er is iets misgegaan. Probeer het later opnieuw of neem contact met ons op.',
    genericError: 'Er is iets misgegaan. Probeer het later opnieuw.',
  },
  fr: {
    title: 'Réservez cette activité de team building',
    intro: 'Remplissez le formulaire et nous vous contacterons dans les 24 heures.',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'Adresse e-mail',
    phone: 'Numéro de téléphone',
    date: 'Date souhaitée',
    groupSize: 'Nombre de participants',
    hours: 'Nombre d’heures',
    budget: 'Budget (facultatif)',
    location: 'Lieu (laissez vide si Action Maker doit fournir le lieu)',
    locationPlaceholder: 'Adresse ou ville',
    message: 'Message',
    messagePlaceholder: 'Parlez-nous de vos souhaits...',
    submit: 'Envoyer la demande',
    termsIntro: 'En envoyant ce formulaire, vous acceptez nos',
    terms: 'conditions générales',
    termsHref: '/fr/terms-of-service',
    errors: {
      firstName: 'Le prénom doit contenir au moins 2 caractères.',
      lastName: 'Le nom doit contenir au moins 2 caractères.',
      email: 'Adresse e-mail invalide.',
      phone: 'Le numéro de téléphone doit contenir au moins 10 caractères.',
      date: 'La date est obligatoire.',
      groupSize: 'Le nombre de participants est obligatoire.',
      hours: 'Le nombre d’heures est obligatoire.',
      required: 'Veuillez remplir correctement tous les champs obligatoires.',
    },
    sending: 'Envoi de votre demande...',
    success: 'Merci pour votre demande ! Nous vous contacterons dans les 24 heures.',
    submitError: 'Une erreur s’est produite. Veuillez réessayer ou nous contacter.',
    genericError: 'Une erreur s’est produite. Veuillez réessayer.',
  },
  en: {
    title: 'Book this team-building activity',
    intro: 'Fill in the form and we will contact you within 24 hours.',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email address',
    phone: 'Phone number',
    date: 'Preferred date',
    groupSize: 'Number of participants',
    hours: 'Number of hours',
    budget: 'Budget (optional)',
    location: 'Location (leave blank if Action Maker should provide the venue)',
    locationPlaceholder: 'Address or city',
    message: 'Message',
    messagePlaceholder: 'Tell us more about what you have in mind...',
    submit: 'Send request',
    termsIntro: 'By submitting this form, you agree to our',
    terms: 'terms and conditions',
    termsHref: '/en/terms-of-service',
    errors: {
      firstName: 'First name must contain at least 2 characters.',
      lastName: 'Last name must contain at least 2 characters.',
      email: 'Invalid email address.',
      phone: 'Phone number must contain at least 10 characters.',
      date: 'Date is required.',
      groupSize: 'Number of participants is required.',
      hours: 'Number of hours is required.',
      required: 'Please complete all required fields correctly.',
    },
    sending: 'Sending your request...',
    success: 'Thank you for your request! We will contact you within 24 hours.',
    submitError: 'Something went wrong. Please try again or contact us.',
    genericError: 'Something went wrong. Please try again.',
  },
} as const;

interface BookingFormProps {
  activityTitle: string;
  isGame: boolean;
  isCityGame?: boolean;
  lang?: Language;
}

const createFormSchema = (lang: Language) => {
  const t = translations[lang];

  return z.object({
    activityTitle: z.string(),
    firstName: z.string().trim().min(2, { message: t.errors.firstName }),
    lastName: z.string().trim().min(2, { message: t.errors.lastName }),
    email: z.string().trim().email({ message: t.errors.email }),
    phone: z.string().trim().min(10, { message: t.errors.phone }),
    date: z.string().min(1, { message: t.errors.date }),
    groupSize: z.string().min(1, { message: t.errors.groupSize }),
    hours: z.string().min(1, { message: t.errors.hours }),
    budget: z.string().optional(),
    location: z.string().optional(),
    message: z.string().optional(),
  });
};

export function BookingForm({ activityTitle, lang = 'nl' }: BookingFormProps) {
  const t = translations[lang];
  const formSchema = useMemo(() => createFormSchema(lang), [lang]);

  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
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

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      // fetch does not reject automatically for HTTP errors such as 400 or 500.
      if (!response.ok) {
        throw new Error(`Booking request failed: ${response.status}`);
      }

      toast.success(t.success);
      form.reset({
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
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error(t.submitError);
    }
  };

  return (
    <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, () => {
            toast.error(t.errors.required);
          })}
          className="space-y-8"
        >
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
            <h3 className="text-2xl font-semibold">{t.title}</h3>
            <p className="text-muted-foreground">{t.intro}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.firstName}</FormLabel>
                  <FormControl>
                    <Input autoComplete="given-name" placeholder="John" {...field} />
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
                  <FormLabel>{t.lastName}</FormLabel>
                  <FormControl>
                    <Input autoComplete="family-name" placeholder="Doe" {...field} />
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
                  <FormLabel>{t.email}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      autoComplete="email"
                      placeholder="john.doe@company.com"
                      {...field}
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
                <FormItem>
                  <FormLabel>{t.phone}</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      autoComplete="tel"
                      placeholder="+32 123 45 67 89"
                      {...field}
                    />
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
                  <FormLabel>{t.date}</FormLabel>
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
                  <FormLabel>{t.groupSize}</FormLabel>
                  <FormControl>
                    <Input type="number" min="1" placeholder="10" {...field} />
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
                  <FormLabel>{t.hours}</FormLabel>
                  <FormControl>
                    <Input type="number" min="1" placeholder="2" {...field} />
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
                  <FormLabel>{t.budget}</FormLabel>
                  <FormControl>
                    <Input type="number" min="0" placeholder="1000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.location}</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="street-address"
                    placeholder={t.locationPlaceholder}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.message}</FormLabel>
                <FormControl>
                  <Textarea placeholder={t.messagePlaceholder} className="resize-none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full bg-red-600 hover:bg-red-700 text-white group h-auto py-4 text-lg rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="flex items-center justify-center gap-2">
              {form.formState.isSubmitting ? t.sending : t.submit}
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>

          <p className="text-sm text-center text-muted-foreground">
            {t.termsIntro}{' '}
            <a href={t.termsHref} className="text-red-600 hover:text-red-700 underline">
              {t.terms}
            </a>
          </p>
        </form>
      </Form>
    </Card>
  );
}
