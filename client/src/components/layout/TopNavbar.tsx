"use client";

import { Search } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import NotificationBell from "./NotificationBell";
import UserAvatarMenu from "./UserAvatarMenu";
import BreadCrumb from "./BreadCrumb";

export default function TopNavbar() {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-card/80 backdrop-blur-md border-b border-border z-20 flex items-center px-6 gap-4">
      <div className="flex-1">
        <BreadCrumb />
      </div>

      <div className="hidden md:flex items-center gap-2 bg-background/50 border border-border rounded-lg px-3 py-1.5 w-64">
        <Search className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
        <input
          type="text"
          placeholder="Search employees, goals..."
          className="bg-transparent text-xs text-foreground placeholder:text-muted-foreground outline-none flex-1"
        />
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <NotificationBell />
        <UserAvatarMenu />
      </div>
    </header>
  );
}
