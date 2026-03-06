import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Zap, LogOut, CreditCard, BarChart3, Settings, Users, ArrowRight } from "lucide-react";

const dashboardCards = [
  {
    icon: CreditCard,
    title: "Current Plan",
    value: "Pro",
    detail: "Renews on Apr 5, 2026",
    color: "bg-gradient-primary",
    link: "/#pricing",
    linkLabel: "Change plan",
  },
  {
    icon: BarChart3,
    title: "Usage This Month",
    value: "68%",
    detail: "32 GB of 100 GB used",
    color: "bg-gradient-violet",
    link: "/#features",
    linkLabel: "View analytics",
  },
  {
    icon: Users,
    title: "Team Members",
    value: "5",
    detail: "2 admins, 3 members",
    color: "bg-gradient-amber",
    link: "/#features",
    linkLabel: "Manage team",
  },
];

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border/40 bg-background/70 backdrop-blur-2xl sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Flowline</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:inline">{user?.email}</span>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign out
            </Button>
          </div>
        </div>
      </nav>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl font-extrabold tracking-tight mb-2">
              Welcome back 👋
            </h1>
            <p className="text-muted-foreground">
              Manage your subscription, team, and analytics from here. Need help?{" "}
              <a href="/#faq" className="text-primary hover:underline">Check our FAQ</a>.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
            {dashboardCards.map((card) => (
              <div key={card.title} className="glass-card-hover p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`h-10 w-10 rounded-xl ${card.color} flex items-center justify-center`}>
                    <card.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">{card.title}</span>
                </div>
                <p className="text-3xl font-extrabold mb-1">{card.value}</p>
                <p className="text-sm text-muted-foreground mb-4">{card.detail}</p>
                <Link
                  to={card.link}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline group"
                >
                  {card.linkLabel}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-lg font-semibold">Quick Actions</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "Upgrade to Enterprise", href: "/#pricing" },
                { label: "View billing history", href: "#" },
                { label: "Manage integrations", href: "/#features" },
                { label: "Invite team members", href: "#" },
              ].map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  className="flex items-center justify-between rounded-xl border border-border/60 bg-card/40 p-4 text-sm hover:border-primary/20 hover:bg-card/60 transition-all group"
                >
                  <span>{action.label}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1 transform" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
