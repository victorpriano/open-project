import { useEffect, useState } from 'react';
import { buscarCidades } from '../services/ibge';
import type { CidadeIBGE } from '../types/CidadeIBGE';
import './BuscaRegiao.css';

interface BuscaRegiaoProps {
  onSelecionarCidade: (cidade: CidadeIBGE) => void;
  onLimpar: () => void;
}

export function BuscaRegiao({ onSelecionarCidade, onLimpar }: BuscaRegiaoProps) {
  const [termo, setTermo] = useState('');
  const [cidades, setCidades] = useState<CidadeIBGE[]>([]);

  useEffect(() => {
    if (termo.trim().length < 3) {
      setCidades([]);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        const resultado = await buscarCidades(termo);
        setCidades(resultado);
      } catch {
        setCidades([]);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [termo]);

  return (
    <div className="campo">
      <input
        type="text"
        placeholder="Digite o nome da cidade..."
        value={termo}
        onChange={(e) => {
          setTermo(e.target.value);
          if (e.target.value.trim() === '') {
            onLimpar();
          }
        }}
        className="input"
      />
      {cidades.length > 0 && (
        <ul className="sugestoes">
          {cidades.map((cidade) => (
            <li
              key={cidade.id}
              onClick={() => {
                onSelecionarCidade(cidade);
                setCidades([]);
                setTermo(cidade.nome);
              }}
            >
              {cidade.nome}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
