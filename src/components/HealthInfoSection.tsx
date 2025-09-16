import { Card } from "@/components/ui/card";
import { Heart, Baby, Activity, Users, User, Stethoscope, Shield } from "lucide-react";

const HealthInfoSection = () => {
  const healthTopics = [
    {
      id: 1,
      title: "Tim mạch",
      articles: "13 bài viết",
      icon: Heart,
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-100"
    },
    {
      id: 2, 
      title: "Nhi khoa",
      articles: "21 bài viết",
      icon: Baby,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100"
    },
    {
      id: 3,
      title: "Đái tháo đường", 
      articles: "7 bài viết",
      icon: Activity,
      color: "text-gray-600",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-100"
    },
    {
      id: 4,
      title: "Thận - Tiết Niệu",
      articles: "10 bài viết", 
      icon: Stethoscope,
      color: "text-red-400",
      bgColor: "bg-red-50",
      borderColor: "border-red-100"
    },
    {
      id: 5,
      title: "Thai sản",
      articles: "71 bài viết",
      icon: Shield,
      color: "text-pink-500",
      bgColor: "bg-pink-50", 
      borderColor: "border-pink-100"
    },
    {
      id: 6,
      title: "Sức khỏe giới tính",
      articles: "12 bài viết",
      icon: Users,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100"
    },
    {
      id: 7,
      title: "Sức khỏe phụ nữ",
      articles: "8 bài viết", 
      icon: User,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-primary/10 rounded-full"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-jio-blue/10 rounded-full"></div>
      <div className="absolute top-40 right-40 text-primary/20">
        <div className="w-8 h-8 relative">
          <div className="absolute top-0 left-1/2 w-1 h-8 bg-current transform -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-0 w-8 h-1 bg-current transform -translate-y-1/2"></div>
        </div>
      </div>
      <div className="absolute bottom-20 right-32 text-jio-blue/20">
        <div className="w-6 h-6 relative">
          <div className="absolute top-0 left-1/2 w-1 h-6 bg-current transform -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-0 w-6 h-1 bg-current transform -translate-y-1/2"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Thông tin sức khỏe dành cho bạn
              </h2>
              <div className="w-16 h-1 bg-jio-blue"></div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  360 độ nội dung sức khỏe thuộc các chủ đề được nhiều người quan tâm
                  hiện nay, được sử dụng từ các chuyên gia sức khỏe tại Jio Health.
                </p>
                <p>
                  Cần xem thêm nhiều bài viết chuyên khoa thú vị khác?{" "}
                  <a href="#" className="text-primary hover:text-primary/80 font-medium underline">
                    Blog Jio Health
                  </a>{" "}
                  là điểm đến về tin tức và kiến thức sức khỏe lý tưởng dành cho bạn.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Health Topics Grid */}
          <div className="grid grid-cols-2 gap-4">
            {healthTopics.map((topic, index) => {
              const IconComponent = topic.icon;
              return (
                <Card 
                  key={topic.id}
                  className={`p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer ${topic.bgColor} ${topic.borderColor} border-2 group`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-5 h-5 ${topic.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm group-hover:text-jio-blue transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {topic.articles}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthInfoSection;