import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClinicsSection from "@/components/ClinicsSection";
import ServicesSection from "@/components/ServicesSection";
import InsuranceSection from "@/components/InsuranceSection";
import DoctorHomeSection from "@/components/DoctorHomeSection";
import HealthInfoSection from "@/components/HealthInfoSection";
import TelemedicineSection from "@/components/TelemedicineSection";
import HealthcareServicesSection from "@/components/HealthcareServicesSection";
import OnlinePharmacySection from "@/components/OnlinePharmacySection";
import MediaCoverageSection from "@/components/MediaCoverageSection";

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
        <OnlinePharmacySection />
        <HealthcareServicesSection />
        <TelemedicineSection />
        <HealthInfoSection />
        <MediaCoverageSection />
      </main>
    </div>
  );
};

export default Index;