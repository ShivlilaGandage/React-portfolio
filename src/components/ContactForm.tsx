import type * as React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Send, Loader2 } from "lucide-react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "be6034bc-6366-40e5-994b-19bb6d726e30",
          name: name,
          email: email,
          message: message,
          to_email: "shivlilagandage@gmail.com",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSent(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[32px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-2xl"
    >
      <div className="grid grid-cols-2 gap-5">
        <Field label="Name">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full bg-transparent px-5 py-4 text-snow placeholder:text-fog/70 focus:outline-none"
          />
        </Field>
        <Field label="Email">
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full bg-transparent px-5 py-4 text-snow placeholder:text-fog/70 focus:outline-none"
          />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Project Inquiry">
          <textarea
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about the product, the team and the timeline."
            className="w-full resize-none bg-transparent px-5 py-4 text-snow placeholder:text-fog/70 focus:outline-none"
          />
        </Field>
      </div>

      <div className="mt-8 flex items-center justify-between gap-6">
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.p
              key="sent"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2 text-sm text-emerald-400"
            >
              <Check className="h-4 w-4" /> Message sent successfully! I will
              email you back shortly.
            </motion.p>
          ) : (
            <motion.p
              key="hint"
              exit={{ opacity: 0 }}
              className="text-sm text-fog"
            >
              Replies usually within 24 hours.
            </motion.p>
          )}
        </AnimatePresence>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative inline-flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-accent px-9 py-4 font-display text-lg font-bold uppercase tracking-wide text-ink shadow-[0_0_30px_rgba(139,156,255,0.5)] transition-[box-shadow] duration-200 hover:shadow-[0_0_48px_rgba(139,156,255,0.8)] disabled:opacity-50"
        >
          <span
            aria-hidden
            className="absolute left-1/2 top-full h-[260%] w-[140%] -translate-x-1/2 rounded-[45%] bg-snow transition-[translate] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-[78%]"
          />
          <span className="relative">
            {isSubmitting ? "Sending..." : "Send Message"}
          </span>
          {isSubmitting ? (
            <Loader2 className="relative h-4 w-4 animate-spin" />
          ) : (
            <Send className="relative h-4 w-4 transition-[translate] duration-200 group-hover:translate-x-0.5" />
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-mist">{label}</span>
      <span className="group/field relative block overflow-hidden rounded-2xl border border-line-strong bg-ink/60 transition-[border-color,box-shadow] duration-200 focus-within:border-accent focus-within:shadow-[0_0_0_4px_rgba(139,156,255,0.15),0_0_28px_rgba(139,156,255,0.35)]">
        {children}
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-accent transition-[scale] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-focus-within/field:scale-x-100"
        />
      </span>
    </label>
  );
}
