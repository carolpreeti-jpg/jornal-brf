import { edition } from '../../data/edition.js'
import { asset } from '../../utils/assets.js'

const { encontros } = edition

export default function Encontros() {
  return (
    <section className="section encontros-section" id="encontros" data-screen-label="Encontros">

      <div className="encontros-inner">
        <div className="encontros-section-break">
          <img
            src={asset('/imagem10.png')}
            alt="Conexão BRF Previdência"
            className="encontros-break-logo"
          />
        </div>

        <div className="encontros-panel">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40, padding: '0 64px' }}>
            <img
              src={asset('/imagem08.png')}
              alt="Encontro Trimestral de Resultados"
              style={{ width: '70%', display: 'block' }}
            />
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: 17, lineHeight: 1.8, margin: '0 0 16px', padding: '0 clamp(8px, 5.5vw, 80px)', maxWidth: '100%' }}>
            {encontros.intro}
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: 17, lineHeight: 1.8, margin: '0', padding: '0 clamp(8px, 5.5vw, 80px)', maxWidth: '100%' }}>
            {encontros.descricao}
          </p>

          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 22,
            color: 'var(--text-primary)',
            margin: '48px 0 32px',
            padding: '0 clamp(8px, 5.5vw, 80px)',
          }}>
            Confira as{' '}
            <span style={{ color: 'var(--brand-coral)', fontWeight: 700 }}>gravações</span>
            {' '}nos links abaixo:
          </h3>

          <div className="encontros-gravacoes-grid" style={{ padding: '0 clamp(8px, 5.5vw, 80px)' }}>
            {encontros.gravacoes.map((g, i) => (
              <div key={i} style={{ position: 'relative' }}>
                <a
                  href={`https://youtu.be/${g.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'block', position: 'relative', width: '100%', border: '2px solid #e8545a', borderRadius: 10, overflow: 'hidden', textDecoration: 'none' }}
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
                <div style={{ position: 'absolute', bottom: -30, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
                  <img
                    src={asset(g.img)}
                    alt={g.plano}
                    style={{ height: 52, display: 'block' }}
                  />
                </div>
              </div>
            ))}
          </div>

          {encontros.proximoEncontro && (
            <div style={{ padding: '48px clamp(8px, 5.5vw, 80px) 0', marginTop: 56 }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: 23,
                color: 'var(--text-primary)',
                marginBottom: 12,
              }}>
                Já reserve na sua agenda as próximas datas para{' '}
                <span style={{ color: '#e8545a', fontWeight: 700 }}>acompanhar ao vivo:</span>
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {encontros.proximoEncontro.datas.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 18, color: 'var(--text-primary)' }}>
                    <span style={{ color: 'var(--brand-coral)', fontWeight: 700, fontSize: 14 }}>✦</span>
                    <span>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}>{item.plano}</span>
                      <span style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 400 }}>{' – '}{item.data}</span>
                    </span>
                  </li>
                ))}
              </ul>
              {encontros.proximoEncontro.avisoPosDatas && (
                <p className="encontros-aviso">
                  <span className="encontros-aviso-icon" aria-hidden="true">✦</span>
                  {encontros.proximoEncontro.avisoPosDatas}
                </p>
              )}
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
