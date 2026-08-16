import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CaretDown } from "@phosphor-icons/react";

const perguntas = [
    {
        pergunta: "Quais fluidos a bomba helicoidal Voltic pode bombear?",
        resposta:
            "Fluidos viscosos, abrasivos, com sólidos em suspensão, fibrosos e quimicamente agressivos. A compatibilidade depende do material do estator e tipo de vedação, que são definidos no dimensionamento.",
    },
    {
        pergunta: "A Voltic faz dimensionamento?",
        resposta:
            "Sim. Nossa equipe técnica coleta os dados da aplicação (vazão, pressão, tipo de fluido, temperatura) e recomenda o modelo e configuração adequados.",
    },
    {
        pergunta: "A Voltic atende bombas de outras marcas?",
        resposta:
            "Sim. Avaliamos bombas helicoidais Voltic e de outras marcas, conforme modelo, condição e disponibilidade de peças.",
    },
    {
        pergunta: "A empresa fornece peças de reposição?",
        resposta:
            "Sim. Fornecemos peças originais fabricadas pela Voltic, garantindo compatibilidade e desempenho conforme especificação original.",
    },
    {
        pergunta: "Existe assistência técnica em minha região?",
        resposta:
            "Atendemos todo o território nacional, com atendimento técnico conforme disponibilidade e localização da planta.",
    },
    {
        pergunta: "Qual é o prazo de retorno?",
        resposta:
            "Retorno inicial em até 24 horas úteis, em horário comercial (segunda a sexta, 07:30 às 17:30).",
    },
    {
        pergunta: "Quais dados são necessários para um dimensionamento?",
        resposta:
            "Tipo de fluido, vazão desejada, altura manométrica, temperatura, viscosidade, presença de sólidos e condições de operação.",
    },
    {
        pergunta: "A bomba pode operar com fluidos abrasivos?",
        resposta:
            "Sim. Os materiais do estator e rotor são selecionados conforme a abrasividade do fluido durante o dimensionamento.",
    },
    {
        pergunta: "Existe atendimento para manutenção emergencial?",
        resposta:
            "Sim. Atendemos paradas críticas em todo o território nacional, conforme disponibilidade da equipe técnica.",
    },
    {
        pergunta: "Como solicitar uma avaliação?",
        resposta:
            "Entre em contato pelo formulário do site, WhatsApp (47) 3300-2250 ou e-mail vendas@voltic.com.br.",
    },
];

export default function FAQ() {
    const [aberto, setAberto] = useState<number | null>(0);

    const toggle = (index: number) => {
        setAberto((atual) => (atual === index ? null : index));
    };

    return (
        <div className="bg-brand-bg text-brand-text pt-16">
            {/* Hero */}
            <section className="py-16 px-6 border-b border-brand-border">
                <div className="max-w-[800px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center gap-4"
                    >
                        <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full border border-brand-orange/20 w-fit">
                            Suporte // FAQ
                        </div>
                        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter leading-[1.05]">
                            Perguntas Frequentes
                        </h1>
                        <p className="text-sm text-brand-muted max-w-[55ch]">
                            Respostas para as dúvidas mais comuns sobre nossas bombas helicoidais, dimensionamento
                            e assistência técnica.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Accordion */}
            <section className="py-16 px-6 bg-white text-black">
                <div className="max-w-[800px] mx-auto flex flex-col gap-4">
                    {perguntas.map((item, index) => {
                        const estaAberto = aberto === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.5, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
                                className="border border-gray-200 rounded-lg overflow-hidden"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggle(index)}
                                    className="w-full flex items-center justify-between gap-4 p-5 bg-white hover:bg-gray-50 transition-colors text-left"
                                >
                                    <span className="font-heading text-sm sm:text-base font-bold tracking-tight text-black">
                                        {item.pergunta}
                                    </span>
                                    <motion.span
                                        animate={{ rotate: estaAberto ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-brand-orange shrink-0"
                                    >
                                        <CaretDown size={18} />
                                    </motion.span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {estaAberto && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                                                {item.resposta}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
