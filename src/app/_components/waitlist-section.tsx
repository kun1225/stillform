"use client";

import { useState } from "react";

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section
      id="waitlist"
      className="w-full px-edge py-32 border-t border-border"
    >
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-8 text-center">
        {submitted ? (
          <>
            <h2 className="font-title text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-tight text-foreground">
              已收到。
            </h2>
            <p className="font-body-sm text-base leading-[1.6] text-muted max-w-[45ch]">
              Stillform 發售前，你會是第一批收到消息的人。
            </p>
          </>
        ) : (
          <>
            <h2 className="font-title text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-tight text-foreground">
              最早一批知道。
            </h2>
            <p className="font-body-sm text-base leading-[1.6] text-muted max-w-[45ch]">
              Stillform 即將推出。留下你的 email，在發售前收到邀請。
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 font-body-sm bg-surface border border-border rounded-xl px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow duration-200"
              />
              <button
                type="submit"
                className="font-label bg-foreground text-background px-6 py-2.5 rounded-xl font-medium transition-all duration-200 ease-[cubic-bezier(0.33,1,0.68,1)] hover:bg-foreground/85 active:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary whitespace-nowrap"
              >
                加入候補名單
              </button>
            </form>
            <p className="font-caption text-sm text-muted">
              不會寄送垃圾信件，隨時可取消訂閱。
            </p>
          </>
        )}
      </div>
    </section>
  );
}
