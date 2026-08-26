/**
 * Define o <title> e a <meta name="description"> de uma página.
 *
 * React 19 iça (hoist) automaticamente <title>, <meta> e <link> renderizados
 * em qualquer componente para dentro do <head> do documento — não precisa de
 * react-helmet nem de nenhuma biblioteca externa. Ao trocar de rota, o título
 * antigo é desmontado e o novo assume o lugar automaticamente.
 */
export function Seo({ title, description }: { title: string; description: string }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
}
