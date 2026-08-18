import { Link } from "react-router-dom";
import { CaretRight } from "@phosphor-icons/react";

export function Breadcrumb({ current }: { current: string }) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-brand-muted mb-5 font-mono uppercase tracking-wide">
      <Link to="/produtos" className="hover:text-brand-blue-bright transition-colors">
        Produtos
      </Link>
      <CaretRight size={10} className="shrink-0" />
      <span className="text-brand-text truncate">{current}</span>
    </div>
  );
}
