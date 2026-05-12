import Image from "next/image";

const features = [
  {
    title: "雙功能整合",
    desc: "鬧鐘與蕃茄鐘整合於單一裝置，一台取代兩套工具，減少桌面雜亂。",
  },
  {
    title: "極簡顯示介面",
    desc: "大字時間顯示，計時狀態一目了然。只呈現必要資訊，視覺不過載。",
  },
  {
    title: "環境光提示",
    desc: "底部琥珀光帶非干擾性地指示計時狀態，無需直視螢幕即可感知。",
  },
  {
    title: "鋁合金工藝機身",
    desc: "金屬質感、精確比例、沉穩重量——放在桌上，本身就是一件值得陳列的物件。",
  },
];

export function FeatureSection() {
  return (
    <section id="features" className="bg-background py-28 px-edge">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <div className="relative aspect-square max-w-lg w-full mx-auto lg:mx-0">
            <Image
              src="/product-2.png"
              alt="Stillform 計時器正面特寫"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 80vw, 40vw"
            />
          </div>

          <div className="flex flex-col gap-12">
            <div>
              <p className="font-caption text-sm text-muted tracking-widest uppercase mb-4">
                功能
              </p>
              <h2 className="font-title text-[clamp(2rem,4vw,3.5rem)] font-semibold text-foreground leading-[1.15]">
                為專注
                <br />
                而設計
              </h2>
            </div>

            <div className="flex flex-col gap-8">
              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  className="flex gap-6 border-t border-border pt-6"
                >
                  <span className="font-mono text-xs text-muted shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-subtitle text-lg font-medium text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-body-sm text-base leading-[1.8] text-muted max-w-[52ch]">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
