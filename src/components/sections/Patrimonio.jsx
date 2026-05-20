import { edition } from '../../data/edition.js'

const { patrimonio } = edition

export default function Patrimonio() {
  return (
    <section className="section levelup" id="patrimonio" data-screen-label="Patrimônio">
      <div className="wrap">
        <div className="row">
          {/* Conteúdo */}
          <div className="reveal">
            <span className="eyebrow" style={{ color: '#FCD34D' }}>
              Marco Histórico · 2026
            </span>

            <div className="levelup-title" style={{ marginBottom: 24 }}>
              <h2 style={{ color: '#fff', lineHeight: 1.1 }}>
                BRF Prev atinge{' '}
                <span style={{ color: 'var(--brand-yellow)', display: 'block' }}>
                  R$ 5 bilhões
                </span>
                em patrimônio.
              </h2>
            </div>

            <p style={{ color: 'rgba(255,255,255,.85)', fontSize: 15, maxWidth: 540, marginBottom: 28 }}>
              {patrimonio.descricao}
            </p>

            {/* Analogias */}
            <div className="lu-rules">
              {patrimonio.analogias.map((a, i) => (
                <div key={i} className="lu-rule">
                  <span className="ic">{a.ic}</span>
                  <span className="t" style={{ fontSize: 13 }}>{a.texto}</span>
                </div>
              ))}
            </div>

            <blockquote style={{
              marginTop: 28,
              borderLeft: '3px solid var(--brand-yellow)',
              paddingLeft: 16,
              color: 'rgba(255,255,255,.85)',
              fontStyle: 'italic',
              fontSize: 14,
            }}>
              "{patrimonio.citacao}"
              <cite style={{ display: 'block', marginTop: 8, fontStyle: 'normal', fontWeight: 600, opacity: .7 }}>
                — {patrimonio.citacaoAutor}
              </cite>
            </blockquote>
          </div>

          {/* Arte decorativa */}
          <div className="lu-photo reveal d2" aria-hidden="true">
            <span className="badge" style={{ background: 'var(--brand-teal)' }}>
              {patrimonio.valor}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
