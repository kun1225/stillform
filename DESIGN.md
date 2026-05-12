# 設計系統：Stillform

## 1. 視覺氛圍

Stillform 的視覺感受如同一個採光良好的設計工作室展間——放慢節奏、以物件本身說話。版面不炫耀、不堆疊；每一個元素都是精心決定的存在，而非填充物。冷調霧灰底色搭配深暖棕與礦石藍的點綴，如同精緻工藝品被擺放在乾淨的展台之上。

- **Mood：** 克制策展感——冷靜但有溫度，像一本好的產品設計書；少說，但每一句都有重量
- **Density：** Airy——大量留白主導節奏，資訊點稀少且精選，視線自然被引導至產品本身
- **Motion intensity：** Fluid——動態存在但不主張，以收斂的彈簧物理傳達精緻工藝感，不做視覺把戲

## 2. 色彩系統

- primary（#4C2D20）— 深暖棕：唯一主要強調色，用於 CTA、active 狀態、focus ring、局部裝飾線（飽和度約 56%）
- secondary（#243543）— 礦石藍：第二層點綴，用於標籤、說明性連結或需要冷暖對比的裝飾元素
- background（#EAEFEF）— 銀灰白：主要頁面背景底色，帶冷調的中性灰
- background-dark（#4C2D20）— 深暖棕：暗色區塊背景，用於產品展示、全版影像區或品牌宣言段落
- surface（#FFFFFF）— 純白面：卡片與容器填色，在霧灰白底上呈現細微層次感
- foreground（#262626）— 深炭黑：主要文字色（亦可作為暗色區塊底色使用）
- muted（#7A7370）— 灰褐：次要文字、說明、metadata
- border（rgba(38,38,38,0.10)）— 結構線：卡片邊框、1px 分隔線

## 3. 字型規則

- **專案語言：** Mixed — 主要內容語言為繁體中文（CJK primary）；品牌名稱、Hero 大字與展示型 Title 使用 Latin display 字體配 CJK stack，正文與 UI 文字使用 CJK stack
- 字體 token 名稱必須直接對應語義層級，禁止把多個層級共用成 `font-sans` 或 `font-display`
- **Hero：** `font-hero` → `Outfit`, `"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif` — `text-[clamp(2.75rem,6vw,5rem)] font-bold` — 頁面主標語、Banner 大字，每頁最多出現一次
- **Title：** `font-title` → `Outfit`, `"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif` — `text-[clamp(2rem,4vw,3.5rem)] font-semibold` — Section 標題、頁面 H1
- **Subtitle：** `font-subtitle` → `"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif` — `text-[clamp(1.25rem,2.4vw,2rem)] font-medium` — 卡片標題、H2/H3、模組小標
- **Body-lg：** `font-body-lg` → `"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif` — `text-lg leading-[1.8] max-w-[65ch]` — 品牌宣言段落、Landing page 引言
- **Body-sm：** `font-body-sm` → `"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif` — `text-base leading-[1.7] max-w-[65ch]` — 一般正文、功能說明、表單 helper text
- **Caption：** `font-caption` → `"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif` — `text-sm leading-normal text-muted` — 圖片說明、日期、metadata
- **Label：** `font-label` → `"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif` — `text-sm font-medium` — 按鈕文字、tag、badge、表單 label
- **Mono：** `font-mono` → `"JetBrains Mono", "Fira Code", monospace` — `text-sm` — 倒數計時數字顯示、SKU、時間戳記、高密度數字
- **規則：**
  - CJK 正文的 `line-height` 維持在 `1.7` 到 `1.8` 之間，依字級調整，不壓縮至 `1.5` 以下
  - 標題優先使用 `clamp(...)` 做 responsive scaling，正文維持穩定字級
  - 產品計時器相關的數字一律使用 `font-mono`，確保數字間距一致
  - 禁用 `Inter`；若需要 Latin serif，使用 `Fraunces`，禁用 `Times New Roman`、`Georgia`、`Garamond`

## 4. 元件樣式

所有帶顏色語意的 class（`text-*`、`bg-*`、`border-*`、`ring-*`、`shadow-*`、`hover:*`、`focus:*`、`active:*`、`from-*`/`to-*` 等）一律只能使用第 2 節定義的語義 token。

