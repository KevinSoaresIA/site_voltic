import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Gear } from "@phosphor-icons/react";

export default function EmConstrucao({ title }: { title: string }) {
    return (
        <div className="bg-brand-bg min-h-screen text-brand-text flex items-center justify-center px-6 pt-16 pb-16">
            <div className="max-w-[600px] w-full flex flex-col items-center text-center gap-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="p-6 bg-brand-card border border-brand-border rounded-lg"
                >
                    <Gear size={48} className="text-brand-blue-bright animate-spin" style={{ animationDuration: "3s" }} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white bg-white/10 px-3 py-1.5 rounded-full border border-white/20"
                >
                    Em Construção
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter leading-[1.05]"
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-sm text-brand-muted leading-relaxed max-w-[45ch]"
                >
                    Esta página está em desenvolvimento. Em breve você encontrará aqui todas as informações técnicas sobre este produto.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row gap-4 mt-2"
                >
                    <Link
                        to="/bombahelicoidal"
                        className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-blue hover:bg-brand-blue-hover active:scale-[0.98] text-white font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200"
                    >
                        Ver Bomba Helicoidal
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        to="/contato"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-card hover:bg-zinc-800 border border-brand-border active:scale-[0.98] text-brand-text font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200"
                    >
                        Fale Conosco
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}