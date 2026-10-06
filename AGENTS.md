# AGENTS.md

Aplicação frontend em React com TypeScript que localiza no mapa a cidade informada pelo usuário.

## Visão geral do projeto

- Stack: React com TypeScript
- Estrutura: código-fonte em `src/`

## Comandos comuns

```bash
# Instalar dependências
npm install

# Rodar o servidor de desenvolvimento
npm run dev

# Rodar testes
npm test

# Gerar build de produção
npm run build
```

## Convenções

- Utilize TypeScript em todo o código (arquivos `.ts`/`.tsx`); evite `any` e defina tipos/interfaces explícitos.
- Use componentes funcionais com hooks (não componentes de classe).
- Componentes em PascalCase dentro de `src/components/`; arquivos auxiliares em camelCase.
- Mantenha a lógica de busca/geocodificação da região separada da renderização do mapa.
- Usar arquivos CSS por componente na pasta `src/styles/`, com o mesmo nome do componente no formato `NomeDoComponente.css` (ex.: `Mapa.css`). A pasta `src/components/` contém apenas componentes.
- Mantenha mudanças pequenas e focadas.
- Não commite credenciais, chaves de API de mapas ou arquivos `.env` (use `.env.example`).

## Instruções para os agentes de IA

- Antes de qualquer ajuste, analise o que precisa ser feito, leia os arquivos atuais e verifique o que já está implementado, evitando sobrescrever trabalho existente.
- Sempre peça autorização ao usuário antes de criar ou modificar arquivos.
- Reutilize componentes e utilitários existentes antes de criar novos.
- Centralize chamadas a APIs externas (geocodificação, tiles de mapa) em módulos próprios em `src/`.
- Chaves de API devem vir de variáveis de ambiente (`REACT_APP_*` ou `VITE_*`), nunca hardcoded.
- Ao finalizar, explique brevemente o que foi feito e como validar no navegador.
- Sempre que uma task for concluída, marcá-la com `[x]` no arquivo `docs/tasks.md`.
- Sempre que uma task for concluída, realizar um commit com as alterações.

## Notas

- Biblioteca de mapas definida no plano técnico: react-leaflet (OpenStreetMap) — não introduzir outra sem justificativa.
- Atualize este arquivo sempre que o projeto mudar de forma relevante.
