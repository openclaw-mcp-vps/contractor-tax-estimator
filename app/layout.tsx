import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contractor Tax Estimator – Estimate Quarterly Taxes",
  description: "Calculate estimated quarterly tax payments based on income, expenses, and deductions. Built for freelancers and independent contractors."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d9866187-11bb-4a2c-8a82-a09aac2db25f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
