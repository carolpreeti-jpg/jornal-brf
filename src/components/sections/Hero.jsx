import { edition } from '../../data/edition.js'
import BeamsCanvas from '../ui/BeamsCanvas.jsx'

const { hero } = edition

export default function Hero() {
  return (
    <section className="hero" data-screen-label="Hero">

      {/* Feixes animados — apenas no interior da seção, sem vazar */}
      <BeamsCanvas style={{
        top: 'var(--header-h)',
        height: 'calc(100% - var(--header-h))',
        opacity: 0.7,
        zIndex: 0,
        maskImage: 'linear-gradient(to bottom, black 55%, transparent 95%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 95%)',
      }} />

      <div className="wrap hero-inner">
        {/* Conteúdo esquerdo */}
        <div style={{ marginTop: 'calc(-40px + 7%)', marginLeft: '-20%' }}>
          <h1>
            {hero.titulo}
            <span className="accent">{hero.subtitulo}</span>
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28, marginTop: 36 }}>
            {(hero.destaques || []).map((d, i) => (
              <div key={i}>
                <a href={d.href} style={{ textDecoration: 'none' }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: i === 0 ? 'clamp(20px, 2vw, 26px)' : 'clamp(16px, 1.6vw, 21px)',
                    color: '#fff',
                    lineHeight: 1.3,
                    display: 'block',
                    marginBottom: 6,
                    maxWidth: '90%',
                    whiteSpace: 'pre-line',
                  }}>{d.titulo}</span>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'underline',
                    textUnderlineOffset: 3,
                  }}>{d.label}</span>
                </a>
              </div>
            ))}
          </div>


        </div>

        {/* Arte decorativa */}
        <div className="hero-art" aria-hidden="true">
          <div className="hero-card main">
            <img src="/hero-team.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', objectPosition: '6% center' }} />
          </div>
          <div className="hero-card mini" />
        </div>
      </div>

      {/* Separador wave — fill combina com o fundo do menu-index */}
      <svg
        className="wave-divider"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#F5F3F0"
          d="M0,30 C240,80 480,0 720,32 C960,64 1200,14 1440,46 L1440,80 L0,80 Z"
        />
      </svg>
    </section>
  )
}
