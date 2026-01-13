import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Lock, 
  Mail, 
  Eye, 
  EyeOff,
  Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Admin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.info("Chức năng đăng nhập", {
      description: "Hệ thống quản trị đang được phát triển. Vui lòng quay lại sau.",
    });
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative"
      >
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          <span className="text-sm">Quay lại trang chủ</span>
        </Link>

        {/* Card */}
        <div className="p-8 rounded-2xl bg-card border border-border shadow-strong">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <Building2 className="w-6 h-6 text-secondary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-foreground">WaterIoT Admin</h1>
              <p className="text-sm text-muted-foreground">Hệ thống quản trị nội bộ</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="admin@wateriot.vn"
                  required
                  className="h-12 pl-11"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                Mật khẩu
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="h-12 pl-11 pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-border text-secondary focus:ring-secondary" />
                <span className="text-sm text-muted-foreground">Ghi nhớ đăng nhập</span>
              </label>
              <a href="#" className="text-sm text-secondary hover:underline">
                Quên mật khẩu?
              </a>
            </div>

            <Button 
              type="submit" 
              variant="gradient" 
              size="lg" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Đang đăng nhập...
                </>
              ) : (
                "Đăng nhập"
              )}
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              Chỉ dành cho nhân viên nội bộ. Truy cập trái phép sẽ bị xử lý theo pháp luật.
            </p>
          </div>
        </div>

        {/* Security Notice */}
        <p className="text-center text-xs text-primary-foreground/50 mt-6">
          Kết nối được bảo mật bằng SSL 256-bit
        </p>
      </motion.div>
    </div>
  );
};

export default Admin;
