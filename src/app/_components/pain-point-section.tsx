const painPoints = [
  {
    number: "01",
    problem: "App 就是干擾本身",
    detail:
      "手機上的蕃茄鐘 App，和 Instagram、訊息通知並排在同一個螢幕。開啟計時，卻留在誘惑旁邊。",
  },
  {
    number: "02",
    problem: "廉價計時器破壞桌面質感",
    detail:
      "市面上的實體計時器大多是塑料外殼、廉價按鍵，放在精心布置的桌面上，格格不入。",
  },
  {
    number: "03",
    problem: "需要設定才能使用",
    detail:
      "藍牙配對、App 下載、帳號建立——一個計時器不該需要說明書。",
  },
  {
    number: "04",
    problem: "功能過多，焦點分散",
    detail:
      "健康追蹤、任務清單、數據報告。這些功能讓你盯著螢幕更久，不是更少。",
  },
];

export default function PainPointSection() {
  return (
    <section className="py-24 px-edge bg-background">
      <div className="mb-16">
        <p className="font-label text-sm tracking-widest uppercase text-muted mb-3">
          你是否有這些困擾
        </p>
        <h2 className="font-title text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-tight text-foreground max-w-lg">
          專注工具，
          <br />
          反而成了阻礙。
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-2xl overflow-hidden">
        {painPoints.map((item) => (
          <div
            key={item.number}
            className="bg-surface p-8 flex flex-col gap-4"
          >
            <span className="font-mono text-sm text-muted">{item.number}</span>
            <h3 className="font-subtitle text-[clamp(1.25rem,2vw,1.5rem)] font-medium text-foreground">
              {item.problem}
            </h3>
            <p className="font-body-sm text-base leading-[1.65] text-muted">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
