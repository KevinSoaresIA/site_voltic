import { motion } from "motion/react";
import { Breadcrumb } from "../components/Breadcrumb";
import { SectionNav } from "../components/SectionNav";
import { ArrowRight, ArrowUpRight, WhatsappLogo, Gauge, Thermometer, Drop, Shield, Factory, TestTube, Flask, Power, Timer, Cube, Eye } from "@phosphor-icons/react";
import bombaDosadoraPistaoProduto from "../assets/images/bombas-dosadoras-pistao-produto.png";

const specs = [
    { icon: <Gauge size={28} />, label: "Vazão", value: "0,1 a 228 l/h" },
    { icon: <Drop size={28} />, label: "Pressão", value: "até 650 bar" },
    { icon: <Thermometer size={28} />, label: "Serviço", value: "Contínuo (24h)" },
    { icon: <Shield size={28} />, label: "Material", value: "INOX AISI 316 L" },
];

const caracteristicas = [
    { icon: <Power size={24} />, titulo: "Acionamentos Versáteis", desc: "Motorizados (padrão ou anti-explosivos), pneumáticos, solares e eólicos." },
    { icon: <Timer size={24} />, titulo: "Serviço Contínuo (24h)", desc: "Design previsto para operação contínua, tanto para a bomba quanto para o acionamento, mesmo em condições climáticas adversas." },
    { icon: <Gauge size={24} />, titulo: "Ajuste de Vazão", desc: "Ajuste manual ou eletrônico, manualmente por sistema de deslocamento positivo do pistão, ou eletronicamente via alteração de pulsações (frequências por minuto)." },
    { icon: <Shield size={24} />, titulo: "Máxima Robustez", desc: "Alta confiabilidade com baixa manutenção." },
    { icon: <Cube size={24} />, titulo: "Cabeçote e Válvulas", desc: "Em INOX AISI 316, garantindo máxima resistência química." },
    { icon: <TestTube size={24} />, titulo: "Pistão em Cerâmica", desc: "Proporciona excelente vedação, longa vida útil e máxima resistência química." },
];

const vedacoes = [
    { pressao: "Até 50 bar", material: "EPDM ou Viton", desc: "Elastômeros para pressões de até 50 bar." },
    { pressao: "Acima de 50 bar", material: "PTFE", desc: "Vedações em PTFE para pressões superiores a 50 bar." },
];

const aplicacoes = [
    { icon: <Flask size={24} />, nome: "Aditivos Químicos Líquidos" },
    { icon: <Factory size={24} />, nome: "Indústria Petrolífera" },
    { icon: <TestTube size={24} />, nome: "Indústria Química" },
    { icon: <Shield size={24} />, nome: "Ácidos e Alcalinos" },
];

const detalhes = [
    { titulo: "Leitura de Vazão Direta", desc: "Permite leitura de vazão em porcentagem da vazão total, entre 0 e 99%, com resolução de 1%." },
    { titulo: "Vazão Mínima Recomendada", desc: "Com ajuste apenas manual, recomenda-se ajuste mínimo de 10% da vazão máxima. Com controladores eletrônicos, é possível chegar até 0,1% da vazão máxima." },
    { titulo: "Compatibilidade Química", desc: "Ideais para qualquer aditivo químico líquido (ácidos ou alcalinos) com boa compatibilidade com INOX AISI 316 L." },
    { titulo: "Pressões Elevadas", desc: "Modelos de pistão são ideais para pressões acima de 15 bar, com modelos que atendem até 650 bar." },
];

