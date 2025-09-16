import { Button } from "@/components/ui/button";
import { Package, Percent, Clock, ArrowRight } from "lucide-react";
import pharmacyImage from "@/assets/pharmacy.jpg";

const OnlinePharmacySection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-32 right-20 text-primary/20">
        <div className="w-8 h-8 relative">
          <div className="absolute top-0 left-1/2 w-1 h-8 bg-current transform -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-0 w-8 h-1 bg-current transform -translate-y-1/2"></div>
        </div>
      </div>
      <div className="absolute bottom-40 left-16 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Pharmacy Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform perspective-1000 rotate-y-6">
              <img
                src={pharmacyImage}
                alt="Modern pharmacy interior with organized medicine shelves"
                className="w-full h-[400px] object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Floating Jio Health Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                  </div>
                  <span className="font-semibold text-gray-900 text-sm">Jio Pharmacy</span>
                </div>
              </div>
            </div>
            
            {/* 3D Floating Elements */}
            <div className="absolute -bottom-4 -right-6 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-4 w-16 h-16 bg-jio-blue/10 rounded-full blur-xl"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                <span className="text-jio-blue">Nhà Thuốc Trực Tuyến Jio</span>
              </h2>
              <div className="w-16 h-1 bg-jio-blue"></div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Dễ dàng đặt trực tuyến thuốc và các sản phẩm chăm sóc sức khỏe chính 
                hãng với mức giá tiết kiệm
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft border border-orange-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Package className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Giao hàng nhanh trong 2 giờ</h4>
                  <p className="text-sm text-gray-600">Nhận thuốc tại nhà nhanh chóng</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft border border-blue-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Percent className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Tiết kiệm 20% tất cả các sản phẩm</h4>
                  <p className="text-sm text-gray-600">Giá tốt nhất trên thị trường</p>
                </div>
              </div>
            </div>

            {/* Additional Benefits */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-600">Thuốc chính hãng từ các nhà sản xuất uy tín</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-600">Tư vấn miễn phí từ dược sĩ chuyên nghiệp</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-600">Giao hàng tận nơi, thanh toán linh hoạt</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8"
              >
                Xem ngay
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-jio-blue">5000+</div>
                <div className="text-sm text-gray-600">Sản phẩm</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-jio-blue">98%</div>
                <div className="text-sm text-gray-600">Hài lòng</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-jio-blue">2h</div>
                <div className="text-sm text-gray-600">Giao hàng</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlinePharmacySection;