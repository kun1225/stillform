import Image from "next/image";

const features = [
  {
    tag: "設計",
    title: "每個比例都有意義",
    body: "外殼採用陽極氧化鋁，觸感沉穩。旋鈕角度、數字刻度、指示燈間距——每一個細節都經過反覆推敲，放在任何桌面都不違和。",
    image: "/product-1.png",
    imageAlt: "Stillform 計時器正面",
    reverse: false,
  },
  {
    tag: "功能",
    title: "鬧鐘與蕃茄鐘，合而為一",
    body: "單一旋鈕切換模式：蕃茄鐘專注段落、短暫休息提醒、長休息循環，以及日常鬧鐘。不需要 App，不需要藍牙配對，不需要帳號。",
    image: "/product-2.png",
    imageAlt: "Stillform 計時器側面",
    reverse: true,
  },
];

export default function FeatureSection() {
  return (
    <section id="features" className="py-24 bg-surface">
      <div className="px-edge">
        <div className="mb-16">
          <p className="font-label text-sm tracking-widest uppercase text-muted mb-3">
            產品特點
          </p>
          <h2 className="font-title text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-tight text-foreground">
            少，但更好。
          </h2>
        </div>

        <div className="flex flex-col gap-24">
          {features.map((feature) => (
            <div
              key={feature.tag}
              className={`grid md:grid-cols-[3fr_2fr] gap-12 items-center ${
                feature.reverse ? "md:grid-cols-[2fr_3fr]" : ""
              }`}
            >
              {feature.reverse ? (
                <>
                  <FeatureImage src={feature.image} alt={feature.imageAlt} />
                  <FeatureText
                    tag={feature.tag}
                    title={feature.title}
                    body={feature.body}
                  />
                </>
              ) : (
                <>
                  <FeatureText
                    tag={feature.tag}
                    title={feature.title}
                    body={feature.body}
                  />
                  <FeatureImage src={feature.image} alt={feature.imageAlt} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureText({
  tag,
  title,
  body,
}: {
  tag: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-label text-xs tracking-widest uppercase text-muted">
        {tag}
      </p>
      <h3 className="font-subtitle text-[clamp(1.25rem,2.4vw,2rem)] font-medium text-foreground">
        {title}
      </h3>
      <p className="font-body-lg text-lg leading-[1.75] text-muted max-w-[65ch]">
        {body}
      </p>
    </div>
  );
}

function FeatureImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-square rounded-2xl overflow-hidden border border-border bg-background">
      <Image src={src} alt={alt} fill className="object-contain p-8" sizes="(max-width: 768px) 100vw, 40vw" />
    </div>
  );
}
