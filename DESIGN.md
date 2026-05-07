# 設計系統：Stillform

## 1. 視覺氛圍

克制的編輯陳列氛圍，像一本高級產品型錄與一個安靜的展覽空間之間的交界。整體情緒沉靜、精緻、留白充足，讓產品像桌面上的收藏物，而不是被包裝成高噪音的科技新品。資訊密度維持 balanced，以清楚層級與視線停頓點建立閱讀節奏；動態強度採 fluid，讓互動像翻頁、滑移與對焦，而不是廣告式衝擊。

## 2. 色彩系統

- primary（#7A4A43）— 酒棕紅：唯一強調色，用於 CTA、active 狀態、focus ring（飽和度 < 80%。禁用紫色／霓虹色。）
- background（#F6F2ED）— 紙白：主要背景底色
- surface（#FFFCF8）— 展卡白：卡片與容器填色
- foreground（#1F1A17）— 墨炭灰：主要文字
- muted（#6F655D）— 煙灰褐：次要文字、說明、metadata
- border（#D9CEC3）— 細紙纖維灰：卡片邊框、1px 結構線

## 3. 字型規則

- **專案語言：** CJK primary。主要內容以繁體中文為主；若有少量英文產品型號、時間數字或短標，可讓 `font-hero` 使用 Latin 字體，其餘正文與標題 token 一律使用 CJK stack。
- 字體 token 名稱必須直接對應語義層級，禁止把多個層級共用成 `font-sans` 或 `font-display`
- **Hero：** `font-hero` → `Geist` — `text-[clamp(2.75rem,6vw,5rem)] font-bold` — 頁面主標語、Banner 大字，每頁最多出現一次
- **Title：** `font-title` → `"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif` — `text-[clamp(2rem,4vw,3.5rem)] font-semibold` — Section 標題、頁面 H1
- **Subtitle：** `font-subtitle` → `"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif` — `text-[clamp(1.25rem,2.4vw,2rem)] font-medium` — 卡片標題、H2/H3、模組小標
- **Body-lg：** `font-body-lg` → `"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif` — `text-lg leading-relaxed max-w-[65ch]` — 文章長文、Landing page 引言段落
- **Body-sm：** `font-body-sm` → `"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif` — `text-base leading-relaxed max-w-[65ch]` — 一般正文、側欄說明、表單 helper text
- **Caption：** `font-caption` → `"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif` — `text-sm leading-normal text-muted` — 圖片說明、日期、metadata
- **Label：** `font-label` → `"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif` — `text-sm font-medium` — 按鈕文字、tag、badge、表單 label
- **Mono：** `font-mono` → `Geist Mono` — `text-sm` — 程式碼、SKU、時間戳記、高密度數字
- **規則：**
  - CJK 正文的 `line-height` 維持在 `1.2em` 到 `1.5em` 之間，依密度與字級調整，不要為了緊湊而再壓低
  - 標題優先使用 `clamp(...)` 做 responsive scaling，正文維持穩定
  - Dashboard / software UI 禁用 serif-backed title tokens
  - 禁用 Inter。若使用 serif，避免 generic serifs（如 `Times New Roman`、`Georgia`、`Garamond`）

## 4. 元件樣式

所有帶顏色語意的 class（`text-*`、`bg-*`、`border-*`、`ring-*`、`shadow-*`、`hover:*`、`focus:*`、`active:*`、`from-*`/`to-*` 等）一律只能使用第 2 節定義的語義 token。

禁止範例：`text-zinc-900`、`bg-white`、`border-zinc-200`、`hover:bg-zinc-100`、`text-[#ddd]`、`ring-zinc-400`

- **主要按鈕：** `bg-foreground text-background px-6 py-2.5 rounded-xl font-medium transition-all duration-200 hover:bg-foreground/90 active:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary` — 無外發光，按壓觸覺回饋
- **次要按鈕：** `bg-transparent text-foreground border border-border px-6 py-2.5 rounded-xl font-medium transition-all duration-200 hover:bg-surface active:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary`
- **卡片：** `rounded-2xl border border-border bg-surface p-6 shadow-sm shadow-border/50 hover:shadow-md hover:shadow-border/30 transition-shadow duration-200` — 僅在層級需要陰影時使用；高密度版面改用 `border-t border-border` 分隔線取代

Stillform 的元件應該像陳列架與標籤系統，不像 SaaS dashboard。按鈕維持厚度與邊角一致，避免做多種視覺語氣；卡片內部用留白、字級、對齊建立階層，不用彩色區塊塞滿畫面。若元件需要強調互動狀態，優先靠 `opacity`、`border`、`shadow` 與 `translateY` 的細微變化完成，而不是額外加入第二強調色。

