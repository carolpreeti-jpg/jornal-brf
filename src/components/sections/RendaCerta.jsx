import { edition } from '../../data/edition.js'

const { rendaCerta } = edition

export default function RendaCerta() {
  return (
    <section className="section levelup" id="renda-certa" data-screen-label="Renda Certa">
      <div className="wrap">
        <div className="row">
          {/* Conteúdo */}
          <div className="reveal">
            <span className="eyebrow" style={{ color: '#FCD34D' }}>
              Educação Financeira · Plataforma Digital
            </span>

            <div className="levelup-title">
              <h2 style={{ color: '#fff' }}>{rendaCerta.titulo}</h2>
            </div>

            <p style={{ color: 'rgba(255,255,255,.85)', fontSize: 15, maxWidth: 540, margin: '16px 0 24px' }}>
              {rendaCerta.descricao}
            </p>
            <p style={{ color: 'rgba(255,255,255,.75)', fontSize: 14, maxWidth: 540, marginBottom: 28 }}>
              {rendaCerta.objetivo}
            </p>

            {/* Recursos */}
            <div className="lu-rules">
              {rendaCerta.recursos.map((r, i) => (
                <div key={i} className="lu-rule">
                  <span className="ic">{r.ic}</span>
                  <div>
                    <span className="t" style={{ fontWeight: 700, display: 'block' }}>{r.titulo}</span>
                    <span style={{ fontSize: 12, opacity: .75 }}>{r.texto}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="lu-cta">
              <a
                className="btn btn-yellow"
                href={rendaCerta.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Acessar o Renda Certa <span className="arrow">→</span>
              </a>
              <span style={{
                display: 'block',
                marginTop: 8,
                fontSize: 12,
                color: 'rgba(255,255,255,.5)',
                fontFamily: 'var(--font-mono)',
              }}>
                {rendaCerta.urlLabel}
              </span>
            </div>
          </div>

          {/* Foto decorativa */}
          <div className="lu-photo reveal d2" aria-hidden="true">
            <span className="badge">aprendizado contínuo</span>
          </div>
        </div>
      </div>
    </section>
  )
}
