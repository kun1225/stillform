import Image from "next/image";

const features = [
  {
    id: "01",
    title: "實體旋鈕，讓專注回到手感",
    description:
      "以單一步驟切換鬧鐘與蕃茄鐘，不必滑動通知、不必亮起手機。操作短，進入狀態更快。",
    detail: "為桌面而設計的操作節奏。短距離、低干擾、可預期。",
  },
  {
    id: "02",
    title: "金屬機身，值得長期陳列",
    description:
      "刷紋金屬與低彩度光感，讓它更像一件安靜的桌面物件，而不是臨時被放上的塑膠工具。",
    detail: "留白、比例、材質，一起決定桌面的秩序感。",
  },
  {
    id: "03",
    title: "時間資訊清楚，不搶走空間",
    description:
      "正面顯示只留下必要資訊：時間、模式、日期與溫度。該看見的看得見，不必承受額外訊息密度。",
    detail: "像展卡標示，而不是充滿提醒的控制面板。",
  },
];

const painPoints = [
  {
    title: "App 方便，但會把人再帶回手機裡",
    body: "打開計時器之前，先看到訊息、社群與通知。專注還沒開始，就先被打斷一次。",
  },
  {
    title: "常見計時器功能夠用，外觀卻不想留下",
    body: "廉價塑料、過亮螢幕、過多按鍵，放上桌後像臨時用品，不像你會願意長期相處的物件。",
  },
  {
    title: "桌面很用心，工具卻彼此衝突",
    body: "當螢幕、燈具、筆記本都被精心挑過，過度吵雜的計時器反而成了整體裡唯一不協調的元素。",
  },
];

