import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Zap, LogOut } from "lucide-react";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Flowline</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{user?.email}</span>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign out
            </Button>
          </div>
        </div>
      </nav>

      <div className="container py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            Welcome to your dashboard
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            You're signed in as <span className="text-foreground font-medium">{user?.email}</span>. 
            Your subscription is ready to manage.
          </p>
          <div className="rounded-xl border border-border bg-card p-8">
            <p className="text-muted-foreground">
              Your dashboard content will appear here. Start building your subscription management features!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
