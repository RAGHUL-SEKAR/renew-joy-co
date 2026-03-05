import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$9",
    period: "/month",
    description: "Perfect for individuals getting started.",
    features: [
      "5 projects",
      "10 GB storage",
      "Basic analytics",
      "Email support",
      "API access",
    ],
    cta: "Start free trial",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For growing teams that need more power.",
    features: [
      "Unlimited projects",
      "100 GB storage",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Custom integrations",
      "Team collaboration",
    ],
    popular: true,
    cta: "Start free trial",
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For organizations with advanced needs.",
    features: [
      "Unlimited everything",
      "1 TB storage",
      "Real-time analytics",
      "24/7 dedicated support",
      "Advanced API access",
      "Custom integrations",
      "SSO & SAML",
      "Audit logs",
      "SLA guarantee",
    ],
    cta: "Contact sales",
  },
];

const PricingCard = ({ plan }: { plan: Plan }) => {
  const isPopular = plan.popular;

  return (
    <div
      className={`relative flex flex-col rounded-2xl p-8 ${
        isPopular
          ? "pricing-card-popular bg-card"
          : "border border-border bg-card"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-primary rounded-full px-4 py-1 text-xs font-semibold text-primary-foreground">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold">{plan.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
      </div>

      <div className="mb-8">
        <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
        <span className="text-muted-foreground">{plan.period}</span>
      </div>

      <Button
        variant={isPopular ? "hero" : "hero-outline"}
        className="mb-8 w-full"
      >
        {plan.cta}
      </Button>

      <ul className="space-y-3 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm">
            <Check className="h-4 w-4 shrink-0 text-primary" />
            <span className="text-secondary-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
