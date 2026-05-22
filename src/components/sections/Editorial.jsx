import { edition } from '../../data/edition.js'

const { editorial } = edition

export default function Editorial() {
  return (
    <section className="editorial" id="editorial" data-screen-label="Editorial">

      <div className="editorial-grid">

        {/* ── Coluna esquerda: texto ── */}
        <div className="editorial-col-text reveal">
          <h2 className="editorial-headline">{editorial.titulo}</h2>
          <span className="editorial-label">Editorial</span>

          <div className="editorial-body">
            {editorial.paragrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* ── Coluna direita: duas fotos em largura total ── */}
        <div className="editorial-col-photos">
          <div className="editorial-col-stack">

            <div className="editorial-photo-small">
              <div className="editorial-placeholder">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                Foto 1
              </div>
            </div>

            <div className="editorial-photo-small">
              <div className="editorial-placeholder">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                Foto 2
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
