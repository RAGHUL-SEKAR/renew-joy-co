import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Multi-color glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[400px] opacity-15"
          style={{ background: "radial-gradient(circle, hsl(172 66% 50% / 0.25), transparent 60%)" }}
        />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] opacity-15"
          style={{ background: "radial-gradient(circle, hsl(262 60% 58% / 0.25), transparent 60%)" }}
        />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl rounded-3xl border border-primary/20 bg-card/40 backdrop-blur-xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-mesh opacity-50" />
          <div className="relative">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4 md:text-5xl">
              Ready to <span className="text-gradient">get started</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
              Join thousands of teams using Flowline to manage subscriptions effortlessly. 
              Start your{" "}
              <a href="#pricing" className="text-primary hover:underline">free trial</a> today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/auth">
                <Button variant="hero" size="lg" className="text-base px-10 h-12 group">
                  Start free trial
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="#pricing">
                <Button variant="hero-outline" size="lg" className="text-base px-10 h-12">
                  Compare plans
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                14-day free trial
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet" />
                Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
