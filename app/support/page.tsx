import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LifeBuoy, Mail, MessageCircle, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Support — SnaptabAI by Miu Labs",
  description: "Get help with SnaptabAI, the AI-powered receipt scanning and bill splitting app.",
};

const faqs = [
  {
    q: "How does receipt scanning work?",
    a: "Open the app and tap the '+' button to add a receipt. You can take a photo with your camera or select one from your photo library. SnaptabAI uses OCR (Optical Character Recognition) to read the text from the image, then an AI model parses it into structured data — merchant, date, total, tax, and individual line items.",
  },
  {
    q: "Does SnaptabAI require an internet connection?",
    a: "For basic scanning, no. The OCR runs on-device using Apple's Vision Framework. If you choose to use a local AI model (Ollama) for parsing, that also runs offline. An internet connection is only needed if you configure a cloud AI provider like OpenAI or Claude.",
  },
  {
    q: "How do I set up the AI provider?",
    a: "Go to the Settings tab in the app. Under 'AI Configuration', you can choose your preferred AI provider (Local/Offline, OpenAI, Claude, or a custom server). Enter your API key if required, select a model, and tap 'Test Connection' to verify it works.",
  },
  {
    q: "How does bill splitting work?",
    a: "After scanning a receipt, navigate to the Bill Splits tab and create a new split linked to that receipt. You can add participants, assign specific line items to each person, and track who has paid. The app calculates each person's share automatically.",
  },
  {
    q: "Can I edit a scanned receipt?",
    a: "Yes. Tap any receipt in the Receipts tab to open its detail view. All fields — merchant name, date, amounts, category, and individual line items — are editable. You can also re-scan a receipt to update it with a new photo.",
  },
  {
    q: "Where is my data stored?",
    a: "All your data is stored locally on your device using Apple's SwiftData framework. Nothing is synced to our servers. Your receipts, splits, and budgets are only on your iPhone. You can delete all data at any time from Settings → Reset Database.",
  },
  {
    q: "How do I set up budgets?",
    a: "Go to the Budgets tab and tap '+' to create a budget category. Set a name, category type, and monthly budget amount. The app will track your spending against each budget and show you a breakdown in the dashboard.",
  },
  {
    q: "The app isn't recognizing items correctly. What can I do?",
    a: "Try taking a clearer photo with good lighting and the receipt flat on a surface. If items are still incorrect, you can edit them manually in the receipt detail view. Switching to a more capable AI model in Settings may also improve accuracy.",
  },
  {
    q: "How do I connect a local Ollama server?",
    a: "In Settings → AI Configuration, select 'Custom Server' or the Ollama option. Enter your server's URL (e.g., http://localhost:11434). The app will fetch available models automatically. For remote servers over Tailscale or LAN, enter the appropriate IP address.",
  },
  {
    q: "How do I delete my data?",
    a: "To delete individual items, swipe left on a receipt, split, or budget in its list view. To delete everything, go to Settings and tap 'Reset Database'. Uninstalling the app also removes all data from your device.",
  },
];

export default function SupportPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main className="flex-1 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <LifeBuoy className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              Support
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Need help with SnaptabAI? Browse common questions below or reach out directly.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
            <Card className="border-border/60">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm mb-1">Email Support</p>
                  <a
                    href="mailto:support@miulabs.com"
                    className="text-sm text-primary underline underline-offset-2"
                  >
                    support@miulabs.com
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">
                    We typically respond within 1–2 business days.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm mb-1">Feedback &amp; Suggestions</p>
                  <a
                    href="mailto:feedback@miulabs.com"
                    className="text-sm text-primary underline underline-offset-2"
                  >
                    feedback@miulabs.com
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">
                    Feature requests and general feedback welcome.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Badge variant="secondary" className="text-primary">
                FAQ
              </Badge>
              <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-lg border border-border/60 bg-card overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-3 p-4 cursor-pointer select-none list-none font-medium text-sm hover:bg-muted/40 transition-colors">
                    <span>{faq.q}</span>
                    <ChevronDown className="w-4 h-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-4 pb-4 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-border/40">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-12 p-5 rounded-lg bg-muted/40 border border-border/40 text-center">
            <p className="text-sm text-muted-foreground">
              Can't find what you're looking for?{" "}
              <a
                href="mailto:support@miulabs.com"
                className="text-primary font-medium underline underline-offset-2"
              >
                Email us
              </a>{" "}
              and we'll be happy to help.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
