import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, hsl(172 66% 50% / 0.15), transparent 70%)" }}
      />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            New: Team plans now available
          </div>

          <h1 className="mb-6 text-5xl font-extrabold leading-[1.1] tracking-tight md:text-7xl">
            Scale your workflow
            <span className="block text-gradient">without limits</span>
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
            The all-in-one platform for teams that move fast. Automate, collaborate, and ship — with plans that grow alongside you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="text-base px-8">
              Start free trial
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8">
              View pricing
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
