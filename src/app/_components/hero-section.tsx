import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center px-edge pt-24 pb-24 overflow-hidden bg-background">
      {/* Text content */}
      <div className="flex flex-col items-center text-center gap-6 w-full pb-16">
        <p className="font-label text-sm tracking-widest uppercase text-muted">
          Stillform
        </p>
        <h1
          className="text-[clamp(2.75rem,6vw,5rem)] font-bold tracking-tight leading-[1.05] text-foreground"
          style={{ fontFamily: "var(--font-hero)" }}
        >
          專注與美觀
          <br />
          並存。
        </h1>
        <p className="font-body-lg text-lg leading-[1.75] text-muted max-w-[55ch]">
          一個值得放在桌上的蕃茄鐘。鬧鐘與計時整合於單一實體裝置，減少手機干擾，讓專注回到物理世界。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href="#waitlist"
            className="font-label inline-flex h-11 items-center justify-center rounded-xl bg-foreground text-surface px-6 text-sm font-medium transition-all duration-200 ease-[cubic-bezier(0.33,1,0.68,1)] hover:bg-foreground/90 active:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            加入候補名單
          </a>
          <a
            href="#features"
            className="font-label inline-flex h-11 items-center justify-center rounded-xl border border-border bg-transparent text-foreground px-6 text-sm font-medium transition-all duration-200 ease-[cubic-bezier(0.33,1,0.68,1)] hover:bg-surface active:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            了解設計
          </a>
        </div>
      </div>

      {/* Product image — bottom, full width, slightly cropped at bottom */}
      <div className="relative w-full aspect-[16/9] max-h-[560px]">
        <Image
          src="/product-1.png"
          alt="Stillform 計時器"
          fill
          className="object-contain object-bottom"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  );
}
