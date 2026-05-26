import { useState } from 'react'
import { edition } from '../../data/edition.js'

const { rentabilidade } = edition

const PLANOS = [
  { label: 'PLANO II — CLASSE BD',  plan: rentabilidade.linhas[0], meta: rentabilidade.linhas[3] },
  { label: 'PLANO II — CLASSE CD',  plan: rentabilidade.linhas[1], meta: rentabilidade.linhas[3] },
  { label: 'PLANO III',             plan: rentabilidade.linhas[2], meta: rentabilidade.linhas[3] },
  { label: 'PLANO FAF',             plan: rentabilidade.linhas[4], meta: rentabilidade.linhas[5] },
  { label: 'PLANO FAMÍLIA',         plan: rentabilidade.linhas[6], meta: rentabilidade.linhas[7] },
]

const COLS = [...rentabilidade.meses, '2026', '12 Meses', '24 Meses', '36 Meses']

function rowValues(linha) {
  return [linha.nome, ...linha.meses, linha.acum, linha.p12m, linha.p24m, linha.p36m]
}

const BTN = {
  background: '#8b8fe8', color: '#fff', borderRadius: 8, padding: '6px 10px',
  fontFamily: "'Co Headline', sans-serif", fontWeight: 400,
  fontSize: 12, display: 'flex', alignItems: 'center',
  justifyContent: 'center', textAlign: 'center', lineHeight: 1.4, textTransform: 'uppercase',
  width: '100%', minHeight: 40,
}

const NOTO = { fontFamily: "'Noto Sans', sans-serif" }
const TD = { padding: '6px 10px', textAlign: 'center', color: '#222', fontSize: 13, verticalAlign: 'middle', ...NOTO }
const TD_FIRST = { ...TD, width: '18%' }
const TD_FIRST_TEXT = { ...TD_FIRST, textAlign: 'left', paddingLeft: 34 }
const BORDER_DOTTED = { borderBottom: '1.5px dotted #ccc' }

export default function RentCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(c => Math.max(0, c - 1))
  const next = () => setCurrent(c => Math.min(PLANOS.length - 1, c + 1))

  const p = PLANOS[current]

  return (
    <div style={{ paddingTop: 40 }}>
      {/* Slide label */}
      <p style={{ textAlign: 'center', fontFamily: "'Co Headline', sans-serif", fontWeight: 400, fontSize: 20, color: '#555', marginBottom: 20 }}>
        {p.label}
      </p>

      {/* Tabela */}
      <div className="rent-carousel-wrap">
        <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
          <tbody>
            {/* Header rentabilidade */}
            <tr>
              <td style={TD_FIRST}><div style={{ ...BTN, justifyContent: 'flex-start', textAlign: 'left', paddingLeft: 24 }}>Rentabilidade<br />e Meta</div></td>
              {COLS.map((c, i) => <td key={i} style={TD}><div style={BTN}>{c}</div></td>)}
            </tr>
            {/* Plano */}
            <tr style={BORDER_DOTTED}>
              {rowValues(p.plan).map((v, i) => (
                <td key={i} style={{ ...(i === 0 ? TD_FIRST_TEXT : TD), fontWeight: 700, ...BORDER_DOTTED }}>{i === 0 ? `Plano ${v}` : v}</td>
              ))}
            </tr>
            {/* Meta */}
            <tr>
              {rowValues(p.meta).map((v, i) => (
                <td key={i} style={{ ...(i === 0 ? TD_FIRST_TEXT : TD), color: '#444', ...BORDER_DOTTED }}>{v}</td>
              ))}
            </tr>

            {/* Spacer */}
            <tr><td colSpan={9} style={{ padding: '4px 0' }} /></tr>

            {/* Header índices */}
            <tr>
              <td style={TD_FIRST}><div style={{ ...BTN, justifyContent: 'flex-start', textAlign: 'left', paddingLeft: 24 }}>Índices<br />Financeiros</div></td>
              {COLS.map((c, i) => <td key={i} style={TD}><div style={BTN}>{c}</div></td>)}
            </tr>
            {/* Índices */}
            {rentabilidade.indices.map((idx, i) => (
              <tr key={i}>
                {rowValues(idx).map((v, j) => (
                  <td key={j} style={{
                    ...(j === 0 ? TD_FIRST_TEXT : TD),
                    ...(i < rentabilidade.indices.length - 1 ? BORDER_DOTTED : {}),
                    color: '#333',
                  }}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: '#666', padding: '5px 0 0 34px' }}>(em %)</p>
      </div>

      {/* Navegação */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 12, position: 'relative', top: -22 }}>
        <button
          onClick={prev} disabled={current === 0}
          style={{ background: '#8b8fe8', color: '#fff', border: 'none', borderRadius: 8, padding: '6px 16px', fontSize: 12, cursor: current === 0 ? 'default' : 'pointer', opacity: current === 0 ? 0.35 : 1 }}
        >← anterior</button>

        <div style={{ display: 'flex', gap: 7 }}>
          {PLANOS.map((_, i) => (
            <span key={i} onClick={() => setCurrent(i)} style={{
              display: 'inline-block', width: 9, height: 9, borderRadius: '50%',
              background: i === current ? '#8b8fe8' : '#ccc',
              cursor: 'pointer',
              transform: i === current ? 'scale(1.3)' : 'scale(1)',
              transition: 'transform 0.3s, background 0.3s',
            }} />
          ))}
        </div>

        <button
          onClick={next} disabled={current === PLANOS.length - 1}
          style={{ background: '#8b8fe8', color: '#fff', border: 'none', borderRadius: 8, padding: '6px 16px', fontSize: 12, cursor: current === PLANOS.length - 1 ? 'default' : 'pointer', opacity: current === PLANOS.length - 1 ? 0.35 : 1 }}
        >próximo →</button>
      </div>
    </div>
  )
}



