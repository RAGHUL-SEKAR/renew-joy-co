import { Check, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Plan {
  name: string;
  price: { monthly: string; yearly: string };
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  ctaLink: string;
  color: string;
  gradient: string;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: { monthly: "$9", yearly: "$7" },
    period: "/month",
    description: "Perfect for individuals and freelancers getting started.",
    features: [
      "5 projects",
      "10 GB storage",
      "Basic analytics dashboard",
      "Email support",
      "REST API access",
    ],
    cta: "Start free trial",
    ctaLink: "/plan/starter",
    color: "emerald",
    gradient: "bg-gradient-emerald",
  },
  {
    name: "Pro",
    price: { monthly: "$29", yearly: "$24" },
    period: "/month",
    description: "For growing teams that need more power and flexibility.",
    features: [
      "Unlimited projects",
      "100 GB storage",
      "Advanced analytics & reports",
      "Priority support (< 4hr)",
      "API access + webhooks",
      "Custom integrations",
      "Team collaboration tools",
    ],
    popular: true,
    cta: "Start free trial",
    ctaLink: "/plan/pro",
    color: "teal",
    gradient: "bg-gradient-primary",
  },
  {
    name: "Enterprise",
    price: { monthly: "$99", yearly: "$79" },
    period: "/month",
    description: "For organizations with advanced security and compliance needs.",
    features: [
      "Unlimited everything",
      "1 TB storage",
      "Real-time analytics",
      "24/7 dedicated support",
      "Advanced API + GraphQL",
      "Custom integrations",
      "SSO & SAML",
      "Audit logs",
      "SLA guarantee (99.99%)",
    ],
    cta: "Contact sales",
    ctaLink: "/auth",
    color: "violet",
    gradient: "bg-gradient-violet",
  },
];

const PricingCard = ({ plan, billing }: { plan: Plan; billing: "monthly" | "yearly" }) => {
  const isPopular = plan.popular;
  const price = billing === "monthly" ? plan.price.monthly : plan.price.yearly;

  return (
    <div
      className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
        isPopular
          ? "pricing-card-popular bg-card"
          : "border border-border/60 bg-card/60 backdrop-blur-sm hover:border-border"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-primary rounded-full px-4 py-1 text-xs font-semibold text-primary-foreground inline-flex items-center gap-1">
            <Star className="h-3 w-3" />
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-bold">{plan.name}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
      </div>

      <div className="mb-8">
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
        <span className="text-muted-foreground">{plan.period}</span>
        {billing === "yearly" && (
          <span className="ml-2 text-xs text-emerald font-medium bg-emerald/10 px-2 py-0.5 rounded-full">
            Save 20%
          </span>
        )}
      </div>

      <Link to={plan.ctaLink} className="block mb-8">
        <Button
          variant={isPopular ? "hero" : "hero-outline"}
          className="w-full group"
        >
          {plan.cta}
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </Link>

      <ul className="space-y-3.5 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
            <span className="text-secondary-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Pricing = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-mesh pointer-events-none opacity-30" />
      <div className="container relative">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold text-primary tracking-wider uppercase mb-3 block">Pricing</span>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Simple, <span className="text-gradient">transparent</span> pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your needs. All plans include a{" "}
            <a href="#faq" className="text-primary hover:underline">14-day free trial</a>.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <button
            onClick={() => setBilling("monthly")}
            className={`text-sm font-medium transition-colors ${
              billing === "monthly" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling(billing === "monthly" ? "yearly" : "monthly")}
            className={`relative h-7 w-12 rounded-full transition-colors ${
              billing === "yearly" ? "bg-primary" : "bg-secondary"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-foreground transition-transform ${
                billing === "yearly" ? "translate-x-5" : ""
              }`}
            />
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`text-sm font-medium transition-colors inline-flex items-center gap-2 ${
              billing === "yearly" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Yearly
            <span className="text-xs text-emerald font-semibold bg-emerald/10 px-2 py-0.5 rounded-full">
              -20%
            </span>
          </button>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} billing={billing} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All plans include SSL, 99.9% uptime SLA, and{" "}
            <a href="#features" className="text-primary hover:underline">core features</a>.
            Need a custom plan?{" "}
            <Link to="/auth" className="text-primary hover:underline font-medium">Contact us →</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