const comparisons = [
  {
    label: "桌面質感",
    stillform: "可作為陳列物件",
    others: "多半偏工具感或玩具感",
  },
  {
    label: "操作干擾",
    stillform: "實體操作，不需回到手機",
    others: "常需依賴 App 或多步驟按鍵",
  },
  {
    label: "功能整合",
    stillform: "鬧鐘與蕃茄鐘合一",
    others: "常分散在不同裝置或 App",
  },
  {
    label: "資訊呈現",
    stillform: "只保留必要資訊",
    others: "常見過亮、過滿、視覺負擔高",
  },
];

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <section className="px-edge border-b border-border py-8">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="font-hero text-xl font-semibold tracking-[0.18em] text-foreground uppercase">
              Stillform
            </p>
            <p className="font-caption mt-2 text-sm text-muted">
              專注與美觀並存
            </p>
          </div>
          <a
            href="#waitlist"
            className="rounded-xl border border-border px-5 py-2.5 font-label text-sm text-foreground transition-all duration-200 hover:bg-surface active:translate-y-px"
          >
            加入 waitlist
          </a>
        </div>
      </section>

      <section className="px-edge py-10 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:items-end">
          <div className="flex flex-col justify-between gap-10">
            <div className="max-w-2xl">
              <p className="font-caption mb-5 text-sm tracking-[0.18em] text-muted uppercase">
                Physical Focus Timer
              </p>
              <h1 className="font-title text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[1.04] text-foreground">
                為安靜桌面而做的
                <br />
                實體專注計時器
              </h1>
              <p className="font-body-lg mt-6 max-w-[32rem] text-lg leading-relaxed text-muted">
                Stillform 把鬧鐘與蕃茄鐘收進同一個物件裡。少一點螢幕干擾，多一點比例、材質與留白，讓專注重新回到桌面。
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm shadow-border/50">
                <p className="font-caption text-sm tracking-[0.16em] text-muted uppercase">
                  Core Value
                </p>
                <p className="font-subtitle mt-4 text-[clamp(1.25rem,2.4vw,1.8rem)] font-medium leading-[1.3] text-foreground">
                  不只幫你計時，也維持桌面的秩序感。
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-foreground p-6 text-background shadow-sm shadow-border/50">
                <p className="font-caption text-sm tracking-[0.16em] uppercase text-background/70">
                  For
                </p>
                <p className="font-subtitle mt-4 text-[clamp(1.15rem,2vw,1.5rem)] font-medium leading-[1.35]">
                  遠端工作者
                  <br />
                  設計敏感型使用者
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#waitlist"
                className="rounded-xl bg-foreground px-6 py-2.5 font-label text-sm text-background transition-all duration-200 hover:opacity-90 active:-translate-y-px"
              >
                申請首批通知
              </a>
              <a
                href="#comparison"
                className="rounded-xl border border-border px-6 py-2.5 font-label text-sm text-foreground transition-all duration-200 hover:bg-surface active:-translate-y-px"
              >
                看比較
              </a>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:grid-cols-1">
            <figure className="overflow-hidden rounded-[2rem] border border-border bg-surface p-3 shadow-sm shadow-border/50">
              <Image
                src="/product-1.png"
                alt="Stillform 實體專注計時器放置於木質桌面上"
                width={1448}
                height={1086}
                priority
                className="h-full w-full rounded-[1.5rem] object-cover"
              />
            </figure>
            <div className="grid gap-5 md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
              <figure className="overflow-hidden rounded-[2rem] border border-border bg-surface p-3 shadow-sm shadow-border/50">
                <Image
                  src="/product-2.png"
                  alt="Stillform 實體專注計時器的產品形象照"
                  width={1448}
                  height={1086}
                  className="h-full w-full rounded-[1.5rem] object-cover"
                />
              </figure>
              <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-sm shadow-border/50">
                <p className="font-caption text-sm tracking-[0.16em] text-muted uppercase">
                  Display Notes
                </p>
                <div className="mt-6 space-y-6">
                  <div>
                    <p className="font-label text-sm text-muted">材質語言</p>
                    <p className="font-subtitle mt-2 text-[1.2rem] font-medium leading-[1.35] text-foreground">
                      霧銀金屬外殼
                    </p>
                  </div>
                  <div>
                    <p className="font-label text-sm text-muted">互動核心</p>
                    <p className="font-subtitle mt-2 text-[1.2rem] font-medium leading-[1.35] text-foreground">
                      頂部旋鈕一轉即切換專注模式
                    </p>
                  </div>
                  <div>
                    <p className="font-label text-sm text-muted">視覺節奏</p>
                    <p className="font-body-sm mt-2 text-base leading-relaxed text-muted">
                      低亮度顯示與暖色底光，只在需要時被注意到。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-edge border-y border-border bg-surface/70 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(240px,0.7fr)_minmax(0,1.3fr)]">
          <div>
            <p className="font-caption text-sm tracking-[0.18em] text-muted uppercase">
              功能特色
            </p>
            <h2 className="font-title mt-4 text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[1.08] text-foreground">
              三個重點。
              <br />
              夠用，也剛好。
            </h2>
          </div>
          <div className="space-y-5">
            {features.map((feature) => (
              <article
                key={feature.id}
                className="grid gap-5 rounded-2xl border border-border bg-surface p-6 shadow-sm shadow-border/50 md:grid-cols-[88px_minmax(0,1fr)]"
              >
                <p className="font-mono text-sm text-primary">{feature.id}</p>
                <div>
                  <h3 className="font-subtitle text-[clamp(1.2rem,2vw,1.7rem)] font-medium leading-[1.3] text-foreground">
                    {feature.title}
                  </h3>
                  <p className="font-body-sm mt-4 max-w-[42rem] text-base leading-relaxed text-muted">
                    {feature.description}
                  </p>
                  <p className="font-caption mt-4 text-sm leading-relaxed text-muted">
                    {feature.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-edge py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="max-w-xl">
            <p className="font-caption text-sm tracking-[0.18em] text-muted uppercase">
              受眾痛點
            </p>
            <h2 className="font-title mt-4 text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[1.08] text-foreground">
              專注工具太吵。
              <br />
              桌面卻想安靜。
            </h2>
            <p className="font-body-lg mt-6 text-lg leading-relaxed text-muted">
              我們面對的是同一種矛盾：想更專注，卻不想再把自己交還給另一個發光的介面。
            </p>
          </div>
          <div className="grid gap-4">
            {painPoints.map((point) => (
              <article
                key={point.title}
                className="rounded-2xl border border-border bg-surface p-6 shadow-sm shadow-border/50"
              >
                <h3 className="font-subtitle text-[clamp(1.2rem,2vw,1.55rem)] font-medium leading-[1.35] text-foreground">
                  {point.title}
                </h3>
                <p className="font-body-sm mt-3 text-base leading-relaxed text-muted">
                  {point.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="comparison"
        className="px-edge border-y border-border bg-surface/70 py-16 md:py-20"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(240px,0.7fr)_minmax(0,1.3fr)]">
          <div>
            <p className="font-caption text-sm tracking-[0.18em] text-muted uppercase">
              競品比較
            </p>
            <h2 className="font-title mt-4 text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[1.08] text-foreground">
              不是功能堆疊。
              <br />
              是桌面上的位置感。
            </h2>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-border bg-surface shadow-sm shadow-border/50">
            <div className="grid grid-cols-[minmax(120px,0.8fr)_minmax(0,1fr)_minmax(0,1fr)] border-b border-border bg-background/80">
              <div className="p-5 font-label text-sm text-muted">比較項目</div>
              <div className="border-l border-border p-5 font-label text-sm text-foreground">
                Stillform
              </div>
              <div className="border-l border-border p-5 font-label text-sm text-muted">
                常見 App／實體計時器
              </div>
            </div>
            {comparisons.map((item, index) => (
              <div
                key={item.label}
                className={`grid grid-cols-[minmax(120px,0.8fr)_minmax(0,1fr)_minmax(0,1fr)] ${
                  index !== comparisons.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="p-5 font-label text-sm text-foreground">
                  {item.label}
                </div>
                <div className="border-l border-border p-5 font-body-sm text-base leading-relaxed text-foreground">
                  {item.stillform}
                </div>
                <div className="border-l border-border p-5 font-body-sm text-base leading-relaxed text-muted">
                  {item.others}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="px-edge py-16 md:py-20">
        <div className="grid gap-8 rounded-[2rem] border border-border bg-surface p-6 shadow-sm shadow-border/50 md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)] lg:items-end">
          <div className="max-w-2xl">
            <p className="font-caption text-sm tracking-[0.18em] text-muted uppercase">
              加入 waitlist
            </p>
            <h2 className="font-title mt-4 text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.08] text-foreground">
              正式開放前，
              <br />
              先收到第一批通知。
            </h2>
            <p className="font-body-lg mt-6 text-lg leading-relaxed text-muted">
              留下電子郵件，我們會在產品開放時寄出首批通知與後續更新。
            </p>
          </div>

          <form className="grid gap-4">
            <label htmlFor="email" className="font-label text-sm text-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              className="min-h-14 rounded-xl border border-border bg-background px-4 text-base text-foreground placeholder:text-muted"
            />
            <button
              type="button"
              className="rounded-xl bg-foreground px-6 py-3 font-label text-sm text-background transition-all duration-200 hover:opacity-90 active:-translate-y-px"
            >
              登記候補名單
            </button>
            <p className="font-caption text-sm leading-relaxed text-muted">
              目前先完成版面展示，送出串接可在下一步接上郵件服務。
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
