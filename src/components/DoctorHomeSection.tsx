import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, Star } from "lucide-react";
import doctorHomeImage from "@/assets/doctor-home.jpg";

const DoctorHomeSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-jio-blue/10 rounded-full"></div>
      <div className="absolute top-40 right-32 w-4 h-4 bg-primary rounded-full"></div>
      
      {/* Medical Cross Icons */}
      <div className="absolute top-16 right-20 text-primary/20">
        <div className="w-8 h-8 relative">
          <div className="absolute top-0 left-1/2 w-1 h-8 bg-current transform -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-0 w-8 h-1 bg-current transform -translate-y-1/2"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Section Header */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Bác sĩ đến nhà
              </h2>
              <div className="w-16 h-1 bg-jio-blue"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Thăm khám tận nơi chỉ từ 400,000 đ
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Bác sĩ chuyên khoa</h4>
                  <p className="text-sm text-gray-600">Đội ngũ bác sĩ giàu kinh nghiệm</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Đặt lịch linh hoạt</h4>
                  <p className="text-sm text-gray-600">Thời gian phù hợp với lịch trình của bạn</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Dịch vụ chất lượng cao</h4>
                  <p className="text-sm text-gray-600">Đánh giá 4.8/5 từ khách hàng</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8"
              >
                Đặt khám ngay
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-jio-blue text-jio-blue hover:bg-jio-blue hover:text-white rounded-full px-8"
              >
                Tìm Hiểu Thêm
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-jio-blue">500+</div>
                <div className="text-sm text-gray-600">Bác sĩ</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-jio-blue">50,000+</div>
                <div className="text-sm text-gray-600">Lượt khám</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-jio-blue">4.8/5</div>
                <div className="text-sm text-gray-600">Đánh giá</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={doctorHomeImage}
                alt="Professional doctor providing home visit service"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Overlay Elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              
              {/* Floating Card */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Dr. Nguyễn Thị Mai</div>
                    <div className="text-xs text-gray-600">Bác sĩ nội khoa</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-jio-blue/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorHomeSection;