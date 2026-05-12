import Image from "next/image";

export function HeroSection() {
  return (
    <section className="pt-16 min-h-screen flex items-center bg-background">
      <div className="px-edge w-full py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="flex flex-col gap-8 max-w-xl">
          <div className="flex flex-col gap-4">
            <p className="font-caption text-sm text-muted tracking-widest uppercase">
              桌面計時器
            </p>
            <h1 className="font-hero text-[clamp(2.75rem,6vw,5rem)] font-bold leading-[1.1] text-foreground">
              專注，
              <br />
              從一件
              <br />
              物件開始
            </h1>
          </div>

          <p className="font-body-lg text-lg leading-[1.8] text-muted max-w-[52ch]">
            鬧鐘與蕃茄鐘，合為一物。設計語言極簡克制，放在任何桌面都不違和——是少數值得陳列的生產力工具。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#waitlist"
              className="font-label inline-flex items-center justify-center bg-primary text-background px-6 py-3 rounded-xl transition-all duration-200 hover:bg-primary/90 active:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              加入候補名單
            </a>
            <a
              href="#features"
              className="font-label inline-flex items-center justify-center bg-transparent text-foreground border border-border px-6 py-3 rounded-xl transition-all duration-200 hover:bg-surface active:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              了解更多
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-lg aspect-[4/3]">
            <Image
              src="/product-1.png"
              alt="Stillform 桌面計時器，放置於工作桌上"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
