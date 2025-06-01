import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4">
        Rami.ai
      </h1>
      <p className="text-lg sm:text-2xl mb-8 text-muted-foreground font-[var(--font-geist-mono)]">
        Read, Analyze, Memorize, Interpret
      </p>
      <Link href="/talk">
        <Button size="lg" className="rounded-full shadow-lg px-8">
          Get Started
        </Button>
      </Link>
    </main>
  );
}
