import Link from "next/link";
import { ScanLine } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <Link href="/" className="flex items-center gap-2 font-semibold mb-2">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                <ScanLine className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <span>SnaptabAI</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              by{" "}
              <span className="font-medium text-foreground">Miu Labs</span>
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
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
              Privacy Policy
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {year} Miu Labs. All rights reserved.</p>
          <p>
            Contact:{" "}
            <a
              href="mailto:support@miulabs.com"
              className="hover:text-foreground transition-colors"
            >
              support@miulabs.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
