import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Lightbulb, 
  Cog, 
  Link2, 
  Wrench, 
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Lightbulb,
    title: "Tư vấn & thiết kế hệ thống IoT",
    description: "Đội ngũ kỹ sư giàu kinh nghiệm sẽ khảo sát, phân tích và đề xuất giải pháp phù hợp nhất với nhu cầu và ngân sách của bạn.",
    highlights: [
      "Khảo sát hiện trạng miễn phí",
      "Thiết kế hệ thống chi tiết",
      "Dự toán kinh phí rõ ràng",
      "Lộ trình triển khai cụ thể",
    ],
  },
  {
    icon: Cog,
    title: "Tùy biến phần cứng & phần mềm",
    description: "Phát triển và tùy chỉnh thiết bị IoT cũng như phần mềm theo yêu cầu đặc thù của từng dự án.",
    highlights: [
      "Thiết kế phần cứng theo yêu cầu",
      "Phát triển firmware chuyên biệt",
      "Tùy chỉnh giao diện dashboard",
      "Tích hợp API riêng",
    ],
  },
  {
    icon: Link2,
    title: "Tích hợp SCADA / ERP",
    description: "Kết nối hệ thống IoT với các phần mềm quản lý hiện có như SCADA, ERP, hệ thống kế toán.",
    highlights: [
      "Tích hợp SCADA các loại",
      "Kết nối ERP (SAP, Oracle...)",
      "API đồng bộ dữ liệu",
      "Đào tạo vận hành",
    ],
  },
  {
    icon: Wrench,
    title: "Bảo trì, vận hành, nâng cấp",
    description: "Dịch vụ bảo trì định kỳ, hỗ trợ kỹ thuật 24/7 và nâng cấp hệ thống liên tục.",
    highlights: [
      "Bảo trì định kỳ",
      "Hỗ trợ kỹ thuật 24/7",
      "Thay thế linh kiện nhanh",
      "Nâng cấp tính năng mới",
    ],
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-muted/30" ref={ref}>
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
            Dịch vụ
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Dịch vụ{" "}
            <span className="gradient-text">chuyên nghiệp</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Từ tư vấn, triển khai đến bảo trì - chúng tôi đồng hành 
            cùng bạn trong suốt vòng đời dự án.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border card-hover"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-secondary" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                        <span className="text-sm text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="shrink-0 self-start"
                >
                  Tìm hiểu thêm
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
