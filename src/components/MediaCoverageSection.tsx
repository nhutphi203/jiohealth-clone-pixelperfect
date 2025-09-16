const MediaCoverageSection = () => {
  const mediaLogos = [
    { name: "VietCetera", logo: "📰" },
    { name: "Nhip Cau Dau Tu", logo: "💼" },
    { name: "VN Express", logo: "📱" },
    { name: "Dan Tri", logo: "📊" },
    { name: "Cafef", logo: "☕" },
    { name: "Thanh Nien", logo: "🌟" },
    { name: "HTV9", logo: "📺" },
    { name: "Zing.vn", logo: "⚡" },
    { name: "VietnamNet", logo: "🌐" },
    { name: "Tuoi Tre", logo: "🌱" }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Curved Background */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full h-16">
          <path
            fill="#f0f9ff"
            fillOpacity="0.6"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Media Logos */}
          <div className="grid grid-cols-2 gap-6">
            {mediaLogos.map((media, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {media.logo}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-700 group-hover:text-jio-blue transition-colors">
                    {media.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                <span className="text-jio-blue">Truyền thông nói về Jio Health</span>
              </h2>
              <div className="w-16 h-1 bg-jio-blue"></div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Cùng khám phá những góc nhìn đa chiều từ các cơ quan truyền thông về Jio Health và hiểu hơn 
                về cách chúng tôi cải tiến dịch vụ chăm sóc sức khỏe.
              </p>
            </div>

            {/* Media Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-jio-blue">50+</div>
                <div className="text-sm text-gray-600">Bài viết</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-jio-blue">10+</div>
                <div className="text-sm text-gray-600">Kênh truyền thông</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-jio-blue">2M+</div>
                <div className="text-sm text-gray-600">Lượt xem</div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-600">Được đưa tin trên các kênh truyền thông hàng đầu</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-600">Nhận được sự quan tâm từ công chúng</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-600">Đánh giá tích cực về chất lượng dịch vụ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCoverageSection;