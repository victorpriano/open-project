import axios from 'axios';
import type { Regiao } from '../types/Regiao';

interface NominatimResultado {
  display_name: string;
  lat: string;
  lon: string;
}

const GEOCODIFICACAO_BASE_URL =
  import.meta.env.VITE_GEOCODIFICACAO_BASE_URL ?? 'https://nominatim.openstreetmap.org';

export async function buscarRegiao(nome: string): Promise<Regiao> {
  const response = await axios.get<NominatimResultado[]>(
    `${GEOCODIFICACAO_BASE_URL}/search`,
    {
      params: { q: nome, format: 'json', limit: 1 },
      headers: { 'Accept-Language': 'pt-BR' },
    }
  );

  const resultado = response.data[0];
  if (!resultado) {
    throw new Error(`Localização não encontrada para "${nome}"`);
  }

  return {
    nome: resultado.display_name,
    latitude: parseFloat(resultado.lat),
    longitude: parseFloat(resultado.lon),
  };
}
