# Tasks — Localização de Região no Mapa

> **Ponto de verificação:** sempre que uma task for concluída, marcá-la com `[x]` imediatamente e realizar um commit.

## Etapa 1 — Setup

- [x] T1: Criar projeto React com TypeScript (Vite)
- [x] T2: Instalar `react-leaflet`, `leaflet`, `axios` e `@types/leaflet`

## Etapa 2 — Tipos

- [ ] T3: Definir interface `Regiao` em `src/types/Regiao.ts`
- [ ] T4: Definir interface `CidadeIBGE` em `src/types/CidadeIBGE.ts`

## Etapa 3 — Serviços

- [ ] T5: Implementar `buscarCidades(termo)` em `src/services/ibge.ts`
- [ ] T6: Implementar `buscarRegiao(nome)` em `src/services/geocodificacao.ts`

## Etapa 4 — Componentes

- [ ] T7: Criar `BuscaRegiao` com autocomplete e debounce
- [ ] T8: Criar `Mapa` com marcador e zoom adequado
- [ ] T9: Criar `MensagemErro`

## Etapa 5 — Integração

- [ ] T10: Integrar estados `regiao`, `cidades`, `erro` e `carregando` no `App`

## Etapa 6 — Validação

- [ ] T11: Testar autocomplete com API do IBGE
- [ ] T12: Testar fluxo completo: digitar → selecionar cidade → ver no mapa
- [ ] T13: Testar busca inválida e ausência de rede
- [ ] T14: Verificar responsividade
- [ ] T15: Garantir build sem erros de TypeScript (`npm run build`)
