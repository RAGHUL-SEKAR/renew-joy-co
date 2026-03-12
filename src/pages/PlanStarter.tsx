import { Check, ArrowLeft, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  { text: "5 projects", included: true },
  { text: "10 GB storage", included: true },
  { text: "Basic analytics dashboard", included: true },
  { text: "Email support", included: true },
  { text: "REST API access", included: true },
  { text: "Custom integrations", included: false },
  { text: "Team collaboration", included: false },
  { text: "Priority support", included: false },
];

const PlanStarter = () => (
  <div className="min-h-screen bg-background">
    <nav className="border-b border-border/40 bg-background/70 backdrop-blur-2xl sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">Flowline</span>
        </Link>
        <Link to="/#pricing">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-1" /> All plans
          </Button>
        </Link>
      </div>
    </nav>

    <div className="container py-16 max-w-3xl mx-auto">
      <div className="mb-2">
        <span className="text-sm font-semibold text-emerald tracking-wider uppercase">Starter Plan</span>
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight mb-3">
        Get started with <span className="text-emerald">Starter</span>
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        Perfect for individuals and freelancers getting started. Everything you need to launch your first project.
      </p>

      <div className="glass-card p-8 mb-8">
        <div className="flex items-end gap-2 mb-6">
          <span className="text-5xl font-extrabold tracking-tight">$9</span>
          <span className="text-muted-foreground mb-1">/month</span>
          <span className="ml-3 text-xs text-emerald font-medium bg-emerald/10 px-2 py-0.5 rounded-full mb-1">
            or $7/mo billed yearly
          </span>
        </div>

        <Link to="/auth">
          <Button variant="hero" size="lg" className="w-full sm:w-auto group">
            Start 14-day free trial
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>

      <div className="glass-card p-8">
        <h2 className="text-xl font-bold mb-6">What's included</h2>
        <ul className="space-y-4">
          {features.map((f) => (
            <li key={f.text} className="flex items-center gap-3 text-sm">
              {f.included ? (
                <Check className="h-4 w-4 text-primary shrink-0" />
              ) : (
                <span className="h-4 w-4 shrink-0 rounded-full border border-border/60" />
              )}
              <span className={f.included ? "text-secondary-foreground" : "text-muted-foreground line-through"}>
                {f.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Need more power?{" "}
          <Link to="/plan/pro" className="text-primary hover:underline font-medium">Check out Pro →</Link>
        </p>
      </div>
    </div>
  </div>
);

export default PlanStarter;
