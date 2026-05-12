const rows = [
  { label: "設計質感", app: false, cheap: false, stillform: true },
  { label: "零手機干擾", app: false, cheap: true, stillform: true },
  { label: "鬧鐘功能", app: true, cheap: false, stillform: true },
  { label: "蕃茄鐘功能", app: true, cheap: true, stillform: true },
  { label: "值得桌面陳列", app: false, cheap: false, stillform: true },
];

function Check({ value, highlight }: { value: boolean; highlight?: boolean }) {
  if (value) {
    return (
      <span
        className={`inline-block w-5 h-5 rounded-full ${highlight ? "bg-primary" : "bg-background/20"} relative`}
        aria-label="是"
      >
        <svg
          viewBox="0 0 20 20"
          fill="none"
          className="w-5 h-5 absolute inset-0"
        >
          <path
            d="M5 10l4 4 6-6"
            stroke={highlight ? "#eaefef" : "#eaefef"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }
  return (
    <span className="inline-block w-5 h-5 text-background/20" aria-label="否">
      —
    </span>
  );
}

export function ComparisonSection() {
  return (
    <section className="bg-background-dark py-28 px-edge">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16">
          <p className="font-caption text-sm text-primary/60 tracking-widest uppercase mb-4">
            比較
          </p>
          <h2 className="font-title text-[clamp(2rem,4vw,3.5rem)] font-semibold text-background leading-[1.15]">
            同樣是計時，
            <br />
            差距在細節
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px]">
            <thead>
              <tr className="border-b border-background/10">
                <th className="font-label text-sm font-medium text-background/40 text-left pb-6 pr-8 w-1/2">
                  &nbsp;
                </th>
                <th className="font-label text-sm font-medium text-background/40 pb-6 px-4 text-center">
                  手機 App
                </th>
                <th className="font-label text-sm font-medium text-background/40 pb-6 px-4 text-center">
                  廉價計時器
                </th>
                <th className="font-label text-sm font-medium text-background pb-6 px-4 text-center">
                  Stillform
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-background/10">
                  <td className="font-body-sm text-base text-background/70 py-5 pr-8">
                    {row.label}
                  </td>
                  <td className="py-5 px-4 text-center">
                    <Check value={row.app} />
                  </td>
                  <td className="py-5 px-4 text-center">
                    <Check value={row.cheap} />
                  </td>
                  <td className="py-5 px-4 text-center">
                    <Check value={row.stillform} highlight />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
