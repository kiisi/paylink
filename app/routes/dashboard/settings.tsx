import { useState } from "react";
import { Save, Download, LogOut, Bell, LucideLogOut } from "lucide-react";
import { useNavigate } from "react-router";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import AppLayout from "~/components/layouts/app-layout";
import { Separator } from "~/components/ui/separator";
import { useToast } from "~/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Switch } from "~/components/ui/switch";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [emailReceipts, setEmailReceipts] = useState(true);

  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      toast({ title: "Settings saved", description: "Your profile has been updated." });
    }, 600);
  };

  return (
    <AppLayout className="bg-[#f4f5f6]">
      <h1 className="mb-1 text-2xl font-bold text-foreground">Settings</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        Configure notifications, payment alerts, data exports, and account security
      </p>

      <div className="space-y-8 bg-white p-5 lg:p-6 rounded-[12px] mb-[24px]">
        {/* Profile */}
        <section>
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            Notifications
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Payment Alerts</p>
                <p className="text-xs text-muted-foreground">Get notified for new payments</p>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Email Receipts</p>
                <p className="text-xs text-muted-foreground">Send receipts to contributors</p>
              </div>
              <Switch checked={emailReceipts} onCheckedChange={setEmailReceipts} />
            </div>
          </div>
        </section>
      </div>

      <div className="space-y-8 bg-white p-5 lg:p-6 rounded-[12px] mb-[24px]">
        {/* Payout */}
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            Data & Export
          </h2>
          
        {/* Export & Logout */}
        <section className="space-y-3">
          <Button variant="outline" className="w-full gap-2">
            <Download size={16} /> Export Payment History
          </Button>
          {/* <Button
            variant="outline"
            className="w-full gap-2 text-destructive hover:bg-destructive/10 hover:text-destructive"
            onClick={() => navigate("/")}
          >
            <LogOut size={16} /> Logout
          </Button> */}
        </section>
      </div>

      <div className="space-y-8 bg-white p-5 lg:p-6 rounded-[12px]">
        {/* Payout */}
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            Security
          </h2>
          
        {/* Export & Logout */}
        <section className="space-y-3">
          <Button variant="outline" className="w-full gap-2">
            Change Password
          </Button>
          <Button
            variant="outline"
            className="w-full gap-2 text-destructive hover:bg-destructive/10 hover:text-destructive"
            onClick={() => navigate("/")}
          >
            <LucideLogOut size={16} /> Logout
          </Button>
        </section>
      </div>
    </AppLayout>
  );
};

export default Settings;
