import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Activity, 
  Gauge, 
  Camera, 
  Droplets, 
  Radio, 
  Battery, 
  Wifi,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Activity,
    title: "Data Logger",
    description: "Đo áp suất, lưu lượng, mực nước với độ chính xác cao. Pin lâu dài, hỗ trợ NB-IoT / LoRa / 4G.",
    features: ["Đo đa thông số", "Pin 5+ năm", "Kết nối đa giao thức"],
    color: "from-cyan-500/20 to-blue-500/20",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-600",
  },
  {
    icon: Gauge,
    title: "Van điều áp thông minh",
    description: "Điều khiển từ xa và tự động điều chỉnh áp suất theo thời gian thực.",
    features: ["Điều khiển từ xa", "Tự động cân bằng áp", "Tiết kiệm năng lượng"],
    color: "from-emerald-500/20 to-teal-500/20",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
  },
  {
    icon: Camera,
    title: "Mặt đọc đồng hồ nước thông minh",
    description: "Nhận dạng chỉ số đồng hồ bằng công nghệ Camera và AI tiên tiến.",
    features: ["AI nhận dạng", "Độ chính xác 99%", "Dễ lắp đặt"],
    color: "from-violet-500/20 to-purple-500/20",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600",
  },
  {
    icon: Droplets,
    title: "Trạm quan trắc chất lượng nước",
    description: "Đo pH, độ đục, clo, TDS, nhiệt độ với dữ liệu thời gian thực.",
    features: ["Đo 10+ thông số", "Cảnh báo tự động", "Báo cáo tức thời"],
    color: "from-blue-500/20 to-indigo-500/20",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
];

export function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="section-padding bg-muted/30 relative" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            Sản phẩm IoT
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Thiết bị IoT chuyên dụng cho{" "}
            <span className="gradient-text">ngành nước</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Các sản phẩm được nghiên cứu và phát triển tại Việt Nam, 
            đáp ứng tiêu chuẩn quốc tế và phù hợp với điều kiện thực tế.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border card-hover overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${product.iconBg} flex items-center justify-center mb-6`}>
                  <product.icon className={`w-7 h-7 ${product.iconColor}`} />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button variant="ghost" className="group/btn p-0 h-auto text-secondary hover:text-secondary">
                  Tìm hiểu thêm
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="gradient" size="lg">
            Xem tất cả sản phẩm
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
