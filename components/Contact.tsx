"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatus = "idle" | "success" | "error";

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>();

  const onSubmit = async (formData: ContactFormValues) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus("error");
      setStatusMessage(
        "Email service is not configured. Please check environment variables."
      );
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "pranshu2853@gmail.com"
        },
        publicKey
      );

      reset();
      setSubmitStatus("success");
      setStatusMessage("Your message was sent successfully. I'll reply soon.");
    } catch {
      setSubmitStatus("error");
      setStatusMessage("Unable to send message right now. Please try again later.");
    }
  };

  return (
    <section id="contact" className="section-shell py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="surface-card mx-auto max-w-3xl p-6 sm:p-8"
      >
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accentSoft">
          Contact
        </p>

        <h2 className="section-title mt-3">
          Let's Work on Backend Systems Together
        </h2>

        <p className="mt-3 text-sm text-mist">
          Have a backend project, collaboration, or opportunity in mind? Send a
          message and I’ll get back to you.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">

            <div>
              <label htmlFor="name" className="mb-1 block text-sm text-mist">
                Name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                required
                className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none transition focus:border-accent"
                {...register("name", { required: "Name is required." })}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-300">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm text-mist">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none transition focus:border-accent"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address."
                  }
                })}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-300">{errors.email.message}</p>
              )}
            </div>

          </div>

          <div>
            <label htmlFor="subject" className="mb-1 block text-sm text-mist">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              required
              className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none transition focus:border-accent"
              {...register("subject", { required: "Subject is required." })}
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-red-300">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm text-mist">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none transition focus:border-accent"
              {...register("message", {
                required: "Message is required.",
                minLength: {
                  value: 15,
                  message: "Please share at least 15 characters."
                }
              })}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-300">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitStatus !== "idle" && (
            <p
              className={`text-sm ${
                submitStatus === "success"
                  ? "text-emerald-300"
                  : "text-red-300"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}