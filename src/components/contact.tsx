"use client";
import React from "react";

import toast from "react-hot-toast";
import WorkshopButton from "@/components/WorkshopButton";
import WorkshopInput from "@/components/WorkshopInput";
import {sendEmail} from "@/actions/sendEmail";
import {useFormStatus} from "react-dom";
import {FaPaperPlane} from "react-icons/fa";
import styles from "./contact.module.css";

const SubmitButtonWrapper = () => {
  const { pending } = useFormStatus();
  return (
    <WorkshopButton
      type="submit"
      disabled={pending}
      theme="dark"
      variant="primary"
    >
      {pending ? (
        <>
          <div
            className="animate-spin h-4 w-4 rounded-full border-2 border-t-transparent"
            style={{ borderColor: "var(--warm-white)" }}
          />
          Sending...
        </>
      ) : (
        <>
          Start the Conversation
          <FaPaperPlane style={{ opacity: 0.8 }} />
        </>
      )}
    </WorkshopButton>
  );
};

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      {/* Workshop-style header */}
      <div className={styles.sectionHeader}>
        <div className={styles.cornerBracket}></div>
        <h2 className={styles.title}>Let&apos;s Build Together</h2>
        <div className={styles.titleUnderline}>
          <div className={styles.line}></div>
          <div className={styles.diamond}></div>
          <div className={styles.line}></div>
        </div>
      </div>

      {/* Workshop philosophy intro */}
      <div className={styles.intro}>
        <p className={styles.introText}>
          Available for consulting projects and collaborative builds.
          Whether you need backend architecture, full-stack development,
          or someone who can bridge technical and human communication—
          let&apos;s talk.
        </p>
        <p className={styles.introText}>
          Direct contact: <a href="mailto:contact@meibee.dev" className={styles.emailLink}>contact@meibee.dev</a>
        </p>
        <p className={styles.introText}>
          Or use the form below.
        </p>
      </div>

      {/* Workshop form */}
      <div className={styles.formContainer}>
        <form
          className={styles.workshopForm}
          action={async (formData) => {
            try {
              await sendEmail(formData);
              toast.success("Message dispatched successfully!");
            } catch (err) {
              const errInstance = err as Error;
              toast.error(errInstance.message);
            }
          }}
        >
          <div className={styles.formGrid}>
            <div className={styles.fieldGroup}>
              <label htmlFor="email" className={styles.fieldLabel}>
                <span className={styles.labelMarker}>◈</span>
                Email Address
              </label>
              <WorkshopInput
                id="email"
                name="senderEmail"
                type="email"
                required
                placeholder="your.email@domain.com"
                theme="light"
                ariaLabel="Your email address"
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="name" className={styles.fieldLabel}>
                <span className={styles.labelMarker}>◆</span>
                Name
              </label>
              <WorkshopInput
                id="name"
                name="senderName"
                type="text"
                required
                placeholder="Your name"
                theme="light"
                ariaLabel="Your name"
              />
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="message" className={styles.fieldLabel}>
              <span className={styles.labelMarker}>▶</span>
              Project Brief
            </label>
            <textarea
              name="senderMessage"
              id="message"
              rows={6}
              required={true}
              autoComplete="off"
              className={styles.fieldTextarea}
              placeholder="Tell me about your project, the challenges you're facing, or what you're hoping to build."
            />
          </div>

          <div className={styles.submitSection}>
            <SubmitButtonWrapper />
          </div>
        </form>
      </div>

      {/* Background geometric elements */}
      <div className={styles.backgroundGeometry}>
        <div className={styles.orbitCircle}></div>
        <div className={styles.meshGrid}></div>
      </div>
    </section>
  );
};

export default Contact;
