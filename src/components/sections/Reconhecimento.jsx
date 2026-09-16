import { edition } from '../../data/edition.js'
import { asset } from '../../utils/assets.js'

const { reconhecimento: r } = edition

const NOTO = { fontFamily: "'Noto Sans', sans-serif" }
const TXT  = { ...NOTO, fontSize: 17, lineHeight: 1.8, color: 'var(--text-secondary)' }

export default function Reconhecimento() {
  return (
    <section className="section" id="reconhecimento" data-screen-label="Reconhecimento" style={{ background: '#fff' }}>
      <div className="wrap">

        {/* Cabeçalho — título com tag à esquerda, espaço reservado para PNG à direita */}
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'start', marginBottom: 20 }}>
          <div>
            <img
              src={asset('/logo-receita-sintonia.png')}
              alt="Programa Sintonia"
              style={{ display: 'block', height: 110, width: 'auto', objectFit: 'contain', objectPosition: 'left center', marginLeft: -40, marginBottom: 16 }}
            />
            <h2 style={{ margin: '0 0 28px' }}>
              {(() => {
                const marker = 'Selo Sintonia A+'
                const idx = r.titulo.indexOf(marker)
                return idx === -1
                  ? r.titulo
                  : <>{r.titulo.slice(0, idx)}<span style={{ color: 'var(--brand-blue)' }}>{marker}</span>{r.titulo.slice(idx + marker.length)}</>
              })()}
            </h2>

            <p style={{ ...TXT, margin: 0, maxWidth: '85%' }}>{r.paragrafos[0]}</p>
          </div>

          <img
            src={asset('/selo-a-mais-mais.png')}
            alt="Selo Sintonia A+"
            style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block', transform: 'translate(-10%, -50px)' }}
          />
        </div>

        {r.paragrafos.slice(1).map((txt, i) => (
          <p key={i} style={{ ...TXT, marginBottom: 20 }}>{txt}</p>
        ))}

        {/* Critérios */}
        <div style={{ marginBottom: 48, marginTop: 40 }}>
          <p style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 400, fontSize: 24, color: 'var(--text-primary)', marginBottom: 16 }}>
            {r.criterios.titulo}
          </p>
          <div className="cu-analogias-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)', marginBottom: 0 }}>
            {r.criterios.itens.map((item, i) => (
              <div key={i} className="analogia-card">
                <p style={{ ...NOTO, fontSize: 14, fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.6, textAlign: 'center' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {r.paragrafos2.map((txt, i) => (
          <p key={i} style={{ ...TXT, marginBottom: 48 }}>{txt}</p>
        ))}

        {/* Citação Maurício Manduca */}
        <div className="testimonial-card testimonial-card--horizontal" style={{ marginBottom: 48 }}>
          <div className="card-top">
            <img
              src={asset('/mauricio-manduca.jpg')}
              alt="Maurício Manduca"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', borderRadius: '16px 0 0 16px' }}
            />
          </div>
          <div className="quote-badge">"</div>
          <div className="card-bottom">
            <div>
              <p className="card-author-name" style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 400, color: 'var(--brand-blue)', fontSize: 20 }}>
                {r.citacaoAutor.split('\n')[0].replace(/,$/, '')}
              </p>
              <p className="card-author-role">
                {r.citacaoAutor.split('\n')[1]}
              </p>
            </div>
            <p className="card-text">{r.citacao}</p>
          </div>
        </div>

        {r.paragrafos3.map((txt, i) => (
          <p key={i} style={{ ...TXT, marginBottom: i < r.paragrafos3.length - 1 ? 20 : 0 }}>{txt}</p>
        ))}

      </div>
    </section>
  )
}
