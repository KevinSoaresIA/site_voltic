import { motion } from "motion/react";
import { Breadcrumb } from "../components/Breadcrumb";
import { SectionNav } from "../components/SectionNav";
import { ArrowRight, ArrowUpRight, WhatsappLogo, Gear, Shield, Sun, Wind, Lightning, Drop, Gauge, Circuitry, Wrench, Eye, Cube, Leaf } from "@phosphor-icons/react";
import skids1 from "../assets/images/skids-1.jpeg";
import skids2 from "../assets/images/skids-2.jpeg";

const caracteristicas = [
    { icon: <Circuitry size={24} />, titulo: "Sistema PLUG & PLAY", desc: "Solução completa e pronta com bomba(s), painel elétrico, tubulações, válvulas e filtros — basta acoplar na linha de injeção e ligar." },
    { icon: <Shield size={24} />, titulo: "Estrutura Modular", desc: "Perfis de aço soldado, revestido com tinta epóxi e poliuretano para proteção. Tubulação em aço inoxidável." },
    { icon: <Leaf size={24} />, titulo: "Proteção Ambiental", desc: "Recipiente anti-derramamento (bacia de contenção) com capacidade superior ao tanque IBC de químico." },
    { icon: <Cube size={24} />, titulo: "Tanque IBC Integrado", desc: "Tanque IBC de químico com plataforma e escada lateral opcional para enchimento." },
];

const acionamentos = [
    { icon: <Lightning size={24} />, nome: "Rede Elétrica" },
    { icon: <Sun size={24} />, nome: "Energia Solar" },
    { icon: <Wind size={24} />, nome: "Energia Eólica" },
    { icon: <Gear size={24} />, nome: "Híbrido (Solar + Eólico)" },
    { icon: <Wrench size={24} />, nome: "Pneumático" },
];

const opcionais = [
    { icon: <Circuitry size={24} />, nome: "Monitoramento e controle a distância" },
    { icon: <Gear size={24} />, nome: "Automação conforme necessidade do cliente" },
    { icon: <Circuitry size={24} />, nome: "Painéis individuais de controle e potência" },
    { icon: <Gauge size={24} />, nome: "Transmissor de pressão na injeção para alarme" },
    { icon: <Eye size={24} />, nome: "Transmissor de nível eletrônico contínuo" },
    { icon: <Gauge size={24} />, nome: "Válvula de alívio e manômetro" },
    { icon: <Drop size={24} />, nome: "Válvula de injeção" },
    { icon: <Wrench size={24} />, nome: "Válvulas de controle para filtro e medidor" },
    { icon: <Cube size={24} />, nome: "Tanque IBC" },
    { icon: <Shield size={24} />, nome: "Bacia anti-derramamento" },
    { icon: <Wrench size={24} />, nome: "Plataforma com escada lateral" },
    { icon: <Gauge size={24} />, nome: "Medidor de vazão eletrônico ou manual" },
];

