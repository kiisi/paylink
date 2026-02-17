import { Search, Users as UsersIcon } from "lucide-react";
import { useState } from "react";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";

const contributors = [
  { name: "Adebayo James", email: "adebayo@email.com", totalPaid: "₦25,000", collections: 5, lastPayment: "Dec 20, 2025" },
  { name: "Fatima Bello", email: "fatima@email.com", totalPaid: "₦18,000", collections: 3, lastPayment: "Dec 19, 2025" },
  { name: "Chidi Okafor", email: "chidi@email.com", totalPaid: "₦42,000", collections: 7, lastPayment: "Dec 18, 2025" },
  { name: "Ngozi Eze", email: "ngozi@email.com", totalPaid: "₦15,000", collections: 3, lastPayment: "Dec 17, 2025" },
  { name: "Samuel Tunde", email: "samuel@email.com", totalPaid: "₦8,500", collections: 2, lastPayment: "Dec 16, 2025" },
  { name: "Aisha Mohammed", email: "aisha@email.com", totalPaid: "₦32,000", collections: 6, lastPayment: "Dec 16, 2025" },
  { name: "Emeka Nwosu", email: "emeka@email.com", totalPaid: "₦10,000", collections: 2, lastPayment: "Dec 15, 2025" },
  { name: "Blessing Adekunle", email: "blessing@email.com", totalPaid: "₦20,000", collections: 4, lastPayment: "Dec 14, 2025" },
];

export default function Contributors() {
  const [search, setSearch] = useState("");

  const filtered = contributors.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Contributors</h1>
          <p className="text-sm text-muted-foreground">Everyone who has contributed to your collections.</p>
        </div>
        <Badge variant="secondary" className="self-start text-xs">
          {contributors.length} total
        </Badge>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search by name or email..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
      </div>

      <div className="space-y-2">
        {filtered.map((c, i) => (
          <Card key={i} className="shadow-card border-border hover:shadow-card-hover transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary shrink-0">
                  {c.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground">{c.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{c.email}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-bold text-foreground">{c.totalPaid}</p>
                  <p className="text-[10px] text-muted-foreground">{c.collections} collections</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-border">
                <span className="text-[10px] text-muted-foreground">Last payment: {c.lastPayment}</span>
              </div>
            </CardContent>
          </Card>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <UsersIcon className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">No contributors found</p>
          </div>
        )}
      </div>
    </div>
  );
}
