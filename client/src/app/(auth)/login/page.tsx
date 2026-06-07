"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login
    await new Promise((r) => setTimeout(r, 1500));
    localStorage.setItem("pulseHR_token", "demo_token");
    router.push("/dashboard");
  };

  return (
    <div className="space-y-8">
      {/* Logo */}
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
          Sign in to your workspace
        </p>
      </div>

      {/* Form */}
      <div className="glass-card rounded-2xl p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-foreground">
              Email Address
            </label>
            <input
              type="email"
              placeholder="admin@company.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full bg-background/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-foreground/30 transition-colors"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-foreground">
                Password
              </label>
              <button
                type="button"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
                className="w-full bg-background/50 border border-border rounded-lg px-4 py-2.5 pr-10 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-foreground/30 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full liquid-glass rounded-xl py-3 text-sm text-foreground hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-foreground/5 rounded-xl">
          <p className="text-xs text-muted-foreground mb-2 font-medium">
            Demo Credentials:
          </p>
          <p className="text-xs text-muted-foreground">
            Email: admin@pulseHR.com
          </p>
          <p className="text-xs text-muted-foreground">Password: demo123</p>
        </div>
      </div>

      <p className="text-center text-xs text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="text-foreground hover:underline underline-offset-4"
        >
          Request Access
        </Link>
      </p>
    </div>
  );
}
