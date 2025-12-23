# AI Fluency

Site do curso de **Fluência em Inteligência Artificial** usando o Framework 4D.

Inspirado em "O Guia do Mochileiro das Galáxias" de Douglas Adams.

## Stack

- **Next.js 16.1** com App Router
- **Tailwind CSS v4** com `@theme inline`
- **React 19**
- **TypeScript**
- **react-markdown** com remark-gfm

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
│   └── slides/           # PDFs dos slides por módulo
├── src/
│   ├── app/              # Páginas (App Router)
│   │   ├── page.tsx              # Home
│   │   ├── framework/            # O Framework 4D
│   │   ├── modulos/              # Lista e páginas individuais
│   │   ├── vocabulario/          # Vocabulário de IA
│   │   ├── recursos/             # Recursos adicionais
│   │   ├── sobre/                # Sobre o curso
│   │   └── como-funcionam-llms/  # Como funcionam LLMs
│   ├── components/
│   │   ├── layout/       # Header, Footer
│   │   └── ui/           # Componentes reutilizáveis
│   ├── content/          # Conteúdo em TypeScript (markdown strings)
│   └── lib/              # Utilitários
└── package.json
```

## O Framework 4D

O curso ensina 4 competências essenciais para trabalhar com IA:

| Competência | Pergunta Central |
|-------------|------------------|
| **Delegation** | O que delegar à IA? |
| **Description** | Como comunicar com a IA? |
| **Discernment** | Como avaliar outputs? |
| **Diligence** | Como usar com responsabilidade? |

## Tema Visual

Paleta "Guia do Mochileiro das Galáxias":

- `space-blue` (#0B1426) — Fundo principal
- `nebula-blue` (#1E3A5F) — Elementos secundários
- `guide-yellow` (#F5A623) — Cor de destaque (como a capa do Guia)
- `star-white` (#F0F4F8) — Texto principal
- `galaxy-purple` (#6B5B95) — Acentos
- `towel-green` (#2ECC71) — Sucesso
- `panic-red` (#E74C3C) — Alertas

## Módulos

1. **Delegation** — O que delegar à IA?
2. **Description** — Como comunicar com a IA?
3. **Discernment + Diligence** — Como avaliar e usar com responsabilidade?
4. **Síntese + Aplicação** — Como integrar tudo na prática?

## Autor

**Dr. Iuri Almeida** — Médico pediatra, oficial médico na PMDF, estudante de Ciência da Computação.

---

*DON'T PANIC* 🐬
