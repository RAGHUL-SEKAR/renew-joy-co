import { Check, ArrowLeft, ArrowRight, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  { text: "Unlimited projects", included: true },
  { text: "100 GB storage", included: true },
  { text: "Advanced analytics & reports", included: true },
  { text: "Priority support (< 4hr)", included: true },
  { text: "API access + webhooks", included: true },
  { text: "Custom integrations", included: true },
  { text: "Team collaboration tools", included: true },
  { text: "SSO & SAML", included: false },
  { text: "Audit logs", included: false },
];

const PlanPro = () => (
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
      <div className="mb-2 flex items-center gap-2">
        <span className="text-sm font-semibold text-primary tracking-wider uppercase">Pro Plan</span>
        <span className="bg-gradient-primary rounded-full px-3 py-0.5 text-xs font-semibold text-primary-foreground inline-flex items-center gap-1">
          <Star className="h-3 w-3" /> Most Popular
        </span>
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight mb-3">
        Scale with <span className="text-gradient">Pro</span>
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        For growing teams that need more power, flexibility, and collaboration tools.
      </p>

      <div className="pricing-card-popular glass-card p-8 mb-8">
        <div className="flex items-end gap-2 mb-6">
          <span className="text-5xl font-extrabold tracking-tight">$29</span>
          <span className="text-muted-foreground mb-1">/month</span>
          <span className="ml-3 text-xs text-emerald font-medium bg-emerald/10 px-2 py-0.5 rounded-full mb-1">
            or $24/mo billed yearly
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
          Need enterprise features?{" "}
          <Link to="/plan/enterprise" className="text-primary hover:underline font-medium">Check out Enterprise →</Link>
        </p>
      </div>
    </div>
  </div>
);

export default PlanPro;
