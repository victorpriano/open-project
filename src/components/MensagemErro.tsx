import styles from './MensagemErro.module.css';

interface MensagemErroProps {
  mensagem: string;
}

export function MensagemErro({ mensagem }: MensagemErroProps) {
  return (
    <p role="alert" className={styles.erro}>
      Erro: {mensagem}
    </p>
  );
}
