# AI Fluency

Site do curso de **Fluência em Inteligência Artificial** usando o Framework 4D.

Inspirado em "O Guia do Mochileiro das Galáxias" de Douglas Adams.

**Site:** <https://aifluency.vercel.app>

## Stack

- **Next.js 16.1** com App Router
- **Tailwind CSS v4** com `@theme inline`
- **React 19**
- **TypeScript**
- **react-markdown** com remark-gfm
- **@vercel/analytics** — métricas de visitantes
- **@vercel/speed-insights** — Web Vitals em produção

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Build de produção
npm run build
```

O site roda em http://localhost:3000

## Estrutura do Projeto

```
ai-fluency/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── slides/                 # PDFs dos slides por módulo
│   └── images/                 # Assets visuais
│       ├── hero-background.png # Background do hero
│       ├── logo.png            # Logo da navbar
│       ├── modules/            # Ícones dos 4 módulos
│       │   ├── delegation.png
│       │   ├── description.png
│       │   ├── discernment.png
│       │   └── diligence.png
│       └── icons/              # Ícones diversos
│           ├── slides.png
│           └── dolphin.png
├── src/
│   ├── app/                    # Páginas (App Router)
│   ├── components/
│   │   ├── layout/             # Header, Footer
│   │   └── ui/                 # Componentes reutilizáveis
│   ├── content/                # Conteúdo em TypeScript
│   └── lib/                    # Utilitários
├── CLAUDE.md                   # Instruções para Claude Code
├── DESIGN_IMPROVEMENTS.md      # Documentação de melhorias visuais
└── next.config.ts              # Configuração + headers de segurança
```

## O Framework 4D

O curso ensina 4 competências essenciais para trabalhar com IA:

| Competência | Pergunta Central |
|-------------|------------------|
| **Delegation** | O que delegar à IA? |
| **Description** | Como comunicar com a IA? |
| **Discernment** | Como avaliar outputs? |
| **Diligence** | Como usar com responsabilidade? |

## Módulos

1. **Delegation** — O que delegar à IA?
2. **Description** — Como comunicar com a IA?
3. **Discernment + Diligence** — Como avaliar e usar com responsabilidade?
4. **Síntese + Aplicação** — Como integrar tudo na prática?

## Tema Visual

Paleta "Guia do Mochileiro das Galáxias" com estética retro-futurista:

| Cor | Hex | Uso |
|-----|-----|-----|
| `space-blue` | #0B1426 | Fundo principal |
| `nebula-blue` | #1E3A5F | Elementos secundários |
| `guide-yellow` | #F5A623 | Destaque (como a capa do Guia) |
| `star-white` | #F0F4F8 | Texto principal |
| `galaxy-purple` | #6B5B95 | Acentos |
| `towel-green` | #2ECC71 | Sucesso |
| `panic-red` | #E74C3C | Alertas |

### Assets Visuais

As ilustrações do site seguem a estética retro-futurista dos anos 70-80, inspirada em capas de livros de ficção científica. Foram geradas com IA (ChatGPT 5.2, Gemini) e processadas para ter fundo transparente.

## Deploy

O projeto está hospedado na **Vercel** com deploy automático.

- 100% estático (SSG)
- Headers de segurança configurados
- Sitemap dinâmico para SEO
- **Vercel Analytics** — métricas de visitantes sem cookies
- **Speed Insights** — monitoramento de Web Vitals (LCP, FID, CLS)

## Documentação

- **CLAUDE.md** — Instruções para Claude Code trabalhar no repositório
- **DESIGN_IMPROVEMENTS.md** — Histórico e planejamento de melhorias visuais

## Autor

**Dr. Iuri Almeida** — Médico pediatra, oficial médico na PMDF, estudante de Ciência da Computação.

---

*DON'T PANIC*
