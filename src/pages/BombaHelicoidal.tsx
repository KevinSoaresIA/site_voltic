import { motion } from "motion/react";
import { Breadcrumb } from "../components/Breadcrumb";
import { SectionNav } from "../components/SectionNav";
import { ArrowRight, ArrowUpRight, WhatsappLogo, Gauge, Thermometer, Drop, TrendUp, Gear, CheckCircle, Shield, Wrench, Factory, Flask, ForkKnife, Sun, Warning, Sparkle, Recycle, Leaf, Circuitry, DropHalf, Eye, Lightning } from "@phosphor-icons/react";
import bomba45Logo from "../assets/images/bomba-helicoidal-bomba45-logo.jpg";
import bomba15CorpoMicrofundido from "../assets/images/bomba-helicoidal-bomba15-corpo-microfundido.png";
import bombaHelicoidalTabela from "../assets/images/bomba-helicoidal-tabela.png";
import estatorRotorCorte from "../assets/images/bomba-helicoidal-estator-rotor-corte.jpeg";

const specs = [
    { icon: <Gauge size={28} />, label: "Vazão", value: "até 250 m³/h" },
    { icon: <Thermometer size={28} />, label: "Temperatura", value: "até 150°C" },
    { icon: <Drop size={28} />, label: "Pressão", value: "até 24 bar" },
    { icon: <TrendUp size={28} />, label: "Sucção", value: "até 7 mca" },
    { icon: <Gear size={28} />, label: "Rotação", value: "Baixas e altas" },
    { icon: <Recycle size={28} />, label: "Fluxo", value: "Reversível" },
];

const materiais = [
    {
        categoria: "Estator",
        icon: <Shield size={28} />,
        itens: "Borrachas Nitrílicas, EPDM, Viton (FKM), Borracha Natural",
        desc: "Diferentes elastômeros para atender cada tipo de fluido e aplicação.",
    },
    {
        categoria: "Partes Giratórias",
        icon: <Gear size={28} />,
        itens: "AISI 304, AISI 316, AISI 420, Aço D6 (VC131), Aço Carbono SAE 1045",
        desc: "Diversas opções de aço para máxima resistência mecânica e química.",
    },
    {
        categoria: "Corpo da Bomba",
        icon: <Factory size={28} />,
        itens: "Ferro Fundido, AISI 304, AISI 316, Aço Carbono SAE 1020/1045, Polímeros",
        desc: "Materiais versáteis para diferentes ambientes operacionais.",
    },
];

const caracteristicas = [
    { icon: <Sparkle size={24} />, titulo: "Versatilidade", desc: "Atende fluidos com baixa ou alta concentração de sólidos, baixa ou alta viscosidade." },
    { icon: <Shield size={24} />, titulo: "Resistência", desc: "Bombeia fluidos abrasivos ou lubrificantes, quimicamente agressivos, com fibras." },
    { icon: <Gauge size={24} />, titulo: "Silenciosa", desc: "Funcionamento silencioso e sem pulsações." },
    { icon: <Thermometer size={24} />, titulo: "Ampla Temperatura", desc: "Atende ampla faixa de variação de temperatura." },
    { icon: <TrendUp size={24} />, titulo: "Alta Sucção", desc: "Possui elevada capacidade de sucção." },
    { icon: <Gear size={24} />, titulo: "Rotações Variáveis", desc: "Possibilita operação em baixas e altas rotações." },
    { icon: <Recycle size={24} />, titulo: "Fluxo Reversível", desc: "Sentido de rotação reversível, permitindo a reversão do fluxo." },
    { icon: <DropHalf size={24} />, titulo: "Multifásico", desc: "Bombeamento multifásico (aceita lote de gás)." },
];

const aplicacoes = [
    { icon: <Drop size={24} />, nome: "Saneamento" },
    { icon: <Flask size={24} />, nome: "Químico e Petroquímico" },
    { icon: <Factory size={24} />, nome: "Papel e Celulose" },
    { icon: <ForkKnife size={24} />, nome: "Alimentos e Bebidas" },
    { icon: <Leaf size={24} />, nome: "Usinas de Açúcar e Álcool" },
    { icon: <Wrench size={24} />, nome: "Mineração" },
    { icon: <Factory size={24} />, nome: "Construção Civil" },
];

const beneficios = [
    { titulo: "Projeto Próprio e Diferenciado", desc: "Capaz de proporcionar maior vida útil em operação." },
    { titulo: "Customização para Aplicações Complexas", desc: "Diminui os efeitos de alta temperatura e ataque químico, reduzindo esforços mecânicos." },
    { titulo: "Execução sem Tirantes", desc: "Sistema de fixação do estator sem tirantes para manutenção fácil e rápida." },
    { titulo: "Fabricação Nacional", desc: "Assistência técnica local e especializada em todo o território nacional." },
];

