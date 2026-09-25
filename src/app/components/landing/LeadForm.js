"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { trackLinkedInConversion } from "@/lib/linkedin-conversion";
import styles from "./landing.module.css";

// Passed through with the lead so each enquiry can be traced back to its ad.
const ATTRIBUTION_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"];

export default function LeadForm({ source, ctaLabel }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setHasError(false);
    const submissionId = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

    const formData = new FormData(e.target);
    formData.append("access_key", "a05ea8f5-1d65-4506-bde6-e519d7f5ea71");
    formData.append("subject", `New ASO audit request: ${source}`);
    formData.append("landing_page", window.location.pathname);
    const params = new URLSearchParams(window.location.search);
    ATTRIBUTION_PARAMS.forEach((key) => {
      const value = params.get(key);
      if (value) formData.append(key, value);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = await response.json();
      if (result.success) {
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "conversion", {
            send_to: "AW-17791392097/38a7COX2084bEOGyzKNC",
            value: 1.0,
            currency: "INR",
          });
          window.gtag("event", "conversion", {
            send_to: "AW-938608563/t3qxCNPz8pYbELOPyL8D",
            value: 1.0,
            currency: "INR",
          });
        }
        trackLinkedInConversion(submissionId);
        router.push("/thank-you");
      } else {
        setHasError(true);
      }
    } catch (error) {
      console.log(error);
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type="checkbox" name="botcheck" className={styles.honeypot} tabIndex={-1} autoComplete="off" />
      <div className={styles.field}>
        <label htmlFor="lead-name">Your name</label>
        <input id="lead-name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="lead-email">Work email</label>
        <input id="lead-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="lead-app">
          App name or store link <span>Optional</span>
        </label>
        <input id="lead-app" name="app" type="text" placeholder="e.g. play.google.com/store/apps/details?id=…" />
      </div>
      <button type="submit" disabled={isSubmitting} className={styles.submit}>
        {isSubmitting ? "Sending…" : ctaLabel}
        <span aria-hidden="true">→</span>
      </button>
      {hasError && (
        <p className={styles.formError} role="alert">
          Something went wrong. Please try again or email{" "}
          <a href="mailto:support@asowin.com">support@asowin.com</a>.
        </p>
      )}
      <p className={styles.formNote}>
        We reply within 24 hours. No commitment. See our{" "}
        <a href="/privacy-policy/">privacy policy</a>.
      </p>
    </form>
  );
}
