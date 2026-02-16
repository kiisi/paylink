import { useState } from "react";
import { Save, Download, LogOut } from "lucide-react";
import { useNavigate } from "react-router";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import AppLayout from "~/components/layouts/app-layout";
import { Separator } from "~/components/ui/separator";
import { useToast } from "~/hooks/use-toast";

const Settings = () => {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
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
      <p className="mb-6 text-sm text-muted-foreground">Manage your profile and payout details</p>

      <div className="space-y-8 bg-white p-5 lg:p-6 rounded-[12px] mb-[24px]">
        {/* Profile */}
        <section>
          <h2 className="mb-4 text-lg font-semibold text-foreground">Profile</h2>
          <div className="space-y-5">
            <div>
              <Label htmlFor="orgName">First Name</Label>
              <Input id="orgName" value={name} onChange={(e) => setName(e.target.value)} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="orgLastName">Last Name</Label>
              <Input
                id="orgLastName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="bizName">Business / Group Name</Label>
              <Input id="bizName" value={businessName} onChange={(e) => setBusinessName(e.target.value)} className="mt-1" />
            </div>
            <Button onClick={handleSave} className="w-full rounded-[24px] gap-2" disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </section>
      </div>

      <div className="space-y-8 bg-white p-5 lg:p-6 rounded-[12px]">
        {/* Payout */}
        <section>
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            Banking Information
          </h2>
          <div className="space-y-6">
            <div>
              <Label htmlFor="account">Account Number</Label>
              <Input
                id="account"
                placeholder="012345678"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="bank">Select Bank</Label>
              <Input
                id="bank"
                placeholder="Select Bank"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="bank">Account Name</Label>
              <Input
                id="bank"
                placeholder="Account Name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                className="mt-1"
              />
            </div>
          </div>
        </section>

        <Button onClick={handleSave} className="w-full gap-2 rounded-[24px]" disabled={saving}>
          {saving ? "Saving..." : "Save Changes"}
        </Button>

        <Separator />

        {/* Export & Logout */}
        <section className="space-y-3">
          <Button variant="outline" className="w-full gap-2">
            <Download size={16} /> Export Payment History
          </Button>
          <Button
            variant="outline"
            className="w-full gap-2 text-destructive hover:bg-destructive/10 hover:text-destructive"
            onClick={() => navigate("/")}
          >
            <LogOut size={16} /> Logout
          </Button>
        </section>
      </div>
    </AppLayout>
  );
};

export default Settings;
