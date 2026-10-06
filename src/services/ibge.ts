import axios from 'axios';
import type { CidadeIBGE } from '../types/CidadeIBGE';

const IBGE_BASE_URL =
  import.meta.env.VITE_IBGE_BASE_URL ?? 'https://servicodados.ibge.gov.br/api/v1/localidades';

export async function buscarCidades(termo: string): Promise<CidadeIBGE[]> {
  const response = await axios.get<CidadeIBGE[]>(`${IBGE_BASE_URL}/municipios`);
  const termoNormalizado = termo.trim().toLowerCase();
  return response.data
    .filter((cidade) => cidade.nome.toLowerCase().includes(termoNormalizado))
    .slice(0, 10);
}
