import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, MapPin } from "lucide-react";

const ClinicsSection = () => {
  const clinics = [
    {
      id: 1,
      name: "M Plaza",
      location: "Quận 1, HCM",
      image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?w=400&h=300&fit=crop",
      featured: true
    },
    {
      id: 2,
      name: "Republic Plaza", 
      location: "Tân Bình, HCM",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=300&fit=crop",
      featured: false
    },
    {
      id: 3,
      name: "Q2 Thao Dien",
      location: "Quận 2, HCM", 
      image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=400&h=300&fit=crop",
      featured: false
    }
  ];

  const cities = [
    { name: "TP. Hồ Chí Minh", active: true },
    { name: "Hà Nội", active: false }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-jio-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Khám phá các phòng khám
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          
          {/* City Selector */}
          <div className="flex justify-center gap-4 mb-8">
            {cities.map((city) => (
              <Button
                key={city.name}
                variant={city.active ? "default" : "outline"}
                className={`rounded-full px-8 py-3 ${
                  city.active 
                    ? "bg-jio-blue hover:bg-jio-blue/90" 
                    : "border-gray-300 hover:border-jio-blue hover:text-jio-blue"
                }`}
              >
                {city.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Clinics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinics.map((clinic, index) => (
            <Card key={clinic.id} className="group overflow-hidden border-0 shadow-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white">
              <div className="relative overflow-hidden">
                <img
                  src={clinic.image}
                  alt={`${clinic.name} clinic exterior`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Clinic Logo Overlay */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Jio Health</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-jio-blue transition-colors">
                      {clinic.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{clinic.location}</span>
                    </div>
                  </div>
                  
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-jio-blue hover:text-jio-blue/80 hover:bg-jio-blue/10 rounded-full p-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
                
                {/* Additional Info */}
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-between">
                    <span>Giờ mở cửa:</span>
                    <span className="font-medium">8:00 - 20:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Điện thoại:</span>
                    <span className="font-medium text-jio-blue">1900 2115</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-jio-blue text-jio-blue hover:bg-jio-blue hover:text-white rounded-full px-8"
          >
            Xem tất cả phòng khám
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClinicsSection;