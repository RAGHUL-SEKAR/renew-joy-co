import { RefreshCw, Shield, BarChart3, Zap, Users, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: RefreshCw,
    title: "Auto-Renewals",
    description: "Subscriptions renew automatically. Zero gaps in service, no manual work.",
    color: "teal" as const,
    link: "#pricing",
    linkLabel: "View plans",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Enterprise-grade encryption. PCI DSS compliant out of the box.",
    color: "violet" as const,
    link: "#faq",
    linkLabel: "Security FAQ",
  },
  {
    icon: BarChart3,
    title: "Usage Analytics",
    description: "Real-time dashboards tracking revenue, churn, and growth metrics.",
    color: "amber" as const,
    link: "#how-it-works",
    linkLabel: "See analytics",
  },
  {
    icon: Zap,
    title: "Instant Upgrades",
    description: "Switch plans in one click. Prorated billing applied automatically.",
    color: "emerald" as const,
    link: "#pricing",
    linkLabel: "Compare plans",
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Manage members with granular roles and permissions controls.",
    color: "rose" as const,
    link: "/auth",
    linkLabel: "Get started",
  },
  {
    icon: Globe,
    title: "Global Billing",
    description: "135+ currencies with automatic tax calculation and compliance.",
    color: "teal" as const,
    link: "#pricing",
    linkLabel: "Learn more",
  },
];

const colorMap = {
  teal: {
    bg: "bg-primary/10",
    text: "text-primary",
    glow: "stat-glow-teal",
    hoverBorder: "group-hover:border-primary/20",
    shadow: "group-hover:shadow-primary/5",
  },
  violet: {
    bg: "bg-violet/10",
    text: "text-violet",
    glow: "stat-glow-violet",
    hoverBorder: "group-hover:border-violet/20",
    shadow: "group-hover:shadow-violet/5",
  },
  amber: {
    bg: "bg-amber/10",
    text: "text-amber",
    glow: "stat-glow-amber",
    hoverBorder: "group-hover:border-amber/20",
    shadow: "group-hover:shadow-amber/5",
  },
  emerald: {
    bg: "bg-emerald/10",
    text: "text-emerald",
    glow: "stat-glow-emerald",
    hoverBorder: "group-hover:border-emerald/20",
    shadow: "group-hover:shadow-emerald/5",
  },
  rose: {
    bg: "bg-rose/10",
    text: "text-rose",
    glow: "stat-glow-teal",
    hoverBorder: "group-hover:border-rose/20",
    shadow: "group-hover:shadow-rose/5",
  },
};

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-mesh pointer-events-none opacity-50" />
      <div className="container relative">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold text-primary tracking-wider uppercase mb-3 block">Features</span>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Everything you need to{" "}
            <span className="text-gradient">manage subscriptions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Built for teams that value simplicity and power in equal measure. 
            <a href="#pricing" className="text-primary hover:underline ml-1">See our plans →</a>
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const colors = colorMap[feature.color];
            const isInternal = feature.link.startsWith("/");
            return (
              <div
                key={feature.title}
                className={`group relative rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-7 transition-all duration-300 hover:shadow-lg ${colors.hoverBorder} ${colors.shadow} hover:-translate-y-1`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 rounded-2xl ${colors.glow} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative">
                  <div className={`mb-5 inline-flex rounded-xl ${colors.bg} p-3`}>
                    <feature.icon className={`h-5 w-5 ${colors.text}`} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  {isInternal ? (
                    <Link
                      to={feature.link}
                      className={`inline-flex items-center gap-1 text-sm font-medium ${colors.text} hover:underline group/link`}
                    >
                      {feature.linkLabel}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  ) : (
                    <a
                      href={feature.link}
                      className={`inline-flex items-center gap-1 text-sm font-medium ${colors.text} hover:underline group/link`}
                    >
                      {feature.linkLabel}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
