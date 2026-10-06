# Plano Técnico — Localização de Região no Mapa

## 1. Objetivo

Implementar a funcionalidade descrita em `docs/especificacao-localizacao-mapa.md`:
o usuário digita o nome de uma cidade, seleciona a sugestão retornada pela
API do IBGE e visualiza sua localização em um mapa interativo.

## 2. Stack

- React com TypeScript
- react-leaflet + leaflet (mapa com OpenStreetMap, sem chave de API)
- API do IBGE para autocomplete de cidades
- Geocodificação (ex.: Nominatim/OpenStreetMap) via `axios`

## 3. Estrutura de pastas

```
src/
  components/
    BuscaRegiao.tsx      # input com autocomplete + listagem de sugestões
    Mapa.tsx             # componente de mapa com marcador
    MensagemErro.tsx     # exibição de erro
    Home.tsx             # página principal (estado + handler)
  services/
    ibge.ts              # busca de cidades na API do IBGE
    geocodificacao.ts    # chamada à API de geocodificação
  types/
    Regiao.ts            # interface Regiao
    CidadeIBGE.ts        # interface CidadeIBGE
  App.tsx
```

> Tasks relacionadas: T3, T4, T7, T8, T9

## 4. Etapas de implementação

1. **Setup do projeto**: criar app React com TypeScript (Vite), instalar
   `react-leaflet`, `leaflet`, `axios` e tipos `@types/leaflet`.
   > Tasks: T1, T2
2. **Tipos**: definir `Regiao` e `CidadeIBGE` em `src/types/`.
   > Tasks: T3, T4
3. **Serviços**:
   - `buscarCidades(termo)` em `src/services/ibge.ts`, retornando lista de `CidadeIBGE`.
   - `buscarRegiao(nome)` em `src/services/geocodificacao.ts`, retornando `Regiao` ou lançando erro.
   > Tasks: T5, T6
4. **Componentes**:
   - `BuscaRegiao`: input com autocomplete; a cada digitação, consulta o IBGE
     (com debounce) e lista as sugestões; ao selecionar, chama a geocodificação.
   - `Mapa`: recebe `Regiao` e renderiza marcador com zoom adequado.
   - `MensagemErro`: exibe falhas de busca.
   > Tasks: T7, T8, T9
5. **Integração**: página `Home` concentra os estados `carregando`, `regiao`,
   `cidades` e `erro`; `App.tsx` renderiza apenas `<Home />`.
   > Tasks: T10, T17
6. **Validação**: testar autocomplete, seleção de cidade, buscas inválidas e
   ausência de rede; verificar responsividade.
   > Tasks: T11 a T15
7. **Melhorias**: URLs externas em `.env` (`VITE_*`).
   > Task: T16

## 5. Gerenciamento de estado

Estado local no `App` via `useState`:

```ts
const [regiao, setRegiao] = useState<Regiao | null>(null);
const [cidades, setCidades] = useState<CidadeIBGE[]>([]);
const [erro, setErro] = useState<string | null>(null);
const [carregando, setCarregando] = useState(false);
```

## 6. Pontos de atenção

- Importar o CSS do leaflet no componente `Mapa`.
- Aplicar debounce (ex.: 300ms) nas chamadas ao IBGE a cada tecla digitada.
- Tratar timeout e falha de rede nas chamadas com `axios`.
- Se futuramente usar API com chave, mover para variável de ambiente.
- Centralizar URLs base das APIs externas em variáveis de ambiente (`VITE_*`), com fallback nos valores padrão de desenvolvimento.
- Manter o `App.tsx` enxuto: apenas a composição raiz (ex.: `<Home />`). O componente `Home` concentra o estado e o handler de seleção; regras de negócio e chamadas de API ficam em `services/`.

## 7. Critérios de conclusão

- Build sem erros de TypeScript (`npm run build`).
- Autocomplete funcionando com sugestões da API do IBGE.
- Fluxo completo funcionando: digitar → selecionar cidade → ver no mapa.
