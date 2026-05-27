import { edition } from '../../data/edition.js'
import { asset } from '../../utils/assets.js'

const { encontros } = edition

export default function Encontros() {
  return (
    <section className="section survey" id="encontros" data-screen-label="Encontros"
      style={{ padding: 'clamp(80px, 14vw, 200px) 0 clamp(64px, 11vw, 160px)', display: 'flex', alignItems: 'flex-start', position: 'relative', overflow: 'hidden' }}>

      {/* Degradê de transição com WebinarIR */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: 400,
        background: 'linear-gradient(to bottom, #6F91FB 0%, rgba(111,145,251,.6) 35%, rgba(111,145,251,.2) 65%, transparent 100%)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />

      {/* Vídeo de fundo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.65,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <source src={asset('/azul2.mp4')} type="video/mp4" />
      </video>

      <div style={{ width: '100%', padding: '0 clamp(16px, 12vw, 200px)', position: 'relative', zIndex: 1 }}>
        {/* Imagem sobreposta na borda azul/branco */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '-90px', position: 'relative', zIndex: 2 }}>
          <img
            src={asset('/imagem10.png')}
            alt="Conexão BRF Previdência"
            style={{ width: '200px', display: 'block' }}
          />
        </div>

        <div style={{
          width: '100%',
          minHeight: '1000px',
          borderRadius: '20px',
          background: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          padding: '110px 0 64px',
          position: 'relative',
        }}>
          {/* Imagem centralizada */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40, padding: '0 64px' }}>
            <img
              src={asset('/imagem08.png')}
              alt="Encontro Trimestral de Resultados"
              style={{ width: '70%', display: 'block' }}
            />
          </div>

          {/* Parágrafos */}
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

          {/* Cards de vídeo */}
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
                {/* Label do plano sobreposta na parte inferior */}
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

          {/* Próximo Encontro */}
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
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
