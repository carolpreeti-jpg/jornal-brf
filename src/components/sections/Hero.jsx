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

          <div className="hero-ctas">
            <a className="btn btn-light" href="#editorial">
              Ler edição completa <span className="arrow">→</span>
            </a>
            <a className="btn btn-ghost" href="#">Ver edições anteriores</a>
          </div>

          <div className="hero-meta">
            <span>{hero.numMaterias} matérias</span>
            <span className="sep" />
            <span>Leitura · {hero.tempoLeitura} min</span>
            <span className="sep" />
            <span>Por equipe BRF Prev</span>
          </div>
        </div>

        {/* Arte decorativa */}
        <div className="hero-art" aria-hidden="true">
          <div className="hero-card main" />

          <div className="hero-card float">
            <span className="label">{hero.rentCard.label}</span>
            <span className="num">{hero.rentCard.valor}</span>
            <span className="sub">
              {hero.rentCard.plano} · {hero.rentCard.periodo}
            </span>
            <div className="tags">
              {hero.rentCard.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <div className="bar"><i /></div>
          </div>

          <div className="hero-card mini">
            <span className="e">{hero.miniCard.edicao}</span>
            <span className="t">{hero.miniCard.chamada}</span>
            <span className="arrow-circle">→</span>
          </div>
        </div>
      </div>

      {/* Separador wave */}
      <svg
        className="wave-divider"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#ffffff"
          d="M0,40 C240,100 480,0 720,40 C960,80 1200,20 1440,60 L1440,100 L0,100 Z"
        />
      </svg>
    </section>
  )
}
