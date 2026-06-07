export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      {children}
    </main>
  );
}
