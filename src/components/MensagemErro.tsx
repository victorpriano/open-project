interface MensagemErroProps {
  mensagem: string;
}

export function MensagemErro({ mensagem }: MensagemErroProps) {
  return <p role="alert">Erro: {mensagem}</p>;
}
