import { UserPlus, CreditCard, RefreshCw, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Sign up & choose a plan",
    description: "Create your account in seconds. Pick Starter, Pro, or Enterprise — each comes with a 14-day free trial.",
    color: "primary",
    gradient: "bg-gradient-primary",
    link: "/auth",
    linkLabel: "Create account",
  },
  {
    number: "02",
    icon: CreditCard,
    title: "Start building & collaborating",
    description: "Access all features instantly. Invite your team, set up integrations, and watch your productivity soar.",
    color: "violet",
    gradient: "bg-gradient-violet",
    link: "#features",
    linkLabel: "Explore features",
  },
  {
    number: "03",
    icon: RefreshCw,
    title: "Auto-renew & scale",
    description: "Your subscription renews automatically. Upgrade anytime with prorated billing — no hidden fees, ever.",
    color: "amber",
    gradient: "bg-gradient-amber",
    link: "#pricing",
    linkLabel: "See pricing",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 border-t border-border/30 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(262 60% 58% / 0.3), transparent 70%)" }}
      />
      <div className="container relative">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold text-violet tracking-wider uppercase mb-3 block">How It Works</span>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Up and running in <span className="text-gradient-violet">three steps</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From sign-up to auto-renewal — we handle the complexity so you don't have to.
          </p>
        </div>

        <div className="mx-auto max-w-5xl grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(100%+0.5rem)] w-[calc(100%-4rem)] h-px border-t border-dashed border-border/50 z-0" />
              )}
              
              <div className="relative">
                <div className="mb-6 flex items-center gap-4">
                  <div className={`h-14 w-14 rounded-2xl ${step.gradient} flex items-center justify-center shadow-lg`}>
                    <step.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-5xl font-extrabold text-border/80">{step.number}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                  {step.description}
                </p>
                <a
                  href={step.link}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline group/link"
                >
                  {step.linkLabel}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
