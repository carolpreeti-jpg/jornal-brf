import { edition } from '../../data/edition.js'

const { editorial } = edition

export default function Editorial() {
  const metade = Math.ceil(editorial.paragrafos.length / 2)

  return (
    <section className="editorial" id="editorial" data-screen-label="Editorial">
      {/* Wave superior */}
      <svg
        className="wave-divider"
        style={{ transform: 'rotate(180deg)', background: '#fff' }}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="#1E3A8A" d="M0,30 C240,80 480,0 720,30 C960,60 1200,10 1440,40 L1440,80 L0,80 Z" />
      </svg>

      <div className="wrap inner">
        <div className="reveal">
          <span className="eyebrow">Editorial</span>
          <h2>{editorial.titulo}</h2>
        </div>

        <div className="cols">
          <div className="reveal">
            {editorial.paragrafos.slice(0, metade).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="reveal d2">
            {editorial.paragrafos.slice(metade).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <blockquote className="quote reveal">
          "{editorial.citacao}"
          <cite>{editorial.citacaoAutor}</cite>
        </blockquote>

        <div className="cta">
          <a className="btn btn-light" href="#">
            Leia o editorial completo <span className="arrow">→</span>
          </a>
        </div>
      </div>

      {/* Wave inferior */}
      <svg
        className="wave-divider"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="#F8FAFC" d="M0,40 C240,80 480,0 720,30 C960,60 1200,20 1440,50 L1440,80 L0,80 Z" />
      </svg>
    </section>
  )
}
