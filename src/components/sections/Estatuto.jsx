import { edition } from '../../data/edition.js'

const { estatuto } = edition
const delays = ['', ' d2', ' d3', ' d4']

export default function Estatuto() {
  return (
    <section className="section estatuto" id="estatuto" data-screen-label="Estatuto">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Governança</span>
          <h2 dangerouslySetInnerHTML={{ __html: estatuto.titulo }} />
        </div>

        <p className="intro reveal">{estatuto.intro}</p>

        <div className="cards">
          {estatuto.documentos.map((doc, i) => (
            <article key={doc.doc} className={`est-card reveal${delays[i]}`}>
              <div className="doc">{doc.doc}</div>
              <h3>{doc.titulo}</h3>
              <span className={`status ${doc.status}`}>{doc.statusLabel}</span>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', margin: 0 }}>
                {doc.descricao}
              </p>
              <a className="link" href="#">Saiba mais →</a>
            </article>
          ))}
        </div>

        <div className="cta-row reveal">
          <p>
            Compare lado a lado o texto atual e o proposto, com marcações e notas
            explicativas.
          </p>
          <a className="btn btn-outline-blue" href="#">
            Acesse o quadro comparativo das alterações <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
