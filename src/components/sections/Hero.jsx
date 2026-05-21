import { edition } from '../../data/edition.js'

const { hero } = edition

export default function Hero() {
  return (
    <section className="hero" data-screen-label="Hero">
      <div className="wrap hero-inner">
        {/* Conteúdo esquerdo */}
        <div>
          <span className="badge-pill">
            <span className="dot" />
            {hero.badge}
          </span>

          <h1>
            {hero.titulo}
            <span className="accent">{hero.subtitulo}</span>
          </h1>

          <p className="lead">{hero.lead}</p>

          <a className="btn btn-ghost" href="#" style={{ alignSelf: 'flex-start', marginTop: 8 }}>Ver edições anteriores</a>

        </div>

        {/* Arte decorativa */}
        <div className="hero-art" aria-hidden="true">
          <div className="hero-card main" />

<div className="hero-card mini">
            <span className="e">{hero.miniCard.edicao}</span>
            <span className="t">{hero.miniCard.chamada}</span>
            <span className="arrow-circle">→</span>
          </div>
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
