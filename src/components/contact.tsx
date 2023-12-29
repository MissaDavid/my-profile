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
        You can contact me directly at <a className="font-bold" href="mailto:contact@meibee.dev">contact@meibee.dev</a>,
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
        <label htmlFor="email" className={styles.labels}>your email</label>
        <input
          type="email"
          id="email"
          name="senderEmail"
          required={true}
          autoComplete="email"
          className={styles.formFields}
        />
        <label htmlFor="name" className={styles.labels}>your name</label>
        <input
          type="text"
          id="name"
          name="senderName"
          minLength={1}
          maxLength={100}
          required={true}
          autoComplete="name"
          className={styles.formFields}
        />
        <label htmlFor="message" className={styles.labels}>your message</label>
        <textarea
          name="senderMessage"
          id="message"
          rows={5}
          cols={30}
          required={true}
          autoComplete="off"
          className={styles.formFields}
        />
        <SubmitButton/>
      </form>
    </section>
  );
};

export default Contact;
