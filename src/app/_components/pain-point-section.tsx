const pains = [
  {
    number: "01",
    title: "手機計時，專注被通知瓦解",
    desc: "每次拿起手機確認時間，都是一次注意力的切換。App 計時器把分心的源頭，放在了工具本身。",
  },
  {
    number: "02",
    title: "廉價計時器，破壞桌面質感",
    desc: "市面上的實體計時器，大多為功能而生，設計語言與精心佈置的工作環境格格不入。",
  },
  {
    number: "03",
    title: "功能分散，管理成本疊加",
    desc: "鬧鐘一個裝置、蕃茄鐘一個 App，兩套操作邏輯，兩倍的認知負擔。",
  },
];

export function PainPointSection() {
  return (
    <section className="bg-background-dark py-28 px-edge">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16">
          <p className="font-caption text-sm text-primary/60 tracking-widest uppercase mb-4">
            問題
          </p>
          <h2 className="font-title text-[clamp(2rem,4vw,3.5rem)] font-semibold text-background leading-[1.15]">
            你的桌面，
            <br />
            值得更好的工具
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/20">
          {pains.map((pain) => (
            <div key={pain.number} className="bg-background-dark p-8 lg:p-12">
              <span className="font-mono text-sm text-primary/50 block mb-6">
                {pain.number}
              </span>
              <h3 className="font-subtitle text-xl font-medium text-background mb-4 leading-[1.4]">
                {pain.title}
              </h3>
              <p className="font-body-sm text-base leading-[1.8] text-background/60">
                {pain.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
