export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          For Freelancers &amp; Dev Agencies
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Billable Hours from{' '}
          <span className="text-[#58a6ff]">GitHub Issues</span>{' '}Automatically
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your GitHub repos, let us monitor issue activity and commit timestamps, then generate polished PDF invoices for your clients — zero manual timesheets.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Tracking — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to connect. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '⚡', title: 'Auto Time Detection', desc: 'Commit timestamps and issue events are used to calculate time spent per issue automatically.' },
            { icon: '📄', title: 'PDF Invoices', desc: 'Generate branded PDF invoices per client with itemised issue breakdowns in one click.' },
            { icon: '🔗', title: 'GitHub OAuth', desc: 'Connect in seconds via GitHub OAuth. Webhooks keep your data in sync in real time.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 text-left mb-8">
            {[
              'Unlimited GitHub repos',
              'Automatic time tracking via webhooks',
              'Unlimited PDF invoice generation',
              'Per-client billing dashboards',
              'Email invoice delivery',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does automatic time tracking work?',
              a: 'We listen to GitHub webhooks for issue events and commit activity. By analysing timestamps across commits, comments, and status changes, we calculate realistic time estimates per issue without any manual input.',
            },
            {
              q: 'Can I assign issues to different clients?',
              a: 'Yes. You can map repositories or labels to specific clients. All tracked time is grouped per client so invoicing is clean and accurate.',
            },
            {
              q: 'What happens if I cancel my subscription?',
              a: 'You keep access until the end of your billing period. Your data is retained for 30 days after cancellation so you can export invoices before leaving.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} GitHub Issue Billing Tracker. All rights reserved.
      </footer>
    </main>
  )
}
