import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { B as Button } from './Footer_CRbhKRCs.mjs';
import { C as Card } from './card_Ca6Ege_o.mjs';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { F as Form, a as FormField, b as FormItem, d as FormControl, I as Input, c as FormLabel, e as FormMessage, T as Textarea } from './textarea_CZuWyFLd.mjs';
import { b as createAstro, c as createComponent, e as addAttribute, aj as renderScript, a as renderTemplate } from './astro/server_Q0G1hIgh.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                              */

const formSchema = z.object({
  activityTitle: z.string(),
  firstName: z.string().min(2, { message: "Voornaam moet minimaal 2 karakters bevatten" }),
  lastName: z.string().min(2, { message: "Achternaam moet minimaal 2 karakters bevatten" }),
  email: z.string().email({ message: "Ongeldig e-mailadres" }),
  phone: z.string().min(10, { message: "Ongeldig telefoonnummer" }),
  date: z.string().min(1, { message: "Datum is verplicht" }),
  groupSize: z.string().min(1, { message: "Aantal personen is verplicht" }),
  hours: z.string().min(1, { message: "Aantal uren is verplicht" }),
  budget: z.string().optional(),
  location: z.string().optional(),
  message: z.string().optional()
});
function BookingForm({ activityTitle, isGame, isCityGame }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      activityTitle,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      date: "",
      groupSize: "",
      hours: "",
      budget: "",
      location: "",
      message: ""
    }
  });
  const onSubmit = async (data) => {
    try {
      const isValid = await form.trigger();
      if (!isValid) {
        toast.error("Vul alle verplichte velden in.");
        return;
      }
      const promise = fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      toast.promise(promise, {
        loading: "Aanvraag verzenden...",
        success: () => {
          form.reset();
          return "Bedankt voor je aanvraag! We nemen binnen 24 uur contact met je op.";
        },
        error: "Er is iets misgegaan. Probeer het later opnieuw of neem contact met ons op."
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Er is iets misgegaan. Probeer het later opnieuw.");
    }
  };
  return /* @__PURE__ */ jsx(Card, { className: "p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-8", children: [
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "activityTitle",
        render: ({ field }) => /* @__PURE__ */ jsx(FormItem, { children: /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { type: "hidden", ...field }) }) })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-semibold", children: [
        isGame && "Vraag een offerte aan voor deze teambuilding/game",
        isCityGame && "Vraag een offerte aan voor deze city game",
        !isGame && !isCityGame && "Vraag een offerte aan voor deze teambuilding/activiteit"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Vul het formulier in en we nemen binnen 24 uur contact met je op." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "firstName",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "Voornaam" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "John", ...field }) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "lastName",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "Achternaam" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Doe", ...field }) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "email",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "E-mailadres" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "john.doe@company.com", ...field }) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "phone",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "Telefoonnummer" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "+32 123 45 67 89", ...field }) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "date",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "Gewenste datum" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { type: "date", ...field }) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "groupSize",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "Aantal personen" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { type: "number", placeholder: "10", ...field }) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "hours",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "Aantal uren" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { type: "number", placeholder: "2", ...field }) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "budget",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "Budget (optioneel)" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { type: "number", placeholder: "1000", ...field }) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      )
    ] }),
    !isCityGame && /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "location",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "Locatie (laat veld blank indien Action Maker locatie moet voorzien)" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Adres of stad", ...field }) }),
          /* @__PURE__ */ jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "message",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "Bericht" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
            Textarea,
            {
              placeholder: "Vertel ons meer over je wensen...",
              className: "resize-none",
              ...field
            }
          ) }),
          /* @__PURE__ */ jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        type: "submit",
        className: "w-full bg-red-600 hover:bg-red-700 text-white group h-auto py-4 text-lg rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300",
        children: /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center gap-2", children: [
          "Verstuur aanvraag",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs("p", { className: "text-sm text-center text-muted-foreground", children: [
      "Door het formulier te versturen ga je akkoord met onze",
      " ",
      /* @__PURE__ */ jsx("a", { href: "/terms-of-service", className: "text-red-600 hover:text-red-700 underline", children: "algemene voorwaarden" })
    ] })
  ] }) }) });
}

const $$Astro = createAstro("https://www.actionmaker.be");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/anthonycandaele/Projects/ActionMaker/website/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/node_modules/astro/components/ClientRouter.astro", void 0);

export { $$ClientRouter as $, BookingForm as B };
