# Melhorias de Design - AI Fluency

Documento de controle para melhorias visuais do site, mantendo a temática "O Guia do Mochileiro das Galáxias".

---

## Status Geral

| Item | Status | Prioridade |
|------|--------|------------|
| Imagem Hero Background | ✅ Concluído | Alta |
| Ícones dos Módulos (4D) | ✅ Concluído | Alta |
| Logo da Navbar | ✅ Concluído | Alta |
| Ícones das Páginas de Módulos | ✅ Concluído | Alta |
| Ícone de Slides | ✅ Concluído | Alta |
| Ícone do Golfinho (Footer) | ✅ Concluído | Alta |
| Emojis Restantes | ✅ Decisão: Manter | - |
| Backgrounds Decorativos | ⏳ Pendente | Baixa |
| Thumbnails de Recursos | ⏳ Pendente | Baixa |

---

## 1. Decisão: Emojis Mantidos

### Status: ✅ Decisão Final

Os seguintes emojis foram **intencionalmente mantidos** no projeto:

#### Dados (modulos.ts) - Campo `icon` como backup
- 🖥️ 🐟 👁️ 🐬 — Mantidos para retrocompatibilidade (campo `image` é usado na UI)

#### Componentes UI Reutilizáveis
- 📖 `GuideQuote.tsx` — Ícone "Entrada do Guia"
- ⚠️ ✓ 💡 `AlertBox.tsx` — Ícones de alerta (panic, success, info)
- 🎯 `ExerciseBlock.tsx` — Ícone de exercício
- 📋 📅 🗓️ `FluencyPlanTemplate.tsx` — Ícones do template

#### Páginas Especiais
- 🧑‍🚀 `not-found.tsx` — Página 404 (grande, decorativo)
- 🌌 `error.tsx` — Página de erro (grande, decorativo)

#### Página /modulos (listagem)
- 📖 📝 🎯 — Lista de estrutura do módulo

#### Página /recursos
- 🎬 🛠️ 📚 📋 📖 — Headers e tags de categorias

**Justificativa:** Estes emojis são usados em contextos onde funcionam bem visualmente e não prejudicam a experiência do usuário. A substituição por imagens PNG não traria benefício significativo.

---

## 2. Sistema de Ícones SVG (Referência)

### Objetivo
Substituir todos os emojis por ícones SVG customizados com estética retro-futurista consistente.

### Estrutura de Arquivos
```
public/
└── icons/
    ├── framework/
    │   ├── delegation.svg      # Substituir 🖥️
    │   ├── description.svg     # Substituir 🐟 (Babel Fish estilizado)
    │   ├── discernment.svg     # Substituir 👁️
    │   └── diligence.svg       # Substituir 🧭
    ├── ui/
    │   ├── guide-entry.svg     # Substituir 📖
    │   ├── dont-panic.svg      # Substituir ⚠️
    │   ├── success.svg         # Substituir ✓
    │   ├── info.svg            # Substituir 💡
    │   ├── exercise.svg        # Substituir 🎯
    │   └── timer.svg           # Substituir ⏱️
    └── decorative/
        ├── astronaut.svg       # Substituir 🧑‍🚀
        ├── galaxy.svg          # Substituir 🌌
        └── dolphin.svg         # Substituir 🐬
```

### Emojis a Substituir (20 total)

| Emoji | Uso Atual | Novo Ícone |
|-------|-----------|------------|
| 🖥️ | Delegation (Módulo 1) | Terminal/computador retro |
| 🐟 | Description (Módulo 2) | Babel Fish estilizado |
| 👁️ | Discernment (Módulo 3) | Olho cósmico |
| 🧭 | Diligence (Módulo 4) | Bússola estelar |
| 📖 | Entrada do Guia | Livro com capa do Guia |
| ⚠️ | Don't Panic | Triângulo com "!" espacial |
| ✓ | Sucesso | Checkmark com brilho |
| 💡 | Info | Lâmpada/estrela |
| 🎯 | Exercício | Alvo com planeta |
| ⏱️ | Timer | Relógio espacial |
| 📋 | Template | Clipboard futurista |
| 📅 | Calendário | Calendário com estrelas |
| 🌌 | Página de Erro | Galáxia espiral |
| 🧑‍🚀 | Página 404 | Astronauta perdido |
| 📊 | Apresentação | Gráfico holográfico |
| 📝 | Notas | Bloco de notas digital |
| 🎬 | Vídeos | Câmera retro-futurista |
| 🛠️ | Ferramentas | Chave inglesa espacial |
| 📚 | Leituras | Pilha de livros cósmicos |
| 🐬 | Citação final | Golfinho estilizado |

