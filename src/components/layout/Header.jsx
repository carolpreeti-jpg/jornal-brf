import { useState, useEffect } from 'react'
import { useStickyHeader } from '../../hooks/useStickyHeader.js'
import { edition } from '../../data/edition.js'
const logoDefault  = '/logo-horizontal-1.png'
const logoScrolled = '/logo-horizontal-2.png'

const navLinks = [
  { href: '#top', label: 'Início' },
  { href: '#editorial', label: 'Editorial' },
  { href: '#unidades', label: 'Unidades' },
  { href: '#estatuto', label: 'Benefícios' },
  { href: '#rentabilidade', label: 'Rentabilidade' },
  { href: '#contato', label: 'Contato' },
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
        <a href="#top" className="brand" aria-label="BRF Previdência"
          style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginLeft: -32 }}>
          <img src={scrolled ? logoScrolled : logoDefault} alt="BRF Previdência" className="brand-logo" style={{ height: 40 }} />
          <span className="brand-tag" style={{ paddingLeft: 0, borderLeft: 'none' }}>Jornal BRF Previdência</span>
        </a>

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
          <span />
          <span />
          <span />
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
