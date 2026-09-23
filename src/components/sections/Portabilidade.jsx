import { useState } from 'react'
import { edition } from '../../data/edition.js'
import { asset } from '../../utils/assets.js'
import RentGrafico from './RentGrafico.jsx'

const { portabilidade: p } = edition

const NOTO = { fontFamily: "'Noto Sans', sans-serif" }
const TXT  = { ...NOTO, fontSize: 17, lineHeight: 1.8, color: 'var(--text-secondary)' }
const H3   = { fontFamily: "'Co Headline', sans-serif", fontWeight: 400, fontSize: 26, color: 'var(--text-primary)', margin: '0 0 20px' }

function BulletList({ itens }) {
  return (
    <ul style={{ paddingLeft: 0, listStyle: 'none', margin: '16px 0 0' }}>
      {itens.map((item, i) => (
        <li key={i} style={{ display: 'flex', gap: 10, padding: '8px 0', fontSize: 16, lineHeight: 1.7, color: 'var(--text-secondary)', ...NOTO }}>
          <span style={{ color: 'var(--brand-coral)', flexShrink: 0, fontSize: 13, fontWeight: 700, marginTop: 3 }}>✦</span>
          {item}
        </li>
      ))}
    </ul>
  )
}

// Slot reservado para uma foto ainda não definida — trocar o <div className="port-photo-placeholder">
// por um <img src={asset('/sua-imagem.jpg')} /> quando a imagem da edição estiver disponível.
function PhotoPlaceholder({ label }) {
  return (
    <div className="port-photo-placeholder">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.5" />
        <path d="M21 16l-5.5-5.5L4 20" />
      </svg>
      <span>{label}</span>
    </div>
  )
}

const STEP_COLORS = ['var(--brand-blue-dark)', 'var(--brand-blue)', 'var(--brand-blue-mid)', 'var(--brand-coral)', '#6B7280']

