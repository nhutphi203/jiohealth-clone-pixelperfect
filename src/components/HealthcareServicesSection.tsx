import { Button } from "@/components/ui/button";
import { Stethoscope, TestTube, ArrowRight } from "lucide-react";

const HealthcareServicesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 right-32 w-40 h-40 bg-jio-blue/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-jio-purple/10 rounded-full blur-xl"></div>
      </div>

      {/* Medical Cross Icons */}
      <div className="absolute top-32 right-16 text-primary/20">
        <div className="w-8 h-8 relative">
          <div className="absolute top-0 left-1/2 w-1 h-8 bg-current transform -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-0 w-8 h-1 bg-current transform -translate-y-1/2"></div>
        </div>
      </div>
      <div className="absolute bottom-40 left-20 text-jio-blue/20">
        <div className="w-6 h-6 relative">
          <div className="absolute top-0 left-1/2 w-1 h-6 bg-current transform -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-0 w-6 h-1 bg-current transform -translate-y-1/2"></div>
        </div>
      </div>
      <div className="absolute top-16 left-1/3 text-primary/20">
        <div className="w-4 h-4 relative">
          <div className="absolute top-0 left-1/2 w-0.5 h-4 bg-current transform -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-0 w-4 h-0.5 bg-current transform -translate-y-1/2"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Bạn thấy không khỏe?
                <br />
                <span className="text-jio-blue">Hãy để Jio Health chăm sóc cho bạn!</span>
              </h2>
              <div className="w-16 h-1 bg-jio-blue"></div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Tìm hiểu thêm về các dịch vụ chăm sóc sức khỏe của chúng tôi, từ cảm 
                mạo thông thường đến các bệnh mạn tính - các bác sĩ Jio thân thiện sẽ tận 
                tình chăm sóc bạn và gia đình.
              </p>
            </div>

            {/* Service Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-jio-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Dịch vụ Bác sĩ & Điều dưỡng</h4>
                  <p className="text-sm text-gray-600">Chăm sóc y tế chuyên nghiệp tại nhà</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <TestTube className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Lấy mẫu xét nghiệm</h4>
                  <p className="text-sm text-gray-600">Xét nghiệm nhanh chóng và chính xác</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8"
              >
                Tìm hiểu thêm
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Content - 3D Isometric Illustration */}
          <div className="relative">
            <div className="relative perspective-1000 transform-gpu">
              {/* Central 3D Platform */}
              <div className="relative">
                {/* Main Platform */}
                <div className="w-96 h-64 bg-gradient-to-br from-jio-blue to-jio-purple rounded-3xl transform rotate-x-12 rotate-y-12 shadow-2xl relative overflow-hidden">
                  {/* Platform Texture */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  
                  {/* 3D Medical Icons Floating Above */}
                  <div className="absolute -top-8 left-1/4 transform -translate-x-1/2">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center transform rotate-12 animate-pulse">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-6 right-1/4 transform translate-x-1/2">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center transform -rotate-12 animate-pulse delay-300">
                      <div className="w-6 h-6 bg-blue-500 rounded"></div>
                    </div>
                  </div>

                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center animate-pulse delay-700">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Baby Icon */}
                  <div className="absolute -top-12 left-16">
                    <div className="w-18 h-18 bg-white rounded-2xl shadow-lg p-3 transform rotate-6 animate-pulse delay-1000">
                      <div className="w-full h-full bg-orange-100 rounded-xl flex items-center justify-center">
                        <div className="text-orange-500 text-lg">👶</div>
                      </div>
                    </div>
                  </div>

                  {/* Medical Equipment Icons */}
                  <div className="absolute -right-8 top-1/4">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center transform -rotate-6 animate-pulse delay-500">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="w-5 h-5 bg-gray-600 rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-6 bottom-1/4">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center transform rotate-12 animate-pulse delay-200">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Platforms */}
                  <div className="absolute -bottom-4 -left-8">
                    <div className="w-20 h-12 bg-white rounded-xl shadow-lg transform rotate-3 opacity-90"></div>
                  </div>

                  <div className="absolute -bottom-6 -right-4">
                    <div className="w-16 h-10 bg-white rounded-lg shadow-lg transform -rotate-6 opacity-80"></div>
                  </div>
                </div>

                {/* Additional Floating Elements */}
                <div className="absolute top-4 -left-12 w-12 h-12 bg-white/80 rounded-full shadow-lg animate-bounce delay-1000"></div>
                <div className="absolute bottom-8 -right-8 w-8 h-8 bg-primary/20 rounded-full shadow-lg animate-bounce delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareServicesSection;