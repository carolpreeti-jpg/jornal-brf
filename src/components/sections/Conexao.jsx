import { edition } from '../../data/edition.js'
import { asset } from '../../utils/assets.js'

const { conexao: c } = edition

const NOTO = { fontFamily: "'Noto Sans', sans-serif" }
const TXT  = { ...NOTO, fontSize: 17, lineHeight: 1.8, color: 'rgba(255,255,255,.9)' }

export default function Conexao() {
  return (
    <section className="section" id="conexao" data-screen-label="Conexão BRF Previdência"
      style={{ background: 'linear-gradient(150deg, #1B46B2 0%, #1B46B2 60%, #7D94FC 100%)' }}>
      <div className="wrap">

        {/* Cabeçalho */}
        <div className="section-head reveal" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <img src={asset('/selo.png')} alt="Selo" style={{ height: 150, width: 'auto', objectFit: 'contain', flexShrink: 0 }} />
          <h2 style={{ color: '#fff', margin: 0 }}>{c.titulo}</h2>
        </div>

        {c.paragrafos.map((txt, i) => (
          <p key={i} style={{ ...TXT, marginBottom: 18 }}>{txt}</p>
        ))}

        {/* Vídeos das gravações */}
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 22, color: '#fff', margin: '40px 0 24px' }}>
          {c.gravacoesIntro}
        </h3>

        <div className="encontros-gravacoes-grid" style={{ marginBottom: 48 }}>
          {c.gravacoes.map((g, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
              <a
                href={`https://youtu.be/${g.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', position: 'relative', width: '100%', borderRadius: 10, overflow: 'hidden', textDecoration: 'none', border: '2px solid rgba(255,255,255,.4)' }}
              >
                <img
                  src={`https://img.youtube.com/vi/${g.videoId}/hqdefault.jpg`}
                  alt={g.plano}
                  style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 52, height: 52, background: 'red', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '18px solid white', marginLeft: 4 }} />
                  </div>
                </div>
              </a>

              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: '#fff', textAlign: 'center' }}>
                {g.plano}
              </span>

              <a
                href={`https://youtu.be/${g.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, letterSpacing: '.03em', textTransform: 'uppercase',
                  color: '#fff', background: 'var(--brand-coral)', padding: '10px 24px', borderRadius: 999, textDecoration: 'none',
                }}
              >
                Assistir
              </a>
            </div>
          ))}
        </div>

        {/* Próximos encontros */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 24, alignItems: 'stretch' }}>

          <div style={{ position: 'relative', minHeight: 180, borderRadius: 'var(--radius-card)', overflow: 'hidden' }}>
            <img
              src={asset('/online-meeting-video-chat.jpg')}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

          <div style={{
            background: 'rgba(255,255,255,.08)',
            border: '1px solid rgba(255,255,255,.18)',
            borderRadius: 'var(--radius-card)',
            padding: '32px 32px',
            display: 'flex',
            alignItems: 'center',
          }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 20, color: '#fff', margin: '0 0 20px' }}>
                {c.proximosEncontros.titulo}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.proximosEncontros.itens.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 17, color: '#fff' }}>
                    <span style={{ color: '#FCD34D', fontWeight: 700, fontSize: 14 }}>✦</span>
                    <span>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>{item.plano}</span>
                      <span style={{ ...NOTO }}>{' – '}{item.data}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
