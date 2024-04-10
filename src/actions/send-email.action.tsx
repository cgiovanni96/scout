"use server";
import nodemailer from "nodemailer";
import { Schema } from "../components/enrollment-form/enrollment-form.component";
import { render } from "@react-email/render";
import { EnrollmentTemplate } from "../email-templates/enrollment.template";

console.log(process.env);

const transporter = nodemailer.createTransport({
  // @ts-ignore
  host: process.env.MAILER_HOST,
  port: process.env.MAILER_PORT,
  secure: process.env.MAILER_SECURE,
  logger: true,
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS,
  },
  tls: {
    minVersion: process.env.MAILER_TLS_VERSION,
    ciphers: process.env.MAILER_CIPHERS,
  },
  from: process.env.MAILER_FROM,
});

export const sendEmail = async (
  data: Schema,
): Promise<{ state: "success" | "error" }> => {
  try {
    const emailTemplate = render(<EnrollmentTemplate data={data} />);

    await transporter.sendMail({
      from: "iscrizioni@agescigruppotigullio.it",
      to: "iscrizioni.agescitigullio@gmail.com",
      subject: `Nuova Iscrizione - ${data.name}`,
      html: emailTemplate,
    });

    return { state: "success" };
  } catch (e) {
    console.error("SEND_EMAIL_ERROR", e);
    return { state: "error" };
  }
};
