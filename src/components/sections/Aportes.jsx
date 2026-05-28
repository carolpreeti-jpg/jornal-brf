import { useRef, useEffect, useState } from 'react'
import { edition } from '../../data/edition.js'
import { asset } from '../../utils/assets.js'

const { aportes } = edition

const NOTO = { fontFamily: "'Noto Sans', sans-serif" }
const P    = { ...NOTO, fontSize: 18, lineHeight: 1.8, color: 'var(--text-secondary)' }

export default function Aportes() {
  const titleRef   = useRef(null)
  const [dinheiroVisible, setDinheiroVisible] = useState(false)

  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setDinheiroVisible(true); io.disconnect() } },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="section game" id="aportes" data-screen-label="Aportes">
      <div className="wrap">
        {/* Cabeçalho: imagem esquerda + título/texto direita */}
        <div className="aportes-top-grid">

          {/* Coluna esquerda — imagem com overlay de dinheiro */}
          <div style={{ position: 'relative', minHeight: 320, marginTop: '-15%', zIndex: 0 }}>
            <img loading="lazy" decoding="async"
              src={asset('/homem2.png')}
              alt=""
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <img loading="lazy" decoding="async"
              src={asset('/dinheiro.png')}
              alt=""
              aria-hidden="true"
              className={`float-money${dinheiroVisible ? ' visible' : ''}`}
              style={{
                position: 'absolute',
                top: '-2%',
                left: '3%',
                width: '120%',
                height: 'auto',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Coluna direita — título e descrição */}
          <div className="section-head" style={{ maxWidth: '100%', marginBottom: 0 }}>
            <h2 ref={titleRef} style={{ fontSize: 'clamp(29px, 3.78vw, 47px)' }}>
              {aportes.titulo
                .split(/(aportes extras|contribuições suplementares)/i)
                .map((part, i) =>
                  /aportes extras|contribuições suplementares/i.test(part)
                    ? <span key={i} style={{ color: '#EE686D' }}>{part}</span>
                    : part
                )}
            </h2>
            <p style={{ ...P, marginTop: 40 }}>{aportes.descricao}</p>
            {aportes.descricaoExtra && (
              <p style={{ ...P, marginTop: 8 }}>{aportes.descricaoExtra}</p>
            )}
          </div>

        </div>

        {/* Modalidades */}
        <div className="units-grid" style={{ marginTop: '-6%', position: 'relative', zIndex: 1 }}>
          {aportes.modalidades.map((m, i) => (
            <article key={i} className="unit-card">
              <div className="unit-body" style={{ padding: '40px 28px 28px' }}>
                <h3 style={{ fontSize: 30, lineHeight: 1.3, marginBottom: 20, fontFamily: "'Co Headline', sans-serif", fontWeight: 400 }}>
                  {m.titulo.includes('suplementares')
                    ? <><span style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 400 }}>O que são </span><span style={{ color: '#EE686D' }}>contribuições</span><br /><span style={{ color: '#EE686D' }}>suplementares?</span></>
                    : <><span style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 400 }}>O que são </span><span style={{ color: '#EE686D' }}>aportes extras?</span></>
                  }
                </h3>
                {m.descricao.split('\n\n').map((bloco, j) => {
                  const linhas = bloco.split('\n')
                  const temBullets = linhas.some(l => l.startsWith('–'))
                  if (temBullets) {
                    return (
                      <div key={j} style={{ marginTop: j > 0 ? 12 : 0 }}>
                        {linhas.filter(l => !l.startsWith('–')).map((l, k) => (
                          l.trim() && <p key={k} style={{ ...P, marginBottom: 8, fontWeight: l.trim().endsWith(':') ? 700 : undefined }}>{l}</p>
                        ))}
                        <ul style={{ paddingLeft: 0, listStyle: 'none', marginTop: 4 }}>
                          {linhas.filter(l => l.startsWith('–')).map((l, k) => (
                            <li key={k} style={{ ...{ fontFamily: "'Noto Sans', sans-serif" }, display: 'flex', gap: 8, padding: '8px 0', fontSize: 18, lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                              <span style={{ color: 'var(--brand-coral)', flexShrink: 0, fontSize: 14, fontWeight: 700 }}>✦</span>
                              {l.replace(/^–\s*/, '')}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  }
                  return <p key={j} style={{ ...P, marginTop: j > 0 ? 12 : 0 }}>{bloco}</p>
                })}
                {m.introLista && (
                  <p style={{ ...P, marginTop: 16, marginBottom: 4, fontWeight: 700 }}>{m.introLista}</p>
                )}
                <ul style={{ marginTop: 8, paddingLeft: 0, listStyle: 'none' }}>
                  {m.beneficios.map((b, j) => (
                    <li key={j} style={{ ...NOTO, display: 'flex', gap: 8, padding: '8px 0', fontSize: 18, lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--brand-coral)', flexShrink: 0, fontSize: 14, fontWeight: 700 }}>✦</span>
                      {b}
                    </li>
                  ))}
                </ul>
                {m.obs && (
                  <p style={{ ...NOTO, marginTop: 0, fontSize: 18, lineHeight: 1.8, color: 'var(--text-muted)', fontStyle: 'italic' }}>
                    {m.obs}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Quando vale a pena */}
        <div style={{ marginTop: 48 }}>
          <h3 style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 400, fontSize: 26, lineHeight: 1.3, marginBottom: 16, color: 'var(--text-primary)' }}>
            Quando vale a pena fazer um{' '}
            <span style={{ color: '#EE686D' }}>aporte extra</span>
            {' '}ou{' '}
            <span style={{ color: '#EE686D' }}>contribuição suplementar</span><span style={{ color: '#EE686D' }}>?</span>
          </h3>
          <p style={{ ...P }}>
            Contribuições ocasionais podem fazer diferença no saldo acumulado no longo prazo e alguns momentos podem ser boas oportunidades para reforçar sua reserva previdenciária, como:
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 20 }}>
            {aportes.oportunidades.map((item, i) => (
              <button key={i} style={{
                background: 'transparent',
                border: '2px solid #e8545a',
                borderRadius: 50,
                padding: '14px 32px',
                fontSize: 18,
                color: '#222',
                fontFamily: "'Gill Sans', 'Trebuchet MS', sans-serif",
                fontWeight: 300,
                letterSpacing: '0.5px',
                cursor: 'default',
              }}>
                {item.replace(/\.$/, '')}
              </button>
            ))}
          </div>

          <p style={{ ...P, marginTop: 32 }}>
            Os Aportes extras e as contribuições suplementares ajudam a acelerar a construção do patrimônio previdenciário e contribuem para um planejamento financeiro mais sólido.
          </p>
          <p style={{ ...P, marginTop: 16 }}>
            Além disso, as contribuições realizadas ao plano podem trazer vantagens fiscais. Os valores aportados são dedutíveis do Imposto de Renda no limite de até 12% da renda bruta anual para participantes que utilizam o modelo completo da declaração.
          </p>
          <p style={{ ...P, marginTop: 16 }}>
            Essa é uma excelente oportunidade para os participantes fazerem aportes no Plano Família, complementando os 12% de contribuição previdenciária anual.
          </p>

          {/* Layout duas colunas: imagem | conteúdo */}
          <div className="aportes-como-grid">

            {/* Coluna esquerda — imagem da atendente */}
            <div style={{ borderRadius: 16, overflow: 'hidden', minHeight: 0 }}>
              <img loading="lazy" decoding="async"
                src={asset('/atendente.jpg')}
                alt="Atendente de suporte ao participante"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Coluna direita — texto */}
            <div>
              <h3 style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 400, fontSize: 26, lineHeight: 1.3, marginBottom: 16, color: 'var(--text-primary)' }}>
                Como realizar aportes<br />
                e <span style={{ color: '#EE686D' }}>contribuições suplementares?</span>
              </h3>
              <p style={{ ...P }}>
                O processo pode ser feito de forma simples pelo autoatendimento no site ou pelos canais de atendimento:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>
                {[
                  { img: asset('/whatsapp.png'),          texto: aportes.canais[0].texto },
                  { img: asset('/suporte-ao-cliente.png'), texto: aportes.canais[1].texto },
                ].map((c) => (
                  <span key={c.texto} style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    fontSize: 'clamp(16px, 2.2vw, 22px)',
                    fontWeight: 500,
                  }}>
                    <img loading="lazy" decoding="async" src={c.img} alt="" style={{ width: 40, height: 40, objectFit: 'contain', filter: 'invert(52%) sepia(60%) saturate(700%) hue-rotate(314deg) brightness(105%) contrast(90%)' }} />
                    <span style={{ color: '#EE686D' }}>{c.texto.split(': ')[0]}:</span>
                    {' '}
                    <span style={{ color: '#4A4A4A' }}>{c.texto.split(': ')[1]}</span>
                  </span>
                ))}
              </div>

              <p style={{ ...P, marginTop: 32 }}>
                Aproveitar oportunidades para investir no seu futuro pode fazer diferença ao longo do tempo. Avalie seu planejamento financeiro e conheça as alternativas disponíveis para fortalecer sua reserva previdenciária.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
