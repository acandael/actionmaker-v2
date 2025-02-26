import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BQZACKfH.mjs';
import 'kleur/colors';
import { B as Button, $ as $$Layout } from '../chunks/Layout_DuKO7j-Q.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import React__default from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { C as Card } from '../chunks/card_hFKS_J0s.mjs';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { F as Form, a as FormField, b as FormItem, c as FormLabel, d as FormControl, e as FormMessage, I as Input, T as Textarea } from '../chunks/textarea_BaMLnsWs.mjs';
import { R as RadioGroup, a as RadioGroupItem, $ as $$ContactInfo, b as $$ContactFeatures } from '../chunks/ContactFeatures_BY-nMR6f.mjs';
export { renderers } from '../renderers.mjs';

const salutations = [
  { value: "dhr", label: "Dhr" },
  { value: "mevr", label: "Mevr" },
  { value: "mx", label: "Mx" }
];
const formSchema = z.object({
  salutation: z.string().min(1, "Aanspreking is verplicht"),
  firstName: z.string().min(2, "Voornaam moet minimaal 2 karakters bevatten"),
  lastName: z.string().min(2, "Achternaam moet minimaal 2 karakters bevatten"),
  email: z.string().email("Ongeldig e-mailadres"),
  phone: z.string().optional(),
  message: z.string().optional()
});
function ContactForm() {
  const [isPending, setIsPending] = React__default.useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      salutation: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    }
  });
  const onSubmit = async (data) => {
    setIsPending(true);
    const toastId = toast.loading("Bericht verzenden...");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.error || "Er is iets misgegaan");
      }
      toast.success("Bedankt voor je bericht!", {
        id: toastId,
        description: "We hebben je aanvraag goed ontvangen en nemen binnen 24 uur contact met je op.",
        duration: 5e3
      });
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Er is iets misgegaan", {
        id: toastId,
        description: "Probeer het later opnieuw of neem contact met ons op.",
        duration: 5e3
      });
    } finally {
      setIsPending(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold tracking-tight", children: "Heb je nog vragen?" }),
      /* @__PURE__ */ jsxs("p", { className: "text-lg text-muted-foreground max-w-2xl", children: [
        "Heb je nog vragen of heb je een idee voor een activiteit?",
        /* @__PURE__ */ jsx("br", {}),
        "Vraag vrijblijvend advies"
      ] })
    ] }),
    /* @__PURE__ */ jsx(Card, { className: "p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300", children: /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-10", children: [
      /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "salutation",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "space-y-3", children: [
            /* @__PURE__ */ jsx(FormLabel, { className: "text-sm font-medium text-foreground/80", children: "Aanspreking" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
              RadioGroup,
              {
                onValueChange: field.onChange,
                defaultValue: field.value,
                className: "flex flex-wrap gap-6",
                children: salutations.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsx(RadioGroupItem, { value: item.value, id: item.value }),
                  /* @__PURE__ */ jsx(
                    FormLabel,
                    {
                      htmlFor: item.value,
                      className: "text-sm text-muted-foreground hover:text-foreground transition-colors duration-200",
                      children: item.label
                    }
                  )
                ] }, item.value))
              }
            ) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "firstName",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "space-y-3 group", children: [
              /* @__PURE__ */ jsx(FormLabel, { className: "text-sm font-medium text-foreground/80 group-focus-within:text-red-600", children: "Voornaam *" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { ...field, className: "bg-white/50 focus:bg-white", placeholder: "John" }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "lastName",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "space-y-3 group", children: [
              /* @__PURE__ */ jsx(FormLabel, { className: "text-sm font-medium text-foreground/80 group-focus-within:text-red-600", children: "Achternaam *" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { ...field, className: "bg-white/50 focus:bg-white", placeholder: "Doe" }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "email",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "space-y-3 group", children: [
              /* @__PURE__ */ jsx(FormLabel, { className: "text-sm font-medium text-foreground/80 group-focus-within:text-red-600", children: "Email *" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                Input,
                {
                  ...field,
                  className: "bg-white/50 focus:bg-white",
                  placeholder: "john.doe@company.com",
                  type: "email"
                }
              ) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "phone",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "space-y-3 group", children: [
              /* @__PURE__ */ jsx(FormLabel, { className: "text-sm font-medium text-foreground/80 group-focus-within:text-red-600", children: "Telefoonnummer" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                Input,
                {
                  ...field,
                  className: "bg-white/50 focus:bg-white",
                  placeholder: "+32 123 45 67 89",
                  type: "tel"
                }
              ) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "message",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "space-y-3 group", children: [
            /* @__PURE__ */ jsx(FormLabel, { className: "text-sm font-medium text-foreground/80 group-focus-within:text-red-600", children: "Bijkomende vragen" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
              Textarea,
              {
                ...field,
                rows: 6,
                className: "bg-white/50 focus:bg-white resize-none",
                placeholder: "Vertel ons meer over je vragen..."
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
          disabled: isPending,
          className: "w-full bg-red-600 hover:bg-red-700 text-white group h-auto py-4 text-lg rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300",
          children: /* @__PURE__ */ jsx("span", { className: "flex items-center justify-center gap-2", children: isPending ? /* @__PURE__ */ jsx(Fragment, { children: "Verzenden..." }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            "Bericht versturen",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" })
          ] }) })
        }
      )
    ] }) }) })
  ] });
}

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact | Action Maker", "description": "Neem contact op met ons voor meer informatie over onze teambuilding activiteiten." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 pt-20"> <div class="grid lg:grid-cols-2 gap-12 items-start"> ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Contact/ContactForm.tsx", "client:component-export": "ContactForm" })} <div class="space-y-12"> ${renderComponent($$result2, "ContactInfo", $$ContactInfo, {})} ${renderComponent($$result2, "ContactFeatures", $$ContactFeatures, {})} </div> </div> </div> ` })}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/contact.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
