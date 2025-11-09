import { Card } from "@/components/ui/card";
import { Home, Pill, Search, Shield, ArrowRight } from "lucide-react";
import servicesBackground from "@/assets/services-background.jpg";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Bác sĩ đến nhà",
      description: "Dịch vụ khám bệnh tại nhà với đội ngũ bác sĩ chuyên nghiệp",
      icon: Home,
      bgColor: "service-blue",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100"
    },
    {
      id: 2,
      title: "Nhà thuốc trực tuyến", 
      description: "Đặt thuốc online với giao hàng nhanh chóng và tiện lợi",
      icon: Pill,
      bgColor: "service-purple", 
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100"
    },
    {
      id: 3,
      title: "Tìm bác sĩ",
      description: "Tìm kiếm và đặt lịch với bác sĩ phù hợp với nhu cầu của bạn",
      icon: Search,
      bgColor: "service-pink",
      iconColor: "text-pink-600", 
      iconBg: "bg-pink-100"
    },
    {
      id: 4,
      title: "Gói chăm sóc sức khỏe",
      description: "Các gói khám sức khỏe tổng quát và chuyên khoa toàn diện",
      icon: Shield,
      bgColor: "service-yellow",
      iconColor: "text-yellow-600",
      iconBg: "bg-yellow-100"
    }
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" style={{
      backgroundImage: `url(${servicesBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'soft-light'
    }}>
      {/* Curved Background */}
      <div className="absolute inset-0">
        <svg viewBox="0 0 1440 320" className="absolute top-0 w-full h-32">
          <path
            fill="#f0f9ff"
            fillOpacity="0.6"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,186.7C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-32 rotate-180">
          <path
            fill="#f8fafc"
            fillOpacity="0.8"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,186.7C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Dịch vụ chăm sóc sức khỏe toàn diện
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jio Health cung cấp đa dạng dịch vụ y tế chất lượng cao, từ khám bệnh tại nhà đến tư vấn trực tuyến
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className={`group p-8 border-0 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-3 cursor-pointer bg-${service.bgColor} relative overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className="w-full h-full rounded-full bg-white transform translate-x-8 -translate-y-8"></div>
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-jio-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Arrow */}
                  <div className="flex items-center text-jio-blue opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <span className="text-sm font-semibold mr-2">Tìm hiểu thêm</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-jio-blue to-jio-purple rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Bắt đầu hành trình chăm sóc sức khỏe của bạn
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Đặt lịch khám ngay hôm nay và trải nghiệm dịch vụ y tế hiện đại, chuyên nghiệp
            </p>
            <button className="bg-white text-jio-blue px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Đặt lịch ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;