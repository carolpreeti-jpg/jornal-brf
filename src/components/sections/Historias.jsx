import { edition } from '../../data/edition.js'

const { historias } = edition

export default function Historias() {
  return (
    <section className="elas" id="historias" data-screen-label="Histórias">
      {/* Wave superior */}
      <svg
        className="wave-divider"
        style={{ transform: 'rotate(180deg)', background: '#fff' }}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="#DC2626" d="M0,30 C240,80 480,0 720,30 C960,60 1200,10 1440,40 L1440,80 L0,80 Z" />
      </svg>

      <div className="wrap inner">
        <div className="reveal">
          <span className="eyebrow">{historias.eyebrow}</span>
          <h2>{historias.subtitulo}</h2>
          <p style={{ opacity: 0.9, marginTop: 12, maxWidth: 700 }}>{historias.intro}</p>
        </div>

        <div className="row" style={{ marginTop: 40, alignItems: 'flex-start' }}>
          <div className="elas-photo reveal" aria-hidden="true" />

          <div className="elas-text reveal d2">
            {historias.blocos.map((bloco, i) => (
              <div key={i} style={{ marginBottom: 28 }}>
                <h3 style={{ color: '#fff', marginBottom: 10 }}>{bloco.titulo}</h3>
                <p>{bloco.texto}</p>
                <blockquote style={{
                  borderLeft: '3px solid rgba(255,255,255,.4)',
                  paddingLeft: 16,
                  margin: '14px 0 0',
                  fontStyle: 'italic',
                  opacity: 0.85,
                }}>
                  "{bloco.citacao}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        <p className="reveal" style={{ marginTop: 32, opacity: 0.88, maxWidth: 760 }}>
          {historias.fechamento}
        </p>

        <div className="cta reveal" style={{ marginTop: 24 }}>
          <a className="btn btn-light" href="#">
            Saiba mais sobre o programa de homenagens <span className="arrow">→</span>
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
