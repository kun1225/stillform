import { ScrollReveal } from "@/lib/scroll-reveal";

const rows = [
  {
    feature: "OLED Display",
    stillform: true,
    smart: "LCD, varies",
    analog: false,
  },
  {
    feature: "Focus Mode",
    stillform: true,
    smart: false,
    analog: false,
  },
  {
    feature: "Ambient Light",
    stillform: true,
    smart: false,
    analog: false,
  },
  {
    feature: "Aluminium Body",
    stillform: true,
    smart: false,
    analog: "Varies",
  },
  {
    feature: "No Notifications",
    stillform: true,
    smart: false,
    analog: true,
  },
  {
    feature: "Auto Brightness",
    stillform: true,
    smart: false,
    analog: false,
  },
];

type CellValue = boolean | string;

function Cell({ value, highlight }: { value: CellValue; highlight?: boolean }) {
  if (typeof value === "boolean") {
    return (
      <span
        className={[
          "text-[13px] font-body font-semibold",
          value
            ? highlight
              ? "text-amber"
              : "text-ink"
            : "text-ink-3",
        ].join(" ")}
      >
        {value ? "Yes" : "—"}
      </span>
    );
  }
  return (
    <span className="text-[13px] font-body font-normal text-ink-3">{value}</span>
  );
}

export function ComparisonSection() {
  return (
    <section className="bg-canvas border-t border-rule">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <ScrollReveal>
          <p className="text-[11px] font-body font-semibold tracking-[0.3em] uppercase text-ink-3 mb-4">
            Comparison
          </p>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,4rem)] leading-[0.95] tracking-[-0.01em] text-ink mb-16 md:mb-20">
            Honest comparison.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="overflow-x-auto -mx-6 md:mx-0">
            <table className="w-full min-w-[520px] md:min-w-0 px-6 md:px-0">
              <thead>
                <tr className="border-b border-rule">
                  <th className="text-left py-4 pr-8 text-[11px] font-body font-semibold tracking-[0.25em] uppercase text-ink-3 w-1/3 pl-6 md:pl-0">
                    Feature
                  </th>
                  <th className="text-left py-4 pr-8 text-[11px] font-body font-semibold tracking-[0.25em] uppercase text-amber w-1/4">
                    Stillform
                  </th>
                  <th className="text-left py-4 pr-8 text-[11px] font-body font-semibold tracking-[0.25em] uppercase text-ink-3 w-1/4">
                    Smart Clock
                  </th>
                  <th className="text-left py-4 text-[11px] font-body font-semibold tracking-[0.25em] uppercase text-ink-3 pr-6 md:pr-0">
                    Desk Clock
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.feature} className="border-b border-rule last:border-0">
                    <td className="py-5 pr-8 text-[14px] font-body font-normal text-ink pl-6 md:pl-0">
                      {row.feature}
                    </td>
                    <td className="py-5 pr-8">
                      <Cell value={row.stillform} highlight />
                    </td>
                    <td className="py-5 pr-8">
                      <Cell value={row.smart} />
                    </td>
                    <td className="py-5 pr-6 md:pr-0">
                      <Cell value={row.analog} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
