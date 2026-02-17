import { useParams, Link } from "react-router";
import { CheckCircle2, Download, ArrowLeft } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export default function PaymentReceipt() {
  const { id } = useParams();

  const receipt = {
    id: "PL-20251220-7A3F",
    collection: "Class Dues — 400L",
    amount: "₦5,000",
    name: "Adebayo James",
    date: "December 20, 2025",
    time: "2:34 PM",
    reference: "REF-8492716350",
    status: "Successful",
  };

  return (
    <div className="min-h-screen bg-background flex items-start justify-center p-4 pt-8 sm:pt-16">
      <div className="w-full max-w-md space-y-6 animate-fade-in">
        <div className="text-center">
          <div className="h-16 w-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="h-8 w-8 text-success" />
          </div>
          <h1 className="text-xl font-bold text-foreground">Payment Successful!</h1>
          <p className="text-sm text-muted-foreground mt-1">Your contribution has been recorded.</p>
        </div>

        <Card className="shadow-card" id="receipt-card">
          <CardContent className="p-6 space-y-4">
            <div className="text-center pb-4 border-b border-border">
              <p className="text-xs text-muted-foreground">Receipt ID</p>
              <p className="text-sm font-bold font-mono text-foreground">{receipt.id}</p>
            </div>
            <div className="space-y-3">
              {[
                { label: "Collection", value: receipt.collection },
                { label: "Paid by", value: receipt.name },
                { label: "Amount", value: receipt.amount },
                { label: "Date", value: receipt.date },
                { label: "Time", value: receipt.time },
                { label: "Reference", value: receipt.reference },
                { label: "Status", value: receipt.status },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                  <span className={`text-sm font-medium ${item.label === "Status" ? "text-success" : "text-foreground"}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-border text-center">
              <p className="text-[10px] text-muted-foreground">Powered by Paylink</p>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-3">
          <Button variant="outline" className="flex-1 text-xs" onClick={() => window.print()}>
            <Download className="h-3 w-3 mr-1.5" />
            Download
          </Button>
          <Link to="/" className="flex-1">
            <Button className="w-full gradient-primary border-0 text-primary-foreground text-xs">
              Done
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
