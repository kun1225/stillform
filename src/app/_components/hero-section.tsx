import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-edge overflow-hidden">
      <div className="w-full flex flex-col items-center gap-10">
        <p className="font-label text-xs font-medium tracking-[0.25em] text-muted uppercase">
          實體計時器 · 即將推出
        </p>

        <h1 className="font-hero text-[clamp(2.75rem,6vw,5rem)] font-bold tracking-tight text-foreground text-center max-w-2xl leading-[1.1]">
          專注，值得更好的形式。
        </h1>

        <div className="w-full max-w-3xl relative">
          <Image
            src="/product-1.png"
            alt="Stillform 計時器放置於木質工作桌上，旁邊是筆記本與筆電"
            width={1200}
            height={800}
            className="w-full h-auto object-cover rounded-2xl sm:max-h-[50vw] md:max-h-none"
            priority
          />
        </div>

        <p className="font-body-lg text-lg leading-[1.75] text-muted text-center max-w-[52ch]">
          整合鬧鐘與蕃茄鐘的實體計時器。放在桌上，不只是工具。
        </p>

        <a
          href="#waitlist"
          className="font-label bg-foreground text-background px-6 py-2.5 rounded-xl font-medium transition-all duration-200 ease-[cubic-bezier(0.33,1,0.68,1)] hover:bg-foreground/85 active:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          加入候補名單
        </a>
      </div>
    </section>
  );
}
