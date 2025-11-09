import { Home, Pill, Stethoscope, ClipboardList } from "lucide-react";
import doctorVisitImg from "@/assets/doctor-visit.jpg";
import onlinePharmacyImg from "@/assets/online-pharmacy.jpg";
import findDoctorImg from "@/assets/find-doctor.jpg";
import healthPackageImg from "@/assets/health-package.jpg";

const HealthcareServicesSection = () => {
  const services = [
    {
      title: "Bác sĩ\nđến nhà",
      image: doctorVisitImg,
      icon: Home,
      bgColor: "bg-gradient-to-br from-cyan-100 to-cyan-50",
      iconBg: "bg-white",
      iconColor: "text-cyan-500"
    },
    {
      title: "Nhà thuốc\ntrực tuyến",
      image: onlinePharmacyImg,
      icon: Pill,
      bgColor: "bg-gradient-to-br from-purple-100 to-purple-50",
      iconBg: "bg-white",
      iconColor: "text-purple-500"
    },
    {
      title: "Tìm bác sĩ",
      image: findDoctorImg,
      icon: Stethoscope,
      bgColor: "bg-gradient-to-br from-pink-100 to-pink-50",
      iconBg: "bg-white",
      iconColor: "text-pink-500"
    },
    {
      title: "Gói chăm sóc\nsức khỏe",
      image: healthPackageImg,
      icon: ClipboardList,
      bgColor: "bg-gradient-to-br from-yellow-100 to-yellow-50",
      iconBg: "bg-white",
      iconColor: "text-blue-600"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-200/20 rounded-full blur-2xl"></div>
      </div>

      {/* Medical Cross Icons */}
      <div className="absolute top-32 right-16 text-cyan-300/40">
        <div className="w-8 h-8 relative">
          <div className="absolute top-0 left-1/2 w-1 h-8 bg-current transform -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-0 w-8 h-1 bg-current transform -translate-y-1/2"></div>
        </div>
      </div>
      <div className="absolute bottom-40 left-20 text-blue-300/40">
        <div className="w-6 h-6 relative">
          <div className="absolute top-0 left-1/2 w-1 h-6 bg-current transform -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-0 w-6 h-1 bg-current transform -translate-y-1/2"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`${service.bgColor} rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer`}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Icon Badge */}
                  <div className={`absolute bottom-4 left-4 ${service.iconBg} rounded-full p-4 shadow-lg`}>
                    <Icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                </div>

                {/* Title */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 whitespace-pre-line leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HealthcareServicesSection;