## 5. 版面原則

- 每個 section 依內容型態、資訊密度、層級與互動需求決定版面，不預設整頁只能有單一 layout
- 描述每個 section 為什麼需要某種結構，例如比較型 grid、editorial stack、tool workspace、data-dense panel，而不是套用通用模板
- Grid-first responsive architecture，但不要把 `max-w-* mx-auto` 當成預設頁面 containment
- 定義動態 page-edge token，並以 `padding-inline` 做頁面邊緣約束：

```css
:root {
  --spacing-contain-max: 1600px;
  --spacing-edge: max(
    max(min(3.5vw, 96px), 8px),
    calc((100vw - var(--spacing-contain-max)) / 2)
  );
}
```

- 頁面邊緣統一使用 `px-edge`，不要用 `mx-edge`；這樣在有 scrollbar 時寬度計算較一致
- 非對稱在有助於層級或掃視時優先，但每個 section 可依內容選擇 stacked、split、grid、rail 或 freeform composition
- 多欄版面在 `md:` 以下收合為單欄

Stillform 首頁與後續品牌頁面應優先採用 editorial stack 與 asymmetric split。Hero 區可使用偏移對齊的文字塊與產品視覺，讓主標、產品名與候補名單行動形成前後景；功能說明區則使用 2-column zig-zag 或窄 rail 結構，把每個特性視為展卡，而不是三欄等寬卡片。若有規格、FAQ 或 waitlist 表單，則改用較高密度的單欄或 split panel，維持安靜秩序，不破壞前段的陳列感。

## 6. 動態與互動

CSS 優先 — 僅在需要彈簧物理、交錯編排或無限循環時使用 Motion library。

**Easing 選法（三步驟）：**

1. **選 easing family** — 依品牌個性挑選（SINE 最柔、QUAD/CUBIC 日常 UI、QUART/QUINT 強調感、EXPO 戲劇性、BACK/ANTICIPATE 有彈性）
2. **選方向變體** — `Out`（元素進場、減速到位，最常用）、`InOut`（畫面間移動）、`In`（元素離場，少用）
3. **套用對應 cubic-bezier**

**常用模式：**

- **Hover：** `transition-[property] duration-200 ease-[cubicOut]`
- **進場 & 離場：** `transition-[property] duration-300 ease-[cubicOut]` 或 `ease-[quartOut]`
- **跨畫面移動：** `transition-[property] duration-500 ease-[cubicInOut]`
- **Spring 預設（Motion）：** `transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1 }}`
- **快速 Spring（Motion）：** `transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}`

僅動畫 `transform` 與 `opacity` — 禁止動畫 layout 屬性。

Stillform 的動態應像手指推動金屬旋鈕或翻開產品型錄的節奏。互動細節要持續存在，但幅度小、速度準、收尾乾淨：按鈕 hover 偏向明度與陰影變化，卡片 hover 以輕微上浮或陰影重分配為主，區塊進場可做短距離 `translateY` 與 stagger。若要做 perpetual micro-interaction，只允許極慢速、低幅度的漂移、呼吸或光感變化，而且不能搶走產品本身的視覺重心。

## 7. 禁用模式

- 禁用 emoji
- 禁用 Inter
- 禁用 generic serifs（`Times New Roman`、`Georgia`、`Garamond`）
- 禁用純黑色 `#000000`
- 禁用霓虹色、藍紫漸層與任何 outer glow shadow
- 禁用超過 1 個 accent color
- 禁用高飽和 CTA 與滿版漸層按鈕
- 禁用大面積 gradient text，尤其是 Hero 標題
- 禁用 `text-zinc-*`、`bg-white`、`border-zinc-*` 這類繞過語義 token 的寫法
- 禁用三欄等寬卡片；改用 2-column zig-zag、asymmetric grid 或 horizontal scroll
- 禁用重疊元素與刻意製造的漂浮拼貼
- 禁用自訂滑鼠游標
- 禁用「John Doe」、「Acme」、「Nexus」等通用佔位名稱
- 禁用捏造數據；請使用 `[metric]`、`[spec]`、`[detail]` 等語意佔位
- 禁用 `LABEL // YEAR` 這類過度模板化的排版格式
- 禁用 AI 文案陳腔濫調，例如「Elevate」、「Seamless」、「Unleash」、「Next-Gen」
- 禁用 filler UI，例如「Scroll to explore」、彈跳箭頭、無意義進度提示
- 禁用破損的 Unsplash 連結；若需要佔位圖，使用 `picsum.photos` 或 SVG avatar
