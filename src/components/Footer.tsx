import { Link } from "react-router-dom";
import { EnvelopeSimple, PhoneCall, MapPin, Clock } from "@phosphor-icons/react";
import volticLogo from "../assets/images/voltic_logo_branco.svg";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-brand-border pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand Block */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={volticLogo} alt="Voltic Bombas" className="h-8 md:h-10 w-auto" />
          </Link>
          <p className="text-sm text-brand-muted leading-relaxed max-w-[280px]">
            Soluções completas e projetos próprios em bombas helicoidais industriais para bombeamento de alta performance.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-text">
            Navegação
          </h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/" className="text-sm text-brand-muted hover:text-brand-orange transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/quemsomos" className="text-sm text-brand-muted hover:text-brand-orange transition-colors">
                Quem Somos
              </Link>
            </li>
            <li>
              <Link to="/servicos" className="text-sm text-brand-muted hover:text-brand-orange transition-colors">
                Serviços
              </Link>
            </li>
            <li>
              <Link to="/contato" className="text-sm text-brand-muted hover:text-brand-orange transition-colors">
                Contato
              </Link>
            </li>
            <li>
              <Link to="/trabalheconosco" className="text-sm text-brand-muted hover:text-brand-orange transition-colors">
                Trabalhe Conosco
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-sm text-brand-muted hover:text-brand-orange transition-colors">
                Perguntas Frequentes
              </Link>
            </li>
            <li>
              <Link to="/privacidade" className="text-sm text-brand-muted hover:text-brand-orange transition-colors">
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-text">
            Produtos
          </h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/produtos/bomba-helicoidal" className="text-sm text-brand-muted hover:text-brand-orange transition-colors">
                Bomba Helicoidal
              </Link>
            </li>
            <li>
              <Link to="/produtos/serie-vbc" className="text-sm text-brand-muted hover:text-brand-orange transition-colors">
                Bombas Centrífugas
              </Link>
            </li>
            <li>
              <Link to="/produtos/serie-vbf" className="text-sm text-brand-muted hover:text-brand-orange transition-colors">
                Bombas de Fuso
              </Link>
            </li>
            <li>
              <Link to="/produtos/skids-dosagem" className="text-sm text-brand-muted hover:text-brand-orange transition-colors">
                Skids de Dosagem
              </Link>
            </li>
            <li>
              <Link to="/produtos/pecas-reposicao" className="text-sm text-brand-muted hover:text-brand-orange transition-colors">
                Peças de Reposição
              </Link>
            </li>
            <li>
              <Link to="/produtos" className="text-sm text-brand-orange hover:text-brand-orange-hover transition-colors font-medium">
                Ver todos os produtos →
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-text">
            Fale Conosco
          </h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-3">
              <EnvelopeSimple size={18} className="text-brand-orange mt-0.5 shrink-0" />
              <a
                href="mailto:vendas@voltic.com.br"
                className="text-sm text-brand-muted hover:text-brand-orange transition-colors break-all font-mono"
              >
                vendas@voltic.com.br
              </a>
            </li>
            <li className="flex items-start gap-3">
              <PhoneCall size={18} className="text-brand-orange mt-0.5 shrink-0" />
              <a
                href="https://wa.me/554733002250"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-muted hover:text-brand-orange transition-colors font-mono"
              >
                (47) 3300-2250
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={18} className="text-brand-orange mt-0.5 shrink-0" />
              <div className="text-sm text-brand-muted">
                <span className="block font-medium">Segunda à sexta-feira</span>
                <span className="block font-mono text-xs">07:30 às 17:30</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-text">
            Localização
          </h3>
          <div className="flex items-start gap-3">
            <MapPin size={18} className="text-brand-orange mt-0.5 shrink-0" />
            <div className="text-sm text-brand-muted leading-relaxed">
              <span className="block">Acesso leste Rio dos Cedros AE-110A, 4900</span>
              <span className="block font-medium">Galpão 2</span>
              <span className="block">Rio dos Cedros - SC</span>
              <span className="block font-mono text-xs">CEP: 89121-000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1400px] mx-auto px-6 mt-16 pt-8 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-brand-muted">
          &copy; {currentYear} Voltic Bombas Ltda. Todos os direitos reservados.
        </p>
        <p className="text-xs text-brand-muted flex items-center gap-1">
          Criado com foco em excelência e fidelidade industrial.
        </p>
      </div>
    </footer>
  );
}
