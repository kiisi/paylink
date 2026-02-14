import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  subtitle?: string;
  variant?: "default" | "primary";
}

const StatCard = ({ title, value, icon, subtitle, variant = "default" }: StatCardProps) => {
  return (
    <div
      className={`rounded-xl p-5 shadow-card transition-shadow hover:shadow-elevated ${
        variant === "primary"
          ? "gradient-primary text-primary-foreground"
          : "bg-card text-card-foreground"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className={`text-sm font-medium ${variant === "primary" ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
            {title}
          </p>
          <p className="text-2xl font-bold">{value}</p>
          {subtitle && (
            <p className={`text-xs ${variant === "primary" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
              {subtitle}
            </p>
          )}
        </div>
        <div className={`rounded-lg p-2 ${variant === "primary" ? "bg-primary-foreground/20" : "bg-primary/10"}`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
