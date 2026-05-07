import HeroSection from "./_components/hero-section";
import FeatureSection from "./_components/feature-section";
import PainPointSection from "./_components/pain-point-section";
import ComparisonSection from "./_components/comparison-section";
import WaitlistSection from "./_components/waitlist-section";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <FeatureSection />
      <PainPointSection />
      <ComparisonSection />
      <WaitlistSection />
    </main>
  );
}
