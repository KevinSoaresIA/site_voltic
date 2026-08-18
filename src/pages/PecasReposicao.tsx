import { motion } from "motion/react";
import { Breadcrumb } from "../components/Breadcrumb";
import { SectionNav } from "../components/SectionNav";
import { ArrowRight, ArrowUpRight, WhatsappLogo, Gear, Drop, Cube, Wrench, ShieldCheck, Package, Ruler, Truck, CheckCircle, Headset } from "@phosphor-icons/react";

const componentes = [
    {
        icon: <Gear size={24} />,
        titulo: "Rotor",
        desc: "Essencial para o funcionamento eficiente e preciso da bomba. Usinado a partir de barra maciça de aço, com tratamento térmico para máxima resistência à abrasão.",
        materiais: "Aço Inox 304 / 316 / 420, Aço D6 (VC131)",
    },
    {
        icon: <Drop size={24} />,
        titulo: "Estator",
        desc: "Fabricado em borracha vulcanizada sobre um tubo metálico, selecionado conforme o fluido bombeado e a aplicação industrial.",
        materiais: "NBR, EPDM, Poliuretano, Viton (FKM)",
    },
    {
        icon: <Cube size={24} />,
        titulo: "Corpo da Bomba",
        desc: "Corpos microfundidos em nossa própria unidade fabril, com diversos tipos de material e tratamento de superfície para resistir à corrosão e à abrasão.",
        materiais: "Ferro Fundido, Aço Carbono, Aço Inox 304 / 316",
    },
    {
        icon: <Wrench size={24} />,
        titulo: "Eixos de Acoplamento",
        desc: "Cardans localizados nas extremidades de entrada e saída da bomba. A Voltic fabrica diversos tipos de articulação, em materiais de alta resistência.",
        materiais: "Aço SAE 1045, Aço Inox 316",
    },
    {
        icon: <ShieldCheck size={24} />,
        titulo: "Selo Mecânico",
        desc: "Fabricado com tecnologia de ponta e materiais de alta qualidade, garante a vedação da bomba e a segurança da operação.",
        materiais: "Grafite/Silicone, Carbeto de Silício, Tungstênio",
    },
    {
        icon: <Package size={24} />,
        titulo: "Demais Componentes",
        desc: "Parafusos, buchas, mancais, retentores e outros itens de desgaste, disponíveis em estoque para reposição rápida.",
        materiais: "Conforme especificação do modelo",
    },
];

const beneficios = [
    { titulo: "Precisão de Fábrica", desc: "Peças usinadas com as mesmas tolerâncias dimensionais do projeto original, garantindo o encaixe perfeito.", icon: <Ruler size={20} /> },
    { titulo: "Prazos Competitivos", desc: "Fabricação própria reduz o tempo de entrega e os custos frente a peças importadas ou de terceiros.", icon: <Truck size={20} /> },
    { titulo: "Compatibilidade Garantida", desc: "Peças originais Voltic, compatíveis com toda a linha de bombas helicoidais fabricada pela empresa.", icon: <CheckCircle size={20} /> },
    { titulo: "Suporte Técnico Especializado", desc: "Equipe de engenharia disponível para identificar a peça correta a partir do modelo ou número de série da bomba.", icon: <Headset size={20} /> },
];

