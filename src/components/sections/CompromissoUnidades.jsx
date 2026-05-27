import { edition } from '../../data/edition.js'
import { asset } from '../../utils/assets.js'

const { compromissoUnidades: c, patrimonio } = edition

export default function CompromissoUnidades() {
  return (
    <section className="section" id="compromisso-unidades" data-screen-label="Compromisso Unidades"
      style={{ background: '#fff' }}>

      <div className="wrap">

        {/* Cabeçalho */}
        <div className="section-head">
          <h2>
            {c.titulo.split('R$ 5 bilhões em patrimônio').map((part, i, arr) => (
              i < arr.length - 1
                ? <span key={i}>{part}<span style={{ color: '#EE686D' }}>R$ 5 bilhões em patrimônio</span></span>
                : <span key={i}>{part}</span>
            ))}
          </h2>
        </div>

        {/* Parágrafos de corpo */}
        <div style={{ marginBottom: 48, marginTop: -16 }}>
          {c.paragrafos.map((p, i) => (
            <p key={i} style={{
              color: 'var(--text-secondary)',
              fontSize: 17,
              lineHeight: 1.8,
              margin: i < c.paragrafos.length - 1 ? '0 0 20px' : 0,
            }}>
              {p}
            </p>
          ))}
        </div>

        {/* Foto + parágrafo lado a lado */}
        <div className="cu-foto-grid">
          {/* Espaço para foto */}
          <div style={{
            background: 'var(--gray-50)',
            borderRadius: 'var(--radius-card)',
            aspectRatio: '4/3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}>
            {c.fotoUrl
              ? <img src={asset(c.fotoUrl)} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              : <span style={{ color: 'var(--text-muted)', fontSize: 14, fontFamily: 'var(--font-mono)' }}>foto</span>
            }
          </div>

          {/* Subtítulo + parágrafo ao lado da foto */}
          <div>
            <h3 style={{
              fontFamily: "'Co Headline', sans-serif",
              fontWeight: 300,
              fontSize: 26,
              lineHeight: 1.4,
              color: 'var(--text-primary)',
              margin: '0 0 20px',
            }}>
              {patrimonio.oQueEPatrimonio.titulo.split('patrimônio').map((part, i, arr) => (
                i < arr.length - 1
                  ? <span key={i}>{part}<span style={{ color: '#EE686D', fontWeight: 700 }}>patrimônio</span></span>
                  : <span key={i}>{part}</span>
              ))}
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: 17,
              lineHeight: 1.8,
              margin: 0,
            }}>
              {patrimonio.oQueEPatrimonio.texto}
            </p>
          </div>
        </div>

        {/* Subtítulo + parágrafo extras — largura total, abaixo da foto */}
        <div style={{ marginBottom: 48 }}>
          <h3 style={{
            fontFamily: "'Co Headline', sans-serif",
            fontWeight: 300,
            fontSize: 26,
            lineHeight: 1.4,
            color: 'var(--text-primary)',
            margin: '0 0 20px',
          }}>
            <span style={{ fontWeight: 300 }}>Um número </span>
            <span style={{ fontWeight: 400, color: '#EE686D' }}>difícil de imaginar</span>
          </h3>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: 17,
            lineHeight: 1.8,
            margin: 0,
          }}>
            {patrimonio.analogiasIntro}
          </p>
        </div>

        {/* Cards de analogias */}
        <div className="cu-analogias-grid">
          {patrimonio.analogias.map((a, i) => (
            <div key={i} className="analogia-card">
              <p style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontSize: 16,
                color: 'var(--text-secondary)',
                margin: 0,
                lineHeight: 1.7,
                textAlign: 'center',
              }}>{a.texto}</p>
            </div>
          ))}
        </div>


        {/* Parágrafos abaixo dos cards */}
        <div style={{ marginBottom: 48 }}>
          {c.paragrafosAposCards.map((p, i) => (
            <p key={i} style={{
              color: 'var(--text-secondary)',
              fontSize: 17,
              lineHeight: 1.8,
              margin: i < c.paragrafosAposCards.length - 1 ? '0 0 20px' : 0,
            }}>
              {p}
            </p>
          ))}
        </div>

        {/* Citação Mauricio Manduca */}
        <div className="testimonial-card testimonial-card--horizontal">
          <div className="card-top">
            <img
              src={asset('/mauricio-manduca.jpg')}
              alt="Mauricio Manduca"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', borderRadius: '16px 0 0 16px' }}
            />
          </div>
          <div className="quote-badge">"</div>
          <div className="card-bottom">
            <div>
              <p className="card-author-name" style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 400, color: '#EE686D', fontSize: 20 }}>{c.citacaoAutor.split(',')[0]}</p>
              <p className="card-author-role">
                {c.citacaoAutor.split(',').slice(1).join(',').trim().split(' e ').map((part, i) => (
                  <span key={i} style={{ display: 'block' }}>{i > 0 ? 'e ' : ''}{part}</span>
                ))}
              </p>
            </div>
            <p className="card-text">{c.citacao}</p>
          </div>
        </div>

        {/* Parágrafo de fechamento */}
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: 17,
          lineHeight: 1.8,
          margin: '48px 0 0',
        }}>
          {patrimonio.fechamento}
        </p>

      </div>
    </section>
  )
}
