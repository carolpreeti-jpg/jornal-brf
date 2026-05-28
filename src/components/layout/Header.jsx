import { useState, useEffect } from 'react'
import { useStickyHeader } from '../../hooks/useStickyHeader.js'
import { edition } from '../../data/edition.js'
import { asset } from '../../utils/assets.js'

const logoDefault  = asset('/logo-horizontal-1.png')
const logoScrolled = asset('/logo-horizontal-2.png')

const navLinks = [
  { href: '#editorial',           label: 'Resumo da edição',                sub: 'Mensagem do Comitê Editorial' },
  { href: '#compromisso-unidades',label: 'BRF Prev Compromisso com Você',   sub: 'Visitas presenciais às unidades' },
  { href: '#fale-presidente',     label: 'Fale com o Presidente',           sub: 'Novo canal de relacionamento' },
  { href: '#historias',           label: 'Histórias que inspiram',          sub: 'Dra. Ivone Delazari' },
  { href: '#relatorio',           label: 'Relatório Anual 2025',            sub: 'Resultados que conectam' },
  { href: '#webinar',             label: 'Webinar IR 2026',                 sub: 'Declaração na prática' },
  { href: '#encontros',           label: 'Encontros de Resultados',         sub: '33ª edição trimestral' },
  { href: '#patrimonio',          label: 'R$ 5 bilhões em patrimônio',      sub: 'Uma marca histórica' },
  { href: '#rentabilidade',       label: 'Desempenho dos Planos',           sub: 'Cenário e rentabilidade 2025' },
  { href: '#aportes',             label: 'Aportes extras e contribuições',  sub: 'Aumente sua reserva' },
  { href: '#brfprev-em-foco',     label: 'BRF Prev em Foco',               sub: 'Vídeo mensal de novidades' },
  { href: '#app-brf-prev',        label: 'App BRF Prev',                   sub: 'Sua previdência na palma da mão' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useStickyHeader()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header id="site-header">
      <div className="wrap nav" style={{ justifyContent: 'space-between' }}>
        <div className="nav-brand-group" style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <a href="#top" className="brand" aria-label="BRF Previdência"
            style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <img src={scrolled ? logoScrolled : logoDefault} alt="BRF Previdência" className="brand-logo" style={{ height: 40 }} />
            <span className="brand-tag" style={{ paddingLeft: 0, borderLeft: 'none' }}>Jornal BRF Previdência</span>
          </a>
          <div className="edition-meta header-edition-meta">
            <span className="edition-dot" />
            <span>
              Edição {edition.numero} · {edition.mes} {edition.ano}
            </span>
          </div>
        </div>

        {scrolled && (
          <a href="#menu-index" style={{
            color: '#EE686D',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 13,
            textDecoration: 'none',
            letterSpacing: '0.02em',
            whiteSpace: 'nowrap',
            border: '1.5px solid #EE686D',
            borderRadius: 999,
            padding: '6px 16px',
          }}>
            Menu do Jornal
          </a>
        )}

        <button
          className="hamburger"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map((l, i) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="mobile-menu-item">
            <span className="mobile-menu-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="mobile-menu-text">
              <span className="mobile-menu-title">{l.label}</span>
              {l.sub && <span className="mobile-menu-sub">{l.sub}</span>}
            </span>
          </a>
        ))}
      </div>
    </header>
  )
}
