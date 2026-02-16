import { Link, useLocation } from "react-router";
import { LayoutDashboard, PlusCircle, Settings, LogOut, Link2, X, Menu, BellIcon, Layers, Users } from "lucide-react";
import { useState } from "react";
import Logo from "../logo";
import { ChevronDownIcon, DashboardIcon, Layers01Icon, LayersIcon, LogoutIcon, MenuIcon, NotificationIcon, SettingsIcon, UserIcon, UserMultipleIcon } from "../svgs";
import { AnimatePresence, motion } from "framer-motion";


const navItems = [
  { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
  { label: "Create Collection", to: "/create", icon: PlusCircle },
  { label: "Settings", to: "/settings", icon: Settings },
];

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [open, setMobileOpen] = useState(false);

  const onClose = () => setMobileOpen(false);

  return (
    <div className="h-screen overflow-y-auto bg-background overflow-x-hidden">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Logo />
          <nav className="items-center gap-2 flex">
            <button className="cursor-pointer h-[50px] w-[50px] rounded-full bg-[#f4f5f6] grid place-items-center">
              <NotificationIcon />
            </button>
            <button
              onClick={() => setMobileOpen(previous => !previous)}
              className="cursor-pointer p-[10px] rounded-[32px] bg-[#f4f5f6] flex items-center text-[#141517] gap-2"
            >
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
                className="md:hidden"
              />
            </button>
          </nav>

        </div>

        {/* Mobile nav */}
        <div
          onClick={onClose}
          className={`fixed w-full min-h-screen inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 touch-none z-40 ${open ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        />

        {/* Sidebar Panel */}
        <div
          className={`fixed top-0 right-0 h-screen w-[280px] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-[24px]">
            <div />
            <button
              onClick={onClose}
              className="h-[44px] w-[44px] rounded-full border border-[#e2e2e2] transition grid place-items-center"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-2">

            {[
              { label: "Dashboard", icon: <DashboardIcon /> },
              { label: "Collections", icon: <Layers01Icon /> },
              { label: "Contributors", icon: <UserMultipleIcon /> },
              { label: "Profile", icon: <UserIcon /> },
              { label: "Settings", icon: <SettingsIcon /> },
              { label: "Logout", icon: <LogoutIcon /> },
            ].map((item, i) => (
              <button
                key={i}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}

          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-6">{children}</main>
    </div>
  );
};

export default AppLayout;
