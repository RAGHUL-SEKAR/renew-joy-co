import { RefreshCw, Shield, BarChart3, Zap, Users, Globe } from "lucide-react";

const features = [
  {
    icon: RefreshCw,
    title: "Auto-Renewals",
    description: "Subscriptions renew automatically. No gaps in service, no manual intervention needed.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Enterprise-grade encryption for all transactions. PCI DSS compliant out of the box.",
  },
  {
    icon: BarChart3,
    title: "Usage Analytics",
    description: "Track usage, revenue, and churn with real-time dashboards and exportable reports.",
  },
  {
    icon: Zap,
    title: "Instant Upgrades",
    description: "Switch plans with one click. Changes apply immediately with prorated billing.",
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Add and remove team members. Set roles and permissions at granular level.",
  },
  {
    icon: Globe,
    title: "Global Billing",
    description: "Support for 135+ currencies with automatic tax calculation and compliance.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 border-t border-border/50">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight">
            Everything you need to <span className="text-gradient">manage subscriptions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Built for teams that value simplicity and power in equal measure.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
