import Image from "next/image";

const keyDetails = [
  "實體旋鈕切換專注節奏",
  "霧銀金屬外殼",
  "低亮度顯示",
];

const comparisonRows = [
  {
    label: "進入專注",
    stillform: "直接操作",
    others: "通常先回到手機",
  },
  {
    label: "桌面存在感",
    stillform: "像物件",
    others: "偏工具感",
  },
];

export default function Home() {
  return (
    <main className="text-foreground">
      <section className="px-edge border-b border-border/80 py-6">
        <div className="flex items-center justify-between gap-6">
          <div className="space-y-2">
            <p className="font-hero text-lg font-semibold tracking-[0.22em] uppercase">
              Stillform
            </p>
            <p className="font-caption text-sm tracking-[0.1em] text-muted uppercase">
              Physical Focus Timer
            </p>
          </div>

          <a
            href="#waitlist"
            className="min-h-11 rounded-full bg-foreground px-5 py-2.5 font-label text-sm text-background transition-transform duration-150 [transition-timing-function:var(--ease-out)] hover:-translate-y-0.5 active:translate-y-0.5"
          >
            加入 waitlist
          </a>
        </div>
      </section>

      <section className="px-edge py-[clamp(4rem,9vw,8rem)]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-end">
          <div className="space-y-10">
            <div className="max-w-3xl space-y-6">
              <p className="font-caption text-sm tracking-[0.18em] text-primary uppercase">
                For calm desks and deliberate work
              </p>
              <h1 className="font-title max-w-4xl text-[clamp(3.5rem,8vw,7.2rem)] leading-[0.9] tracking-[-0.045em]">
                讓專注回到
                <br />
                手感與桌面。
              </h1>
              <p className="font-body-lg max-w-[30rem] text-lg leading-8 text-muted">
                Stillform 是一件為安靜桌面而做的實體計時器。
              </p>
            </div>

            <div className="grid gap-4 border-t border-border/80 pt-8 sm:grid-cols-3 sm:gap-6">
              {keyDetails.map((detail) => (
                <p
                  key={detail}
                  className="font-subtitle text-base leading-7 text-foreground/88"
                >
                  {detail}
                </p>
              ))}
            </div>

            <a
              href="#waitlist"
              className="inline-flex min-h-12 items-center rounded-full bg-foreground px-6 py-3 font-label text-sm text-background transition-transform duration-150 [transition-timing-function:var(--ease-out)] hover:-translate-y-0.5 active:translate-y-0.5"
            >
              申請首批通知
            </a>
          </div>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.24fr)_minmax(0,0.76fr)]">
            <figure className="overflow-hidden rounded-[2rem] outline outline-1 -outline-offset-1 outline-black/10 shadow-[var(--shadow-strong)] lg:row-span-2">
              <Image
                src="/product-1.png"
                alt="Stillform 實體專注計時器放置於木質桌面上"
                width={1448}
                height={1086}
                priority
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="rounded-[1.75rem] bg-surface-strong p-6 shadow-[var(--shadow-soft)]">
              <p className="font-title text-[clamp(1.9rem,3vw,2.9rem)] leading-[1.02] tracking-[-0.04em]">
                少一點干擾，
                <br />
                多一點節奏。
              </p>
            </div>
            <figure className="overflow-hidden rounded-[1.75rem] outline outline-1 -outline-offset-1 outline-black/10 shadow-[var(--shadow-soft)]">
              <Image
                src="/product-2.png"
                alt="Stillform 實體專注計時器的產品形象照"
                width={1448}
                height={1086}
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="px-edge border-y border-border/80 py-[clamp(3.5rem,7vw,6rem)]">
        <div className="grid gap-10 lg:grid-cols-[minmax(220px,0.58fr)_minmax(0,1.42fr)]">
          <div className="space-y-4">
            <p className="font-caption text-sm tracking-[0.18em] text-muted uppercase">
              Why
            </p>
            <h2 className="font-title text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.98] tracking-[-0.04em]">
              專注工具
              <br />
              不該先打斷你。
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end">
            <p className="font-body-lg max-w-[34rem] text-lg leading-8 text-muted">
              用實體操作取代介面切換，讓你更快開始，也讓桌面維持安靜。
            </p>

            <div className="rounded-[1.75rem] bg-surface p-6 shadow-[var(--shadow-soft)]">
              <p className="font-caption text-xs tracking-[0.18em] text-muted uppercase">
                Core value
              </p>
              <p className="font-subtitle mt-4 text-[1.4rem] leading-[1.45]">
                不只幫你計時，
                <br />
                也維持桌面的秩序感。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-edge py-[clamp(3.5rem,7vw,6rem)]">
        <div className="grid gap-10 lg:grid-cols-[minmax(220px,0.58fr)_minmax(0,1.42fr)]">
          <div className="space-y-4">
            <p className="font-caption text-sm tracking-[0.18em] text-muted uppercase">
              Comparison
            </p>
            <h2 className="font-title text-[clamp(2.2rem,4.8vw,3.8rem)] leading-[1] tracking-[-0.04em]">
              差異很少，
              <br />
              但很關鍵。
            </h2>
          </div>

          <div className="overflow-hidden rounded-[1.8rem] bg-background shadow-[var(--shadow-soft)]">
            {comparisonRows.map((item, index) => (
              <div
                key={item.label}
                className={`grid gap-4 p-5 md:grid-cols-[140px_minmax(0,1fr)_minmax(0,1fr)] md:gap-6 ${
                  index === comparisonRows.length - 1
                    ? ""
                    : "border-b border-border/70"
                }`}
              >
                <p className="font-label text-sm text-foreground">{item.label}</p>
                <p className="font-body-sm text-base leading-7 text-foreground">
                  {item.stillform}
                </p>
                <p className="font-body-sm text-base leading-7 text-muted">
                  {item.others}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="px-edge py-[clamp(4rem,8vw,7rem)]">
        <div className="grid gap-10 rounded-[2.25rem] bg-foreground px-6 py-8 text-background shadow-[var(--shadow-strong)] md:px-8 md:py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-end">
          <div className="max-w-3xl space-y-6">
            <p className="font-caption text-sm tracking-[0.18em] text-background/68 uppercase">
              Waitlist
            </p>
            <h2 className="font-title text-[clamp(2.7rem,5vw,4.8rem)] leading-[0.95] tracking-[-0.04em]">
              想在開放前
              <br />
              先收到通知，
              <br />
              就留在名單裡。
            </h2>
          </div>

          <form className="grid gap-4 rounded-[1.6rem] bg-background px-5 py-5 text-foreground shadow-[var(--shadow-soft)] md:px-6 md:py-6">
            <label htmlFor="email" className="font-label text-sm text-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              className="min-h-12 rounded-full border border-border/80 bg-background px-4 text-base text-foreground placeholder:text-muted"
            />
            <button
              type="button"
              className="min-h-12 rounded-full bg-foreground px-6 py-3 font-label text-sm text-background transition-transform duration-150 [transition-timing-function:var(--ease-out)] hover:-translate-y-0.5 active:translate-y-0.5"
            >
              登記候補名單
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
