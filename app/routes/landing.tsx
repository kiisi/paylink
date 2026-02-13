import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Link } from "react-router";
import { Link2, ArrowRight, Shield, Zap, Users, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "~/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const features = [
  { icon: Zap, title: "Instant Setup", desc: "Create a collection link in seconds. No complicated forms." },
  { icon: Users, title: "Easy Sharing", desc: "Share one link. Everyone pays through it. No chasing people." },
  { icon: BarChart3, title: "Live Tracking", desc: "See who has paid, how much, and when — all in real time." },
  { icon: Shield, title: "Secure Payments", desc: "Every transaction is encrypted and verified end-to-end." },
];

export default function Landing() {

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-2 font-bold text-xl text-primary">
            <Link2 size={22} className="rotate-[-45deg]" />
            <span>Paylink</span>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/login">
              <Button variant="ghost" size="sm">Log in</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-[0.04]" />
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Link2 size={14} className="rotate-[-45deg]" />
              Collect payments effortlessly
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
              One link to{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                collect payments
              </span>{" "}
              from anyone
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Create a collection, share the link, and track every payment automatically. No manual follow-ups, no screenshots, no stress.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link to="/signup">
                <Button size="lg" className="gap-2 px-8 text-base">
                  Get Started Free <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/pay/demo">
                <Button variant="outline" size="lg" className="px-8 text-base">
                  See Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t bg-card/50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Everything you need to collect payments
            </h2>
            <p className="mt-3 text-muted-foreground">
              Simple tools for organizers, groups, and businesses.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl border bg-card p-6 shadow-card transition-shadow hover:shadow-elevated"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary">
                  <f.icon size={22} />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">How it works</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { step: "1", title: "Create a Collection", desc: "Set a name, description, amount, and deadline. Done in 30 seconds." },
              { step: "2", title: "Share the Link", desc: "Send one link via WhatsApp, SMS, or email. Contributors pay instantly." },
              { step: "3", title: "Track Payments", desc: "See who paid, how much, and when. Export data anytime." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full gradient-primary text-lg font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Ready to simplify your collections?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Join thousands of organizers who trust Paylink.
          </p>
          <Link to="/signup">
            <Button size="lg" className="mt-8 gap-2 px-8 text-base">
              Start Collecting <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-2 font-semibold text-foreground">
            <Link2 size={16} className="rotate-[-45deg] text-primary" />
            Paylink
          </div>
          <p className="mt-2">© 2026 Paylink. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
