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
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';

const salutations = [
  { value: 'dhr', label: 'Monsieur' },
  { value: 'mevr', label: 'Madame' },
  { value: 'mx', label: 'Mx' },
];

const formSchema = z.object({
  salutation: z.string().min(1, { message: 'La salutation est obligatoire' }),
  firstName: z.string().min(2, { message: 'Le prénom est obligatoire' }),
  lastName: z.string().min(2, { message: 'Le nom de famille est obligatoire' }),
  email: z.string().email({ message: 'Adresse e-mail invalide' }),
  phone: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isPending, setIsPending] = React.useState(false);
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
    setIsPending(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Une erreur est survenue');
      }

      toast.success('Merci pour votre message!', {
        description: (
          <div className="mt-2 text-muted-foreground">
            <p>Nous avons bien reçu votre demande et nous vous contacterons dans les 24 heures.</p>
          </div>
        ),
      });

      form.reset();
    } catch (error) {
      console.error('Error:', error);
      toast.error('Er is iets misgegaan', {
        description: 'Essayez à nouveau plus tard ou contactez-nous.',
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Vous avez encore des questions?</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Vous avez encore des questions ou une idée pour une activité?
          <br />
          Demande conseil gratuit
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
                  <FormLabel className="text-sm font-medium text-foreground/80">Civilité</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-wrap gap-6"
                    >
                      {salutations.map((item) => (
                        <div key={item.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={item.value} id={item.value} />
                          <FormLabel
                            htmlFor={item.value}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                          >
                            {item.label}
                          </FormLabel>
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
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
                      Prénom *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-white/50 focus:bg-white" placeholder="John" />
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
                      Nom de famille *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-white/50 focus:bg-white" placeholder="Doe" />
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
                      <Input
                        {...field}
                        className="bg-white/50 focus:bg-white"
                        placeholder="john.doe@company.com"
                        type="email"
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
                      Numéro de téléphone
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-white/50 focus:bg-white"
                        placeholder="+32 123 45 67 89"
                        type="tel"
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
                    Questions supplémentaires
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      rows={6}
                      className="bg-white/50 focus:bg-white resize-none"
                      placeholder="Vertel ons meer over je vragen..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-red-600 hover:bg-red-700 text-white group h-auto py-4 text-lg rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                {isPending ? (
                  <>Envoi...</>
                ) : (
                  <>
                    Envoyer le message
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </span>
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
}
