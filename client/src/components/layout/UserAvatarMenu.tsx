"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Settings, LogOut, ChevronDown } from "lucide-react";

export default function UserAvatarMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("pulseHR_token");
    router.push("/login");
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 hover:bg-accent rounded-lg px-2 py-1.5 transition-colors"
      >
        <div className="w-7 h-7 rounded-full bg-foreground/10 flex items-center justify-center text-xs font-medium text-foreground">
          SA
        </div>
        <div className="hidden md:block text-left">
          <p className="text-xs font-medium text-foreground leading-none">
            Super Admin
          </p>
        </div>
        <ChevronDown className="w-3 h-3 text-muted-foreground" />
      </button>

      {open && (
        <div className="absolute right-0 top-12 w-56 glass-card rounded-2xl border border-border shadow-xl z-50 py-2">
          <p className="text-xs text-muted-foreground px-4 py-2">
            admin@pulseHR.com
          </p>
          <div className="border-t border-border my-1" />
          <button
            onClick={() => {
              router.push("/settings");
              setOpen(false);
            }}
            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
          >
            <User className="w-4 h-4" />
            Profile
          </button>
          <button
            onClick={() => {
              router.push("/settings");
              setOpen(false);
            }}
            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
          >
            <Settings className="w-4 h-4" />
            Settings
          </button>
          <div className="border-t border-border my-1" />
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-accent transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
