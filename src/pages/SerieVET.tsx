import { motion } from "motion/react";
import { Breadcrumb } from "../components/Breadcrumb";
import { SectionNav } from "../components/SectionNav";
import { ArrowRight, ArrowUpRight, WhatsappLogo, Gauge, Thermometer, Drop, TrendUp, Flask, CheckCircle, Medal, ForkKnife, TestTube, Recycle, ShieldCheck } from "@phosphor-icons/react";
import serieVetProduto from "../assets/images/serie-vet-produto.png";

const specs = [
    { icon: <Gauge size={28} />, label: "Vazão", value: "até 13,6 m³/h" },
    { icon: <Thermometer size={28} />, label: "Temperatura", value: "até 120°C" },
    { icon: <Drop size={28} />, label: "Pressão", value: "até 20,7 bar" },
    { icon: <TrendUp size={28} />, label: "Altura", value: "até 211 metros" },
    { icon: <Flask size={28} />, label: "Viscosidade", value: "até 1.000.000 cp" },
    { icon: <Recycle size={28} />, label: "Bomba", value: "Helicoidal ou Fuso" },
];

const materiais = [
    { componente: "Material de Fabricação", material: "Aço Inoxidável 304 ou 316L", desc: "Fabricada em aço inoxidável para garantir máxima resistência e durabilidade." },
    { componente: "Configuração", material: "Bomba Helicoidal ou Bomba de Fusos", desc: "Pode ser fornecida com diferentes tipos de bomba para atender às mais diversas aplicações." },
];

const aplicacoes = [
    { icon: <ForkKnife size={24} />, nome: "Alimentos Pastosos" },
    { icon: <TestTube size={24} />, nome: "Indústria Farmacêutica" },
    { icon: <Drop size={24} />, nome: "Óleos" },
];

const beneficios = [
    { titulo: "Esvaziamento Eficiente", desc: "Ideal para aplicações de esvaziamento de tambores contendo produtos de alta ou baixa viscosidade e com ou sem sólidos." },
    { titulo: "Baixo Custo de Energia", desc: "Operação com baixo consumo de energia elétrica, reduzindo custos operacionais." },
    { titulo: "Baixo Ruído", desc: "Operação silenciosa, proporcionando um ambiente de trabalho mais confortável." },
    { titulo: "Redução de Perdas", desc: "Proporciona redução nas perdas de produtos para as indústrias, aumentando a eficiência do processo." },
    { titulo: "Versatilidade", desc: "Lida com vazões de até 13,6 m³/h, viscosidades de até 1.000.000 cp, pressões de até 20,7 bar e alturas de até 211 metros." },
    { titulo: "Certificação 3-A", desc: "Certificado nº 1004: Padrões sanitários para bombas de deslocamento positivo para manuseio de produtos lácteos." },
];

export default function SerieVET() {
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
                        <Breadcrumb current="Série VET" />
                        <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white bg-white/10 px-3 py-1.5 rounded-full border border-white/20 w-fit">
                            Linha de Produtos // Série VET
                        </div>
                        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tighter leading-[1.05]">
                            Esvaziador de Tambor
                        </h1>
                        <p className="text-base text-brand-muted max-w-[60ch] leading-relaxed">
                            A série VET é ideal para aplicações de esvaziamento de tambores contendo produtos de alta ou baixa viscosidade e com ou sem sólidos.
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
                        <img src={serieVetProduto} alt="Série VET Esvaziador de Tambor" className="w-full h-full object-contain" />
                    </motion.div>
                </div>
            </section>

            <SectionNav items={[
                { id: "sobre", label: "Sobre" },
                { id: "materiais", label: "Materiais" },
                { id: "aplicacoes", label: "Aplicações" },
                { id: "diferenciais", label: "Diferenciais" },
                { id: "certificacao", label: "Certificação" },
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
                            Sobre a Série VET
                        </span>
                        <h2 className="font-heading text-3xl font-extrabold tracking-tighter mt-4 mb-6 [word-spacing:0.2em]">
                            Eficiência no esvaziamento de tambores
                        </h2>
                        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                            <p>
                                A série VET é ideal para aplicações de esvaziamento de tambores contendo produtos de <strong className="text-black">alta ou baixa viscosidade</strong> e com ou sem sólidos.
                            </p>
                            <p>
                                Esta série pode lidar com vazões de até 13,6 m³/h, temperatura de 120°C, viscosidade de até 1.000.000 cp, com pressão de até 20,7 bar e atingir alturas de até 211 metros.
                            </p>
                            <p>
                                A série VET é fabricada em <strong className="text-black">Aço Inoxidável 304 ou 316L</strong>, além de possuir a certificação 3-A e pode ser fornecida com <strong className="text-black">Bomba Helicoidal ou Bomba de Fusos</strong>, garantindo assim o atendimento às mais diversas aplicações.
                            </p>
                            <p>
                                A operação tem <strong className="text-black">baixo custo de energia elétrica</strong>, baixo ruído, além de proporcionar redução nas perdas de produtos para as indústrias.
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

            {/* Materiais e Configuração */}
            <section id="materiais" className="py-20 px-6 bg-white text-black">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                            Construção e Configuração
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4 [word-spacing:0.2em]">
                            Materiais e opções de bomba
                        </h2>
                        <p className="text-sm text-gray-600 max-w-[60ch] mx-auto leading-relaxed">
                            Fabricada em aço inoxidável com certificação 3-A, disponível com Bomba Helicoidal ou Bomba de Fusos.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[800px] mx-auto">
                        {materiais.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="p-6 bg-white border border-gray-200 rounded-lg"
                            >
                                <ShieldCheck size={28} className="text-brand-blue mb-3" />
                                <h3 className="font-heading text-sm font-bold mb-1">{item.componente}</h3>
                                <p className="text-sm font-heading font-bold text-brand-blue mb-2">{item.material}</p>
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
                            Segmentos atendidos pela Série VET
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[800px] mx-auto">
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
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                            Por que escolher a VET
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4 [word-spacing:0.2em]">
                            Diferenciais da Série VET
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

            {/* Certificação */}
            <section id="certificacao" className="py-20 px-6 bg-white border-y border-gray-200 text-black">
                <div className="max-w-[800px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <Medal size={48} className="text-brand-blue" />
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                            Certificação 3-A
                        </span>
                        <h2 className="font-heading text-3xl font-extrabold tracking-tighter [word-spacing:0.2em]">
                            Padrão 02-11: Certificado nº 1004
                        </h2>
                        <p className="text-sm text-gray-600 max-w-[50ch] leading-relaxed">
                            Padrões sanitários para bombas de deslocamento positivo para manuseio de produtos lácteos. Todos os elastômeros cumprem os requisitos da FDA.
                        </p>
                    </motion.div>
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
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter [word-spacing:0.2em]">
                            Precisa de uma solução sob medida?
                        </h2>
                        <p className="text-sm text-gray-600 max-w-[50ch] leading-relaxed">
                            Entre em contato com nossa equipe técnica para dimensionar o esvaziador de tambor ideal para sua aplicação.
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