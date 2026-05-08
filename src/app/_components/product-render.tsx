type ProductRenderProps = {
  variant?: "hero" | "detail";
};

export function ProductRender({
  variant = "hero",
}: Readonly<ProductRenderProps>) {
  return (
    <div
      aria-hidden="true"
      className={`product-render product-render--${variant}`}
    >
      <div className="product-render__shadow" />
      <div className="product-render__body">
        <div className="product-render__top-button" />
        <div className="product-render__face">
          <div className="product-render__status-row">
            <span>AM</span>
            <span>
              FOCUS <i />
            </span>
          </div>
          <div className="product-render__time">09:41</div>
          <div className="product-render__meta-row">
            <span>TUE, 17 OCT</span>
            <span>21.5°C</span>
          </div>
        </div>
        <div className="product-render__glow" />
      </div>
    </div>
  );
}
