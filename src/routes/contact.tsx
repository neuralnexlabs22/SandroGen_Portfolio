import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SandroGen Tech" },
      { name: "description", content: "Get in touch with SandroGen Tech. Email rohithlakshman999@gmail.com or WhatsApp +91 73489 75878." },
      { property: "og:title", content: "Contact SandroGen Tech" },
      { property: "og:description", content: "Let's build something exceptional together." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="container-x py-24">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <span className="eyebrow mb-6">// Contact</span>
          <h1 className="font-display text-5xl md:text-7xl font-semibold mt-6 leading-[1.05]">
            Let's build <span className="text-[#D4FF00]">something exceptional.</span>
          </h1>
          <p className="mt-8 text-lg text-white/60 max-w-xl leading-relaxed">
            Tell us about your project — startup idea, e-commerce launch, internal tool or a full
            rebuild. We respond within 24 hours.
          </p>

          <div className="mt-12 space-y-4">
            <a href="mailto:rohithlakshman999@gmail.com"
              className="glass-card glass-card-hover p-6 flex items-center justify-between group">
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-1">Email</div>
                <div className="font-display text-xl md:text-2xl">rohithlakshman999@gmail.com</div>
              </div>
              <span className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-[#D4FF00] group-hover:text-black transition">→</span>
            </a>
            <a href="https://wa.me/917348975878"
              className="glass-card glass-card-hover p-6 flex items-center justify-between group">
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-1">WhatsApp</div>
                <div className="font-display text-xl md:text-2xl">+91 73489 75878</div>
              </div>
              <span className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-[#D4FF00] group-hover:text-black transition">→</span>
            </a>
            <a href="https://github.com/rohithlakshman999-hue" target="_blank" rel="noreferrer"
              className="glass-card glass-card-hover p-6 flex items-center justify-between group">
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-1">GitHub</div>
                <div className="font-display text-xl md:text-2xl">@rohithlakshman999-hue</div>
              </div>
              <span className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-[#D4FF00] group-hover:text-black transition">↗</span>
            </a>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="glass-card p-8 sticky top-24">
            <h3 className="font-display text-2xl font-semibold mb-6">What happens next</h3>
            <ol className="space-y-5">
              {[
                ["01", "We reply within 24 hours to schedule a discovery call."],
                ["02", "We scope your project — timeline, budget, deliverables."],
                ["03", "You receive a clear proposal and we kick off."],
              ].map(([n, t]) => (
                <li key={n} className="flex gap-4">
                  <span className="font-mono text-[#D4FF00] shrink-0">{n}</span>
                  <span className="text-white/70 leading-relaxed">{t}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 pt-6 border-t border-white/5 text-xs text-white/40 font-mono">
              SandroGen Tech · India<br/>
              Available worldwide · Remote-first
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
