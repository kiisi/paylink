import { useLocation, Link } from "react-router";
import { CheckCircle2, Download, ArrowLeft, Link2 } from "lucide-react";
import { formatCurrency } from "~/data/mock-data";
import { Button } from "~/components/ui/button";

const PaymentSuccess = () => {
  const location = useLocation();
  const state = location.state as { amount: number; collection: string; reference: string; date: string } | null;

  const amount = state?.amount || 5000;
  const collection = state?.collection || "Collection";
  const reference = state?.reference || "PAY-DEMO123";
  const date = state?.date ? new Date(state.date) : new Date();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md text-center">
        <div className="mb-6 inline-flex items-center gap-2 text-xl font-bold text-primary">
          <Link2 size={22} className="rotate-[-45deg]" />
          Paylink
        </div>

        <div className="rounded-xl border bg-card p-8 shadow-card" id="receipt">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
            <CheckCircle2 size={36} className="text-success" />
          </div>
          <h1 className="mb-1 text-xl font-bold text-foreground">Payment Successful!</h1>
          <p className="mb-6 text-sm text-muted-foreground">Your contribution has been received</p>

          <div className="space-y-3 rounded-lg bg-muted/50 p-4 text-left">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Collection</span>
              <span className="text-sm font-medium text-foreground">{collection}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Amount Paid</span>
              <span className="text-sm font-bold text-foreground">{formatCurrency(amount)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Reference</span>
              <span className="text-sm font-mono text-foreground">{reference}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Date & Time</span>
              <span className="text-sm text-foreground">
                {date.toLocaleDateString()} {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
          </div>

          <Button
            variant="outline"
            className="mt-6 w-full gap-2"
            onClick={() => window.print()}
          >
            <Download size={16} /> Download Receipt
          </Button>
        </div>

        <Link to="/" className="mt-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft size={14} /> Back to Paylink
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
