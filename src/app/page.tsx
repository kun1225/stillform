import { Nav } from "./_components/nav";
import { HeroSection } from "./_components/hero-section";
import { FeaturesSection } from "./_components/features-section";
import { SpecsSection } from "./_components/specs-section";
import { ComparisonSection } from "./_components/comparison-section";
import { WaitlistSection } from "./_components/waitlist-section";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SpecsSection />
        <ComparisonSection />
        <WaitlistSection />
      </main>
      <footer className="bg-void border-t border-rule/10 px-6 md:px-12 lg:px-16 py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-display font-bold text-[12px] tracking-[0.22em] uppercase text-canvas/30">
            Stillform
          </span>
          <p className="text-[12px] font-body font-normal text-canvas/25 tracking-wide">
            &copy; 2025 Stillform. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
