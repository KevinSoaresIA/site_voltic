import { motion } from "motion/react";
import { Breadcrumb } from "../components/Breadcrumb";
import { SectionNav } from "../components/SectionNav";
import { ArrowRight, ArrowUpRight, WhatsappLogo, Gauge, Thermometer, Drop, TrendUp, Flask, CheckCircle, Medal, IceCream, ForkKnife, TestTube, Factory, ShieldCheck, Gear } from "@phosphor-icons/react";
import serieVbpProduto from "../assets/images/serie-vbp-produto.png";
import serieVbpCorte from "../assets/images/serie-vbp-corte.png";

const specs = [
    { icon: <Gauge size={28} />, label: "Vazão", value: "até 100 m³/h" },
    { icon: <Thermometer size={28} />, label: "Temperatura", value: "até 150°C" },
    { icon: <Drop size={28} />, label: "Pressão", value: "até 34,5 bar" },
    { icon: <TrendUp size={28} />, label: "Altura", value: "até 352 metros" },
    { icon: <Flask size={28} />, label: "Viscosidade", value: "até 1.000.000 cp" },
    { icon: <Gear size={28} />, label: "Rotor", value: "Aço Alloy 88" },
];

const materiais = [
    { componente: "Rotores", material: "Aço Alloy 88", desc: "Todos os rotores fabricados em Aço Alloy 88 para máxima resistência ao desgaste." },
    { componente: "Componentes sem contato", material: "Aço Inoxidável 316L", desc: "Componentes estruturais e externos sem contato com o fluido." },
    { componente: "Acabamento superficial", material: "32 Ra (micro polegadas)", desc: "Em todos os componentes em contato com o fluido." },
    { componente: "Fabricação", material: "Totalmente em Aço Inoxidável", desc: "A Série VBP é fabricada totalmente em Aço Inoxidável." },
];

const aplicacoes = [
    { icon: <IceCream size={24} />, nome: "Chocolates" },
    { icon: <ForkKnife size={24} />, nome: "Laticínios" },
    { icon: <Factory size={24} />, nome: "Alimentos Pastosos" },
    { icon: <TestTube size={24} />, nome: "Indústria Farmacêutica" },
    { icon: <Drop size={24} />, nome: "Óleos" },
];

const beneficios = [
    { titulo: "Fácil Manutenção", desc: "Bomba de fácil manutenção, reduzindo tempo de parada e custos operacionais." },
    { titulo: "Baixo Ruído", desc: "Operação com baixo nível de ruído, proporcionando um ambiente de trabalho mais confortável." },
    { titulo: "Alta Pressão", desc: "Característica de bombeamento em alta pressão, com até 34,5 bar e alturas de até 352 metros." },
    { titulo: "Alta Viscosidade", desc: "Ideal para fluidos de baixa e alta viscosidade, até 1.000.000 cp." },
    { titulo: "Versatilidade Sanitária", desc: "Diferentes tipos de Selos Mecânicos e configurações de Rotores para atender uma variedade de aplicações sanitárias." },
    { titulo: "Certificação 3-A", desc: "Certificado nº 1004: Padrões sanitários para bombas de deslocamento positivo para manuseio de produtos lácteos." },
];

const selos = [
    {
        tipo: "Diferentes Tipos de Selos Mecânicos",
        desc: "A Série VBP pode ser fabricada com diferentes tipos de Selos Mecânicos para atender as mais diversas aplicações sanitárias.",
    },
    {
        tipo: "Diferentes Configurações de Rotores",
        desc: "Diferentes configurações de Rotores disponíveis para atender uma variedade de aplicações e necessidades de processo.",
    },
];

export default function SerieVBP() {
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
                        <Breadcrumb current="Série VBP" />
                        <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white bg-white/10 px-3 py-1.5 rounded-full border border-white/20 w-fit">
                            Linha de Produtos // Série VBP
                        </div>
                        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tighter leading-[1.05]">
                            Bombas de Pistão Circunferencial
                        </h1>
                        <p className="text-base text-brand-muted max-w-[60ch] leading-relaxed">
                            A série VBP é uma bomba de fácil manutenção e baixo ruído na operação, ideal para aplicações em fluidos de baixa e alta viscosidade.
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
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                            Sobre a Série VBP
                        </span>
                        <h2 className="font-heading text-3xl font-extrabold tracking-tighter mt-4 mb-6 [word-spacing:0.2em]">
                            Fácil manutenção e alta pressão
                        </h2>
                        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                            <p>
                                É ideal para aplicações em fluidos de baixa e alta viscosidade, até <strong className="text-black">1.000.000 cp</strong>. Tem a característica de bombeamento em alta pressão.
                            </p>
                            <p>
                                Esta série pode lidar com vazões de até 100 m³/h, temperatura de 150°C, com pressão de até <strong className="text-black">34,5 bar</strong> e atingir alturas de até <strong className="text-black">352 metros</strong>.
                            </p>
                            <p>
                                A Série VBP é fabricada totalmente em Aço Inoxidável, sendo que todos os rotores são fabricados em <strong className="text-black">Aço Alloy 88</strong> e os componentes sem contato com o fluido em <strong className="text-black">Aço Inoxidável 316L</strong>.
                            </p>
                            <p>
                                O acabamento superficial em todos os componentes em contato com o fluido é de <strong className="text-black">32 Ra</strong> (micro polegadas).
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
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                            Construção e Materiais
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4 [word-spacing:0.2em]">
                            Materiais de alta resistência
                        </h2>
                        <p className="text-sm text-gray-600 max-w-[60ch] mx-auto leading-relaxed">
                            Rotores em Aço Alloy 88 e componentes em Aço Inoxidável 316L com acabamento 32 Ra.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {[
                            { src: serieVbpProduto, alt: "Série VBP produto" },
                            { src: serieVbpCorte, alt: "Série VBP corte técnico" },
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
                                <ShieldCheck size={28} className="text-brand-blue mb-3" />
                                <h3 className="font-heading text-sm font-bold mb-1">{item.componente}</h3>
                                <p className="text-sm font-heading font-bold text-brand-blue mb-2">{item.material}</p>
                                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Selos e Rotores */}
            <section id="selos" className="py-20 px-6 bg-white border-y border-gray-200 text-black">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                            Selos Mecânicos e Rotores
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4 [word-spacing:0.2em]">
                            Configurações para cada aplicação
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[800px] mx-auto">
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
                                    <div className="w-8 h-8 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center font-heading text-sm font-bold text-brand-blue">
                                        {["S", "R"][i]}
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
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                            Principais Aplicações
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4 [word-spacing:0.2em]">
                            Segmentos atendidos pela Série VBP
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-[900px] mx-auto">
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
            <section id="diferenciais" className="py-20 px-6 bg-white border-y border-gray-200 text-black">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                            Por que escolher a VBP
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter mt-4 mb-4 [word-spacing:0.2em]">
                            Diferenciais da Série VBP
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
            <section id="certificacao" className="py-20 px-6 bg-white text-black">
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