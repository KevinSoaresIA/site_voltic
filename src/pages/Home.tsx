import { Link } from "react-router-dom";
import { ArrowRight, Globe, Plant, Drop, Tree, ForkKnife, Flask, ArrowUpRight, Gear, Wrench, ShieldCheck, GraduationCap, Package, Ruler, Headset } from "@phosphor-icons/react";
import { motion } from "motion/react";
import bombaMontada from "../assets/images/bomba_montada.png";
import volticEmpresaLocal from "../assets/images/voltic_empresa_local.webp";
import homeHydroelectricPlant from "../assets/images/home-hydroelectric-plant.jpg";
import homeIndustryFactory from "../assets/images/home-industry-factory.jpg";
import homeLogisticsOperations from "../assets/images/home-logistics-operations.jpg";
import homeFiberglassPlant from "../assets/images/home-fiberglass-plant.jpg";
import homeFoodProcessingPlant from "../assets/images/home-food-processing-plant.jpg";
import homeSteelFactory from "../assets/images/home-steel-factory.jpg";
import homeLogoPartner1 from "../assets/images/home-logo-partner-1.png";
import homeLogoPjx from "../assets/images/home-logo-pjx.png";
import homeLogoMotorks from "../assets/images/home-logo-motorks.png";
import homeLogoNatura from "../assets/images/home-logo-natura.png";
import homeLogoPartner2 from "../assets/images/home-logo-partner-2.png";
import homeLogoDrivilux from "../assets/images/home-logo-drivilux.png";

