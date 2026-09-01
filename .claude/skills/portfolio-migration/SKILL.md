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

## Camada 2 — animações (regras)
Agora entramos nas animações com Lenis, anime.js e GSAP. Regras obrigatórias em toda peça animada:

- **prefers-reduced-motion**: todo efeito deve checar `window.matchMedia('(prefers-reduced-motion: reduce)')`. Se o usuário prefere menos movimento, desligue o efeito — o site precisa continuar 100% funcional e legível, nunca ficar em branco ou travado por causa disso.
- **Performance**: evite múltiplos loops de `requestAnimationFrame` concorrentes. Prefira centralizar. Use um único `<canvas>` para partículas no site todo, não um por seção.
- **Cleanup**: todo efeito montado em `useEffect` deve ter cleanup (remover listeners, cancelar rAF, destruir instâncias) no return.
- **Mobile**: efeitos pesados (partículas densas, parallax de fundo) devem ser aliviados ou desligados em telas pequenas e em dispositivos touch.
- **Intensidade por seção**: partículas e parallax são mais intensos no Hero e mais sutis/discretos nas demais seções, para não competir com a leitura de conteúdo.
- **Cores**: efeitos usam as CSS vars existentes (`--accent`, `--line`), nunca cores hardcoded, para respeitarem tema claro/escuro e o seletor de accent.