const acessoriosDisponiveis = [
    { icon: <Shield size={24} />, titulo: "Sensor contra trabalho a seco", desc: "Proteção contra operação sem fluido, evitando danos por sobreaquecimento." },
    { icon: <Gauge size={24} />, titulo: "Medidor de Pressão (Pressostato)", desc: "Monitoramento de pressão em tempo real para operação segura." },
    { icon: <Recycle size={24} />, titulo: "Conjunto By-pass via Temporizador", desc: "Controle automatizado do by-pass através de temporizador." },
    { icon: <Eye size={24} />, titulo: "Monitoramento do Sistema de Acionamento", desc: "Acompanhamento contínuo do sistema de acionamento da bomba." },
    { icon: <TrendUp size={24} />, titulo: "Medidor de Vazão", desc: "Medição precisa da vazão de bombeamento." },
    { icon: <Lightning size={24} />, titulo: "Inversor de Frequência", desc: "Controle de rotação e otimização de consumo energético." },
    { icon: <Circuitry size={24} />, titulo: "Sistema de Monitoramento e Controle", desc: "Monitoramento e controle local e a distância da operação." },
    { icon: <Sun size={24} />, titulo: "Acionamento via Energia Solar", desc: "Possibilidade de acionamento da bomba utilizando energia solar." },
];

const precaucoes = [
    { titulo: "Não operar sem fluido", desc: "Tempo limitado: risco de sobreaquecimento." },
    { titulo: "Não operar contra registro fechado", desc: "Pode causar danos ao equipamento." },
];

