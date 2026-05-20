# CLAUDE.md — Jornal BRF Previdência

Contexto para o Claude Code trabalhar neste projeto de forma consistente.

---

## O que é este projeto

Jornal digital mensal da **BRF Previdência** destinado aos participantes do fundo de pensão.  
Projeto React com Vite. Cada seção é um componente independente. Os dados de cada edição ficam centralizados em `src/data/edition.js`.

O arquivo `Jornal BRF Previdencia.html` é a **referência visual (Edição 12 · Março 2025)** — HTML monolítico que serviu de base para a migração React.

### Rodar o projeto
```
npm run dev    # http://localhost:5173
npm run build  # gera dist/
```

---

## Estrutura do Projeto

```
src/
├── main.jsx                    ← Entry point React
├── App.jsx                     ← Monta Header + SideIndex + seções + Footer
├── index.css                   ← TODO o CSS (design system + seções)
├── data/
│   └── edition.js              ← ⭐ EDITE AQUI para nova edição
├── hooks/
│   ├── useScrollReveal.js      ← IntersectionObserver para .reveal
│   ├── useStickyHeader.js      ← Sombra do header no scroll
│   ├── useCountdown.js         ← Timer da pesquisa
│   └── useSideIndex.js         ← Destaque do índice lateral
└── components/
    ├── layout/
    │   ├── Header.jsx
    │   ├── SideIndex.jsx
    │   └── Footer.jsx
    └── sections/               ← Uma seção = um arquivo
        ├── Hero.jsx
        ├── Sumario.jsx
        ├── Editorial.jsx
        ├── Diretor.jsx
        ├── VireOJogo.jsx
        ├── Unidades.jsx
        ├── Elas.jsx
        ├── NovoSite.jsx
        ├── Eventos.jsx
        ├── Pesquisa.jsx
        ├── Rentabilidade.jsx
        ├── Estatuto.jsx
        ├── LevelUp.jsx
        └── Redes.jsx
```

## Regras Importantes

### Para criar nova edição
1. Edite `src/data/edition.js` com os dados da nova edição (textos, números, datas)
2. Para adicionar/remover seções: edite `src/App.jsx` e `src/components/layout/SideIndex.jsx`
3. CSS global em `src/index.css` — use sempre as CSS variables

### CSS

- Usar sempre as **CSS variables** definidas em `:root` (ver abaixo). Nunca hardcodar cores.
- Novos componentes devem seguir os padrões de naming já existentes (`.section`, `.wrap`, `.eyebrow`, `.reveal`, `.btn-*`).
- Responsividade via media queries com os breakpoints do projeto.
- Classes de animação de entrada: `.reveal` + `.d2`, `.d3`, `.d4` para delays escalonados.

### React / JS
- Dados de conteúdo sempre em `src/data/edition.js` — componentes não devem ter texto hardcoded.
- Hooks customizados em `src/hooks/` para lógica de DOM (scroll, timer, intersection).
- `dangerouslySetInnerHTML` é aceito somente para campos que já usam no `edition.js` (ex: `paragrafos` do Diretor com `<strong>`).
- Nunca adicionar `dangerouslySetInnerHTML` em dados vindos de input de usuário.

### Conteúdo
- Idioma: **Português do Brasil** em todo o conteúdo.
- Tom: institucional mas acessível, próximo ao participante.
- Cada seção deve ter `id` correspondente ao índice lateral.

---

## Sistema de Design

### Paleta — CSS Variables

```css
/* Marca */
--brand-blue:       #1E3A8A
--brand-blue-mid:   #2563EB
--brand-blue-light: #DBEAFE
--brand-purple:     #7C3AED
--brand-coral:      #F97316   ← CTA, destaques quentes
--brand-yellow:     #FCD34D   ← badges, destaques
--brand-teal:       #0D9488   ← dados positivos

/* Texto */
--text-primary:   #0F172A
--text-secondary: #475569
--text-muted:     #94A3B8

/* Neutros */
--gray-50 … --gray-900

/* Utilitários */
--radius-card: 16px
--radius-pill: 999px
--shadow-sm / --shadow-md / --shadow-lg
```

### Fontes

```css
--font-display: 'Sora'   → títulos, números grandes
--font-body:    'DM Sans' → texto corrido
--font-mono:    'DM Mono' → dados, labels, percentuais
```

### Hierarquia tipográfica

```
h1 → clamp(36px, 5vw, 56px) · 800
h2 → clamp(28px, 3.4vw, 40px) · 700
h3 → 20px · 600
eyebrow → 12px uppercase letter-spacing .12em
```

### Breakpoints