export default function Home() {
  return (
    <div className="bg-brand-bg min-h-screen text-brand-text">
      {/* 1. HERO SECTION */}
      <section id="hero-section" className="relative overflow-hidden min-h-screen">
        <img src={bombaMontada} alt="Bomba Helicoidal Voltic" className="absolute inset-0 w-full h-full object-cover" />

        {/* BLOCO 1: TÍTULO + SUBTÍTULO NO TOPO ESQUERDO */}
        <div className="absolute z-10 top-24 left-8 md:top-32 md:left-16 max-w-[90vw] md:max-w-xl">
          <span className="text-black-500 text-lg md:text-xl font-bold tracking-widest uppercase mb-3 block">
            SISTEMAS DE BOMBEAMENTO INDUSTRIAL
          </span>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
            <span className="block whitespace-nowrap">Sua solução para bombeamento</span>
            <span className="block whitespace-nowrap">começa aqui</span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-100 leading-relaxed max-w-xs md:max-w-sm drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            Fabricação, dimensionamento, manutenção e assistência técnica para aplicações industriais complexas.
          </p>
        </div>

        {/* BLOCO 3: BOTÕES NO CANTO INFERIOR DIREITO */}
        <div className="absolute z-10 bottom-52 right-8 md:bottom-64 md:right-24 flex flex-col sm:flex-row gap-4 items-end">
          <a href="/bombahelicoidal" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
            Conhecer Produtos
            <span>→</span>
          </a>
          <a href="https://wa.me/554733002250" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center border border-orange-500/60 hover:border-orange-500 text-white font-bold px-6 py-3 rounded-lg transition-colors backdrop-blur-sm drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            Falar com um especialista
          </a>
        </div>
      </section>

      {/* 1B. COMO PODEMOS AJUDAR? */}
      <section className="py-24 px-6 relative overflow-hidden bg-white text-black border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-black"
            >
              Como podemos ajudar?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-gray-600 leading-relaxed"
            >
              Escolha o caminho que corresponde à sua necessidade.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                titulo: "Preciso de uma bomba nova",
                desc: "Conheça as linhas de bombas helicoidais fabricadas pela Voltic para aplicações industriais.",
                icon: <Package size={24} />,
                to: "/bombahelicoidal",
              },
              {
                titulo: "Preciso dimensionar uma aplicação",
                desc: "Envie os dados do seu processo e receba orientação técnica para o dimensionamento correto.",
                icon: <Ruler size={24} />,
                to: "/contato?assunto=Solicitação de Dimensionamento",
              },
              {
                titulo: "Preciso de manutenção ou reforma",
                desc: "Manutenção preventiva, corretiva e reforma de bombas helicoidais Voltic e de outras marcas.",
                icon: <Wrench size={24} />,
                to: "/servicos",
              },
              {
                titulo: "Preciso de assistência técnica",
                desc: "Fale com nossa equipe técnica para diagnóstico, suporte e acompanhamento de performance.",
                icon: <Headset size={24} />,
                to: "/contato?assunto=Assistência Técnica",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to={item.to}
                  className="group flex items-start gap-5 p-6 bg-white border border-gray-200 rounded-lg hover:border-brand-orange/30 transition-all duration-300 h-full"
                >
                  <div className="p-3 bg-white rounded border border-gray-200 text-brand-orange group-hover:bg-brand-orange/10 group-hover:border-brand-orange/30 transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <h3 className="font-heading text-base font-bold tracking-tight text-black group-hover:text-brand-orange transition-colors">
                      {item.titulo}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <ArrowUpRight size={20} className="text-gray-600 group-hover:text-brand-orange group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 mt-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. QUEM SOMOS SECTION (RESUMO) */}
      <section className="py-24 px-6 relative overflow-hidden bg-white text-black border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Image Support (col-span-5) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/3] rounded-lg border border-gray-200 bg-gray-50 flex flex-col items-center justify-center p-8 overflow-hidden group hover:border-brand-orange/30 transition-colors duration-300"
            >
              <img src={volticEmpresaLocal} alt="Voltic - engenharia e manufatura de bombas industriais" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/10 to-transparent opacity-50"></div>

              <div className="absolute top-4 left-4 font-mono text-[9px] text-white/70 uppercase tracking-widest z-10">
                VOLTIC.HQ // IND.AREA
              </div>

              {/* Frame Lines for Blueprint aesthetic */}
              <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-white/40 z-10"></div>
              <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-white/40 z-10"></div>
            </motion.div>
          </div>

          {/* Right: Copy & CTA (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left order-1 lg:order-2">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter leading-[1.05] text-black max-w-[20ch]"
            >
              Engenharia robusta desenvolvida para seus desafios hidráulicos.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-gray-600 leading-relaxed max-w-[60ch]"
            >
              A Voltic une experiência técnica avançada e inovação constante no desenvolvimento de projetos exclusivos de Bombas Helicoidais. Fabricamos soluções customizadas sob medida que proporcionam maior durabilidade e facilidade de manutenção para as indústrias mais exigentes do país.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2"
            >
              <Link
                to="/quemsomos"
                className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider text-brand-orange hover:text-brand-orange-hover transition-colors group"
              >
                Saiba Mais Sobre Nós
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. O QUE FAZEMOS SECTION (SEGMENTOS) */}
      <section className="py-24 px-6 relative overflow-hidden border-b border-gray-200 bg-white text-black">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none"></div>

        {/* Decorative Background Image */}
        <img src={homeLogisticsOperations} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.04] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange"
            >
              Segmentos de Atuação
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter leading-none text-black"
            >
              Soluções robustas para os principais setores.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-gray-600 leading-relaxed max-w-[60ch]"
            >
              Nossas bombas helicoidais são projetadas para atender às demandas de bombeamento mais severas em diferentes processos industriais.
            </motion.p>
          </div>

          {/* Grid of 6 Segment Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Meio Ambiente e Energia",
                desc: "Tratamento de efluentes sanitários e industriais, bombeamento de lodos densos e resíduos para biogás.",
                icon: <Globe size={24} />,
                image: homeHydroelectricPlant,
                delay: 0.05
              },
              {
                title: "Usinas de Açúcar e Álcool",
                desc: "Movimentação eficiente de caldos, melaço, leveduras, vinhaça e outros fluidos viscosos do setor sucroenergético.",
                icon: <Plant size={24} />,
                image: homeFiberglassPlant,
                delay: 0.1
              },
              {
                title: "Petrolífera",
                desc: "Bombeamento multifásico de petróleo bruto, lamas de perfuração pesadas e lodos de refinaria abrasivos.",
                icon: <Drop size={24} />,
                image: homeIndustryFactory,
                delay: 0.15
              },
              {
                title: "Papel e Celulose",
                desc: "Processamento de massas de papel de alta densidade, amidos, caolim, licores químicos e pastas celulósicas.",
                icon: <Tree size={24} />,
                image: homeIndustryFactory,
                delay: 0.2
              },
              {
                title: "Têxtil e Alimentícia",
                desc: "Transferência suave e higiênica de corantes, polpas de frutas, óleos vegetais e massas densas sem cisalhamento.",
                icon: <ForkKnife size={24} />,
                image: homeFoodProcessingPlant,
                delay: 0.25
              },
              {
                title: "Química",
                desc: "Manuseio seguro de produtos químicos agressivos, ácidos, bases, fluidos voláteis e solventes industriais corrosivos.",
                icon: <Flask size={24} />,
                image: homeSteelFactory,
                delay: 0.3
              }
            ].map((segment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: segment.delay, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-[280px] rounded-lg border border-gray-200 bg-white flex flex-col justify-between p-6 overflow-hidden hover:border-brand-orange/30 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
              >
                <img src={segment.image} alt={segment.title} className="absolute inset-0 w-full h-full object-cover z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/80 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

                {/* Top Section: Icon & Header */}
                <div className="relative z-20 flex justify-between items-start">
                  <div className="p-3 bg-brand-bg/80 rounded border border-brand-border text-brand-orange group-hover:border-brand-orange/30 transition-all duration-300">
                    {segment.icon}
                  </div>
                  <ArrowUpRight size={18} className="text-brand-muted/30 group-hover:text-brand-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>

                {/* Bottom Section: Copy */}
                <div className="relative z-20 flex flex-col gap-2 mt-auto">
                  <h3 className="font-heading text-lg font-bold tracking-tight text-brand-text">
                    {segment.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed max-w-[280px]">
                    {segment.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA under grid */}
          <div className="flex justify-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 px-6 py-3 border border-brand-orange hover:bg-brand-orange/10 active:scale-[0.98] text-black font-heading text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200"
              >
                Conhecer Soluções e Serviços
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SERVIÇOS SECTION (RESUMO) */}
      <section className="py-24 px-6 relative overflow-hidden bg-brand-card/20 border-b border-brand-border">
        {/* Subtle decorative glow */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-orange/2 rounded-full filter blur-[120px] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Headline, Desc, CTA and a Visual Thumbnail */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6 text-left">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter leading-[1.05] text-brand-text"
            >
              Oferecemos uma ampla gama de serviços em bombeamento.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-brand-muted leading-relaxed"
            >
              Nossa engenharia oferece suporte em todas as fases da operação, desde o desenvolvimento de novos equipamentos até a reforma completa e assistência técnica local especializada.
            </motion.p>

            {/* Visual Thumbnail */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full aspect-[16/9] rounded-lg border border-brand-border bg-brand-bg/50 overflow-hidden flex flex-col items-center justify-center p-4 relative group hover:border-brand-orange/20 transition-colors"
            >
              <img src={homeFiberglassPlant} alt="Suporte técnico e manutenção Voltic" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 to-transparent z-10"></div>

              <div className="absolute top-2 left-3 font-mono text-[8px] text-white/70 uppercase tracking-widest z-20">
                TECH.DIAGNOSTICS // V.SERVICE
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2"
            >
              <Link
                to="/servicos"
                className="group inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider text-brand-orange hover:text-white transition-colors"
              >
                Ver Detalhes dos Serviços
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: 4 Service Items Staggered */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {[
              {
                title: "Fabricação Própria",
                desc: "Desenvolvimento de bombas helicoidais com alta tecnologia, precisão dimensional e materiais de alta resistência sob especificações de projeto nacional.",
                icon: <Gear size={22} />,
                delay: 0.05
              },
              {
                title: "Manutenção e Reforma",
                desc: "Serviços de manutenção preventiva e corretiva e reforma estrutural completa de bombas helicoidais de marcas líderes, reestabelecendo a confiabilidade original.",
                icon: <Wrench size={22} />,
                delay: 0.1
              },
              {
                title: "Assistência Técnica",
                desc: "Equipe técnica de engenharia capacitada para inspeções detalhadas, diagnósticos hidráulicos e suporte local ou remoto com agilidade.",
                icon: <ShieldCheck size={22} />,
                delay: 0.15
              },
              {
                title: "Start Up e Treinamentos",
                desc: "Acompanhamento no processo de instalação, comissionamento e startup de sistemas, além de treinamentos específicos para capacitar operadores.",
                icon: <GraduationCap size={22} />,
                delay: 0.2
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: service.delay, ease: [0.16, 1, 0.3, 1] }}
                className="group flex gap-4 p-5 bg-brand-bg/40 border border-brand-border rounded-lg hover:border-brand-orange/30 transition-all duration-300 hover:bg-brand-card/40"
              >
                {/* Icon Column */}
                <div className="p-3 bg-brand-card rounded border border-brand-border text-brand-orange group-hover:bg-brand-orange/10 group-hover:border-brand-orange/30 transition-all duration-300 shrink-0 h-fit">
                  {service.icon}
                </div>

                {/* Content Column */}
                <div className="flex flex-col gap-1 text-left">
                  <h3 className="font-heading text-base font-bold tracking-tight text-brand-text group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed max-w-[550px]">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CLIENTES SECTION */}
      <section className="py-24 px-6 relative overflow-hidden bg-white text-black">
        <div className="max-w-[1400px] mx-auto relative z-10">

          {/* Section Header */}
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tighter text-gray-600 uppercase"
            >
              Empresas que já confiaram em soluções da Voltic
            </motion.h2>
            <div className="w-12 h-0.5 bg-brand-orange/40 mt-1"></div>
          </div>

          {/* Grid of Client Logos (6 brands) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[
              {
                name: "Fakini Têxtil",
                logo: homeLogoPartner1
              },
              {
                name: "Natura",
                logo: homeLogoNatura
              },
              {
                name: "Drivilux",
                logo: homeLogoDrivilux
              },
              {
                name: "MotorKS",
                logo: homeLogoMotorks
              },
              {
                name: "PJX Log",
                logo: homeLogoPjx
              },
              {
                name: "V-Tech",
                logo: homeLogoPartner2
              }
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="w-full flex items-center justify-center p-6 rounded bg-gray-50 border border-transparent hover:border-brand-orange/60 hover:bg-white hover:shadow-[0_0_20px_-2px_rgba(249,115,22,0.5)] transition-all duration-300 cursor-pointer"
                title={client.name}
              >
                <img src={client.logo} alt={client.name} className="w-full max-w-[130px] max-h-8 object-contain brightness-0 opacity-50 hover:opacity-90 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
