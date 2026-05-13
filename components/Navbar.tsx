"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScanLine } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <ScanLine className="w-4 h-4 text-primary-foreground" />
          </div>
          <span>SnaptabAI</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/#features" className="hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="/#how-it-works" className="hover:text-foreground transition-colors">
            How It Works
          </Link>
          <Link href="/support" className="hover:text-foreground transition-colors">
            Support
          </Link>
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
        </nav>

        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: "sm" }))}
        >
          Download
        </a>
      </div>
    </header>
  );
}
