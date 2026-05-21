import { edition } from '../../data/edition.js'

const { brfPrevEmFoco } = edition

export default function BRFPrevEmFoco() {
  return (
    <section className="section" id="brfprev-em-foco" data-screen-label="BRF Prev em Foco"
      style={{ background: 'var(--gray-50)' }}>
      <div className="wrap">

        <div className="section-head reveal">
          <span className="eyebrow">Canal · Comunicação</span>
          <h2>{brfPrevEmFoco.titulo}</h2>
          <p style={{ fontWeight: 600, color: 'var(--brand-blue)' }}>{brfPrevEmFoco.chamada}</p>
        </div>

        <div className="cols reveal d2">
          <div>
            {brfPrevEmFoco.paragrafos.slice(0, Math.ceil(brfPrevEmFoco.paragrafos.length / 2)).map((p, i) => (
              <p key={i} style={{ color: 'var(--text-secondary)' }}>{p}</p>
            ))}
          </div>
          <div>
            {brfPrevEmFoco.paragrafos.slice(Math.ceil(brfPrevEmFoco.paragrafos.length / 2)).map((p, i) => (
              <p key={i} style={{ color: 'var(--text-secondary)' }}>{p}</p>
            ))}
          </div>
        </div>

        {/* CTA destaque */}
        <div style={{
          marginTop: 32,
          background: 'linear-gradient(135deg, #DC2626 0%, #7C3AED 100%)',
          borderRadius: 'var(--radius-card)',
          padding: '24px 28px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 16,
        }} className="reveal d3">
          <p style={{ color: '#fff', margin: 0, flex: 1, fontWeight: 600 }}>
            {brfPrevEmFoco.cta}
          </p>
          <a
            className="btn btn-light"
            href={brfPrevEmFoco.urlYoutube}
            target="_blank"
            rel="noopener noreferrer"
          >
            {brfPrevEmFoco.urlYoutubeLabel} <span className="arrow">→</span>
          </a>
        </div>

      </div>
    </section>
  )
}
