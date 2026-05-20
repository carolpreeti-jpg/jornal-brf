import { edition } from '../../data/edition.js'

export default function Sumario() {
  return (
    <section className="section" id="sumario" data-screen-label="Sumário">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Nesta edição</span>
          <h2>Tudo que você vai encontrar nas próximas páginas</h2>
          <p>
            Editoriais, comunicados, novidades das unidades e as ações que estão
            mudando a forma como você se prepara para o futuro.
          </p>
        </div>

        <div className="index-grid">
          {edition.sumario.map((item, i) => {
            const delays = ['', ' d2', ' d3', ' d4']
            const delay = delays[i % 4]
            return (
              <a
                key={item.n}
                className={`idx-card${item.variante ? ' ' + item.variante : ''} reveal${delay}`}
                href={item.href}
              >
                <span className="n">{item.n}</span>
                <span className="tag">{item.tag}</span>
                <h3>{item.titulo}</h3>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
