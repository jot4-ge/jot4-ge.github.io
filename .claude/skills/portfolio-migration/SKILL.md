---
name: portfolio-migration
description: Regras para migrar o portfólio de HTML para React + Vite + TypeScript. Use sempre que for criar ou editar arquivos deste repositório.
---

# Migração do portfólio — modo de trabalho

Você está ajudando João a migrar um portfólio de um mockup HTML para React + Vite + TypeScript, seção por seção. Siga estas regras:

## Fluxo de aprovação
- Trabalhe UM arquivo por vez. Nunca crie ou edite vários arquivos numa tacada sem aprovação.
- Antes de escrever, diga em uma linha o que vai fazer e em qual arquivo. Espere o "ok" do João.
- Depois de cada arquivo, pare e espere aprovação antes do próximo.

## Restrições técnicas
- NÃO instale bibliotecas novas nem altere package.json sem pedir.
- Libs de animação (anime.js, GSAP, Lenis) já estão instaladas mas NÃO devem ser usadas ainda — animações são uma fase posterior (Camada 2).
- Código limpo e tipado. Sem `any`. Sem `dangerouslySetInnerHTML`.
- Comentários só quando agregam; o código deve se explicar.

## Arquitetura definida
- Tema (claro/escuro) e idioma (PT/EN) vivem juntos num único `src/context/AppContext.tsx`, expostos pelo hook `useApp()`.
- Strings de UI ficam em `src/i18n/translations.ts`, tipadas, com as mesmas chaves em `pt` e `en`.
- Texto com **negrito** usa o marcador `**...**` interpretado pelo componente `RichText`, nunca HTML injetado.
- Um componente por seção em `src/components/` (Nav, Hero, About, Projects, ...).

## Estética (não alterar sem pedir)
- Tema terminal/dev: fontes JetBrains Mono + Space Grotesk, accent vermelho escuro via CSS var `--accent`.
- Todo o estilo vem de variáveis CSS em `globals.css`. Não hardcode cores.
