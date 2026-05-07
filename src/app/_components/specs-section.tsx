import { ScrollReveal } from "@/lib/scroll-reveal";

const specs = [
  { label: "Display", value: "3.5-inch OLED", sub: "1280 × 480 px" },
  { label: "Housing", value: "6063-T5 Billet", sub: "Aluminium alloy" },
  { label: "Ambient", value: "2,200–4,000 K", sub: "Adjustable LED strip" },
  { label: "Connect", value: "Wi-Fi 6 + USB-C", sub: "Power delivery" },
  { label: "Size", value: "190 × 85 × 65", sub: "Millimetres" },
  { label: "Weight", value: "682 g", sub: "Without cable" },
];

export function SpecsSection() {
  return (
    <section className="bg-canvas-alt border-t border-rule">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <ScrollReveal>
          <p className="text-[11px] font-body font-semibold tracking-[0.3em] uppercase text-ink-3 mb-4">
            Specifications
          </p>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,4rem)] leading-[0.95] tracking-[-0.01em] text-ink mb-16 md:mb-20">
            What&rsquo;s inside.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {specs.map((spec, i) => (
            <ScrollReveal key={spec.label} delay={i * 60}>
              <div className="py-8 border-t border-rule first:border-t-0 sm:first:border-t sm:[&:nth-child(2)]:border-t-0 lg:[&:nth-child(3)]:border-t-0 pr-8">
                <p className="text-[11px] font-body font-semibold tracking-[0.25em] uppercase text-ink-3 mb-3">
                  {spec.label}
                </p>
                <p className="font-display font-bold text-[1.9rem] leading-none tracking-[-0.02em] text-ink mb-1.5">
                  {spec.value}
                </p>
                <p className="text-[13px] font-body font-normal text-ink-3">
                  {spec.sub}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
