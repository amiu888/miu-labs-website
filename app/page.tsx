import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Users,
  PiggyBank,
  Sparkles,
  Shield,
  Camera,
  ArrowRight,
  Receipt,
  Cpu,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Instant Receipt Scanning",
    description:
      "Point your camera at any receipt. OCR captures every line item, tax, and tip automatically.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Parsing",
    description:
      "Advanced AI extracts merchant, date, amounts, and all line items — even from messy or faded receipts.",
  },
  {
    icon: Users,
    title: "Smart Bill Splitting",
    description:
      "Split any bill fairly with friends. Assign items to people, track who paid, and log payments.",
  },
  {
    icon: PiggyBank,
    title: "Budget Tracking",
    description:
      "Set monthly budgets by category. See exactly where your money goes with clear spending breakdowns.",
  },
  {
    icon: BarChart3,
    title: "Spending Analytics",
    description:
      "Visual dashboard with category breakdowns and period comparisons to understand your spending.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Your data stays on your device. Use a local AI model for fully private processing — no cloud required.",
  },
];

const steps = [
  {
    icon: Camera,
    title: "Snap a Photo",
    description:
      "Take a photo of your receipt or pick one from your camera roll. SnaptabAI handles the rest.",
  },
  {
    icon: Cpu,
    title: "AI Extracts Everything",
    description:
      "AI reads the receipt and pulls out every detail: merchant, date, total, tax, and each line item.",
  },
  {
    icon: Users,
    title: "Split & Track",
    description:
      "Assign items to friends, split the total, and track your expenses — all in one place.",
  },
];

const AppleLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.51_0.22_264/0.12),transparent)]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <Badge variant="secondary" className="mb-6 text-primary">
            <Sparkles className="w-3 h-3 mr-1.5" />
            AI-Powered Receipt Management
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6 max-w-3xl mx-auto">
            Snap, Split &amp;{" "}
            <span className="text-primary">Track Expenses</span> Effortlessly
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            SnaptabAI turns any receipt into structured data in seconds. Split bills with
            friends, set budgets, and stay on top of your spending — all on your iPhone.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "gap-2 h-12 px-6 text-base")}
            >
              <AppleLogo />
              Download on App Store
            </a>

            <a
              href="#features"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2 h-12 px-6 text-base")}
            >
              See Features
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* App screenshots */}
          <div className="mt-16 flex items-end justify-center gap-4 px-4">
            {/* Left phone — slightly smaller and lower */}
            <div className="hidden sm:block relative shrink-0 translate-y-6 opacity-80">
              <div className="w-[180px] rounded-[28px] border-[6px] border-foreground/10 overflow-hidden shadow-xl shadow-primary/10 bg-white">
                <Image
                  src="/screenshots/receipts.png"
                  alt="Receipts screen"
                  width={393}
                  height={852}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Center phone — main, full size */}
            <div className="relative shrink-0 z-10">
              <div className="w-[220px] sm:w-[240px] rounded-[34px] border-[7px] border-foreground/10 overflow-hidden shadow-2xl shadow-primary/20 bg-white">
                <Image
                  src="/screenshots/dashboard.png"
                  alt="Dashboard screen"
                  width={393}
                  height={852}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute -inset-4 -z-10 rounded-[44px] bg-primary/8 blur-2xl" />
            </div>

            {/* Right phone — Split Calculator */}
            <div className="hidden sm:block relative shrink-0 translate-y-6 opacity-80">
              <div className="w-[180px] rounded-[28px] border-[6px] border-foreground/10 overflow-hidden shadow-xl shadow-primary/10 bg-white">
                <Image
                  src="/screenshots/add_receipt.png"
                  alt="Add Receipt screen"
                  width={393}
                  height={852}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 sm:py-28 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4 text-primary">
              <Receipt className="w-3 h-3 mr-1.5" />
              Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Everything you need to manage shared expenses
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              From scanning to splitting, SnaptabAI handles every step.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="border-border/60 hover:border-primary/30 transition-colors hover:shadow-sm"
              >
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4 text-primary">
              <Sparkles className="w-3 h-3 mr-1.5" />
              How It Works
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Three steps to a split bill
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              No manual data entry. No spreadsheets. Just snap, review, and split.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2.5rem)] right-0 h-px bg-border" />
                )}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-5 relative">
                  <step.icon className="w-7 h-7 text-primary" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy callout */}
      <section className="py-16 bg-primary/5 border-y border-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            Your data stays on your device
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-6">
            SnaptabAI stores everything locally using SwiftData. You can even run a fully
            offline AI model for parsing — your financial data never has to leave your phone.
          </p>
          <a
            href="/privacy"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Read our Privacy Policy
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Ready to stop manually splitting bills?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Download SnaptabAI for free and scan your first receipt in under a minute.
          </p>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "gap-2 h-12 px-8 text-base")}
          >
            <AppleLogo />
            Download on App Store
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