```
@media(min-width: 640px)  → 3 colunas em grids pequenos
@media(min-width: 720px)  → rodapé multi-coluna
@media(min-width: 880px)  → 2 colunas em seções editoriais
@media(min-width: 960px)  → hero 2 colunas
@media(min-width: 1024px) → nav desktop visível, hamburger some
@media(min-width: 1380px) → side-index lateral aparece
```

---

## Anatomia de uma Seção

Toda seção do jornal segue este padrão:

```html
<section class="[nome-da-secao]" id="[id-da-secao]" data-screen-label="[Label]">
  <div class="wrap">

    <!-- Cabeçalho da seção -->
    <div class="section-head reveal">
      <span class="eyebrow">Categoria · Número</span>
      <h2>Título da seção</h2>
      <p>Subtítulo ou lead da seção.</p>
    </div>

    <!-- Conteúdo da seção -->
    <div class="[grid ou layout]">
      <!-- cards, texto, imagens... -->
    </div>

  </div>
</section>
```

### Variantes de fundo de seção

| Classe | Fundo | Uso |
|---|---|---|
| (padrão) | `#fff` | Seções claras |
| `.section` com `background:var(--gray-50)` | Cinza claro | Alternância |
| `.editorial` | `var(--brand-blue)` azul escuro | Editorial, seções institucionais |
| Gradiente coral/vermelho | `linear-gradient(135deg,#DC2626,#F97316)` | Redes, campanha |
| Gradiente azul/roxo | `linear-gradient(120deg,#1E3A8A,#7C3AED)` | Hero |

---

## Índice Lateral (side-index)

Atualizar sempre que adicionar/remover seções:

```html
<ul class="side-index" id="side-index">
  <li><a href="#[id]"><span class="b"></span>NN Título</a></li>
  ...
</ul>
```

E no array JavaScript:
```js
const sections = ['editorial','diretor', /* ... IDs na ordem */ ]
  .map(id => ({ id, el: document.getElementById(id) })).filter(s => s.el);
```

---

## Tabela de Rentabilidade

Estrutura esperada:

```html
<table class="rent-table">
  <thead>
    <tr>
      <th>Plano</th>
      <th>Jan</th><th>Fev</th><th>Mar</th>
      <th>Abr</th><th>Mai</th><th>Jun</th>
      <th>Benchmark</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Plano A</td>
      <td class="pos" data-raw="+1,32%">+1,32%</td>
      <!-- ... cols 2-6 ... -->
      <td>CDI 100%</td>
    </tr>
  </tbody>
</table>
```

- Células com `data-raw` armazenam o valor original para o toggle mensal/acumulado.
- Classes `.pos` (verde/teal) e `.neg` (vermelho) para colorir valores.
- O toggle é controlado por `#rentToggle` com botões `data-view="mensal"` e `data-view="acumulada"`.

---

## Countdown Timer

```html
<!-- HTML -->
<span id="cd-d">00</span>d
<span id="cd-h">00</span>h
<span id="cd-m">00</span>m
<span id="cd-s">00</span>s
```

```js
// JS — definir a data-alvo da campanha atual
const target = new Date('2025-04-30T23:59:59');
```

---

## Checklist para Nova Edição

- [ ] Duplicar o HTML da edição anterior
- [ ] Atualizar `<title>` (Edição XX · Mês AAAA)
- [ ] Atualizar `.edition-meta` no header
- [ ] Atualizar badge do Hero
- [ ] Atualizar `hero-meta` (nº de matérias, tempo de leitura)
- [ ] Revisar cada seção com novo conteúdo
- [ ] Atualizar tabela de rentabilidade com dados reais
- [ ] Ajustar `target` do countdown para campanha vigente
- [ ] Atualizar `.side-index` se seções mudaram
- [ ] Atualizar array `sections` no JS
- [ ] Testar responsividade (mobile, tablet, desktop, 1380px+)
- [ ] Verificar acessibilidade (aria-labels, contraste)

---

## Convenções de Nomenclatura CSS

- Seções: nome descritivo curto (`.editorial`, `.director`, `.elas`, `.social`)
- Grids: `.[secao]-grid`
- Cards: `.[secao]-card` ou `.card-[variante]`
- Estados: `.open`, `.active`, `.scrolled`, `.in` (reveal)
- Modificadores de botão: `.btn-[variante]`
- Animação escalonada: `.reveal .d2 .d3 .d4`

---

## Arquivos de Referência

| Arquivo | Para que serve |
|---|---|
| `Jornal BRF Previdencia.html` | Edição 12 — template base de todas as seções |
| `logo_brf.svg` | Logo vetorial para uso em HTML/CSS |
| `logo_brf-1.png` | Logo rasterizado |
| `Manual de Identidade Visual...pdf` | Guia completo de marca BRF Previdência |
| `screencapture-...png` | Visual de referência da edição anterior (Dez/2025) |
