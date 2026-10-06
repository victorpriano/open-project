# Especificação — Localização de Região no Mapa

## Objetivo

Permitir que o usuário informe uma cidade e visualize sua localização em um mapa.

## Descrição

Aplicação frontend em React com TypeScript. O usuário digita o nome de uma cidade,
o sistema busca as cidades correspondentes na API do IBGE e exibe
sugestões em formato autocomplete. Ao selecionar uma cidade na lista, o sistema
busca suas coordenadas e exibe a localização em um mapa interativo.

## Requisitos funcionais

1. Campo de texto com autocomplete: ao digitar o nome de uma cidade, listar
   sugestões obtidas da API do IBGE.
2. Ao selecionar uma cidade na lista de sugestões, buscar suas coordenadas.
3. Exibir o mapa com um marcador/cidade na localização encontrada.
4. Exibir mensagem de erro quando a cidade não for encontrada.
5. Exibir indicador de carregamento enquanto a busca é processada.
6. Centrar e aplicar zoom adequado no mapa ao encontrar a cidade.

## Requisitos não funcionais

- A busca deve responder em até 3 segundos em condições normais.
- A interface deve ser responsiva (desktop e mobile).
- Chaves de API devem vir de variáveis de ambiente (`REACT_APP_*` ou `VITE_*`).

## Arquitetura sugerida

- `src/components/` — componentes de UI (formulário de busca, mapa, mensagens).
- `src/services/` — módulos responsáveis pelas chamadas às APIs (IBGE e geocodificação).
- `src/types/` — tipos TypeScript compartilhados.
- Biblioteca de mapas: react-leaflet (OpenStreetMap) — padrão do projeto.

## Tipo de dados principal

```ts
interface Regiao {
  nome: string;
  latitude: number;
  longitude: number;
}

interface CidadeIBGE {
  id: number;
  nome: string;
}
```

## Fora de escopo (por enquanto)

- Autenticação de usuários.
- Histórico de buscas.
- Múltiplos marcadores simultâneos.
- Seleção de cidade por clique no mapa.

## Critérios de aceite

- Dado uma cidade válida, o mapa centra na sua localização com zoom adequado.
- Ao digitar no campo de busca, as sugestões de cidades da API do IBGE devem aparecer.
- Dado uma cidade inexistente, exibir mensagem amigável ao usuário.
- Durante a busca, exibir um indicador de carregamento.
- Uma falha na API do IBGE (ex.: timeout ou erro de rede) deve exibir mensagem clara ao usuário.
