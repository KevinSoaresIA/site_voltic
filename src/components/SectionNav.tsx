import { useEffect, useState } from "react";

type NavItem = { id: string; label: string };

export function SectionNav({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const handleScroll = () => {
      let current = items[0]?.id;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 140) {
          current = item.id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return (
    <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex gap-1 justify-center overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`shrink-0 px-3.5 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider whitespace-nowrap transition-colors ${active === item.id
                ? "bg-brand-orange text-white"
                : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
