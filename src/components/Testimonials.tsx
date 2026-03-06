import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at Nexus Labs",
    quote: "Flowline cut our subscription management time by 80%. The auto-renewals and analytics are game-changing.",
    rating: 5,
    color: "teal" as const,
  },
  {
    name: "Marcus Rivera",
    role: "Founder at Pulse Digital",
    quote: "We switched from a custom billing stack and saved $15K/year. The team collaboration features sealed the deal.",
    rating: 5,
    color: "violet" as const,
  },
  {
    name: "Emily Park",
    role: "Head of Ops at CloudScale",
    quote: "The global billing support was crucial for our expansion. 135+ currencies, automatic tax calc — incredible.",
    rating: 5,
    color: "amber" as const,
  },
];

const colorBg = {
  teal: "border-primary/20 bg-primary/5",
  violet: "border-violet/20 bg-violet/5",
  amber: "border-amber/20 bg-amber/5",
};

const colorText = {
  teal: "text-primary",
  violet: "text-violet",
  amber: "text-amber",
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 border-t border-border/30 relative">
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(38 92% 60% / 0.2), transparent 60%)" }}
      />
      <div className="container relative">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold text-amber tracking-wider uppercase mb-3 block">Testimonials</span>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Loved by <span className="text-gradient-amber">teams worldwide</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See why thousands of companies trust Flowline for their subscription management.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl border ${colorBg[t.color]} p-7 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 fill-current ${colorText[t.color]}`} />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-foreground mb-6">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold ${colorBg[t.color]} ${colorText[t.color]}`}>
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