export default function SkidsDosagem() {
    return (
        <div className="bg-brand-bg text-brand-text pt-16">
            {/* Hero */}
            <section className="py-16 px-6">
                <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col gap-6"
                    >
                        <Breadcrumb current="Skids de Dosagem" />
                        <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full border border-brand-orange/20 w-fit">
                            Linha de Produtos // Skids de Dosagem
                        </div>
                        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tighter leading-[1.05]">
                            Skids de Dosagem
                        </h1>
                        <p className="text-base text-brand-muted max-w-[60ch] leading-relaxed">
                            Equipamentos especialmente projetados para oferecer um sistema completo de dosagem com todos os acessórios e a estrutura necessária.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <a
                                href="#caracteristicas"
                                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-orange hover:bg-brand-orange-hover active:scale-[0.98] text-white font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200"
                            >
                                Ver Características
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="https://wa.me/554733002250"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-card hover:bg-zinc-800 border border-brand-border active:scale-[0.98] text-brand-text font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200"
                            >
                                Solicitar Dimensionamento
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full aspect-[3/4] rounded-lg border border-brand-border overflow-hidden"
                    >
                        <img src={skids1} alt="Skid de Dosagem Voltic" className="w-full h-full object-cover" />
                    </motion.div>
                </div>
            </section>

            <SectionNav items={[
                { id: "sobre", label: "Sobre" },
                { id: "caracteristicas", label: "Características" },
                { id: "acionamentos", label: "Acionamentos" },
                { id: "opcionais", label: "Opcionais" },
            ]} />

            {/* Sobre */}
            <section id="sobre" className="py-20 px-6 bg-white border-y border-gray-200 text-black">
                <div className="max-w-[800px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full border border-brand-orange/20">
                            Sobre os Skids de Dosagem
                        </span>
                        <h2 className="font-heading text-3xl font-extrabold tracking-tighter mt-4 mb-6">
                            Soluções completas PLUG & PLAY.
                        </h2>
                        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                            <p>
                                Os Skids são equipamentos especialmente projetados para oferecer um sistema completo de dosagem que forneça todos os acessórios e a estrutura necessária na área de trabalho requerida.
                            </p>
                            <p>
                                Também chamados de soluções <strong className="text-black">PLUG & PLAY</strong>, têm como finalidade proporcionar uma solução completa e pronta com a(s) bomba(s), painel elétrico, tubulações, válvulas e filtros, tanque IBC de químico, medidor de vazão, medidor de nível de químico, com opcionais como válvula de alívio e sistema de monitoramento e controle a distância.
                            </p>
                            <p>
                                Para acionar as bombas e o sistema de controle, oferecemos diversas formas de energia — inclusive em locais sem disponibilidade de rede elétrica, através de <strong className="text-black">energias renováveis</strong> como painel solar e baterias, sistema híbrido (eólico + solar) ou apenas eólico.
                            </p>
                        </div>
                        <div className="mt-6 rounded-lg border border-gray-200 overflow-hidden">
                            <img src={skids2} alt="Skid de Dosagem em operação" className="w-full h-auto object-cover" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Características */}
            <section id="caracteristicas" className="py-20 px-6 bg-white text-black">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full border border-brand-orange/20">
                            Características Principais
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4">
                            Estrutura robusta e protegida.
                        </h2>
                        <p className="text-sm text-gray-600 max-w-[60ch] mx-auto leading-relaxed">
                            Sistema modular construído com perfis de aço soldado, revestido para proteção com tinta epóxi e poliuretano.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {caracteristicas.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="p-6 bg-white border border-gray-200 rounded-lg hover:border-brand-orange/30 transition-colors"
                            >
                                <div className="text-brand-orange mb-3">{item.icon}</div>
                                <h3 className="font-heading text-sm font-bold mb-2 leading-tight">{item.titulo}</h3>
                                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Acionamentos */}
            <section id="acionamentos" className="py-20 px-6 bg-white border-y border-gray-200 text-black">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full border border-brand-orange/20">
                            Formas de Acionamento
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4">
                            Energia em qualquer cenário.
                        </h2>
                        <p className="text-sm text-gray-600 max-w-[60ch] mx-auto leading-relaxed">
                            Soluções para locais com ou sem disponibilidade de rede elétrica, incluindo energias renováveis.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        {acionamentos.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="flex flex-col items-center gap-3 p-6 bg-white border border-gray-200 rounded-lg hover:border-brand-orange/30 transition-colors"
                            >
                                <div className="text-brand-orange">{item.icon}</div>
                                <span className="text-xs font-heading font-bold text-center leading-tight">{item.nome}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Opcionais */}
            <section id="opcionais" className="py-20 px-6 bg-white text-black">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full border border-brand-orange/20">
                            Características e Opcionais
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4">
                            Automação e controle completos.
                        </h2>
                        <p className="text-sm text-gray-600 max-w-[60ch] mx-auto leading-relaxed">
                            Diversos opcionais para monitoramento, controle, medição e proteção do sistema de dosagem.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {opcionais.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="flex items-center gap-3 p-5 bg-white border border-gray-200 rounded-lg hover:border-brand-orange/30 transition-colors"
                            >
                                <div className="text-brand-orange shrink-0">{item.icon}</div>
                                <span className="text-xs font-heading font-bold leading-tight">{item.nome}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 px-6 bg-white border-t border-gray-200 text-black">
                <div className="max-w-[800px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter">
                            Precisa de um Skid sob medida?
                        </h2>
                        <p className="text-sm text-gray-600 max-w-[50ch] leading-relaxed">
                            Entre em contato com nossa equipe técnica para projetar o Skid de dosagem ideal para sua aplicação.
                        </p>
                        <a
                            href="https://wa.me/554733002250"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-orange hover:bg-brand-orange-hover active:scale-[0.98] text-white font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200"
                        >
                            <WhatsappLogo size={16} />
                            Fale Conosco
                            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}