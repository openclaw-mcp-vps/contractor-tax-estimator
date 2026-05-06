export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelancers &amp; Contractors
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Estimate Your Quarterly Taxes — <span className="text-[#58a6ff]">Instantly</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Stop guessing what you owe. Enter your income, expenses, and deductions to get accurate quarterly tax estimates in seconds.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $10/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No hidden fees.</p>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl p-8 bg-[#161b22] max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$10</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-[#c9d1d9] text-sm">
            <li className="flex items-start gap-2">
              <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
              Unlimited quarterly tax estimates
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
              Income, expense &amp; deduction tracking
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
              Self-employment tax calculation
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
              Federal &amp; state tax breakdowns
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
              Exportable tax summary reports
            </li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="text-white font-semibold mb-2">How accurate are the tax estimates?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">
              Our estimates are based on current IRS tax brackets and self-employment tax rates. They are designed to be a reliable guide for quarterly payments, though we always recommend consulting a CPA for your final filing.
            </p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="text-white font-semibold mb-2">Which deductions are supported?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">
              We support common contractor deductions including home office, equipment, software subscriptions, health insurance premiums, retirement contributions, and the 50% self-employment tax deduction.
            </p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="text-white font-semibold mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">
              Yes. You can cancel at any time from your billing portal with no questions asked. You will retain access until the end of your current billing period.
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Contractor Tax Estimator. Not financial or legal advice.
      </footer>
    </main>
  );
}
