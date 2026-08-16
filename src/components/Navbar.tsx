import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { WhatsappLogo, CaretDown, List, X } from "@phosphor-icons/react";
import volticLogo from "../assets/images/voltic_logo_branco.svg";

const produtos = [
  { nome: "Bomba Helicoidal", rota: "/produtos/bomba-helicoidal" },
  { nome: "Peças de Reposição", rota: "/produtos/pecas-reposicao" },
  { nome: "Série VBC — Bombas Centrífugas", rota: "/produtos/serie-vbc" },
  { nome: "Série VBF — Bombas de Fuso", rota: "/produtos/serie-vbf" },
  { nome: "Série VBL — Bombas de Lóbulos", rota: "/produtos/serie-vbl" },
  { nome: "Série VBP — Bombas de Pistão", rota: "/produtos/serie-vbp" },
  { nome: "Série VET — Esvaziador de Tambor", rota: "/produtos/serie-vet" },
  { nome: "Série VSM — Sistemas Misturadores", rota: "/produtos/serie-vsm" },
  { nome: "Skids de Dosagem", rota: "/produtos/skids-dosagem" },
  { nome: "Bombas Peristálticas", rota: "/produtos/bombas-peristalticas" },
  { nome: "Bombas Dosadoras de Pistão", rota: "/produtos/bombas-dosadoras-pistao" },
  { nome: "Bombas Dosadoras de Diafragma", rota: "/produtos/bombas-dosadoras-diafragma" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileSubmenu(null);
  }, [location.pathname]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileOpen ? "bg-brand-bg/95 backdrop-blur-md border-b border-brand-border" : "bg-brand-bg"
        }`}
    >
      <div className="w-full pl-8 md:pl-16 pr-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={volticLogo} alt="Voltic Bombas" className="h-8 md:h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          <Link
            to="/"
            className={`px-4 py-2 text-sm font-heading font-medium transition-colors ${isActive("/") ? "text-brand-orange" : "text-brand-text hover:text-brand-orange"
              }`}
          >
            Home
          </Link>
          <Link
            to="/quemsomos"
            className={`px-4 py-2 text-sm font-heading font-medium transition-colors ${isActive("/quemsomos") ? "text-brand-orange" : "text-brand-text hover:text-brand-orange"
              }`}
          >
            Quem Somos
          </Link>

          {/* Produtos Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("produtos")}
              className={`flex items-center gap-1 px-4 py-2 text-sm font-heading font-medium transition-colors ${activeDropdown === "produtos" ? "text-brand-orange" : "text-brand-text hover:text-brand-orange"
                }`}
            >
              Produtos
              <CaretDown
                size={14}
                className={`transition-transform duration-200 ${activeDropdown === "produtos" ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {activeDropdown === "produtos" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-0 mt-1 w-[560px] bg-brand-card border border-brand-border rounded-lg shadow-2xl overflow-hidden grid grid-cols-2 z-50"
                >
                  {produtos.map((item, i) => (
                    <Link
                      key={i}
                      to={item.rota}
                      className="block px-4 py-2.5 text-sm text-brand-text hover:bg-brand-orange/10 hover:text-brand-orange transition-colors border-b border-brand-border/40 [&:nth-last-child(-n+2)]:border-b-0 odd:border-r odd:border-r-brand-border/40"
                    >
                      {item.nome}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/servicos"
            className={`px-4 py-2 text-sm font-heading font-medium transition-colors ${isActive("/servicos") ? "text-brand-orange" : "text-brand-text hover:text-brand-orange"
              }`}
          >
            Serviços
          </Link>
          <Link
            to="/contato"
            className={`px-4 py-2 text-sm font-heading font-medium transition-colors ${isActive("/contato") ? "text-brand-orange" : "text-brand-text hover:text-brand-orange"
              }`}
          >
            Contato
          </Link>
          <Link
            to="/trabalheconosco"
            className={`px-4 py-2 text-sm font-heading font-medium transition-colors ${isActive("/trabalheconosco") ? "text-brand-orange" : "text-brand-text hover:text-brand-orange"
              }`}
          >
            Trabalhe Conosco
          </Link>
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/554733002250"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-heading font-semibold rounded transition-colors"
          >
            <WhatsappLogo size={16} />
            Fale Conosco
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-brand-text hover:text-brand-orange transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-brand-bg border-t border-brand-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-0.5 max-h-[80vh] overflow-y-auto">
              <Link to="/" className="py-2.5 text-sm font-heading font-medium text-brand-text hover:text-brand-orange">
                Home
              </Link>
              <Link to="/quemsomos" className="py-2.5 text-sm font-heading font-medium text-brand-text hover:text-brand-orange">
                Quem Somos
              </Link>

              {/* Produtos Mobile */}
              <button
                onClick={() => setMobileSubmenu(mobileSubmenu === "produtos" ? null : "produtos")}
                className="flex items-center justify-between py-2.5 text-sm font-heading font-medium text-brand-text"
              >
                Produtos
                <CaretDown
                  size={14}
                  className={`transition-transform duration-200 ${mobileSubmenu === "produtos" ? "rotate-180" : ""}`}
                />
              </button>
              {mobileSubmenu === "produtos" && (
                <div className="pl-4 flex flex-col gap-0 mb-2">
                  {produtos.map((item, i) => (
                    <Link
                      key={i}
                      to={item.rota}
                      className="py-2 text-xs text-brand-muted hover:text-brand-orange transition-colors"
                    >
                      {item.nome}
                    </Link>
                  ))}
                </div>
              )}

              <Link to="/servicos" className="py-2.5 text-sm font-heading font-medium text-brand-text hover:text-brand-orange">
                Serviços
              </Link>
              <Link to="/contato" className="py-2.5 text-sm font-heading font-medium text-brand-text hover:text-brand-orange">
                Contato
              </Link>
              <Link to="/trabalheconosco" className="py-2.5 text-sm font-heading font-medium text-brand-text hover:text-brand-orange">
                Trabalhe Conosco
              </Link>

              <a
                href="https://wa.me/554733002250"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-3 px-4 py-3 bg-brand-orange text-white text-sm font-heading font-semibold rounded"
              >
                <WhatsappLogo size={16} />
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}