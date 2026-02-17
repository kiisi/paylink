import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { ArrowLeft, Link as LinkIcon, Copy, Share2 } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Switch } from "~/components/ui/switch";
import AppLayout from "~/components/layouts/app-layout";

export default function CollectionCreate() {
  const navigate = useNavigate();
  const [created, setCreated] = useState(false);
  const [amountType, setAmountType] = useState<"fixed" | "flexible">("fixed");
  const [hasDeadline, setHasDeadline] = useState(false);
  const generatedLink = "https://paylink.app/pay/new-collection";

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    setCreated(true);
    toast.success("Collection created successfully!");
  };

  if (created) {
    return (
      <AppLayout>
        <div className="space-y-6">
          <div className="text-center pt-8">
            <div className="h-16 w-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
              <LinkIcon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-foreground">Collection Created!</h1>
            <p className="text-sm text-muted-foreground mt-1">Share the link below to start collecting.</p>
          </div>

          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 p-3 bg-muted rounded-lg mb-4">
                <p className="text-sm text-foreground flex-1 truncate font-mono">{generatedLink}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(generatedLink);
                    toast.success("Copied!");
                  }}
                  variant="outline"
                  className="flex-1"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Link
                </Button>
                <Button
                  onClick={() => {
                    const msg = encodeURIComponent(`Pay here: ${generatedLink}`);
                    window.open(`https://wa.me/?text=${msg}`, "_blank");
                  }}
                  className="flex-1 gradient-primary border-0 text-primary-foreground"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button variant="outline" onClick={() => setCreated(false)} className="flex-1">
              Create Another
            </Button>
            <Button onClick={() => navigate("/collections")} className="flex-1 gradient-primary border-0 text-primary-foreground">
              View Collections
            </Button>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout className="">
      <div className="flex items-center gap-3 pb-8 -pb-[500px]">
        <Link to="/collections" className="h-8 w-8 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition-colors">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <h1 className="text-xl font-bold text-foreground">Create Collection</h1>
      </div>
      <form onSubmit={handleCreate} className="flex flex-col gap-5">
        <div className="">
          <Label htmlFor="name" className="text-sm font-medium mb-2">Collection Name</Label>
          <Input id="name" placeholder="e.g. Class Dues — 400L" required />
        </div>
        <div className="">
          <Label htmlFor="desc" className="text-sm font-medium mb-2">Description</Label>
          <Textarea id="desc" placeholder="What is this collection for?" rows={3} />
        </div>
        <div className="">
          <Label className="text-sm font-medium mb-2">Amount Type</Label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setAmountType("fixed")}
              className={`p-3 rounded-lg border text-sm font-medium text-center transition-colors ${amountType === "fixed"
                ? "border-primary bg-primary/5 text-primary"
                : "border-border text-muted-foreground hover:bg-accent"
                }`}
            >
              Fixed Amount
            </button>
            <button
              type="button"
              onClick={() => setAmountType("flexible")}
              className={`p-3 rounded-lg border text-sm font-medium text-center transition-colors ${amountType === "flexible"
                ? "border-primary bg-primary/5 text-primary"
                : "border-border text-muted-foreground hover:bg-accent"
                }`}
            >
              Flexible Amount
            </button>
          </div>
        </div>
        {amountType === "fixed" && (
          <div className="">
            <Label htmlFor="amount" className="text-sm font-medium mb-2">Amount (₦)</Label>
            <Input id="amount" type="number" placeholder="5000" required />
          </div>
        )}
        <div className="">
          <Label htmlFor="target" className="text-sm font-medium mb-2">Target Amount (₦) — Optional</Label>
          <Input id="target" type="number" placeholder="150000" />
        </div>
        <div className="flex items-center justify-between p-3 rounded-lg border border-border">
          <div>
            <p className="text-sm font-medium text-foreground">Set Deadline</p>
            <p className="text-xs text-muted-foreground">Auto-close after date</p>
          </div>
          <Switch checked={hasDeadline} onCheckedChange={setHasDeadline} />
        </div>
        {hasDeadline && (
          <div className="">
            <Label htmlFor="deadline" className="text-sm font-medium mb-2">Deadline</Label>
            <Input id="deadline" type="date" required />
          </div>
        )}
        <Button type="submit" className="w-full gradient-primary border-0 text-primary-foreground py-3 text-sm font-semibold">
          Create Collection
        </Button>
      </form>
    </AppLayout>
  );
}
