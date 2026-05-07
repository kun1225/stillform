const attributes = [
  "設計美感",
  "實體裝置",
  "無需 App / 帳號",
  "鬧鐘功能",
  "蕃茄鐘模式",
  "桌面陳設感",
  "單一旋鈕操作",
];

const competitors = [
  {
    name: "Stillform",
    isUs: true,
    values: [true, true, true, true, true, true, true],
  },
  {
    name: "蕃茄鐘 App",
    isUs: false,
    values: [false, false, false, false, true, false, false],
  },
  {
    name: "一般計時器",
    isUs: false,
    values: [false, true, true, false, false, false, false],
  },
  {
    name: "智慧鬧鐘",
    isUs: false,
    values: [false, true, false, true, false, false, false],
  },
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="7" fill="#44403C" fillOpacity="0.12" />
      <path
        d="M5 8l2 2 4-4"
        stroke="#44403C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 6l-4 4M6 6l4 4"
        stroke="#78716C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ComparisonSection() {
  return (
    <section className="py-24 px-edge bg-surface">
      <div className="mb-16">
        <p className="font-label text-sm tracking-widest uppercase text-muted mb-3">
          為什麼選 Stillform
        </p>
        <h2 className="font-title text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-tight text-foreground max-w-lg">
          市面上沒有第二個。
        </h2>
      </div>

      <div className="rounded-2xl border border-border overflow-hidden">
        {/* Header row */}
        <div
          className="grid bg-background border-b border-border"
          style={{
            gridTemplateColumns: `2fr repeat(${competitors.length}, 1fr)`,
          }}
        >
          <div className="p-4" />
          {competitors.map((c) => (
            <div
              key={c.name}
              className={`p-4 text-center ${c.isUs ? "bg-primary/5" : ""}`}
            >
              <span
                className={`font-label text-sm font-medium ${
                  c.isUs ? "text-foreground" : "text-muted"
                }`}
              >
                {c.name}
              </span>
            </div>
          ))}
        </div>

        {/* Data rows */}
        {attributes.map((attr, rowIndex) => (
          <div
            key={attr}
            className={`grid border-b border-border last:border-b-0 ${
              rowIndex % 2 === 0 ? "bg-surface" : "bg-background"
            }`}
            style={{
              gridTemplateColumns: `2fr repeat(${competitors.length}, 1fr)`,
            }}
          >
            <div className="p-4 flex items-center">
              <span className="font-body-sm text-sm text-foreground">
                {attr}
              </span>
            </div>
            {competitors.map((c) => (
              <div
                key={c.name}
                className={`p-4 flex items-center justify-center ${
                  c.isUs ? "bg-primary/5" : ""
                }`}
              >
                {c.values[rowIndex] ? <CheckIcon /> : <CrossIcon />}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
