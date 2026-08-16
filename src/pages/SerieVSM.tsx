import { motion } from "motion/react";
import { Breadcrumb } from "../components/Breadcrumb";
import { SectionNav } from "../components/SectionNav";
import { ArrowRight, ArrowUpRight, WhatsappLogo, Drop, Medal, PaintBrush, SprayBottle, ForkKnife, Factory, IceCream, ShieldCheck } from "@phosphor-icons/react";
import serieVsmLiProduto from "../assets/images/serie-vsm-li-produto.png";
import serieVsmLiCorte from "../assets/images/serie-vsm-li-corte.png";
import serieVsmPlProduto from "../assets/images/serie-vsm-pl-produto.png";
import serieVsmPlSistema from "../assets/images/serie-vsm-pl-sistema.png";
import serieVsmAvProduto from "../assets/images/serie-vsm-av-produto.png";

const modelos = [
    {
        nome: "VSM-LI",
        titulo: "Equipamento para Mistura em Linha",
        desc: "Fabricada com Rotor Semiaberto e Selo Mecânico interno. Ideal para aplicação em emulsões, mistura líquido e pó além de classificar sólidos de diferentes tamanhos.",
        imagens: [serieVsmLiProduto],
        specs: [
            { label: "Viscosidade", value: "até 600 cp" },
            { label: "Temperatura", value: "até 120°C" },
            { label: "Vazão", value: "até 95,4 m³/h" },
            { label: "Pressão", value: "até 5,85 bar" },
            { label: "Altura", value: "até 60 metros" },
        ],
    },
    {
        nome: "VSM-PL",
        titulo: "Equipamento para Mistura em Linha",
        desc: "Fabricada com Rotor Semiaberto, Selo Mecânico interno e conjunto Funil + Válvulas. Ideal para mistura líquido e pó, homogeneização de pós, emulsificação e adição de aromas. Unidade móvel de utilização simples e ergonômica.",
        imagens: [serieVsmPlProduto, serieVsmPlSistema],
        specs: [
            { label: "Viscosidade", value: "até 600 cp" },
            { label: "Temperatura", value: "até 120°C" },
            { label: "Vazão", value: "até 95,4 m³/h" },
            { label: "Pressão", value: "até 5,85 bar" },
            { label: "Altura", value: "até 60 metros" },
        ],
    },
    {
        nome: "VSM-AV",
        titulo: "Equipamento para Mistura em Linha",
        desc: "Fabricada com Rotor Semiaberto, Selo Mecânico interno, conjunto Funil + Válvulas e Bomba série VBF. Ideal para produtos de alta viscosidade. Unidade móvel de utilização simples e ergonômica.",
        imagens: [serieVsmAvProduto],
        specs: [
            { label: "Viscosidade", value: "até 100.000 cp" },
            { label: "Temperatura", value: "até 120°C" },
            { label: "Vazão", value: "até 20,4 m³/h" },
            { label: "Pressão", value: "até 10 bar" },
            { label: "Altura", value: "até 102 metros" },
        ],
    },
];

const aplicacoes = [
    { icon: <PaintBrush size={24} />, nome: "Tintas" },
    { icon: <SprayBottle size={24} />, nome: "Cosméticos" },
    { icon: <ForkKnife size={24} />, nome: "Alimentos Pastosos" },
    { icon: <Factory size={24} />, nome: "Alimentos em Pó" },
    { icon: <Drop size={24} />, nome: "Bebidas" },
    { icon: <IceCream size={24} />, nome: "Laticínios" },
];

const caracteristicas = [
    { titulo: "Aço Inoxidável 304 ou 316L", desc: "Todos os modelos fabricados em Aço Inoxidável com certificação 3-A." },
    { titulo: "Rotor Semiaberto", desc: "Todos os modelos possuem Rotor Semiaberto e Selo Mecânico interno." },
    { titulo: "Unidades Móveis (PL e AV)", desc: "Os modelos VSM-PL e VSM-AV são unidades móveis de utilização simples e ergonômica para o operador." },
    { titulo: "Integração com Bomba VBF", desc: "O modelo VSM-AV inclui Bomba da série VBF para produtos de alta viscosidade." },
];

