import { edition } from '../../data/edition.js'

const { appBRFPrev } = edition

export default function AppBRFPrev() {
  return (
    <section className="section" id="app-brf-prev" data-screen-label="App BRF Prev"
      style={{ background: 'var(--brand-blue)' }}>
      <div className="wrap">

        <div className="section-head reveal">
          <h2 style={{ color: '#fff', fontSize: 'clamp(44px, 5vw, 64px)' }}>
            {appBRFPrev.titulo.split(/^(App BRF Prev:)/).filter(Boolean).map((part, i) =>
              part === 'App BRF Prev:'
                ? <span key={i} style={{ color: '#97aaff' }}>{part}</span>
                : part
            )}
          </h2>
          {appBRFPrev.descricao.split('\n\n').map((p, i) => (
            <p key={i} style={{ color: 'rgba(255,255,255,0.85)', marginTop: i === 0 ? 20 : 12, marginBottom: 0 }}>
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
          marginTop: -24,
        }}>
          <span style={{ color: '#97aaff' }}>Confira algumas </span>
          <span style={{ color: '#fff' }}>funcionalidades disponíveis:</span>
        </p>

        {/* Cards de funcionalidades */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginTop: 24 }}>
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
            <img src="/google.png" alt="Google Play" style={{ height: 58, objectFit: 'contain' }} />
            <img src="/apple.png"  alt="App Store"   style={{ height: 58, objectFit: 'contain' }} />
          </div>
        </div>

        {/* Dois colunas: imagem esquerda | texto direita */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start', marginTop: 90 }}>

          {/* Coluna esquerda — reservada para imagem */}
          <div />

          {/* Coluna direita — Primeiro acesso */}
          <div>
            <h3 style={{
              fontFamily: "'Co Headline', sans-serif",
              fontWeight: 400,
              fontSize: 30,
              color: '#fff',
              marginBottom: 16,
            }}>
              {appBRFPrev.primeiroAcesso.titulo}
            </h3>
            <p style={{
              fontFamily: "'Noto Sans', sans-serif",
              fontSize: 17,
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.85)',
              margin: 0,
            }}>
              {appBRFPrev.primeiroAcesso.descricao}
            </p>
          </div>

        </div>

        {/* Dois colunas: imagem esquerda | Esqueceu sua senha */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start', marginTop: 48 }}>

          {/* Coluna esquerda — reservada para imagem */}
          <div />

          {/* Coluna direita — Esqueceu sua senha */}
          <div>
            <h3 style={{
              fontFamily: "'Co Headline', sans-serif",
              fontWeight: 400,
              fontSize: 30,
              color: '#fff',
              marginBottom: 16,
            }}>
              {appBRFPrev.esqueceuSenha.titulo}
            </h3>
            <p style={{
              fontFamily: "'Noto Sans', sans-serif",
              fontSize: 17,
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.85)',
              margin: 0,
            }}>
              {appBRFPrev.esqueceuSenha.descricao.split('\n\n').map((p, i) => (
                <span key={i} style={{ display: 'block', marginBottom: i < appBRFPrev.esqueceuSenha.descricao.split('\n\n').length - 1 ? 24 : 0 }}>{p}</span>
              ))}
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
