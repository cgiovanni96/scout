"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/ui/form";

import { Input } from "@/src/ui/input";
import { Button } from "@/src/ui/button";
import { RadioGroup, RadioGroupItem } from "@/src/ui/radio-group";
import { Textarea } from "@/src/ui/textarea";
import { sendEmail } from "@/src/actions";
import { Checkbox } from "@/components/ui/checkbox";

const defaultMessage = "Campo obbligatorio";
const defaultPlaceHolder = "La tua risposta";

const schema = z.object({
  name: z.string().min(1, defaultMessage),
  birthDate: z.string().min(1, defaultMessage),
  emailAddress: z.string().email("Inserisci un indirizzo email valido"),
  parentName: z.string().min(1, defaultMessage),
  residence: z.string().min(1, defaultMessage),
  hasSiblings: z.string(),
  siblings: z.string().optional(),
  phone: z.string().min(1, defaultMessage),
  additionalInfo: z.string().min(1, defaultMessage),
  groupKnowledge: z.string().min(1, defaultMessage),

  privacy: z
    .boolean()
    .default(false)
    .refine((value) => value === true),
});

export type Schema = z.infer<typeof schema>;

export const EnrollmentForm = () => {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      birthDate: "",
      parentName: "",
      residence: "",
      emailAddress: "",
      hasSiblings: "No",
      siblings: "",
      phone: "",
      additionalInfo: "",
      groupKnowledge: "",
      privacy: false,
    },
  });

  const onSubmit = async (data: Schema) => {
    const response = await sendEmail(data);
    if (response.state === "success") {
      toast("Mail inviata con successo", {
        description:
          "Grazie per aver compilato il form, ti risponderemo al più presto",
      });
    } else {
      toast("Qualcosa è andato storto, riprova più tardi", {
        className: "bg-red-500",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-white p-4 space-y-6 shadow-md rounded-md"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome e Cognome di vostro/a FIGLIO/A</FormLabel>
              <FormControl>
                <Input placeholder={defaultPlaceHolder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="birthDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Data di nascita</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  placeholder={defaultPlaceHolder}
                  {...field}
                  value={
                    field.value.length > 0
                      ? new Date(field.value).toISOString().split("T")[0]
                      : new Date().toISOString().split("T")[0]
                  }
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Indirizzo email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder={defaultPlaceHolder}
                  {...field}
                />
              </FormControl>

              <FormDescription>Necessario per contattarvi.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="parentName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome e Cognome di un genitore/tutore</FormLabel>
              <FormControl>
                <Input placeholder={defaultPlaceHolder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="residence"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Luogo e via di residenza</FormLabel>
              <FormControl>
                <Input placeholder={defaultPlaceHolder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hasSiblings"
          render={({ field }) => (
            <FormItem className="space-y-3 ">
              <FormLabel>Ha fratelli/sorelle in Gruppo?</FormLabel>
              <FormControl className="rounded-md border border-input p-2">
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Si" />
                    </FormControl>
                    <FormLabel className="font-normal">Si</FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="No" />
                    </FormControl>
                    <FormLabel className="font-normal">No</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="siblings"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Indicare nome, anno di nascita e branca dei fratelli/sorelle
                presenti in gruppo
              </FormLabel>
              <FormControl>
                <Input placeholder={defaultPlaceHolder} {...field} />
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
              <FormLabel>Numero di telefono </FormLabel>
              <FormControl>
                <Input placeholder={defaultPlaceHolder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="groupKnowledge"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Come siete venuti a conoscenza del nostro gruppo?
              </FormLabel>
              <FormControl>
                <Input placeholder={defaultPlaceHolder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="additionalInfo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Ci sono esigenze particolari di cui il Gruppo deve essere
                informato? (es. allergie, difficoltà, ecc.)
              </FormLabel>
              <FormControl>
                <Textarea placeholder={defaultPlaceHolder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="privacy"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>ACCONSENTO</FormLabel>
                <FormDescription>
                  ai sensi e per gli effetti degli artt. 13 e 23 del D. L.gs. n.
                  196/2003, con la sottoscrizione del presente modulo, al
                  trattamento dei dati personali secondo le modalità e nei
                  limiti previsti dalla legge
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">
          {form.formState.isSubmitting && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}
          Invia
        </Button>
      </form>
    </Form>
  );
};
