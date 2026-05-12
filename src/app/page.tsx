import { Nav } from "./_components/nav";
import { HeroSection } from "./_components/hero-section";
import { PainPointSection } from "./_components/pain-point-section";
import { FeatureSection } from "./_components/feature-section";
import { ComparisonSection } from "./_components/comparison-section";
import { CtaSection } from "./_components/cta-section";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <PainPointSection />
        <FeatureSection />
        <ComparisonSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
