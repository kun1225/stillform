# 設計系統：Stillform

## 1. 視覺氛圍

冷靜的產品展示館氛圍：如同一本印刷精良的工業設計年鑑，資訊節制、留白充足、層次以比例而非色彩來建立。版面偏愛非對稱編排，主視覺區域給予呼吸空間，讓產品本身成為焦點。動態存在感低、克制柔和——元素入場如輕輕放上桌面，不喧嘩，不彈跳。整體感受冷峻但有溫度，像一間採光良好的工業設計工作室，產品靜靜陳列在磨砂石板上。

- **Mood：** 冷靜、精工感、展覽式
- **Density：** airy（留白優先，資訊克制）
- **Motion intensity：** fluid（柔和過渡，無誇張動效）

## 2. 色彩系統

- primary（#44403C）— 暖鐵灰：唯一強調色，用於 CTA、active 狀態、focus ring（飽和度 < 80%。禁用紫色／霓虹色。）
- background（#F5F5F4）— 石板霧白：主要背景底色
- surface（#FAFAF9）— 純白面：卡片與容器填色
- foreground（#18181B）— Zinc 炭黑：主要文字
- muted（#78716C）— 石灰霧：次要文字、說明、metadata
- border（#E7E5E4）— 石板線：卡片邊框、1px 結構線

## 3. 字型規則

- **專案語言：** Mixed。品牌名稱與英文標語使用 Latin 展示字體（`font-hero`、`font-title`）；中文正文與 UI 輔助文字使用 CJK 系統字體堆疊（`font-body-lg`、`font-body-sm`、`font-caption`）；按鈕與標籤統一使用 `Geist` 確保視覺一致性。
- 字體 token 名稱必須直接對應語義層級，禁止把多個層級共用成 `font-sans` 或 `font-display`
- **Hero：** `font-hero` → `Instrument Serif` — `text-[clamp(2.75rem,6vw,5rem)] font-bold tracking-tight` — 品牌名稱大字、頁面主標語，每頁最多出現一次
- **Title：** `font-title` → `Geist` — `text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-tight` — Section 標題、頁面 H1
- **Subtitle：** `font-subtitle` → `Geist` — `text-[clamp(1.25rem,2.4vw,2rem)] font-medium` — 卡片標題、H2/H3、模組小標
- **Body-lg：** `font-body-lg` → `"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif` — `text-lg leading-[1.75] max-w-[65ch]` — Landing page 引言段落、產品介紹長文
- **Body-sm：** `font-body-sm` → `"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif` — `text-base leading-[1.65] max-w-[65ch]` — 一般正文、說明文字、表單 helper text
- **Caption：** `font-caption` → `"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif` — `text-sm leading-normal text-muted` — 圖片說明、日期、metadata
- **Label：** `font-label` → `Geist` — `text-sm font-medium tracking-wide` — 按鈕文字、tag、badge、表單 label
- **Mono：** `font-mono` → `Geist Mono` — `text-sm` — 倒數計時數字、SKU、時間戳記
- **規則：**
  - CJK 正文的 `line-height` 維持在 `1.4em` 到 `1.75em` 之間，依字級調整，不要為了緊湊而壓低至 `1.2em` 以下
  - 標題優先使用 `clamp(...)` 做 responsive scaling，正文維持穩定
  - 禁用 Inter。若使用 serif，僅限 `Instrument Serif`、`Fraunces`、`Editorial New`，禁用 `Times New Roman`、`Georgia`、`Garamond`

## 4. 元件樣式

所有帶顏色語意的 class（`text-*`、`bg-*`、`border-*`、`ring-*`、`shadow-*`、`hover:*`、`focus:*`、`active:*`、`from-*`/`to-*` 等）一律只能使用第 2 節定義的語義 token。

禁止範例：`text-zinc-900`、`bg-white`、`border-stone-200`、`hover:bg-neutral-100`、`text-[#18181B]`、`ring-stone-400`

- **主要按鈕（加入候補名單 CTA）：** `bg-foreground text-background px-6 py-2.5 rounded-xl font-label transition-all duration-200 ease-[cubic-bezier(0.33,1,0.68,1)] hover:bg-foreground/90 active:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary` — 無外發光，按壓觸覺回饋
- **次要按鈕：** `bg-transparent text-foreground border border-border px-6 py-2.5 rounded-xl font-label transition-all duration-200 ease-[cubic-bezier(0.33,1,0.68,1)] hover:bg-surface active:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary`
- **卡片：** `rounded-2xl border border-border bg-surface p-6 shadow-sm shadow-border/50 hover:shadow-md hover:shadow-border/30 transition-shadow duration-200` — 僅在層級需要陰影時使用；產品規格等高密度列表改用 `border-t border-border` 分隔線取代

