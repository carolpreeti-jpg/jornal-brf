# Jornal BRF Previdência

Jornal digital dos participantes da **BRF Previdência** — fundo de pensão complementar com mais de 38.000 participantes ativos e aposentados do grupo BRF.

> Projeto em construção. O arquivo `Jornal BRF Previdencia.html` é a primeira edição de referência (Edição 12 · Março 2025), desenvolvida como HTML único com CSS e JS embutidos.

---

## Sobre o Projeto

O jornal é publicado mensalmente e cobre temas como:
- Rentabilidade dos planos de previdência
- Campanhas e programas internos (ex.: Vire o Jogo, Level Up, Elas)
- Cobertura de unidades BRF pelo Brasil
- Atualizações do Portal do Participante
- Eventos e novidades institucionais

---

## Stack Tecnológica

| Ferramenta | Versão | Papel |
|---|---|---|
| **Vite** | 5.4.21 | Build tool / dev server |
| **React** | 18.3.1 | Framework UI |
| **Tailwind CSS** | 3.4.19 | Utilitários CSS |
| **Framer Motion** | latest | Animações |
| **Lucide React** | 0.414.0 | Ícones |
| **PostCSS** | — | Transformações CSS |

### Fontes

| Fonte | Uso | Origem |
|---|---|---|
| **Sora** | Display / Headings (`--font-display`) | Google Fonts |
| **DM Sans** | Corpo de texto (`--font-body`) | Google Fonts |
| **DM Mono** | Dados, números, labels (`--font-mono`) | Google Fonts |
| **Co Headline** | Tipografia da marca BRF | Local (`.otf`) |
| **Noto Sans** | Fallback internacional | Local (`.ttf`) |

---

## Sistema de Design

### Paleta de Cores (CSS Variables)

```css
/* Azuis */
--brand-blue:       #1E3A8A   /* Azul escuro principal */
--brand-blue-mid:   #2563EB   /* Azul médio (links, botões) */
--brand-blue-light: #DBEAFE   /* Azul claro (fundos, badges) */

/* Acento / Destaque */
--brand-coral:  #F97316   /* Coral (CTAs, números de índice) */
--brand-yellow: #FCD34D   /* Amarelo (badges, destaques) */
--brand-teal:   #0D9488   /* Verde-azulado (dados positivos) */

/* Suporte */
--brand-purple:       #7C3AED
--brand-purple-light: #EDE9FE
--brand-red:          #DC2626
--brand-red-light:    #FEE2E2

/* Texto */
--text-primary:   #0F172A
--text-secondary: #475569
--text-muted:     #94A3B8
```

### Tipografia

```css
h1  → clamp(36px, 5vw, 56px) · font-weight: 800 · font-display
h2  → clamp(28px, 3.4vw, 40px) · font-weight: 700 · font-display
h3  → 20px · font-weight: 600 · font-display
p   → 16px · line-height: 1.7 · font-body
```

### Componentes CSS Reutilizáveis

| Classe | Descrição |
|---|---|
| `.wrap` | Container max-width 1240px com padding 32px |
| `.section` | Seção com padding 96px vertical |
| `.section.tight` | Seção com padding 72px vertical |
| `.section-head` | Cabeçalho de seção (eyebrow + h2 + lead) |
| `.eyebrow` | Label uppercase 12px letra-espaçada |
| `.btn` | Botão base |
| `.btn-primary` | Botão azul primário |
| `.btn-coral` | Botão coral |
| `.btn-yellow` | Botão amarelo |
| `.btn-ghost` | Botão transparente (para fundos escuros) |
| `.btn-outline-blue` | Botão contornado azul |
| `.reveal` | Elemento com animação de entrada por scroll |
| `.reveal.d2/.d3/.d4` | Delays de 80ms / 160ms / 240ms |

### Breakpoints Responsivos

```
640px  → 2 → 3 colunas (index grid)
720px  → rodapé 4 colunas, social 5 colunas
880px  → editorial/diretor 2 colunas
960px  → hero 2 colunas
1024px → nav desktop, 4 colunas
1380px → side index aparece
```

