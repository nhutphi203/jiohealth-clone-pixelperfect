import { Button } from "@/components/ui/button";
import { Video, MessageCircle, Phone } from "lucide-react";
import telemedicineBackground from "@/assets/telemedicine-background.jpg";

const TelemedicineSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden" style={{
      backgroundImage: `url(${telemedicineBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'overlay'
    }}>
      {/* Curved Background Elements */}
      <div className="absolute inset-0">
        <svg viewBox="0 0 1440 320" className="absolute top-0 w-full h-40">
          <path
            fill="#dbeafe"
            fillOpacity="0.4"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,186.7C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - 3D Phone Mockups */}
          <div className="relative">
            {/* Main Phone */}
            <div className="relative transform rotate-12 perspective-1000">
              <div className="bg-white rounded-3xl shadow-2xl p-4 w-80 mx-auto">
                <div className="bg-gradient-to-br from-primary to-jio-blue rounded-2xl h-64 p-6 relative overflow-hidden">
                  {/* App Interface */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <span className="text-white font-semibold">Jio Health</span>
                  </div>
                  
                  {/* Doctor Video Call Interface */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm">Dr. Nguyễn Văn A</div>
                        <div className="text-white/80 text-xs">Bác sĩ tim mạch</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Call Controls */}
                  <div className="flex justify-center gap-4">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Video className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Bubbles */}
            <div className="absolute top-16 -left-8 bg-white rounded-2xl p-4 shadow-lg max-w-xs">
              <p className="text-sm text-gray-800">
                Bạn có thể dùng thuốc giảm đau Paracetamol hoặc Ibuprofen trước. Sau đó chúng ta sẽ cùng theo dõi tình hình nhé.
              </p>
            </div>

            <div className="absolute bottom-16 -right-8 bg-white rounded-2xl p-4 shadow-lg max-w-xs">
              <p className="text-sm text-gray-800">
                Xin chào, Bác sĩ Jio có thể giúp gì cho bạn?
              </p>
            </div>

            <div className="absolute bottom-0 -left-12 bg-white rounded-2xl p-4 shadow-lg max-w-xs">
              <p className="text-sm text-gray-800">
                May quá, nhà tôi có sẵn thuốc đó. Cảm ơn Bác sĩ rất nhiều!
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Tư vấn sức khỏe từ xa 24/7 qua video & chat
              </h2>
              <div className="w-16 h-1 bg-jio-blue"></div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Bạn cần sự tư vấn chuyên môn khi gặp các vấn đề sức khỏe? Dù bạn ở đâu 
                hay vào bất cứ lúc nào, các bác sĩ chuyên khoa của Jio Health luôn sẵn 
                sàng tư vấn, giải đáp đáp mọi thắc mắc của bạn.
              </p>
            </div>

            {/* Service Options */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-soft border border-blue-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Video className="w-6 h-6 text-jio-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Video call với bác sĩ</h4>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-soft border border-blue-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-jio-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Chat với bác sĩ</h4>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-600">Tư vấn trực tuyến 24/7</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-600">Bác sĩ chuyên khoa giàu kinh nghiệm</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-600">Tư vấn nhanh chóng và chính xác</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg"
                className="bg-jio-blue hover:bg-jio-blue/90 text-white rounded-full px-8"
              >
                Bắt đầu tư vấn ngay
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelemedicineSection;