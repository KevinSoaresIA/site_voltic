import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Factory,
  Wrench,
  Gear,
  ClipboardText,
  Lightning,
  Target,
  CheckCircle,
  WhatsappLogo,
  Phone,
  Envelope,
  MapPin,
  Clock,
} from "@phosphor-icons/react";

const cultura = [
  {
    titulo: "Tradição em Engenharia",
    desc: "Fabricação própria de bombas helicoidais. Aqui você aprende com quem entende do produto de ponta a ponta.",
    icon: <Factory size={20} />,
  },
  {
    titulo: "Foco em Resolução",
    desc: "Nosso cliente é indústria — quando o equipamento para, a produção para. Trabalhamos com urgência e responsabilidade.",
    icon: <Target size={20} />,
  },
  {
    titulo: "Crescimento Contínuo",
    desc: "Investimos em capacitação interna. Se você quer evoluir tecnicamente, damos o ambiente e as ferramentas para isso.",
    icon: <Lightning size={20} />,
  },
];

const beneficios = [
  { titulo: "Vale Transporte", desc: "Deslocamento coberto para facilitar seu acesso à planta." },
  { titulo: "Vale Refeição", desc: "Refeição garantida durante o horário de trabalho." },
  { titulo: "Plano de Saúde", desc: "Cobertura médica para você e seus dependentes." },
  { titulo: "PLR", desc: "Participação nos lucros baseada em metas e resultados." },
  { titulo: "Capacitação Técnica", desc: "Treinamentos internos e externos para desenvolvimento." },
  { titulo: "Ambiente Seguro", desc: "EPIs de qualidade e protocolos de segurança rigorosos." },
];

const vagas = [
  {
    cargo: "Técnico Mecânico",
    area: "Manutenção",
    tipo: "CLT - Rio dos Cedros/SC",
    desc: "Atuação em manutenção preventiva e corretiva de bombas helicoidais. Experiência com mecânica industrial e usinagem.",
    icon: <Wrench size={20} />,
  },
  {
    cargo: "Engenheiro de Vendas",
    area: "Comercial",
    tipo: "CLT - Rio dos Cedros/SC",
    desc: "Atendimento técnico a clientes industriais, especificação de equipamentos e fechamento de propostas comerciais.",
    icon: <Gear size={20} />,
  },
  {
    cargo: "Operador de Produção",
    area: "Fabricação",
    tipo: "CLT - Rio dos Cedros/SC",
    desc: "Operação de máquinas e montagem de conjuntos mecânicos. Experiência industrial desejável mas não obrigatória.",
    icon: <Factory size={20} />,
  },
  {
    cargo: "Assistente Administrativo",
    area: "Administrativo",
    tipo: "CLT - Rio dos Cedros/SC",
    desc: "Rotina administrativa, atendimento telefônico, controle de documentos e suporte ao departamento comercial.",
    icon: <ClipboardText size={20} />,
  },
];

const contatos = [
  { titulo: "Telefone", valor: "(47) 3300-2250", link: "tel:+554733002250", icon: <Phone size={20} /> },
  { titulo: "E-mail", valor: "vendas@voltic.com.br", link: "mailto:vendas@voltic.com.br", icon: <Envelope size={20} /> },
  {
    titulo: "Endereço",
    valor: "Acesso Leste Rio dos Cedros, AE-110A, 4900, Galpão 2, Rio dos Cedros - SC, 89121-000",
    link: "#",
    icon: <MapPin size={20} />,
  },
  { titulo: "Horário", valor: "Segunda à sexta-feira, 07:30 às 17:30", link: "#", icon: <Clock size={20} /> },
];

