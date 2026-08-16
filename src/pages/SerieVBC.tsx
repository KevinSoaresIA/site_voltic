import { motion } from "motion/react";
import { Breadcrumb } from "../components/Breadcrumb";
import { SectionNav } from "../components/SectionNav";
import { ArrowRight, ArrowUpRight, WhatsappLogo, Gauge, Thermometer, Drop, TrendUp, Gear, CheckCircle, Medal, Flask, TestTube, ForkKnife, Factory, Shield } from "@phosphor-icons/react";
import serieVbcMovel from "../assets/images/serie-vbc-movel.png";
import serieVbcCorte from "../assets/images/serie-vbc-corte.png";
import serieVbcProduto from "../assets/images/serie-vbc-produto.png";

const specs = [
    { icon: <Gauge size={28} />, label: "Vazão", value: "até 272,5 m³/h" },
    { icon: <Thermometer size={28} />, label: "Temperatura", value: "até 120°C" },
    { icon: <Drop size={28} />, label: "Pressão", value: "até 10 bar" },
    { icon: <TrendUp size={28} />, label: "Altura", value: "até 82 metros" },
    { icon: <Flask size={28} />, label: "Viscosidade", value: "até 600 cp" },
    { icon: <Gear size={28} />, label: "Rotor", value: "Aberto / Fluxo radial" },
];

const selos = [
    {
        tipo: "Selo Mecânico Externo tipo D",
        desc: "Para bombeamento de água, laticínios, soluções CIP, etc. Não é adequado para fluidos abrasivos ou pegajosos.",
    },
    {
        tipo: "Selo Mecânico com Assento Externo DG",
        desc: "Utiliza os mesmos componentes do selo tipo D, mas com face mais dura. Ideal para aplicações abrasivas, corrosivas e pegajosas.",
    },
    {
        tipo: "Selo Mecânico Externo Duplo tipo E",
        desc: "Usado principalmente para manter a temperatura dentro da bomba. Pode trabalhar até 200°C.",
    },
];

const materiais = [
    { componente: "Contato com fluido", material: "Aço Inoxidável 316L", desc: "Todos os componentes em contato com o produto." },
    { componente: "Sem contato com fluido", material: "Aço Inoxidável 304", desc: "Componentes estruturais e externos." },
    { componente: "Acabamento superficial", material: "32 Ra (micro polegadas)", desc: "Eletropolimento opcional (&lt;16 Ra) e jateamento de areia (não sanitário)." },
    { componente: "Elastômeros", material: "Buna N, EPDM, FKM, PTFE", desc: "Projetados para atender padrões alimentícios mundiais como 3-A e FDA." },
];

const aplicacoes = [
    { icon: <ForkKnife size={24} />, nome: "Laticínios" },
    { icon: <Drop size={24} />, nome: "Bebidas" },
    { icon: <Flask size={24} />, nome: "Produtos Químicos" },
    { icon: <TestTube size={24} />, nome: "Indústria Farmacêutica" },
    { icon: <Factory size={24} />, nome: "Indústria Alimentícia" },
    { icon: <Gear size={24} />, nome: "Sistemas CIP" },
];

const beneficios = [
    { titulo: "Versátil e Econômica", desc: "Uma opção muito versátil e econômica para aplicações de bombeamento de produtos aquosos." },
    { titulo: "Rotor Aberto", desc: "Fluxo radial e carcaça em voluta com sucção no centro para máxima eficiência hidráulica." },
    { titulo: "Baixa Viscosidade", desc: "Ideal para líquidos com viscosidades de até 600 cp, como produtos aquosos e soluções diversas." },
    { titulo: "Alta Vazão", desc: "Capacidade de lidar com vazões de até 272,5 m³/h, atendendo demandas industriais de grande porte." },
    { titulo: "Certificação 3-A", desc: "Certificado nº 1004 — Padrões sanitários para bombas centrífugas e de deslocamento positivo." },
    { titulo: "Qualidade Garantida", desc: "Análise de composição química em todas as barras, chapas e peças fundidas. Relatório de Teste de Matéria disponível." },
];

