export function Footer() {
  return (
    <footer className="bg-foreground py-10 px-edge">
      <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span className="font-hero text-sm font-semibold text-background/80">
          Stillform
        </span>
        <p className="font-caption text-xs text-background/40">
          © 2026 Stillform. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
