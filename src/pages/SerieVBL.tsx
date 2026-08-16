
import { motion } from "motion/react";
import { Breadcrumb } from "../components/Breadcrumb";
import { SectionNav } from "../components/SectionNav";
import { ArrowRight, ArrowUpRight, WhatsappLogo, Gauge, Thermometer, Drop, TrendUp, Medal, Gear, ArrowsLeftRight, CheckCircle, TestTube, Flask, ForkKnife, PaintBucket } from "@phosphor-icons/react";
import serieVblDireita from "../assets/images/serie-vbl-direita.png";
import serieVblCorte from "../assets/images/serie-vbl-corte.png";
import serieVblEsquerda from "../assets/images/serie-vbl-esquerda.png";

const specs = [
    { icon: <Gauge size={28} />, label: "Vazão", value: "até 45 m³/h" },
    { icon: <Thermometer size={28} />, label: "Temperatura", value: "até 150°C" },
    { icon: <Drop size={28} />, label: "Pressão", value: "até 20 bar" },
    { icon: <TrendUp size={28} />, label: "Altura", value: "até 204 metros" },
    { icon: <TestTube size={28} />, label: "Viscosidade", value: "até 1.000.000 cp" },
    { icon: <ArrowsLeftRight size={28} />, label: "Rotação", value: "Bidirecional" },
];

const aplicacoes = [
    { icon: <PaintBucket size={24} />, nome: "Cosméticos" },
    { icon: <ForkKnife size={24} />, nome: "Laticínios" },
    { icon: <Flask size={24} />, nome: "Alimentos pastosos" },
    { icon: <TestTube size={24} />, nome: "Indústria farmacêutica" },
    { icon: <Drop size={24} />, nome: "Óleos" },
];

const benefícios = [
    { titulo: "Fácil Manutenção", desc: "Acesso rápido aos rotores e selos mecânicos sem necessidade de ferramentas especiais." },
    { titulo: "Operação Simples", desc: "Design intuitivo que permite operação eficiente com mínimo treinamento." },
    { titulo: "Bombeamento Bidirecional", desc: "Possibilidade de reversão do fluxo, permitindo descarga e sucção em ambos os sentidos." },
    { titulo: "Alta Viscosidade", desc: "Capacidade de lidar com fluidos pastosos e abrasivos de até 1.000.000 cp." },
    { titulo: "Construção Sanitária", desc: "Totalmente em Aço Inoxidável com acabamento 32 Ra para aplicações sanitárias." },
    { titulo: "Certificação 3-A", desc: "Padrões sanitários para manuseio de produtos lácteos e alimentícios." },
];

