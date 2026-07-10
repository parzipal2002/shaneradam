"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X, Circle } from "lucide-react";
import { nav, site } from "@/lib/data";
import { useTheme } from "@/components/theme-provider";

export function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b hairline transition-colors ${
        scrolled ? "bg-paper-surface/90 dark:bg-ink-surface/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-1 px-4 sm:px-6">
        {/* Traffic-light dots, editor chrome flavor */}
        <div className="mr-3 hidden items-center gap-1.5 sm:flex">
          <span className="h-2.5 w-2.5 rounded-full bg-[#EB5757]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#F2C94C]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#2ECC71]/70" />
        </div>

        <nav className="hidden flex-1 items-stretch overflow-x-auto md:flex" aria-label="Primary">
          {nav.map((n) => {
            const isActive = active === n.id;
            return (
              <button
                key={n.id}
                onClick={() => handleNavClick(n.id)}
                className={`group relative flex items-center gap-2 border-r hairline px-4 py-3.5 font-mono text-xs whitespace-nowrap transition-colors ${
                  isActive
                    ? "bg-paper text-ink dark:bg-ink dark:text-paper"
                    : "text-ink/50 hover:text-ink dark:text-paper/50 dark:hover:text-paper"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                <Circle
                  className={`h-1.5 w-1.5 ${isActive ? "fill-accent text-accent" : "fill-transparent text-ink/20 dark:text-paper/20"}`}
                />
                {n.label}
                {isActive && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent" aria-hidden />
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex flex-1 items-center justify-between py-2.5 md:flex-none md:justify-end md:py-0 md:pl-3">
          <span className="font-mono text-xs text-ink/70 dark:text-paper/70 md:hidden">
            {site.name.split(" ")[0].toLowerCase()}.tsx
          </span>

          <div className="flex items-center gap-1">
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="rounded-md p-2 text-ink/70 transition-colors hover:bg-paper-surface-2 hover:text-ink dark:text-paper/70 dark:hover:bg-ink-surface-2 dark:hover:text-paper"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              className="rounded-md p-2 text-ink/70 transition-colors hover:bg-paper-surface-2 hover:text-ink dark:text-paper/70 dark:hover:bg-ink-surface-2 dark:hover:text-paper md:hidden"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t hairline bg-paper-surface dark:bg-ink-surface md:hidden" aria-label="Mobile">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => handleNavClick(n.id)}
              className={`flex w-full items-center gap-2 border-b hairline px-5 py-3 text-left font-mono text-xs ${
                active === n.id ? "text-accent" : "text-ink/70 dark:text-paper/70"
              }`}
            >
              <Circle className={`h-1.5 w-1.5 ${active === n.id ? "fill-accent text-accent" : "fill-transparent text-ink/20"}`} />
              {n.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