### Componente a Criar
```tsx
// src/components/ui/Icon.tsx
interface IconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}
```

---

## 2. Logo da Navbar + Ícones de Página

### Status: ✅ Concluído

### Emojis a Substituir

| Emoji | Localização | Arquivo | Linha | Nova Imagem |
|-------|-------------|---------|-------|-------------|
| 📖 | Logo navbar | `Header.tsx` | 23 | `logo.png` |
| 📊 | Seção Slides | `modulos/[id]/page.tsx` | 73 | `slides-icon.png` |
| `{modulo.icon}` | Header do módulo | `modulos/[id]/page.tsx` | 64 | Usar `modulo.image` existente |

### Estrutura de Arquivos
```
public/
└── images/
    ├── logo.png              # Logo da navbar (128x128)
    └── icons/
        └── slides.png        # Ícone de slides (64x64)
```

---

### Prompt: Logo da Navbar (`logo.png`)

**Dimensões:** 128 x 128 pixels (será exibido em ~32-40px)

```
A retro-futuristic logo icon inspired by "The Hitchhiker's Guide to the Galaxy" book.
A stylized open book or travel guide with a glowing golden cover (#F5A623). The book
appears to float slightly with small stars or sparkles around it, suggesting it's a
magical or cosmic guide. The pages are slightly visible, glowing with soft white light.
The design must be simple and iconic, easily recognizable at very small sizes (32px).

Style: 1970s-80s sci-fi book cover aesthetic - warm, friendly, inviting.
The book could have subtle circuit-like patterns or a tiny galaxy/star symbol on cover.
Clean vector-style illustration with soft gradients.

Colors:
- Main: Golden yellow (#F5A623) for the cover
- Accents: Soft purple (#6B5B95) for shadows
- Highlights: Off-white (#F0F4F8) for page glow

Technical: Transparent background. PNG format. 128x128 pixels square.
No text, no letters, no words.
```

---

### Prompt: Ícone de Slides (`slides.png`)

**Dimensões:** 64 x 64 pixels

```
A retro-futuristic icon representing presentation slides or a slideshow.
A stylized projection screen or presentation board with a golden (#F5A623) frame.
The screen shows abstract chart/graph symbols or simple geometric shapes suggesting
data visualization. Small light rays emanate from the screen suggesting projection.

Style: 1970s-80s sci-fi aesthetic, matching "The Hitchhiker's Guide to the Galaxy" theme.
Clean, simple, recognizable at small sizes.

Colors:
- Frame: Golden yellow (#F5A623)
- Screen: Soft blue (#1E3A5F) with white highlights
- Accents: Purple (#6B5B95)

Technical: Transparent background. PNG format. 64x64 pixels square.
No text, no letters, no words.
```

---

## 3. Ícones dos Módulos (Framework 4D)

### Status: ✅ Concluído

### Especificações Técnicas

| Aspecto | Valor |
|---------|-------|
| **Dimensões** | 512 x 512 pixels (quadrado) |
| **Formato** | PNG com fundo transparente |
| **Localização** | `public/images/modules/` |
| **Uso** | Cards na home + página do framework |

### Estrutura de Arquivos
```
public/
└── images/
    └── modules/
        ├── delegation.png
        ├── description.png
        ├── discernment.png
        └── diligence.png
```

---

### Prompt Base (usar em todos)

```
Style: Retro-futuristic illustration inspired by 1970s-80s science fiction book covers
and "The Hitchhiker's Guide to the Galaxy" aesthetic. Flat design with subtle gradients.
Clean lines, minimalist but expressive. Warm and welcoming mood, not dark or threatening.

Color palette:
- Primary glow: Golden yellow (#F5A623)
- Accent: Soft purple (#6B5B95)
- Highlights: Off-white (#F0F4F8)
- Optional deep blue accents (#1E3A5F)

Technical requirements:
- 512x512 pixels, square format
- Transparent background (PNG)
- Centered composition
- No text, no letters, no words
- Simple enough to be recognizable at 64x64px
```

---

### Prompt 1: Delegation (🖥️ → Ilustração)

