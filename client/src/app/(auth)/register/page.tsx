"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    router.push("/login");
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <Link href="/">
          <span
            className="text-4xl font-normal text-foreground"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            PulseHR<sup className="text-xs">®</sup>
          </span>
        </Link>
        <p className="text-sm text-muted-foreground mt-2">
          Request access to your workspace
        </p>
      </div>

      <div className="glass-card rounded-2xl p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-foreground">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                required
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-foreground/30 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-foreground">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                required
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-foreground/30 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-foreground">
              Work Email
            </label>
            <input
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full bg-background/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-foreground/30 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-foreground">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Acme Corporation"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              required
              className="w-full bg-background/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-foreground/30 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full liquid-glass rounded-xl py-3 text-sm text-foreground hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {loading ? "Submitting..." : "Request Access"}
          </button>
        </form>
      </div>

      <p className="text-center text-xs text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-foreground hover:underline underline-offset-4"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}