export default function TrabalheConosco() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cargo: "",
    mensagem: "",
  });
  const [consentimento, setConsentimento] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `*Candidatura - Site Voltic*\n\n*Nome:* ${formData.nome}\n*E-mail:* ${formData.email}\n*Telefone:* ${formData.telefone}\n*Cargo Desejado:* ${formData.cargo}\n\n*Mensagem:*\n${formData.mensagem}`
    );
    window.open(`https://wa.me/554733002250?text=${msg}`, "_blank");
  };

  return (
    <div className="bg-brand-bg min-h-screen text-brand-text">
      {/* 1. HERO */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center justify-center overflow-hidden pt-12 md:pt-16 pb-16 px-6 border-b border-brand-border">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-orange/5 rounded-full filter blur-[80px] pointer-events-none"></div>

        <div className="max-w-[1400px] w-full mx-auto relative z-10 flex flex-col items-center text-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full border border-brand-orange/20"
          >
            Carreiras // Trabalhe Conosco
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] text-gradient"
          >
            Faça parte da Voltic.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-brand-muted leading-relaxed max-w-[55ch]"
          >
            Somos uma empresa de engenharia focada em bombeamento industrial. Se você busca um ambiente
            técnico, dinâmico e com espaço para crescer, confira nossas vagas abertas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <a
              href="#vagas"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-orange hover:bg-brand-orange-hover active:scale-[0.98] text-white font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200"
            >
              Ver Vagas Abertas
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#candidatar"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-card hover:bg-zinc-800 border border-brand-border active:scale-[0.98] text-brand-text font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200"
            >
              Enviar Currículo
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. CULTURA E VALORES */}
      <section className="py-24 px-6 relative overflow-hidden border-b border-gray-200 bg-white text-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange"
            >
              Nossa Cultura
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-black"
            >
              Engenharia que move pessoas.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cultura.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group p-8 bg-white border border-gray-200 rounded-lg hover:border-brand-orange/30 transition-all duration-300 flex flex-col gap-5"
              >
                <div className="p-3 bg-white rounded border border-gray-200 text-brand-orange group-hover:bg-brand-orange/10 group-hover:border-brand-orange/30 transition-all duration-300 w-fit">
                  {item.icon}
                </div>
                <h3 className="font-heading text-xl font-bold tracking-tight text-black group-hover:text-brand-orange transition-colors">
                  {item.titulo}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BENEFÍCIOS */}
      <section className="py-24 px-6 relative overflow-hidden border-b border-gray-200 bg-white text-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange"
            >
              Benefícios
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-black"
            >
              Cuidamos do nosso time.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {beneficios.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-lg hover:border-brand-orange/30 transition-all duration-300"
              >
                <CheckCircle size={20} className="text-brand-orange shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading text-base font-bold tracking-tight text-black group-hover:text-brand-orange transition-colors">
                    {item.titulo}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VAGAS ABERTAS */}
      <section id="vagas" className="py-24 px-6 relative overflow-hidden border-b border-gray-200 bg-white text-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange"
            >
              Vagas Abertas
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-black"
            >
              Posições disponíveis.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vagas.map((vaga, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group p-8 bg-white border border-gray-200 rounded-lg hover:border-brand-orange/30 transition-all duration-300 flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded border border-gray-200 text-brand-orange group-hover:bg-brand-orange/10 group-hover:border-brand-orange/30 transition-all duration-300 shrink-0">
                    {vaga.icon}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-heading text-lg font-bold tracking-tight text-black group-hover:text-brand-orange transition-colors">
                      {vaga.cargo}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-mono text-[10px] text-brand-orange uppercase tracking-widest">
                        {vaga.area}
                      </span>
                      <span className="text-gray-600/30 text-xs">|</span>
                      <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
                        {vaga.tipo}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{vaga.desc}</p>
                <a
                  href="#candidatar"
                  className="group/btn inline-flex items-center gap-2 text-sm font-heading font-semibold text-brand-orange hover:text-brand-orange-hover transition-colors mt-auto"
                >
                  Candidatar-se
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 p-6 bg-white border border-gray-200 rounded-lg flex flex-col sm:flex-row items-center gap-4 justify-center text-center sm:text-left"
          >
            <p className="text-sm text-gray-600">
              Não encontrou a vaga ideal? Envie seu currículo espontâneo.
            </p>
            <a
              href="#candidatar"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-100 border border-gray-200 text-black font-heading text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200"
            >
              Currículo Espontâneo
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 5. FORMULÁRIO DE CANDIDATURA + CONTATOS */}
      <section id="candidatar" className="py-24 px-6 relative overflow-hidden border-b border-gray-200 bg-white text-black">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Formulário */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3"
            >
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange">
                Formulário de Candidatura
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter leading-[1.05] text-black">
                Envie seu currículo.
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed max-w-[50ch]">
                Preencha os campos abaixo e clique em enviar. Sua candidatura será encaminhada via WhatsApp
                para nosso departamento de RH.
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-5 p-8 bg-white border border-gray-200 rounded-lg"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="bg-white border border-gray-200 rounded px-4 py-3 text-sm text-black placeholder:text-gray-600/40 focus:border-brand-orange focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white border border-gray-200 rounded px-4 py-3 text-sm text-black placeholder:text-gray-600/40 focus:border-brand-orange focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    required
                    value={formData.telefone}
                    onChange={handleChange}
                    className="bg-white border border-gray-200 rounded px-4 py-3 text-sm text-black placeholder:text-gray-600/40 focus:border-brand-orange focus:outline-none transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
                    Cargo Desejado *
                  </label>
                  <input
                    type="text"
                    name="cargo"
                    required
                    value={formData.cargo}
                    onChange={handleChange}
                    className="bg-white border border-gray-200 rounded px-4 py-3 text-sm text-black placeholder:text-gray-600/40 focus:border-brand-orange focus:outline-none transition-colors"
                    placeholder="Ex: Técnico Mecânico"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
                  Mensagem *
                </label>
                <textarea
                  name="mensagem"
                  required
                  rows={5}
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="bg-white border border-gray-200 rounded px-4 py-3 text-sm text-black placeholder:text-gray-600/40 focus:border-brand-orange focus:outline-none transition-colors resize-none"
                  placeholder="Conte sobre sua experiência, disponibilidade e link do seu LinkedIn..."
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consentimento}
                  onChange={(e) => setConsentimento(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-brand-orange shrink-0 cursor-pointer"
                />
                <span className="text-xs text-gray-600 leading-relaxed">
                  Concordo com o armazenamento dos meus dados para fins de recrutamento e seleção. (LGPD - Lei nº 13.709/2018)
                </span>
              </label>

              <button
                type="submit"
                disabled={!consentimento}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-orange hover:bg-brand-orange-hover active:scale-[0.98] text-white font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200 mt-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-brand-orange"
              >
                Enviar Candidatura
                <WhatsappLogo size={16} className="group-hover:scale-110 transition-transform" />
              </button>
            </motion.form>
          </div>

          {/* Contatos RH */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3"
            >
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange">
                Departamento de RH
              </span>
              <h3 className="font-heading text-2xl font-extrabold tracking-tighter leading-[1.05] text-black">
                Fale com o RH.
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Dúvidas sobre vagas ou processo seletivo? Entre em contato pelos canais abaixo.
              </p>
            </motion.div>

            {contatos.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-brand-orange/30 transition-all duration-300 flex items-center gap-5"
              >
                <div className="p-3 bg-white rounded border border-gray-200 text-brand-orange group-hover:bg-brand-orange/10 group-hover:border-brand-orange/30 transition-all duration-300 shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
                    {item.titulo}
                  </span>
                  <span className="font-heading text-sm font-bold tracking-tight text-black group-hover:text-brand-orange transition-colors break-words">
                    {item.valor}
                  </span>
                </div>
              </motion.a>
            ))}

            {/* WhatsApp Direto */}
            <motion.a
              href="https://wa.me/554733002250"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group p-6 bg-brand-orange/5 border border-brand-orange/20 rounded-lg flex items-center gap-5"
            >
              <div className="p-4 bg-brand-orange/10 rounded border border-brand-orange/30 text-brand-orange shrink-0">
                <WhatsappLogo size={28} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-base font-bold tracking-tight text-black">
                  WhatsApp do RH
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Fale diretamente com nosso time de Recursos Humanos.
                </p>
              </div>
              <ArrowUpRight size={20} className="text-gray-600 group-hover:text-brand-orange group-hover:translate-x-1 group-hover:-translate-y-1 transition-all ml-auto shrink-0" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* 6. CTA FINAL */}
      <section className="py-24 px-6 relative overflow-hidden bg-white text-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/3 rounded-full filter blur-[150px] pointer-events-none"></div>

        <div className="max-w-[800px] mx-auto relative z-10 flex flex-col items-center text-center gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter leading-[1.05] text-black"
          >
            Quer conhecer a Voltic?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-base text-gray-600 leading-relaxed max-w-[55ch]"
          >
            Veja nossos produtos e serviços para entender o que fazemos. Se fizer sentido para sua carreira,
            candidate-se.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <Link
              to="/bombahelicoidal"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-orange hover:bg-brand-orange-hover active:scale-[0.98] text-white font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200"
            >
              Ver Produtos
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/servicos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-gray-100 border border-gray-200 active:scale-[0.98] text-black font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200"
            >
              Nossos Serviços
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}