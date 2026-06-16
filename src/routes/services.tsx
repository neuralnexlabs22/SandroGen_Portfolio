import { createFileRoute } from "@tanstack/react-router";
import { services, techStack } from "@/lib/portfolio-data";
import { CTA } from "./index";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — SandroGen Tech" },
      {
        name: "description",
        content:
          "E-commerce development, custom web apps, UI/UX design, payment integration and cloud deployment by SandroGen Tech.",
      },
      { property: "og:title", content: "Services — SandroGen Tech" },
      { property: "og:description", content: "Premium services engineered for business growth." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="container-x pt-24 pb-16">
        <span className="eyebrow mb-6">// Services</span>
        <h1 className="font-display text-5xl md:text-7xl font-semibold mt-6 max-w-4xl leading-[1.05]">
          Everything you need to <span className="text-[#D4FF00]">ship & scale.</span>
        </h1>
        <p className="mt-8 text-lg text-white/60 max-w-2xl">
          End-to-end product development — from first sketch to production deployment and beyond.
        </p>
      </section>

      <section className="container-x py-12">
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <div key={s.title} className="glass-card glass-card-hover p-10">
              <div className="flex items-start justify-between mb-6">
                <span className="text-4xl text-[#D4FF00]">{s.icon}</span>
                <span className="font-mono text-xs text-white/30">0{i + 1}</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3">{s.title}</h3>
              <p className="text-white/55 mb-8">{s.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {s.items.map((it) => (
                  <div
                    key={it}
                    className="text-sm text-white/70 flex items-center gap-2 py-2 border-t border-white/5"
                  >
                    <span className="text-[#D4FF00]">+</span> {it}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="container-x py-32 border-t border-white/5 mt-20">
        <span className="eyebrow">// Technology stack</span>
        <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4 mb-16 max-w-3xl">
          Built on a modern, battle-tested stack.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {Object.entries(techStack).map(([cat, items]) => (
            <div key={cat} className="glass-card p-8">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4FF00] mb-6">
                {cat}
              </h4>
              <ul className="space-y-3">
                {items.map((i) => (
                  <li key={i} className="text-lg font-display">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
