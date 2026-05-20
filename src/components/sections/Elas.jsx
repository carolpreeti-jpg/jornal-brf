import { edition } from '../../data/edition.js'

const { elas } = edition

export default function Elas() {
  return (
    <section className="elas" id="elas" data-screen-label="Elas">
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
          <span className="eyebrow">Diversidade &amp; Educação Financeira</span>
          <h2>
            {elas.titulo}{' '}
            <span className="elas-word">elas</span>.
          </h2>
        </div>

        <div className="row">
          <div className="elas-photo reveal" aria-hidden="true" />
          <div className="elas-text reveal d2">
            {elas.paragrafos.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </div>

        <div className="elas-stats">
          {elas.stats.map((s, i) => (
            <div key={i} className={`stat-card reveal${i > 0 ? ` d${i + 1}` : ''}`}>
              <div className="ic">{s.ic}</div>
              <div className="v">{s.valor}</div>
              <div className="l">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="cta reveal">
          <a className="btn btn-light" href="#">
            Saiba mais sobre o programa Elas <span className="arrow">→</span>
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
