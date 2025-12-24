# CLAUDE.md

Instruções para Claude Code ao trabalhar neste repositório.

---

## Propósito do Projeto

Site do curso **AI Fluency** — um curso de fluência em Inteligência Artificial para profissionais de todas as áreas, usando o Framework 4D (Delegation, Description, Discernment, Diligence).

**URL de Produção:** <https://aifluency.vercel.app>

**Tema visual:** "O Guia do Mochileiro das Galáxias" de Douglas Adams — atmosfera espacial acolhedora, retro-futurista.

**Idioma:** Todo o conteúdo é em **Português (Brasil)**.

---

## Stack Técnica

| Tecnologia | Versão | Notas |
|------------|--------|-------|
| Next.js | 16.1 | App Router, Server Components |
| React | 19 | |
| Tailwind CSS | 4.x | Usa `@theme inline` em `globals.css` |
| TypeScript | 5.x | Strict mode |
| react-markdown | latest | Com remark-gfm para tabelas e listas |

---

## Estrutura de Arquivos

```
src/
├── app/                    # Páginas (App Router)
│   ├── page.tsx            # Home
│   ├── layout.tsx          # Layout principal (Header + Footer)
│   ├── globals.css         # Tema Tailwind + estilos globais
│   ├── not-found.tsx       # Página 404
│   ├── error.tsx           # Página de erro global
│   ├── loading.tsx         # Loading state durante navegação
│   ├── sitemap.ts          # Sitemap dinâmico para SEO
│   ├── framework/          # /framework
│   ├── modulos/            # /modulos e /modulos/[id]
│   ├── vocabulario/        # /vocabulario
│   ├── recursos/           # /recursos
│   ├── sobre/              # /sobre
│   └── como-funcionam-llms/ # /como-funcionam-llms
├── components/
│   ├── layout/             # Header.tsx, Footer.tsx
│   └── ui/                 # Componentes reutilizáveis
│       ├── MarkdownContent.tsx   # Renderiza markdown com estilos
│       ├── FluencyPlanTemplate.tsx # Template interativo do Módulo 4
│       ├── ModuleCard.tsx        # Card de módulo na home
│       ├── AlertBox.tsx          # Caixas de alerta (panic, info)
│       ├── GuideQuote.tsx        # Citações estilizadas
│       └── ExerciseBlock.tsx     # Blocos de exercício
├── content/                # Conteúdo do curso em TypeScript
│   ├── modulos.ts          # Metadados dos módulos (título, descrição, image, slidesUrl)
│   ├── modulo1Content.ts   # Conteúdo markdown do Módulo 1
│   ├── modulo2Content.ts   # Conteúdo markdown do Módulo 2
│   ├── modulo3Content.ts   # Conteúdo markdown do Módulo 3
│   ├── modulo4Content.ts   # Conteúdo markdown do Módulo 4
│   ├── vocabularioContent.ts
│   ├── comoFuncionamLLMs.ts
│   └── sobre.ts
└── lib/                    # Utilitários (vazio por enquanto)

public/
├── favicon.svg             # Favicon do site
├── robots.txt              # Instruções para crawlers
├── slides/                 # PDFs dos slides
│   ├── modulo-1.pdf
│   ├── modulo-2.pdf
│   └── modulo-3.pdf
└── images/                 # Assets visuais
    ├── hero-background.png # Background do hero section
    ├── logo.png            # Logo da navbar (128x128)
    ├── modules/            # Ícones dos 4 módulos (512x512)
    │   ├── delegation.png
    │   ├── description.png
    │   ├── discernment.png
    │   └── diligence.png
    └── icons/              # Ícones diversos
        ├── slides.png      # Ícone de slides (64x64)
        └── dolphin.png     # Golfinho do footer (64x64)
```

---

## Assets Visuais

### Estilo das Imagens

Todas as ilustrações seguem a estética **retro-futurista dos anos 70-80**, inspirada em capas de livros de ficção científica e "O Guia do Mochileiro das Galáxias".

**Características:**
- Fundo transparente (PNG)
- Paleta de cores do tema (amarelo dourado, roxo, azul)
- Estilo vetorial limpo com gradientes suaves
- Reconhecíveis em tamanhos pequenos

### Uso de Imagens com Next.js

```tsx
import Image from "next/image";

// Com fill (para containers relativos)
<div className="relative w-16 h-16">
  <Image
    src="/images/modules/delegation.png"
    alt="Delegation"
    fill
    sizes="64px"
    className="object-contain"
  />
</div>
```

**Importante:** Sempre incluir a prop `sizes` quando usar `fill` para evitar warnings.

### Emojis Mantidos

