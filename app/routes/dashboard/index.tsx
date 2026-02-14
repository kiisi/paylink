import { Link } from "react-router";
import { DollarSign, FolderOpen, FolderClosed, PlusCircle, ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import AppLayout from "~/components/layouts/app-layout";
import StatCard from "~/components/stat-card";
import { formatCurrency, mockCollections, recentPayments } from "~/data/mock-data";
import { Badge } from "~/components/ui/badge";

const Dashboard = () => {
  const totalCollected = mockCollections.reduce((sum, c) => sum + c.totalCollected, 0);
  const activeCount = mockCollections.filter((c) => c.status === "active").length;
  const closedCount = mockCollections.filter((c) => c.status === "closed").length;

  return (
    <AppLayout>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Welcome back, John</p>
        </div>
        <Link to="/create">
          <Button className="gap-2">
            <PlusCircle size={18} /> Create Collection
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard title="Total Collected" value={formatCurrency(totalCollected)} icon={<DollarSign size={20} className="text-primary-foreground" />} subtitle="Across all collections" variant="primary" />
        <StatCard title="Active Collections" value={activeCount} icon={<FolderOpen size={20} className="text-primary" />} subtitle="Currently accepting payments" />
        <StatCard title="Closed Collections" value={closedCount} icon={<FolderClosed size={20} className="text-primary" />} subtitle="Completed collections" />
      </div>

      {/* Collections */}
      <div className="mb-8">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Your Collections</h2>
        <div className="space-y-3">
          {mockCollections.map((col) => (
            <Link key={col.id} to={`/collection/${col.id}`} className="block">
              <div className="rounded-xl border bg-card p-4 shadow-card transition-all hover:shadow-elevated">
                <div className="flex items-start justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground truncate">{col.name}</h3>
                      <Badge variant={col.status === "active" ? "default" : "secondary"} className="text-xs capitalize">
                        {col.status}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{col.description}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{formatCurrency(col.totalCollected)}</span>
                      {col.targetAmount && (
                        <span>of {formatCurrency(col.targetAmount)}</span>
                      )}
                      <span>{col.contributorCount} contributors</span>
                    </div>
                    {col.targetAmount && (
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full gradient-primary transition-all"
                          style={{ width: `${Math.min((col.totalCollected / col.targetAmount) * 100, 100)}%` }}
                        />
                      </div>
                    )}
                  </div>
                  <ArrowRight size={18} className="ml-4 mt-1 shrink-0 text-muted-foreground" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Payments */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-foreground">Recent Payments</h2>
        <div className="rounded-xl border bg-card shadow-card overflow-hidden">
          <div className="divide-y">
            {recentPayments.map((p, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-3">
                <div className="min-w-0">
                  <p className="font-medium text-foreground text-sm truncate">{p.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{p.collection}</p>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <p className="font-semibold text-sm text-foreground">{formatCurrency(p.amount)}</p>
                  <p className="text-xs text-muted-foreground">{p.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
