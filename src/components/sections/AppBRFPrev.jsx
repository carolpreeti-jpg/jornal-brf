import { edition } from '../../data/edition.js'

const { appBRFPrev } = edition

export default function AppBRFPrev() {
  return (
    <section className="section" id="app-brf-prev" data-screen-label="App BRF Prev"
      style={{ background: '#fff' }}>
      <div className="wrap">

        <div className="section-head reveal">
          <span className="eyebrow">Digital · Aplicativo</span>
          <h2>{appBRFPrev.titulo}</h2>
          {appBRFPrev.descricao.split('\n\n').map((p, i) => (
            <p key={i} style={{ color: 'var(--text-secondary)' }}>{p}</p>
          ))}
        </div>

        <div className="row" style={{ alignItems: 'flex-start', gap: 48, marginTop: 40 }}>

          {/* Funcionalidades */}
          <div className="reveal" style={{ flex: 1 }}>
            <span className="eyebrow" style={{ color: 'var(--brand-blue-mid)', marginBottom: 12, display: 'block' }}>
              {appBRFPrev.funcionalidadesIntro}
            </span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {appBRFPrev.funcionalidades.map((f, i) => (
                <li key={i} style={{
                  display: 'flex', gap: 10, alignItems: 'flex-start',
                  padding: '10px 14px',
                  background: 'var(--brand-blue-light)',
                  borderRadius: 10,
                  fontSize: 14,
                  color: 'var(--brand-blue)',
                  fontWeight: 500,
                }}>
                  <span style={{ color: 'var(--brand-teal)', flexShrink: 0, marginTop: 1 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <p style={{ marginTop: 16, fontSize: 14, color: 'var(--text-secondary)', fontWeight: 600 }}>
              {appBRFPrev.plataformas}
            </p>
          </div>

          {/* Tutorial de acesso */}
          <div className="reveal d2" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[appBRFPrev.primeiroAcesso, appBRFPrev.esqueceuSenha].map((item, i) => (
              <div key={i} style={{
                background: 'var(--gray-50)',
                borderRadius: 'var(--radius-card)',
                padding: '20px 24px',
                borderLeft: '4px solid var(--brand-blue-mid)',
              }}>
                <p style={{ fontWeight: 700, color: 'var(--brand-blue)', marginBottom: 8 }}>{item.titulo}</p>
                {item.descricao.split('\n\n').map((p, j) => (
                  <p key={j} style={{ fontSize: 14, color: 'var(--text-secondary)', margin: j > 0 ? '8px 0 0' : 0 }}>{p}</p>
                ))}
              </div>
            ))}
          </div>

        </div>

        {/* CTA */}
        <div className="cta reveal d3" style={{ marginTop: 36 }}>
          <a className="btn btn-primary" href="#">
            {appBRFPrev.cta} <span className="arrow">→</span>
          </a>
        </div>

      </div>
    </section>
  )
}
