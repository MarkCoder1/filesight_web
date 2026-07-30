import Hero from "@/app/components/Hero";
import TrustBar from "@/app/components/TrustBar";
import ScreenshotCarousel from "@/app/components/ScreenshotCarousel";
import ProblemSection from "@/app/components/ProblemSection";
import FeaturesSection from "@/app/components/FeaturesSection";
import DuplicateDetection from "@/app/components/DuplicateDetection";
import PrivacySection from "@/app/components/PrivacySection";
import RoadmapSection from "@/app/components/RoadmapSection";
import FAQ from "@/app/components/FAQ";
import DownloadSection from "@/app/components/DownloadSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ScreenshotCarousel />
      <ProblemSection />
      <FeaturesSection />
      <DuplicateDetection />
      <PrivacySection />
      <RoadmapSection />
      <FAQ />
      <DownloadSection />
    </>
  );
}
