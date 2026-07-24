"use client";

import { FormEvent, useState } from "react";
import SectionHeading from "../ui/SectionHeading";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "");
    const message = String(data.get("message") || "");

    const body = encodeURIComponent(
      `Hi Jawad,\n\n${message}\n\n— ${name}\n${email}`
    );
    const mailto = `mailto:jjawadamn883@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="section-pad border-t border-[var(--line)] bg-[var(--bg-elevated)]"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          title="Get in touch"
          subtitle="Open to roles, collaborations, and interesting product problems."
        />

        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div className="space-y-6">
            <p className="text-[var(--ink-soft)] leading-relaxed">
              Prefer a direct line? Reach out by email, phone, or LinkedIn —
              I usually reply within a day.
            </p>

            <dl className="space-y-5">
              <div>
                <dt className="text-xs font-medium tracking-[0.16em] text-[var(--ink-muted)] uppercase">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href="mailto:jjawadamn883@gmail.com"
                    className="text-[var(--ink)] underline-offset-4 hover:text-[var(--accent)] hover:underline"
                  >
                    jjawadamn883@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium tracking-[0.16em] text-[var(--ink-muted)] uppercase">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href="tel:+923167388373"
                    className="text-[var(--ink)] underline-offset-4 hover:text-[var(--accent)] hover:underline"
                  >
                    (+92) 316–7388373
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium tracking-[0.16em] text-[var(--ink-muted)] uppercase">
                  LinkedIn
                </dt>
                <dd className="mt-1">
                  <a
                    href="https://www.linkedin.com/in/jawad-amin-a70389216/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--ink)] underline-offset-4 hover:text-[var(--accent)] hover:underline"
                  >
                    linkedin.com/in/jawad-amin-a70389216
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium tracking-[0.16em] text-[var(--ink-muted)] uppercase">
                  GitHub
                </dt>
                <dd className="mt-1">
                  <a
                    href="https://github.com/MJawadAmin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--ink)] underline-offset-4 hover:text-[var(--accent)] hover:underline"
                  >
                    github.com/MJawadAmin
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium tracking-[0.16em] text-[var(--ink-muted)] uppercase">
                  Location
                </dt>
                <dd className="mt-1 text-[var(--ink)]">Islamabad, Pakistan</dd>
              </div>
            </dl>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 border border-[var(--line)] bg-[var(--bg)] p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-[var(--ink-soft)]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-md border border-[var(--line)] bg-[var(--bg-elevated)] px-3.5 py-2.5 text-[var(--ink)] outline-none transition focus:border-[var(--accent)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-[var(--ink-soft)]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-md border border-[var(--line)] bg-[var(--bg-elevated)] px-3.5 py-2.5 text-[var(--ink)] outline-none transition focus:border-[var(--accent)]"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm text-[var(--ink-soft)]"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full rounded-md border border-[var(--line)] bg-[var(--bg-elevated)] px-3.5 py-2.5 text-[var(--ink)] outline-none transition focus:border-[var(--accent)]"
                placeholder="What is this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-[var(--ink-soft)]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-y rounded-md border border-[var(--line)] bg-[var(--bg-elevated)] px-3.5 py-2.5 text-[var(--ink)] outline-none transition focus:border-[var(--accent)]"
                placeholder="Tell me a bit about the role or project…"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)] sm:w-auto"
            >
              Send message
            </button>

            {submitted && (
              <p className="text-sm text-[var(--accent)]">
                Opening your email client…
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
