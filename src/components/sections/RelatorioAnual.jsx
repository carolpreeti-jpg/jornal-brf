import { edition } from '../../data/edition.js'

const { relatorio } = edition

export default function RelatorioAnual() {
  return (
    <section className="section events" id="relatorio" data-screen-label="Relatório Anual">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Transparência · Governança</span>
          <h2>{relatorio.titulo}</h2>
          <p>{relatorio.descricao}</p>
        </div>

        <div className="events-grid">
          {relatorio.destaques.map((item, i) => {
            const delay = i > 0 ? ` d${Math.min(i + 1, 4)}` : ''
            return (
              <article key={i} className={`event-card reveal${delay}`}>
                <div className="event-body" style={{ padding: '24px 20px' }}>
                  <span className="tag" style={{ fontSize: 22 }}>{item.ic}</span>
                  <p style={{ marginTop: 12, fontSize: 14, color: 'var(--text-secondary)' }}>
                    {item.texto}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        <blockquote className="quote reveal" style={{ marginTop: 40 }}>
          "{relatorio.citacao}"
          <cite>— {relatorio.citacaoAutor}</cite>
        </blockquote>

        <div className="cta-row reveal" style={{ marginTop: 32 }}>
          <a
            className="btn btn-primary"
            href={relatorio.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Acesse o Relatório Anual 2025 <span className="arrow">→</span>
          </a>
          <span style={{ fontSize: 13, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginLeft: 16 }}>
            {relatorio.urlLabel}
          </span>
        </div>
      </div>
    </section>
  )
}
