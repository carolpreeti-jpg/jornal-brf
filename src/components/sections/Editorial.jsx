import { edition } from '../../data/edition.js'
import { asset } from '../../utils/assets.js'

const { editorial } = edition

export default function Editorial() {
  return (
    <section className="editorial" id="editorial" data-screen-label="Editorial">

      <div className="wrap">
        <div className="editorial-grid">

          {/* ── Coluna esquerda: foto única ── */}
          <div className="editorial-col-photos">
            <div className="editorial-photo">
              <img src={asset('/marketing-agency-team.jpg')} alt="Participante BRF Previdência"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '60% 20%', borderRadius: 'inherit', display: 'block' }} />
            </div>
          </div>

          {/* ── Coluna direita: texto ── */}
          <div className="editorial-col-text reveal">
            <span className="editorial-label">Editorial</span>

            <h2 className="editorial-headline">
              {editorial.titulo.split(/(cheio de novidades)/i).map((part, i) =>
                /cheio de novidades/i.test(part)
                  ? <span key={i} style={{ color: '#b8c6ff' }}>{part}</span>
                  : part
              )}
            </h2>

            <div className="editorial-body">
              {editorial.paragrafos.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
