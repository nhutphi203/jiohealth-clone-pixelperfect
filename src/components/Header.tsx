import { Button } from "@/components/ui/button";
import { ChevronDown, Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* COVID Banner */}
      <div className="bg-jio-blue text-white py-2 px-4 text-center text-sm relative overflow-hidden">
        <div className="flex items-center justify-center gap-2">
          <Heart className="w-4 h-4 text-red-400" />
          <span>Cập nhật mới nhất về COVID-19</span>
          <Button variant="outline" size="sm" className="ml-4 border-white/30 text-white hover:bg-white/10">
            Tìm Hiểu Thêm
          </Button>
        </div>
        {/* Decorative virus icons */}
        <div className="absolute top-1 left-8 w-6 h-6 bg-red-500 rounded-full opacity-60"></div>
        <div className="absolute top-2 right-12 w-4 h-4 bg-red-400 rounded-full opacity-40"></div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                </div>
                <span className="text-xl font-bold text-primary">Jio Health</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                Trang Chủ
              </a>
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors">
                  Các Dịch Vụ
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                Nhà Thuốc Jio
              </a>
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors">
                  Gói Dịch Vụ
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                Đội Ngũ Bác Sĩ
              </a>
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors">
                  Tin Tức
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">VI</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-700" />
              </div>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Đặt Hẹn Khám Ngay
              </Button>
              <Button className="bg-jio-blue hover:bg-jio-blue/90">
                Tải Ứng Dụng Ngay
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-4">
              <a href="#" className="block text-gray-700 hover:text-primary">
                Trang Chủ
              </a>
              <a href="#" className="block text-gray-700 hover:text-primary">
                Các Dịch Vụ
              </a>
              <a href="#" className="block text-gray-700 hover:text-primary">
                Nhà Thuốc Jio
              </a>
              <a href="#" className="block text-gray-700 hover:text-primary">
                Gói Dịch Vụ
              </a>
              <a href="#" className="block text-gray-700 hover:text-primary">
                Đội Ngũ Bác Sĩ
              </a>
              <a href="#" className="block text-gray-700 hover:text-primary">
                Tin Tức
              </a>
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full border-primary text-primary">
                  Đặt Hẹn Khám Ngay
                </Button>
                <Button className="w-full bg-jio-blue hover:bg-jio-blue/90">
                  Tải Ứng Dụng Ngay
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;