Alguns emojis foram **intencionalmente mantidos** onde funcionam bem:
- Componentes UI (AlertBox, GuideQuote, ExerciseBlock)
- Páginas especiais (404, Error)
- Listas e categorias em páginas de conteúdo

---

## Padrões Importantes

### Cores do Tema

Definidas em `globals.css` com `@theme inline`:

```css
--color-space-blue: #0B1426;      /* Fundo principal */
--color-nebula-blue: #1E3A5F;     /* Elementos secundários */
--color-guide-yellow: #F5A623;    /* Destaque (cor do Guia) */
--color-star-white: #F0F4F8;      /* Texto */
--color-galaxy-purple: #6B5B95;   /* Acentos */
--color-towel-green: #2ECC71;     /* Sucesso */
--color-panic-red: #E74C3C;       /* Alertas */
--color-space-blue-dark: #060A13; /* Fundo mais escuro */
```

### Botões Amarelos (CTA)

Links/botões com `bg-guide-yellow` precisam de `!text-[#060A13]` para sobrescrever o estilo global de `<a>`:

```tsx
className="bg-guide-yellow !text-[#060A13] font-bold px-8 py-4 rounded-lg hover:bg-guide-yellow/90 transition-colors shadow-lg"
```

### Marcador para Componentes em Markdown

O `MarkdownContent` suporta injeção de componentes React via marcadores HTML:

```typescript
// Em modulo4Content.ts
`### Template: Meu Plano de Fluência em IA

<!-- FLUENCY_PLAN_TEMPLATE -->

---`
```

### Conteúdo como Template Literals

O conteúdo dos módulos é armazenado como template literals em TypeScript:

```typescript
// src/content/modulo1Content.ts
export const modulo1Content = `# Módulo 1 — Delegation
...
`;
```

---

## Operações Comuns

### Adicionar Slides de um Módulo

1. Copiar PDF para `public/slides/modulo-N.pdf`
2. Atualizar `src/content/modulos.ts`:
   ```typescript
   slidesUrl: "/slides/modulo-N.pdf",
   ```

### Adicionar Nova Imagem de Módulo

1. Gerar imagem 512x512px com fundo transparente
2. Salvar em `public/images/modules/nome.png`
3. Atualizar `src/content/modulos.ts`:
   ```typescript
   image: "/images/modules/nome.png",
   ```

### Adicionar Nova Página

1. Criar pasta em `src/app/nome-da-pagina/`
2. Criar `page.tsx` com metadata e conteúdo
3. Adicionar link no `Header.tsx` se necessário

### Editar Conteúdo de Módulo

Editar o arquivo correspondente em `src/content/`:
- `modulo1Content.ts`, `modulo2Content.ts`, etc.
- Usar markdown padrão (headings, listas, tabelas, blockquotes)

---

## Comandos

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Servir build de produção
npm run lint     # ESLint
```

---

## Convenções de Código

- **Componentes:** PascalCase, um por arquivo
- **Arquivos de conteúdo:** camelCase (ex: `modulo1Content.ts`)
- **CSS:** Tailwind utilities, evitar CSS custom exceto em `globals.css`
- **Commits:** Português, presente do indicativo
- **Imagens:** PNG com transparência, nomes em kebab-case

---

## Segurança e SEO

### Headers de Segurança

Configurados em `next.config.ts`:

- `X-Frame-Options: DENY` — previne clickjacking
- `X-Content-Type-Options: nosniff` — previne MIME sniffing
- `Strict-Transport-Security` — força HTTPS
- `Referrer-Policy` — controla informações de referer
- `Permissions-Policy` — desabilita câmera, microfone, geolocalização

### SEO

- **Sitemap dinâmico:** `src/app/sitemap.ts` gera `/sitemap.xml` automaticamente
- **Robots.txt:** `public/robots.txt` com referência ao sitemap
- **Metadata:** Configurado em `layout.tsx` com Open Graph

---

## Deploy

O projeto está hospedado na **Vercel** com deploy automático a partir da branch `main`.

- **URL:** <https://aifluency.vercel.app>
- **Build:** `npm run build` (100% estático/SSG)
- **Tempo de build:** ~2s

---

## Documentação Adicional

- **DESIGN_IMPROVEMENTS.md** — Histórico de melhorias visuais, prompts usados para gerar imagens, decisões de design

---

## Contexto do Autor

**Dr. Iuri Almeida** — Médico pediatra especialista em infectologia pediátrica, oficial médico na PMDF, estudante de Ciência da Computação na FIAP. Desenvolvendo este curso para ensinar fluência em IA a colegas profissionais.

---

*Última atualização: Dezembro 2025*
