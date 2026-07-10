import { GitBranch, Check } from "lucide-react";
import { site } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t hairline bg-ink font-mono text-[11px] text-paper/60 dark:bg-ink-surface">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-3">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <GitBranch className="h-3 w-3" />
            main
          </span>
          <span className="flex items-center gap-1.5 text-ok">
            <Check className="h-3 w-3" />
            no bugs (that I know of)
          </span>
          <span className="hidden sm:inline">UTF-8</span>
          <span className="hidden sm:inline">TypeScript React</span>
        </div>
        <span>© {year} {site.name}. Built with Next.js &amp; Tailwind CSS.</span>
      </div>
    </footer>
  );
}
