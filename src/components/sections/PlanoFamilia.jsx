import { edition } from '../../data/edition.js'
import { asset } from '../../utils/assets.js'

const { planoFamilia: f } = edition

const NOTO = { fontFamily: "'Noto Sans', sans-serif" }
const TXT  = { ...NOTO, fontSize: 17, lineHeight: 1.85, color: 'rgba(255,255,255,.9)' }

function Box({ titulo, children }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 'var(--radius-card)',
      padding: '28px 30px',
      boxShadow: 'var(--shadow-md)',
    }}>
      <h3 style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 400, fontSize: 22, color: 'var(--brand-coral)', margin: '0 0 12px' }}>
        {titulo}
      </h3>
      {children}
    </div>
  )
}

export default function PlanoFamilia() {
  return (
    <section className="section" id="plano-familia" data-screen-label="Plano Família"
      style={{ background: 'linear-gradient(135deg, var(--brand-blue) 0%, var(--brand-blue-mid) 100%)' }}>
      <div className="wrap">

        {/* Cabeçalho */}
        <div className="section-head reveal">
          <img
            src={asset('/logo-plano-familia-white.png')}
            alt="Plano Família"
            style={{ height: 48, width: 'auto', objectFit: 'contain', marginBottom: 16, transform: 'translateX(-15%)' }}
          />
          <h2 style={{ color: '#fff' }}>{f.titulo}</h2>
        </div>

        <div className="pf-intro-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 32, alignItems: 'stretch', marginBottom: 8 }}>
          <div style={{
            borderRadius: 'var(--radius-card)', minHeight: 320,
            overflow: 'hidden',
          }}>
            <img
              src={asset('/girl-with-balloons.jpg')}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div>
            {f.paragrafos.map((txt, i) => (
              <p key={i} style={{ ...TXT, marginBottom: 20 }}>{txt}</p>
            ))}
          </div>
        </div>

        {/* Quem pode contribuir + Pequenas contribuições */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, margin: '40px 0' }}>
          <Box titulo={f.quemPodeContribuir.titulo}>
            <p style={{ ...NOTO, fontSize: 15, lineHeight: 1.8, color: 'var(--text-secondary)', margin: 0 }}>
              {f.quemPodeContribuir.texto}
            </p>
          </Box>
          <Box titulo={f.pequenasContribuicoes.titulo}>
            <p style={{ ...NOTO, fontSize: 15, lineHeight: 1.8, color: 'var(--text-secondary)', margin: 0 }}>
              {f.pequenasContribuicoes.texto}
            </p>
          </Box>
        </div>

        {/* Para que futuro você está contribuindo */}
        <div style={{ marginBottom: 40 }}>
          <h3 style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 400, fontSize: 26, color: '#fff', margin: '0 0 10px' }}>
            {f.paraQueFuturo.titulo}
          </h3>
          <p style={{ ...TXT, marginBottom: 20 }}>{f.paraQueFuturo.intro}</p>

          <div style={{ borderRadius: 'var(--radius-card)', overflow: 'hidden', marginBottom: 24 }}>
            <img
              src={asset('/foto-carrossel.png')}
              alt="Para que futuro você está contribuindo"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          <p style={{ ...TXT, margin: 0 }}>{f.paraQueFuturo.fechamento}</p>
        </div>

        {/* Fechamento */}
        <p style={{ ...NOTO, fontSize: 22, lineHeight: 1.5, color: '#fff', fontWeight: 400, margin: '0 0 40px', fontFamily: "'Co Headline', sans-serif" }}>
          {f.fechamento}
        </p>

        {/* Como aderir */}
        <div style={{
          background: '#fff',
          borderRadius: 'var(--radius-card)',
          padding: '32px 36px',
        }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, color: 'var(--brand-coral)', margin: '0 0 16px' }}>
            {f.comoAderir.titulo}
          </h3>
          {f.comoAderir.itens.map((item, i) => (
            <p key={i} style={{ ...NOTO, fontSize: 16, lineHeight: 1.75, color: 'var(--text-secondary)', margin: i === 0 ? '0 0 12px' : 0 }}>
              {item}
            </p>
          ))}
        </div>

      </div>
    </section>
  )
}
