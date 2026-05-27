import { edition } from '../../data/edition.js'
import { asset } from '../../utils/assets.js'

const { appBRFPrev } = edition

export default function AppBRFPrev() {
  return (
    <section className="section" id="app-brf-prev" data-screen-label="App BRF Prev"
      style={{ background: '#0F1F5C', position: 'relative', overflow: 'hidden' }}>

      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.1,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <source src={asset('/bg-app.mp4')} type="video/mp4" />
      </video>

      <style>{`
        @keyframes floatUpDown {
          0%   { transform: translateY(0); }
          50%  { transform: translateY(24px); }
          100% { transform: translateY(0); }
        }
      `}</style>

      {/* Imagem do app — flutua acima de tudo, não interfere nos textos */}
      <img
        src={asset('/app.png')}
        alt="App BRF Prev"
        className="app-phone-floating"
        style={{
          position: 'absolute',
          top: '7%',
          right: '13%',
          width: 541,
          display: 'block',
          zIndex: 10,
          pointerEvents: 'none',
          animation: 'floatUpDown 4s ease-in-out infinite',
        }}
      />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>

        <div>
          <div className="section-head" style={{ marginBottom: 0 }}>
            <h2 style={{ color: '#fff', fontSize: 'clamp(44px, 5vw, 64px)' }}>
              {appBRFPrev.titulo.split(/^(App BRF Prev:)/).filter(Boolean).map((part, i) =>
                part === 'App BRF Prev:'
                  ? <span key={i} style={{ color: '#97aaff' }}>{part}</span>
                  : part
              )}
            </h2>
            {appBRFPrev.descricao.split('\n\n').map((p, i) => (
              <p key={i} style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Noto Sans', sans-serif", fontSize: 18, lineHeight: 1.8, marginTop: i === 0 ? 20 : 12, marginBottom: 0 }}>
                {p.split(/(acompanhar)/i).map((part, j) =>
                  /acompanhar/i.test(part)
                    ? <span key={j}><br />{part}</span>
                    : part
                )}
              </p>
            ))}
          </div>

          <p style={{
            fontFamily: "'Co Headline', sans-serif",
            fontWeight: 400,
            fontSize: 30,
            color: '#fff',
            marginTop: 24,
          }}>
            <span style={{ color: '#97aaff' }}>Confira algumas </span>
            <span style={{ color: '#fff' }}>funcionalidades disponíveis:</span>
          </p>
        </div>

        {/* Cards de funcionalidades */}
        <div className="app-funcionalidades-grid">
          {appBRFPrev.funcionalidades.map((texto, i) => (
            <div key={i} className="analogia-card">
              <p style={{ fontFamily: "'Noto Sans', sans-serif", fontSize: 16, color: 'var(--text-secondary)', margin: 0, lineHeight: 1.7, textAlign: 'center' }}>
                {texto}
              </p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 40, marginTop: 40 }}>
          <p style={{
            fontFamily: "'Co Headline', sans-serif",
            fontWeight: 400,
            fontSize: 30,
            color: '#fff',
            margin: 0,
            lineHeight: 1.3,
          }}>
            Baixe o aplicativo<br />
            <span style={{ color: '#97aaff' }}>na sua loja</span>
          </p>

          <div style={{ display: 'flex', flexDirection: 'row', gap: 12 }}>
            <a
              href="https://play.google.com/store/apps/details?id=br.com.sinqiaprevidencia.participante.brf&hl=pt"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', borderRadius: 8, overflow: 'hidden', transition: 'opacity .2s, transform .2s' }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.8'; e.currentTarget.style.transform = 'scale(1.05)' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1';   e.currentTarget.style.transform = 'scale(1)' }}
            >
              <img src={asset('/google.png')} alt="Google Play" style={{ height: 51, objectFit: 'contain', display: 'block' }} />
            </a>
            <a
              href="https://apps.apple.com/br/app/brf-previd%C3%AAncia/id6496354261"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', borderRadius: 8, overflow: 'hidden', transition: 'opacity .2s, transform .2s' }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.8'; e.currentTarget.style.transform = 'scale(1.05)' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1';   e.currentTarget.style.transform = 'scale(1)' }}
            >
              <img src={asset('/apple.png')} alt="App Store" style={{ height: 51, objectFit: 'contain', display: 'block' }} />
            </a>
          </div>
        </div>

        {/* Primeiro acesso */}
        <div style={{ marginTop: 56 }}>
          <h3 style={{
            fontFamily: "'Co Headline', sans-serif",
            fontWeight: 400,
            fontSize: 30,
            color: '#fff',
            margin: '0 0 12px',
          }}>
            {appBRFPrev.primeiroAcesso.titulo}
          </h3>
          <p style={{
            fontFamily: "'Noto Sans', sans-serif",
            fontSize: 18,
            lineHeight: 1.8,
            color: 'rgba(255,255,255,0.85)',
            margin: 0,
          }}>
            {appBRFPrev.primeiroAcesso.descricao}
          </p>
        </div>

        {/* Esqueceu sua senha */}
        <div style={{ marginTop: 40 }}>
          <h3 style={{
            fontFamily: "'Co Headline', sans-serif",
            fontWeight: 400,
            fontSize: 30,
            color: '#fff',
            margin: '0 0 12px',
          }}>
            {appBRFPrev.esqueceuSenha.titulo.split(/(sua senha\?)/i).map((part, i) =>
              /sua senha\?/i.test(part)
                ? <span key={i} style={{ color: '#97aaff' }}>{part}</span>
                : part
            )}
          </h3>
          <p style={{
            fontFamily: "'Noto Sans', sans-serif",
            fontSize: 18,
            lineHeight: 1.8,
            color: 'rgba(255,255,255,0.85)',
            margin: 0,
          }}>
            {appBRFPrev.esqueceuSenha.descricao.split('\n\n').map((p, i) => (
              <span key={i} style={{ display: 'block', marginTop: i > 0 ? 16 : 0 }}>
                {p.split(/(Importante!)/i).map((part, j) =>
                  /Importante!/i.test(part)
                    ? <span key={j} style={{ fontWeight: 700, textTransform: 'uppercase' }}>{part}</span>
                    : part
                )}
              </span>
            ))}
          </p>
        </div>

      </div>
    </section>
  )
}
