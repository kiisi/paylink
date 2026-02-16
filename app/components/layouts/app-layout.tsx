import { Link, useLocation } from "react-router";
import { LayoutDashboard, PlusCircle, Settings, LogOut, Link2, X, Menu, BellIcon } from "lucide-react";
import { useState } from "react";
import Logo from "../logo";
import { ChevronDownIcon, MenuIcon, NotificationIcon } from "../svgs";


const navItems = [
  { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
  { label: "Create Collection", to: "/create", icon: PlusCircle },
  { label: "Settings", to: "/settings", icon: Settings },
];

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Logo />
          <nav className="items-center gap-2 flex">
            <button className="cursor-pointer h-[50px] w-[50px] rounded-full bg-[#f4f5f6] grid place-items-center">
              <NotificationIcon />
            </button>
            <button className="cursor-pointer p-[10px] rounded-[32px] bg-[#f4f5f6] flex items-center text-[#141517] gap-2">
              <figure className="rounded-full h-[30px] w-[30px] shrink-0">
                <img
                  src="/avatar.jpg"
                  alt="Profile"
                  className="rounded-full h-[30px] w-[30px] object-cover"
                />
              </figure>
              <div
                className="text-[14px] max-w-[90px] truncate text-left hidden md:block">
                Kiisifelix
              </div>
              <ChevronDownIcon className="hidden md:block" />
              <MenuIcon
                // onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden"
              />
            </button>
          </nav>

        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="border-t bg-card px-4 pb-4 pt-2 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors ${location.pathname === item.to
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent"
                  }`}
              >
                <item.icon size={18} />
                {item.label}
              </Link>
            ))}
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
            >
              <LogOut size={18} />
              Logout
            </Link>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-7xl px-5 py-6">{children}</main>
    </div>
  );
};

export default AppLayout;
