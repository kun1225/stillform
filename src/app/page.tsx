import Image from "next/image";

const FEATURES = [
  {
    num: "01",
    title: "Focus Mode",
    desc: "A single touch activates deep work. The display distills to the essential. Your environment responds to intent — not the other way around.",
    symbol: "◎",
  },
  {
    num: "02",
    title: "Ambient Sensing",
    desc: "Real-time temperature and humidity, woven quietly into the display. Know your room without lifting your phone.",
    symbol: "◈",
  },
  {
    num: "03",
    title: "Wireless Charging",
    desc: "A precision Qi2 charging surface on top. Set your device down. Power flows — no cable, no thought, no clutter.",
    symbol: "⊕",
  },
  {
    num: "04",
    title: "Amber Glow",
    desc: "A warm LED band tuned to the golden spectrum. A nightlight that understands light. Soothing by design, never harsh.",
    symbol: "◑",
  },
];

const SPECS = [
  ["Enclosure", "CNC-milled aluminum alloy"],
  ["Display", "OLED, 480 × 272 px"],
  ["Charging", "15W Qi2 wireless"],
  ["Light", "Warm amber LED, tunable"],
  ["Sensors", "Temperature + humidity"],
  ["Connectivity", "Wi-Fi 6, Bluetooth 5.3"],
  ["Dimensions", "220 × 90 × 80 mm"],
  ["Weight", "680g"],
];

