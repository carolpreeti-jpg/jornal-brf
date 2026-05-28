import { useRef, useEffect, useState } from 'react'
import { edition } from '../../data/edition.js'
import { asset } from '../../utils/assets.js'
import { CARD_IMAGES } from '../../assets/cardImages.js'

const { webinar } = edition

/* ── Carousel coverflow ── */
const COLORS      = ['#ffffff','#1b46b2','#e8545a','#ffffff','#1b46b2','#e8545a']
const BORDERS     = ['1px solid rgba(255,255,255,0.5)','none','none','1px solid rgba(255,255,255,0.5)','none','none']
const TEXT_COLORS = ['#5A4D45','#ffffff','#ffffff','#5A4D45','#ffffff','#ffffff']
const N           = COLORS.length
const GAP         = 14
const SLOTS       = 13
const CENTER_SLOT = 6

const BASE_SIZES = [
  {w:30,h:30},{w:40,h:40},{w:52,h:52},{w:72,h:72},{w:100,h:100},{w:138,h:138},
  {w:200,h:200},{w:138,h:138},{w:100,h:100},{w:72,h:72},{w:52,h:52},{w:40,h:40},{w:30,h:30}
]
const SLOT_OPACITIES = [0,0.08,0.15,0.25,0.4,0.6,1,0.6,0.4,0.25,0.15,0.08,0]

function isIconImage(icon) {
  return (
    typeof icon === 'string' &&
    /^(\/?|https?:\/\/).+\.(svg|png|jpe?g|webp|gif)(\?.*)?$/i.test(icon)
  )
}

function CarouselWebinar() {
  const vpRef        = useRef(null)
  const wrapRef      = useRef(null)
  const activeRef    = useRef(0)
  const animRef      = useRef(false)
  const timerRef     = useRef(null)
  const goToRef      = useRef(null)
  const visibleRef   = useRef(true)
  const [dot, setDot] = useState(0)

  useEffect(() => {
    const vp   = vpRef.current
    const wrap = wrapRef.current
    if (!vp || !wrap) return

    function mod(n, m) { return ((n % m) + m) % m }

    function slotX(slot) {
      let x = 0
      for (let i = 0; i < slot; i++) x += BASE_SIZES[i].w + GAP
      return x
    }

    function totalW() {
      return BASE_SIZES.reduce((s, c) => s + c.w, 0) + GAP * (SLOTS - 1)
    }

    function startX() {
      const vw = vp.offsetWidth
      return vw / 2 - (slotX(CENTER_SLOT) + BASE_SIZES[CENTER_SLOT].w / 2)
    }

    function buildStatic() {
      vp.innerHTML = ''
      const base = startX()
      for (let slot = 0; slot < SLOTS; slot++) {
        const ci    = mod(activeRef.current + slot - CENTER_SLOT, N)
        const s     = BASE_SIZES[slot]
        const op    = SLOT_OPACITIES[slot]
        const delta = slot - CENTER_SLOT
        const div   = document.createElement('div')
        const pad   = s.w >= 138 ? '16px' : s.w >= 100 ? '10px' : '4px'
        div.style.cssText = `
          position:absolute; top:50%; transform:translateY(-50%);
          width:${s.w}px; height:${s.h}px; opacity:${op};
          background:${COLORS[ci]}; border:${BORDERS[ci]};
          border-radius:12px;
          left:${base + slotX(slot)}px;
          cursor:${delta !== 0 && op > 0 ? 'pointer' : 'default'};
          display:flex; align-items:center; justify-content:center;
          padding:${pad}; overflow:hidden;
          transition: left 0.6s cubic-bezier(0.4,0,0.2,1),
                      width 0.6s cubic-bezier(0.4,0,0.2,1),
                      height 0.6s cubic-bezier(0.4,0,0.2,1),
                      opacity 0.6s cubic-bezier(0.4,0,0.2,1);
        `
        if (webinar.temas[ci]) {
          const scale  = s.w >= 200 ? 1 : s.w >= 138 ? 0.70 : 0.52
          const textOp = s.w >= 100 ? 1 : 0
          const p = document.createElement('p')
          p.textContent = webinar.temas[ci]
          p.style.cssText = `
            position:absolute;
            width:170px;
            margin:0;
            left:50%; top:50%;
            transform:translate(-50%,-50%) scale(${scale});
            transform-origin:center center;
            text-align:center;
            font-family:'Sora', sans-serif; font-weight:400;
            font-size:16px; line-height:1.5;
            color:${TEXT_COLORS[ci]};
            opacity:${textOp};
            pointer-events:none;
            transition: transform 0.6s cubic-bezier(0.4,0,0.2,1),
                        opacity   0.6s cubic-bezier(0.4,0,0.2,1);
          `
          div.appendChild(p)
        }
        if (delta !== 0 && op > 0) div.addEventListener('click', () => { resetTimer(); shift(delta) })
        vp.appendChild(div)
      }
      setDot(activeRef.current)
    }

    function shift(delta) {
      if (animRef.current) return
      animRef.current = true
      const cards = Array.from(vp.children)
      const base  = startX()

      cards.forEach((card, slot) => {
        const t = slot - delta
        const p = card.querySelector('p')
        if (t >= 0 && t < SLOTS) {
          const s = BASE_SIZES[t]
          card.style.left    = (base + slotX(t)) + 'px'
          card.style.width   = s.w + 'px'
          card.style.height  = s.h + 'px'
          card.style.opacity = SLOT_OPACITIES[t]
          if (p) {
            const scale = s.w >= 200 ? 1 : s.w >= 138 ? 0.70 : 0.52
            p.style.transform = `translate(-50%,-50%) scale(${scale})`
            p.style.opacity   = s.w >= 100 ? '1' : '0'
          }
        } else {
          card.style.opacity = '0'
          card.style.left    = delta > 0
            ? (base - BASE_SIZES[0].w - GAP) + 'px'
            : (base + totalW() + GAP) + 'px'
          if (p) p.style.opacity = '0'
        }
      })

      activeRef.current = mod(activeRef.current + delta, N)
      setDot(activeRef.current)
      setTimeout(() => { buildStatic(); animRef.current = false }, 650)
    }

    function goTo(idx) {
      if (idx === activeRef.current) return
      const delta    = idx - activeRef.current
      const shortest = ((delta % N) + N) % N <= N / 2
        ? ((delta % N) + N) % N
        : ((delta % N) + N) % N - N
      resetTimer()
      shift(shortest)
    }

    function startTimer() {
      clearInterval(timerRef.current)
      if (!visibleRef.current) return
      timerRef.current = setInterval(() => shift(1), 3000)
    }
    function resetTimer() { startTimer() }

    goToRef.current = goTo
    window.addEventListener('resize', buildStatic)
    buildStatic()

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting
        if (entry.isIntersecting) startTimer()
        else clearInterval(timerRef.current)
      },
      { threshold: 0.08 }
    )
    visibilityObserver.observe(wrap)

    return () => {
      clearInterval(timerRef.current)
      visibilityObserver.disconnect()
      window.removeEventListener('resize', buildStatic)
    }
  }, [])

  return (
    <div ref={wrapRef} style={{ padding: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
      <div ref={vpRef} style={{
        width: '100%', overflow: 'hidden', height: 260, position: 'relative',
        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
      }} />
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', justifyContent: 'center' }}>
        {Array.from({ length: N }).map((_, i) => (
          <span
            key={i}
            onClick={() => goToRef.current?.(i)}
            style={{
              display: 'inline-block',
              width: 10, height: 10, borderRadius: '50%',
              background: '#fff',
              border: 'none',
              opacity: dot === i ? 1 : 0.4,
              cursor: 'pointer',
              transform: dot === i ? 'scale(1.3)' : 'scale(1)',
              transition: 'transform 0.3s, opacity 0.3s',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function WebinarIR({ id = 'webinar', screenLabel = 'Webinar IR', bg, hideTitle, hideCarousel, topImage, customParagrafos, customCenario, bottomContent, boxIntro }) {
  return (
    <section className="section estatuto" id={id} data-screen-label={screenLabel}
      style={{ background: bg ?? '#6F91FB', paddingTop: topImage ? 140 : undefined }}>
      <div className="wrap">

        {/* Imagem centralizada no topo */}
        {topImage && (
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 48 }}>
            <img src={asset(topImage)} alt="" style={{ maxWidth: 600, width: '100%', display: 'block' }} />
          </div>
        )}

        {!hideTitle ? (
          <>
            <div className="webinar-two-col">
              <div className="webinar-intro">
                <div className="section-head webinar-section-head">
                  <h2>
                    <span>Webinar BRF Prev</span>
                    {' '}orienta participantes sobre a{' '}
                    <span>Declaração de IR 2026</span>
                    {' '}na prática
                  </h2>
                </div>
                {[webinar.descricao, (webinar.paragrafos || [])[0]].filter(Boolean).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="webinar-photo-wrap">
                <div className="webinar-photo-box">
                  <img
                    src={CARD_IMAGES['/jessica-webinar.jpg']}
                    alt="Webinar IR 2026"
                  />
                </div>
              </div>
            </div>

            <div className="webinar-body">
              {(webinar.paragrafos || []).slice(1).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </>
        ) : customCenario ? (
          <>
            {customCenario.intro && (
              <p className="rent-cenario-intro">{customCenario.intro}</p>
            )}
            <div className="rent-cenario-grid">
              {customCenario.boxes.map((box, i) => (
                <div key={i} className="rent-cenario-box">
                  <div className="rent-cenario-box-head">
                    {isIconImage(box.icone) ? (
                      <img
                        src={asset(box.icone)}
                        alt=""
                        aria-hidden="true"
                        className="rent-cenario-box-icon-image"
                      />
                    ) : (
                      <span className="rent-cenario-box-icon" aria-hidden="true">{box.icone}</span>
                    )}
                    <span className="rent-cenario-box-title">{box.titulo}</span>
                  </div>
                  {box.paragrafos.map((p, j) => (
                    <p key={j} className="rent-cenario-box-text">{p}</p>
                  ))}
                </div>
              ))}
            </div>
          </>
        ) : (
          (customParagrafos ?? []).map((p, i) => (
            <p key={i} style={{ color: '#fff', fontSize: 18, lineHeight: 1.8, maxWidth: '100%', margin: '0 0 16px' }}>{p}</p>
          ))
        )}

        {!hideCarousel && (
          <>
            <img
              src={asset('/07.png')}
              alt="Webinar IR 2026"
              style={{ width: '36%', borderRadius: 12, display: 'block', margin: '80px 0 24px' }}
            />

            {/* Lista de temas em texto corrido */}
            <div style={{ margin: '8px 0 48px' }}>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {webinar.temas.map((tema, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, color: '#fff', fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6 }}>
                    <span style={{ flexShrink: 0, width: 8, height: 8, borderRadius: '50%', background: '#fff', marginTop: 8, display: 'block' }} />
                    {tema}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Bloco 12% — destaque editorial ── */}
            <div style={{
              margin: '64px 0 0',
              background: '#0D1B4B',
              borderRadius: 20,
              padding: 'clamp(28px, 4vw, 48px)',
              overflow: 'hidden',
              position: 'relative',
            }}>
              {/* Halo decorativo de fundo */}
              <div aria-hidden="true" style={{
                position: 'absolute',
                top: -60, right: -60,
                width: 280, height: 280,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '0 48px',
                alignItems: 'start',
              }}>
                {/* Número âncora */}
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(80px, 10vw, 128px)',
                  lineHeight: 0.9,
                  letterSpacing: '-0.04em',
                  color: 'var(--brand-coral)',
                  userSelect: 'none',
                  paddingTop: 6,
                }}>
                  12%
                </div>

                {/* Conteúdo textual */}
                <div style={{ borderTop: '1.5px solid rgba(255,255,255,0.15)', paddingTop: 20 }}>
                  <h3 style={{
                    color: '#fff',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 'clamp(18px, 2.2vw, 24px)',
                    lineHeight: 1.3,
                    margin: '0 0 20px',
                    letterSpacing: '-0.01em',
                  }}>
                    {webinar.subtitulo2}
                  </h3>

                  {(webinar.paragrafos2 || []).slice(0, 1).map((p, i) => (
                    <p key={i} style={{ color: 'rgba(255,255,255,0.75)', fontSize: 16, lineHeight: 1.75, margin: 0, fontFamily: 'var(--font-body)' }}>{p}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="webinar-body" style={{ marginTop: 40 }}>
              {(webinar.paragrafos2 || [])[1] && (
                <p>{webinar.paragrafos2[1]}</p>
              )}
              {webinar.paragrafos2Youtube && (
                <p style={{ fontStyle: 'italic', opacity: 0.85 }}>{webinar.paragrafos2Youtube}</p>
              )}
              {(webinar.paragrafos2 || [])[2] && (
                <p>{webinar.paragrafos2[2]}</p>
              )}
            </div>

            {/* Botão centralizado */}
            <div style={{ margin: '40px 0 0', display: 'flex', justifyContent: 'center' }}>
              <a
                href={webinar.urlYoutube}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'var(--brand-blue)',
                  color: '#fff',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontSize: 18,
                  padding: '12px 36px',
                  borderRadius: 999,
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
              >
                Assista ao webinar em nosso canal do YouTube
              </a>
            </div>
          </>
        )}

        {/* Retângulo branco com conteúdo extra */}
        {bottomContent && (
          <div className="webinar-bottom-box">

            {/* Imagem centralizada entre o azul e o retângulo */}
            <div style={{
              position: 'absolute',
              top: -76,
              left: 0, right: 0,
              display: 'flex',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}>
              <img src={asset('/imagem12.png')} alt="Investimentos" style={{ width: 416, display: 'block' }} />
            </div>

            <div style={{
              background: '#fff',
              borderRadius: 20,
              padding: '40px 48px',
            }}>
              {boxIntro && (
                <div style={{ margin: '92px 0 32px', paddingLeft: '3%', paddingRight: '3%' }}>
                  {(Array.isArray(boxIntro)
                    ? boxIntro
                    : boxIntro.paragrafos ?? []
                  ).map((txt, i, arr) => (
                    <p key={i} style={{
                      fontFamily: "'Noto Sans', sans-serif",
                      color: 'var(--text-primary)',
                      fontSize: 18,
                      lineHeight: 1.8,
                      margin: i < arr.length - 1 ? '0 0 20px' : 0,
                    }}>
                      {txt}
                    </p>
                  ))}
                  {!Array.isArray(boxIntro) && boxIntro.destaque && (
                    <div className="rent-desempenho-destaque">
                      <div className="rent-desempenho-destaque-head">
                        <span className="rent-desempenho-destaque-icon" aria-hidden="true">
                          {boxIntro.destaque.icone}
                        </span>
                        <span className="rent-desempenho-destaque-title">{boxIntro.destaque.titulo}</span>
                      </div>
                      <p className="rent-desempenho-destaque-text">{boxIntro.destaque.texto}</p>
                    </div>
                  )}
                </div>
              )}
              <div style={{ paddingLeft: '3%', paddingRight: '3%' }}>
                {bottomContent}
              </div>
            </div>
          </div>
        )}

      </div>

      {id === 'webinar' && (
        <svg
          className="webinar-section-wave"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="#ffffff"
            d="M0,48 C240,8 480,72 720,40 C960,8 1200,56 1440,32 L1440,80 L0,80 Z"
          />
        </svg>
      )}
    </section>
  )
}
