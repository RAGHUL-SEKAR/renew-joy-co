import { Check, ArrowLeft, ArrowRight, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  { text: "Unlimited everything", included: true },
  { text: "1 TB storage", included: true },
  { text: "Real-time analytics", included: true },
  { text: "24/7 dedicated support", included: true },
  { text: "Advanced API + GraphQL", included: true },
  { text: "Custom integrations", included: true },
  { text: "SSO & SAML", included: true },
  { text: "Audit logs", included: true },
  { text: "SLA guarantee (99.99%)", included: true },
];

const PlanEnterprise = () => (
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
        <span className="text-sm font-semibold text-violet tracking-wider uppercase">Enterprise Plan</span>
        <span className="bg-gradient-violet rounded-full px-3 py-0.5 text-xs font-semibold text-primary-foreground inline-flex items-center gap-1">
          <Shield className="h-3 w-3" /> Maximum Security
        </span>
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight mb-3">
        Enterprise-grade <span className="text-violet">power</span>
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        For organizations with advanced security, compliance, and dedicated support needs.
      </p>

      <div className="glass-card p-8 mb-8 border-violet/20">
        <div className="flex items-end gap-2 mb-6">
          <span className="text-5xl font-extrabold tracking-tight">$99</span>
          <span className="text-muted-foreground mb-1">/month</span>
          <span className="ml-3 text-xs text-emerald font-medium bg-emerald/10 px-2 py-0.5 rounded-full mb-1">
            or $79/mo billed yearly
          </span>
        </div>

        <Link to="/auth">
          <Button variant="hero" size="lg" className="w-full sm:w-auto group">
            Contact sales
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>

      <div className="glass-card p-8">
        <h2 className="text-xl font-bold mb-6">Everything included</h2>
        <ul className="space-y-4">
          {features.map((f) => (
            <li key={f.text} className="flex items-center gap-3 text-sm">
              <Check className="h-4 w-4 text-violet shrink-0" />
              <span className="text-secondary-foreground">{f.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Looking for a simpler plan?{" "}
          <Link to="/plan/pro" className="text-primary hover:underline font-medium">← Check out Pro</Link>
        </p>
      </div>
    </div>
  </div>
);

export default PlanEnterprise;