禁止範例：`text-zinc-900`、`bg-white`、`border-zinc-200`、`hover:bg-zinc-100`、`text-[#ddd]`、`ring-zinc-400`

- **主要按鈕：** `bg-foreground text-background px-6 py-2.5 rounded-xl font-medium transition-all duration-200 hover:bg-foreground/90 active:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary` — 深炭底配霧灰字，無外發光，按壓有觸覺下沉回饋
- **次要按鈕：** `bg-transparent text-foreground border border-border px-6 py-2.5 rounded-xl font-medium transition-all duration-200 hover:bg-surface active:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary`
- **點綴型按鈕（Waitlist CTA）：** `bg-primary text-foreground px-6 py-2.5 rounded-xl font-medium transition-all duration-200 hover:bg-primary/90 active:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary` — 溫琥珀 CTA，每頁最多出現一個，用於主要轉換點
- **卡片：** `rounded-2xl border border-border bg-surface p-6 shadow-sm shadow-border/50 hover:shadow-md hover:shadow-primary/10 transition-shadow duration-200` — hover 時帶有微弱琥珀暈染傳達質感；高密度版面改用 `border-t border-border` 分隔線取代陰影

## 5. 版面原則

- 每個 section 依內容型態、資訊密度、層級與互動需求決定版面，不預設整頁只能有單一 layout
- 不要把 `max-w-* mx-auto` 當成預設頁面 containment
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

- 頁面邊緣統一使用 `px-edge`，不要用 `mx-edge`；有 scrollbar 時寬度計算較一致
- 多欄版面在 `md:` 以下收合為單欄
- 產品全版展示區使用 `background-dark`（#4C2D20）作為區塊底色，搭配非對稱 padding 突顯工藝細節
- 留白是主動設計決策，不是空間填充

## 6. 動態與互動

CSS 優先 — 僅在需要彈簧物理、交錯編排或無限循環時使用 Motion library。

**Easing 選法（三步驟）：**

1. **選 easing family** — 品牌個性克制有溫度：主選 `CUBIC`（日常 UI），強調互動選 `QUART`；避免 `BACK`/`ANTICIPATE` 過於彈跳
2. **選方向變體** — `Out`（元素進場，最常用）、`InOut`（畫面間移動）、`In`（元素離場，少用）
3. **套用對應 cubic-bezier**

**常用模式：**

- **Hover：** `transition-[transform,opacity,box-shadow] duration-200 ease-[cubic-bezier(0.33,1,0.68,1)]`
- **進場 & 離場：** `transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]`
- **跨畫面移動：** `transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.66,0,0.34,1)]`
- **Spring 預設（Motion）：** `transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1 }}`
- **快速 Spring（Motion）：** `transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}`

僅動畫 `transform` 與 `opacity` — 禁止動畫 layout 屬性（`top`、`left`、`width`、`height`）。
Waitlist 表單送出使用 snappy spring 回饋，強化精密工藝的觸覺感。

## 7. 禁用模式

- 禁用 emoji
- 禁用 `Inter`；若使用 serif，禁用 `Times New Roman`、`Georgia`、`Garamond`
- 禁用純黑（`#000000`）— 使用 `foreground`（#262626）
- 禁用霓虹外發光與紫色／螢光漸層
- 禁用標題大字漸層文字效果（`bg-clip-text` 搭配多色漸層）
- 禁用自訂滑鼠游標
- 禁用元素重疊（overlapping elements）
- 禁用通用佔位名稱（"John Doe"、"Acme"、"Nexus"）
- 禁用捏造數據 — 指標一律使用 `[metric]` 格式
- 禁用 AI 行銷陳腔濫調（「革命性」、「顛覆」、「賦能」、「一站式」、"Elevate"、"Seamless"、"Unleash"、"Next-Gen"）
- 禁用填充式 UI 元素：「向下滾動探索」、跳動箭頭、scroll indicator
- 禁用損壞的 Unsplash 連結 — 使用 `picsum.photos` 或 SVG placeholder
- 禁用三欄等寬卡片作為預設版面
- 禁用 `LABEL // YEAR` 格式
