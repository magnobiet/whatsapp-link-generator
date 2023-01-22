import { FormEvent, useState } from 'react';
import { Alert, Button, FormGroup, Input, Label } from '..';

const sanitizeNumber = (text: string): string => {
  return text.replace(/[^0-9.]/g, '');
};

export const Form = () => {
  const [number, setNumber] = useState('');
  const [text, setText] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLink('');

    const sanitizedNumber = sanitizeNumber(number);
    // let link = 'https://api.whatsapp.com/send?phone=55';
    let link = 'https://wa.me/55';

    if (sanitizedNumber.length !== 11) {
      return;
    }

    link += sanitizedNumber;

    if (text !== '') {
      link += `?text=${encodeURI(text)}`;
    }

    setLink(link);
  };

  return (
    <>
      <p className="m-16 font-bold text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
        Crie seu link do seu WhatsApp em instantes! Você o insere no seu site e
        demais canais digitais para iniciar conversas em apenas um clique.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col max-w-xs m-auto">
        <FormGroup>
          <Label htmlFor="number">Número do WhatsApp (com DDD)</Label>

          <Input
            type="text"
            id="number"
            name="number"
            placeholder="Exemplo: 11988887777"
            maxLength={11}
            value={number}
            onChange={({ target: { value } }) =>
              setNumber(sanitizeNumber(value))
            }
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="text">Mensagem (opcional)</Label>

          <Input
            type="text"
            id="text"
            name="text"
            maxLength={128}
            value={text}
            onChange={({ target: { value } }) => setText(value)}
          />
        </FormGroup>

        <Button type="submit">Gerar meu link</Button>
      </form>

      {link ? (
        <Alert>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            {link}
          </a>
        </Alert>
      ) : null}
    </>
  );
};
