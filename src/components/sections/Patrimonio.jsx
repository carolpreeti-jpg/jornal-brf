import { edition } from '../../data/edition.js'
import { asset } from '../../utils/assets.js'

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

            {patrimonio.descricao.split('\n\n').map((p, i) => (
              <p key={i} style={{ color: 'rgba(255,255,255,.85)', fontSize: 15, maxWidth: 540, marginBottom: 16 }}>
                {p}
              </p>
            ))}

            {/* O que é patrimônio */}
            {patrimonio.oQueEPatrimonio && (
              <div style={{
                background: 'rgba(255,255,255,.07)',
                borderRadius: 12,
                padding: '16px 20px',
                marginBottom: 24,
                borderLeft: '3px solid var(--brand-yellow)',
              }}>
                <p style={{ color: 'var(--brand-yellow)', fontWeight: 700, fontSize: 13, marginBottom: 8 }}>
                  {patrimonio.oQueEPatrimonio.titulo}
                </p>
                <p style={{ color: 'rgba(255,255,255,.8)', fontSize: 13, margin: 0 }}>
                  {patrimonio.oQueEPatrimonio.texto}
                </p>
              </div>
            )}

            {/* Intro analogias */}
            {patrimonio.analogiasIntro && (
              <p style={{ color: 'rgba(255,255,255,.75)', fontSize: 13, marginBottom: 12 }}>
                {patrimonio.analogiasIntro}
              </p>
            )}

            {/* Analogias */}
            <div className="lu-rules">
              {patrimonio.analogias.map((a, i) => (
                <div key={i} className="lu-rule">
                  <span className="ic">{a.ic}</span>
                  <span className="t" style={{ fontSize: 13 }}>{a.texto}</span>
                </div>
              ))}
            </div>

            {/* Contexto das analogias */}
            {patrimonio.analogiasContexto && (
              <p style={{ color: 'rgba(255,255,255,.75)', fontSize: 13, marginTop: 16, marginBottom: 24 }}>
                {patrimonio.analogiasContexto}
              </p>
            )}

            <blockquote style={{
              marginTop: 4,
              borderLeft: '3px solid var(--brand-yellow)',
              paddingLeft: 16,
              color: 'rgba(255,255,255,.85)',
              fontFamily: "'Noto Sans', sans-serif",
              fontStyle: 'italic',
              fontSize: 15,
              lineHeight: 1.75,
            }}>
              "{patrimonio.citacao}"
              <cite style={{ display: 'block', marginTop: 8, fontFamily: "'Co Headline', sans-serif", fontWeight: 400, fontSize: 15, fontStyle: 'normal', color: 'rgba(255,255,255,.7)' }}>
                — {patrimonio.citacaoAutor}
              </cite>
            </blockquote>

            {/* Fechamento */}
            {patrimonio.fechamento && (
              <p style={{ color: 'rgba(255,255,255,.75)', fontSize: 13, marginTop: 20 }}>
                {patrimonio.fechamento}
              </p>
            )}
          </div>

          {/* Arte decorativa */}
          <div className="lu-photo reveal d2" aria-hidden="true">
            <img
              src={asset('/business-women.jpg')}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <span className="badge" style={{ background: 'var(--brand-teal)' }}>
              {patrimonio.valor}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
