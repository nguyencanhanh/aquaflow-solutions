import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Waves, Activity, Droplets, Gauge } from "lucide-react";

const stats = [
  { value: "500+", label: "Thiết bị triển khai" },
  { value: "98%", label: "Độ chính xác" },
  { value: "50+", label: "Dự án thành công" },
  { value: "24/7", label: "Hỗ trợ kỹ thuật" },
];

const floatingIcons = [
  { Icon: Waves, delay: 0 },
  { Icon: Activity, delay: 0.5 },
  { Icon: Droplets, delay: 1 },
  { Icon: Gauge, delay: 1.5 },
];

export function HeroSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProducts = () => {
    document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Floating Icons */}
        {floatingIcons.map(({ Icon, delay }, index) => (
          <motion.div
            key={index}
            className="absolute text-secondary/20"
            style={{
              top: `${20 + index * 20}%`,
              left: `${10 + index * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={48 + index * 12} />
          </motion.div>
        ))}

        {/* Water Wave Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
          <motion.svg
            className="absolute bottom-0 w-[200%] h-full"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            animate={{ x: [0, -720] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <path
              fill="hsl(192, 91%, 36%)"
              d="M0,50 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1150,100 1350,0 1440,50 L1440,100 L0,100 Z"
            />
          </motion.svg>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="text-sm font-medium">Giải pháp IoT hàng đầu Việt Nam</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Giải pháp IoT thông minh cho{" "}
            <span className="relative">
              <span className="relative z-10 text-secondary">ngành nước</span>
              <motion.span
                className="absolute bottom-2 left-0 right-0 h-3 bg-secondary/20 -z-0"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>{" "}
            & hạ tầng đô thị
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Cung cấp thiết bị IoT và nền tảng quản lý dữ liệu giúp giám sát, 
            phân tích và tối ưu vận hành hệ thống cấp thoát nước theo thời gian thực.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              Liên hệ tư vấn
              <ArrowRight size={20} />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={scrollToProducts}>
              <Play size={18} />
              Xem giải pháp
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-secondary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
