import { motion } from "motion/react";

export default function Privacidade() {
    return (
        <div className="bg-brand-bg text-brand-text pt-16">
            {/* Hero */}
            <section className="py-16 px-6 border-b border-brand-border">
                <div className="max-w-[800px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col gap-4"
                    >
                        <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-full border border-brand-orange/20 w-fit">
                            Institucional // LGPD
                        </div>
                        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter leading-[1.05]">
                            Política de Privacidade
                        </h1>
                        <p className="text-sm text-brand-muted">
                            Última atualização: 11 de agosto de 2026
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Conteúdo */}
            <section className="py-16 px-6 bg-white text-black">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-[800px] mx-auto flex flex-col gap-10 text-sm text-gray-700 leading-relaxed"
                >
                    <p>
                        Esta Política de Privacidade descreve como a Voltic Bombas coleta, utiliza e protege os
                        dados pessoais fornecidos por visitantes e usuários deste site, em conformidade com a Lei
                        Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                    </p>

                    <div className="flex flex-col gap-3">
                        <h2 className="font-heading text-xl font-bold tracking-tight text-black">
                            1. Quais dados coletamos
                        </h2>
                        <p>
                            Coletamos os dados que você nos fornece voluntariamente ao preencher os formulários do
                            site (contato, solicitação de dimensionamento e candidatura a vagas): nome, e-mail,
                            telefone, empresa e o conteúdo da mensagem enviada.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="font-heading text-xl font-bold tracking-tight text-black">
                            2. Finalidade da coleta
                        </h2>
                        <p>
                            Os dados coletados são utilizados exclusivamente para responder às suas solicitações
                            comerciais e técnicas (contato, orçamento e dimensionamento) e para fins de recrutamento
                            e seleção, quando enviados através do formulário de candidatura da página Trabalhe
                            Conosco.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="font-heading text-xl font-bold tracking-tight text-black">
                            3. Base legal
                        </h2>
                        <p>
                            O tratamento dos seus dados pessoais é realizado com base no seu consentimento,
                            fornecido no momento do envio de cada formulário, conforme previsto na LGPD (Lei nº
                            13.709/2018).
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="font-heading text-xl font-bold tracking-tight text-black">
                            4. Compartilhamento de dados
                        </h2>
                        <p>
                            Não compartilhamos, vendemos ou cedemos seus dados pessoais a terceiros. As
                            informações fornecidas são utilizadas apenas internamente pelas equipes comercial,
                            técnica e de recursos humanos da Voltic Bombas.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="font-heading text-xl font-bold tracking-tight text-black">
                            5. Armazenamento e segurança
                        </h2>
                        <p>
                            Os dados são armazenados de forma segura, com acesso restrito às pessoas responsáveis
                            pelo atendimento das solicitações. Adotamos medidas técnicas razoáveis para proteger
                            suas informações contra acesso não autorizado, perda ou alteração indevida.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="font-heading text-xl font-bold tracking-tight text-black">
                            6. Seus direitos como titular dos dados
                        </h2>
                        <p>Nos termos da LGPD, você tem direito a:</p>
                        <ul className="flex flex-col gap-2 pl-5 list-disc">
                            <li>Confirmar a existência de tratamento dos seus dados;</li>
                            <li>Acessar os dados que temos sobre você;</li>
                            <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
                            <li>Solicitar a exclusão dos seus dados, quando aplicável;</li>
                            <li>Revogar o consentimento fornecido, a qualquer momento.</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="font-heading text-xl font-bold tracking-tight text-black">
                            7. Contato
                        </h2>
                        <p>
                            Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato
                            pelo e-mail{" "}
                            <a href="mailto:vendas@voltic.com.br" className="text-brand-orange font-medium hover:underline">
                                vendas@voltic.com.br
                            </a>
                            .
                        </p>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
