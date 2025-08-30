import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Q0G1hIgh.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DoBYlXah.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import React__default from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { B as Button } from '../../chunks/Footer_D0QNC7dQ.mjs';
import { C as Card } from '../../chunks/card_QPsbPOGj.mjs';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { F as Form, a as FormField, b as FormItem, c as FormLabel, d as FormControl, e as FormMessage, I as Input, T as Textarea } from '../../chunks/textarea_Go5U8hV8.mjs';
import { R as RadioGroup, a as RadioGroupItem, $ as $$ContactInfo, b as $$ContactFeatures } from '../../chunks/ContactFeatures_D9VJ1Atl.mjs';
export { renderers } from '../../renderers.mjs';

const salutations = [
  { value: "herr", label: "Mr" },
  { value: "mevr", label: "Mrs" },
  { value: "mx", label: "Mx" }
];
const formSchema = z.object({
  salutation: z.string().min(1, { error: "Salutation is required" }),
  firstName: z.string().min(2, { error: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { error: "Last name must be at least 2 characters" }),
  email: z.string().email({ error: "Invalid email address" }),
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
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      toast.success("Thank you for your message!", {
        description: /* @__PURE__ */ jsx("div", { className: "mt-2 text-muted-foreground", children: /* @__PURE__ */ jsx("p", { children: "We have received your inquiry and will get back to you within 24 hours." }) })
      });
      form.reset();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong", {
        description: "Please try again later or contact us directly."
      });
    } finally {
      setIsPending(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold tracking-tight", children: "Do you have any questions?" }),
      /* @__PURE__ */ jsxs("p", { className: "text-lg text-muted-foreground max-w-2xl", children: [
        "Do you have any questions or an idea for an activity?",
        /* @__PURE__ */ jsx("br", {}),
        "Request free consultation"
      ] })
    ] }),
    /* @__PURE__ */ jsx(Card, { className: "p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300", children: /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-10", children: [
      /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "salutation",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "space-y-3", children: [
            /* @__PURE__ */ jsx(FormLabel, { className: "text-sm font-medium text-foreground/80", children: "Salutation" }),
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
              /* @__PURE__ */ jsx(FormLabel, { className: "text-sm font-medium text-foreground/80 group-focus-within:text-red-600", children: "First Name *" }),
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
              /* @__PURE__ */ jsx(FormLabel, { className: "text-sm font-medium text-foreground/80 group-focus-within:text-red-600", children: "Last Name *" }),
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
              /* @__PURE__ */ jsx(FormLabel, { className: "text-sm font-medium text-foreground/80 group-focus-within:text-red-600", children: "Phone Number" }),
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
            /* @__PURE__ */ jsx(FormLabel, { className: "text-sm font-medium text-foreground/80 group-focus-within:text-red-600", children: "Additional Questions" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
              Textarea,
              {
                ...field,
                rows: 6,
                className: "bg-white/50 focus:bg-white resize-none",
                placeholder: "Tell us more about your questions..."
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
          children: /* @__PURE__ */ jsx("span", { className: "flex items-center justify-center gap-2", children: isPending ? /* @__PURE__ */ jsx(Fragment, { children: "Sending..." }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            "Send Message",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" })
          ] }) })
        }
      )
    ] }) }) })
  ] });
}

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact | Action Maker", "description": "Contact us for more information about our team building activities." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 pt-20"> <div class="grid lg:grid-cols-2 gap-12 items-start"> ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/en/contact/ContactForm", "client:component-export": "ContactForm" })} <div class="space-y-12"> ${renderComponent($$result2, "ContactInfo", $$ContactInfo, {})} ${renderComponent($$result2, "ContactFeatures", $$ContactFeatures, {})} </div> </div> </div> ` })}`;
}, "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/en/contact.astro", void 0);

const $$file = "/Users/anthonycandaele/Projects/ActionMaker/website/src/pages/en/contact.astro";
const $$url = "/en/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
