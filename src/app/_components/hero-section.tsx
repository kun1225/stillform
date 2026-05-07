import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-dvh flex flex-col overflow-hidden">
      {/* Eyebrow */}
      <div className="pt-28 pb-0 flex justify-center">
        <p className="text-[11px] font-body font-medium tracking-[0.35em] uppercase text-ink-3">
          Stillform — Desk Object No. 1
        </p>
      </div>

      {/* Product image */}
      <div className="flex-1 flex items-center justify-center px-8 py-10">
        <div className="relative w-full max-w-2xl">
          <Image
            src="/product-2.png"
            alt="Stillform desk clock — brushed aluminium body with OLED display showing 09:41"
            width={1200}
            height={675}
            className="w-full h-auto"
            style={{
              filter:
                "drop-shadow(0 48px 96px oklch(17% 0.01 260 / 0.12)) drop-shadow(0 12px 32px oklch(17% 0.01 260 / 0.08))",
            }}
            priority
          />
        </div>
      </div>

      {/* Bottom headline */}
      <div className="px-6 md:px-12 lg:px-16 pb-16 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h1 className="font-display font-extrabold leading-[0.9] tracking-[-0.01em] text-ink text-[clamp(3.5rem,9vw,9rem)]">
            Focus is
            <br />a Choice.
          </h1>
          <div className="md:pb-2 md:max-w-xs">
            <p className="text-[15px] font-body font-normal leading-relaxed text-ink-2">
              A precision desk clock for those who take focus seriously.
              Machined aluminium. OLED display. No distractions.
            </p>
            <a
              href="#waitlist"
              className="mt-5 inline-flex items-center gap-2 px-6 py-3 bg-ink text-canvas font-body font-medium text-[13px] tracking-wide hover:bg-void transition-colors duration-200"
            >
              Join the waitlist
            </a>
          </div>
        </div>
      </div>

      {/* Amber divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-amber/50 to-transparent" />
    </section>
  );
}
