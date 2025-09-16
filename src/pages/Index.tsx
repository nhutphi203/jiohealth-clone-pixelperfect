import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClinicsSection from "@/components/ClinicsSection";
import ServicesSection from "@/components/ServicesSection";
import InsuranceSection from "@/components/InsuranceSection";
import DoctorHomeSection from "@/components/DoctorHomeSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ClinicsSection />
        <ServicesSection />
        <InsuranceSection />
        <DoctorHomeSection />
      </main>
    </div>
  );
};

export default Index;