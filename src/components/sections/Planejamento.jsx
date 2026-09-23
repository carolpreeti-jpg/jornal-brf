import { edition } from '../../data/edition.js'
import { asset } from '../../utils/assets.js'

const { planejamento: pl } = edition

const NOTO = { fontFamily: "'Noto Sans', sans-serif" }
const TXT  = { ...NOTO, fontSize: 17, lineHeight: 1.8, color: 'var(--text-secondary)' }

export default function Planejamento() {
  return (
    <section className="section" id="planejamento" data-screen-label="Planejamento Previdenciário" style={{ background: '#fff' }}>
      <div className="wrap">

        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 48, alignItems: 'start' }}>

          {/* Coluna esquerda — cabeçalho + texto */}
          <div>
            {/* Cabeçalho */}
            <div className="section-head reveal" style={{ maxWidth: 'none' }}>
              <span className="editorial-label" style={{ transform: 'rotate(-3deg)', whiteSpace: 'nowrap', maxWidth: 'none', fontSize: 17, padding: '15px 29px' }}>Planejamento Previdenciário</span>
              <h2>
                {(() => {
                  const marker = 'investe no futuro das pessoas'
                  const idx = pl.titulo.indexOf(marker)
                  return idx === -1
                    ? pl.titulo
                    : <>{pl.titulo.slice(0, idx)}<span style={{ color: 'var(--brand-blue)' }}>{marker}</span>{pl.titulo.slice(idx + marker.length)}</>
                })()}
              </h2>
            </div>

            {pl.paragrafos.map((txt, i) => (
              <p key={i} style={{ ...TXT, marginBottom: 20 }}>{txt}</p>
            ))}

            <p style={{ ...TXT, marginTop: 8 }}>{pl.paragrafoFinal}</p>
          </div>

          {/* Coluna direita — depoimento Daniele Fernanda */}
          <div className="testimonial-card" style={{ maxWidth: '100%', position: 'sticky', top: 24 }}>
            <div className="card-top">
              <img
                src={asset('/daniele-fernanda.png')}
                alt="Daniele Fernanda"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div className="quote-badge">"</div>
            <div className="card-bottom">
              <p className="card-text">{pl.citacao}</p>
              <div>
                <p className="card-author-name" style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 400, color: '#EE686D', fontSize: 18 }}>
                  {pl.citacaoAutor.split('\n')[0].replace(/,$/, '')}
                </p>
                <p className="card-author-role">{pl.citacaoAutor.split('\n')[1]}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Solicite uma visita + Por onde passamos */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 56, alignItems: 'stretch' }}>

          <div style={{
            background: 'var(--gray-50)',
            borderRadius: 'var(--radius-card)',
            padding: '32px 36px',
          }}>
            <h3 style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 400, fontSize: 24, color: 'var(--brand-coral)', margin: '0 0 12px' }}>
              {pl.solicitarVisita.titulo}
            </h3>
            <p style={{ ...TXT, margin: 0 }}>{pl.solicitarVisita.texto}</p>
          </div>

          <div style={{ position: 'relative', height: '100%' }}>
            <span className="port-photo-label">{pl.porOndePassamos.titulo}</span>
            <div style={{ position: 'relative', borderRadius: 'var(--radius-card)', overflow: 'hidden', height: '100%', minHeight: 220 }}>
              <img
                src={asset('/por-onde-passamos-encontro.jpeg')}
                alt="Palestra do Programa Compromisso com Você"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute', left: 16, right: 16, bottom: 16, zIndex: 1,
                background: 'var(--brand-blue)', borderRadius: 'var(--radius-card)',
                padding: '16px 20px',
              }}>
                <p style={{ ...NOTO, margin: 0, fontSize: 14, lineHeight: 1.6, color: '#fff', textAlign: 'center' }}>
                  <strong>{pl.porOndePassamos.unidade}</strong>{'  '}{pl.porOndePassamos.texto}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
