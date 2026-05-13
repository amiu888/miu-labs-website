import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — SnaptabAI by Miu Labs",
  description: "Privacy Policy for SnaptabAI, the AI-powered receipt scanning app by Miu Labs.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main className="flex-1 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: May 13, 2026 &nbsp;·&nbsp; Effective: May 13, 2026
            </p>
            <p className="text-muted-foreground mt-2">
              This Privacy Policy applies to the SnaptabAI iOS application ("App") developed by
              Miu Labs ("we," "our," or "us").
            </p>
          </div>

          <div className="space-y-8 text-sm sm:text-base leading-relaxed text-foreground">

            <section>
              <h2 className="text-xl font-semibold mb-3">1. Overview</h2>
              <p className="text-muted-foreground">
                SnaptabAI is designed with privacy as a core principle. The App stores all your
                data locally on your device using Apple's SwiftData framework. We do not operate
                servers that collect, store, or process your personal data. Your financial
                information stays on your device unless you explicitly choose to use a cloud AI
                service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Information the App Processes</h2>
              <p className="text-muted-foreground mb-3">
                The App may access and process the following data on your device:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>
                  <strong className="text-foreground">Receipt Images &amp; Data:</strong> Photos
                  you take or select, and the extracted data (merchant name, amounts, line items,
                  dates). Stored entirely on your device.
                </li>
                <li>
                  <strong className="text-foreground">Bill Split Information:</strong> Names and
                  amounts associated with bill splits you create. Stored locally.
                </li>
                <li>
                  <strong className="text-foreground">Budget &amp; Spending Data:</strong> Budget
                  categories and amounts you configure. Stored locally.
                </li>
                <li>
                  <strong className="text-foreground">Contacts (optional):</strong> If you use
                  the bill splitting feature with contacts, the App may access your contacts to
                  let you select participants. Contact data is only used in-app and is not stored
                  or transmitted externally.
                </li>
                <li>
                  <strong className="text-foreground">AI Settings:</strong> Your configured AI
                  provider, model preferences, and server URLs are stored locally in your
                  device's app storage.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. AI Receipt Parsing</h2>
              <p className="text-muted-foreground mb-3">
                SnaptabAI offers multiple AI options for parsing receipt text:
              </p>
              <ul className="space-y-3 text-muted-foreground list-disc pl-5">
                <li>
                  <strong className="text-foreground">Local / Offline (recommended):</strong>{" "}
                  Parsing is performed entirely on your device using built-in OCR (Apple Vision
                  Framework) and optional local AI models (e.g., Ollama). No data leaves your
                  device.
                </li>
                <li>
                  <strong className="text-foreground">OpenAI API (optional):</strong> If you
                  configure an OpenAI API key, receipt text may be sent to OpenAI's servers for
                  parsing. This is subject to{" "}
                  <a
                    href="https://openai.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-2"
                  >
                    OpenAI's Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-foreground">Anthropic Claude API (optional):</strong>{" "}
                  If you configure a Claude API key, receipt text may be sent to Anthropic's
                  servers. This is subject to{" "}
                  <a
                    href="https://www.anthropic.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-2"
                  >
                    Anthropic's Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-foreground">Custom Endpoint (optional):</strong> You
                  may configure a custom AI server endpoint. Data sent to that server is governed
                  by that server's privacy terms.
                </li>
              </ul>
              <p className="text-muted-foreground mt-3">
                You are always in control of which AI provider is used. We strongly recommend
                using local models to keep your financial data fully private.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Camera &amp; Photo Access</h2>
              <p className="text-muted-foreground">
                The App requests access to your device camera and photo library solely to capture
                receipt images. Images are stored locally in the App's documents folder. We do
                not upload your photos to any external server.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Data Sharing</h2>
              <p className="text-muted-foreground">
                Miu Labs does not sell, rent, or share your personal data with any third parties
                for marketing or advertising purposes. The only external transmissions occur when
                you explicitly opt-in to a cloud AI provider (as described in Section 3 above).
                We do not have access to any data you store in the App.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Data Retention &amp; Deletion</h2>
              <p className="text-muted-foreground">
                All data is stored on your device and subject to your control. You can delete
                individual receipts, bill splits, or categories at any time within the App.
                Deleting the App from your device will remove all associated data. The App
                includes a database reset option in Settings for a complete data wipe.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Children's Privacy</h2>
              <p className="text-muted-foreground">
                SnaptabAI is not directed at children under 13 years of age. We do not knowingly
                collect personal information from children under 13. If you believe a child has
                provided personal data through the App, please contact us at the address below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Security</h2>
              <p className="text-muted-foreground">
                Your data is stored locally and protected by your device's built-in security
                features including device encryption and Face ID / Touch ID authentication (where
                enabled). We recommend keeping your device and iOS up to date to benefit from
                the latest security protections.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. Material changes will be
                noted in the App's update release notes and on this page. Continued use of the
                App after changes are posted constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-3 text-muted-foreground space-y-1">
                <p>
                  <strong className="text-foreground">Company:</strong> Miu Labs
                </p>
                <p>
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a
                    href="mailto:privacy@miulabs.com"
                    className="text-primary underline underline-offset-2"
                  >
                    privacy@miulabs.com
                  </a>
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
