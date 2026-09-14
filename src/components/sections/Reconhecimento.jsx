import { edition } from '../../data/edition.js'
import { asset } from '../../utils/assets.js'

const { reconhecimento: r } = edition

const NOTO = { fontFamily: "'Noto Sans', sans-serif" }
const TXT  = { ...NOTO, fontSize: 17, lineHeight: 1.8, color: 'var(--text-secondary)' }

export default function Reconhecimento() {
  return (
    <section className="section" id="reconhecimento" data-screen-label="Reconhecimento" style={{ background: '#fff' }}>
      <div className="wrap">

        {/* Cabeçalho — banner com espaço para foto e título sobreposto */}
        <div className="recon-hero-wrap reveal">
          <div className="recon-hero">
            <div className="recon-hero-bg">
              <img
                src={asset('/selo-sintonia-a-mais.png')}
                alt="Selo Sintonia A+"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div className="recon-hero-overlay" />
            <div className="recon-hero-content">
              <h2>{r.titulo}</h2>
            </div>
          </div>
          <span className="port-photo-label">Reconhecimento</span>
        </div>

        {r.paragrafos.map((txt, i) => (
          <p key={i} style={{ ...TXT, marginBottom: 20 }}>{txt}</p>
        ))}

        {/* Critérios */}
        <div style={{ marginBottom: 48 }}>
          <p style={{ ...NOTO, fontWeight: 700, fontSize: 16, color: 'var(--text-primary)', marginBottom: 16 }}>
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
              <p className="card-author-name" style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 400, color: '#EE686D', fontSize: 20 }}>
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