export default function Home() {
  return (
    <main
      className="bg-[#080808] text-[#EDE8DF] min-h-screen overflow-x-hidden"
      style={{ fontFamily: "var(--font-outfit)" }}
    >
      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
        <span
          className="text-sm tracking-[0.35em] uppercase text-white"
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          Stillform
        </span>
        <a
          href="#reserve"
          className="text-[11px] tracking-[0.25em] uppercase border border-white/20 px-5 py-2.5 text-[#EDE8DF]/70 hover:border-[#C9813A] hover:text-[#C9813A] transition-all duration-500"
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          Reserve
        </a>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-end pb-24 pt-40 px-8 md:px-16 overflow-hidden">
        {/* Background: cinematic product photo */}
        <div className="absolute inset-0">
          <Image
            src="/product-1.png"
            alt="Stillform on a desk"
            fill
            className="object-cover object-center"
            style={{ opacity: 0.45 }}
            priority
          />
          {/* Layered dark overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-[#080808]/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/40 to-transparent" />
        </div>

        {/* Ambient amber halo at bottom */}
        <div
          className="absolute bottom-[-40px] left-[20%] w-[500px] h-[220px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(201,129,58,0.22) 0%, transparent 70%)",
            filter: "blur(40px)",
            animation: "glowPulse 5s ease-in-out infinite",
          }}
        />

        {/* Hero content */}
        <div
          className="relative z-10 max-w-5xl"
          style={{ animation: "fadeUp 1s ease-out 0.2s both" }}
        >
          <p
            className="text-[11px] tracking-[0.5em] uppercase text-[#C9813A] mb-10"
            style={{ fontFamily: "var(--font-space-mono)" }}
          >
            Stillform — Edition 001
          </p>

          <h1
            className="text-[clamp(4.5rem,14vw,11rem)] leading-[0.88] font-light tracking-[-0.02em] mb-10"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Time
            <br />
            <em className="text-[#C9813A] not-italic">to</em>
            <br />
            Focus.
          </h1>

          <p className="max-w-sm text-[#7A7570] font-light text-base leading-relaxed">
            A desk object for those who think in hours,
            <br />
            not notifications. Handcrafted aluminum.
            <br />
            Ambient intelligence.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute right-10 bottom-10 flex flex-col items-center gap-4">
          <span
            className="text-[9px] tracking-[0.35em] uppercase text-[#4A4540] [writing-mode:vertical-rl]"
            style={{ fontFamily: "var(--font-space-mono)" }}
          >
            Scroll
          </span>
          <div className="w-px h-14 bg-[#2A2520]/60 relative overflow-hidden rounded-full">
            <div
              className="absolute inset-x-0 top-0 bg-[#C9813A] h-full"
              style={{ animation: "scrollLine 2.2s ease-in-out infinite" }}
            />
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="px-8 md:px-16">
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9813A]/30 to-transparent" />
      </div>

      {/* ── Tagline band ── */}
      <section className="px-8 md:px-16 py-24 overflow-hidden">
        <p
          className="text-[clamp(2rem,5vw,4rem)] font-light text-[#2A2520] leading-tight tracking-wide whitespace-nowrap"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Still. Precise. Present. &nbsp;&nbsp; Still. Precise. Present. &nbsp;&nbsp; Still. Precise. Present.
        </p>
      </section>

      {/* ── Divider ── */}
      <div className="px-8 md:px-16">
        <div className="h-px bg-[#141414]" />
      </div>

      {/* ── Features ── */}
      <section className="px-8 md:px-16 py-32">
        <div className="max-w-6xl mx-auto">
          <p
            className="text-[11px] tracking-[0.5em] uppercase text-[#C9813A] mb-20"
            style={{ fontFamily: "var(--font-space-mono)" }}
          >
            Capabilities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {FEATURES.map((f) => (
              <div
                key={f.num}
                className="border-t border-[#181818] py-10 md:pr-16 group cursor-default"
              >
                <div className="flex items-start gap-6">
                  <span
                    className="text-[11px] text-[#3A3530] mt-1 shrink-0 transition-colors duration-300 group-hover:text-[#C9813A]"
                    style={{ fontFamily: "var(--font-space-mono)" }}
                  >
                    {f.num}
                  </span>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[#C9813A] text-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                        {f.symbol}
                      </span>
                      <h3
                        className="text-2xl font-light tracking-wide group-hover:text-[#EDE8DF] transition-colors duration-300"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        {f.title}
                      </h3>
                    </div>
                    <p className="text-[#5A5550] text-sm leading-relaxed font-light max-w-xs group-hover:text-[#7A7570] transition-colors duration-300">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Showcase ── */}
      <section className="py-32 relative">
        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(201,129,58,0.07) 0%, transparent 65%)",
          }}
        />

        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Product image */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-[#0D0D0D] rounded-3xl overflow-hidden flex items-center justify-center p-12 aspect-[4/3]">
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ animation: "subtleFloat 6s ease-in-out infinite" }}
                >
                  <Image
                    src="/product-2.png"
                    alt="Stillform clock"
                    width={480}
                    height={320}
                    className="object-contain w-full h-full drop-shadow-2xl"
                  />
                </div>
              </div>
              {/* Amber underlighting effect */}
              <div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-12 rounded-full"
                style={{
                  background: "radial-gradient(ellipse, rgba(201,129,58,0.25) 0%, transparent 70%)",
                  filter: "blur(20px)",
                  animation: "glowPulse 4s ease-in-out infinite",
                }}
              />
            </div>

            {/* Specs */}
            <div className="order-1 lg:order-2">
              <p
                className="text-[11px] tracking-[0.5em] uppercase text-[#C9813A] mb-8"
                style={{ fontFamily: "var(--font-space-mono)" }}
              >
                Specifications
              </p>
              <h2
                className="text-5xl md:text-6xl font-light leading-tight mb-14"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Every detail,
                <br />
                <em>considered.</em>
              </h2>

              <div>
                {SPECS.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between py-4 border-b border-[#141414] group hover:border-[#2A2520] transition-colors duration-300"
                  >
                    <span
                      className="text-[10px] tracking-[0.3em] uppercase text-[#3A3530] group-hover:text-[#5A5550] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-space-mono)" }}
                    >
                      {label}
                    </span>
                    <span className="text-sm text-[#7A7570] font-light group-hover:text-[#EDE8DF] transition-colors duration-300">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="reserve" className="py-40 px-8 md:px-16 relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(201,129,58,0.1) 0%, transparent 65%)",
          }}
        />

        <div className="relative text-center max-w-4xl mx-auto">
          <p
            className="text-[11px] tracking-[0.5em] uppercase text-[#C9813A] mb-10"
            style={{ fontFamily: "var(--font-space-mono)" }}
          >
            Limited First Edition — 500 Units
          </p>

          <h2
            className="text-[clamp(3.5rem,10vw,8rem)] font-light leading-[0.92] tracking-[-0.02em] mb-8"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Still your
            <br />
            <em className="text-[#C9813A]">space.</em>
          </h2>

          <p className="text-[#4A4540] mb-14 max-w-xs mx-auto font-light text-sm leading-relaxed">
            Handcrafted. Signed. Shipped Q2 2025.
            <br />
            Free returns within 60 days.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-4 bg-[#C9813A] text-black text-[11px] tracking-[0.25em] uppercase px-12 py-4 hover:bg-[#D98F45] transition-colors duration-300"
              style={{ fontFamily: "var(--font-space-mono)" }}
            >
              Reserve — $299
              <span className="text-base">→</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-4 border border-[#242420] text-[#5A5550] text-[11px] tracking-[0.25em] uppercase px-12 py-4 hover:border-[#4A4540] hover:text-[#EDE8DF] transition-all duration-300"
              style={{ fontFamily: "var(--font-space-mono)" }}
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#141414] px-8 md:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          className="text-[11px] tracking-[0.4em] uppercase text-[#2A2520]"
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          Stillform
        </span>
        <span
          className="text-[11px] text-[#2A2520]"
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          © 2025 — Designed with intention
        </span>
      </footer>
    </main>
  );
}
