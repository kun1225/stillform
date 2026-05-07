import { Nav } from "./_components/nav";
import { HeroSection } from "./_components/hero-section";
import { WhySection } from "./_components/why-section";
import { FeatureGrid } from "./_components/feature-grid";
import { WaitlistSection } from "./_components/waitlist-section";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <WhySection />
        <FeatureGrid />
        <WaitlistSection />
      </main>
      <footer className="px-edge py-8 border-t border-border">
        <p className="font-caption text-sm text-muted">
          &copy; {new Date().getFullYear()} Stillform. All rights reserved.
        </p>
      </footer>
    </>
  );
}
