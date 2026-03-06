import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      {/* Multi-layer background */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, hsl(172 66% 50% / 0.12), transparent 60%)" }}
      />
      <div
        className="absolute top-20 right-0 w-[400px] h-[400px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(262 60% 58% / 0.15), transparent 60%)" }}
      />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            <a
              href="#pricing"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary hover:bg-primary/10 transition-colors group"
            >
              <Sparkles className="h-3.5 w-3.5" />
              New: Team plans now available
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </a>

            <h1 className="mb-6 text-5xl font-extrabold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
              Scale your
              <br />
              workflow{" "}
              <span className="text-gradient">without limits</span>
            </h1>

            <p className="mb-8 text-lg text-muted-foreground leading-relaxed max-w-md">
              The all-in-one platform for teams that move fast. Automate, collaborate, and ship — with{" "}
              <a href="#pricing" className="text-primary hover:underline">plans that grow</a> alongside you.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link to="/auth">
                <Button variant="hero" size="lg" className="text-base px-8 h-12">
                  Start free trial
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button variant="hero-outline" size="lg" className="text-base px-8 h-12">
                  <Play className="mr-1 h-4 w-4" />
                  See how it works
                </Button>
              </a>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required · <a href="#faq" className="text-primary/80 hover:text-primary hover:underline">14-day free trial</a> · Cancel anytime
            </p>
          </div>

          {/* Right image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden glow-border-lg border border-border/40">
              <img
                src={heroBg}
                alt="Flowline subscription management dashboard showing analytics and plans"
                className="w-full h-auto rounded-2xl"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            {/* Floating stat cards */}
            <div className="absolute -left-6 top-1/4 glass-card p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">↑</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Revenue</p>
                  <p className="text-lg font-bold">$48.2K</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 bottom-1/3 glass-card p-4 animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-violet flex items-center justify-center">
                  <span className="text-foreground font-bold text-sm">+12</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">New subs</p>
                  <p className="text-lg font-bold">Today</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-20 pt-10 border-t border-border/30">
          <p className="text-center text-xs text-muted-foreground mb-6 uppercase tracking-widest">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-muted-foreground/40">
            {["Vercel", "Linear", "Stripe", "Notion", "Figma", "Slack"].map((name) => (
              <span key={name} className="text-lg font-bold tracking-tight">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