export default function BombasDosadorasPistao() {
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
                        <Breadcrumb current="Bombas Dosadoras de Pistão" />
                        <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white bg-white/10 px-3 py-1.5 rounded-full border border-white/20 w-fit">
                            Linha de Produtos // Bombas Dosadoras de Pistão
                        </div>
                        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tighter leading-[1.05]">
                            Bombas Dosadoras de Pistão
                        </h1>
                        <p className="text-base text-brand-muted max-w-[60ch] leading-relaxed">
                            Extremamente robustas e confiáveis, ideais para qualquer aditivo químico líquido com boa compatibilidade com INOX AISI 316 L.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <a
                                href="#especificacoes"
                                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-blue hover:bg-brand-blue-hover active:scale-[0.98] text-white font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200"
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

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full aspect-[4/3] rounded-lg border border-brand-border overflow-hidden flex items-center justify-center bg-brand-card/50 p-8"
                    >
                        <img src={bombaDosadoraPistaoProduto} alt="Bomba Dosadora de Pistão Voltic" className="w-full h-full object-contain" />
                    </motion.div>
                </div>
            </section>

            <SectionNav items={[
                { id: "sobre", label: "Sobre" },
                { id: "caracteristicas", label: "Características" },
                { id: "vedacoes", label: "Vedações" },
                { id: "detalhes", label: "Detalhes" },
                { id: "aplicacoes", label: "Aplicações" },
            ]} />

            {/* Sobre + Especificações */}
            <section id="sobre" className="py-20 px-6 bg-white border-y border-gray-200 text-black">
                <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                            Sobre as Bombas Dosadoras
                        </span>
                        <h2 className="font-heading text-3xl font-extrabold tracking-tighter mt-4 mb-6 [word-spacing:0.2em]">
                            Robustez e confiabilidade para dosagem precisa
                        </h2>
                        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                            <p>
                                Nossas bombas dosadoras de pistão são extremamente robustas e confiáveis, ideais para qualquer aditivo químico líquido (ácidos ou alcalinos) que possua boa compatibilidade química com <strong className="text-black">INOX AISI 316 L</strong>.
                            </p>
                            <p>
                                Modelos de pistão são ideais para pressões acima de <strong className="text-black">15 bar</strong>, possuímos modelos que atendem pressões de até <strong className="text-black">650 bar</strong>. Faixa de vazão de <strong className="text-black">0,1 l/h a 228 l/h</strong>.
                            </p>
                            <p>
                                Projetadas para atender as mais complexas áreas da indústria petrolífera e química, com design previsto para serviço contínuo de 24 horas, mesmo em condições climáticas adversas.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        id="especificacoes"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-white border border-gray-200 rounded-lg p-6"
                    >
                        <h3 className="font-heading text-sm font-bold uppercase tracking-wider mb-6 text-brand-blue">
                            Especificações Técnicas
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {specs.map((spec, i) => (
                                <div key={i} className="flex flex-col gap-2 p-4 bg-white border border-gray-200 rounded-lg">
                                    <div className="text-brand-blue">{spec.icon}</div>
                                    <span className="text-[10px] uppercase tracking-wider text-gray-600 font-mono">{spec.label}</span>
                                    <span className="text-sm font-heading font-bold">{spec.value}</span>
                                </div>
                            ))}
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
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                            Características e Opcionais
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4 [word-spacing:0.2em]">
                            Projetadas para máxima performance
                        </h2>
                        <p className="text-sm text-gray-600 max-w-[60ch] mx-auto leading-relaxed">
                            Diversas opções de acionamento, ajustes e materiais para atender as mais exigentes aplicações industriais.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {caracteristicas.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
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

            {/* Vedações */}
            <section id="vedacoes" className="py-20 px-6 bg-white border-y border-gray-200 text-black">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                            Sistema de Vedações
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4 [word-spacing:0.2em]">
                            Vedação adequada para cada faixa de pressão
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[800px] mx-auto">
                        {vedacoes.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="p-6 bg-white border border-gray-200 rounded-lg"
                            >
                                <Shield size={28} className="text-brand-blue mb-3" />
                                <h3 className="font-heading text-sm font-bold mb-1">{item.pressao}</h3>
                                <p className="text-sm font-heading font-bold text-brand-blue mb-2">{item.material}</p>
                                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detalhes Técnicos */}
            <section id="detalhes" className="py-20 px-6 bg-white text-black">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                            Detalhes Técnicos
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4 [word-spacing:0.2em]">
                            Controle preciso de dosagem
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {detalhes.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="p-6 bg-white border border-gray-200 rounded-lg hover:border-brand-blue/30 transition-colors"
                            >
                                <Eye size={24} className="text-brand-blue mb-3" />
                                <h3 className="font-heading text-sm font-bold mb-2 leading-tight">{item.titulo}</h3>
                                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
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
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                            Principais Aplicações
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4 [word-spacing:0.2em]">
                            Segmentos atendidos
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {aplicacoes.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="flex flex-col items-center gap-3 p-6 bg-white border border-gray-200 rounded-lg hover:border-brand-blue/30 transition-colors"
                            >
                                <div className="text-brand-blue">{item.icon}</div>
                                <span className="text-xs font-heading font-bold text-center leading-tight">{item.nome}</span>
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
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter [word-spacing:0.2em]">
                            Precisa de uma solução sob medida?
                        </h2>
                        <p className="text-sm text-gray-600 max-w-[50ch] leading-relaxed">
                            Entre em contato com nossa equipe técnica para dimensionar a bomba ideal para sua aplicação.
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