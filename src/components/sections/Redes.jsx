import { edition } from '../../data/edition.js'
import { asset } from '../../utils/assets.js'

const { redes } = edition

export default function Redes() {
  return (
    <section className="section social" id="redes" data-screen-label="Redes">
      <div className="social-bg-photo">
        <img
          src={asset('/social-media-trends.jpg')}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
      <div className="wrap inner">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="editorial-label" style={{ whiteSpace: 'nowrap', transform: 'rotate(-3deg)', fontSize: 17, padding: '15px 29px' }}>Redes Sociais</span>
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
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ic">
                  {p.logo
                    ? <img src={asset(p.logo)} alt={p.nome} style={{ width: '85%', height: '85%', objectFit: 'contain' }} />
                    : p.ic}
                </span>
                <span className="social-btn">{p.labelEspecial ?? 'Acessar'}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
