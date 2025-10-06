"use client";
import React from "react";

import toast from "react-hot-toast";
import WorkshopButton from "@/components/WorkshopButton";
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
          Dispatching...
        </>
      ) : (
        <>
          Deploy Message
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
        <h2 className={styles.title}>Let's Build Something</h2>
        <div className={styles.titleUnderline}>
          <div className={styles.line}></div>
          <div className={styles.diamond}></div>
          <div className={styles.line}></div>
        </div>
      </div>

      {/* Workshop philosophy intro */}
      <div className={styles.intro}>
        <div className={styles.statusSection}>
          <div className={styles.statusBadge}>
            <div className={styles.pulse}></div>
            Currently Available for Projects
          </div>
        </div>

        <p className={styles.introText}>
          Ready to collaborate on meaningful projects. Direct contact: <a href="mailto:contact@meibee.dev" className={styles.emailLink}>contact@meibee.dev</a>
        </p>

        <p className={styles.introText}>
          Or use the workshop communication form below—function over flash, but it gets the job done.
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
              <input
                type="email"
                id="email"
                name="senderEmail"
                required={true}
                autoComplete="email"
                className={styles.fieldInput}
                placeholder="your.email@domain.com"
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="name" className={styles.fieldLabel}>
                <span className={styles.labelMarker}>◆</span>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="senderName"
                minLength={1}
                maxLength={100}
                required={true}
                autoComplete="name"
                className={styles.fieldInput}
                placeholder="Your name"
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
              placeholder="Tell me about your project, challenges, or ideas. What are we building together?"
            />
          </div>

          <div className={styles.submitSection}>
            <SubmitButtonWrapper />
            <div className={styles.responseNote}>
              <span className={styles.responseIcon}>●</span>
              Response within 24-48 hours
            </div>
          </div>
        </form>

        {/* Form accent elements */}
        <div className={styles.formAccents}>
          <div className={styles.serviceMarker}>01</div>
          <div className={styles.serviceMarker}>02</div>
          <div className={styles.serviceMarker}>03</div>
        </div>
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