export default function SerieVBL() {
    return (
        <div className="bg-brand-bg text-brand-text pt-16">
            {/* Hero */}
            <section className="py-16 px-6">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col gap-6"
                    >
                        <Breadcrumb current="Série VBL" />
                        <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full border border-brand-orange/20 w-fit">
                            Linha de Produtos // Série VBL
                        </div>
                        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tighter leading-[1.05]">
                            Bombas de Lóbulos
                        </h1>
                        <p className="text-base text-brand-muted max-w-[60ch] leading-relaxed">
                            A série VBL é uma excelente opção de bombeamento com fácil manutenção e operação simples. Ideal para aplicações em fluidos pastosos e alta viscosidade.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <a
                                href="#especificacoes"
                                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-orange hover:bg-brand-orange-hover active:scale-[0.98] text-white font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200"
                            >
                                Ver Especificações
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
                </div>
            </section>

            <SectionNav items={[
                { id: "sobre", label: "Sobre" },
                { id: "materiais", label: "Materiais" },
                { id: "aplicacoes", label: "Aplicações" },
                { id: "diferenciais", label: "Diferenciais" },
            ]} />

            {/* Sobre */}
            <section id="sobre" className="py-20 px-6 bg-white border-y border-gray-200 text-black">
                <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full border border-brand-orange/20">
                            Sobre a Série VBL
                        </span>
                        <h2 className="font-heading text-3xl font-extrabold tracking-tighter mt-4 mb-6">
                            Versatilidade para fluidos exigentes.
                        </h2>
                        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                            <p>
                                Ideal para aplicações em fluidos pastosos e alta viscosidades, até 1.000.000 cp e fluidos abrasivos. Tem a característica de bombeamento bidirecional.
                            </p>
                            <p>
                                A Série VBL é fabricada totalmente em Aço Inoxidável. Todos os componentes em contato com o fluido são fabricados em <strong className="text-black">Aço Inoxidável 316L</strong> e os componentes sem contato com o fluido são fabricados em <strong className="text-black">Aço Inoxidável 304</strong>.
                            </p>
                            <p>
                                O acabamento superficial em todos os componentes em contato com o fluido é de <strong className="text-black">32 Ra</strong> (micro polegadas). Pode ser fabricada com diferentes tipos de Selos Mecânicos e configurações de Rotores para atender uma variedade de aplicações sanitárias.
                            </p>
                        </div>
                    </motion.div>

                    {/* Especificações */}
                    <motion.div
                        id="especificacoes"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-white border border-gray-200 rounded-lg p-6"
                    >
                        <h3 className="font-heading text-sm font-bold uppercase tracking-wider mb-6 text-brand-orange">
                            Especificações Técnicas
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {specs.map((spec, i) => (
                                <div key={i} className="flex flex-col gap-2 p-4 bg-white border border-gray-200 rounded-lg">
                                    <div className="text-brand-orange">{spec.icon}</div>
                                    <span className="text-[10px] uppercase tracking-wider text-gray-600 font-mono">{spec.label}</span>
                                    <span className="text-sm font-heading font-bold">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Construção e Materiais */}
            <section id="materiais" className="py-20 px-6 bg-white text-black">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full border border-brand-orange/20">
                            Construção e Materiais
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4">
                            Engenharia de precisão sanitária.
                        </h2>
                        <p className="text-sm text-gray-600 max-w-[60ch] mx-auto leading-relaxed">
                            Cada componente é fabricado com materiais certificados para atender os mais rigorosos padrões sanitários e industriais.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative overflow-hidden p-6 bg-white border border-gray-200 rounded-lg"
                        >
                            <img src={serieVblDireita} alt="Série VBL vista direita" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                            <div className="relative z-10">
                                <Gear size={32} className="text-brand-orange mb-4" />
                                <h3 className="font-heading text-sm font-bold mb-2">Componentes Sanitários</h3>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    Componentes em contato com o fluido em Aço Inoxidável 316L. Componentes sem contato em Aço Inoxidável 304.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                            className="relative overflow-hidden p-6 bg-white border border-gray-200 rounded-lg"
                        >
                            <img src={serieVblCorte} alt="Série VBL corte técnico" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                            <div className="relative z-10">
                                <CheckCircle size={32} className="text-brand-orange mb-4" />
                                <h3 className="font-heading text-sm font-bold mb-2">Acabamento Superficial</h3>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    Acabamento de 32 Ra (micro polegadas) em todos os componentes em contato com o fluido.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="relative overflow-hidden p-6 bg-white border border-gray-200 rounded-lg"
                        >
                            <img src={serieVblEsquerda} alt="Série VBL vista esquerda" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                            <div className="relative z-10">
                                <Medal size={32} className="text-brand-orange mb-4" />
                                <h3 className="font-heading text-sm font-bold mb-2">Certificação 3-A</h3>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    Certificado nº 1004 sob o padrão 02-11 — Padrões sanitários para bombas de deslocamento positivo para manuseio de produtos lácteos.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Aplicações */}
            <section id="aplicacoes" className="py-20 px-6 bg-white border-y border-gray-200 text-black">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full border border-brand-orange/20">
                            Principais Aplicações
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4">
                            Segmentos atendidos pela Série VBL.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        {aplicacoes.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="flex flex-col items-center gap-3 p-6 bg-white border border-gray-200 rounded-lg hover:border-brand-orange/30 transition-colors"
                            >
                                <div className="text-brand-orange">{item.icon}</div>
                                <span className="text-sm font-heading font-bold text-center">{item.nome}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefícios */}
            <section id="diferenciais" className="py-20 px-6 bg-white text-black">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full border border-brand-orange/20">
                            Por que escolher a VBL
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4">
                            Diferenciais da Série VBL.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {benefícios.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="p-6 bg-white border border-gray-200 rounded-lg hover:border-brand-orange/30 transition-colors"
                            >
                                <CheckCircle size={24} className="text-brand-orange mb-3" />
                                <h3 className="font-heading text-sm font-bold mb-2 leading-tight">{item.titulo}</h3>
                                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
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
                            Precisa de uma solução sob medida?
                        </h2>
                        <p className="text-sm text-gray-600 max-w-[50ch] leading-relaxed">
                            Entre em contato com nossa equipe técnica para dimensionar a bomba ideal para sua aplicação.
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