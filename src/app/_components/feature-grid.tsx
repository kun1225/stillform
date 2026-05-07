export function FeatureGrid() {
  return (
    <section className="w-full px-edge py-24 border-t border-border">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-16">
        <p className="font-label text-xs font-medium tracking-[0.25em] text-muted uppercase">
          功能
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
          <div className="rounded-2xl border border-border bg-surface p-10 flex flex-col gap-6 hover:shadow-md hover:shadow-border/40 transition-shadow duration-300 ease-[cubic-bezier(0.33,1,0.68,1)]">
            <div className="flex items-baseline gap-1">
              <span className="font-mono text-[clamp(3rem,8vw,5.5rem)] font-normal text-foreground leading-none">
                25
              </span>
              <span className="font-mono text-xl text-muted">分鐘</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-subtitle text-xl font-medium text-foreground">
                蕃茄鐘計時
              </h3>
              <p className="font-body-sm text-base leading-[1.6] text-muted max-w-[65ch]">
                一鍵啟動，專注 25 分鐘，休息 5 分鐘。計時結束，輕柔提示。不需要打開手機。
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-10 flex flex-col gap-6 hover:shadow-md hover:shadow-border/40 transition-shadow duration-300 ease-[cubic-bezier(0.33,1,0.68,1)]">
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
              <span className="font-mono text-sm text-muted">AM</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-subtitle text-xl font-medium text-foreground">
                鬧鐘
              </h3>
              <p className="font-body-sm text-base leading-[1.6] text-muted max-w-[65ch]">
                告別手機叫醒。設定起床時刻，從實體裝置開始清晨。
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-10 flex flex-col gap-6 hover:shadow-md hover:shadow-border/40 transition-shadow duration-300 ease-[cubic-bezier(0.33,1,0.68,1)]">
            <div className="flex items-baseline gap-1">
              <span className="font-mono text-[clamp(2.5rem,6vw,4.5rem)] font-normal text-foreground leading-none tracking-tight">
                21.5
              </span>
              <span className="font-mono text-2xl text-muted">°C</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-subtitle text-xl font-medium text-foreground">
                環境感知
              </h3>
              <p className="font-body-sm text-base leading-[1.6] text-muted max-w-[65ch]">
                自動顯示室溫與日期。必要的資訊，不多一件。
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-10 flex flex-col gap-6 hover:shadow-md hover:shadow-border/40 transition-shadow duration-300 ease-[cubic-bezier(0.33,1,0.68,1)]">
            <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-background" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-subtitle text-xl font-medium text-foreground">
                實體操控
              </h3>
              <p className="font-body-sm text-base leading-[1.6] text-muted max-w-[65ch]">
                單一按鍵，無 App，無設定畫面。拿到手就會用。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
