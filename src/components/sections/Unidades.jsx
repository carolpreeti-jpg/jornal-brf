import { edition } from '../../data/edition.js'

const { unidades } = edition
const delays = ['', ' d2', ' d3', ' d4']

export default function Unidades() {
  return (
    <section className="section units" id="unidades" data-screen-label="Unidades">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Por aí</span>
          <h2>
            BRF Prev nas <em>unidades</em>: a previdência indo até você.
          </h2>
          <p>
            Nos últimos meses, nossa equipe rodou o país levando informação,
            formação e cafés com diretores de Recursos Humanos. Veja onde a gente
            esteve.
          </p>
        </div>

        <div className="units-grid">
          {unidades.map((u, i) => (
            <article key={u.local} className={`unit-card reveal${delays[i]}`}>
              <div className={`unit-img ${u.classe}`} data-cap={`placeholder · ação ${u.local.replace('Unidade ', '')}`} />
              <div className="unit-body">
                <span className="unit-loc">{u.local}</span>
                <h3>{u.titulo}</h3>
                <p>{u.descricao}</p>
                <span className="more">Ler reportagem →</span>
              </div>
            </article>
          ))}
        </div>

        <div className="partner-row reveal">
          <span className="partner-label">Parceiros &amp; entidades</span>
          {['ABRAPP', 'SINDAPP', 'ICSS', 'PREVIC'].map((p) => (
            <div key={p} className="partner-logo">{p}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
