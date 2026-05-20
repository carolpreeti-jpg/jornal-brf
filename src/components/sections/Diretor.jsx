import { edition } from '../../data/edition.js'

const { diretor } = edition

export default function Diretor() {
  return (
    <section className="section director" id="diretor" data-screen-label="Diretor">
      <div className="wrap">
        <div className="row">
          {/* Card lateral */}
          <aside className="director-card reveal">
            <span className="badge">Presidente</span>
            <div className="director-photo" aria-label={`Foto de ${diretor.nome}`}>
              {diretor.iniciais}
            </div>
            <span className="name">{diretor.nome}</span>
            <span className="role">{diretor.cargo}</span>
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
