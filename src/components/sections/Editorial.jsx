import { edition } from '../../data/edition.js'
import { asset } from '../../utils/assets.js'
import { withBoldPrograma } from '../../utils/formatText.jsx'

const { editorial } = edition

export default function Editorial() {
  return (
    <section className="editorial" id="editorial" data-screen-label="Editorial">

      <div className="editorial-grid">

        {/* ── Coluna esquerda: texto ── */}
        <div className="editorial-col-text reveal">
          <span className="editorial-label">Editorial</span>

          <h2 className="editorial-headline">
            {editorial.titulo.split(/(estar cada vez mais próximos de você)/i).map((part, i) =>
              /estar cada vez mais próximos de você/i.test(part)
                ? <span key={i} style={{ color: '#b8c6ff' }}>{part}</span>
                : part
            )}
          </h2>

          <div className="editorial-body">
            {editorial.paragrafos.map((p, i) => (
              <p key={i}>{withBoldPrograma(p)}</p>
            ))}
          </div>


        </div>

        {/* ── Coluna direita: duas fotos em largura total ── */}
        <div className="editorial-col-photos">
          <div className="editorial-col-stack">

            <div className="editorial-photo-small">
              <img src={asset('/foto-editorial-1.jpg')} alt="Participante BRF Previdência"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit', display: 'block' }} />
            </div>

            <div className="editorial-photo-small">
              <img src={asset('/foto-editorial-2.jpg')} alt="Família BRF Previdência"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '20% center', borderRadius: 'inherit', display: 'block' }} />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
