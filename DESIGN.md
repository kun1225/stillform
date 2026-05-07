# 設計系統：Stillform

## 1. 視覺氛圍

克制的產品展覽館氛圍。版面寬鬆，留白即是語言——每一塊空間都在說「值得細看」。
色調沿用物件本身的材質溫度：紙、木、啞光金屬，沒有多餘的裝飾。
動態節制但存在，像翻動一本好的設計書，安靜但有節奏。

- **Mood** — 沉靜、有溫度的工藝展示室（calm craft studio）
- **Density** — 寬鬆（airy）— 大量呼吸空間，讓產品說話
- **Motion intensity** — 流暢但節制（fluid, not performative）— 只在引導視線時出現，不為動而動

---

## 2. 色彩系統

- primary（#5C4B3A）— 深焦棕：唯一強調色，用於 CTA、active 狀態、focus ring（飽和度 < 60%。禁用紫色／霓虹色。）
- background（#F7F4F0）— 米白底：主要背景底色，帶輕微暖調
- surface（#FDFCFB）— 珍珠白：卡片與容器填色
- foreground（#1A1714）— 深炭暖黑：主要文字（非純黑）
- muted（#7C756E）— 暖霧灰：次要文字、說明、metadata
- border（rgba(26, 23, 20, 0.08)）— 細線：卡片邊框、1px 結構線

---

## 3. 字型規則

- **專案語言：** Mixed — 繁體中文為主要內容語言。`font-hero`、`font-title`、`font-subtitle`、`font-label` 使用 Latin 字體（`Outfit`），搭配 CJK fallback；`font-body-lg`、`font-body-sm`、`font-caption` 使用 CJK 系統字體堆疊。
- 字體 token 名稱必須直接對應語義層級，禁止把多個層級共用成 `font-sans` 或 `font-display`
- **Hero：** `font-hero` → `Outfit` + `"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif` — `text-[clamp(2.75rem,6vw,5rem)] font-bold tracking-tight` — 頁面主標語、Banner 大字，每頁最多出現一次
- **Title：** `font-title` → `Outfit` + CJK stack — `text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-tight` — Section 標題、頁面 H1
- **Subtitle：** `font-subtitle` → `Outfit` + CJK stack — `text-[clamp(1.25rem,2.4vw,2rem)] font-medium` — 卡片標題、H2/H3、模組小標
- **Body-lg：** `font-body-lg` → `"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif` — `text-lg leading-[1.75] max-w-[65ch]` — 品牌敘述、Landing page 引言段落
- **Body-sm：** `font-body-sm` → `"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif` — `text-base leading-[1.6] max-w-[65ch]` — 一般正文、產品說明、表單 helper text
- **Caption：** `font-caption` → `"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif` — `text-sm leading-normal text-muted` — 圖片說明、日期、metadata
- **Label：** `font-label` → `Outfit` — `text-sm font-medium tracking-wide` — 按鈕文字、tag、badge、表單 label
- **Mono：** `font-mono` → `"Geist Mono", "JetBrains Mono", ui-monospace, monospace` — `text-sm` — 數字計時顯示、SKU、時間戳記
- **規則：**
  - CJK 正文 `line-height` 維持在 `1.5em` 到 `1.75em`（`text-base` 用 `1.6`，`text-lg` 用 `1.75`），不為緊湊而壓低
  - 標題優先使用 `clamp(...)` 做 responsive scaling，正文維持穩定字級
  - 禁用 `Inter`；此專案為展示型非 dashboard，可使用 serif 但需符合品牌氣質，一般情況以 `Outfit` 為主
  - 禁用 generic serif（`Times New Roman`、`Georgia`、`Garamond`）

---

## 4. 元件樣式

所有帶顏色語意的 class（`text-*`、`bg-*`、`border-*`、`ring-*`、`shadow-*`、`hover:*`、`focus:*`、`active:*`、`from-*`/`to-*` 等）一律只能使用第 2 節定義的語義 token。

禁止範例：`text-zinc-900`、`bg-white`、`border-zinc-200`、`hover:bg-zinc-100`、`text-[#ddd]`、`ring-zinc-400`

- **主要按鈕（waitlist CTA）：** `bg-foreground text-background px-6 py-2.5 rounded-xl font-medium transition-all duration-200 ease-[cubic-bezier(0.33,1,0.68,1)] hover:bg-foreground/85 active:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary` — 無外發光，按壓觸覺回饋
- **次要按鈕：** `bg-transparent text-foreground border border-border px-6 py-2.5 rounded-xl font-medium transition-all duration-200 ease-[cubic-bezier(0.33,1,0.68,1)] hover:bg-surface active:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary`
- **輸入框（email waitlist）：** `bg-surface border border-border rounded-xl px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow duration-200`
- **產品卡片：** `rounded-2xl border border-border bg-surface overflow-hidden hover:shadow-md hover:shadow-border/40 transition-shadow duration-300 ease-[cubic-bezier(0.33,1,0.68,1)]` — 陰影僅表達層級，不做裝飾用；高密度版面改用 `border-t border-border` 分隔線
- **特色說明條：** 使用 `border-t border-border` 水平分隔，不用獨立卡片；文字密度低時加 `py-8` 呼吸空間

---

## 5. 版面原則

每個 section 依內容型態、資訊密度、層級與互動需求獨立決定版面結構。

**Page-edge token（必須）：**

```css
:root {
  --spacing-contain-max: 1440px;
  --spacing-edge: max(
    max(min(3.5vw, 80px), 24px),
    calc((100vw - var(--spacing-contain-max)) / 2)
  );
}
```

頁面邊緣統一使用 `px-edge`，不使用 `mx-auto max-w-*` 作為預設 containment。

**Section 版面指引：**

- **Hero Section（product reveal）** — 全寬背景 + 垂直置中的產品影像與標語。影像佔主導地位，文字少而精，只有 tagline + CTA。單欄構圖，產品圖大於 50vh。
- **Why Section（品牌價值 x2）** — 非對稱兩欄：左側大圖（或產品近景），右側垂直堆疊的兩個特點說明。利用視覺重量不對稱強化設計感。
- **Feature Grid（功能細節）** — 2 欄不等寬 grid（`grid-cols-[2fr_1fr]`），每格有大數字或圖示作為視覺錨點，再配合短文說明。非 3 欄等寬。
- **Waitlist CTA Section** — 單欄、大量留白，email input + 主要按鈕置中，上下 `py-24` 至 `py-32` 留白。簡短說明文字，不超過兩行。

**響應式規則：**

- 所有多欄版面在 `md:` 以下收合為單欄
- Hero 產品圖在 `sm:` 以下縮小至 `max-h-[50vw]`
- 文字大小使用 `clamp(...)` 自動縮放，不靠斷點強制跳級

---

## 6. 動態與互動

CSS 優先 — 僅在需要彈簧物理、交錯編排或無限循環時使用 Motion library。

品牌氣質是「沉靜」，動態的角色是「引導」不是「表演」。所有動態必須問自己：若拿掉這個動畫，使用者會有損失嗎？若否，不加。

**Easing 選法（三步驟）：**

1. **選 family** — 此品牌用 `CUBIC`（日常 UI 回饋）與 `QUART`（產品進場）。禁用 `BACK` 與 `ANTICIPATE`（過於彈跳，不符合克制品牌）
2. **選方向** — 進場用 `Out`（減速到位）；跨畫面用 `InOut`
3. **套用值：**

```
cubicOut:    cubic-bezier(0.33, 1, 0.68, 1)     ← hover、一般進場
quartOut:    cubic-bezier(0.25, 1, 0.5, 1)      ← 產品影像進場、強調元素
cubicInOut:  cubic-bezier(0.66, 0, 0.34, 1)     ← 跨畫面移動
```

**常用模式：**

- **Hover 回饋：** `transition-[property] duration-200 ease-[cubic-bezier(0.33,1,0.68,1)]`
- **元素進場：** `transition-[opacity,transform] duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]` + `translate-y-4 opacity-0` → `translate-y-0 opacity-100`
- **跨畫面移動：** `transition-[property] duration-500 ease-[cubic-bezier(0.66,0,0.34,1)]`
- **Staggered list（Motion）：** `transition={{ delay: index * 0.06, duration: 0.4, ease: [0.25, 1, 0.5, 1] }}`

僅動畫 `transform` 與 `opacity` — 禁止動畫 `width`、`height`、`top`、`left` 等 layout 屬性。

---

## 7. 禁用模式

- 禁用 emoji
- 禁用 `Inter`；禁用 generic serifs（`Times New Roman`、`Georgia`、`Garamond`）
- 禁用純黑色（`#000000`）— 使用 `foreground`（`#1A1714`）
- 禁用霓虹外發光、紫色系 glow、neon gradient
- 禁用過飽和強調色（飽和度需低於 60%）
- 禁用 `BACK`、`ANTICIPATE` easing（彈跳感不符合品牌氣質）
- 禁用三欄等寬卡片 layout — 改用非對稱 2 欄、editorial stack 或 horizontal scroll
- 禁用重疊元素（overlapping elements）
- 禁用通用佔位名稱（「John Doe」、「Acme Corp」、「User 1」）
- 禁用捏造數據 — 使用 `[metric]`、`[count]` 等標記，不填寫假數字
- 禁用 AI 文案陳腔濫調：「革命性」「顛覆」「賦能」「一站式」「Unleash」「Seamless」「Next-Gen」「Elevate」
- 禁用填充 UI：「Scroll to explore」橫幅、跳動滾動箭頭、進度指示蟲（bouncing chevrons）
- 禁用 Unsplash 外鏈圖片 — 使用 `picsum.photos` 或 SVG placeholder
- 禁用硬編碼 Tailwind 色階（如 `text-zinc-900`、`bg-white`、`border-gray-200`）— 一律使用語義 token
