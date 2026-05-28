import { useRef, useEffect, useState } from 'react'
import { edition } from '../../data/edition.js'
import { asset } from '../../utils/assets.js'
import { withBoldPrograma } from '../../utils/formatText.jsx'

const { compromisso } = edition

const HIGHLIGHTS = [
  '200 atendimentos',
  '125 adesões aos planos previdenciários',
  '40 aportes e contribuições suplementares',
]

function highlightText(text) {
  const regex = new RegExp(`(${HIGHLIGHTS.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g')
  return text.split(regex).map((part, i) =>
    HIGHLIGHTS.includes(part)
      ? <strong key={i} style={{ color: 'var(--brand-coral)', fontFamily: 'var(--font-body)', fontWeight: 700 }}>{part}</strong>
      : part
  )
}

const CAL_COLORS = ['#1B46B2', '#EE686D', '#7990F8']
const VISIBLE = 4

export default function Compromisso() {
  const { acoesRealizadas } = compromisso
  const trackRef = useRef(null)
  const [idx, setIdx] = useState(0)
  const [hoveredPhoto, setHoveredPhoto] = useState(null)

  const total  = compromisso.calendario.length
  const maxIdx = Math.max(0, total - VISIBLE)

  useEffect(() => {
    const track = trackRef.current
    if (!track || !track.children[0]) return
    const cardW = track.children[0].offsetWidth
    track.style.transform = `translateX(-${idx * (cardW + 16)}px)`
  }, [idx])

  function navigate(dir) {
    setIdx(prev => Math.max(0, Math.min(prev + dir, maxIdx)))
  }

  return (
    <section className="section" id="compromisso" data-screen-label="Compromisso"
      style={{ background: '#fff' }}>

      <div className="wrap">

        {/* Cabeçalho */}
        <div className="section-head">
          <h2>
            {compromisso.titulo.split('Compromisso com Você').map((part, i, arr) => (
              i < arr.length - 1
                ? <>{part}<span style={{ color: 'var(--brand-coral)' }}>Compromisso com Você</span></>
                : part
            ))}
          </h2>
          <p>{withBoldPrograma(compromisso.intro)}</p>
        </div>

        {/* Ações realizadas + contexto */}
        <div>
          {acoesRealizadas.descricao.split('\n\n').map((p, i) => (
            <>
              <p key={i} style={{ color: 'var(--text-secondary)', margin: '24px 0' }}>
                {i === 2 ? highlightText(p) : p}
              </p>
              {i === 0 && (
                <div key="action-photos" style={{ display: 'flex', gap: 8, width: '100%', margin: '40px 0', alignItems: 'stretch' }}>
                  {[
                    '/acao-curitiba-1.jfif',
                    '/acao-curitiba-2.jfif',
                    '/acao-curitiba-3.jpg',
                    '/acao-curitiba-4.jpg',
                  ].map((src, j) => (
                    <div
                      key={j}
                      style={{
                        background: '#2a5fc4',
                        borderRadius: 10,
                        aspectRatio: '3/4',
                        flex: hoveredPhoto === j ? '1.6 1 0' : hoveredPhoto !== null ? '0.85 1 0' : '1 1 0',
                        transition: 'flex 0.35s cubic-bezier(.4,0,.2,1)',
                        cursor: 'pointer',
                        overflow: 'hidden',
                      }}
                      onMouseEnter={() => setHoveredPhoto(j)}
                      onMouseLeave={() => setHoveredPhoto(null)}
                    >
                      <img
                        src={asset(src)}
                        alt={`Ação Curitiba ${j + 1}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </>
          ))}

          <p style={{ color: 'var(--text-secondary)', margin: '24px 0' }}>
            {compromisso.resultadosContexto}
          </p>

          {/* Depoimento Rose Zanutto */}
          <div className="testimonial-card testimonial-card--horizontal">
            <div className="card-top">
              <img
                src={asset('/rose-zanutto.jpg')}
                alt="Rose Zanutto"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
            </div>
            <div className="quote-badge">"</div>
            <div className="card-bottom">
              <div>
                <p className="card-author-name" style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 400, color: '#EE686D', fontSize: 20 }}>{compromisso.citacaoAutor.split(',')[0]}</p>
                <p className="card-author-role">
                  {compromisso.citacaoAutor.split(',').slice(1).join(',').trim().split('\n').map((line, i) => (
                    <span key={i} style={{ display: 'block' }}>{line}</span>
                  ))}
                </p>
              </div>
              <p className="card-text">{compromisso.citacao}</p>
            </div>
          </div>

        </div>

        {/* Cabeçalho do calendário */}
        <div style={{ marginTop: 72, marginBottom: 40 }}>
          <h3 style={{ marginBottom: 20, fontSize: 32 }}>
            <span style={{ color: '#EE686D' }}>Próximas visitas </span>
            <span style={{ color: 'var(--text-primary)' }}>às unidades</span>
          </h3>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            A próxima visita está marcada para o mês de maio, em Lucas do Rio Verde, MT, no período de 25 a 29 de maio. O calendário das próximas ações presenciais está em fase de organização, os locais já estão definidos (confira na tabela abaixo). As datas serão divulgadas oportunamente pelos canais oficiais da BRF Prev e RH's locais.
          </p>
        </div>

        {/* ── Carousel de cards ── */}
        <div className="cal-carousel">
          <div className="cal-track-wrap">
            <div className="cal-track" ref={trackRef}>
              {compromisso.calendario.map((item, i) => (
                <div
                  key={i}
                  className="cal-card"
                  style={{ background: CAL_COLORS[i % 3] }}
                >
                  <div>
                    <p className="cal-month">{item.mes}</p>
                    <h3 className="cal-title">{item.unidade}</h3>
                  </div>
                  <div className="cal-footer">{item.datas}</div>
                  <span className="cal-category">{item.mes}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <div className="cal-nav">
            <button
              className="cal-arrow"
              onClick={() => navigate(-1)}
              disabled={idx === 0}
              aria-label="Anterior"
            >
              ←
            </button>

            <div className="cal-dots">
              {Array.from({ length: maxIdx + 1 }, (_, i) => (
                <button
                  key={i}
                  className={`cal-dot${i === idx ? ' active' : ''}`}
                  onClick={() => setIdx(i)}
                  aria-label={`Ir para posição ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="cal-arrow"
              onClick={() => navigate(1)}
              disabled={idx >= maxIdx}
              aria-label="Próximo"
            >
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
