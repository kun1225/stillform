"use client";

import { useState, type FormEvent } from "react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("請輸入有效的電子郵件地址");
      return;
    }

    setSubmitted(true);
  }

  return (
    <section
      id="waitlist"
      className="py-32 px-edge bg-foreground"
    >
      <div className="max-w-[480px] mx-auto flex flex-col gap-8 items-center text-center">
        <div className="flex flex-col gap-4">
          <p className="font-label text-sm tracking-widest uppercase text-muted">
            候補名單
          </p>
          <h2
            className="font-hero text-[clamp(2rem,4vw,3rem)] tracking-tight text-surface"
            style={{ fontFamily: "var(--font-hero)" }}
          >
            第一批開放時通知我。
          </h2>
          <p className="font-body-sm text-base leading-[1.65] text-muted">
            留下信箱，Stillform 正式開放預購時，你會是最先知道的人。不會有垃圾郵件，只有一封通知。
          </p>
        </div>

        {submitted ? (
          <div className="w-full rounded-xl border border-border/20 bg-surface/5 px-6 py-4">
            <p className="font-label text-sm text-surface">
              已收到。我們會在第一時間聯絡你。
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-3"
            noValidate
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                aria-label="電子郵件地址"
                className="flex-1 h-11 rounded-xl border border-border/20 bg-surface/10 px-4 font-label text-sm text-surface placeholder:text-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-200"
              />
              <button
                type="submit"
                className="font-label h-11 rounded-xl bg-surface text-foreground px-6 text-sm font-medium transition-all duration-200 ease-[cubic-bezier(0.33,1,0.68,1)] hover:bg-surface/90 active:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary whitespace-nowrap"
              >
                加入候補
              </button>
            </div>
            {error && (
              <p className="font-caption text-sm text-muted" role="alert">
                {error}
              </p>
            )}
          </form>
        )}

        <p className="font-caption text-xs text-muted/60">
          不會分享你的資料，也不會推送行銷郵件。
        </p>
      </div>
    </section>
  );
}
