import { createFileRoute } from "@tanstack/react-router";
import { process, whyUs } from "@/lib/portfolio-data";
import { CTA } from "./index";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — SandroGen Tech" },
      {
        name: "description",
        content:
          "Our 7-step development process: discovery, planning, design, development, testing, deployment and ongoing support.",
      },
      { property: "og:title", content: "Our Process — SandroGen Tech" },
      {
        property: "og:description",
        content: "A proven 7-step process for shipping premium digital products.",
      },
    ],
  }),
  component: Process,
});

function Process() {
  return (
    <>
      <section className="container-x pt-24 pb-16">
        <span className="eyebrow mb-6">// How we work</span>
        <h1 className="font-display text-5xl md:text-7xl font-semibold mt-6 max-w-4xl leading-[1.05]">
          A proven <span className="text-[#D4FF00]">7-step process.</span>
        </h1>
        <p className="mt-8 text-lg text-white/60 max-w-2xl">
          From the first conversation to long-term support — engineered for clarity, speed and
          quality.
        </p>
      </section>

      <section className="container-x py-12">
        <div className="space-y-3">
          {process.map((p) => (
            <div
              key={p.n}
              className="glass-card glass-card-hover p-8 md:p-10 grid md:grid-cols-12 gap-6 items-center"
            >
              <div className="md:col-span-2 font-display text-6xl md:text-7xl font-semibold text-[#D4FF00]">
                {p.n}
              </div>
              <div className="md:col-span-3">
                <h3 className="font-display text-2xl md:text-3xl font-semibold">{p.t}</h3>
              </div>
              <div className="md:col-span-7 text-white/60 leading-relaxed">{p.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-32 border-t border-white/5 mt-20">
        <span className="eyebrow">// Why SandroGen</span>
        <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4 mb-16 max-w-3xl">
          Ten reasons clients keep coming back.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {whyUs.map((w) => (
            <div key={w} className="bg-[#0A0A0A] p-6 flex items-center gap-3">
              <span className="text-[#D4FF00] text-lg">✓</span>
              <span className="text-sm">{w}</span>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
