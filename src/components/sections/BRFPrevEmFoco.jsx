import { edition } from '../../data/edition.js'

const { brfPrevEmFoco } = edition

export default function BRFPrevEmFoco() {

  return (
    <section className="section" id="brfprev-em-foco" data-screen-label="BRF Prev em Foco"
      style={{ background: '#ffffff' }}>
      <div className="wrap">

        <div className="section-head" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 'clamp(32px, 3.8vw, 52px)', whiteSpace: 'nowrap' }}>
            {brfPrevEmFoco.titulo.split(/^(BRF Prev em Foco:)/).filter(Boolean).map((part, i) =>
              part === 'BRF Prev em Foco:'
                ? <><span key={i} style={{ color: 'var(--brand-blue)' }}>{part}</span><br /></>
                : part
            )}
          </h2>
          <p style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 400, fontSize: 26, color: 'var(--brand-blue)', marginTop: 28, marginBottom: 4, lineHeight: 1.2 }}>
            {brfPrevEmFoco.chamada.split(/(previdência)/i).map((part, i) =>
              /previdência/i.test(part)
                ? <span key={i}>{part}<br /></span>
                : part
            )}
          </p>
        </div>

        <div className="cols">
          <div style={{ paddingTop: '2%' }}>
            {brfPrevEmFoco.paragrafos.slice(0, Math.ceil(brfPrevEmFoco.paragrafos.length / 2)).map((p, i) => (
              <p key={i} style={{ color: 'var(--text-secondary)' }}>{p}</p>
            ))}
          </div>
          <div>
            {brfPrevEmFoco.paragrafos.slice(Math.ceil(brfPrevEmFoco.paragrafos.length / 2)).map((p, i) => (
              <p key={i} style={{ color: 'var(--text-secondary)' }}>{p}</p>
            ))}
          </div>
        </div>

        {/* Retângulo azul */}
        <div style={{
          marginTop: 40,
          background: 'var(--brand-blue)',
          borderRadius: 16,
          overflow: 'hidden',
          position: 'relative',
          minHeight: 360,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          gap: 40,
        }}>
          {/* Imagem cobrindo todo o retângulo */}
          <img
            src="/celular.png"
            alt=""
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />

          {/* Coluna esquerda vazia (espaço visual da imagem) */}
          <div />

          {/* Coluna direita — texto + botão */}
          <div style={{ position: 'relative', zIndex: 1, padding: '48px 40px 48px 0', marginLeft: '20%' }}>
            <p style={{
              fontFamily: "'Co Headline', sans-serif",
              fontWeight: 400,
              fontSize: 22,
              lineHeight: 1.5,
              color: '#ffffff',
              margin: '0 0 24px',
            }}>
              {brfPrevEmFoco.paragrafos[brfPrevEmFoco.paragrafos.length - 1]}
            </p>
            <a
              href={brfPrevEmFoco.urlYoutube}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#7990F8',
                color: '#ffffff',
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 700,
                fontSize: 20,
                padding: '8px 22px',
                borderRadius: 999,
                textDecoration: 'none',
                letterSpacing: '0.3px',
              }}
            >
              Assista aqui
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