export default function SerieVBC() {
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
                        <Breadcrumb current="Série VBC" />
                        <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full border border-brand-orange/20 w-fit">
                            Linha de Produtos // Série VBC
                        </div>
                        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tighter leading-[1.05]">
                            Bombas Centrífugas
                        </h1>
                        <p className="text-base text-brand-muted max-w-[60ch] leading-relaxed">
                            A série VBC é uma opção muito versátil e econômica. Possui rotor aberto, fluxo radial e carcaça em voluta com sucção no centro.
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
                { id: "selos", label: "Selos" },
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
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full border border-brand-orange/20">
                            Sobre a Série VBC
                        </span>
                        <h2 className="font-heading text-3xl font-extrabold tracking-tighter mt-4 mb-6">
                            Versatilidade e economia em uma só bomba.
                        </h2>
                        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                            <p>
                                Possui rotor aberto, fluxo radial e carcaça em voluta com sucção no centro. É ideal para aplicações de produtos aquosos e líquidos com viscosidades de até 600 cp.
                            </p>
                            <p>
                                Esta série pode lidar com vazões de até 272,5 m³/h, temperatura de 120°C, pressão de até 10 bar e atingir alturas de até 82 metros.
                            </p>
                            <p>
                                Todos os componentes em contato com o fluido são fabricados em <strong className="text-black">Aço Inoxidável 316L</strong> e os componentes sem contato com o fluido em <strong className="text-black">Aço Inoxidável 304</strong>.
                            </p>
                            <p>
                                Para garantir a qualidade do aço inoxidável, realizamos análise de composição química em todas as barras, chapas e peças fundidas. Também emitimos <strong className="text-black">Relatório de Teste de Matéria</strong> quando solicitado.
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

            {/* Materiais */}
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
                            Qualidade certificada em cada componente.
                        </h2>
                        <p className="text-sm text-gray-600 max-w-[60ch] mx-auto leading-relaxed">
                            Materiais de alta resistência com análise de composição química garantida em todas as matérias-primas.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                        {[
                            { src: serieVbcProduto, alt: "Série VBC produto" },
                            { src: serieVbcMovel, alt: "Série VBC parte móvel" },
                            { src: serieVbcCorte, alt: "Série VBC corte técnico" },
                        ].map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="rounded-lg border border-gray-200 overflow-hidden aspect-[4/3]"
                            >
                                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {materiais.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="p-6 bg-white border border-gray-200 rounded-lg"
                            >
                                <Shield size={28} className="text-brand-orange mb-3" />
                                <h3 className="font-heading text-sm font-bold mb-1">{item.componente}</h3>
                                <p className="text-sm font-heading font-bold text-brand-orange mb-2">{item.material}</p>
                                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Selos Mecânicos */}
            <section id="selos" className="py-20 px-6 bg-white border-y border-gray-200 text-black">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full border border-brand-orange/20">
                            Selos Mecânicos
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4">
                            Configurações para cada aplicação.
                        </h2>
                        <p className="text-sm text-gray-600 max-w-[60ch] mx-auto leading-relaxed">
                            Fabricados em grafite, cerâmica, carbeto de silício e tungstênio, com elastômeros Buna N, EPDM, FKM e PTFE. Todos projetados para atender padrões 3-A e requisitos da FDA.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {selos.map((selo, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="p-6 bg-white border border-gray-200 rounded-lg"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center font-heading text-sm font-bold text-brand-orange">
                                        {["D", "DG", "E"][i]}
                                    </div>
                                    <h3 className="font-heading text-sm font-bold leading-tight">{selo.tipo}</h3>
                                </div>
                                <p className="text-xs text-gray-600 leading-relaxed">{selo.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Aplicações */}
            <section id="aplicacoes" className="py-20 px-6 bg-white text-black">
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
                            Segmentos atendidos pela Série VBC.
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
                                <span className="text-sm font-heading font-bold text-center">{item.nome}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefícios */}
            <section id="diferenciais" className="py-20 px-6 bg-white border-y border-gray-200 text-black">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full border border-brand-orange/20">
                            Por que escolher a VBC
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4">
                            Diferenciais da Série VBC.
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
                            Padrões sanitários para bombas centrífugas e bombas de deslocamento positivo para manuseio de produtos lácteos. Todos os elastômeros cumprem os requisitos da FDA.
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