"use client";
import React from "react";

import toast from "react-hot-toast";
import SubmitButton from "@/components/submitButton";
import { sendEmail } from "@/actions/sendEmail";

const Contact = () => {
  return (
    <section id="contact" className="my-36">
      <h2 className="text-3xl font-serif font-medium capitalize mb-8 text-center">
        Contact Me
      </h2>
      <p>
        You can contact me directly at{" "}
        <code>workwithmelissa@tamplin.family</code> , or feel free to use the
        form below :)
      </p>

      <form
        className="flex flex-col gap-2"
        action={async (formData) => {
          try {
            await sendEmail(formData);
            toast.success("Email sent!");
          } catch (err) {
            const errInstance = err as Error;
            toast.error(errInstance.message);
          }
        }}
      >
        <input
          type="email"
          name="senderEmail"
          placeholder="your email"
          required={true}
          className="form-fields"
        />
        <input
          type="text"
          name="senderName"
          minLength={1}
          maxLength={100}
          placeholder="your name"
          required={true}
          className="form-fields"
        />
        <textarea
          name="message"
          placeholder="your message"
          rows={5}
          cols={30}
          required={true}
          className="form-fields"
        />
        <SubmitButton />
      </form>
    </section>
  );
};

export default Contact;
