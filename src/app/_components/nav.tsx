export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-edge py-5 flex items-center justify-between">
      <span className="font-label text-sm font-medium tracking-[0.18em] text-foreground uppercase">
        Stillform
      </span>
      <a
        href="#waitlist"
        className="font-label text-sm bg-foreground text-background px-5 py-2 rounded-xl font-medium transition-all duration-200 ease-[cubic-bezier(0.33,1,0.68,1)] hover:bg-foreground/85 active:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        加入候補名單
      </a>
    </header>
  );
}