export default function PecasReposicao() {
    return (
        <div className="bg-brand-bg text-brand-text pt-16">
            {/* Hero */}
            <section className="py-16 px-6">
                <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7 flex flex-col gap-6"
                    >
                        <Breadcrumb current="Peças de Reposição" />
                        <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white bg-white/10 px-3 py-1.5 rounded-full border border-white/20 w-fit">
                            Linha de Produtos // Peças de Reposição
                        </div>
                        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
                            Peças de Reposição
                        </h1>
                        <p className="text-base md:text-lg text-brand-muted max-w-[60ch] leading-relaxed">
                            Rotores, estatores, selos mecânicos, cardans e demais componentes fabricados com a mesma
                            precisão de origem, para manter sua bomba helicoidal Voltic operando com performance e
                            confiabilidade originais.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <a
                                href="#componentes"
                                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-blue hover:bg-brand-blue-hover active:scale-[0.98] text-white font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200"
                            >
                                Ver Componentes
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="https://wa.me/554733002250"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-card hover:bg-zinc-800 border border-brand-border active:scale-[0.98] text-brand-text font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200"
                            >
                                Solicitar Peça
                            </a>
                        </div>
                    </motion.div>

                    {/* Visual */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full max-w-[450px] aspect-square rounded-lg border border-brand-border bg-brand-card/50 flex flex-col items-center justify-center p-8 overflow-hidden group hover:border-brand-blue/30 transition-colors duration-300"
                        >
                            {/* ASSET: reposicao-hero.jpg */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 to-transparent opacity-50"></div>
                            <div className="absolute top-4 left-4 font-mono text-[9px] text-brand-muted/40 uppercase tracking-widest">
                                PEÇAS // ORIGINAIS VOLTIC
                            </div>
                            <div className="absolute bottom-4 right-4 font-mono text-[9px] text-brand-muted/40 uppercase tracking-widest">
                                ESTOQUE // PRONTA ENTREGA
                            </div>
                            <div className="w-20 h-20 rounded-lg border border-brand-muted/30 flex items-center justify-center mb-4 group-hover:border-brand-blue/40 transition-colors duration-300">
                                <Package size={32} className="text-brand-muted/50" />
                            </div>
                            <span className="font-heading text-sm font-bold tracking-wider text-brand-text uppercase text-center block">
                                [ Peças de Reposição ]
                            </span>
                            <span className="font-mono text-[10px] text-brand-muted mt-2 text-center block max-w-[250px]">
                                Componentes originais para manutenção e reforma de bombas helicoidais Voltic.
                            </span>
                        </motion.div>
                    </div>
                </div>
            </section>

            <SectionNav items={[
                { id: "sobre", label: "Sobre" },
                { id: "componentes", label: "Componentes" },
                { id: "beneficios", label: "Benefícios" },
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
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                            Sobre as Peças de Reposição
                        </span>
                        <h2 className="font-heading text-3xl font-extrabold tracking-tighter mt-4 mb-6">
                            Sua bomba não para por falta de peça.
                        </h2>
                        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                            <p>
                                Toda a linha de bombas helicoidais Voltic é fabricada com peças de reposição disponíveis,
                                garantindo que a manutenção preventiva ou corretiva não dependa de importação ou de
                                fornecedores terceiros.
                            </p>
                            <p>
                                Os componentes são <strong className="text-black">fabricados em nossa própria unidade fabril</strong>,
                                com diversos tipos de materiais e tratamentos de superfície, oferecendo rotores com
                                maior precisão dimensional e garantindo custos competitivos e prazos de entrega mais ágeis.
                            </p>
                            <p>
                                Basta informar o modelo ou o número de série da sua bomba para que nossa equipe técnica
                                identifique exatamente a peça necessária.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Componentes */}
            <section id="componentes" className="py-20 px-6 bg-white text-black">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                            Componentes Disponíveis
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4">
                            Cada peça, sob medida para sua bomba.
                        </h2>
                        <p className="text-sm text-gray-600 max-w-[60ch] mx-auto leading-relaxed">
                            Selecionadas conforme o modelo, o fluido bombeado e as condições de operação da sua aplicação.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {componentes.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.06 }}
                                className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-brand-blue/30 transition-colors"
                            >
                                <div className="p-2.5 w-fit rounded border border-gray-200 text-brand-blue group-hover:bg-brand-blue/10 group-hover:border-brand-blue/30 transition-all duration-300 mb-3">
                                    {item.icon}
                                </div>
                                <h3 className="font-heading text-base font-bold tracking-tight mb-2">{item.titulo}</h3>
                                <p className="text-xs text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                                <p className="font-mono text-[10px] text-gray-500 uppercase tracking-wide border-t border-gray-100 pt-3">
                                    {item.materiais}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefícios */}
            <section id="beneficios" className="py-20 px-6 bg-white border-y border-gray-200 text-black">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                            Por que comprar peças originais
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4">
                            Feita para encaixar de primeira.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {beneficios.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.06 }}
                                className="p-6 bg-white border border-gray-200 rounded-lg hover:border-brand-blue/30 transition-colors"
                            >
                                <div className="text-brand-blue mb-3">{item.icon}</div>
                                <h3 className="font-heading text-sm font-bold mb-2 leading-tight">{item.titulo}</h3>
                                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 px-6 bg-white text-black">
                <div className="max-w-[800px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter">
                            Precisa de uma peça de reposição?
                        </h2>
                        <p className="text-sm text-gray-600 max-w-[50ch] leading-relaxed">
                            Informe o modelo da sua bomba e nossa equipe técnica identifica e disponibiliza o componente correto.
                        </p>
                        <a
                            href="https://wa.me/554733002250"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-blue hover:bg-brand-blue-hover active:scale-[0.98] text-white font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200"
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
