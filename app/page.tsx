import Blueprint from "@/components/Blueprint";
import HeroSection from "@/components/HeroSection";
import Marketing from "@/components/Services";
import ResultsSection from "@/components/ResultsSection";
import Schedule from "@/components/Schedule";
import WhyUsSection from "@/components/WhyUsSection";


export default async function Home() {


  return (
    <div className="overflow-hidden bg-whtie">
      <HeroSection></HeroSection>
      <Schedule></Schedule>
      <Marketing></Marketing>
      <ResultsSection></ResultsSection>
      {/* <SliderNav></SliderNav> */}
      <WhyUsSection></WhyUsSection>
      <Blueprint></Blueprint>
    </div>
  );
}
