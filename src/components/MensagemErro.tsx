import '../styles/MensagemErro.css';

interface MensagemErroProps {
  mensagem: string;
}

export function MensagemErro({ mensagem }: MensagemErroProps) {
  return (
    <p role="alert" className="erro">
      Erro: {mensagem}
    </p>
  );
}
