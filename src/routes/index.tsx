import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { projects } from "@/lib/portfolio-data";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  BarChart3,
  Smartphone,
  ShoppingCart,
  Clock,
  Building,
  ArrowUpRight,
  MonitorPlay,
  Briefcase,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SandroGen Tech — Grow Your Business Online" },
      {
        name: "description",
        content:
          "We create modern websites, e-commerce stores, and custom digital solutions that help businesses attract customers and build credibility online.",
      },
      { property: "og:title", content: "SandroGen Tech — Grow Your Business Online" },
      {
        property: "og:description",
        content: "Build a strong online presence that helps your business grow.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="flex flex-col gap-y-32 md:gap-y-48 pb-32">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/50 via-[#0A0A0A]/80 to-[#0A0A0A]" />

        <div className="container-x relative z-10 pt-20">
          <span className="eyebrow mb-6 animate-float inline-block">
            ◆ Professional Digital Solutions
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight max-w-5xl">
            Build a Strong Online Presence That{" "}
            <span className="text-[#D4FF00] text-glow">Helps Your Business Grow</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
            We create modern websites, e-commerce stores, and custom digital solutions that help
            businesses attract customers and build credibility online.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#recent-work" className="btn-primary">
              View Our Work <ArrowRight className="w-5 h-5 ml-1" />
            </a>
            <a
              href="https://wa.me/917348975878"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <MessageCircle className="w-5 h-5 mr-2" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 2. TRUST INDICATORS */}
      <section className="container-x -mt-20 md:-mt-32 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden glass-card">
          {[
            { value: "7+", label: "Projects Delivered" },
            { value: "100%", label: "Mobile-Friendly" },
            { value: "Fast", label: "Performance" },
            { value: "Secure", label: "Integrations" },
            { value: "24/7", label: "Dedicated Support" },
            { value: "Focus", label: "Business-Driven" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0A0A0A]/80 backdrop-blur-md p-6 text-center lg:text-left flex flex-col justify-center"
            >
              <div className="text-3xl md:text-4xl font-display font-semibold text-[#D4FF00]">
                {stat.value}
              </div>
              <div className="mt-1 text-xs md:text-sm text-white/60 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED PROJECTS (Highest Priority) */}
      <section id="recent-work" className="container-x scroll-mt-32">
        <div className="mb-16">
          <span className="eyebrow mb-4">// Recent Work</span>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4">
            See how we've helped others.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((project) => (
            <a
              key={project.id}
              href={project.url ?? "#"}
              target="_blank"
              rel="noreferrer"
              className="glass-card glass-card-hover overflow-hidden group block flex flex-col h-full"
            >
              <div className="aspect-[16/9] bg-white/5 relative overflow-hidden border-b border-white/5">
                {"image" in project && project.image ? (
                  <img
                    src={project.image as string}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 grid-bg opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-gradient-to-br from-transparent to-black/40 group-hover:scale-105 transition-transform duration-700">
                      <span className="text-4xl md:text-6xl font-display font-bold text-white/10 tracking-tighter">
                        {project.title}
                      </span>
                    </div>
                  </>
                )}
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-mono text-[#D4FF00]">{project.industry}</span>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:bg-[#D4FF00] group-hover:text-black transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-3xl font-display font-semibold mb-3">{project.title}</h3>
                <p className="text-white/60 mb-6 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/projects" className="btn-ghost">
            View All Projects
          </Link>
        </div>
      </section>

      {/* 4. BUSINESS BENEFITS SECTION */}
      <section className="container-x">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            How We Help Businesses
          </h2>
          <p className="text-white/60 text-lg">
            We focus on real outcomes that impact your bottom line, not just technology for the sake
            of it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "More Customer Inquiries",
              desc: "Help businesses convert visitors into customers with clear, persuasive layouts.",
              icon: MessageCircle,
            },
            {
              title: "Professional Brand Presence",
              desc: "Build immediate trust through a modern, premium online presence.",
              icon: Briefcase,
            },
            {
              title: "Online Sales",
              desc: "Enable your business to sell products and services securely online.",
              icon: ShoppingCart,
            },
            {
              title: "Customer Convenience",
              desc: "Provide smooth, frustration-free experiences across all mobile and desktop devices.",
              icon: Smartphone,
            },
            {
              title: "Business Efficiency",
              desc: "Reduce manual work and save time with custom automation solutions.",
              icon: Zap,
            },
            {
              title: "Long-Term Growth",
              desc: "Create scalable digital platforms that grow alongside your business.",
              icon: BarChart3,
            },
          ].map((benefit) => (
            <div key={benefit.title} className="glass-card p-8">
              <div className="w-12 h-12 rounded-xl bg-[#D4FF00]/10 flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-[#D4FF00]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-white/60 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section className="container-x border-y border-white/5 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row gap-16 lg:gap-24">
          <div className="md:w-1/3">
            <span className="eyebrow mb-4">// Our Services</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4 mb-6">
              Everything you need to succeed online.
            </h2>
            <p className="text-white/60 text-lg mb-8">
              We provide end-to-end digital services tailored for business owners who want reliable,
              hassle-free solutions.
            </p>
            <Link to="/services" className="btn-ghost">
              Learn more about our services
            </Link>
          </div>
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Business Websites",
                desc: "Professional websites designed to establish credibility and capture leads.",
              },
              {
                title: "E-Commerce Solutions",
                desc: "Robust online stores designed to increase your sales.",
              },
              {
                title: "Booking Systems",
                desc: "Allow customers to schedule and manage appointments online easily.",
              },
              {
                title: "Payment Solutions",
                desc: "Secure and seamless online transactions for your customers.",
              },
              {
                title: "Custom Business Solutions",
                desc: "Software completely tailored to your specific business requirements.",
              },
              {
                title: "Website Maintenance",
                desc: "Ongoing improvements and support so you never have to worry.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="p-6 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" /> {service.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR PROCESS */}
      <section className="container-x">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Simple Process, Clear Results
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We've refined our process to reduce uncertainty and build confidence at every step.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Understand Your Business",
              desc: "We learn about your specific goals, audience, and requirements.",
            },
            {
              step: "02",
              title: "Design & Development",
              desc: "We create a tailored, professional digital solution for your brand.",
            },
            {
              step: "03",
              title: "Review & Refinement",
              desc: "We gather your feedback and make necessary improvements.",
            },
            {
              step: "04",
              title: "Launch & Support",
              desc: "We deploy the project and continue supporting your business.",
            },
          ].map((p, i) => (
            <div key={p.step} className="relative">
              {i !== 3 && (
                <div className="hidden md:block absolute top-8 left-[calc(100%-2rem)] w-[calc(100%+1rem)] h-px bg-gradient-to-r from-white/20 to-transparent" />
              )}
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-display text-2xl text-[#D4FF00] mb-6">
                {p.step}
              </div>
              <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. WHY CHOOSE SANDROGEN */}
      <section className="container-x">
        <div className="glass-card p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4FF00]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <span className="eyebrow mb-4">// Why Us</span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4 mb-6">
                Why Businesses Choose Us
              </h2>
              <p className="text-white/60 text-lg mb-8">
                We combine modern aesthetics with a deep understanding of what makes a business
                successful online.
              </p>
            </div>

            <div className="lg:w-1/2 w-full grid sm:grid-cols-2 gap-4">
              {[
                "Tailored solutions",
                "Modern designs",
                "Mobile-first approach",
                "Fast communication",
                "Reliable support",
                "Business-focused mindset",
              ].map((reason) => (
                <div
                  key={reason}
                  className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#D4FF00] shrink-0" />
                  <span className="font-medium text-sm">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS / SUCCESS STORIES */}
      <section className="container-x py-10 border-y border-white/5">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Client Success Highlights
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              client: "Colour Seven",
              type: "Fashion E-Commerce",
              outcome:
                "Achieved a premium brand aesthetic that increased customer trust and improved the overall shopping experience with a fast, mobile-friendly interface.",
            },
            {
              client: "Nirvana Systems",
              type: "Business Software",
              outcome:
                "Streamlined their entire quotation workflow, saving hours of manual work every week through automated PDF generation and GST calculations.",
            },
            {
              client: "MS Retro",
              type: "Sports Retailer",
              outcome:
                "Successfully launched a dedicated online store that modernized their product discovery and expanded their reach to a wider customer base.",
            },
          ].map((story) => (
            <div
              key={story.client}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col"
            >
              <div className="mb-6 flex-1">
                <p className="text-lg italic text-white/80 leading-relaxed">"{story.outcome}"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4FF00]/20 to-black border border-[#D4FF00]/30 flex items-center justify-center">
                  <Building className="w-5 h-5 text-[#D4FF00]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{story.client}</h4>
                  <p className="text-sm text-white/50">{story.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="container-x max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">Common Questions</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {[
            {
              q: "How long does a project take?",
              a: "A typical business website takes 2-4 weeks from start to finish. Larger e-commerce stores or custom applications may take 6-8 weeks depending on the complexity and your requirements.",
            },
            {
              q: "Do you provide support after launch?",
              a: "Absolutely. We offer ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and continues to perform optimally as your business grows.",
            },
            {
              q: "Can you redesign an existing website?",
              a: "Yes. We often help businesses upgrade their outdated websites to modern, high-performing platforms that better reflect their current brand and improve customer conversion.",
            },
            {
              q: "Do your websites work on mobile devices?",
              a: "Yes, 100%. We take a mobile-first approach. With the majority of web traffic coming from phones, we ensure your site looks and functions perfectly on all screen sizes.",
            },
            {
              q: "Can you integrate online payments?",
              a: "Yes, we integrate secure payment gateways like Razorpay, Stripe, and UPI, allowing you to seamlessly accept payments from customers directly on your platform.",
            },
          ].map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/10 px-2">
              <AccordionTrigger className="text-lg md:text-xl font-medium py-6 hover:text-[#D4FF00] transition-colors text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/60 text-base leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* 10. FINAL CALL-TO-ACTION */}
      <CTA />
    </div>
  );
}

export function CTA() {
  return (
    <section className="container-x">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 p-12 md:p-20 text-center flex flex-col items-center">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4FF00] rounded-full blur-[200px] opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <h2 className="font-display text-4xl md:text-6xl font-semibold mb-6">
            Ready to Take Your Business Online?
          </h2>
          <p className="text-white/70 text-lg md:text-xl mb-10">
            Let's create a professional digital presence that helps your business stand out and
            grow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary text-lg px-8 py-4 w-full sm:w-auto justify-center"
            >
              Start a Project
            </Link>
            <a
              href="https://wa.me/917348975878"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost text-lg px-8 py-4 w-full sm:w-auto justify-center bg-[#0A0A0A]"
            >
              <MessageCircle className="w-5 h-5 mr-2" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
