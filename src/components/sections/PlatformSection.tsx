import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  LayoutDashboard, 
  MapPin, 
  Bell, 
  FileText, 
  Users, 
  TrendingUp,
  Shield,
  Zap
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Dashboard trực quan",
    description: "Biểu đồ và thống kê theo thời gian thực, dễ dàng theo dõi mọi chỉ số.",
  },
  {
    icon: MapPin,
    title: "Bản đồ GIS",
    description: "Hiển thị vị trí thiết bị và trạng thái hệ thống trên bản đồ tương tác.",
  },
  {
    icon: Bell,
    title: "Cảnh báo sự cố",
    description: "Thông báo tức thời qua app, SMS, email khi có bất thường.",
  },
  {
    icon: FileText,
    title: "Xuất báo cáo",
    description: "Lưu trữ dữ liệu lịch sử và xuất báo cáo theo mẫu tùy chỉnh.",
  },
  {
    icon: Users,
    title: "Phân quyền người dùng",
    description: "Quản lý truy cập theo vai trò, đảm bảo bảo mật thông tin.",
  },
  {
    icon: TrendingUp,
    title: "Phân tích xu hướng",
    description: "AI phân tích dữ liệu, dự đoán sự cố và đề xuất tối ưu.",
  },
];

export function PlatformSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-primary relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            {/* Dashboard Mockup */}
            <div className="relative rounded-2xl overflow-hidden shadow-strong border border-white/10">
              <div className="bg-slate-900 p-4">
                {/* Browser Bar */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 ml-4 h-6 rounded-lg bg-slate-800 flex items-center px-3">
                    <span className="text-xs text-slate-500">platform.wateriot.vn</span>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="grid grid-cols-3 gap-3">
                  {/* Stats Cards */}
                  {[
                    { label: "Thiết bị online", value: "486", color: "bg-emerald-500" },
                    { label: "Lưu lượng hôm nay", value: "12.4M m³", color: "bg-cyan-500" },
                    { label: "Cảnh báo", value: "3", color: "bg-amber-500" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-3 rounded-lg bg-slate-800">
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`w-2 h-2 rounded-full ${stat.color}`} />
                        <span className="text-xs text-slate-400">{stat.label}</span>
                      </div>
                      <span className="text-lg font-bold text-white">{stat.value}</span>
                    </div>
                  ))}
                </div>

                {/* Chart Placeholder */}
                <div className="mt-4 p-4 rounded-lg bg-slate-800">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-white">Lưu lượng 24h</span>
                    <span className="text-xs text-slate-400">Cập nhật: 5 phút trước</span>
                  </div>
                  <div className="h-32 flex items-end gap-1">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-secondary/60 rounded-t"
                        initial={{ height: 0 }}
                        animate={isInView ? { height: `${30 + Math.random() * 70}%` } : {}}
                        transition={{ duration: 0.5, delay: 0.8 + i * 0.02 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -right-4 -top-4 px-4 py-3 rounded-xl bg-card shadow-strong border border-border"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Bảo mật cao</div>
                  <div className="text-xs text-muted-foreground">SSL & mã hóa dữ liệu</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -left-4 -bottom-4 px-4 py-3 rounded-xl bg-card shadow-strong border border-border"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Realtime</div>
                  <div className="text-xs text-muted-foreground">Cập nhật tức thời</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Nền tảng quản lý
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Nền tảng quản lý &{" "}
              <span className="text-secondary">phân tích dữ liệu</span>
            </h2>

            <p className="text-lg text-primary-foreground/70 mb-10 leading-relaxed">
              Giám sát toàn bộ hệ thống từ một giao diện duy nhất. 
              Phân tích dữ liệu thông minh, đưa ra quyết định chính xác.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-primary-foreground/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
