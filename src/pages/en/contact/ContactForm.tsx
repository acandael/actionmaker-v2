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
  { value: 'herr', label: 'Mr' },
  { value: 'mevr', label: 'Mrs' },
  { value: 'mx', label: 'Mx' },
];

const formSchema = z.object({
  salutation: z.string().min(1, 'Salutation is required'),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
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
        throw new Error('Something went wrong');
      }

      toast.success('Thank you for your message!', {
        description: (
          <div className="mt-2 text-muted-foreground">
            <p>We have received your inquiry and will get back to you within 24 hours.</p>
          </div>
        ),
      });

      form.reset();
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong', {
        description: 'Please try again later or contact us directly.',
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Do you have any questions?</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Do you have any questions or an idea for an activity?
          <br />
          Request free consultation
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
                    Salutation
                  </FormLabel>
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
                      First Name *
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
                      Last Name *
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
                      Phone Number
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
                    Additional Questions
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      rows={6}
                      className="bg-white/50 focus:bg-white resize-none"
                      placeholder="Tell us more about your questions..."
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
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
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
