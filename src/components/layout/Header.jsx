import { useState } from 'react'
import { useStickyHeader } from '../../hooks/useStickyHeader.js'
import { edition } from '../../data/edition.js'

const navLinks = [
  { href: '#top',           label: 'Início' },
  { href: '#editorial',     label: 'Editorial' },
  { href: '#unidades',      label: 'Unidades' },
  { href: '#estatuto',      label: 'Benefícios' },
  { href: '#rentabilidade', label: 'Rentabilidade' },
  { href: '#contato',       label: 'Contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  useStickyHeader()

  return (
    <header id="site-header">
      <div className="wrap nav">
        <a href="#top" className="brand" aria-label="BRF Previdência">
          <div className="brand-logo">
            <span className="b1">BRF</span>
            <span className="b2">previdência</span>
          </div>
          <span className="brand-tag">O informativo dos participantes</span>
        </a>

        <nav className="nav-links" aria-label="Navegação principal">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="edition-meta">
          <span className="edition-dot" />
          <span>
            Edição <strong>{edition.numero}</strong> · {edition.mes} {edition.ano}
          </span>
        </div>

        <button
          className="hamburger"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </header>
  )
}
