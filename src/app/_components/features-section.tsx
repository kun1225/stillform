import Image from "next/image";
import { ScrollReveal } from "@/lib/scroll-reveal";

const features = [
  {
    index: "01",
    headline: "Time, weighted.",
    body: "A 3.5-inch OLED panel at 1280 × 480 pixels. No backlight bleed, no plastic diffuser, no glare. The display reads clearly at any ambient light level and draws almost nothing in standby.",
    detail: "OLED — 1280 × 480",
    image: { src: "/product-2.png", alt: "Stillform OLED display showing precise time" },
    imageRight: false,
  },
  {
    index: "02",
    headline: "Light that knows\nwhen to quiet.",
    body: "The ambient strip runs from 2,200K during deep work to 4,000K as afternoon light drops. Set it yourself, or let Focus Mode adjust it automatically with your schedule.",
    detail: "2,200 — 4,000K",
    image: null,
    imageRight: true,
  },
  {
    index: "03",
    headline: "Machined,\nnot assembled.",
    body: "The housing is milled from 6063-T5 aluminium billet. One material. No plastic seams, no speaker grilles, no ports you will never use. Just the object and what it does.",
    detail: "6063-T5 Aluminium",
    image: { src: "/product-1.png", alt: "Stillform on a desk beside a laptop and notebook" },
    imageRight: false,
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-canvas">
      {features.map((feat, i) => (
        <div
          key={feat.index}
          className={[
            "max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32",
            "grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center",
            i === features.length - 1 ? "" : "border-b border-rule",
          ].join(" ")}
        >
          {/* Text block */}
          <ScrollReveal
            delay={0}
            className={feat.imageRight ? "md:order-1" : "md:order-2"}
          >
            <p className="text-[11px] font-body font-semibold tracking-[0.3em] uppercase text-amber mb-8">
              {feat.index}
            </p>
            <h2 className="font-display font-bold leading-[0.9] tracking-[-0.01em] text-ink text-[clamp(2.5rem,5vw,5.5rem)] whitespace-pre-line mb-8">
              {feat.headline}
            </h2>
            <p className="text-[15px] font-body font-normal leading-[1.7] text-ink-2 max-w-sm mb-8">
              {feat.body}
            </p>
            <p className="text-[12px] font-body font-semibold tracking-[0.2em] uppercase text-ink-3">
              {feat.detail}
            </p>
          </ScrollReveal>

          {/* Visual block */}
          <ScrollReveal
            delay={120}
            className={feat.imageRight ? "md:order-2" : "md:order-1"}
          >
            {feat.image ? (
              <div className="bg-canvas-alt rounded-sm overflow-hidden">
                <Image
                  src={feat.image.src}
                  alt={feat.image.alt}
                  width={900}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            ) : (
              <AmbientLightVisual />
            )}
          </ScrollReveal>
        </div>
      ))}
    </section>
  );
}

function AmbientLightVisual() {
  return (
    <div className="bg-void rounded-sm aspect-[3/2] flex flex-col items-center justify-end overflow-hidden relative">
      {/* Simulated clock face */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="font-display font-bold text-[4rem] md:text-[5.5rem] tracking-[-0.02em] leading-none text-canvas/90">
          09:41
        </p>
        <p className="text-[11px] font-body font-medium tracking-[0.25em] uppercase text-canvas/40 mt-3">
          Focus Mode
        </p>
      </div>
      {/* Ambient glow */}
      <div className="w-full relative pb-8">
        <div
          className="h-px w-4/5 mx-auto"
          style={{
            background:
              "linear-gradient(to right, transparent, oklch(72% 0.19 68), transparent)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-16 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, oklch(72% 0.19 68), transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}
