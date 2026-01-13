import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Youtube } from "lucide-react";

const footerLinks = {
  products: [
    { name: "Data Logger", href: "#products" },
    { name: "Van điều áp thông minh", href: "#products" },
    { name: "Mặt đọc đồng hồ nước", href: "#products" },
    { name: "Trạm quan trắc chất lượng nước", href: "#products" },
  ],
  solutions: [
    { name: "Nhà máy nước", href: "#solutions" },
    { name: "Hệ thống cấp nước đô thị", href: "#solutions" },
    { name: "Khu công nghiệp", href: "#solutions" },
    { name: "Nông nghiệp & thủy lợi", href: "#solutions" },
  ],
  services: [
    { name: "Tư vấn & thiết kế", href: "#services" },
    { name: "Tùy biến phần cứng", href: "#services" },
    { name: "Tích hợp SCADA/ERP", href: "#services" },
    { name: "Bảo trì & nâng cấp", href: "#services" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  className="w-6 h-6 text-secondary-foreground"
                >
                  <path
                    d="M16 4C16 4 8 12 8 18C8 22.4183 11.5817 26 16 26C20.4183 26 24 22.4183 24 18C24 12 16 4 16 4Z"
                    fill="currentColor"
                  />
                  <circle cx="16" cy="18" r="4" fill="hsl(215, 28%, 17%)" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-lg">WaterIoT</span>
                <span className="text-xs text-primary-foreground/70 block">
                  Smart Solutions
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-sm mb-6">
              Chuyên nghiên cứu, sản xuất và triển khai các giải pháp IoT thông minh 
              cho ngành nước và hạ tầng đô thị.
            </p>
            <div className="space-y-3">
              <a href="tel:+84901234567" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                <Phone size={16} />
                <span>+84 90 123 4567</span>
              </a>
              <a href="mailto:contact@wateriot.vn" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                <Mail size={16} />
                <span>contact@wateriot.vn</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Tầng 8, Tòa nhà Innovation Hub, Quận 7, TP. Hồ Chí Minh</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Sản phẩm</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Giải pháp</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Dịch vụ</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {currentYear} WaterIoT. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 rounded-lg text-primary-foreground/50 hover:text-secondary hover:bg-primary-foreground/5 transition-all"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg text-primary-foreground/50 hover:text-secondary hover:bg-primary-foreground/5 transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg text-primary-foreground/50 hover:text-secondary hover:bg-primary-foreground/5 transition-all"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
