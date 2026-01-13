import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock,
  Building2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    title: "Điện thoại",
    value: "+84 90 123 4567",
    link: "tel:+84901234567",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@wateriot.vn",
    link: "mailto:contact@wateriot.vn",
  },
  {
    icon: MapPin,
    title: "Địa chỉ",
    value: "Tầng 8, Tòa nhà Innovation Hub, Quận 7, TP. Hồ Chí Minh",
    link: "#",
  },
  {
    icon: Clock,
    title: "Giờ làm việc",
    value: "Thứ 2 - Thứ 6: 8:00 - 17:30",
    link: "#",
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Gửi thành công!", {
      description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-50" />

      <div className="container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            Liên hệ
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Liên hệ{" "}
            <span className="gradient-text">tư vấn</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Để lại thông tin, đội ngũ tư vấn của chúng tôi sẽ liên hệ 
            với bạn trong thời gian sớm nhất.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-6 lg:p-8 rounded-2xl bg-card border border-border shadow-soft">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Họ và tên *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Nguyễn Văn A"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Số điện thoại *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="0901 234 567"
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@congty.vn"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Công ty / Tổ chức
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Tên công ty"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Chủ đề
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Tư vấn giải pháp IoT cho nhà máy nước"
                  className="h-12"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Nội dung *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Mô tả nhu cầu của bạn..."
                  rows={5}
                  required
                  className="resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="gradient" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Đang gửi...
                  </>
                ) : (
                  <>
                    Gửi yêu cầu tư vấn
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Company Info Card */}
            <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">WaterIoT</h3>
                  <p className="text-sm text-primary-foreground/70">Smart Solutions</p>
                </div>
              </div>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Công ty công nghệ chuyên nghiên cứu, sản xuất và triển khai 
                các giải pháp IoT cho ngành nước và hạ tầng đô thị.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-secondary/50 hover:bg-secondary/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{item.title}</div>
                    <div className="text-foreground font-medium">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
