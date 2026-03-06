import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { toast } from "sonner";
import { Zap, ArrowLeft, Shield, Sparkles, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Welcome back!");
        navigate("/dashboard");
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (error) throw error;
        toast.success("Check your email to confirm your account!");
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left panel - Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 relative">
        <div className="absolute inset-0 bg-mesh pointer-events-none opacity-30" />
        <div className="relative w-full max-w-md">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>

          <div className="mb-8">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Flowline</span>
            </Link>
            <h1 className="text-3xl font-extrabold tracking-tight">
              {isLogin ? "Welcome back" : "Create your account"}
            </h1>
            <p className="mt-2 text-muted-foreground">
              {isLogin
                ? <>Sign in to access your <Link to="/dashboard" className="text-primary hover:underline">dashboard</Link></>
                : <>Get started with your <a href="/#pricing" className="text-primary hover:underline">14-day free trial</a></>}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-card/60 border-border/60 h-11 backdrop-blur-sm"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                {isLogin && (
                  <a href="#" className="text-xs text-primary hover:underline">
                    Forgot password?
                  </a>
                )}
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="bg-card/60 border-border/60 h-11 backdrop-blur-sm"
              />
            </div>

            <Button
              type="submit"
              variant="hero"
              className="w-full h-11"
              disabled={loading}
            >
              {loading ? "Loading..." : isLogin ? "Sign in" : "Create account"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary hover:underline font-medium"
            >
              {isLogin ? "Sign up for free" : "Sign in"}
            </button>
          </p>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            By continuing, you agree to our{" "}
            <a href="#" className="text-primary/80 hover:underline">Terms</a> and{" "}
            <a href="#" className="text-primary/80 hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>

      {/* Right panel - Visual */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-card/30 border-l border-border/30 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] opacity-20"
            style={{ background: "radial-gradient(circle, hsl(172 66% 50% / 0.2), transparent 60%)" }}
          />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] opacity-15"
            style={{ background: "radial-gradient(circle, hsl(262 60% 58% / 0.2), transparent 60%)" }}
          />
        </div>

        <div className="relative max-w-sm text-center px-8">
          <div className="space-y-8">
            {[
              { icon: Shield, title: "Enterprise Security", desc: "Bank-grade encryption & PCI DSS compliance", color: "bg-gradient-primary" },
              { icon: Sparkles, title: "14-Day Free Trial", desc: "Full access, no credit card required", color: "bg-gradient-violet" },
              { icon: RefreshCw, title: "Auto-Renewals", desc: "Set it and forget it — we handle the rest", color: "bg-gradient-amber" },
            ].map((item, i) => (
              <div key={i} className="glass-card p-5 flex items-center gap-4 text-left animate-float" style={{ animationDelay: `${i * 1.5}s` }}>
                <div className={`h-11 w-11 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                  <item.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
