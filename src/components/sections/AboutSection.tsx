import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Shield, Zap, Wrench, CheckCircle2 } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Chính xác",
    description: "Dữ liệu đo lường chính xác, tin cậy cho mọi quyết định vận hành.",
  },
  {
    icon: Shield,
    title: "Ổn định",
    description: "Hệ thống hoạt động 24/7 với độ tin cậy cao trong mọi điều kiện.",
  },
  {
    icon: Zap,
    title: "Bền bỉ",
    description: "Thiết bị được thiết kế để hoạt động lâu dài trong môi trường khắc nghiệt.",
  },
  {
    icon: Wrench,
    title: "Tùy biến",
    description: "Linh hoạt tùy chỉnh theo yêu cầu cụ thể của từng dự án.",
  },
];

const milestones = [
  "Nghiên cứu & phát triển thiết bị IoT ngành nước",
  "Triển khai hệ thống giám sát và phân tích dữ liệu",
  "Số hóa quy trình vận hành ngành nước",
  "Giảm thất thoát nước tối đa 30%",
  "Tối ưu chi phí vận hành cho doanh nghiệp",
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-50" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Về chúng tôi
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Tiên phong trong{" "}
              <span className="gradient-text">chuyển đổi số</span>{" "}
              ngành nước
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Với đội ngũ kỹ sư giàu kinh nghiệm và công nghệ tiên tiến, 
              chúng tôi cung cấp các giải pháp IoT toàn diện giúp doanh nghiệp 
              nâng cao hiệu quả vận hành và tiết kiệm chi phí.
            </p>

            {/* Milestones */}
            <div className="space-y-3">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <span className="text-foreground">{milestone}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
