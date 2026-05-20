import { edition } from '../../data/edition.js'

const { webinar } = edition

export default function WebinarIR() {
  return (
    <section className="section estatuto" id="webinar" data-screen-label="Webinar IR">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Educação Financeira · {webinar.data}</span>
          <h2>{webinar.titulo}</h2>
        </div>

        <p className="intro reveal">{webinar.descricao}</p>

        <div className="reveal" style={{ marginBottom: 32 }}>
          <span className="eyebrow" style={{ color: 'var(--brand-blue-mid)' }}>Condução</span>
          <ul style={{ marginTop: 10, paddingLeft: 0, listStyle: 'none' }}>
            {webinar.condutores.map((c, i) => (
              <li key={i} style={{
                padding: '8px 0',
                borderBottom: '1px solid var(--gray-100)',
                color: 'var(--text-secondary)',
                fontSize: 15,
              }}>
                ✦ {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="cards reveal d2">
          {webinar.temas.map((tema, i) => (
            <article key={i} className={`est-card reveal${i > 0 ? ` d${Math.min(i + 1, 4)}` : ''}`}>
              <div className="doc" style={{ fontSize: 18 }}>📌</div>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', margin: 0 }}>{tema}</p>
            </article>
          ))}
        </div>

        <div className="cta-row reveal" style={{ marginTop: 32 }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, maxWidth: 640, marginBottom: 16 }}>
            {webinar.destaque}
          </p>
          <a
            className="btn btn-outline-blue"
            href={webinar.urlYoutube}
            target="_blank"
            rel="noopener noreferrer"
          >
            {webinar.urlLabel} <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
