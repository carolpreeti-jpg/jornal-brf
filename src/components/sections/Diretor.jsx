import { edition } from '../../data/edition.js'

const { diretor } = edition

export default function Diretor() {
  return (
    <section className="section director" id="diretor" data-screen-label="Diretor">
      <div className="wrap">
        <div className="row">

          {/* Card vertical — mensagem do presidente */}
          <aside className="director-quote-card reveal">

            {/* Foto */}
            <div className="dqc-top">
              <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.2" aria-hidden="true">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
            </div>

            {/* Badge aspas */}
            <div className="dqc-badge">"</div>

            {/* Texto */}
            <div className="dqc-body">
              <p className="dqc-text">{diretor.titulo}</p>
              <div>
                <p className="dqc-name">{diretor.nome}</p>
                <p className="dqc-role">{diretor.cargo}</p>
              </div>
            </div>

          </aside>

          {/* Texto */}
          <article className="director-body reveal d2">
            <span className="eyebrow" style={{ color: 'var(--brand-blue-mid)' }}>
              Mensagem do Presidente
            </span>
            <h2 style={{ color: 'var(--brand-blue)', marginTop: 10 }}>
              {diretor.titulo}
            </h2>

            {diretor.paragrafos.map((p, i) => (
              <p
                key={i}
                style={{ marginTop: i === 0 ? 24 : 0 }}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}

            <div className="signature">
              <div className="n">{diretor.nome}</div>
              <div className="r">{diretor.cargo.split('·')[0].trim()} · {diretor.cnpb}</div>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}
