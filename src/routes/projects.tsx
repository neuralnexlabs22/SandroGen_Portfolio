import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/portfolio-data";
import { CTA } from "./index";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Work — SandroGen Tech" },
      {
        name: "description",
        content:
          "Selected e-commerce, fashion, sports and business software projects built by SandroGen Tech.",
      },
      { property: "og:title", content: "Selected Work — SandroGen Tech" },
      {
        property: "og:description",
        content: "Premium e-commerce and custom application projects.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <section className="container-x pt-24 pb-16">
        <span className="eyebrow mb-6">// Selected work</span>
        <h1 className="font-display text-5xl md:text-7xl font-semibold mt-6 max-w-4xl leading-[1.05]">
          Real products, <span className="text-[#D4FF00]">live in production.</span>
        </h1>
        <p className="mt-8 text-lg text-white/60 max-w-2xl">
          A snapshot of recent e-commerce stores, custom web apps and business systems we've built.
        </p>
      </section>

      <section className="container-x py-12 space-y-5">
        {projects.map((p, i) => (
          <article key={p.id} className="glass-card glass-card-hover p-8 md:p-12 group">
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-1 font-mono text-sm text-[#D4FF00]">0{i + 1}</div>
              <div className="md:col-span-7">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-3">
                  {p.industry}
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-semibold mb-5">{p.title}</h2>
                <p className="text-white/60 max-w-xl mb-6 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/60"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-4 space-y-4">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-2">
                    Highlights
                  </div>
                  <ul className="space-y-1 text-sm">
                    {p.highlights.map((h) => (
                      <li key={h} className="text-white/75">
                        — {h}
                      </li>
                    ))}
                  </ul>
                </div>
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noreferrer" className="btn-primary text-sm">
                    Visit site ↗
                  </a>
                ) : (
                  <span className="inline-block text-xs font-mono px-3 py-1.5 rounded-full bg-white/5 text-white/50">
                    Internal project
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      <CTA />
    </>
  );
}
