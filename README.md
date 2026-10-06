# Localizador de Cidades

Aplicação frontend em React com TypeScript que permite ao usuário informar o
nome de uma cidade, selecioná-la em sugestões obtidas da API do IBGE
(autocomplete) e visualizar sua localização em um mapa interativo
(react-leaflet + OpenStreetMap).

> Projeto criado com o auxílio do [OpenCode](https://opencode.ai), um agente de
> programação por IA.

## Como executar

```bash
npm install
npm run dev
```

## Estrutura do projeto

```
src/
  components/   # componentes React (Home, BuscaRegiao, Mapa, MensagemErro)
  services/     # chamadas de API (IBGE, geocodificação)
  styles/       # folhas de estilo por componente (NomeDoComponente.css)
  types/        # tipos TypeScript compartilhados
docs/           # documentação do processo de desenvolvimento
```

## Documentação do processo (`docs/`)

Os arquivos da pasta `docs/` foram criados seguindo a abordagem de
**Spec Driven Development** (desenvolvimento orientado por especificação):

1. **Especificação** (`especificacao-localizacao-mapa.md`) — define objetivo,
   requisitos funcionais e não funcionais, critérios de aceite e o que está
   fora de escopo.
2. **Plano técnico** (`plano-tecnico.md`) — traduz a especificação em
   arquitetura, stack, estrutura de pastas e etapas de implementação.
3. **Tasks** (`tasks.md`) — checklist numerado (T1, T2...) de tarefas
   executáveis, agrupadas por etapas, com marcação de progresso.

A cada mudança de escopo, a especificação e o plano são atualizados antes do
código.

## `AGENTS.md`

O arquivo `AGENTS.md` na raiz contém as instruções para agentes de IA que
trabalham neste repositório: visão geral do projeto, comandos comuns,
convenções de código e boas práticas (como pedir autorização antes de alterar
arquivos e commitar ao concluir cada task). Ele serve como contexto persistente
para a IA durante o desenvolvimento.
