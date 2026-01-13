import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Factory, Building2, Warehouse, Leaf, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Factory,
    title: "Nhà máy nước",
    description: "Giám sát toàn bộ quy trình xử lý nước từ nguồn đến phân phối. Tối ưu hóa công suất và chất lượng nước đầu ra.",
    benefits: ["Giám sát chất lượng nước", "Tối ưu công suất", "Giảm tiêu hao năng lượng"],
    image: "bg-gradient-to-br from-cyan-500/20 to-blue-600/20",
  },
  {
    icon: Building2,
    title: "Hệ thống cấp nước đô thị",
    description: "Quản lý mạng lưới cấp nước thành phố với hệ thống giám sát áp lực, lưu lượng và phát hiện rò rỉ tự động.",
    benefits: ["Phát hiện rò rỉ", "Cân bằng áp lực", "Giảm thất thoát nước"],
    image: "bg-gradient-to-br from-violet-500/20 to-purple-600/20",
  },
  {
    icon: Warehouse,
    title: "Khu công nghiệp",
    description: "Giải pháp xử lý nước thải và tái sử dụng nước cho các khu công nghiệp, đáp ứng tiêu chuẩn môi trường.",
    benefits: ["Xử lý nước thải", "Tái sử dụng nước", "Đạt chuẩn môi trường"],
    image: "bg-gradient-to-br from-amber-500/20 to-orange-600/20",
  },
  {
    icon: Leaf,
    title: "Nông nghiệp & thủy lợi",
    description: "Hệ thống tưới tiêu thông minh, giám sát mực nước hồ chứa và tối ưu hóa nguồn nước cho nông nghiệp.",
    benefits: ["Tưới tiêu thông minh", "Giám sát hồ chứa", "Tiết kiệm nước"],
    image: "bg-gradient-to-br from-emerald-500/20 to-green-600/20",
  },
];

export function SolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solutions" className="section-padding bg-background" ref={ref}>
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
            Giải pháp
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Giải pháp theo{" "}
            <span className="gradient-text">lĩnh vực</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Chúng tôi cung cấp các giải pháp IoT tùy biến theo đặc thù 
            của từng lĩnh vực, đảm bảo hiệu quả tối đa.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border card-hover"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 ${solution.image} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative p-6 lg:p-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <solution.icon className="w-7 h-7 text-secondary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2 mb-6">
                  {solution.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-secondary" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button variant="ghost" className="group/btn p-0 h-auto text-secondary hover:text-secondary">
                  Xem chi tiết
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