**Arquivo:** `delegation.png`

**Conceito:** Representar a ideia de delegar tarefas para uma IA — um humano passando responsabilidades para uma máquina inteligente.

```
A retro-futuristic illustration of a friendly vintage computer terminal from the 1980s
with a glowing screen displaying a simple happy face or welcoming symbol. The monitor
has rounded edges and a warm golden (#F5A623) glow emanating from the screen. Small
floating task icons or checkmarks orbit around the computer, suggesting tasks being
delegated. The style is reminiscent of old NASA control panels mixed with
"Hitchhiker's Guide to the Galaxy" whimsy. Soft purple (#6B5B95) accent shadows.
Clean vector-style illustration, centered composition, transparent background.
No text, no letters.
```

---

### Prompt 2: Description (🐟 → Babel Fish)

**Arquivo:** `description.png`

**Conceito:** O Babel Fish do Guia do Mochileiro — representa tradução e comunicação clara com a IA.

```
A whimsical retro-futuristic illustration of the Babel Fish from "The Hitchhiker's
Guide to the Galaxy". A small, cute, stylized yellow-golden fish (#F5A623) with
subtle mechanical or alien features — perhaps tiny antennae or circuit-like patterns
on its scales. The fish is surrounded by floating symbols, speech bubbles, or
abstract communication icons that it appears to be "translating". Soft glowing aura
around the fish. Style inspired by 1970s sci-fi book illustrations. Friendly and
approachable appearance. Purple (#6B5B95) accent details. Clean lines, centered
composition, transparent background. No text, no letters.
```

---

### Prompt 3: Discernment (👁️ → Olho Cósmico)

**Arquivo:** `discernment.png`

**Conceito:** Um olho que representa avaliação crítica, análise e verificação — ver além das aparências.

```
A mystical retro-futuristic illustration of a cosmic eye. A stylized human eye with
the iris containing a spiral galaxy or constellation pattern. The eye appears wise
and analytical, not creepy. Golden (#F5A623) highlights on the iris creating a warm
glow. Small magnifying glass or analysis symbols floating nearby, suggesting
examination and critical thinking. Soft purple (#6B5B95) nebula effects around the
eye. Style inspired by 1970s psychedelic sci-fi art but cleaner and more minimalist.
The overall feeling is wisdom and clarity, not surveillance. Centered composition,
transparent background. No text, no letters.
```

---

### Prompt 4: Diligence (🧭 → Bússola Estelar)

**Arquivo:** `diligence.png`

**Conceito:** Uma bússola que navega entre estrelas — representa responsabilidade, ética e direção consistente.

```
A retro-futuristic illustration of a cosmic compass or stellar navigation instrument.
A stylized compass with an ornate design, where the needle points toward a bright
golden star (#F5A623). The compass face shows constellations or star maps instead of
traditional cardinal directions. Small planets or celestial bodies orbit around the
compass. The style evokes vintage nautical instruments reimagined for space travel,
inspired by "The Hitchhiker's Guide to the Galaxy" aesthetic. Purple (#6B5B95) accent
on the compass rim. Warm, guiding feeling — suggesting ethical navigation and
consistent direction. Clean vector style, centered composition, transparent background.
No text, no letters.
```

---

### Dicas para Geração no Gemini

1. **Gerar múltiplas variações** e escolher a mais consistente com o estilo
2. **Verificar fundo transparente** — se não vier transparente, usar ferramenta de remoção de fundo
3. **Manter consistência** — as 4 imagens devem parecer parte do mesmo conjunto
4. **Testar em tamanho pequeno** — reduzir para 64x64px e verificar se ainda é reconhecível

---

## 3. Imagem Hero (Background)

### Status: ✅ Concluído

### Especificações
- **Dimensões:** 1920x1080px (16:9, Full HD)
- **Formato:** PNG com transparência ou WebP
- **Localização:** `public/images/hero-background.png`

### Prompt para Geração
*(Ver seção separada abaixo)*

### Aplicação no Código
```tsx
// src/app/page.tsx - Hero section
<section className="relative min-h-[80vh] ...">
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/hero-background.png"
      alt=""
      fill
      className="object-cover opacity-30"
      priority
    />
  </div>
  {/* Conteúdo existente com z-10 */}
</section>
```

---

## 3. Ilustrações Temáticas

### Por Módulo

