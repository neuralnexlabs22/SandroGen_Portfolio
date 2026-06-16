import { createFileRoute } from "@tanstack/react-router";
import { CTA } from "./index";
import accentImg from "@/assets/accent.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SandroGen Tech" },
      {
        name: "description",
        content:
          "SandroGen Tech is a freelance software studio founded by Rohith Lakshman, building premium digital products for global brands.",
      },
      { property: "og:title", content: "About SandroGen Tech" },
      {
        property: "og:description",
        content: "A modern software studio building premium digital experiences.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="container-x pt-24 pb-20">
        <span className="eyebrow mb-6">// About us</span>
        <h1 className="font-display text-5xl md:text-7xl font-semibold mt-6 max-w-4xl leading-[1.05]">
          A modern studio building <span className="text-[#D4FF00]">premium digital products.</span>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-white/60 max-w-3xl leading-relaxed">
          SandroGen Tech specializes in high-performance websites, e-commerce platforms, business
          applications and digital transformation solutions. We help brands establish a strong
          digital presence through cutting-edge technology, premium user experiences and scalable
          architectures.
        </p>
      </section>

      <section className="container-x py-20 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass-card p-10">
            <span className="eyebrow">Mission</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mt-6 leading-tight">
              Empower businesses with innovative digital solutions that enhance engagement and
              accelerate growth.
            </h2>
          </div>
          <div className="glass-card p-10 relative overflow-hidden">
            <img
              src={accentImg}
              alt=""
              width={1280}
              height={800}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="relative">
              <span className="eyebrow">Vision</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mt-6 leading-tight">
                Become a globally recognized technology company delivering exceptional digital
                experiences worldwide.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-24 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="eyebrow">// Founder</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-6">
              Rohith Lakshman
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              Founder of SandroGen Tech. Builder of digital products that combine exceptional
              design, powerful functionality and measurable business results.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:rohithlakshman999@gmail.com" className="btn-primary">
                Email
              </a>
              <a href="https://github.com/rohithlakshman999-hue" className="btn-ghost">
                GitHub
              </a>
            </div>
          </div>
          <div className="glass-card p-10">
            <h3 className="font-display text-2xl font-semibold mb-6">At a glance</h3>
            <dl className="space-y-4 text-sm">
              {[
                ["Location", "India"],
                ["Founded by", "Rohith Lakshman"],
                ["Email", "rohithlakshman999@gmail.com"],
                ["WhatsApp", "+91 73489 75878"],
                ["Specialty", "E-Commerce & Web Apps"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-white/5 pb-3">
                  <dt className="text-white/40 font-mono uppercase tracking-wider text-xs">{k}</dt>
                  <dd className="text-white/90 text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
