import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { projects, services, whyUs } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SandroGen Tech — Premium Web Development & E-Commerce" },
      { name: "description", content: "We build modern websites, e-commerce platforms and custom apps that drive measurable business growth." },
      { property: "og:title", content: "SandroGen Tech — Premium Web Development" },
      { property: "og:description", content: "Building modern digital experiences that drive business growth." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <img src={heroImg} alt="" width={1920} height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/30 to-[#0A0A0A]" />
        <div className="container-x relative pt-28 pb-32 md:pt-40 md:pb-48">
          <span className="eyebrow mb-6">◆ Freelance Software Studio · India</span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.02] tracking-tight max-w-5xl">
            Building modern <span className="text-[#D4FF00] text-glow">digital experiences</span> that drive business growth.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
            SandroGen Tech designs and engineers high-performance websites, e-commerce
            platforms and custom business applications for ambitious brands.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">Start a project →</Link>
            <Link to="/projects" className="btn-ghost">View our work</Link>
          </div>

          {/* Stats */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
            {[
              ["7+", "Live Projects"],
              ["100%", "Mobile Ready"],
              ["24/7", "Client Support"],
              ["∞", "Iteration Loops"],
            ].map(([k, v]) => (
              <div key={v} className="bg-[#0A0A0A] p-8">
                <div className="text-4xl md:text-5xl font-display font-semibold text-[#D4FF00]">{k}</div>
                <div className="mt-2 text-sm text-white/50 font-mono uppercase tracking-wider">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-white/5 py-6 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap text-white/30 font-display text-3xl">
          {[...Array(2)].flatMap((_, i) =>
            ["E-Commerce", "◆", "Web Apps", "◆", "UI/UX", "◆", "Razorpay", "◆", "Next.js", "◆", "Supabase", "◆", "Vercel", "◆"]
              .map((t, j) => <span key={`${i}-${j}`}>{t}</span>)
          )}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="container-x py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="eyebrow mb-4">// What we do</span>
            <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4 max-w-2xl">Premium services, engineered for growth.</h2>
          </div>
          <Link to="/services" className="btn-ghost shrink-0">All services →</Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(0, 6).map((s) => (
            <div key={s.title} className="glass-card glass-card-hover p-8">
              <div className="text-3xl mb-6 text-[#D4FF00]">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-6">{s.description}</p>
              <ul className="space-y-1.5 text-xs font-mono text-white/40">
                {s.items.slice(0, 4).map(i => <li key={i}>— {i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="container-x py-32 border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="eyebrow mb-4">// Selected work</span>
            <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4">Recent projects.</h2>
          </div>
          <Link to="/projects" className="btn-ghost shrink-0">View all →</Link>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {projects.slice(0, 4).map((p, i) => (
            <a key={p.id} href={p.url ?? "#"} target="_blank" rel="noreferrer"
              className="glass-card glass-card-hover p-8 group block">
              <div className="flex items-start justify-between mb-8">
                <span className="text-xs font-mono text-white/40">0{i + 1} / {p.industry}</span>
                <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-[#D4FF00] group-hover:border-[#D4FF00] group-hover:text-black transition">↗</span>
              </div>
              <h3 className="font-display text-3xl font-semibold mb-3">{p.title}</h3>
              <p className="text-white/55 text-sm">{p.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="container-x py-32 border-t border-white/5">
        <span className="eyebrow mb-4">// Why SandroGen</span>
        <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4 mb-16 max-w-3xl">Built for serious businesses that demand more.</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {whyUs.map((w) => (
            <div key={w} className="bg-[#0A0A0A] p-6 flex items-center gap-3">
              <span className="text-[#D4FF00]">✓</span>
              <span className="text-sm">{w}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </>
  );
}

export function CTA() {
  return (
    <section className="container-x py-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 p-12 md:p-20">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#D4FF00] rounded-full blur-[160px] opacity-30" />
        <div className="relative">
          <span className="eyebrow mb-6">◆ Let's build</span>
          <h2 className="font-display text-4xl md:text-7xl font-semibold mt-4 max-w-4xl leading-[1.05]">
            Have a project in mind? <span className="text-[#D4FF00]">Let's make it real.</span>
          </h2>
          <p className="mt-6 text-white/60 text-lg max-w-2xl">
            Tell us about your idea. We respond within 24 hours.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">Start a project →</Link>
            <a href="https://wa.me/917348975878" className="btn-ghost">WhatsApp us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
