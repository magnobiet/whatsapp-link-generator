export const Footer = () => {
  return (
    <div className="m-16 flex flex-col gap-4 text-sm text-center">
      <p>
        Nenhum dado é armazenado ou rastreado. O link é gerado em seu navegador.
        O código fonte está disponível no{' '}
        <a
          className="underline"
          href="https://github.com/magnobiet/whatsapp-link-generator"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        .
      </p>

      <p>
        Saiba mais sobre o recurso de conversa em um clique do WhatsApp
        acessando{' '}
        <a
          className="underline"
          href="https://faq.whatsapp.com/5913398998672934/?locale=pt_BR"
          target="_blank"
          rel="noreferrer"
        >
          aqui
        </a>
        .
      </p>
    </div>
  );
};