export default function BombaHelicoidal() {
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
                        <Breadcrumb current="Bomba Helicoidal" />
                        <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white bg-white/10 px-3 py-1.5 rounded-full border border-white/20 w-fit">
                            Linha de Produtos // Bomba Helicoidal
                        </div>
                        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tighter leading-[1.05]">
                            Bomba Helicoidal
                        </h1>
                        <p className="text-base text-brand-muted max-w-[60ch] leading-relaxed">
                            Descubra a tecnologia por trás das bombas VOLTIC. Com um design inovador e materiais de alta qualidade, nossas bombas oferecem um desempenho excepcional em diversas indústrias.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <a
                                href="#especificacoes-tecnicas"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('especificacoes-tecnicas')?.scrollIntoView({ behavior: 'smooth' });
                                }}
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
                        className="relative w-full aspect-[4/3] rounded-lg border border-brand-border overflow-hidden"
                    >
                        <img src={bomba45Logo} alt="Bomba Helicoidal Voltic Bomba 45" className="w-full h-full object-cover" />
                    </motion.div>
                </div>
            </section>

            <SectionNav items={[
                { id: "quando-usar", label: "Quando Usar" },
                { id: "indicacoes", label: "Indicações" },
                { id: "sobre", label: "Sobre" },
                { id: "caracteristicas", label: "Características" },
                { id: "materiais", label: "Materiais" },
                { id: "aplicacoes", label: "Aplicações" },
                { id: "diferenciais", label: "Diferenciais" },
                { id: "precaucoes", label: "Precauções" },
                { id: "acessorios", label: "Acessórios" },
            ]} />

            {/* Quando considerar uma bomba helicoidal? */}
            <section id="quando-usar" className="py-16 px-6 bg-white border-y border-gray-200 text-black">
                <div className="max-w-[1200px] mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tighter mb-8 text-center [word-spacing:0.2em]"
                    >
                        Quando considerar uma bomba helicoidal?
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            "Quando o fluido tem alta viscosidade",
                            "Quando há presença de sólidos em suspensão",
                            "Quando o processo exige baixa pulsação",
                            "Quando é necessário fluxo reversível",
                            "Quando a aplicação exige customização",
                            "Quando a bomba atual apresenta desgaste recorrente",
                        ].map((texto, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="flex items-center gap-3 p-5 bg-white border border-gray-200 rounded-lg hover:border-brand-blue/30 transition-colors"
                            >
                                <CheckCircle size={20} className="text-brand-blue shrink-0" />
                                <span className="text-sm text-black leading-tight">{texto}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Esta bomba é indicada para */}
            <section id="indicacoes" className="py-16 px-6 bg-white text-black">
                <div className="max-w-[1200px] mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tighter mb-8 text-center [word-spacing:0.2em]"
                    >
                        Esta bomba é indicada quando você precisa bombear
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            "Fluidos viscosos",
                            "Fluidos abrasivos",
                            "Fluidos com sólidos",
                            "Fluidos fibrosos",
                            "Fluidos quimicamente agressivos",
                            "Fluidos que exigem baixo cisalhamento",
                            "Aplicações com fluxo reversível",
                        ].map((texto, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="flex items-center gap-3 p-5 bg-white border border-gray-200 rounded-lg hover:border-brand-blue/30 transition-colors"
                            >
                                <CheckCircle size={20} className="text-brand-blue shrink-0" />
                                <span className="text-sm text-black leading-tight">{texto}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

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
                            Sobre a Bomba Helicoidal
                        </span>
                        <h2 className="font-heading text-3xl font-extrabold tracking-tighter mt-4 mb-6 [word-spacing:0.2em]">
                            Tecnologia de bombeamento com câmaras progressivas
                        </h2>
                        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                            <p>
                                O princípio de funcionamento dá-se através do giro do <strong className="text-black">rotor helicoidal</strong> posicionado dentro de um <strong className="text-black">estator</strong>. Essa combinação origina câmaras que, com o giro do rotor helicoidal, proporciona a transferência do fluido de câmara em câmara do ponto de sucção até o de descarga da bomba.
                            </p>
                            <p>
                                Com um design inovador e materiais de alta qualidade, nossas bombas oferecem um desempenho excepcional em diversas indústrias, atendendo fluidos com diferentes características de viscosidade, abrasividade e composição química.
                            </p>
                        </div>
                        <div className="mt-6 rounded-lg border border-gray-200 overflow-hidden">
                            <img src={estatorRotorCorte} alt="Estator e Rotor em corte técnico" className="w-full h-auto object-cover" />
                        </div>
                    </motion.div>

                    <motion.div
                        id="especificacoes-tecnicas"
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
                        <p className="mt-4 text-xs text-gray-600 leading-relaxed">
                            Os limites variam conforme o modelo, os materiais e as condições da aplicação. O dimensionamento deve ser confirmado pela equipe técnica.
                        </p>
                        <div className="mt-4 rounded-lg border border-gray-200 overflow-hidden">
                            <img src={bombaHelicoidalTabela} alt="Tabela de modelos Bomba Helicoidal" className="w-full h-auto object-cover" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Características Positivas */}
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
                            Características Positivas
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4 [word-spacing:0.2em]">
                            Diferenciais operacionais
                        </h2>
                        <p className="text-sm text-gray-600 max-w-[60ch] mx-auto leading-relaxed">
                            Versatilidade e desempenho para os mais diversos tipos de fluidos e condições operacionais.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

            {/* Materiais de Fabricação */}
            <section id="materiais" className="py-20 px-6 bg-white border-y border-gray-200 text-black">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                            Materiais de Fabricação
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4 [word-spacing:0.2em]">
                            Diversidade de materiais para cada aplicação
                        </h2>
                        <p className="text-sm text-gray-600 max-w-[60ch] mx-auto leading-relaxed">
                            Múltiplas opções de materiais para estator, partes giratórias e corpo da bomba.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 rounded-lg border border-gray-200 overflow-hidden max-w-[500px] mx-auto"
                    >
                        <img src={bomba15CorpoMicrofundido} alt="Bomba 15 com corpo microfundido" className="w-full h-auto object-cover" />
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {materiais.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="p-6 bg-white border border-gray-200 rounded-lg"
                            >
                                <div className="text-brand-blue mb-3">{item.icon}</div>
                                <h3 className="font-heading text-sm font-bold mb-1">{item.categoria}</h3>
                                <p className="text-sm font-heading font-bold text-brand-blue mb-2">{item.itens}</p>
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

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
                        {aplicacoes.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="flex flex-col items-center gap-3 p-5 bg-white border border-gray-200 rounded-lg hover:border-brand-blue/30 transition-colors"
                            >
                                <div className="text-brand-blue">{item.icon}</div>
                                <span className="text-xs font-heading font-bold text-center leading-tight">{item.nome}</span>
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
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                            Diferenciais Voltic
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4 [word-spacing:0.2em]">
                            Por que escolher as bombas helicoidais VOLTIC
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {beneficios.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="p-6 bg-white border border-gray-200 rounded-lg hover:border-brand-blue/30 transition-colors"
                            >
                                <CheckCircle size={24} className="text-brand-blue mb-3" />
                                <h3 className="font-heading text-sm font-bold mb-2 leading-tight">{item.titulo}</h3>
                                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Precauções */}
            <section id="precaucoes" className="py-20 px-6 bg-white border-y border-gray-200 text-black">
                <div className="max-w-[800px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-8"
                    >
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                            Precauções
                        </span>
                        <h2 className="font-heading text-3xl font-extrabold tracking-tighter mt-4 [word-spacing:0.2em]">
                            Cuidados operacionais
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {precaucoes.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="p-6 bg-white border border-gray-200 rounded-lg"
                            >
                                <Warning size={24} className="text-brand-blue mb-3" />
                                <h3 className="font-heading text-sm font-bold mb-2 leading-tight">{item.titulo}</h3>
                                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Acessórios Disponíveis */}
            <section id="acessorios" className="py-20 px-6 bg-white border-y border-gray-200 text-black">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                            Acessórios
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4 [word-spacing:0.2em]">
                            Acessórios disponíveis
                        </h2>
                        <p className="text-sm text-gray-600 max-w-[60ch] mx-auto leading-relaxed">
                            Recursos e opcionais que ampliam as possibilidades da sua bomba helicoidal.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {acessoriosDisponiveis.map((item, i) => (
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