import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground text-center px-6">
      <h1
        className="text-8xl font-normal mb-4"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        404
      </h1>
      <p className="text-muted-foreground text-lg mb-8 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="liquid-glass rounded-full px-8 py-3 text-sm text-foreground hover:scale-[1.03] transition-transform"
      >
        Return Home
      </Link>
    </div>
  );
}
