import Image from "next/image";

export function WhySection() {
  return (
    <section className="w-full px-edge py-24 border-t border-border">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-16">
        <p className="font-label text-xs font-medium tracking-[0.25em] text-muted uppercase">
          設計出發點
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-center">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-surface">
            <Image
              src="/product-2.png"
              alt="Stillform 計時器正面清晰展示圖，顯示 09:41 時間"
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>

          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4 py-8 border-t border-border">
              <h2 className="font-subtitle text-[clamp(1.25rem,2.4vw,2rem)] font-medium text-foreground">
                值得陳列的工具
              </h2>
              <p className="font-body-sm text-base leading-[1.6] text-muted max-w-[65ch]">
                啞光鋁合金、單色顯示器、精準比例。放在桌上，不是為了提醒你有多少事沒做，而是讓工作空間多一份質感。
              </p>
            </div>

            <div className="flex flex-col gap-4 py-8 border-t border-border">
              <h2 className="font-subtitle text-[clamp(1.25rem,2.4vw,2rem)] font-medium text-foreground">
                讓專注回到物理世界
              </h2>
              <p className="font-body-sm text-base leading-[1.6] text-muted max-w-[65ch]">
                整合鬧鐘與蕃茄鐘於一體，拿走拿起手機的理由。時間感重新變得具體，不再是畫面上滑動的數字。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