export default function SerieVSM() {
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
                        <Breadcrumb current="Série VSM" />
                        <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full border border-brand-orange/20 w-fit">
                            Linha de Produtos // Série VSM
                        </div>
                        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tighter leading-[1.05]">
                            Sistemas Misturadores
                        </h1>
                        <p className="text-base text-brand-muted max-w-[60ch] leading-relaxed">
                            Equipamentos para mistura em linha com três modelos especializados para diferentes aplicações e faixas de viscosidade.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <a
                                href="#modelos"
                                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-orange hover:bg-brand-orange-hover active:scale-[0.98] text-white font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200"
                            >
                                Ver Modelos
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
                { id: "modelos", label: "Modelos" },
                { id: "caracteristicas", label: "Características" },
                { id: "aplicacoes", label: "Aplicações" },
                { id: "certificacao", label: "Certificação" },
            ]} />

            {/* Modelos */}
            <section id="modelos" className="py-20 px-6 bg-white border-y border-gray-200 text-black">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full border border-brand-orange/20">
                            Modelos Disponíveis
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4">
                            Três modelos para cada aplicação.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {modelos.map((modelo, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="p-6 bg-white border border-gray-200 rounded-lg"
                            >
                                <div className={`grid gap-2 mb-4 ${modelo.imagens.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                                    {modelo.imagens.map((img, j) => (
                                        <div key={j} className="rounded-lg border border-gray-200 overflow-hidden aspect-[4/3]">
                                            <img src={img} alt={`${modelo.nome} ${j + 1}`} className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div className="w-10 h-10 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center font-heading text-sm font-bold text-brand-orange mb-4">
                                    {i + 1}
                                </div>
                                <h3 className="font-heading text-lg font-extrabold tracking-tight mb-1">{modelo.nome}</h3>
                                <p className="text-xs text-gray-600 mb-4">{modelo.titulo}</p>
                                <p className="text-xs text-gray-600 leading-relaxed mb-6">{modelo.desc}</p>
                                <div className="space-y-2">
                                    {modelo.specs.map((spec, j) => (
                                        <div key={j} className="flex justify-between items-center py-2 border-t border-gray-200/50">
                                            <span className="text-[10px] uppercase tracking-wider text-gray-600 font-mono">{spec.label}</span>
                                            <span className="text-xs font-heading font-bold">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
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
                            Características Construtivas
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4">
                            Qualidade em todos os modelos.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 rounded-lg border border-gray-200 overflow-hidden max-w-[700px] mx-auto"
                    >
                        <img src={serieVsmLiCorte} alt="Série VSM-LI corte técnico" className="w-full h-auto object-cover" />
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[900px] mx-auto">
                        {caracteristicas.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="p-6 bg-white border border-gray-200 rounded-lg hover:border-brand-orange/30 transition-colors"
                            >
                                <ShieldCheck size={24} className="text-brand-orange mb-3" />
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
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full border border-brand-orange/20">
                            Principais Aplicações
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4">
                            Segmentos atendidos.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
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
                                <span className="text-xs font-heading font-bold text-center leading-tight">{item.nome}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certificação */}
            <section id="certificacao" className="py-20 px-6 bg-white text-black">
                <div className="max-w-[800px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <Medal size={48} className="text-brand-orange" />
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full border border-brand-orange/20">
                            Certificação 3-A
                        </span>
                        <h2 className="font-heading text-3xl font-extrabold tracking-tighter">
                            Padrão 02-11 — Certificado nº 1004
                        </h2>
                        <p className="text-sm text-gray-600 max-w-[50ch] leading-relaxed">
                            Todos os modelos da série VSM possuem certificação 3-A, garantindo padrões sanitários para manuseio de produtos lácteos.
                        </p>
                    </motion.div>
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
                            Entre em contato com nossa equipe técnica para dimensionar o sistema misturador ideal para sua aplicação.
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