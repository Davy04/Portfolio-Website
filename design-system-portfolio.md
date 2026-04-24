# Design System — Portfólio

> Estética retro-digital: escuro, pixelado, técnico e direto.  
> Base visual inspirada no curricu.lol.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | React 18 |
| Build | Vite |
| Linguagem | TypeScript |
| Estilo | CSS Modules |
| Deploy | GitHub Pages |
| CI | GitHub Actions (`gh-pages`) |

**Configuração necessária no `vite.config.ts`:**
```ts
export default defineConfig({
  base: '/nome-do-repositorio/',
})
```

**Estrutura de pastas sugerida:**
```
src/
  components/
    Header/

## Identidade visual

- Fundo escuro quase uniforme
- Tipografia pixelada nos títulos, monoespaçada no resto
- Cor de destaque: laranja — use com moderação
- Bordas finas, sem arredondamentos exagerados
- Sem decorações desnecessárias

---

## Paleta de cores

| Função | Hex |
|---|---|
| Fundo principal | `#202020` |
| Fundo secundário | `#181818` |
| Borda | `#333333` |
| Texto principal | `#E8E8E8` |
| Texto secundário | `#A0A0A0` |
| Destaque (laranja) | `#FF9F1C` |

---

## Tipografia

**Títulos** — fonte pixelada/bitmap:
- `Pixelify Sans`, `Press Start 2P`, `VT323`
- Uppercase, sem gradiente

**Textos e interface** — fonte mono:
- `IBM Plex Mono`, `JetBrains Mono`, `Space Mono`
- Usada no menu, botões, labels, descrições

**Escala:**
```css
--font-hero: clamp(52px, 6vw, 96px);
--font-title: clamp(36px, 4vw, 64px);
--font-body: 16px;
--font-small: 13px;
```

---

## Tokens CSS

```css
:root {
  --color-bg: #202020;
  --color-bg-deep: #181818;
  --color-border: #333333;
  --color-text: #E8E8E8;
  --color-text-muted: #A0A0A0;
  --color-accent: #FF9F1C;

  --font-display: "Pixelify Sans", monospace;
  --font-mono: "IBM Plex Mono", monospace;

  --motion-fast: 120ms;
  --motion-normal: 220ms;
}
```

---

## Componentes

### Header
```
NOME.DEV [BUILD]        PROJETOS  SOBRE  CONTATO        [CONTATO]
```
- Fundo igual ao site, borda inferior `1px solid #333`
- Logo à esquerda, menu central, botão à direita
- Tudo em monoespaçada, uppercase

### Botão primário
```css
background: transparent;
border: 1px solid #FF9F1C;
color: #FF9F1C;
padding: 16px 32px;
font-family: var(--font-mono);
text-transform: uppercase;
border-radius: 0;
```

### Hover
```css
background: #FF9F1C;
color: #181818;
```

---

## Seções do portfólio

### Hero
```
CRIO
EXPERIÊNCIAS
DIGITAIS QUE
FUNCIONAM
```
- Palavras-chave em laranja (`#FF9F1C`)
- CTA: `> VER PROJETOS`
- Link secundário: `GITHUB →`

---

### Projetos
Label: `PROJECTS.LOG`

Cada projeto tem:
- Nome (uppercase, mono bold)
- Tecnologias (texto pequeno, laranja ou cinza)
- Descrição curta e direta
- Link (`→ VER PROJETO`)

Exemplo:
```
NOME DO PROJETO
React · TypeScript · API

Descrição técnica curta do que foi construído
e qual problema resolve.

→ VER PROJETO
```

---

### Sobre
Label: `ABOUT_PROFILE`

```
Desenvolvedor focado em [sua especialidade].
Construo [tipo de projeto] com [tecnologias].

Meu trabalho fica entre [área 1] e [área 2].
```
- Texto curto, sem frases motivacionais
- Tom direto e confiante

---

### Contato
Label: `CONTACT`

```
Tem um projeto para construir?

> ENTRAR EM CONTATO
GITHUB →
LINKEDIN →
```

---

## Regras rápidas

- ✓ Poucos elementos, muito contraste
- ✓ Tipografia como protagonista
- ✓ Laranja só em pontos de destaque
- ✗ Sem gradientes, glassmorphism ou bordas arredondadas grandes
- ✗ Sem textos genéricos tipo "transformando ideias em realidade"
- ✗ Sem sombras suaves ou ícones desnecessários

---

> **Regra principal:** se o elemento não parece interface de sistema, tire.
