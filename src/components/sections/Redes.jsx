import { edition } from '../../data/edition.js'

const { redes } = edition

export default function Redes() {
  return (
    <section className="section social" id="redes" data-screen-label="Redes">
      <div className="wrap inner">
        <div className="reveal">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,.8)' }}>
            Redes sociais · {edition.ano + 1}
          </span>
          <h2 dangerouslySetInnerHTML={{ __html: redes.titulo }} />
          <p className="lead">{redes.lead}</p>
        </div>

        <div className="social-grid">
          {redes.plataformas.map((p, i) => {
            const delay = i > 0 && i < 4 ? ` d${i + 1}` : i >= 4 ? ' d4' : ''
            return (
              <a
                key={p.nome}
                className={`social-card ${p.classe} reveal${delay}`}
                href={p.href}
              >
                <span className="ic">{p.ic}</span>
                <span className="name">{p.nome}</span>
                <span className={`num${!p.seguidores ? ' green' : ''}`}>
                  {p.labelEspecial ?? p.seguidores}
                </span>
                <span className="handle">{p.handle}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