---

## Estrutura de Seções do Jornal

Cada edição é composta por seções identificadas por `id` e rastreadas no índice lateral:

| # | ID | Título padrão |
|---|---|---|
| 01 | `editorial` | Editorial |
| 02 | `diretor` | Mensagem do Diretor |
| 03 | `vire-o-jogo` | Vire o Jogo (campanha) |
| 04 | `unidades` | Unidades |
| 05 | `elas` | Programa Elas |
| 06 | `novo-site` | Novo Portal |
| 07 | `eventos` | Eventos |
| 08 | `pesquisa` | Pesquisa de Satisfação |
| 09 | `rentabilidade` | Rentabilidade |
| 10 | `estatuto` | Estatuto / Governança |
| 11 | `levelup` | Level Up |
| 12 | `redes` | Redes Sociais |

> As seções podem variar a cada edição. O índice lateral (`.side-index`) e o menu de navegação devem ser atualizados junto com as seções.

---

## Funcionalidades JavaScript

| Feature | Descrição |
|---|---|
| **Header sticky** | Sombra suave ao rolar (classe `.scrolled`) |
| **Menu mobile** | Hamburger com `aria-expanded` |
| **Reveal animations** | `IntersectionObserver` para animar `.reveal` ao entrar na viewport |
| **Side index** | Destaca o link ativo conforme a seção visível |
| **Rentabilidade toggle** | Alterna entre visualização mensal e acumulada |
| **Countdown timer** | Contagem regressiva configurável para deadline de campanha |

---

## Arquivos do Projeto

```
C:\www\jornalbrf/
│
├── Jornal BRF Previdencia.html     ← Edição 12 (Março 2025) — referência
├── logo_brf-1.png                  ← Logo PNG da BRF Previdência
├── logo_brf.svg                    ← Logo SVG da BRF Previdência
├── uploads/
│   └── tela02.jpg                  ← Imagem de upload/referência
│
├── fonts/                          ← Diretório de fontes (a popular)
├── Co Headline Bold.otf            ← Fonte da marca BRF
├── Co Headline Regular.otf
├── Co Headline Light.otf
├── NotoSans-*.ttf                  ← Noto Sans (6 pesos)
│
├── Manual de Identidade Visual - BRF Previdência - medium.pdf
├── screencapture-jornal-...png     ← Print da edição anterior (Dez/2025)
│
├── node_modules/                   ← Dependências instaladas
├── README.md                       ← Este arquivo
└── CLAUDE.md                       ← Contexto para Claude Code
```

---

## Como Criar uma Nova Edição

1. Duplicate o arquivo HTML da edição anterior como base
2. Atualize o `<title>` com a nova edição e mês
3. Atualize o `edition-meta` no header (`Edição XX · Mês AAAA`)
4. Atualize o badge do Hero (`Nova Edição · Mês AAAA`)
5. Revise cada seção com o novo conteúdo editorial
6. Ajuste a tabela de `#rentabilidade` com os dados do mês
7. Configure o `countdown` com a data correta da campanha vigente
8. Atualize o índice lateral (`.side-index`) se houver seções novas/removidas

---

## Informações da Entidade

- **Razão Social:** BRF Previdência
- **CNPJ:** 04.123.456/0001-78
- **Endereço:** Av. Engenheiro Luiz Carlos Berrini, 1.461, 12º andar, Brooklin, São Paulo/SP — CEP 04571-011
- **Regulador:** PREVIC
- **Participantes:** 38.000+ ativos e aposentados
- **Planos:** A, B, FAF, III
- **SAC:** 0800 600 0001
- **E-mail:** faleconosco@brfprevidencia.com.br

### Redes Sociais

| Plataforma | Handle |
|---|---|
| Instagram | @brfprevidencia |
| LinkedIn | /brfprevidencia |
| Facebook | /brfprevidencia |
| YouTube | /canalbrfprev |
| WhatsApp | Comunidade fechada |
