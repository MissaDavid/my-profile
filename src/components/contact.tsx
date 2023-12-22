"use client";
import React from "react";

import toast from "react-hot-toast";
import SubmitButton from "@/components/submitButton";
import { sendEmail } from "@/actions/sendEmail";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.title}>
        Contact Me
      </h2>
      <p>
        You can contact me directly at <b><a href="mailto:contact@meibee.dev">contact@meibee.dev</a></b>,
        or feel free to use the form below :)
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
          className={styles.formFields}
        />
        <input
          type="text"
          name="senderName"
          minLength={1}
          maxLength={100}
          placeholder="your name"
          required={true}
          className={styles.formFields}
        />
        <textarea
          name="message"
          placeholder="your message"
          rows={5}
          cols={30}
          required={true}
          className={styles.formFields}
        />
        <SubmitButton />
      </form>
    </section>
  );
};

export default Contact;