| Módulo | Ilustração | Descrição | Dimensões |
|--------|------------|-----------|-----------|
| 1 - Delegation | Robô assistente | Computador estilo anos 80 com tela amigável | 400x400px |
| 2 - Description | Babel Fish | Peixe dourado traduzindo símbolos flutuantes | 400x400px |
| 3 - Discernment | Olho cósmico | Olho com galáxias refletidas na íris | 400x400px |
| 4 - Diligence | Bússola estelar | Bússola navegando entre constelações | 400x400px |

### Páginas Especiais

| Página | Ilustração | Descrição | Dimensões |
|--------|------------|-----------|-----------|
| 404 | Astronauta perdido | Astronauta flutuando confuso, olhando mapa | 600x400px |
| Error | Buraco negro | Vórtice engolindo dados/código | 600x400px |
| Sobre | Avatar instrutor | Silhueta com capacete espacial | 300x300px |

---

## 4. Backgrounds Decorativos

### Arquivos a Criar
```
public/
└── backgrounds/
    ├── stars-pattern.svg       # Padrão de estrelas sutis (tileable)
    ├── nebula-overlay.png      # Nebulosa para hero sections
    ├── grid-lines.svg          # Grid retro-futurista (Tron-like)
    └── constellation.svg       # Constelação sutil para módulos
```

### Aplicações
- **Hero:** Nebulosa mais visível + estrelas
- **Seção Framework:** Grid de linhas conectando os 4Ds
- **Cards de Módulos:** Padrão de estrelas sutil
- **Footer:** Constelação discreta

---

## 5. Melhorias em Componentes

### ModuleCard (Redesign)

**Atual:**
- Emoji pequeno (3xl)
- Layout vertical simples

**Proposto:**
```
┌─────────────────────────────────────┐
│  ╭─────────╮                        │
│  │         │  MÓDULO 1              │
│  │ [ILLUS] │  Delegation            │
│  │         │  ────────────────────  │
│  ╰─────────╯  Aprenda a delegar     │
│               tarefas para IA...    │
│                                  →  │
└─────────────────────────────────────┘
```
- Ilustração 80x80px à esquerda
- Layout horizontal em desktop
- Borda com gradiente da cor do módulo

### Página de Recursos

**Melhorias:**
- Thumbnails para vídeos (gradientes temáticos)
- Ícones de play sobre thumbnails
- Categorias com ícones distintos

---

## 6. Paleta de Cores (Referência)

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

---

## 7. Fontes de Assets Recomendadas

| Fonte | Tipo | Custo | Uso Sugerido |
|-------|------|-------|--------------|
| unDraw | Ilustrações SVG | Gratuito | Ilustrações gerais |
| Storyset | Cenas animadas | Gratuito | Cenas espaciais/tech |
| Midjourney | AI Generated | Pago | Hero e ilustrações únicas |
| DALL-E | AI Generated | Pago | Alternativa ao Midjourney |
| Heroicons | Ícones SVG | Gratuito | Base para ícones UI |

---

## Histórico de Alterações

| Data | Alteração | Status |
|------|-----------|--------|
| 2025-12-23 | Documento criado com análise inicial | ✅ |
| 2025-12-23 | Prompt para hero background gerado | ✅ |
| 2025-12-23 | Hero section implementado com imagem de background | ✅ |
| 2025-12-23 | Prompts para ícones dos 4 módulos (Gemini) | ✅ |
| 2025-12-23 | Ícones dos módulos implementados (home + /modulos) | ✅ |
| 2025-12-24 | Logo da navbar implementado | ✅ |
| 2025-12-24 | Ícone de slides implementado | ✅ |
| 2025-12-24 | Imagem do módulo no header da página implementada | ✅ |
| 2025-12-24 | Página /framework atualizada com imagens | ✅ |
| 2025-12-24 | Link vocabulário (🐟) substituído por imagem | ✅ |
| 2025-12-24 | Ícone do golfinho implementado no footer | ✅ |
| 2025-12-24 | Tamanho final: slides e golfinho = 40px (w-10 h-10) | ✅ |
| 2025-12-24 | Decisão: Emojis restantes serão mantidos | ✅ |
| 2025-12-24 | Documentação atualizada (README, CLAUDE.md) | ✅ |
| 2025-12-24 | Deploy para produção | ✅ |

---

*Última atualização: Dezembro 2025*
