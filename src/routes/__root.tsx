import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-bold text-[#D4FF00]">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">Back home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">Try again</button>
          <a href="/" className="btn-ghost">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SandroGen Tech — Premium Web Development & E-Commerce" },
      { name: "description", content: "SandroGen Tech builds high-performance websites, e-commerce platforms and custom business apps for ambitious brands." },
      { name: "author", content: "SandroGen Tech" },
      { property: "og:title", content: "SandroGen Tech — Premium Web Development & E-Commerce" },
      { property: "og:description", content: "SandroGen Tech builds high-performance websites, e-commerce platforms and custom business apps for ambitious brands." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SandroGen Tech — Premium Web Development & E-Commerce" },
      { name: "twitter:description", content: "SandroGen Tech builds high-performance websites, e-commerce platforms and custom business apps for ambitious brands." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/75d55ed5-795d-4f1a-ae87-17eb8fa27a92/id-preview-b373e1dd--9300235c-7614-42ae-89a0-611e2adbc2f6.lovable.app-1780941765861.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/75d55ed5-795d-4f1a-ae87-17eb8fa27a92/id-preview-b373e1dd--9300235c-7614-42ae-89a0-611e2adbc2f6.lovable.app-1780941765861.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Work" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#0A0A0A]/70 border-b border-white/5">
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-lg bg-[#D4FF00] flex items-center justify-center text-black font-bold text-sm">S</span>
          <span className="font-display font-semibold tracking-tight">SandroGen<span className="text-[#D4FF00]">.</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-4 py-2 text-sm text-white/70 hover:text-white transition rounded-full"
              activeProps={{ className: "px-4 py-2 text-sm text-[#D4FF00] rounded-full bg-white/5" }}
              activeOptions={{ exact: n.to === "/" }}
            >{n.label}</Link>
          ))}
        </nav>
        <Link to="/contact" className="hidden md:inline-flex btn-primary text-sm !py-2 !px-5">Start a project →</Link>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? "M6 6l12 12M6 18L18 6" : "M3 6h18M3 12h18M3 18h18"}/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0A0A0A]">
          <nav className="container-x py-4 flex flex-col gap-1">
            {navItems.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="px-4 py-3 text-white/80 hover:text-[#D4FF00]">{n.label}</Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 w-fit">Start a project →</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 mt-32">
      <div className="container-x py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <span className="w-8 h-8 rounded-lg bg-[#D4FF00] flex items-center justify-center text-black font-bold text-sm">S</span>
            <span className="font-display font-semibold">SandroGen<span className="text-[#D4FF00]">.</span></span>
          </Link>
          <p className="text-white/60 max-w-md text-sm leading-relaxed">
            Premium software development for ambitious brands. We build websites,
            e-commerce platforms and custom business applications that drive growth.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 font-mono">Explore</h4>
          <ul className="space-y-2 text-sm">
            {navItems.map((n) => (
              <li key={n.to}><Link to={n.to} className="text-white/70 hover:text-[#D4FF00] transition">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 font-mono">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:rohithlakshman999@gmail.com" className="text-white/70 hover:text-[#D4FF00]">rohithlakshman999@gmail.com</a></li>
            <li><a href="https://wa.me/917348975878" className="text-white/70 hover:text-[#D4FF00]">+91 73489 75878</a></li>
            <li><a href="https://github.com/rohithlakshman999-hue" className="text-white/70 hover:text-[#D4FF00]">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40 font-mono">
          <p>© {new Date().getFullYear()} SandroGen Tech. All rights reserved.</p>
          <p>Founded by Rohith Lakshman · India</p>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-[#0A0A0A]">
        <Header />
        <main className="flex-1 pt-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
