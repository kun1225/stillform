export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="px-edge flex items-center justify-between h-16 bg-background/80 backdrop-blur-sm border-b border-border">
        <span className="font-hero text-base font-semibold tracking-wide text-foreground">
          Stillform
        </span>
        <a
          href="#waitlist"
          className="font-label text-sm bg-foreground text-background px-5 py-2 rounded-xl transition-all duration-200 hover:bg-foreground/90 active:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          加入候補名單
        </a>
      </nav>
    </header>
  );
}
