"use client";
import { useState, type FormEvent } from "react";

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  return (
    <section
      id="waitlist"
      className="bg-void text-canvas border-t border-rule/20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-32 md:py-40">
        <div className="max-w-2xl">
          {submitted ? (
            <div>
              <p className="text-[11px] font-body font-semibold tracking-[0.3em] uppercase text-amber mb-6">
                You&rsquo;re in
              </p>
              <h2 className="font-display font-bold text-[clamp(2.5rem,5vw,5rem)] leading-[0.92] tracking-[-0.01em] text-canvas mb-6">
                We&rsquo;ll be in touch.
              </h2>
              <p className="text-[15px] font-body font-normal leading-relaxed text-canvas/60">
                You&rsquo;ll hear from us before Stillform ships. No newsletters, no
                marketing. Just the one message that matters.
              </p>
            </div>
          ) : (
            <>
              <p className="text-[11px] font-body font-semibold tracking-[0.3em] uppercase text-amber mb-6">
                Early access
              </p>
              <h2 className="font-display font-bold text-[clamp(2.5rem,5vw,5rem)] leading-[0.92] tracking-[-0.01em] text-canvas mb-6">
                Stillform ships
                <br />
                spring 2025.
              </h2>
              <p className="text-[15px] font-body font-normal leading-relaxed text-canvas/60 mb-12">
                8,200 people have joined. One email when it&rsquo;s ready. No
                marketing before that.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError("");
                      }}
                      placeholder="your@email.com"
                      className={[
                        "w-full px-5 py-3.5 bg-canvas/8 text-canvas placeholder-canvas/30",
                        "text-[14px] font-body font-normal",
                        "border outline-none transition-colors duration-150",
                        "focus:bg-canvas/12",
                        error
                          ? "border-red-400/60 focus:border-red-400"
                          : "border-canvas/15 focus:border-amber/60",
                      ].join(" ")}
                      autoComplete="email"
                    />
                    {error && (
                      <p className="mt-2 text-[12px] font-body text-red-400">
                        {error}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-amber text-void font-body font-semibold text-[13px] tracking-wide hover:bg-amber-dark transition-colors duration-200 whitespace-nowrap shrink-0"
                  >
                    Join waitlist
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
