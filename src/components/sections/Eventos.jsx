import { edition } from '../../data/edition.js'

const { eventos } = edition

export default function Eventos() {
  return (
    <section className="section events" id="eventos" data-screen-label="Eventos">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Setor de Previdência</span>
          <h2 dangerouslySetInnerHTML={{ __html: eventos.titulo }} />
          <p>{eventos.descricao}</p>
        </div>

        <div className="events-grid">
          {eventos.cards.map((card, i) => {
            const delay = i > 0 ? ` d${i + 1}` : ''
            return (
              <article key={card.titulo} className={`event-card reveal${delay}`}>
                <div className={`event-img ${card.classe}`} data-cap={card.cap} />
                <div className="event-body">
                  <span className="tag">{card.tag}</span>
                  <h3>{card.titulo}</h3>
                  {card.descricao && <p>{card.descricao}</p>}
                  {card.lista && (
                    <ul>
                      {card.lista.map((item, j) => <li key={j}>{item}</li>)}
                    </ul>
                  )}
                </div>
              </article>
            )
          })}
        </div>

        <div className="event-extra reveal">
          <h4>A BRF Prev também esteve presente em:</h4>
          <ul>
            {eventos.extras.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
