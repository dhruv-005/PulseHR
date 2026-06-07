"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground text-center px-6">
      <h1
        className="text-6xl font-normal mb-4"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Something went wrong
      </h1>
      <p className="text-muted-foreground text-base mb-8 max-w-md">
        {error.message || "An unexpected error occurred. Please try again."}
      </p>
      <button
        onClick={reset}
        className="liquid-glass rounded-full px-8 py-3 text-sm text-foreground hover:scale-[1.03] transition-transform"
      >
        Try Again
      </button>
    </div>
  );
}
