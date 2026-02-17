import { useParams, Link } from "react-router";
import {
  ArrowLeft,
  Copy,
  Share2,
  Pause,
  XCircle,
  Users,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";

const collectionData = {
  id: "1",
  name: "Class Dues — 400L",
  description: "Final year class dues collection for graduation activities, excursion, and dinner.",
  amountType: "fixed",
  amount: "₦5,000",
  collected: "₦85,000",
  target: "₦150,000",
  contributors: 17,
  totalExpected: 30,
  status: "active",
  deadline: "Jan 31, 2026",
  created: "Dec 15, 2025",
  link: "https://paylink.app/pay/cls-400l",
};

const contributorsList = [
  { name: "Adebayo James", amount: "₦5,000", date: "Dec 20, 2025", status: "paid" },
  { name: "Fatima Bello", amount: "₦5,000", date: "Dec 19, 2025", status: "paid" },
  { name: "Chidi Okafor", amount: "₦5,000", date: "Dec 18, 2025", status: "paid" },
  { name: "Ngozi Eze", amount: "₦5,000", date: "Dec 17, 2025", status: "paid" },
  { name: "Samuel Tunde", amount: "₦5,000", date: "Dec 16, 2025", status: "paid" },
  { name: "Aisha Mohammed", amount: "₦5,000", date: "Dec 16, 2025", status: "paid" },
  { name: "Emeka Nwosu", amount: "₦5,000", date: "Dec 15, 2025", status: "paid" },
];

export default function CollectionDetails() {
  const { id } = useParams();
  const progress = 57;

  const copyLink = () => {
    navigator.clipboard.writeText(collectionData.link);
    toast.success("Link copied to clipboard!");
  };

  const shareWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hey! Please contribute to "${collectionData.name}". Pay here: ${collectionData.link}`
    );
    window.open(`https://wa.me/?text=${msg}`, "_blank");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <Link to="/collections" className="h-8 w-8 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition-colors">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div className="flex-1">
          <h1 className="text-xl font-bold text-foreground">{collectionData.name}</h1>
          <p className="text-xs text-muted-foreground">Created {collectionData.created}</p>
        </div>
        <Badge className="bg-success text-success-foreground text-xs">{collectionData.status}</Badge>
      </div>

      <p className="text-sm text-muted-foreground">{collectionData.description}</p>

      {/* Stats Row */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="shadow-card"><CardContent className="p-4 text-center">
          <p className="text-xl font-bold text-foreground">{collectionData.collected}</p>
          <p className="text-xs text-muted-foreground">Collected</p>
        </CardContent></Card>
        <Card className="shadow-card"><CardContent className="p-4 text-center">
          <p className="text-xl font-bold text-foreground">{collectionData.target}</p>
          <p className="text-xs text-muted-foreground">Target</p>
        </CardContent></Card>
        <Card className="shadow-card"><CardContent className="p-4 text-center">
          <p className="text-xl font-bold text-foreground">{collectionData.contributors}/{collectionData.totalExpected}</p>
          <p className="text-xs text-muted-foreground">Contributors</p>
        </CardContent></Card>
        <Card className="shadow-card"><CardContent className="p-4 text-center">
          <p className="text-xl font-bold text-foreground">{collectionData.amount}</p>
          <p className="text-xs text-muted-foreground">Per Person</p>
        </CardContent></Card>
      </div>

      {/* Progress */}
      <div>
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="text-muted-foreground">Progress</span>
          <span className="font-semibold text-primary">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full gradient-primary rounded-full" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-[10px] text-muted-foreground mt-1">Deadline: {collectionData.deadline}</p>
      </div>

      {/* Share */}
      <Card className="shadow-card">
        <CardContent className="p-4">
          <p className="text-xs font-medium text-muted-foreground mb-2">Share Collection Link</p>
          <div className="flex items-center gap-2 p-2.5 bg-muted rounded-lg mb-3">
            <p className="text-xs text-foreground flex-1 truncate font-mono">{collectionData.link}</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={copyLink} variant="outline" size="sm" className="flex-1 text-xs">
              <Copy className="h-3 w-3 mr-1.5" />
              Copy Link
            </Button>
            <Button onClick={shareWhatsApp} size="sm" className="flex-1 text-xs gradient-primary border-0 text-primary-foreground">
              <Share2 className="h-3 w-3 mr-1.5" />
              WhatsApp
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1 text-xs">
          <Pause className="h-3 w-3 mr-1.5" />
          Pause
        </Button>
        <Button variant="outline" size="sm" className="flex-1 text-xs text-destructive border-destructive/30 hover:bg-destructive/5">
          <XCircle className="h-3 w-3 mr-1.5" />
          Close
        </Button>
      </div>

      {/* Contributors */}
      <Card className="shadow-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            Contributors
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            {contributorsList.map((c, i) => (
              <div key={i} className="flex items-center justify-between py-2.5 border-b border-border last:border-0">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                    {c.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{c.name}</p>
                    <p className="text-[10px] text-muted-foreground">{c.date}</p>
                  </div>
                </div>
                <div className="text-right flex items-center gap-2">
                  <span className="text-sm font-semibold text-foreground">{c.amount}</span>
                  <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
