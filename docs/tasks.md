# Tasks — Localização de Região no Mapa

> **Ponto de verificação:** sempre que uma task for concluída, marcá-la com `[x]` imediatamente e realizar um commit.

## Etapa 1 — Setup

- [x] T1: Criar projeto React com TypeScript (Vite)
- [x] T2: Instalar `react-leaflet`, `leaflet`, `axios` e `@types/leaflet`

## Etapa 2 — Tipos

- [x] T3: Definir interface `Regiao` em `src/types/Regiao.ts`
- [x] T4: Definir interface `CidadeIBGE` em `src/types/CidadeIBGE.ts`

## Etapa 3 — Serviços

- [x] T5: Implementar `buscarCidades(termo)` em `src/services/ibge.ts`
- [x] T6: Implementar `buscarRegiao(nome)` em `src/services/geocodificacao.ts`

## Etapa 4 — Componentes

- [x] T7: Criar `BuscaRegiao` com autocomplete e debounce
- [x] T8: Criar `Mapa` com marcador e zoom adequado
- [x] T9: Criar `MensagemErro`

## Etapa 5 — Integração

- [x] T10: Integrar estados `regiao`, `cidades`, `erro` e `carregando` no `App`

## Etapa 6 — Validação

- [ ] T11: Testar autocomplete com API do IBGE
- [ ] T12: Testar fluxo completo: digitar → selecionar cidade → ver no mapa
- [ ] T13: Testar busca inválida e ausência de rede
- [ ] T14: Verificar responsividade
- [ ] T15: Garantir build sem erros de TypeScript (`npm run build`)

## Etapa 7 — Melhorias

- [x] T16: Centralizar URLs base das APIs em variáveis de ambiente (`VITE_*`)
- [x] T17: Extrair estados e handler de `App.tsx` para o componente `Home`

## Etapa 8 — Melhorias de estilo/UX

- [x] T18: Remover CSS não utilizado do template (`App.css` e trechos de `index.css`)
- [x] T19: Estilizar autocomplete como dropdown (posição absoluta, hover, cursor pointer)
- [ ] T20: Estilizar o campo de input (largura, padding, foco acessível)
- [ ] T21: Padronizar CSS Modules nos componentes (BuscaRegiao, Home, MensagemErro)
- [ ] T22: Destacar mensagem de erro (cor de alerta, fundo suave)
- [ ] T23: Melhorar indicação de carregamento
- [ ] T24: Tornar altura do mapa responsiva (ex.: 60vh) com borda/sombra
- [ ] T25: Ajustar layout do Home (max-width, centralização, espaçamentos)
