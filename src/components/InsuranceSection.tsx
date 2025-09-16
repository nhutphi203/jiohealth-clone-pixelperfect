const InsuranceSection = () => {
  const insurancePartners = [
    { name: "Bảo Minh", logo: "🛡️" },
    { name: "PTI", logo: "🏢" }, 
    { name: "Bảo Hiểm PVI", logo: "🔷" },
    { name: "Bảo Long", logo: "🐉" },
    { name: "Generali", logo: "🦁" },
    { name: "Tokio Marine", logo: "⭐" },
    { name: "Pacific Cross", logo: "➕" },
    { name: "Samsung", logo: "📱" },
    { name: "PG Insurance", logo: "🎯" },
    { name: "Liberty", logo: "🗽" },
    { name: "BICO", logo: "🔵" },
    { name: "Phu Hung", logo: "🌟" },
    { name: "MIC", logo: "❌" },
    { name: "VNI", logo: "🌊" },
    { name: "BSH", logo: "🏦" },
    { name: "Bảo Hiểm Hưng Vượng", logo: "🌅" },
    { name: "MSIG", logo: "💎" },
    { name: "Fubon Life", logo: "🏛️" },
    { name: "CHUBB", logo: "🔐" },
    { name: "Prudential", logo: "📊" },
    { name: "Manulife", logo: "🍁" },
    { name: "AIA", logo: "🔴" },
    { name: "Hanwha Life", logo: "🌸" },
    { name: "FWD", logo: "⏩" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-jio-purple to-jio-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 border border-white rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Bảo lãnh viện phí trực tiếp
          </h2>
          <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-white/90 text-lg max-w-4xl mx-auto leading-relaxed">
            Jio Health hiện đang liên kết với 40+ doanh nghiệp bảo hiểm lớn và uy tín nhằm mang đến cho khách hàng dịch vụ chăm sóc sức khỏe chất lượng với chi phí hợp lý.
          </p>
        </div>

        {/* Insurance Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {insurancePartners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {partner.logo}
              </div>
              <h3 className="text-sm font-semibold text-gray-800 text-center leading-tight">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">
              Dịch vụ bảo lãnh trực tiếp
            </h3>
            <p className="text-white/90 mb-6 max-w-3xl mx-auto">
              Không cần tạm ứng viện phí - Jio Health sẽ thanh toán trực tiếp với công ty bảo hiểm của bạn
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Quy trình đơn giản</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Xử lý nhanh chóng</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Hỗ trợ 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;