## 5. 版面原則

- 每個 section 依內容型態、資訊密度、層級與互動需求決定版面，不預設整頁只能有單一 layout
- 依 section 類型選擇結構：
  - **Hero section**：全寬 editorial stack，產品照片佔主要視覺面積，文字偏側邊 / 底部，非居中對稱
  - **產品特點**：2 欄 Zig-Zag（文字 + 圖片交錯），強調每個特點的獨立敘事
  - **規格 / 技術細節**：data-dense panel，使用 `border-t` 分隔線，monospace 數字
  - **Waitlist 表單**：單欄居中，窄欄（`max-w-[480px]`），最大化聚焦感
- Grid-first responsive architecture，不以 `max-w-* mx-auto` 為預設頁面 containment
- 定義動態 page-edge token，以 `padding-inline` 做頁面邊緣約束：

```css
:root {
  --spacing-contain-max: 1440px;
  --spacing-edge: max(
    max(min(3.5vw, 96px), 24px),
    calc((100vw - var(--spacing-contain-max)) / 2)
  );
}
```

- 頁面邊緣統一使用 `px-edge`，不要用 `mx-edge`；scrollbar 存在時寬度計算較一致
- 非對稱版面優先：Hero 文字區塊可佔 40% 欄寬，圖片佔 60%，避免 50/50 分割
- 多欄版面在 `md:` 以下收合為單欄

## 6. 動態與互動

CSS 優先 — 僅在需要彈簧物理、交錯編排或無限循環時使用 Motion library。

**Easing 選法（三步驟）：**

1. **選 easing family** — 品牌語氣克制，日常 UI 用 `CUBIC`；入場強調感用 `QUART`；禁用 `BACK`/`ANTICIPATE`（彈跳感與品牌沉靜調性不符）
2. **選方向變體** — `Out`（元素進場、減速到位，最常用）、`InOut`（畫面間移動）、`In`（元素離場，少用）
3. **套用對應 cubic-bezier**

**常用模式：**

- **Hover：** `transition-[property] duration-200 ease-[cubic-bezier(0.33,1,0.68,1)]`
- **進場 & 離場：** `transition-[property] duration-300 ease-[cubic-bezier(0.33,1,0.68,1)]`
- **Section 滾動入場（Motion）：** `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.25,1,0.5,1] }}`
- **交錯列表（Motion stagger）：** `transition={{ duration: 0.4, ease: [0.25,1,0.5,1], delay: index * 0.08 }}`
- **Spring（不建議用於 Stillform，保留備用）：** `transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1 }}`

僅動畫 `transform` 與 `opacity` — 禁止動畫 layout 屬性（`top`、`left`、`width`、`height`）。

## 7. 禁用模式

- 禁用 emoji
- 禁用 `Inter`；若使用 serif，禁用 `Times New Roman`、`Georgia`、`Garamond`
- 禁用純黑色（`#000000`）
- 禁用霓虹外發光 / 紫色光暈 / 彩色漸層陰影
- 禁用飽和度超過 80% 的強調色
- 禁用大型標題過度使用漸層文字
- 禁用自訂滑鼠游標
- 禁用三欄等寬卡片 — 改用 2 欄 Zig-Zag、非對稱 grid 或橫向捲動
- 禁用懸浮重疊元素造成視覺混亂
- 禁用通用佔位名稱（「John Doe」、「Acme Co.」、「使用者A」）
- 禁用捏造指標數據 — 用 `[metric]` 標籤，不填虛假數字
- 禁用 AI 文案陳腔濫調：「革命性」、「顛覆」、「賦能」、「一站式」、「Elevate」、「Seamless」、「Unleash」、「Next-Gen」
- 禁用滾動提示裝飾：「Scroll to explore」、跳動箭頭、Chevron 動畫
- 禁用 `BACK` / `ANTICIPATE` easing（彈跳感與品牌調性不符）
- 禁用破損外部圖片連結 — 使用 `picsum.photos` 或 SVG 佔位符
