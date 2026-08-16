import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  Envelope,
  MapPin,
  Clock,
  WhatsappLogo,
} from "@phosphor-icons/react";

const contatos = [
  {
    titulo: "Telefone",
    valor: "(47) 3300-2250",
    sub: "Atendimento comercial e técnico",
    link: "tel:+554733002250",
    icon: <Phone size={20} />,
  },
  {
    titulo: "E-mail",
    valor: "vendas@voltic.com.br",
    sub: "Retorno inicial em até 24 horas úteis",
    link: "mailto:vendas@voltic.com.br",
    icon: <Envelope size={20} />,
  },
  {
    titulo: "Endereço",
    valor: "Acesso leste Rio dos Cedros AE-110A, 4900",
    sub: "Galpão 2 - Rio dos Cedros - SC — CEP: 89121-000",
    link: "#",
    icon: <MapPin size={20} />,
  },
  {
    titulo: "Horário",
    valor: "Seg a Sex: 07:30 às 17:30",
    sub: "",
    link: "#",
    icon: <Clock size={20} />,
  },
];

const assuntos = [
  "Solicitação de Dimensionamento",
  "Manutenção e Peças",
  "Assistência Técnica",
  "Projetos Customizados",
  "Outros Assuntos",
];

export default function Contato() {
  const [searchParams] = useSearchParams();
  const assuntoUrl = searchParams.get("assunto");
  const assuntoInicial = assuntos.includes(assuntoUrl ?? "") ? (assuntoUrl as string) : assuntos[0];

  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    assunto: assuntoInicial,
    mensagem: "",
  });
  const [consentimento, setConsentimento] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `*Nova Solicitação - Site Voltic*\n\n*Nome:* ${formData.nome}\n*Empresa:* ${formData.empresa}\n*E-mail:* ${formData.email}\n*Telefone:* ${formData.telefone}\n*Assunto:* ${formData.assunto}\n\n*Mensagem:*\n${formData.mensagem}`
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
            Contato // Fale Conosco
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] text-gradient"
          >
            Vamos conversar.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-brand-muted leading-relaxed max-w-[55ch]"
          >
            Precisa de um orçamento, suporte técnico ou consultoria de engenharia? Preencha o formulário.
            Retorno inicial em até 24 horas úteis. Para emergências, ligue diretamente.
          </motion.p>
        </div>
      </section>

      {/* 2. CARDS DE CONTATO */}
      <section className="py-20 px-6 relative overflow-hidden border-b border-gray-200 bg-white text-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contatos.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-brand-orange/30 transition-all duration-300 flex flex-col gap-3"
              >
                <div className="p-3 bg-white rounded border border-gray-200 text-brand-orange group-hover:bg-brand-orange/10 group-hover:border-brand-orange/30 transition-all duration-300 w-fit">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
                    {item.titulo}
                  </span>
                  <span className="font-heading text-sm font-bold tracking-tight text-black group-hover:text-brand-orange transition-colors break-words">
                    {item.valor}
                  </span>
                  <span className="text-xs text-gray-600">{item.sub}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FORMULÁRIO + MAPA */}
      <section className="py-24 px-6 relative overflow-hidden border-b border-gray-200 bg-white text-black">
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
                Formulário de Contato
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter leading-[1.05] text-black">
                Envie sua solicitação.
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed max-w-[50ch]">
                Preencha os campos abaixo e clique em enviar. Sua mensagem será encaminhada via WhatsApp
                para nossa equipe comercial. Retorno inicial em até 24 horas úteis.
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
                    Empresa *
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    required
                    value={formData.empresa}
                    onChange={handleChange}
                    className="bg-white border border-gray-200 rounded px-4 py-3 text-sm text-black placeholder:text-gray-600/40 focus:border-brand-orange focus:outline-none transition-colors"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
                  Assunto *
                </label>
                <select
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  className="bg-white border border-gray-200 rounded px-4 py-3 text-sm text-black focus:border-brand-orange focus:outline-none transition-colors cursor-pointer"
                >
                  {assuntos.map((assunto, i) => (
                    <option key={i} value={assunto}>
                      {assunto}
                    </option>
                  ))}
                </select>
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
                  placeholder="Descreva sua necessidade: tipo de fluido, vazão, pressão, aplicação..."
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
                  Concordo com o tratamento dos meus dados para fins de contato comercial. (LGPD - Lei nº 13.709/2018)
                </span>
              </label>

              <button
                type="submit"
                disabled={!consentimento}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-orange hover:bg-brand-orange-hover active:scale-[0.98] text-white font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200 mt-2 disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed disabled:active:scale-100 disabled:hover:bg-gray-200"
              >
                Enviar solicitação
                <WhatsappLogo size={16} className="group-hover:scale-110 transition-transform" />
              </button>

              {!consentimento && (
                <p className="text-xs text-brand-orange leading-relaxed -mt-2">
                  Marque a caixa acima para habilitar o envio.
                </p>
              )}

              <p className="text-xs text-gray-600 leading-relaxed -mt-2">
                Retorno inicial em até 24 horas úteis.
              </p>

              <p className="text-xs text-gray-600/70 leading-relaxed">
                Ao enviar, você concorda que seus dados serão utilizados exclusivamente para responder à sua
                solicitação. Não compartilhamos suas informações com terceiros.
              </p>
            </motion.form>
          </div>

          {/* Mapa / Info Lateral */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/3] rounded-lg border border-gray-200 bg-white overflow-hidden group hover:border-brand-orange/30 transition-colors duration-300"
            >
              <iframe
                title="Localização Voltic - Rio dos Cedros/SC"
                src="https://www.google.com/maps?q=Acesso+leste+Rio+dos+Cedros+AE-110A,+4900,+Galp%C3%A3o+2,+Rio+dos+Cedros+-+SC,+89121-000&output=embed"
                className="absolute inset-0 w-full h-full border-0 grayscale-[20%] contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 left-4 font-mono text-[9px] text-white/70 bg-black/50 px-2 py-1 rounded uppercase tracking-widest pointer-events-none">
                VOLTIC.HQ // MAPA
              </div>
              <div className="absolute bottom-4 right-4 font-mono text-[9px] text-white/70 bg-black/50 px-2 py-1 rounded uppercase tracking-widest pointer-events-none">
                RIO DOS CEDROS // SC
              </div>
            </motion.div>

            {/* WhatsApp direto */}
            <motion.a
              href="https://wa.me/554733002250"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-brand-orange/30 transition-all duration-300 flex items-center gap-5"
            >
              <div className="p-4 bg-white rounded border border-gray-200 text-brand-orange group-hover:bg-brand-orange/10 group-hover:border-brand-orange/30 transition-all duration-300 shrink-0">
                <WhatsappLogo size={28} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-base font-bold tracking-tight text-black group-hover:text-brand-orange transition-colors">
                  Falar pelo WhatsApp
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Prefere conversar agora? Clique e fale com nosso time comercial pelo WhatsApp.
                </p>
              </div>
              <ArrowUpRight size={20} className="text-gray-600 group-hover:text-brand-orange group-hover:translate-x-1 group-hover:-translate-y-1 transition-all ml-auto shrink-0" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* 4. CTA FINAL */}
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
            Prefere ver os equipamentos primeiro?
          </motion.h2>
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