"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function validateFormField(
  value: unknown,
  maxLength: number,
  isEmail: boolean = false,
) {
  // testing for anything@anything.anything
  const regex = /.+@.+\..+/;
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  if (isEmail) {
    return regex.test(value);
  }
  return true;
}

type ResendSuccess<T> = T | null;

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const senderName = formData.get("senderName");
  const message = formData.get("message");

  // validation
  if (!validateFormField(senderEmail, 320, true)) {
    throw new Error("Invalid email address");
  }

  if (!validateFormField(senderName, 100)) {
    throw new Error("Name should be a string of length > 1 and < 100");
  }

  if (!validateFormField(message, 1000)) {
    throw new Error("Message should be a string");
  }

  // send
  const { error } = await resend.emails.send({
    from: "Contact Me <onboarding@resend.dev>",
    to: "contact@meibee.dev",
    subject: `New message from ${senderName}`,
    reply_to: `${senderEmail}`,
    text: `${message}`,
  });

  if (error) {
    throw new Error(error.message);
  }
};
