import { Button } from "@/components/ui/button";
import { Heart, Play } from "lucide-react";
import heroImage from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern Jio Health clinic interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 w-fit shadow-soft">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-red-500" />
              </div>
              <span className="text-sm font-medium text-gray-600">
                Được tin tưởng bởi hơn 300,000 khách hàng
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block">Hơn 300,000</span>
                <span className="block text-jio-purple">khách hàng tin tưởng</span>
                <span className="block">sử dụng dịch vụ</span>
              </h1>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-jio-purple-light to-jio-purple text-white px-8 py-6 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Đặt hẹn khám
              </Button>
            </div>

            {/* Video Play Button */}
            <div className="flex items-center gap-4 pt-4">
              <button className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-soft hover:shadow-card transition-all duration-300 hover:scale-110">
                <Play className="w-5 h-5 text-jio-blue ml-1" />
              </button>
              <span className="text-gray-600 font-medium">Xem video giới thiệu</span>
            </div>
          </div>

          {/* Right side - could add additional content or keep empty for image focus */}
          <div className="relative hidden lg:block">
            {/* Floating elements or additional content can go here */}
            <div className="absolute top-20 right-20 w-16 h-16 bg-primary/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-32 right-32 w-12 h-12 bg-jio-purple/10 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-jio-purple/5 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;