export default function Portabilidade() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <section className="section" id="portabilidade" data-screen-label="Portabilidade" style={{ background: '#fff' }}>
      <div className="wrap">

        {/* Cabeçalho */}
        <div className="section-head reveal">
          <span className="editorial-label" style={{ transform: 'none', whiteSpace: 'nowrap', maxWidth: 'none', minWidth: 158, fontSize: 13, padding: '11px 22px', boxShadow: 'none' }}>Portabilidade</span>
          <h2>
            {p.titulo.split('BRF Prev').map((part, i, arr) => (
              i < arr.length - 1
                ? <span key={i}>{part}<span style={{ color: 'var(--brand-coral)' }}>BRF Prev</span></span>
                : <span key={i}>{part}</span>
            ))}
          </h2>
          <p>{p.lead}</p>
        </div>

        {/* Painel de abertura */}
        <div className="port-hero reveal" style={{ marginBottom: 56 }}>
          <div className="port-hero-photo-wrap">
            <div className="port-photo">
              <img src={asset('/business-women.jpg')} alt="" />
            </div>
          </div>
          <div className="port-hero-text">
            {p.intro.map((txt, i) => (
              <p key={i}>{txt}</p>
            ))}
          </div>
        </div>

        {/* Como funciona na prática */}
        <div style={{ marginBottom: 56 }}>
          <h3 style={H3}>{p.comoFunciona.titulo}</h3>
          <div className="flow-band reveal d2">
            {p.comoFunciona.itens.map((item, i) => (
              <div key={i} className="flow-band-item">
                <span className="flow-band-num">{String(i + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Por que trazer sua previdência */}
        <div style={{ marginBottom: 56 }}>
          <h3 style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 400, fontSize: 28, color: 'var(--text-primary)', margin: '0 0 20px' }}>
            {p.porQueTrazer.titulo.split('BRF Prev').map((part, i, arr) => (
              i < arr.length - 1
                ? <span key={i}>{part}<span style={{ color: 'var(--brand-coral)' }}>BRF Prev</span></span>
                : <span key={i}>{part}</span>
            ))}
          </h3>
          {p.porQueTrazer.paragrafos.map((txt, i) => (
            <p key={i} style={{ ...TXT, marginBottom: 16 }}>{txt}</p>
          ))}

          {/* Comparativo de rentabilidade acumulada */}
          {(() => {
            const parsePct = (s) => parseFloat(String(s).replace('%', '').replace(',', '.'))
            const abertaVal = parsePct(p.porQueTrazer.destaque.aberta)
            const fechadaVal = parsePct(p.porQueTrazer.destaque.fechada)
            const diff = (fechadaVal - abertaVal).toFixed(1).replace('.', ',')
            return (
              <div className="port-stat-highlight reveal d2">
                <span className="psh-eyebrow">{p.porQueTrazer.destaque.label}</span>
                <div className="psh-big">+{diff}<span className="psh-unit">p.p.</span></div>
                <p className="psh-desc">
                  de rentabilidade acumulada a mais na <strong>previdência fechada</strong> frente à previdência aberta.
                </p>
                <div className="psh-source">
                  <span><strong>{p.porQueTrazer.destaque.fechada}</strong> {p.porQueTrazer.destaque.fechadaLabel}</span>
                  <span className="psh-dot" aria-hidden="true" />
                  <span><strong>{p.porQueTrazer.destaque.aberta}</strong> {p.porQueTrazer.destaque.abertaLabel}</span>
                  <span className="psh-dot" aria-hidden="true" />
                  <span>{p.porQueTrazer.destaque.fonte}</span>
                </div>
              </div>
            )
          })()}

          <RentGrafico />
        </div>

        {/* Comparativo */}
        <div style={{ marginBottom: 56 }}>
          <h3 style={H3}>{p.comparativo.titulo}</h3>
          <div className="port-compare">
            <div className="port-compare-head">
              <span className="a">{p.comparativo.colAberta}</span>
              <span className="b">{p.comparativo.colFechada}</span>
            </div>
            {p.comparativo.linhas.map(([neg, pos], i) => (
              <div className="port-compare-row" key={i}>
                <span className="port-compare-cell neg"><span className="port-compare-mark">✕</span>{neg}</span>
                <span className="port-compare-cell pos"><span className="port-compare-mark">✓</span>{pos}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quem pode + Regras */}
        <div className="port-info-grid" style={{ marginBottom: 56 }}>
          <div className="port-photo">
            <img src={asset('/person-texting-cell-phone.jpg')} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div className="port-info-card blue">
            <span className="ic">✓</span>
            <h3 style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 400, fontSize: 22, color: 'var(--text-primary)', margin: 0 }}>
              {p.quemPode.titulo}
            </h3>
            <BulletList itens={p.quemPode.itens} />
          </div>
          <div className="port-info-card coral">
            <span className="ic">!</span>
            <h3 style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 400, fontSize: 22, color: 'var(--text-primary)', margin: 0 }}>
              {p.regras.titulo}
            </h3>
            <BulletList itens={p.regras.itens} />
          </div>
        </div>

        {/* Como fazer — faixa de setas (chevrons) em degradê azul → coral */}
        <div style={{ marginBottom: 56 }}>
          <h3 style={{ ...H3, marginBottom: 20 }}>{p.comoFazer.titulo}</h3>
          <div className="chevron-steps">
            {p.comoFazer.passos.map((s, i) => {
              const isFirst = i === 0
              const isLast = i === p.comoFazer.passos.length - 1
              return (
                <div
                  key={s.n}
                  className={`chevron-step${isFirst ? ' first' : ''}${isLast ? ' last' : ''} reveal d2`}
                  style={{ '--step-color': STEP_COLORS[i % STEP_COLORS.length] }}
                >
                  <span className="chevron-num">{s.n}</span>
                  <p className="chevron-text">{s.texto}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: 56 }}>
          <h3 style={{ ...H3, marginBottom: 12 }}>{p.faq.titulo}</h3>
          <p style={{ ...TXT, marginBottom: 24 }}>{p.faq.intro}</p>
          <div className="port-faq">
            {p.faq.perguntas.map((qa, i) => (
              <div key={i} className={`port-faq-item${openFaq === i ? ' open' : ''}`}>
                <button
                  type="button"
                  className="port-faq-btn"
                  aria-expanded={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="port-faq-question">
                    {(() => {
                      const m = qa.p.match(/^(\d+\.)\s*(.*)$/)
                      return m ? <><span className="port-faq-num">{m[1]}</span> {m[2]}</> : qa.p
                    })()}
                  </span>
                  <span className="port-faq-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 4v16M4 12h16" />
                    </svg>
                  </span>
                </button>
                <div className="port-faq-panel">
                  <div><p>{qa.r}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Destaques */}
        <div style={{ marginBottom: 40 }}>
          <h3 style={{ fontFamily: "'Co Headline', sans-serif", fontWeight: 400, fontSize: 22, color: 'var(--text-primary)', margin: '0 0 20px' }}>
            {p.destaques.titulo}
          </h3>
          <div className="cu-analogias-grid" style={{ marginBottom: 0 }}>
            {p.destaques.itens.map((item, i) => (
              <div key={i} className="analogia-card">
                <p style={{ ...NOTO, fontSize: 15, color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6, textAlign: 'center' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fechamento */}
        <div className="port-cta">
          <div className="port-cta-bg">
            <img src={asset('/call-center-headset.jpg')} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div className="port-cta-overlay" />
          <div className="port-cta-content">
            <p>{p.fechamento}</p>
          </div>
        </div>

      </div>
    </section>
  )
}
