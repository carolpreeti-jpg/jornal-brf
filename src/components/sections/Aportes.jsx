import { edition } from '../../data/edition.js'

const { aportes } = edition

export default function Aportes() {
  return (
    <section className="section game" id="aportes" data-screen-label="Aportes">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Planejamento · Reserva Previdenciária</span>
          <h2>{aportes.titulo}</h2>
          <p>{aportes.descricao}</p>
          {aportes.descricaoExtra && (
            <p style={{ color: 'var(--text-secondary)', marginTop: 8 }}>{aportes.descricaoExtra}</p>
          )}
        </div>

        {/* Modalidades */}
        <div className="units-grid reveal d2">
          {aportes.modalidades.map((m, i) => (
            <article key={i} className="unit-card">
              <div className="unit-body" style={{ padding: 24 }}>
                <span className="unit-loc">{m.planos}</span>
                <h3>{m.titulo}</h3>
                {m.descricao.split('\n\n').map((p, j) => (
                  <p key={j} style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: j > 0 ? 10 : 0 }}>{p}</p>
                ))}
                <ul style={{ marginTop: 12, paddingLeft: 0, listStyle: 'none' }}>
                  {m.beneficios.map((b, j) => (
                    <li key={j} style={{
                      display: 'flex',
                      gap: 8,
                      padding: '6px 0',
                      borderBottom: '1px solid var(--gray-100)',
                      fontSize: 13,
                      color: 'var(--text-secondary)',
                    }}>
                      <span style={{ color: 'var(--brand-teal)', flexShrink: 0 }}>✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                {m.obs && (
                  <p style={{ marginTop: 12, fontSize: 13, color: 'var(--text-muted)', fontStyle: 'italic' }}>
                    {m.obs}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Quando vale a pena */}
        <div className="reveal" style={{ marginTop: 40 }}>
          <span className="eyebrow" style={{ color: 'var(--brand-blue-mid)' }}>
            Quando vale a pena fazer um aporte extra ou contribuição suplementar?
          </span>
          <p style={{ color: 'var(--text-secondary)', marginTop: 8, marginBottom: 16 }}>
            Contribuições ocasionais podem fazer diferença no saldo acumulado no longo prazo e alguns momentos podem ser boas oportunidades para reforçar sua reserva previdenciária, como:
          </p>
          <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {aportes.oportunidades.map((o, i) => (
              <li key={i} style={{
                background: 'var(--brand-blue-light)',
                color: 'var(--brand-blue)',
                padding: '8px 16px',
                borderRadius: 'var(--radius-pill)',
                fontSize: 13,
                fontWeight: 600,
              }}>
                {o}
              </li>
            ))}
          </ul>
        </div>

        {/* Benefício fiscal */}
        <div className="reveal d2" style={{
          marginTop: 32,
          background: 'var(--brand-blue-light)',
          borderRadius: 'var(--radius-card)',
          padding: '20px 24px',
          borderLeft: '4px solid var(--brand-blue-mid)',
        }}>
          <span style={{ fontWeight: 700, color: 'var(--brand-blue)', display: 'block', marginBottom: 6 }}>
            Benefício fiscal
          </span>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14, margin: 0 }}>
            {aportes.beneficioFiscal}
          </p>
          {aportes.beneficioFiscalExtra && (
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginTop: 8, marginBottom: 0 }}>
              {aportes.beneficioFiscalExtra}
            </p>
          )}
        </div>

        {/* Canais */}
        <div className="reveal" style={{ marginTop: 32 }}>
          <span className="eyebrow" style={{ color: 'var(--brand-blue-mid)' }}>
            Como realizar aportes e contribuições suplementares?
          </span>
          <p style={{ color: 'var(--text-secondary)', marginTop: 8, marginBottom: 16, fontSize: 14 }}>
            O processo pode ser feito de forma simples pelo autoatendimento no site ou pelos canais de atendimento:
          </p>
          <div className="contact-row">
            {aportes.canais.map((c) => (
              <span key={c.texto} className="contact">
                {c.ic}  {c.texto}
              </span>
            ))}
          </div>
          <a className="btn btn-primary" style={{ marginTop: 20 }} href="#">
            Acessar autoatendimento <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
