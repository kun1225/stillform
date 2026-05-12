"use client";

import { useState } from "react";

export function CtaSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section id="waitlist" className="bg-background py-32 px-edge">
      <div className="max-w-[1600px] mx-auto">
        <div className="max-w-2xl">
          <p className="font-caption text-sm text-muted tracking-widest uppercase mb-6">
            候補名單
          </p>
          <h2 className="font-title text-[clamp(2rem,4vw,3.5rem)] font-semibold text-foreground leading-[1.15] mb-6">
            等待值得等待
            <br />
            的事物
          </h2>
          <p className="font-body-lg text-lg leading-[1.8] text-muted mb-12 max-w-[52ch]">
            Stillform 目前開放候補名單登記。第一批出貨將優先通知候補成員，數量有限。
          </p>

          {submitted ? (
            <div className="flex items-center gap-3 py-4">
              <span className="inline-block w-5 h-5 rounded-full bg-primary flex-shrink-0" />
              <p className="font-body-sm text-base text-foreground">
                已收到登記。第一時間我們會以 Email 通知你。
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="font-body-sm flex-1 bg-surface border border-border rounded-xl px-5 py-3 text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
              />
              <button
                type="submit"
                className="font-label bg-primary text-background px-6 py-3 rounded-xl transition-all duration-200 hover:bg-primary/90 active:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary whitespace-nowrap"
              >
                加入候補名單
              </button>
            </form>
          )}

          <p className="font-caption text-sm text-muted mt-4">
            不會發送任何行銷郵件。僅在上市時通知。
          </p>
        </div>
      </div>
    </section>
  );
}
